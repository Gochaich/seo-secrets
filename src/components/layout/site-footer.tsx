import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import {
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/icons/social';
import { contacts, footerNav, site } from '@/lib/site';

const socials = [
  { label: 'Позвонить', href: `tel:${contacts.phone}`, Icon: PhoneIcon },
  { label: 'WhatsApp', href: contacts.whatsapp, Icon: WhatsAppIcon },
  { label: 'Telegram', href: contacts.telegram, Icon: TelegramIcon },
];

/**
 * Подвал: слева логотип, соцсети и копирайт, справа меню.
 *
 * Иконки соцсетей белые, а глиф внутри вырезан насквозь — сквозь него
 * виден фон подвала. В шапке те же иконки идут наоборот, тёмным по светлому.
 *
 * Логотип ведёт на главную. На текущем сайте у него href="#", то есть клик
 * прокручивает страницу вверх вместо перехода — docs/AUDIT.md, п. 9.
 *
 * Год в копирайте берётся из даты сборки, а не вписан руками: иначе в январе
 * на сайте агентства висел бы прошлогодний год.
 */
export function SiteFooter() {
  return (
    <footer className="border-border bg-bg mt-auto border-t">
      <div className="mx-auto grid w-full max-w-[1060px] gap-10 px-5 py-12 md:grid-cols-[300px_1fr]">
        <div>
          <Link href="/" aria-label={site.name} className="inline-block">
            <Image
              src="/images/brand/seo-secrets-logo.png"
              alt={site.name}
              width={262}
              height={64}
              className="h-auto w-[262px]"
            />
          </Link>

          <ul className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('tel:') ? undefined : '_blank'}
                  rel="noopener"
                  aria-label={label}
                  className="block transition-opacity hover:opacity-80"
                >
                  <Icon className="h-7 w-7 text-white" />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-subtle mt-8 text-[13px]">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>

        <nav aria-label="Меню подвала">
          {/* Ширина ограничена, чтобы строка переносилась после «агентство», как на оригинале */}
          <p className="text-subtle max-w-[200px] text-[15px] leading-[1.45]">
            {site.description}
          </p>

          <ul className="mt-6 flex flex-col gap-[10px]">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted hover:text-ink text-[15px] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
