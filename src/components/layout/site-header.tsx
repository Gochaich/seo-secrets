import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import {
  EmailIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/icons/social';
import { contacts, mainNav, site } from '@/lib/site';

const LOGO = '/images/brand/seo-secrets-logo.png';

const socials = [
  { label: 'WhatsApp', href: contacts.whatsapp, Icon: WhatsAppIcon },
  { label: 'Telegram', href: contacts.telegram, Icon: TelegramIcon },
  { label: 'Телефон', href: `tel:${contacts.phone}`, Icon: PhoneIcon },
  { label: 'Email', href: `mailto:${contacts.email}`, Icon: EmailIcon },
];

/**
 * Иконки соцсетей. Один список на обе раскладки: в узкой шапке они лежат
 * в выпадающем меню, в широкой — в верхней строке.
 */
function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex items-center ${className ?? ''}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={
              href.startsWith('tel:') || href.startsWith('mailto:')
                ? undefined
                : '_blank'
            }
            rel="nofollow noopener"
            aria-label={label}
            title={label}
            className="flex h-11 w-11 items-center justify-center text-white transition-opacity hover:opacity-80"
          >
            <Icon className="h-9 w-9" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Бургер: три черты, которые по открытию превращаются в крест. Средняя гаснет,
 * крайние съезжаются к центру и поворачиваются. Отдельной иконки не нужно.
 */
function BurgerIcon() {
  const bar =
    'absolute left-0 h-[2px] w-6 rounded-full bg-current transition-transform duration-200';

  return (
    <span aria-hidden className="relative block h-4 w-6">
      <span
        className={`${bar} top-0 group-open:translate-y-[7px] group-open:rotate-45`}
      />
      <span className="absolute top-[7px] left-0 h-[2px] w-6 rounded-full bg-current transition-opacity duration-200 group-open:opacity-0" />
      <span
        className={`${bar} top-[14px] group-open:-translate-y-[7px] group-open:-rotate-45`}
      />
    </span>
  );
}

/**
 * Шапка. Две раскладки, порог — 1024px (lg).
 *
 * До него в строке помещаются только логотип и бургер: на планшете в портрете
 * логотип, четыре иконки, кнопка и номер требуют около 830px и уезжают за край.
 * Меню открывается выпадающей панелью.
 *
 * Панель собрана на <details>, как и F.A.Q.: разметка работает без единого
 * байта JavaScript, клавиатура и скринридер получают раскрывающийся блок
 * из коробки, а при переходе по ссылке страница перерисовывается и меню
 * закрывается само.
 *
 * От 1024px — прежняя двухстрочная шапка: контакты сверху, меню под чертой.
 */
export function SiteHeader() {
  return (
    <header className="bg-bg">
      {/* --- Телефон и планшет: логотип и бургер --- */}
      <div className="px-page flex items-center justify-between gap-4 py-3 lg:hidden">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Image
            src={LOGO}
            alt={site.name}
            width={180}
            height={48}
            priority
            className="h-auto w-[140px] sm:w-[180px]"
          />
        </Link>

        <details className="group relative">
          {/*
            list-none и скрытый ::-webkit-details-marker убирают стандартный
            треугольник; без них он остаётся слева от бургера в Safari.
          */}
          <summary
            aria-label="Меню"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 [&::-webkit-details-marker]:hidden"
          >
            <BurgerIcon />
          </summary>

          {/*
            Панель прижата к правому краю бургера и не толкает содержимое вниз.
            Ширина не больше экрана за вычетом полей, высота ограничена высотой
            окна: длинное меню на невысоком телефоне прокручивается внутри себя,
            а не уходит под первый экран.
          */}
          <div className="border-border-strong bg-surface absolute top-full right-0 z-50 mt-3 max-h-[calc(100vh_-_6rem)] w-[min(20rem,calc(100vw_-_2*var(--page-gutter)))] overflow-y-auto rounded-2xl border p-5 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
            <nav aria-label="Основное меню">
              <ul className="flex flex-col">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2.5 text-base text-white transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-border my-4 border-t" />

            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-accent block px-6 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Связаться с нами
            </a>

            <a
              href={`tel:${contacts.phone}`}
              className="mt-3 block py-2 text-center text-[15px] text-white transition-opacity hover:opacity-80"
            >
              {contacts.phoneFormatted}
            </a>

            <SocialLinks className="mt-2 justify-center gap-1" />
          </div>
        </details>
      </div>

      {/* --- Десктоп: верхняя строка — логотип, иконки, кнопка, телефон --- */}
      <div className="hidden items-center justify-between gap-6 px-10 py-3 lg:flex">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Image
            src={LOGO}
            alt={site.name}
            width={180}
            height={48}
            priority
            className="h-auto w-[180px]"
          />
        </Link>

        <div className="flex items-center gap-6">
          <SocialLinks className="-mx-1" />

          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-accent px-8 py-2.5 text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-accent-hover"
          >
            Связаться с нами
          </a>

          <a
            href={`tel:${contacts.phone}`}
            className="text-[15px] whitespace-nowrap text-white transition-opacity hover:opacity-80"
          >
            {contacts.phone}
          </a>
        </div>
      </div>

      {/* Разделительная линия — с отступами по бокам, не во всю ширину */}
      <div className="mx-10 hidden border-t border-white/25 lg:block" />

      {/* Десктоп: нижняя строка — меню */}
      <nav aria-label="Основное меню" className="hidden px-10 pt-6 pb-3 lg:block">
        <ul className="flex flex-wrap items-center gap-x-[50px] gap-y-3">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-base text-white transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
