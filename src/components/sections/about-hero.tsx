import Image from 'next/image';
import { aboutHero } from '@content/ru/about';

/**
 * Первый экран страницы «О нас».
 *
 * Значения взяты из CSS текущего сайта: отступы секции 420px сверху
 * и 60px снизу, содержимое поднято на 80px, текст ограничен 650px.
 * Верхний отступ уменьшен вдвое по просьбе владельца (420 → 210,
 * мобильный 220 → 110): зазор до шапки был заметно больше нужного.
 *
 * Фоновые пятна — те же PNG, что и на оригинале: синее слева 590x520,
 * оранжевое справа 520x520. Здесь у нас есть исходники, поэтому рисовать
 * их градиентами, как в блоках главной, не нужно.
 *
 * Кружок со стрелкой прокручивает к следующему блоку. Сделан обычной
 * ссылкой на якорь: плавность даёт scroll-behavior в стилях, обработчик
 * на клике не нужен — на оригинале для этого висит отдельный скрипт.
 *
 * Заголовок набран Montserrat, хотя на текущем сайте у него прописан Arial.
 * Это единственное отступление: в проекте шрифты берутся из токенов,
 * иначе на сайте заводится третья гарнитура ради одного заголовка.
 */
export function AboutHero({ scrollTo }: { scrollTo: string }) {
  return (
    <section className="relative overflow-hidden px-5 pt-[110px] pb-[60px] md:pt-[210px]">
      <Image
        src="/images/decor/about-glow-blue.png"
        alt=""
        aria-hidden
        width={590}
        height={520}
        priority
        className="pointer-events-none absolute top-[36%] -left-[28%] w-[380px] max-w-none -translate-y-1/2 opacity-95 md:top-[60%] md:-left-[8%] md:w-[590px]"
      />
      <Image
        src="/images/decor/about-glow-orange.png"
        alt=""
        aria-hidden
        width={520}
        height={520}
        priority
        className="pointer-events-none absolute top-[66%] -right-[28%] w-[380px] max-w-none -translate-y-1/2 opacity-95 md:top-[50%] md:-right-[8%] md:w-[520px]"
      />

      <div className="relative mx-auto max-w-[1100px] -translate-y-10 text-center md:-translate-y-20">
        <h1 className="mb-2.5 text-[38px] font-bold md:text-[60px]">
          {aboutHero.title}
        </h1>
        <p className="text-muted mx-auto mb-10 max-w-[650px] text-[15px] leading-[1.6] md:text-lg">
          {aboutHero.text}
        </p>

        <a
          href={`#${scrollTo}`}
          aria-label="Прокрутить вниз к следующему блоку"
          className="mb-[22px] inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-white/80 transition-colors hover:border-white md:mb-2.5 md:h-14 md:w-14"
        >
          <span
            aria-hidden
            className="-mt-1 block h-4 w-4 -rotate-45 border-b-2 border-l-2 border-white"
          />
        </a>
      </div>
    </section>
  );
}
