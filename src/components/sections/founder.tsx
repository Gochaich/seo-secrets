import Image from 'next/image';
import { WhatsAppIcon } from '@/components/icons/social';
import { whatsappWithText } from '@/lib/site';
import { founder } from '@content/ru/home';

function Check() {
  return (
    <svg
      viewBox="0 0 28 22"
      fill="none"
      aria-hidden
      className="text-teal h-[22px] w-[28px] shrink-0"
    >
      <path
        d="M2 12 10 19.5 26 2.5"
        stroke="currentColor"
        strokeWidth="3"
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
 *
 * Обводка кнопки — фирменный градиент из CSS сайта (#00c2ea -> #00b4f0 ->
 * #0018f0): бирюзовый слева перетекает в синий справа. Галочки, наоборот,
 * плоские бирюзовые — синего в них на оригинале нет.
 */
export function Founder() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/*
        Синее пятно у правого края. На Tilda это PNG, поставленный абсолютными
        координатами; здесь — два градиента: широкий мягкий ореол и яркое ядро.
        Одним слоем нужной насыщенности не получается: либо тускло, либо пятно
        расползается на пол-экрана.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-20 h-[600px] w-[340px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_65%)] opacity-90 blur-[70px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-16 h-[320px] w-[220px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent-bright)_0%,transparent_60%)] blur-[50px]"
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
              <li key={fact.text} className="flex items-end gap-[18px]">
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
            className="rounded-btn border-brand mt-[60px] inline-flex items-center gap-3 px-8 py-4 text-[15px] transition-opacity hover:opacity-80"
          >
            {/*
              Глиф в иконке вырезан насквозь (fill-rule: evenodd), поэтому
              под него подложен белый кружок — иначе телефон проваливается
              в фон и читается тёмным.
            */}
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <span className="absolute inset-[3px] rounded-full bg-white" />
              <WhatsAppIcon className="text-whatsapp relative h-5 w-5" />
            </span>
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
