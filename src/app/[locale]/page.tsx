import { setRequestLocale } from 'next-intl/server';

/**
 * Главная страница. Пустая — собираем блок за блоком по скриншотам.
 * Каждый следующий блок добавляется отдельной задачей и отдельным превью.
 */

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <main />;
}
