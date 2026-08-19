// Скачивает все изображения с Tilda CDN в /public.
// Запуск: npm run fetch:assets
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import map from './assets.map.json' with { type: 'json' };

const root = resolve(import.meta.dirname, '..');
let ok = 0, skipped = 0, failed = [];

for (const [url, rel] of map) {
  const dest = resolve(root, rel);
  try { await access(dest); skipped++; continue; } catch {}
  try {
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0', referer: 'https://seo-secrets.kz/' } });
    if (!res.ok) throw new Error(String(res.status));
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log('✓', rel);
    ok++;
  } catch (e) {
    failed.push([url, rel, e.message]);
    console.warn('✗', rel, e.message);
  }
}

console.log(`\nГотово: ${ok} скачано, ${skipped} уже были, ${failed.length} с ошибкой`);
if (failed.length) process.exitCode = 1;
