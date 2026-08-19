import Image from 'next/image';
import { impactExample } from '@content/ru/home';

/**
 * «Пример работы» — блок t195: текст слева, скриншот Search Console справа.
 * Отступы секции 60px, у текста сверху ещё 30px, у картинки радиус 4px.
 */
export function ImpactExample() {
  return (
    <section className="py-10 sm:py-[60px]">
      <div className="px-page mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2">
        <p className="text-[17px] leading-[1.55] sm:text-xl md:pt-[30px]">
          <strong className="font-bold text-accent-bright">
            {impactExample.label}
          </strong>{' '}
          {impactExample.text}
        </p>

        <Image
          src={impactExample.image}
          alt="Рост трафика из Google: 12,8 тыс. кликов и 474 тыс. показов за период"
          width={1200}
          height={600}
          className="h-auto w-full rounded-[4px]"
        />
      </div>
    </section>
  );
}
