import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { CaseStudyMasterCarp } from '@/components/sections/case-study';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { caseMeta } from '@content/ru/case-master-carp';

/**
 * Кейс Master Carp (/case-study/seo-kejs-kompanii-master-carp/).
 * Адрес совпадает с текущим сайтом один в один, редирект не нужен.
 */
export const metadata: Metadata = {
  title: caseMeta.title,
  description: caseMeta.description,
};

export default async function MasterCarpCasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <CaseStudyMasterCarp />
      <div className="flex justify-center pb-10 md:pb-12">
        <WhatsAppButton />
      </div>
    </main>
  );
}
