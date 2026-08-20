import Image from 'next/image';

/**
 * Первый экран внутренних страниц: заголовок, подзаголовок, кружок со
 * стрелкой вниз и два фоновых пятна по краям.
 *
 * На текущем сайте это один и тот же блок с классом .ssk-cases-hero —
 * меняются только тексты и картинки пятен, поэтому здесь он один на все
 * страницы. Геометрия пятен приходит из страницы: у «О нас» и «Команды»
 * они разного размера и стоят по-разному, и это единственное, чем блоки
 * отличаются на десктопе.
 *
 * Значения взяты из CSS исходного сайта: отступы секции 420px сверху
 * и 60px снизу, содержимое поднято на 80px, текст ограничен 650px.
 * Верхний отступ уменьшен вдвое по просьбе владельца (420 → 210,
 * мобильный 220 → 110): зазор до шапки был заметно больше нужного.
 *
 * Кружок со стрелкой сделан обычной ссылкой на якорь: плавность даёт
 * scroll-behavior в стилях, обработчик на клике не нужен — на оригинале
 * ради этого висит отдельный скрипт.
 *
 * Заголовок набран Montserrat, хотя на текущем сайте у него прописан Arial.
 * Это единственное отступление: в проекте шрифты берутся из токенов,
 * иначе на сайте заводится третья гарнитура ради одного заголовка.
 */
export type HeroGlow = {
  src: string;
  /**
   * Положение и размер коробки под пятно. Проценты и размеры перенесены
   * из CSS исходного сайта: до 1024px коробка 380x380, дальше — своя
   * у каждой страницы. Исходная десктопная геометрия включается с lg,
   * а не с md: на планшете пятна в полный размер забивали текст, потому
   * что первый экран у нас вдвое ниже оригинального.
   */
  className: string;
};

export function PageHero({
  title,
  text,
  scrollTo,
  glows,
}: {
  title: string;
  text: string;
  scrollTo: string;
  glows: readonly [HeroGlow, HeroGlow];
}) {
  return (
    <section className="px-page relative overflow-hidden pt-[110px] pb-[60px] md:pt-[210px]">
      {/*
       * На оригинале пятно — это background-size:contain в коробке заданного
       * размера, а сам PNG другой пропорции: синее на «Команде», например,
       * 440x613 в коробке 850x600. Поэтому здесь коробка и object-contain,
       * а не картинка со своими размерами: иначе она растягивается по
       * собственной пропорции и на узких экранах наползает на текст.
       *
       * object-left-top, а не по центру: background-position на оригинале
       * не задан, а его значение по умолчанию — левый верхний угол. С
       * центрированием синее пятно «Команды» уезжало на 200px за правый
       * край экрана и от него оставался один хвост.
       */}
      {glows.map((glow) => (
        <div
          key={glow.src}
          aria-hidden
          className={`pointer-events-none absolute -translate-y-1/2 ${glow.className}`}
        >
          <Image
            src={glow.src}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 850px, 380px"
            className="object-contain object-left-top opacity-95"
          />
        </div>
      ))}

      <div className="relative mx-auto max-w-[1100px] -translate-y-10 text-center md:-translate-y-20">
        <h1 className="mb-2.5 text-[38px] font-bold md:text-[60px]">{title}</h1>
        <p className="text-muted mx-auto mb-10 max-w-[650px] text-[15px] leading-[1.6] md:text-lg">
          {text}
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
