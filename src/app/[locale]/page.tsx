import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { Clients } from '@/components/sections/clients';
import { Benefits } from '@/components/sections/benefits';
import { ImpactExample } from '@/components/sections/impact-example';
import { Cases } from '@/components/sections/cases';
import { Founder } from '@/components/sections/founder';
import { Team } from '@/components/sections/team';
import { Process } from '@/components/sections/process';
import { RankingFactors } from '@/components/sections/ranking-factors';

/**
 * Главная страница. Собирается по блокам с текущего сайта на Tilda.
 * Порядок блоков сохранён. Осталось перенести: география проектов, СМИ о нас,
 * SEO vs PPC, цены, видео-отзывы, инструменты, FAQ.
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
