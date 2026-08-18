import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';

/**
 * Главная. Собирается блок за блоком по скриншотам текущего сайта.
 * Готово: первый экран.
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
    </main>
  );
}
