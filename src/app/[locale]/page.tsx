import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { Clients } from '@/components/sections/clients';
import { Benefits } from '@/components/sections/benefits';

/**
 * Главная страница. Собирается по блокам с текущего сайта на Tilda.
 * Сейчас перенесена верхняя часть — остальные блоки добавляются отдельными задачами.
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
    </main>
  );
}
