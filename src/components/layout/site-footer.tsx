import { Link } from '@/i18n/navigation';
import { Container } from '@/components/layout/container';
import { contacts, mainNav, site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-surface">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-extrabold tracking-tight">
            {site.name}
          </span>
          <p className="text-sm text-muted">{site.description}</p>
          <p className="text-sm text-subtle">{contacts.address}</p>
        </div>

        <nav aria-label="Меню в подвале" className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-subtle uppercase">
            Разделы
          </h2>
          <ul className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-subtle uppercase">
            Связаться
          </h2>
          <a
            href={`tel:${contacts.phone}`}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            {contacts.phoneFormatted}
          </a>
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener nofollow"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            WhatsApp
          </a>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noopener nofollow"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Telegram
          </a>
          <a
            href={`mailto:${contacts.email}`}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            {contacts.email}
          </a>
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-xs text-subtle">© 2026 {site.name}</p>
      </Container>
    </footer>
  );
}
