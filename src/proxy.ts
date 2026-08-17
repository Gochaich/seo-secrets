import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

/**
 * В Next.js 16 файл `middleware.ts` переименован в `proxy.ts`.
 * Функциональность та же — меняется только имя файла.
 */
export default createMiddleware(routing);

export const config = {
  // Пропускаем API, служебные пути Next.js и любые файлы с расширением
  // (картинки, robots.txt, sitemap.xml) — их локализовать не нужно.
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
