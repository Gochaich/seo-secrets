import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { AboutHero } from '@/components/sections/about-hero';
import { Team } from '@/components/sections/team';
import { Pricing } from '@/components/sections/pricing';
import { RankingFactors } from '@/components/sections/ranking-factors';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { aboutMeta } from '@content/ru/about';

/**
 * «О нас» (/o-nas/). Ниже первого экрана страница целиком собрана
 * из блоков главной — на текущем сайте они там те же самые.
 */
export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <AboutHero scrollTo="komanda" />
      <div id="komanda">
        <Team />
      </div>
      <Pricing />
      <RankingFactors />
      <div className="flex justify-center pb-10 md:pb-12">
        <WhatsAppButton />
      </div>
    </main>
  );
}
