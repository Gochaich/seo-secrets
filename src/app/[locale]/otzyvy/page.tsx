import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/sections/page-hero';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { reviewsHero, reviewsMeta } from '@content/ru/pages';

/**
 * «Отзывы» (/otzyvy/). Ниже первого экрана — видео-отзывы и F.A.Q.
 * с главной: на текущем сайте они там те же самые.
 *
 * Фоновые пятна: оранжевое слева 620x520, синее справа 760x600.
 * Размеры коробок и проценты перенесены из CSS исходного сайта.
 */
const GLOWS = [
  {
    src: '/images/decor/team-glow-orange.png',
    className:
      'top-[36%] -left-[28%] h-[380px] w-[380px] lg:top-[50%] lg:-left-[8%] lg:h-[520px] lg:w-[620px]',
  },
  {
    src: '/images/decor/team-glow-blue.png',
    className:
      'top-[66%] -right-[28%] h-[380px] w-[380px] lg:top-[58%] lg:-right-[24%] lg:h-[600px] lg:w-[760px]',
  },
] as const;

export const metadata: Metadata = {
  title: reviewsMeta.title,
  description: reviewsMeta.description,
};

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <PageHero
        title={reviewsHero.title}
        text={reviewsHero.text}
        scrollTo="otzyvy"
        glows={GLOWS}
      />
      <div id="otzyvy">
        <Testimonials />
      </div>
      <Faq />
      <div className="flex justify-center pb-10 md:pb-12">
        <WhatsAppButton />
      </div>
    </main>
  );
}
