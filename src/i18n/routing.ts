import { defineRouting } from 'next-intl/routing';

/**
 * Локали сайта.
 *
 * Русский — язык по умолчанию и идёт БЕЗ префикса в адресе (`/uslugi`, не `/ru/uslugi`).
 * Это принципиально: URL с Тильды должны сохраниться один в один, иначе переезд
 * потребует массовых 301-редиректов и потери позиций.
 *
 * Казахский добавляется позже: дописать 'kk' в `locales`, создать `messages/kk.json`
 * и перевести файлы в `content/kk/`. Он встанет на `/kk/...`, страницы переписывать
 * не придётся. До этого момента 'kk' здесь быть не должно — иначе в индекс попадёт
 * пустая казахская версия.
 */
export const routing = defineRouting({
  locales: ['ru'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
