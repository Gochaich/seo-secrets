import { testimonials, testimonialsTitle } from '@content/ru/home';

/**
 * «Видео-отзывы клиентов»: три ролика с подписями.
 *
 * Содержимое 1160px, зазор 40px — ролик выходит 360px.
 *
 * Плееры, как и в блоке «СМИ о нас», вставлены обычными iframe с
 * loading="lazy" и через youtube-nocookie. Вместе с тем блоком на главной
 * теперь шесть плееров — тем важнее заглушка вместо iframe, см. docs/AUDIT.md.
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
              <div className="aspect-video overflow-hidden rounded-[4px]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                  title={`Видео-отзыв: ${item.name}`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

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
