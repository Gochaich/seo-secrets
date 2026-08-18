import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { Clients } from '@/components/sections/clients';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { Benefits } from '@/components/sections/benefits';
import { ImpactExample } from '@/components/sections/impact-example';
import { Cases } from '@/components/sections/cases';

/**
 * Главная. Собирается блок за блоком по скриншотам текущего сайта.
 * Готово: первый экран, клиенты, влияние SEO, пример работы, кейсы.
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
      <Benefits />
      <ImpactExample />
      <Cases />
    </main>
  );
}
