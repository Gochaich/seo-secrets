/**
 * Снимок текущего сайта на Tilda: разметка, стили и скриншоты.
 *
 * Нужен затем, чтобы собирать страницы по фактическим значениям, а не
 * на глаз по присланной картинке. Из разметки достаются точные размеры,
 * цвета и шрифты; скриншот показывает, как это выглядит вместе.
 *
 * Запускается в GitHub Actions — у среды агента нет выхода в интернет.
 * Всё, что скачано, ложится в reference/ и после переезда удаляется.
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import pages from '../reference/pages.json' with { type: 'json' };

const BASE = 'https://seo-secrets.kz';
const root = resolve(import.meta.dirname, '..');
const only = process.argv[2];

const targets = only ? pages.filter((p) => p.slug === only) : pages;
if (!targets.length) {
  console.error(`Страница "${only}" не найдена в reference/pages.json`);
  process.exit(1);
}

for (const dir of ['html', 'css', 'screens']) {
  await mkdir(resolve(root, 'reference', dir), { recursive: true });
}

/**
 * Открыть страницу.
 *
 * Ждём только загрузку документа. Условие networkidle здесь не работает:
 * на страницах с плеерами YouTube сеть не затихает никогда — плеер тянет
 * запросы постоянно, и ожидание упирается в таймаут. Именно так упали
 * /otzyvy/ и /media/ в первом прогоне.
 *
 * Недостающее добираем прокруткой и коротким ожиданием: если load
 * не наступит, снимаем что есть, а не роняем всю страницу.
 */
async function open(page, url) {
  const res = await page.goto(url, {
    waitUntil: 'domcontentloaded',
    timeout: 45_000,
  });
  await page.waitForLoadState('load', { timeout: 20_000 }).catch(() => {});
  return res;
}

/** Прокрутка до низа: без неё не сработает ленивая загрузка картинок */
async function scrollToBottom(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
}

const browser = await chromium.launch();
const saved = new Set();
let failed = 0;

for (const { path, slug } of targets) {
  const page = await browser.newPage({
    viewport: { width: 1466, height: 1000 },
    deviceScaleFactor: 1,
  });

  try {
    // Вторая попытка на случай разовой сетевой заминки
    let res = null;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        res = await open(page, BASE + path);
        break;
      } catch (e) {
        if (attempt === 2) throw e;
        console.warn('  повтор после ошибки:', e.message.split('\n')[0]);
      }
    }

    if (!res || !res.ok()) {
      throw new Error(`ответ ${res ? res.status() : 'нет'}`);
    }

    await writeFile(
      resolve(root, 'reference/html', `${slug}.html`),
      await page.content(),
    );

    // Подключённые стили — в них лежат размеры и цвета блоков
    const sheets = await page.evaluate(() =>
      [...document.querySelectorAll('link[rel="stylesheet"]')]
        .map((l) => l.href)
        .filter((h) => h.startsWith('http')),
    );

    for (const href of sheets) {
      const name = href.split('/').pop().split('?')[0];
      if (saved.has(name)) continue;
      const css = await page.evaluate(
        (u) => fetch(u).then((r) => r.text()),
        href,
      );
      await writeFile(resolve(root, 'reference/css', name), css);
      saved.add(name);
    }

    await scrollToBottom(page);
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: resolve(root, 'reference/screens', `${slug}.jpg`),
      fullPage: true,
      type: 'jpeg',
      quality: 72,
    });

    console.log('✓', path);
  } catch (e) {
    console.warn('✗', path, e.message);
    failed++;
  } finally {
    await page.close();
  }
}

/**
 * Карта сайта и robots.txt с боевого домена.
 *
 * Нужны, чтобы сверить свой список адресов с тем, что Tilda отдаёт
 * поисковикам, — и увидеть страницу, о которой мы не знали.
 *
 * Обычным fetch sitemap.xml не берётся: Tilda отвечает на него 403.
 * Через страницу браузера — отдаёт: запрос уходит с тем же контекстом,
 * что и обычная навигация. Поэтому качаем здесь, а не в fetch-assets.
 */
if (!only) {
  const page = await browser.newPage();
  for (const name of ['sitemap.xml', 'robots.txt']) {
    try {
      const res = await open(page, `${BASE}/${name}`);
      if (!res || !res.ok()) throw new Error(`ответ ${res ? res.status() : 'нет'}`);
      const text = await page.evaluate(() => document.documentElement.outerHTML);
      await writeFile(resolve(root, 'reference', `tilda-${name}`), text);
      console.log('✓', `/${name}`);
    } catch (e) {
      console.warn('✗', `/${name}`, e.message);
      failed++;
    }
  }
  await page.close();
}

await browser.close();
console.log(`\nГотово: ${targets.length - failed} из ${targets.length}`);
if (failed) process.exitCode = 1;
