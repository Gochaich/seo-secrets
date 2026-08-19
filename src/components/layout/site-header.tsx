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

export function SiteHeader() {
  return (
    <header className="bg-bg">
      {/* Верхняя строка: логотип — иконки — кнопка — телефон */}
      <div className="flex items-center justify-between gap-6 px-10 py-3">
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
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label={label}
                  title={label}
                  className="block text-white transition-opacity hover:opacity-80"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>

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
      <div className="mx-10 border-t border-white/25" />

      {/* Нижняя строка: меню */}
      <nav aria-label="Основное меню" className="px-10 pt-6 pb-3">
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
