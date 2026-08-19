import Image from 'next/image';
import { mediaArticles, mediaTitle, mediaVideos } from '@content/ru/home';

/**
 * «СМИ о нас»: три ролика с YouTube и три карточки публикаций.
 *
 * Ширина содержимого 1180px, зазор 36px — карточка выходит 369px.
 *
 * Ролики вставлены обычными iframe, как на текущем сайте, но с loading="lazy"
 * и через youtube-nocookie: без ленивой загрузки три плеера тянут около
 * полутора мегабайт скриптов и портят метрики страницы, которую мы же
 * и продвигаем. Полностью убрать вес можно только заглушкой вместо плеера —
 * это отдельная задача, см. docs/AUDIT.md.
 */
export function Media() {
  return (
    <section className="relative py-10 md:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] -left-[440px] h-[700px] w-[600px] rounded-full bg-[radial-gradient(circle,var(--color-yellow)_0%,var(--color-yellow)_30%,var(--color-green)_60%,transparent_80%)] opacity-85 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[460px] -bottom-10 h-[1000px] w-[620px] rounded-[50%] bg-[radial-gradient(ellipse,var(--color-accent-bright)_0%,var(--color-accent)_44%,transparent_76%)] opacity-90 blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1220px] px-5">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {mediaTitle}
        </h2>

        <ul className="mt-[70px] grid gap-9 md:grid-cols-3">
          {mediaVideos.map((video) => (
            <li
              key={video.youtubeId}
              className="aspect-video overflow-hidden rounded-[4px]"
            >
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

        <ul className="mt-[70px] grid gap-9 md:grid-cols-3">
          {mediaArticles.map((article) => (
            <li
              key={article.href}
              className="bg-surface flex flex-col overflow-hidden rounded-2xl"
            >
              <Image
                src={article.cover}
                alt=""
                aria-hidden
                width={369}
                height={300}
                className="aspect-[369/300] w-full object-cover"
              />

              <div className="flex flex-1 flex-col px-6 pt-7 pb-7">
                <h3 className="text-[17px] leading-[1.6] font-bold">
                  {article.title}
                </h3>
                <p className="text-muted mt-3 text-[13px] leading-[1.55]">
                  {article.description}
                </p>

                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener"
                  className="rounded-btn border-brand-cool text-muted mt-6 inline-flex self-start px-6 py-2.5 text-[13px] transition-opacity hover:opacity-80"
                >
                  Читать больше
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
