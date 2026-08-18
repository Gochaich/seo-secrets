import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { Clients } from '@/components/sections/clients';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { Benefits } from '@/components/sections/benefits';
import { ImpactExample } from '@/components/sections/impact-example';
import { Cases } from '@/components/sections/cases';
import { Founder } from '@/components/sections/founder';
import { Team } from '@/components/sections/team';
import { Process } from '@/components/sections/process';
import { RankingFactors } from '@/components/sections/ranking-factors';

/**
 * Главная. Собирается блок за блоком по скриншотам текущего сайта.
 * Готово: первый экран, клиенты, влияние SEO, пример работы, кейсы, основатель, команда, этапы работы, факторы ранжирования.
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
      <Founder />
      <Team />
      <Process />
      <RankingFactors />
    </main>
  );
}
