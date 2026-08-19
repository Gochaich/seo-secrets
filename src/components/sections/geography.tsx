import Image from 'next/image';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { geography } from '@content/ru/home';

/**
 * «География наших проектов»: карта мира одним SVG и кнопка под ней.
 *
 * Карта на текущем сайте — 952px шириной, уже основной сетки в 1200px.
 *
 * next/image сам отдаёт SVG без оптимизации, если путь заканчивается на .svg,
 * поэтому dangerouslyAllowSVG в конфиге не нужен.
 */
export function Geography() {
  return (
    <section className="py-section">
      <div className="mx-auto w-full max-w-[992px] px-page">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {geography.title}
        </h2>

        <Image
          src={geography.image}
          alt={`Карта проектов агентства: ${geography.countries.join(', ')}`}
          width={952}
          height={490}
          className="mt-12 h-auto w-full sm:mt-20"
        />

        <div className="mt-8 flex justify-center sm:mt-11">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
