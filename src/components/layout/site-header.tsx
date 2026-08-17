import { Link } from '@/i18n/navigation';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { contacts, mainNav, site } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-bg">
      <Container className="flex flex-wrap items-center gap-x-8 gap-y-4 py-5">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-ink"
        >
          {site.name}
        </Link>

        <nav aria-label="Основное меню" className="order-3 w-full lg:order-none lg:w-auto">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base font-medium text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <ButtonLink
            href={contacts.phone ? `tel:${contacts.phone}` : '#'}
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {contacts.phoneFormatted}
          </ButtonLink>
          <ButtonLink
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener"
            size="sm"
          >
            Связаться с нами
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
