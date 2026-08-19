import Image from 'next/image';
import { whatsappWithText } from '@/lib/site';
import { hero } from '@content/ru/home';

/**
 * Первый экран. Размеры взяты из CSS текущего сайта, а не на глаз:
 *   .hero__inner { max-width:1200px; padding:180px 20px; grid 1.1fr 0.9fr; gap:32px }
 *   .hero__title { font-size:clamp(28px,5vw,50px); line-height:1.2; margin-bottom:20px }
 *   .hero__lead  { font-size:clamp(15px,2.5vw,18px); line-height:1.6; max-width:600px }
 *   .hero__blob  { width:min(520px,100%); drop-shadow(0 20px 80px rgba(0,180,255,.25)) }
 * На мобильных: одна колонка, текст по центру, картинка скрыта, кнопка 220px.
 * Верхний отступ уменьшен по просьбе владельца: 180 → 90 → 10px на десктопе
 * (мобильный 140 → 70 → 35). На десктопе колонка с текстом центрируется
 * по высокой картинке, поэтому заголовок и так опускается на ~70px ниже
 * границы секции — весь видимый зазор до шапки набирается из них.
 */
export function Hero() {
  return (
    <section className="overflow-hidden font-inter">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-5 pt-[35px] pb-[60px] md:grid-cols-[1.1fr_0.9fr] md:pt-[10px] md:pb-[180px]">
        <div className="text-center md:text-left">
          <h1 className="mb-5 text-[clamp(28px,5vw,50px)] leading-[1.2] font-bold">
            {hero.title}
          </h1>

          <p className="mx-auto mb-8 max-w-[600px] text-[clamp(15px,2.5vw,18px)] leading-[1.6] text-white/80 md:mx-0">
            {hero.lead[0]}
            <br />
            {hero.lead[1]}
          </p>

          <a
            href={whatsappWithText}
            target="_blank"
            rel="noopener"
            className="inline-block transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={hero.cta.image}
              alt={hero.cta.label}
              width={240}
              height={45}
              priority
              className="mx-auto h-auto w-[220px] md:mx-0 md:w-[240px]"
            />
          </a>
        </div>

        <div aria-hidden className="hidden justify-center md:flex">
          <Image
            src={hero.image}
            alt=""
            width={520}
            height={520}
            priority
            className="h-auto w-full max-w-[520px] drop-shadow-[0_20px_80px_rgba(0,180,255,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
