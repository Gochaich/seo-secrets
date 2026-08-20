import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/sections/page-hero';
import { Team } from '@/components/sections/team';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { teamHero } from '@content/ru/team';

/**
 * «Команда» (/team/). Ниже первого экрана — тот же блок с карточками,
 * что на главной и на «О нас»: на текущем сайте он там тот же самый.
 *
 * Фоновые пятна: оранжевое слева 590x520, синее справа 850x600. Оно шире
 * и заведено дальше за край, чем на «О нас», — размеры коробок и проценты
 * перенесены из CSS исходного сайта.
 *
 * На мобильных пятна опущены ниже, чем на оригинале (36/66% -> 72/92%):
 * там первый экран вдвое выше нашего, и яркое ядро оранжевого пятна
 * приходилось ниже текста. В нашей высоте по исходным процентам оно
 * ложилось прямо под подзаголовок, и тот переставал читаться.
 */
const GLOWS = [
  {
    src: '/images/decor/team-glow-orange.png',
    className:
      'top-[72%] -left-[28%] h-[380px] w-[380px] lg:top-[60%] lg:-left-[8%] lg:h-[520px] lg:w-[590px]',
  },
  {
    src: '/images/decor/team-glow-blue.png',
    className:
      'top-[92%] -right-[28%] h-[380px] w-[380px] lg:top-[65%] lg:-right-[32%] lg:h-[600px] lg:w-[850px]',
  },
] as const;

export const metadata: Metadata = buildMetadata('/team/');

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <PageHero
        title={teamHero.title}
        text={teamHero.text}
        scrollTo="komanda"
        glows={GLOWS}
      />
      <div id="komanda">
        <Team />
      </div>
      <div className="flex justify-center pb-10 md:pb-12">
        <WhatsAppButton />
      </div>
    </main>
  );
}
