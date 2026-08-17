import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Отдаём современные форматы — заметная часть выигрыша в скорости против Тильды
    formats: ['image/avif', 'image/webp'],

    // ВРЕМЕННО: картинки пока лежат на CDN Тильды.
    // Это технический долг — пока он есть, мы зависим от оплаченного тарифа Тильды.
    // Переносим файлы в /public и убираем этот блок. См. docs/AUDIT.md, п. 10.
    remotePatterns: [
      { protocol: 'https', hostname: 'static.tildacdn.pro' },
      { protocol: 'https', hostname: 'thb.tildacdn.pro' },
    ],
  },

  async redirects() {
    // Таблица 301-редиректов со старых адресов Тильды.
    // Заполняется на этапе 7 из карты URL, собранной на этапе 1.
    // Формат: { source: '/staryj-adres', destination: '/novyj-adres', permanent: true }
    return [];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
