/**
 * Тексты главной страницы.
 * Перенесены с seo-secrets.kz дословно — переписывание не входит в переезд.
 *
 * Все картинки лежат в /public/images и выгружаются туда автоматически:
 * список адресов в scripts/assets.map.json, качает их GitHub Actions.
 * Внешних CDN в путях больше нет. См. docs/AUDIT.md, п. 10.
 */

export const hero = {
  title: 'SEO продвижение от Алматинского агентства SEO Secrets',
  /** Два абзаца — на текущем сайте между ними стоит перенос строки */
  lead: [
    'Мы — экспертное агентство из Алматы, с опытом в SEO более 9 лет.',
    'Работаем на ТОПы с 2016 года. Успешно развиваем проекты от малого бизнеса до глобальных корпораций.',
  ],
  image: '/images/hero/component-4.png',
  /** Кнопка на текущем сайте — готовый SVG шириной 240px */
  cta: {
    image: '/images/hero/cta-whatsapp.svg',
    label: 'Связаться в WhatsApp',
  },
} as const;

/**
 * Кнопка WhatsApp между блоками — на текущем сайте это отдельная запись,
 * повторяется на главной четыре раза. SVG шириной 291px.
 */
export const whatsappCta = {
  image: '/images/ui/whatsapp-cta.svg',
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
    logo: '/images/clients/kaspi.png',
  },
  {
    name: 'Kolesa.kz',
    href: 'https://kolesa.kz',
    logo: '/images/clients/kolesa.png',
  },
  {
    name: 'Krisha.kz',
    href: 'https://krisha.kz',
    logo: '/images/clients/krisha.png',
  },
  {
    name: 'Teez',
    href: 'https://teez.kz',
    logo: '/images/clients/teez.png',
  },
  {
    name: 'Alatau City Bank',
    href: 'https://alataucityinvest.kz/ru',
    logo: '/images/clients/alatau-city-bank.png',
  },
  {
    name: 'BCC',
    href: 'https://bcc.kz',
    logo: '/images/clients/bcc.png',
  },
  {
    name: 'ForteBank',
    href: 'https://forte.kz',
    logo: '/images/clients/forte.png',
  },
  {
    name: 'Respect',
    href: 'https://respect.kz/ru',
    logo: '/images/clients/recpect.png',
  },
  {
    name: 'Puma',
    href: 'https://puma.kz/',
    logo: '/images/clients/puma.png',
  },
  {
    name: 'Allur Auto',
    href: 'https://allur.kz',
    logo: '/images/clients/allur.png',
  },
  {
    name: 'Кинезио Доктор',
    href: 'https://kinesiodoctor.kz/',
    logo: '/images/clients/kinesio-doctor.png',
  },
  {
    name: 'Henry Bonnar',
    href: 'https://kz.henrybonnar.com/',
    logo: '/images/clients/henry-bonnar.png',
  },
  {
    name: 'Dream Moments',
    href: 'https://dream-moments.kz/',
    logo: '/images/clients/dream-moments.png',
  },
  {
    name: 'СтроимДом',
    href: 'https://stroimdom.kz',
    logo: '/images/clients/stroimdom.png',
  },
  {
    name: 'MasterCarp',
    href: 'https://master-carp.kz/',
    logo: '/images/clients/master-carp.png',
  },
];

export const clientsIntl: Client[] = [
  // Semrush и Enegix на текущем сайте идут без ссылок — сохраняем как есть
  {
    name: 'Semrush',
    logo: '/images/clients/semrush.png',
  },
  {
    name: 'Higgsfield.ai',
    href: 'https://higgsfield.ai',
    logo: '/images/clients/higgsfield.png',
  },
  {
    name: 'Hepsiburada',
    href: 'https://hepsiburada.com',
    logo: '/images/clients/hepsiburada.png',
  },
  {
    name: 'Chevrolet',
    href: 'https://chevrolet.uz/',
    logo: '/images/clients/chevrolet.png',
  },
  {
    name: 'Atelier Wen',
    href: 'https://atelierwen.com',
    logo: '/images/clients/atelier-wen.png',
  },
  {
    name: 'Enegix',
    logo: '/images/clients/enegix.png',
  },
  {
    name: 'Pickthebank',
    href: 'https://pickthebank.eu',
    logo: '/images/clients/pickthebank.png',
  },
  {
    name: 'Bay Fresh Flowers',
    href: 'https://bayfreshflowers.com',
    logo: '/images/clients/bay-fresh-flowers.png',
  },
  {
    name: 'AvtoElon',
    href: 'https://avtoelon.uz',
    logo: '/images/clients/avtoelon.png',
  },
  {
    name: 'eyemunich',
    href: 'https://eyemunich.com',
    logo: '/images/clients/eyemunich.png',
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
    logo: '/images/clients/master-carp.png',
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
  photo: '/images/founder/img-6380.jpg',
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
    experience: '10+ лет в SEO',
    href: '/team/max/',
    photo: '/images/team/maxim.jpg',
    photoHover: '/images/team/maxim-hover.jpg',
  },
  {
    name: 'Шамиль Ахматшаев',
    role: 'Senior SEO специалист',
    experience: '10 лет в SEO',
    href: '/team/shamil/',
    photo: '/images/team/shamil.jpg',
    photoHover: '/images/team/shamil-hover.jpg',
  },
  {
    name: 'Александр Суворов',
    role: 'Senior SEO специалист',
    experience: '8 лет опыта в SEO',
    href: '/team/alexandr/',
    photo: '/images/team/alexandr.jpg',
    photoHover: '/images/team/alexandr-hover.jpg',
  },
  {
    name: 'Георгий Штыренко',
    role: 'Senior SEO специалист',
    experience: '4+ лет практики SEO',
    href: '/team/george/',
    photo: '/images/team/george.jpg',
    photoHover: '/images/team/george-hover.jpg',
  },
  {
    name: 'Валерия Лаврова',
    role: 'UX/UI дизайнер',
    experience: 'более 4 лет в UX/UI',
    href: '/team/valeriya/',
    photo: '/images/team/valeriya.jpg',
    photoHover: '/images/team/valeriya-hover.jpg',
  },
  {
    name: 'Регина Исачкина',
    role: 'Middle SEO специалист',
    experience: '1+ год опыта в SEO',
    href: '/team/regina/',
    photo: '/images/team/regina.jpg',
    photoHover: '/images/team/regina-hover.jpg',
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

export const rankingFactorsTitle =
  '7 основных факторов ранжирования\nс которыми мы работаем в SEO Secrets';

/*
 * Тексты дословные. «72 технических факторам», двойная запятая в «дублей,,»,
 * «пользователь читая Ваш текст понимал что он» без запятых — так на сайте.
 */
export const rankingFactors = [
  {
    title: 'Техническое SEO-здоровье',
    text: 'Мы проверяем проект по 72 технических факторам, выявляя 3 вида критичности ошибок. В первую очередь нас интересуют нет ли у проекта всевозможных дублей,, технических ошибок, отсутствие мета-данных и т.п.',
  },
  {
    title: 'Контент',
    text: 'Самое главное быть полезным, чтобы пользователь читая Ваш текст понимал что он написан экспертом, в нем есть answer-first элементы и мы отвечаем в нем на все вопросы, которые возможны у пользователей.',
  },
  {
    title: 'Линкбилдинг',
    text: 'Строим ссылочный профиль через безопасные, естественные методы: PR-публикации, digital-аутрич. Фокус на качестве доноров и постепенном росте ссылочной массы. Мы верим в качество, а не в количество ссылок.',
  },
  {
    title: 'GEO / AI SEO',
    text: 'Внедряем различные факторы влияющие на AI Visibility Вашего бизнеса. Используем четкую структуру, полезный экспертный контент, усиливаем связь Вашего бренда с нишей, для упоминаний в различных LLM и Google AIO.',
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

/**
 * Блок «География наших проектов» — карта одним SVG.
 * Страны продублированы списком: на карте они подписаны внутри картинки,
 * и без текстового дубля этот перечень не достаётся ни поиском, ни скринридером.
 */
export const geography = {
  title: 'География наших проектов',
  image: '/images/geo/map.svg',
  countries: [
    'Канада',
    'США',
    'Англия',
    'Испания',
    'Франция',
    'Нидерланды',
    'Германия',
    'Италия',
    'Украина',
    'Казахстан',
    'Дубаи',
    'Индия',
    'Сингапур',
    'Австралия',
  ],
} as const;

export type MediaVideo = {
  youtubeId: string;
  /**
   * Не выводится на странице — идёт в атрибут title у iframe.
   * Без него скринридер объявляет три встроенных ролика как «frame».
   * Названия сняты с плашек плеера на текущем сайте.
   */
  title: string;
};

export type MediaArticle = {
  title: string;
  description: string;
  href: string;
  cover: string;
};

export const mediaTitle = 'СМИ о нас';

export const mediaVideos: MediaVideo[] = [
  {
    youtubeId: 'CFV1-ap1qMM',
    title: 'Максим Гайдар — SEO-специалист. Канал Serpstat',
  },
  {
    youtubeId: 'oue3NAX3Nh4',
    title: 'Максим Гайдар (Kolesa.kz / Krisha.kz). Канал Netpeak Software UA',
  },
  {
    youtubeId: 'nlFxhWVCmJQ',
    title: 'Кейс: с нуля до лидера ниши в SEO. Канал Make it Global',
  },
];

export const mediaArticles: MediaArticle[] = [
  {
    title: '«Один раз все настроить и забыть не получится»',
    description: 'Тимлид SEO в Kolesa Group о трендах поисковиков',
    href: 'https://digitalbusiness.kz/2025-06-23/odin-raz-vse-nastroit-i-zabit-ne-poluchitsya-timlid-seo-v-kolesa-group-o-trendah-poiskovikov/',
    cover: '/images/media/digitalbusiness.png',
  },
  {
    title: 'Зачем бизнесу страница 404 ошибки?',
    description:
      'Зачем бизнесу нужна страница 404 и как она влияет на пользователей и продажи',
    href: 'https://yvision.kz/post/zachem-biznesu-stranica-404-oshibki-396251',
    cover: '/images/media/yvision-404.png',
  },
  {
    title: 'SEO-советы от команды Kolesa Group',
    description: 'Максим Гайдар — советы по оптимизации от тимлида SEO-команды',
    href: 'https://www.facebook.com/KolesaGroup/photos/1297562963785695/',
    cover: '/images/media/kolesa-seo.png',
  },
];

export type Testimonial = {
  name: string;
  description: string;
  youtubeId: string;
};

export const testimonialsTitle = 'Видео-отзывы клиентов';

/* Тексты дословные: «увеличило» и отсутствие точки в третьем — как на сайте */
export const testimonials: Testimonial[] = [
  {
    name: 'Kriger.kz · Швейная компания',
    description:
      'Как SEO-стратегия усилила видимость сайта и увеличило поток заявок.',
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
      'Как благодаря SEO сайт начал стабильно приносить новых пациентов и вырос в поисковой выдаче',
    youtubeId: 'WbrnvMpQ57k',
  },
];

export const toolsIntro = {
  title: 'SEO и AI SEO инструменты, которыми мы пользуемся',
  lead: 'Наш стек — от краулинга и аналитики до визуализации и AI.',
} as const;

/**
 * logoId — идентификатор официального знака в локальном SVG-спрайте.
 * У SQL нет единого официального логотипа, поэтому null выводит нейтральную
 * иконку базы данных из набора интерфейсных иконок проекта.
 */
export type Tool = {
  name: string;
  logoId: string | null;
};

export const tools: Tool[] = [
  { name: 'Serpstat', logoId: 'serpstat' },
  { name: 'Topvisor', logoId: 'topvisor' },
  { name: 'Semrush', logoId: 'semrush' },
  { name: 'Ahrefs', logoId: 'ahrefs' },
  { name: 'Netpeak Spider', logoId: 'netpeak-spider' },
  { name: 'Screaming Frog', logoId: 'screaming-frog' },
  { name: 'JetOctopus', logoId: 'jetoctopus' },
  { name: 'GA4', logoId: 'google-analytics' },
  { name: 'GSC', logoId: 'google-search-console' },
  { name: 'Looker Studio', logoId: 'looker-studio' },
  { name: 'Tableau', logoId: 'tableau' },
  { name: 'Monday', logoId: 'monday' },
  { name: 'BigQuery', logoId: 'bigquery' },
  { name: 'SQL', logoId: null },
  { name: 'OpenAI', logoId: 'openai' },
  { name: 'LLM Brand Monitor', logoId: 'llm-brand-monitor' },
];

/**
 * Блок «Пример работы» — идёт сразу после «Как SEO влияет на бизнес».
 * Был пропущен при первом переносе, добавлен после сверки со скриншотом.
 */
export const impactExample = {
  label: 'Пример работы:',
  text: 'Абсолютно новый домен и новый сайт были сдвинуты с "мертвой точки" на 2-й месяц работ, а к ноябрю трафик из Google достигал ~500 кликов в день',
  image: '/images/impact/growth-chart.png',
} as const;
