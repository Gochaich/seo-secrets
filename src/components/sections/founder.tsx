import Image from 'next/image';
import { WhatsAppIcon } from '@/components/icons/social';
import { whatsappWithText } from '@/lib/site';
import { founder } from '@content/ru/home';

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-cyan h-[25px] w-[25px] shrink-0"
    >
      <path
        d="M3 12.5 9 19 21 5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * «Гайдар Максим - основатель агентства SEO Secrets»: текст слева, фото справа.
 *
 * Ширина содержимого 1050px, а не 1200px, как в остальных блоках: на текущем
 * сайте этот блок собран в зерокоде и заметно уже. Фото 408x552.
 *
 * Галочки выровнены по НИЖНЕЙ строке пункта (items-end) — так же, как на Tilda:
 * у четвёртого пункта, который занимает две строки, галочка стоит у второй.
 */
export function Founder() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/*
        Синее пятно у правого края. На Tilda это PNG, поставленный абсолютными
        координатами; здесь — градиент: не тянет файл с CDN и не пикселится.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-52 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-70 blur-[70px]"
      />

      <div className="relative mx-auto grid max-w-[1090px] items-start gap-y-10 px-5 md:grid-cols-[1fr_408px] md:gap-x-16">
        <div>
          <h2 className="text-[clamp(28px,4vw,36px)] leading-[1.25] font-bold">
            {founder.title}
          </h2>

          <p className="text-muted mt-6 max-w-[475px] text-[15px] leading-[1.6]">
            {founder.text}
          </p>

          <ul className="mt-10 flex flex-col gap-[30px]">
            {founder.facts.map((fact) => (
              <li key={fact.text} className="flex items-end gap-5">
                <Check />
                <p className="text-[15px] leading-[1.5]">
                  {fact.text}
                  {'strong' in fact && (
                    <strong className="font-bold">{fact.strong}</strong>
                  )}
                </p>
              </li>
            ))}
          </ul>

          <a
            href={whatsappWithText}
            target="_blank"
            rel="noopener"
            className="rounded-btn border-cyan/70 hover:border-cyan mt-[60px] inline-flex items-center gap-3 border px-8 py-4 text-[15px] transition-colors"
          >
            <WhatsAppIcon className="text-whatsapp h-5 w-5" />
            Связаться в WhatsApp
          </a>
        </div>

        <Image
          src={founder.photo}
          alt="Максим Гайдар, основатель агентства SEO Secrets"
          width={408}
          height={552}
          className="h-auto w-full rounded-[4px] object-cover"
        />
      </div>
    </section>
  );
}
