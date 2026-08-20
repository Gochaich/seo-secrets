import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { pageMeta } from '@content/ru/meta';

/**
 * Собирает метаданные страницы из карты content/ru/meta.ts.
 *
 * Одна точка сборки на весь сайт: title, description, canonical и блок
 * для соцсетей задаются здесь, а страница только называет свой путь.
 * Иначе четырнадцать generateMetadata разъедутся на первой же правке.
 *
 * Canonical пишем всегда, даже пока индексация выключена. Он не «включает»
 * страницу в индекс — он говорит, какой адрес считать главным, если на неё
 * пришли с меткой рекламной кампании или из соцсети с ?utm_source. Без него
 * такие адреса растаскивают вес одной страницы по десятку дублей.
 */
export function buildMetadata(path: string): Metadata {
  const meta = pageMeta(path);
  const url = `${site.url}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: site.name,
      locale: 'ru_RU',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [{ url: `${site.url}${meta.ogImage}` }],
    },
    /*
     * На оригинале разметки для Twitter нет вообще, и ссылка там
     * разворачивается в мелкую карточку с обрезанной картинкой.
     * summary_large_image — одна строка, которая чинит превью
     * в X и в Slack; тексты и картинка берутся те же, из og.
     */
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [`${site.url}${meta.ogImage}`],
    },
  };
}
