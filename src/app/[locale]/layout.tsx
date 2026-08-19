import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import '../globals.css';

/**
 * Montserrat — фирменный шрифт, тот же, что на текущем сайте.
 * Кириллица подключена явно: без неё русский текст съезжает на системный шрифт.
 */
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

/**
 * Inter — шрифт кастомных блоков. В CSS текущего сайта он прописан
 * (.hero, .clients-section и др.), но никогда не загружался, поэтому
 * эти блоки рисуются системным шрифтом и выглядят по-разному на разных
 * устройствах. Подключаем по-настоящему. См. docs/AUDIT.md, п. 5.
 */
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

/**
 * Индексация выключена по умолчанию и включается ОДНОЙ переменной окружения
 * NEXT_PUBLIC_ALLOW_INDEXING=true — только на боевом домене, на этапе 8.
 *
 * Это не перестраховка: копия сайта на тестовом домене, попавшая в индекс, —
 * это дубль вашего же контента, который конкурирует с боевым сайтом.
 */
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

export const metadata: Metadata = {
  // Заглушка. Настоящие метаданные переносятся с Tilda один в один на этапе 7.
  title: 'SEO Secrets',
  description: 'Тестовая сборка нового сайта агентства.',
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
