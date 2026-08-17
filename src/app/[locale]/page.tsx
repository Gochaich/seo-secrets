import { setRequestLocale } from 'next-intl/server';
import { Button, ButtonLink } from '@/components/ui/button';
import { Container, Section, SectionTitle } from '@/components/layout/container';
import { contacts } from '@/lib/site';

/**
 * Витрина дизайн-системы на время этапа 3.
 * Нужна, чтобы утвердить цвета, шрифт и компоненты до вёрстки страниц.
 * Удаляется на этапе 4, когда на её место встанет настоящая главная.
 */

const surfaces = [
  { token: 'bg-bg', hex: '#1E1E1E', role: 'Фон страницы' },
  { token: 'bg-surface', hex: '#232323', role: 'Карточки, подвал' },
  { token: 'bg-surface-2', hex: '#2A2A2A', role: 'Вложенные блоки' },
];

const accents = [
  { token: 'accent', hex: '#114BE8', role: 'Кнопки, ссылки, наведение' },
  { token: 'accent-hover', hex: '#0B30D9', role: 'Кнопка под курсором' },
  { token: 'cyan', hex: '#36E0FF', role: 'Подсветка цифр и результатов' },
  { token: 'yellow', hex: '#F5F04A', role: 'Второй акцент, редко' },
  { token: 'success', hex: '#27D061', role: 'Успех, положительная динамика' },
];

const texts = [
  { token: 'text-ink', hex: '#FFFFFF', role: 'Заголовки и основной текст' },
  { token: 'text-muted', hex: '#CFCFCF', role: 'Описания, подписи' },
  { token: 'text-subtle', hex: '#9B9D9F', role: 'Сноски, метаданные' },
];

export default async function DesignSystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Section className="pb-10">
        <Container className="flex flex-col gap-5">
          <span className="w-fit rounded-btn border border-border-strong px-3 py-1 text-xs font-semibold tracking-widest text-muted uppercase">
            Этап 3 · дизайн-система
          </span>
          <h1 className="max-w-3xl text-4xl leading-tight font-extrabold text-balance md:text-5xl">
            Цвета и шрифт сняты с текущего сайта
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Сайт останется узнаваемым: тот же тёмный фон, тот же синий, тот же
            Montserrat. Разница в том, что теперь каждое значение живёт в одном
            файле и не может разъехаться по страницам.
          </p>
        </Container>
      </Section>

      <Section className="py-12">
        <Container className="flex flex-col gap-8">
          <SectionTitle>Палитра</SectionTitle>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-subtle uppercase">
              Поверхности
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {surfaces.map((c) => (
                <div
                  key={c.hex}
                  className="rounded-card border border-border p-5"
                  style={{ background: c.hex }}
                >
                  <div className="font-mono text-sm">{c.hex}</div>
                  <div className="mt-1 text-sm text-muted">{c.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-subtle uppercase">
              Акценты
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {accents.map((c) => (
                <div
                  key={c.hex}
                  className="overflow-hidden rounded-card border border-border bg-surface"
                >
                  <div className="h-16" style={{ background: c.hex }} />
                  <div className="p-4">
                    <div className="font-mono text-sm">{c.hex}</div>
                    <div className="mt-1 text-sm text-muted">{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-subtle uppercase">
              Текст
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {texts.map((c) => (
                <div
                  key={c.hex}
                  className="rounded-card border border-border bg-surface p-5"
                >
                  <div className={`text-lg font-semibold ${c.token}`}>
                    Пример текста
                  </div>
                  <div className="mt-1 font-mono text-xs text-subtle">
                    {c.hex}
                  </div>
                  <div className="mt-1 text-sm text-muted">{c.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-card-lg bg-brand-gradient p-8">
            <p className="text-lg font-bold text-white">
              Градиент для акцентных блоков — с карточек кейсов
            </p>
            <p className="mt-1 font-mono text-sm text-white/80">
              #0018F0 → #00B4F0 → #00C2EA
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container className="flex flex-col gap-8">
          <SectionTitle>Типографика</SectionTitle>
          <p className="max-w-2xl text-muted">
            Montserrat с кириллицей. Сейчас на сайте шрифт задан только части
            блоков — остальные падают на системный. Здесь он один на всё.
          </p>
          <div className="flex flex-col gap-6 rounded-card border border-border bg-surface p-8">
            <div>
              <span className="font-mono text-xs text-subtle">
                H1 · 48px · 800
              </span>
              <p className="text-5xl leading-tight font-extrabold">
                SEO продвижение от агентства SEO Secrets
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-subtle">
                H2 · 34px · 800
              </span>
              <p className="text-[34px] leading-tight font-extrabold">
                Как SEO агентство влияет на бизнес
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-subtle">
                H3 · 20px · 700
              </span>
              <p className="text-xl font-bold">Техническое SEO-здоровье</p>
            </div>
            <div>
              <span className="font-mono text-xs text-subtle">
                Основной текст · 16px
              </span>
              <p className="max-w-[65ch] text-base text-muted">
                Поисковая выдача — это современный рынок, где клиенты выбирают,
                кому доверить деньги. Если сайт не оптимизирован, вы просто
                отсутствуете на этом рынке — даже с отличным продуктом.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container className="flex flex-col gap-8">
          <SectionTitle>Кнопки</SectionTitle>
          <div className="flex flex-col gap-6 rounded-card border border-border bg-surface p-8">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink href={contacts.whatsapp} target="_blank" rel="noopener">
                Обсудить проект
              </ButtonLink>
              <Button variant="outline">Бесплатный экспресс-аудит</Button>
              <Button variant="ghost">{contacts.phoneFormatted}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Маленькая</Button>
              <Button size="md">Обычная</Button>
              <Button size="lg">Крупная</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-12">
        <Container className="flex flex-col gap-8">
          <SectionTitle>Карточка кейса</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="flex flex-col gap-3 rounded-card-lg border border-border bg-surface p-6">
              <h3 className="text-base font-bold">
                Master Carp · Карпфишинг
              </h3>
              <p className="text-sm text-subtle">
                E-commerce · Премиальный сегмент
              </p>
              <div className="flex flex-wrap gap-2">
                {['Трафик: +270%', 'Заявки: +290%', 'ТОП-3: 45% запросов'].map(
                  (kpi) => (
                    <span
                      key={kpi}
                      className="rounded-btn border border-border-strong px-3 py-1 text-xs text-muted"
                    >
                      {kpi}
                    </span>
                  ),
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Исправили технические ошибки, перестроили структуру и связали SEO
                с сильным брендом.
              </p>
            </article>

            <article className="flex flex-col justify-center gap-2 rounded-card-lg border border-border bg-surface p-6">
              <span className="font-mono text-xs tracking-widest text-subtle uppercase">
                Цена лида
              </span>
              <p className="text-4xl font-extrabold text-cyan">≈ 216 ₸</p>
              <p className="text-sm text-muted">
                SEO против <span className="text-ink">≈ 2 958 ₸</span> у платной
                рекламы — дешевле в 13,7 раза
              </p>
            </article>
          </div>
        </Container>
      </Section>
    </main>
  );
}
