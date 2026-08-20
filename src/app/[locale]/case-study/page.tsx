import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/sections/page-hero';
import { Cases } from '@/components/sections/cases';
import { Clients } from '@/components/sections/clients';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { casesHero, casesMeta } from '@content/ru/pages';

/**
 * «Наши кейсы» (/case-study/). Ниже первого экрана — блоки кейсов и
 * клиентов с главной: на текущем сайте они там те же самые.
 *
 * Фоновые пятна: зелёно-жёлтое слева 620x580, оранжевое справа 600x560.
 * Размеры коробок и проценты перенесены из CSS исходного сайта.
 */
const GLOWS = [
  {
    src: '/images/decor/case-glow-green.png',
    className:
      'top-[36%] -left-[28%] h-[380px] w-[380px] lg:top-[60%] lg:-left-[8%] lg:h-[580px] lg:w-[620px]',
  },
  {
    src: '/images/decor/about-glow-orange.png',
    className:
      'top-[66%] -right-[28%] h-[380px] w-[380px] lg:top-[50%] lg:-right-[10%] lg:h-[560px] lg:w-[600px]',
  },
] as const;

export const metadata: Metadata = buildMetadata('/case-study/');

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <PageHero
        title={casesHero.title}
        text={casesHero.text}
        scrollTo="kejsy"
        glows={GLOWS}
      />
      <div id="kejsy">
        <Cases />
      </div>
      <Clients />
      <div className="flex justify-center pb-10 md:pb-12">
        <WhatsAppButton />
      </div>
    </main>
  );
}
