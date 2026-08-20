import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/sections/page-hero';
import { Team } from '@/components/sections/team';
import { Pricing } from '@/components/sections/pricing';
import { RankingFactors } from '@/components/sections/ranking-factors';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { aboutHero, aboutMeta } from '@content/ru/about';

/**
 * «О нас» (/o-nas/). Ниже первого экрана страница целиком собрана
 * из блоков главной — на текущем сайте они там те же самые.
 *
 * Фоновые пятна: синее слева 590x520, оранжевое справа 520x520.
 * Проценты и размеры перенесены из CSS исходного сайта.
 */
const GLOWS = [
  {
    src: '/images/decor/about-glow-blue.png',
    className:
      'top-[36%] -left-[28%] h-[380px] w-[380px] lg:top-[60%] lg:-left-[8%] lg:h-[520px] lg:w-[590px]',
  },
  {
    src: '/images/decor/about-glow-orange.png',
    className:
      'top-[66%] -right-[28%] h-[380px] w-[380px] lg:top-[50%] lg:-right-[8%] lg:h-[520px] lg:w-[520px]',
  },
] as const;

export const metadata: Metadata = buildMetadata('/o-nas/');

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <PageHero
        title={aboutHero.title}
        text={aboutHero.text}
        scrollTo="komanda"
        glows={GLOWS}
      />
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
