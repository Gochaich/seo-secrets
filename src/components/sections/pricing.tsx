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
 */
export function Pricing() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1068px] px-5">
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
