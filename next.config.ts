import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Отдаём современные форматы — заметная часть выигрыша в скорости против Тильды
    formats: ['image/avif', 'image/webp'],
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
