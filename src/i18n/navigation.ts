import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Локализованные обёртки над навигацией Next.js.
 * Внутри проекта импортируем Link отсюда, а не из 'next/link' —
 * тогда при добавлении казахского языка ссылки сами получат нужный префикс.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
