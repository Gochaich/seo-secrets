import { Link } from '@/i18n/navigation';
import { whatsappWithText } from '@/lib/site';
import { rich } from '@/lib/rich-text';
import {
  pricingActions,
  pricingIntro,
  pricingTiers,
} from '@content/ru/pricing';

function Check() {
  return (
    <svg
      viewBox="0 0 20 16"
      fill="none"
      aria-hidden
      className="text-green mt-[3px] h-4 w-5 shrink-0"
    >
      <path
        d="M1.5 8.5 7 14 18.5 1.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * «Цены на SEO услуги компании SEO Secrets»: три тарифа.
 *
 * Содержимое 1028px, зазор 24px — карточка выходит 327px.
 * Карточки одной высоты (auto-rows-fr), кнопки прижаты к низу: текста
 * в тарифах разное количество, и без этого кнопки вставали бы вразнобой.
 *
 * Цена «Малого бизнеса» — 300 000 ₸, а не 250 000, как на текущем сайте:
 * там она указана двумя разными числами. Решение владельца, docs/AUDIT.md, п. 1.
 *
 * Фоновые пятна: бирюзовое с жёлто-зелёным подпалом слева и крупное синее
 * справа. Центры вынесены далеко за экран — на оригинале видны только полосой
 * у самого края.
 */
export function Pricing() {
  return (
    <section className="relative py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] -left-[420px] h-[620px] w-[560px] rounded-full bg-[radial-gradient(circle,var(--color-cyan)_0%,transparent_70%)] opacity-70 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[42%] -left-[440px] h-[480px] w-[540px] rounded-full bg-[radial-gradient(circle,var(--color-yellow)_0%,var(--color-green)_45%,transparent_76%)] opacity-70 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[10%] -right-[440px] h-[900px] w-[600px] rounded-[50%] bg-[radial-gradient(ellipse,var(--color-accent-bright)_0%,var(--color-accent)_44%,transparent_76%)] opacity-90 blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1068px] px-5">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {pricingIntro.title}
        </h2>
        <p className="mt-6 text-center text-sm font-bold">
          {pricingIntro.lead}
        </p>
        <p className="text-muted mx-auto mt-1 max-w-[620px] text-center text-[15px] leading-[1.65]">
          {rich(pricingIntro.text)}
        </p>

        <ul className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <li
              key={tier.name}
              className="bg-surface flex flex-col rounded-[20px] px-9 pt-10 pb-8"
            >
              <h3 className="text-[19px] font-bold">{tier.name}</h3>
              <p className="text-muted mt-3 text-[21px] font-bold">
                {tier.price}
              </p>

              <p className="text-muted mt-5 text-[15px] leading-[1.55]">
                {rich(tier.description)}
              </p>

              <ul className="mt-8 flex flex-col gap-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check />
                    <span className="text-muted text-sm leading-[1.5]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-muted mt-8 text-[15px] leading-[1.55]">
                {rich(tier.summary)}
              </p>

              {/* mt-auto прижимает кнопки к низу карточки при разной длине текста */}
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={whatsappWithText}
                  target="_blank"
                  rel="noopener"
                  className="rounded-btn border-brand-cool text-muted block px-6 py-2 text-center text-[13px] transition-opacity hover:opacity-80"
                >
                  {pricingActions.contact}
                </a>
                <Link
                  href={pricingActions.cases.href}
                  className="rounded-btn border-brand text-muted block px-6 py-2 text-center text-[13px] transition-opacity hover:opacity-80"
                >
                  {pricingActions.cases.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
