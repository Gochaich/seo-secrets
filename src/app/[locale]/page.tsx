import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

/**
 * Временная страница-заглушка на время этапов 2–3.
 * Удаляется на этапе 4, когда на её место встанет настоящая главная.
 */

const done = [
  'Next.js 16 + TypeScript + Tailwind 4, сборка проходит',
  'Локализация: русский без префикса в URL, задел под казахский на /kk/',
  'Токены оформления в одном файле — цвета и шрифты не расползутся по компонентам',
  'Индексация тестового домена закрыта, включается одной переменной окружения',
  'Заготовки переменных окружения для базы, Telegram, почты и CRM',
];

const next = [
  'Этап 3 — дизайн-система: фирменные цвета, шрифты, библиотека блоков',
  'Этап 4 — сборка страниц и перенос текстов с Тильды один в один',
  'Этап 5 — воронка заявок: форма, база, Telegram, письмо клиенту',
];

const loop = [
  'Пишете задачу текстом в диалоговом окне',
  'ИИ правит код и открывает pull request',
  'Vercel собирает превью и присылает ссылку',
  'Смотрите, уточняете словами, мержите — правки на тестовом домене',
];

export default async function StagingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('staging');

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-4">
        <span className="w-fit rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs tracking-widest text-muted uppercase">
          {t('badge')}
        </span>
        <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance">
          {t('title')}
        </h1>
        <p className="max-w-xl text-lg text-muted">{t('lede')}</p>
      </header>

      <Section title={t('statusTitle')} items={done} marker="✓" />
      <Section title={t('nextTitle')} items={next} />
      <Section title={t('loopTitle')} items={loop} ordered />
    </main>
  );
}

function Section({
  title,
  items,
  marker,
  ordered = false,
}: {
  title: string;
  items: string[];
  marker?: string;
  ordered?: boolean;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="border-t border-border pt-4 text-sm font-semibold tracking-wide text-muted uppercase">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-base">
            <span
              aria-hidden
              className="pt-0.5 font-mono text-sm text-accent tabular-nums"
            >
              {marker ?? (ordered ? `${index + 1}.` : '—')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
