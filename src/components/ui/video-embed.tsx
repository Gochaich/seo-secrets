'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Ролик YouTube с отложенной загрузкой плеера.
 *
 * Обычная вставка iframe тянет около мегабайта скриптов и стилей YouTube
 * на каждый ролик — ещё до того, как посетитель решил что-то смотреть.
 * На главной таких роликов шесть. Атрибут loading="lazy" тут почти не
 * помогает: он откладывает загрузку до подхода к экрану, а дальше плеер
 * всё равно грузится целиком, стоит просто доскроллить до блока.
 *
 * Поэтому здесь заглушка: обложка ролика и кнопка воспроизведения. Настоящий
 * плеер подставляется только по нажатию — и сразу с autoplay, чтобы нажатие
 * было одно, а не два. До нажатия страница не знает про YouTube ничего.
 *
 * Обложки лежат в public/images/video и выгружаются тем же экшном, что и
 * остальные картинки: сайт не должен зависеть от чужого CDN.
 *
 * Разметку кнопки повторяем как у YouTube — красный прямоугольник со
 * скруглением и белый треугольник: посетитель узнаёт её без подписи.
 */
export function VideoEmbed({
  youtubeId,
  title,
  className = '',
}: {
  youtubeId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`aspect-video overflow-hidden rounded-[4px] ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Смотреть: ${title}`}
      className={`group relative block aspect-video w-full overflow-hidden rounded-[4px] bg-black ${className}`}
    >
      <Image
        src={`/images/video/${youtubeId}.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        /*
         * Обложка YouTube в формате 16:9 приходит с чёрными полосами сверху
         * и снизу — кадр внутри 4:3. object-cover с увеличением обрезает
         * полосы, оставляя тот же кадр, что показывает сам YouTube.
         */
        className="scale-[1.35] object-cover transition-transform duration-300 group-hover:scale-[1.4]"
      />

      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 flex h-[48px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[12px] bg-black/70 transition-colors duration-200 group-hover:bg-[#f00]"
      >
        <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[17px] border-y-transparent border-l-white" />
      </span>
    </button>
  );
}
