import Image from 'next/image';
import {
  clientsHeadings,
  clientsIntl,
  clientsKz,
  type Client,
} from '@content/ru/home';

/**
 * «Наши клиенты по SEO». Размеры из CSS текущего сайта:
 *   .clients-section  { padding:30px 20px 80px }
 *   h2                { font-size:38px; font-weight:700; margin-bottom:60px }
 *   .clients-subtitle { font-size:26px; font-weight:600; margin:60px 0 40px; opacity:.9 }
 *   .clients-grid     { flex; wrap; center; gap:40px; max-width:1100px }
 *   .client-logo      { 140×70; radius:12px; padding:12px; bg:#232323;
 *                       border:1px solid rgba(255,255,255,.08) }
 *   hover             { translateY(-5px); glow rgba(54,224,255,.3); bg rgba(255,255,255,.08) }
 * Мобильный: h2 30px, подзаголовок 22px с отступами 50/30, сетка в две колонки, зазор 24px.
 */

function ClientLogo({ client }: { client: Client }) {
  const logo = (
    <Image
      src={client.logo}
      alt={client.name}
      width={140}
      height={70}
      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );

  return (
    <li className="group flex h-[70px] w-full max-w-[140px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-surface p-3 transition duration-300 sm:w-[140px] sm:flex-none hover:-translate-y-[5px] hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(54,224,255,0.3)]">
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
    <>
      <h3 className="mt-[50px] mb-[30px] text-[22px] font-semibold opacity-90 md:mt-[60px] md:mb-10 md:text-[26px]">
        {title}
      </h3>
      <ul className="mx-auto grid max-w-[1100px] grid-cols-2 justify-items-center gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-10">
        {items.map((client) => (
          <ClientLogo key={client.name} client={client} />
        ))}
      </ul>
    </>
  );
}

export function Clients() {
  return (
    <section className="px-page pt-[30px] pb-16 text-center font-inter sm:pb-20">
      <h2 className="mb-[60px] text-[30px] font-bold md:text-[38px]">
        {clientsHeadings.title}
      </h2>
      <ClientGroup title={clientsHeadings.kz} items={clientsKz} />
      <ClientGroup title={clientsHeadings.intl} items={clientsIntl} />
    </section>
  );
}
