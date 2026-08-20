import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { pagesMeta } from '@content/ru/meta';

/**
 * sitemap.xml. Next.js отдаёт его по /sitemap.xml из этого файла.
 *
 * Список берётся из той же карты, что и метаданные страниц, — поэтому
 * страница не может попасть в карту сайта, не имея заголовка, и наоборот.
 * Добавили страницу в content/ru/meta.ts — она появилась и здесь.
 *
 * lastModified намеренно нет. Проставить сюда дату сборки значит каждый
 * деплой сообщать поисковику, что изменились все страницы разом, — так
 * этому полю перестают верить. Настоящую дату правки контента взять
 * пока неоткуда: страницы лежат в коде, а не в CMS.
 *
 * priority и changeFrequency тоже опущены: Google их игнорирует
 * с 2023 года, а Яндекс использует как слабую подсказку. Городить
 * ради этого лишние поля незачем.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return pagesMeta.map((page) => ({
    url: `${site.url}${page.path}`,
  }));
}
