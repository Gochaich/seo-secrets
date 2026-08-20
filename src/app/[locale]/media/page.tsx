import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/sections/page-hero';
import { MediaVideos } from '@/components/sections/media-videos';
import { Media } from '@/components/sections/media';
import { Founder } from '@/components/sections/founder';
import { mediaHero, mediaMeta } from '@content/ru/pages';

/**
 * «SEO Secrets в медиа» (/media/). Ниже первого экрана — ряд роликов,
 * затем публикации и блок основателя с главной: на текущем сайте они
 * там те же самые.
 *
 * Фоновые пятна: зелёно-жёлтое слева 650x590, оранжевое справа 580x560.
 * Размеры коробок и проценты перенесены из CSS исходного сайта.
 */
const GLOWS = [
  {
    src: '/images/decor/case-glow-green.png',
    className:
      'top-[36%] -left-[28%] h-[380px] w-[380px] lg:top-[65%] lg:-left-[8%] lg:h-[590px] lg:w-[650px]',
  },
  {
    src: '/images/decor/about-glow-orange.png',
    className:
      'top-[66%] -right-[28%] h-[380px] w-[380px] lg:top-[60%] lg:-right-[10%] lg:h-[560px] lg:w-[580px]',
  },
] as const;

export const metadata: Metadata = {
  title: mediaMeta.title,
  description: mediaMeta.description,
};

export default async function MediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <PageHero
        title={mediaHero.title}
        text={mediaHero.text}
        scrollTo="video"
        glows={GLOWS}
      />
      <div id="video">
        <MediaVideos />
      </div>
      <Media />
      <Founder />
    </main>
  );
}
