import Image from 'next/image';
import { Container, Section, SectionTitle } from '@/components/layout/container';
import { clientsIntl, clientsKz, type Client } from '@content/ru/home';

function ClientLogo({ client }: { client: Client }) {
  const logo = (
    <Image
      src={client.logo}
      alt={client.name}
      width={140}
      height={70}
      className="max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );

  return (
    <li className="group flex h-[70px] w-[140px] items-center justify-center rounded-card border border-border bg-surface p-3 transition-colors hover:border-border-strong hover:bg-surface-2">
      {client.href ? (
        <a
          href={client.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex h-full w-full items-center justify-center"
        >
          {logo}
        </a>
      ) : (
        logo
      )}
    </li>
  );
}

function ClientGroup({ title, items }: { title: string; items: Client[] }) {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-2xl font-semibold text-ink/90">{title}</h3>
      <ul className="grid grid-cols-2 justify-items-center gap-5 sm:flex sm:flex-wrap sm:justify-center sm:gap-10">
        {items.map((client) => (
          <ClientLogo key={client.name} client={client} />
        ))}
      </ul>
    </div>
  );
}

export function Clients() {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-14 text-center">
        <SectionTitle>Наши клиенты по SEO</SectionTitle>
        <ClientGroup title="Казахстанские клиенты" items={clientsKz} />
        <ClientGroup
          title="Наши клиенты в США и других странах"
          items={clientsIntl}
        />
      </Container>
    </Section>
  );
}
