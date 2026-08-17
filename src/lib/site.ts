/**
 * Контакты и навигация в одном месте.
 * Данные сняты с текущего сайта на Tilda — при переезде не должны разъехаться.
 * Меняем номер или пункт меню здесь, а не в десяти компонентах.
 */

export const site = {
  name: 'SEO Secrets',
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
