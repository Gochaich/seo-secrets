import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { Clients } from '@/components/sections/clients';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

/**
 * Главная. Собирается блок за блоком по скриншотам текущего сайта.
 * Готово: первый экран, клиенты.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Clients />
      <WhatsAppCta className="pt-[30px] pb-[30px]" />
    </main>
  );
}
