import { VideoEmbed } from '@/components/ui/video-embed';
import { mediaVideos } from '@content/ru/pages';

/**
 * Ряд из трёх роликов на странице «Медиа».
 *
 * На текущем сайте это зерокод с абсолютным позиционированием: три плеера
 * 367x203 в ряд. Здесь то же самое сеткой — пропорция 16:9 совпадает
 * с исходной с точностью до пикселя, а на узких экранах ролики встают
 * друг под друга сами, без второго набора координат.
 *
 * Плееры вставлены заглушкой, как в блоках «СМИ о нас» и «Видео-отзывы»:
 * обложка вместо плеера, плеер по нажатию. См. VideoEmbed.
 */
export function MediaVideos() {
  return (
    <section className="py-section">
      <ul className="mx-auto grid w-full max-w-[1200px] gap-8 px-page sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {mediaVideos.map((video) => (
          <li key={video.youtubeId}>
            <VideoEmbed youtubeId={video.youtubeId} title={video.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
