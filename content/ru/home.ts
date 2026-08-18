/**
 * Тексты главной страницы.
 * Перенесены с seo-secrets.kz дословно — переписывание не входит в переезд.
 *
 * ВРЕМЕННО: `logo` ссылается на CDN Тильды. Когда картинки переедут в /public,
 * меняем только пути здесь. См. docs/AUDIT.md, п. 10.
 */

const TILDA = 'https://static.tildacdn.pro';

export const hero = {
  title: 'SEO продвижение от Алматинского агентства SEO Secrets',
  /** Два абзаца — на текущем сайте между ними стоит перенос строки */
  lead: [
    'Мы — экспертное агентство из Алматы, с опытом в SEO более 9 лет.',
    'Работаем на ТОПы с 2016 года. Успешно развиваем проекты от малого бизнеса до глобальных корпораций.',
  ],
  image: `${TILDA}/tild3265-3530-4366-b337-626333356238/Component_4.png`,
  /** Кнопка на текущем сайте — готовый SVG шириной 240px */
  cta: {
    image: `${TILDA}/tild6537-6534-4263-a532-653536663538/Group_63.svg`,
    label: 'Связаться в WhatsApp',
  },
} as const;

/**
 * Кнопка WhatsApp между блоками — на текущем сайте это отдельная запись,
 * повторяется на главной четыре раза. SVG шириной 291px.
 */
export const whatsappCta = {
  image: `${TILDA}/tild3435-3665-4531-b062-636236643739/whatsapp.svg`,
  label: 'Связаться в WhatsApp',
} as const;

export const clientsHeadings = {
  title: 'Наши клиенты по SEO',
  kz: 'Казахстанские клиенты',
  intl: 'Наши клиенты в США и других странах',
} as const;

export type Client = {
  name: string;
  logo: string;
  href?: string;
};

export const clientsKz: Client[] = [
  {
    name: 'Kaspi.kz',
    href: 'https://kaspi.kz',
    logo: `${TILDA}/tild3661-3339-4330-a161-666537363261/photo.png`,
  },
  {
    name: 'Kolesa.kz',
    href: 'https://kolesa.kz',
    logo: `${TILDA}/tild3437-3937-4533-a461-643161613362/kolesa.png`,
  },
  {
    name: 'Krisha.kz',
    href: 'https://krisha.kz',
    logo: `${TILDA}/tild3935-3835-4965-b861-626237373363/krisha.png`,
  },
  {
    name: 'Teez',
    href: 'https://teez.kz',
    logo: `${TILDA}/tild3330-3765-4138-b739-366138316234/teez.png`,
  },
  {
    name: 'Alatau City Bank',
    href: 'https://alataucityinvest.kz/ru',
    logo: `${TILDA}/tild3264-3336-4630-b331-306438366536/alatau_city_bank.png`,
  },
  {
    name: 'BCC',
    href: 'https://bcc.kz',
    logo: `${TILDA}/tild3932-3234-4538-a265-626135346332/bcc.png`,
  },
  {
    name: 'ForteBank',
    href: 'https://forte.kz',
    logo: `${TILDA}/tild3931-6664-4930-b338-613433323937/forte.png`,
  },
  {
    name: 'Respect',
    href: 'https://respect.kz/ru',
    logo: `${TILDA}/tild3065-3230-4837-b261-333939303330/recpect.png`,
  },
  {
    name: 'Puma',
    href: 'https://puma.kz/',
    logo: `${TILDA}/tild3534-3730-4762-a530-626462643163/puma-white-logo-imag.png`,
  },
  {
    name: 'Allur Auto',
    href: 'https://allur.kz',
    logo: `${TILDA}/tild6361-3237-4430-a361-626632373261/Allur_logo_red_1.png`,
  },
  {
    name: 'Кинезио Доктор',
    href: 'https://kinesiodoctor.kz/',
    logo: `${TILDA}/tild6463-3633-4665-b336-633130336434/nashivka_Kinesio_doc.png`,
  },
  {
    name: 'Henry Bonnar',
    href: 'https://kz.henrybonnar.com/',
    logo: `${TILDA}/tild6334-3662-4337-b037-623036626639/Logo_H_Bonnar_2020_p.png`,
  },
  {
    name: 'Dream Moments',
    href: 'https://dream-moments.kz/',
    logo: `${TILDA}/tild3966-3130-4364-a566-663865336534/dream_moments.png`,
  },
  {
    name: 'СтроимДом',
    href: 'https://stroimdom.kz',
    logo: `${TILDA}/tild6337-3336-4665-a362-376536386539/_.png`,
  },
  {
    name: 'MasterCarp',
    href: 'https://master-carp.kz/',
    logo: `${TILDA}/tild3831-3836-4334-b666-613063353630/22.png`,
  },
];

export const clientsIntl: Client[] = [
  // Semrush и Enegix на текущем сайте идут без ссылок — сохраняем как есть
  {
    name: 'Semrush',
    logo: `${TILDA}/tild6532-6235-4635-a432-646266313234/semrush.png`,
  },
  {
    name: 'Higgsfield.ai',
    href: 'https://higgsfield.ai',
    logo: `${TILDA}/tild6637-3034-4236-a564-306331346139/Higgsfield_Logo.png`,
  },
  {
    name: 'Hepsiburada',
    href: 'https://hepsiburada.com',
    logo: `${TILDA}/tild3739-6134-4564-b839-646239353833/hepsiburada.png`,
  },
  {
    name: 'Chevrolet',
    href: 'https://chevrolet.uz/',
    logo: `${TILDA}/tild6664-3564-4366-b432-643432353137/1200px-Chevrolet_new.png`,
  },
  {
    name: 'Atelier Wen',
    href: 'https://atelierwen.com',
    logo: `${TILDA}/tild3666-6463-4732-a431-376166633634/atelier.png`,
  },
  {
    name: 'Enegix',
    logo: `${TILDA}/tild3538-6461-4064-a161-336134373634/enegix.png`,
  },
  {
    name: 'Pickthebank',
    href: 'https://pickthebank.eu',
    logo: `${TILDA}/tild6335-3531-4930-b937-643561623063/pickthebank.png`,
  },
  {
    name: 'Bay Fresh Flowers',
    href: 'https://bayfreshflowers.com',
    logo: `${TILDA}/tild3962-6266-4434-a666-336136333334/bay_fresh_flowers.png`,
  },
  {
    name: 'AvtoElon',
    href: 'https://avtoelon.uz',
    logo: `${TILDA}/tild3164-6135-4662-b963-316435643664/avtoelon.png`,
  },
  {
    name: 'eyemunich',
    href: 'https://eyemunich.com',
    logo: `${TILDA}/tild3262-3536-4261-b835-336564333936/__2025-10-18__133555.png`,
  },
];

export type Benefit = {
  title: string;
  /** Абзацы — на текущем сайте разделены переносом строки */
  text: string[];
};

/**
 * Тексты восстановлены дословно с сайта: «Вы» с прописной, дефисы вместо
 * тире — как у вас. Раньше я это молча поправил, здесь возвращаю как есть.
 */
export const benefits: Benefit[] = [
  {
    title: 'SEO — это рынок, где вас должны видеть',
    text: [
      'Поисковая выдача — это современный рынок, где клиенты выбирают, кому доверить деньги.',
      'Если ваш сайт не оптимизирован, вы просто отсутствуете на этом рынке — даже если у вас отличный продукт.',
    ],
  },
  {
    title: 'Продвижение в Google/Yandex',
    text: [
      'Мы делаем сайты полезными и технически безупречными. Учитываем более 200 факторов ранжирования, чтобы ваш проект стабильно рос в поиске и занимал место рядом с лидерами ниши.',
    ],
  },
  {
    title: 'Вывод проекта в ТОП-3 и ТОП-1',
    text: [
      'Чем выше Вы в выдаче - тем больше кликов, заявок и продаж.',
      'Мы знаем, как довести сайт до верха и удерживать позиции даже при обновлениях алгоритмов.',
    ],
  },
  {
    title: 'Релевантный трафик и клиенты из органики',
    text: [
      'Посетители, пришедшие из поиска, уже ищут ваш продукт.',
      'Наша задача - привести этих людей и помочь вам убедить их, что именно вы - лучший выбор.',
    ],
  },
  {
    title: 'Конверсия (CRO)',
    text: [
      'Когда трафик пошёл, важно превращать его в заявки. Мы оптимизируем UX, тексты и воронку, чтобы каждая сессия приближала вас к продаже.',
    ],
  },
  {
    title: 'Динамика и рост',
    text: [
      'Результат SEO — это не обещания, а цифры.',
      'Мы показываем рост в Google Analytics и Search Console: больше видимости, больше трафика, больше продаж.',
    ],
  },
];

export const benefitsTitle = 'Как SEO агентство влияет на бизнес?';

export type CaseStudy = {
  title: string;
  meta: string;
  kpis: string[];
  text: string;
  tags: string[];
  goal: string;
  href?: string;
  logo?: string;
  initials?: string;
};

export const casesIntro =
  'Реальные проекты, где SEO, аналитика и продуктовый подход дают рост трафика и заявок.';

export const cases: CaseStudy[] = [
  {
    title: 'Master Carp · Карпфишинг',
    meta: 'E-commerce · Премиальный сегмент',
    logo: `${TILDA}/tild3831-3836-4334-b666-613063353630/22.png`,
    kpis: ['Трафик: +270%', 'Заявки: +290%', 'ТОП-3: 45% запросов'],
    text: 'Интернет-магазин премиального карпфишинга. Исправили технические ошибки, перестроили структуру и связали SEO с сильным брендом.',
    tags: ['Техническое SEO', 'Стратегия', 'Контент и структура'],
    goal: 'Цель: рост заявок и продаж',
    href: '/case-study/seo-kejs-kompanii-master-carp/',
  },
  {
    title: 'Kinesio Doctor · Медицинские услуги',
    meta: 'Медицина · Казахстан',
    initials: 'KD',
    kpis: [
      '0 → 4 200 пользователей/мес',
      'ТОП-3: 40% запросов',
      'SEO — источник клиентов №1',
    ],
    text: 'Усилили контент, семантику и доверие (E-E-A-T). Получили стабильный поток пациентов из поиска.',
    tags: ['Локальное SEO', 'Медицина', 'Контент-стратегия'],
    goal: 'Цель: стабильный поток пациентов',
    // На текущем сайте ссылка ведёт на "#" — страницы кейса нет. См. docs/AUDIT.md, п. 11
  },
  {
    title: 'Degen-ne.kz · Инфопроект',
    meta: 'Медиа · Казахский язык',
    initials: 'DN',
    kpis: [
      '0 → 11 000 трафика/мес',
      'ТОП-3: 37% запросов',
      'Новый домен с нуля',
    ],
    text: 'Построили контент-хаб и структуру. Благодаря качественным материалам проект стремительно вырос.',
    tags: ['Контент-хаб', 'Казахский язык', 'Новый проект'],
    goal: 'Цель: охват и узнаваемость',
    // Ссылки на страницу кейса тоже нет — см. docs/AUDIT.md, п. 11
  },
];

export const founder = {
  // Дефис, а не тире, и «Казахстанские» с большой буквы — как на текущем сайте.
  title: 'Гайдар Максим - основатель агентства SEO Secrets',
  text: 'Из Алматы, в SEO с 2016 года. Главный эксперт и основатель агентства SEO Secrets, специализирующегося на стратегиях роста в SEO для бизнеса в Казахстане, США и Европе.',
  photo: `${TILDA}/tild3034-3863-4963-b934-316261333036/IMG_6380.jpg`,
  /** strong — часть строки, выделенная жирным на текущем сайте */
  facts: [
    { text: '300+ успешно реализованных SEO-проектов' },
    { text: '50 млн пользователей посещают сайты клиентов ежемесячно' },
    { text: 'Собственная программа обучения ', strong: 'SEO PRO' },
    {
      text: 'Фокус — Казахстанские проекты, англоязычное и международное SEO',
    },
  ],
} as const;

export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  href: string;
  photo: string;
  photoHover: string;
};

export const team: TeamMember[] = [
  {
    name: 'Максим Гайдар',
    role: 'Основатель SEO Secrets',
    experience: '9+ лет в SEO',
    href: '/team/max/',
    photo: `${TILDA}/tild3636-6533-4561-b866-393636326432/Rectangle_152.jpg`,
    photoHover: `${TILDA}/tild3262-6561-4333-b165-333265376333/Rectangle_158.jpg`,
  },
  {
    name: 'Шамиль Ахматшаев',
    role: 'Senior SEO специалист',
    experience: '9 лет в SEO',
    href: '/team/shamil/',
    photo: `${TILDA}/tild3364-3335-4736-b262-623964613639/Rectangle_154.jpg`,
    photoHover: `${TILDA}/tild3165-6239-4339-b535-623566313562/Rectangle_160.jpg`,
  },
  {
    name: 'Александр Суворов',
    role: 'Senior SEO специалист',
    experience: '7 лет опыта в SEO',
    href: '/team/alexandr/',
    photo: `${TILDA}/tild3566-3663-4066-b834-366264336364/Rectangle_156.jpg`,
    photoHover: `${TILDA}/tild3061-6462-4330-b339-363730646332/Rectangle_164.jpg`,
  },
  {
    name: 'Георгий Штыренко',
    role: 'Senior SEO специалист',
    experience: '3+ лет практики SEO',
    href: '/team/george/',
    photo: `${TILDA}/tild6339-3163-4431-a631-666435343832/Rectangle_157.jpg`,
    photoHover: `${TILDA}/tild3639-3531-4935-a262-623433393264/Rectangle_166.jpg`,
  },
  {
    name: 'Валерия Лаврова',
    role: 'UX/UI дизайнер',
    experience: 'более 3 лет в UX/UI',
    href: '/team/valeriya/',
    photo: `${TILDA}/tild3663-6338-4265-b964-363334346432/Rectangle_153.jpg`,
    photoHover: `${TILDA}/tild3461-3165-4435-a361-616632363661/Rectangle_159.jpg`,
  },
  {
    name: 'Регина Исачкина',
    role: 'Junior SEO специалист',
    experience: '6 месяцев опыта в SEO',
    href: '/team/regina/',
    photo: `${TILDA}/tild3965-3264-4839-a663-303961636162/Rectangle_155.jpg`,
    photoHover: `${TILDA}/tild3638-6338-4363-b932-646433656161/Rectangle_165.jpg`,
  },
];

export type ProcessBlock =
  | { type: 'text'; value: string }
  | { type: 'list'; ordered: boolean; items: string[] };

export type ProcessStep = {
  title: string;
  /**
   * Блоки идут в том порядке, в каком стоят на сайте: у второго этапа
   * абзац, список и снова абзац. Внутри строк — минимальная разметка
   * **жирного** и *курсива*, \n — перенос строки внутри абзаца.
   */
  blocks: ProcessBlock[];
  duration?: string;
};

export const processIntro =
  'Прозрачный путь от знакомства до управляемого роста';

/*
 * Тексты перенесены дословно, вместе с авторскими особенностями:
 * «Ваш» с большой буквы, «в котором вы работаете», «делящихся»,
 * «Мы - уважаем», «&» вместо «и». Это не опечатки сборки — так на сайте.
 */
export const process: ProcessStep[] = [
  {
    title: 'Знакомство и погружение в Ваш бизнес на 100%',
    blocks: [
      {
        type: 'text',
        value:
          'На первом этапе мы знакомимся с Вами, бизнесом и ключевыми целями проекта. Наша цель — **на 100% понять нишу проекта, аудиторию и конкурентов**, в котором вы работаете.',
      },
      {
        type: 'text',
        value:
          'Мы фиксируем основные задачи, определяем **5 приоритетных направлений** (категорий или услуг), которые важно **видеть бизнесу в ТОПах Google** в первую очередь, и запрашиваем все необходимые доступы для работы.',
      },
    ],
  },
  {
    title:
      'Экспертный аудит Вашего проекта по 200 факторам ранжирования, конкурентный анализ и стратегия по SEO и GEO (AI SEO)',
    blocks: [
      {
        type: 'text',
        value:
          'Для любого нашего проекта **80% успеха** — это правильная SEO/AI Visibility **стратегия**.\nМы проводим аудит проекта по 200 основным SEO-факторам, делящихся на 7 направлений:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Контент;',
          'Техническое SEO;',
          'E-E-A-T факторы;',
          'Линкбилдинг;',
          'Внутренняя перелинковка;',
          'User-experience (Поведенческие факторы);',
          'GEO/AI SEO на присутствие проекта в LLM (ChatGPT, Perplexity и др.) и Google AIO.',
        ],
      },
      {
        type: 'text',
        value:
          'Выполняем конкурентный анализ и на его основе формируем долгосрочную стратегию роста, адаптированную под цели вашего бизнеса и особенности ниши.',
      },
    ],
    duration:
      '🕐 Длительность: 2–3 недели (в зависимости от размера и ниши бизнеса)',
  },
  {
    title: 'Внедрение стратегии и запуск SEO-работ',
    blocks: [
      {
        type: 'text',
        value:
          'После согласования и презентации полной SEO-стратегии мы переходим к практической реализации.\nНа этом этапе команда SEO Secrets формирует чёткий план действий на первый месяц и подключает ключевые инструменты для отслеживания прогресса по всем важным метрикам, влияющим на видимость и прибыль бизнеса.',
      },
      { type: 'text', value: 'Основные шаги включают:' },
      {
        type: 'list',
        ordered: false,
        items: [
          'импорт семантического ядра в позиционные трекеры (*Topvisor*, *Serpstat*, *Semrush*);',
          'интеграцию проекта с *Google Analytics 4*, *Google Search Console* и *Yandex Webmaster*;',
          'внедрение технических и контентных исправлений (hot fixes), выявленных в ходе аудита.',
        ],
      },
      {
        type: 'text',
        value:
          'Данный этап обеспечивает корректную аналитическую базу и создаёт основу для стабильного и прогнозируемого роста позиций.',
      },
    ],
  },
  {
    title: 'Прозрачная отчётность и развитие проекта',
    blocks: [
      {
        type: 'text',
        value:
          'Мы - уважаем прозрачность и честность в работе.\nСо второго месяца клиент получает детализированные ежемесячные отчёты, в которых отражаются:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'цифры: рост позиций в Google/Yandex, упоминания в ChatGPT & Google AI Overview;',
          'динамику роста позиций, трафика и лидов для бизнеса;',
          'список выполненных задач за отчётный период;',
          'план действий на следующий месяц - сформированный на основе стратегии, полученных данных и текущих результатов.',
        ],
      },
      {
        type: 'text',
        value:
          'Благодаря этой системе вы всегда видите реальные цифры, понимаете, какие действия предпринимаются, и можете оценить их влияние на рост бизнеса.',
      },
    ],
  },
];

export const rankingFactors = [
  {
    title: 'Техническое SEO-здоровье',
    text: 'Мы проверяем проект по 72 техническим факторам, выявляя 3 вида критичности ошибок. В первую очередь нас интересует, нет ли у проекта всевозможных дублей, технических ошибок, отсутствия метаданных и т.п.',
  },
  {
    title: 'Контент',
    text: 'Самое главное — быть полезным, чтобы пользователь, читая ваш текст, понимал, что он написан экспертом, в нём есть answer-first элементы и мы отвечаем в нём на все вопросы, которые возможны у пользователей.',
  },
  {
    title: 'Линкбилдинг',
    text: 'Строим ссылочный профиль через безопасные, естественные методы: PR-публикации, digital-аутрич. Фокус на качестве доноров и постепенном росте ссылочной массы. Мы верим в качество, а не в количество ссылок.',
  },
  {
    title: 'GEO / AI SEO',
    text: 'Внедряем различные факторы, влияющие на AI Visibility вашего бизнеса. Используем чёткую структуру, полезный экспертный контент, усиливаем связь вашего бренда с нишей для упоминаний в различных LLM и Google AIO.',
  },
  {
    title: 'E-E-A-T факторы',
    text: 'Работаем над репутацией эксперта, бренда и контента: авторство, упоминания, отзывы, прозрачность и достоверность информации. Это ключевые сигналы доверия Google.',
  },
  {
    title: 'User Experience',
    text: 'Оптимизируем пользовательский путь: юзабилити, поведенческие метрики, логика навигации. Комфортный UX напрямую влияет на конверсию и удержание посетителей.',
  },
  {
    title: 'Internal Linking',
    text: 'Формируем продуманную внутреннюю перелинковку, которая усиливает релевантность страниц, распределяет вес по приоритетным кластерам и улучшает индексацию новых страниц.',
  },
] as const;

/** Блок «География наших проектов» — карта */
export const geography = {
  title: 'География наших проектов',
  image: `${TILDA}/tild6231-6532-4730-b663-346434383965/Group_127.svg`,
} as const;

export type MediaVideo = { youtubeId: string };

export type MediaArticle = {
  title: string;
  description: string;
  href: string;
  cover: string;
};

export const mediaVideos: MediaVideo[] = [
  { youtubeId: 'CFV1-ap1qMM' },
  { youtubeId: 'oue3NAX3Nh4' },
  { youtubeId: 'nlFxhWVCmJQ' },
];

export const mediaArticles: MediaArticle[] = [
  {
    title: '«Один раз всё настроить и забыть не получится»',
    description: 'Тимлид SEO в Kolesa Group о трендах поисковиков',
    href: 'https://digitalbusiness.kz/2025-06-23/odin-raz-vse-nastroit-i-zabit-ne-poluchitsya-timlid-seo-v-kolesa-group-o-trendah-poiskovikov/',
    cover: `${TILDA}/tild3162-3361-4763-b665-646235386435/__2026-01-21__150456.png`,
  },
  {
    title: 'Зачем бизнесу страница 404 ошибки?',
    description:
      'Зачем бизнесу нужна страница 404 и как она влияет на пользователей и продажи',
    href: 'https://yvision.kz/post/zachem-biznesu-stranica-404-oshibki-396251',
    cover: `${TILDA}/tild3836-3164-4164-b461-356637643463/BenditoMockup-Free-P.png`,
  },
  {
    title: 'SEO-советы от команды Kolesa Group',
    description: 'Максим Гайдар — советы по оптимизации от тимлида SEO-команды',
    href: 'https://www.facebook.com/KolesaGroup/photos/1297562963785695/',
    cover: `${TILDA}/tild3363-3832-4539-a639-303263336435/__2026-01-21__153301.png`,
  },
];

export type Testimonial = {
  name: string;
  description: string;
  youtubeId: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Kriger.kz · Швейная компания',
    description:
      'Как SEO-стратегия усилила видимость сайта и увеличила поток заявок.',
    youtubeId: 'F_ZRPAbvx4o',
  },
  {
    name: 'MasterCarp · Товары для рыбалки',
    description:
      'Директор компании — о том, как SEO помогло стабильно расти в поиске.',
    youtubeId: 'zVWTOGJjETs',
  },
  {
    name: 'KinesioDoctor · Клиника реабилитации травм',
    description:
      'Как благодаря SEO сайт начал стабильно приносить новых пациентов и вырос в поисковой выдаче.',
    youtubeId: 'WbrnvMpQ57k',
  },
];

export const toolsIntro = {
  title: 'SEO и AI SEO инструменты, которыми мы пользуемся',
  lead: 'Наш стек — от краулинга и аналитики до визуализации и AI.',
} as const;

export const tools = [
  'Serpstat',
  'Topvisor',
  'Semrush',
  'Ahrefs',
  'Netpeak Spider',
  'Screaming Frog',
  'JetOctopus',
  'GA4',
  'GSC',
  'Looker Studio',
  'Tableau',
  'Monday',
  'BigQuery',
  'SQL',
  'OpenAI',
  'LLM Brand Monitor',
] as const;

/**
 * Блок «Пример работы» — идёт сразу после «Как SEO влияет на бизнес».
 * Был пропущен при первом переносе, добавлен после сверки со скриншотом.
 */
export const impactExample = {
  label: 'Пример работы:',
  text: 'Абсолютно новый домен и новый сайт были сдвинуты с "мертвой точки" на 2-й месяц работ, а к ноябрю трафик из Google достигал ~500 кликов в день',
  image: `${TILDA}/tild3461-3132-4565-a237-313831306366/noroot.png`,
} as const;
