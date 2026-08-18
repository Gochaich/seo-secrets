import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Адреса на Tilda заканчиваются слэшем: /o-nas/, /team/, /case-study/.
   * Без этого флага Next.js редиректит /o-nas/ на /o-nas — то есть на переезде
   * поменялись бы ВСЕ адреса сайта. Ровно то, чего мы не должны допустить.
   */
  trailingSlash: true,

  images: {
    // Отдаём современные форматы — заметная часть выигрыша в скорости против Тильды
    formats: ['image/avif', 'image/webp'],

    // ВРЕМЕННО: картинки пока лежат на CDN Тильды.
    // Это технический долг — пока он есть, мы зависим от оплаченного тарифа Тильды.
    // Переносим файлы в /public и убираем этот блок. См. docs/AUDIT.md, п. 10.
    remotePatterns: [
      { protocol: 'https', hostname: 'static.tildacdn.pro' },
      // thb.tildacdn.pro и cdn.simpleicons.org больше не нужны:
      // всё, что оттуда бралось, лежит в /public или отрисовано текстом.
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
