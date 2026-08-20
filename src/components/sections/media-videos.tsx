import { mediaVideos } from '@content/ru/pages';

/**
 * Ряд из трёх роликов на странице «Медиа».
 *
 * На текущем сайте это зерокод с абсолютным позиционированием: три плеера
 * 367x203 в ряд. Здесь то же самое сеткой — пропорция 16:9 совпадает
 * с исходной с точностью до пикселя, а на узких экранах ролики встают
 * друг под друга сами, без второго набора координат.
 *
 * Плееры вставлены обычными iframe через youtube-nocookie, как в блоках
 * «СМИ о нас» и «Видео-отзывы». Про заглушку вместо iframe — docs/AUDIT.md.
 */
export function MediaVideos() {
  return (
    <section className="py-section">
      <ul className="mx-auto grid w-full max-w-[1200px] gap-8 px-page sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {mediaVideos.map((video) => (
          <li key={video.youtubeId} className="aspect-video overflow-hidden rounded-[4px]">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
