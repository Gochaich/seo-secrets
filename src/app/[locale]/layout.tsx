import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { site } from '@/lib/site';
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
  /*
   * metadataBase нужен, чтобы относительные адреса картинок в og-разметке
   * превращались в абсолютные: соцсети относительные не понимают.
   */
  metadataBase: new URL(site.url),
  /*
   * Запасной заголовок. Каждая страница задаёт свой через buildMetadata,
   * так что сюда попадают только служебные страницы вроде 404.
   */
  title: site.name,
  description: site.description,
  icons: { icon: '/images/brand/favicon.png' },
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

/**
 * Мета viewport Next.js ставит сам, здесь мы добавляем к нему две вещи.
 *
 * themeColor красит адресную строку мобильного браузера в цвет фона сайта —
 * без него над тёмной страницей висит белая полоса. colorScheme сообщает
 * браузеру, что тема тёмная, и системные элементы (скроллбар, поля ввода
 * в форме заявки) рисуются тёмными, а не светлыми.
 *
 * Масштабирование щипком намеренно не запрещаем: user-scalable=no ломает
 * доступность и режет оценку в Lighthouse.
 */
export const viewport: Viewport = {
  themeColor: '#1e1e1e',
  colorScheme: 'dark',
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
      className={`${montserrat.variable} ${inter.variable} h-full scroll-smooth antialiased`}
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
