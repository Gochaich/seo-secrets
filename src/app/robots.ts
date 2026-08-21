import type { MetadataRoute } from 'next';
import { isIndexingAllowed, site } from '@/lib/site';

/**
 * robots.txt. Next.js отдаёт его по /robots.txt из этого файла.
 *
 * Пока индексация не разрешена, закрываем сайт целиком: копия на тестовом
 * домене, попавшая в индекс, конкурирует с боевым сайтом своим же контентом.
 * Условия разрешения — в isIndexingAllowed(): нужен и флаг, и не-превью.
 *
 * Правила Tilda (reference/tilda-robots.txt) сюда НЕ переносятся —
 * там закрыты её служебные адреса, которых у нас нет:
 * /tilda/form*, /tilda/rec*, /page71407787.html, /header, /footer.
 * Переносить их значило бы тащить мусор в новый robots.txt.
 *
 * Два адреса из того файла закрыты осмысленно — /ai-seo/ и /error/.
 * Страниц с такими адресами в сборке нет, и запрещать несуществующее
 * незачем. Если /ai-seo/ понадобится перенести — она вернётся сюда.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isIndexingAllowed()) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
