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
  lead: 'Мы — экспертное агентство из Алматы, с опытом в SEO более 9 лет. Работаем на ТОПы с 2016 года. Успешно развиваем проекты от малого бизнеса до глобальных корпораций.',
  image: `${TILDA}/tild3265-3530-4366-b337-626333356238/Component_4.png`,
} as const;

export type Client = {
  name: string;
  logo: string;
  href?: string;
};

export const clientsKz: Client[] = [
  { name: 'Kaspi.kz', href: 'https://kaspi.kz', logo: `${TILDA}/tild3661-3339-4330-a161-666537363261/photo.png` },
  { name: 'Kolesa.kz', href: 'https://kolesa.kz', logo: `${TILDA}/tild3437-3937-4533-a461-643161613362/kolesa.png` },
  { name: 'Krisha.kz', href: 'https://krisha.kz', logo: `${TILDA}/tild3935-3835-4965-b861-626237373363/krisha.png` },
  { name: 'Teez', href: 'https://teez.kz', logo: `${TILDA}/tild3330-3765-4138-b739-366138316234/teez.png` },
  { name: 'Alatau City Bank', href: 'https://alataucityinvest.kz/ru', logo: `${TILDA}/tild3264-3336-4630-b331-306438366536/alatau_city_bank.png` },
  { name: 'BCC', href: 'https://bcc.kz', logo: `${TILDA}/tild3932-3234-4538-a265-626135346332/bcc.png` },
  { name: 'ForteBank', href: 'https://forte.kz', logo: `${TILDA}/tild3931-6664-4930-b338-613433323937/forte.png` },
  { name: 'Respect', href: 'https://respect.kz/ru', logo: `${TILDA}/tild3065-3230-4837-b261-333939303330/recpect.png` },
  { name: 'Puma', href: 'https://puma.kz/', logo: `${TILDA}/tild3534-3730-4762-a530-626462643163/puma-white-logo-imag.png` },
  { name: 'Allur Auto', href: 'https://allur.kz', logo: `${TILDA}/tild6361-3237-4430-a361-626632373261/Allur_logo_red_1.png` },
  { name: 'Кинезио Доктор', href: 'https://kinesiodoctor.kz/', logo: `${TILDA}/tild6463-3633-4665-b336-633130336434/nashivka_Kinesio_doc.png` },
  { name: 'Henry Bonnar', href: 'https://kz.henrybonnar.com/', logo: `${TILDA}/tild6334-3662-4337-b037-623036626639/Logo_H_Bonnar_2020_p.png` },
  { name: 'Dream Moments', href: 'https://dream-moments.kz/', logo: `${TILDA}/tild3966-3130-4364-a566-663865336534/dream_moments.png` },
  { name: 'СтроимДом', href: 'https://stroimdom.kz', logo: `${TILDA}/tild6337-3336-4665-a362-376536386539/_.png` },
  { name: 'MasterCarp', href: 'https://master-carp.kz/', logo: `${TILDA}/tild3831-3836-4334-b666-613063353630/22.png` },
];

export const clientsIntl: Client[] = [
  // Semrush и Enegix на текущем сайте идут без ссылок — сохраняем как есть
  { name: 'Semrush', logo: `${TILDA}/tild6532-6235-4635-a432-646266313234/semrush.png` },
  { name: 'Higgsfield.ai', href: 'https://higgsfield.ai', logo: `${TILDA}/tild6637-3034-4236-a564-306331346139/Higgsfield_Logo.png` },
  { name: 'Hepsiburada', href: 'https://hepsiburada.com', logo: `${TILDA}/tild3739-6134-4564-b839-646239353833/hepsiburada.png` },
  { name: 'Chevrolet', href: 'https://chevrolet.uz/', logo: `${TILDA}/tild6664-3564-4366-b432-643432353137/1200px-Chevrolet_new.png` },
  { name: 'Atelier Wen', href: 'https://atelierwen.com', logo: `${TILDA}/tild3666-6463-4732-a431-376166633634/atelier.png` },
  { name: 'Enegix', logo: `${TILDA}/tild3538-6461-4064-a161-336134373634/enegix.png` },
  { name: 'Pickthebank', href: 'https://pickthebank.eu', logo: `${TILDA}/tild6335-3531-4930-b937-643561623063/pickthebank.png` },
  { name: 'Bay Fresh Flowers', href: 'https://bayfreshflowers.com', logo: `${TILDA}/tild3962-6266-4434-a666-336136333334/bay_fresh_flowers.png` },
  { name: 'AvtoElon', href: 'https://avtoelon.uz', logo: `${TILDA}/tild3164-6135-4662-b963-316435643664/avtoelon.png` },
  { name: 'eyemunich', href: 'https://eyemunich.com', logo: `${TILDA}/tild3262-3536-4261-b835-336564333936/__2025-10-18__133555.png` },
];

export const benefits = [
  {
    title: 'SEO — это рынок, где вас должны видеть',
    text: 'Поисковая выдача — это современный рынок, где клиенты выбирают, кому доверить деньги. Если ваш сайт не оптимизирован, вы просто отсутствуете на этом рынке — даже если у вас отличный продукт.',
  },
  {
    title: 'Продвижение в Google/Yandex',
    text: 'Мы делаем сайты полезными и технически безупречными. Учитываем более 200 факторов ранжирования, чтобы ваш проект стабильно рос в поиске и занимал место рядом с лидерами ниши.',
  },
  {
    title: 'Вывод проекта в ТОП-3 и ТОП-1',
    text: 'Чем выше вы в выдаче — тем больше кликов, заявок и продаж. Мы знаем, как довести сайт до верха и удерживать позиции даже при обновлениях алгоритмов.',
  },
  {
    title: 'Релевантный трафик и клиенты из органики',
    text: 'Посетители, пришедшие из поиска, уже ищут ваш продукт. Наша задача — привести этих людей и помочь вам убедить их, что именно вы лучший выбор.',
  },
  {
    title: 'Конверсия (CRO)',
    text: 'Когда трафик пошёл, важно превращать его в заявки. Мы оптимизируем UX, тексты и воронку, чтобы каждая сессия приближала вас к продаже.',
  },
  {
    title: 'Динамика и рост',
    text: 'Результат SEO — это не обещания, а цифры. Мы показываем рост в Google Analytics и Search Console: больше видимости, больше трафика, больше продаж.',
  },
] as const;
