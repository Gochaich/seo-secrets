/**
 * Страница «Контакты» (/contact-us/). Реквизиты и подписи формы
 * перенесены с seo-secrets.kz дословно.
 */

export const contactForm = {
  title: 'Связаться с нами',
  phoneLabel: 'Телефон',
  phonePlaceholder: '+7 (000) 000-00-00',
  domainLabel: 'Ваш домен',
  domainPlaceholder: 'Ваш домен',
  submit: 'Отправить',
} as const;

export const requisites = {
  title: 'Реквизиты',
  copy: 'Скопировать реквизиты',
  copied: 'Реквизиты скопированы',
  rows: [
    { label: 'Компания', value: 'ИП ГАЙДАР' },
    { label: 'Адрес', value: 'Алматы, УЛИЦА ТУРГУТ ОЗАЛА, дом 378' },
    { label: 'БИН (ИИН)', value: '940420300158' },
    { label: 'Банк', value: 'АО «Kaspi Bank»' },
    { label: 'Счёт KZT', value: 'KZ03722S000011851442 KZT' },
    { label: 'Счёт USD', value: 'KZ98722S000012618263 USD' },
    { label: 'Счёт EUR', value: 'KZ27722S000012187988 EUR' },
    { label: 'Кбе', value: '19' },
    { label: 'БИК', value: 'CASPKZKA' },
  ],
} as const;

/**
 * Текст, который уходит в буфер обмена. На оригинале он собран руками
 * и отличается от таблицы разбивкой на абзацы — оставлен как есть.
 */
export const requisitesPlainText = [
  'Реквизиты',
  '',
  'ИП ГАЙДАР',
  'Адрес: Алматы, УЛИЦА ТУРГУТ ОЗАЛА, дом 378',
  'БИН/ИИН: 940420300158',
  'Банк: АО «Kaspi Bank»',
  '',
  'Счёт KZT: KZ03722S000011851442 KZT',
  'Счёт USD: KZ98722S000012618263 USD',
  'Счёт EUR: KZ27722S000012187988 EUR',
  '',
  'Кбе: 19',
  'БИК: CASPKZKA',
].join('\n');
