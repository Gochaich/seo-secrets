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

    // remotePatterns здесь больше нет и быть не должно: все картинки лежат
    // в /public/images. Сайт не зависит ни от тарифа Тильды, ни от сторонних
    // сервисов иконок. Долг из docs/AUDIT.md, п. 10, закрыт 19 августа.
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
