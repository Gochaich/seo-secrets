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
import { Geography } from '@/components/sections/geography';
import { Media } from '@/components/sections/media';
import { LeadCost } from '@/components/sections/lead-cost';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';
import { Tools } from '@/components/sections/tools';

/**
 * Главная. Собирается блок за блоком по скриншотам текущего сайта.
 * Готово: первый экран, клиенты, влияние SEO, пример работы, кейсы, основатель, команда, этапы работы, факторы ранжирования, география, СМИ, цена лида, тарифы, видео-отзывы, инструменты.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    /*
      overflow-x-clip, а не overflow-hidden: clip не делает элемент
      скролл-контейнером, поэтому фоновые пятна секций свободно перетекают
      вверх и вниз через границы блоков и при этом не дают горизонтальной
      прокрутки. Именно из-за hidden на секциях был виден стык.
    */
    <main className="overflow-x-clip">
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
      <Geography />
      <Media />
      <LeadCost />
      <Pricing />
      <Testimonials />
      <Tools />
    </main>
  );
}
