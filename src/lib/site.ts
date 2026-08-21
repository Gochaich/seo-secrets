/**
 * Контакты и навигация в одном месте.
 * Данные сняты с текущего сайта на Tilda — при переезде не должны разъехаться.
 * Меняем номер или пункт меню здесь, а не в десяти компонентах.
 */

const PRODUCTION_URL = 'https://seo-secrets.kz';

/**
 * Приводит NEXT_PUBLIC_SITE_URL к виду «https://домен» без слэша на конце.
 *
 * Переменную заполняет человек руками в настройках Vercel, и ошибиться в ней
 * проще простого. Три случая, которые уже случались или могли:
 *
 *   ''                        переменная заведена, но пустая
 *   'seo-secrets.vercel.app'  забыт протокол
 *   'https://site.kz/'        лишний слэш на конце
 *
 * Первые два роняли сборку: new URL() бросал TypeError, деплой падал, и Vercel
 * продолжал отдавать предыдущую удачную версию — сайт «замирал» на старом коде
 * без единой заметной ошибки. Третий собирался, но давал двойной слэш
 * в canonical и в карте сайта, то есть тихо ломал ровно то, ради чего мы
 * эти адреса и проставляем.
 *
 * Поэтому значение нормализуется, а при совсем негодном — берётся боевой адрес.
 * Опечатка в настройках не должна останавливать выкладку сайта.
 */
function resolveSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return PRODUCTION_URL;

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    // origin отбрасывает путь, слэш на конце и строку запроса
    return new URL(withProtocol).origin;
  } catch {
    console.warn(
      `NEXT_PUBLIC_SITE_URL="${value}" — не похоже на адрес. Беру ${PRODUCTION_URL}.`,
    );
    return PRODUCTION_URL;
  }
}

/**
 * Можно ли открывать страницы поисковикам.
 *
 * Два условия, и оба обязательны:
 *
 * 1. Явно включённый флаг NEXT_PUBLIC_ALLOW_INDEXING=true. Он ставится один
 *    раз, на этапе 8, когда сайт уже переехал на боевой домен.
 *
 * 2. Это НЕ превью-деплой. Vercel поднимает отдельный адрес на каждую ветку
 *    и на каждый pull request, и там лежит копия сайта. Если такой адрес
 *    попадёт в индекс — это дубль вашего же контента, который конкурирует
 *    с боевым сайтом за те же запросы.
 *
 * Второе условие важнее, чем кажется. Переменную в настройках Vercel легко
 * задать сразу для всех окружений — галочки Production, Preview и Development
 * стоят рядом. Тогда одна включённая галочка открыла бы поисковикам десяток
 * превью-адресов. Здесь это невозможно: превью закрыто всегда, независимо
 * от того, что стоит в настройках.
 *
 * VERCEL_ENV подставляет сам Vercel: 'production', 'preview' или
 * 'development'. Локально её нет — там индексация и так выключена флагом.
 */
export function isIndexingAllowed(): boolean {
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING !== 'true') return false;
  return process.env.VERCEL_ENV !== 'preview';
}

export const site = {
  name: 'SEO Secrets',
  /*
   * Адрес сайта. Нужен там, где в разметку идёт абсолютный URL: canonical,
   * og-картинки, карта сайта, schema.org. На превью-сборках переопределяется
   * через NEXT_PUBLIC_SITE_URL — см. resolveSiteUrl выше.
   */
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description: 'Алматинское агентство SEO Secrets',
  city: 'Алматы',
} as const;

export const contacts = {
  phone: '+77013017175',
  phoneFormatted: '+7 701 301 71 75',
  whatsapp: 'https://wa.me/77013017175',
  telegram: 'https://t.me/maxmolodec',
  // Пока адрес не на домене агентства — решено оставить. См. docs/AUDIT.md, п. 2
  email: 'maxim@gaidar.top',
  address: 'Алматы, улица Наурызбай батыра, 50, ЖК ARBAT',
} as const;

/** Готовый текст первого сообщения в WhatsApp — как на текущем сайте */
export const whatsappWithText = `${contacts.whatsapp}?text=${encodeURIComponent(
  'Здравствуйте! Хотел бы обсудить условия по SEO для своего домена',
)}`;

/**
 * Главное меню. Адреса совпадают с текущим сайтом один в один —
 * это условие сохранения позиций при переезде.
 */
export const mainNav = [
  { href: '/o-nas/', label: 'О нас' },
  { href: '/team/', label: 'Команда' },
  { href: '/case-study/', label: 'Кейсы' },
  { href: '/otzyvy/', label: 'Отзывы' },
  { href: '/contact-us/', label: 'Контакты' },
  { href: '/media/', label: 'Медиа' },
] as const;

/**
 * Меню подвала. Отличается от главного: пунктов пять, «Команда» подписана
 * полностью, «Контакты» названы «Связаться с нами» — так на текущем сайте.
 */
export const footerNav = [
  { href: '/o-nas/', label: 'О нас' },
  { href: '/case-study/', label: 'Кейсы' },
  { href: '/otzyvy/', label: 'Отзывы' },
  { href: '/team/', label: 'Команда SEO Secrets' },
  { href: '/contact-us/', label: 'Связаться с нами' },
] as const;
