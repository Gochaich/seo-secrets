import { VideoEmbed } from '@/components/ui/video-embed';
import { testimonials, testimonialsTitle } from '@content/ru/home';

/**
 * «Видео-отзывы клиентов»: три ролика с подписями.
 *
 * Содержимое 1160px, зазор 40px — ролик выходит 360px.
 *
 * Плееры вставлены заглушкой: показываем обложку, а сам плеер YouTube
 * подставляем по нажатию. См. VideoEmbed — там объяснено, почему одного
 * loading="lazy" тут было мало.
 */
export function Testimonials() {
  return (
    <section className="py-section">
      <div className="mx-auto w-full max-w-[1200px] px-page">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {testimonialsTitle}
        </h2>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-[70px] lg:grid-cols-3 lg:gap-10">
          {testimonials.map((item) => (
            <li key={item.youtubeId}>
              <VideoEmbed
                youtubeId={item.youtubeId}
                title={`Видео-отзыв: ${item.name}`}
              />

              <h3 className="mt-5 text-[18px] leading-[1.4] font-bold sm:text-[20px]">
                {item.name}
              </h3>
              <p className="text-muted mt-2 text-[15px] leading-[1.55]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
