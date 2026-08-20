/**
 * Первые экраны и метатеги внутренних страниц. Тексты перенесены
 * с seo-secrets.kz дословно.
 *
 * Собраны в одном файле, потому что на текущем сайте это один и тот же
 * блок .ssk-cases-hero: заголовок, подзаголовок и кружок со стрелкой.
 * Разъезжаться им незачем.
 */

export const casesHero = {
  title: 'Наши кейсы',
  text: 'Как мы выводим компании в ТОП и усиливаем их присутствие в поиске.',
} as const;

export const casesMeta = {
  title: 'SEO кейсы компании SEO Secrets на рынке Казахстана',
  description:
    'Кейсы по SEO агентства SEO Secrets на рынке Казахстана: мы заинтересованы в росте наших клиентов',
} as const;

export const reviewsHero = {
  title: 'Отзывы',
  text: 'Отзывы компаний-партнёров, которые доверили нам SEO-стратегию и получили результат',
} as const;

export const reviewsMeta = {
  title: 'Отзывы об агентстве SEO Secrets',
  description:
    'Мы собрали честные отзывы о нашем сотрудничестве с Казахстанскими клиентами',
} as const;

export const mediaHero = {
  title: 'SEO Secrets в медиа',
  text: 'Выступления, интервью и экспертные комментарии',
} as const;

export const mediaMeta = {
  title: 'СМИ',
  description:
    'SEO Secrets в медиа: выступления, интервью и экспертные комментарии',
} as const;

export const contactsMeta = {
  title: 'Контакты компании SEO Secrets',
  description: 'Телефон/WhatsApp: +77013017175, Telegram: maxmolodec',
} as const;

/**
 * Ролики на странице «Медиа». Подписей под ними на текущем сайте нет —
 * название видно на самой заглушке YouTube. Поле title идёт в атрибут
 * iframe: без него скринридер прочитает «фрейм» и ничего больше.
 */
export const mediaVideos = [
  {
    youtubeId: 'CFV1-ap1qMM',
    title: 'Максим Гайдар — SEO-специалист. Интервью для Serpstat',
  },
  {
    youtubeId: 'oue3NAX3Nh4',
    title: 'Максим Гайдар (Kolesa.kz, Krisha.kz). Интервью для Netpeak Software',
  },
  {
    youtubeId: 'nlFxhWVCmJQ',
    title: 'Кейс: с нуля до лидера ниши в SEO — симбиоз SEO и продукта',
  },
] as const;
