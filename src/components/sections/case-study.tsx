import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { VideoEmbed } from '@/components/ui/video-embed';
import { rich } from '@/lib/rich-text';
import {
  caseAuthors,
  caseConclusion,
  caseDemand,
  caseGraphs,
  caseHero,
  caseProject,
  caseResults,
  caseReview,
  caseStrategy,
} from '@content/ru/case-master-carp';

/**
 * Кейс Master Carp целиком.
 *
 * Значения взяты из CSS текущего сайта: содержимое 1100px, карточка первого
 * экрана со скруглением 28px и подложкой 40/36, зазор между секциями 56px,
 * плашки KPI со скруглением 18px. Отступы страницы 185px сверху уменьшены
 * вдвое — как и везде по сайту после правки отступов.
 *
 * Два фоновых пятна на оригинале прибиты к абсолютным координатам (top:380px
 * и top:2000px) и на других длинах текста разъезжаются. Здесь они привязаны
 * к своим секциям: левое к рассказу о проекте, правое к результатам — то же
 * место по смыслу, но не зависит от того, на сколько строк лёг абзац.
 */

/** Плашка с числом. Градиент проявляется по наведению — как на оригинале. */
function StatPill({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="hover:chip-glow relative isolate overflow-hidden rounded-[18px] border border-white/[0.14] bg-white/[0.04] p-4 transition-[border-color,transform,box-shadow] duration-200 before:absolute before:-inset-px before:-z-10 before:bg-[image:var(--gradient-badge)] before:opacity-0 before:transition-opacity before:duration-200 hover:-translate-y-px hover:border-transparent hover:before:opacity-100">
      <p className="text-muted text-xs tracking-[0.08em] uppercase">{label}</p>
      <p className="mt-1.5 text-xl leading-[1.3] font-extrabold">{value}</p>
      <p className="mt-1.5 text-[13px] leading-[1.6]">{note}</p>
    </div>
  );
}

function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <>
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">{title}</h2>
      {text && (
        <p className="text-muted mt-2.5 max-w-[720px] text-[15px] leading-[1.7]">
          {text}
        </p>
      )}
    </>
  );
}

export function CaseStudyMasterCarp() {
  return (
    <div className="px-page py-10 sm:py-14 lg:py-[92px]">
      <div className="mx-auto max-w-[1100px]">
        {/* ПЕРВЫЙ ЭКРАН */}
        <section className="bg-surface grid items-center gap-10 rounded-[28px] border border-white/[0.07] px-6 py-7 sm:px-9 sm:py-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-muted mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-black/55 px-2.5 py-1 text-xs tracking-[0.08em] uppercase">
              <span
                aria-hidden
                className="bg-step-gradient block h-2 w-2 rounded-full"
              />
              {caseHero.label}
            </p>

            <h1 className="text-2xl leading-[1.25] font-extrabold sm:text-[32px]">
              {caseHero.title}
            </h1>
            <p className="mt-3 max-w-[520px] text-base leading-[1.7]">
              {caseHero.text}
            </p>

            <ul className="text-subtle mt-[22px] flex flex-wrap gap-x-4 gap-y-2.5 text-[13px]">
              {caseHero.meta.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="block h-1.5 w-1.5 rounded-full bg-white/30"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {caseHero.kpi.map((item) => (
              <StatPill key={item.label} {...item} />
            ))}
          </div>
        </section>

        {/* О ПРОЕКТЕ */}
        <section className="relative mt-14">
          {/*
           * Синее пятно. На оригинале прибито к top:380px — здесь привязано
           * к этой секции, чтобы не разъезжаться при другой длине текста.
           */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[120px] -left-[240px] -z-10 h-[420px] w-[420px] opacity-45 sm:h-[700px] sm:w-[700px] sm:opacity-85"
          >
            <Image
              src="/images/decor/about-glow-blue.png"
              alt=""
              fill
              sizes="(min-width: 640px) 700px, 420px"
              className="object-contain"
            />
          </div>

          <SectionHeading title={caseProject.title} text={caseProject.text} />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="font-bold">{caseProject.clientHeading}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-[18px] text-[15px] leading-[1.7]">
                {caseProject.clientItems.map((item) => (
                  <li key={item}>{rich(item)}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold">{caseProject.brandHeading}</h3>
              <p className="text-muted mt-3 text-[15px] leading-[1.7]">
                {caseProject.brandText}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {caseProject.brandTags.map((tag) => (
                  <li
                    key={tag}
                    className="text-muted rounded-full border border-white/[0.12] bg-white/[0.03] px-2.5 py-1 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* СПРОС: СОЦСЕТИ, КОМЬЮНИТИ, YOUTUBE */}
        <section className="mt-14">
          <SectionHeading title={caseDemand.title} text={caseDemand.text} />

          <ul className="mt-6 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {caseDemand.cards.map((card) => (
              <li
                key={card.title}
                className="rounded-[18px] border border-border bg-[#202020] px-[18px] pt-[18px] pb-5"
              >
                <h3 className="mb-2 text-base font-bold">{card.title}</h3>
                <p className="text-muted text-sm leading-[1.7]">{card.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* СТРАТЕГИЯ */}
        <section className="mt-14">
          <SectionHeading title={caseStrategy.title} text={caseStrategy.text} />

          <ol className="mt-6 grid gap-7 lg:grid-cols-2 lg:gap-10">
            {caseStrategy.steps.map((step) => (
              <li key={step.number} className="flex items-start gap-5">
                <span
                  aria-hidden
                  className="bg-badge-gradient mt-0.5 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-xl font-semibold shadow-[0_0_14px_rgba(0,180,240,0.4)]"
                >
                  {step.number}
                </span>
                <div className="flex-1">
                  <h3 className="mb-2.5 text-xl font-bold">{step.title}</h3>
                  <ul className="list-disc space-y-1.5 pl-4 text-sm leading-[1.7]">
                    {step.items.map((item) => (
                      <li key={item}>{rich(item)}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* РЕЗУЛЬТАТЫ */}
        <section className="relative mt-14">
          {/* Оранжевое пятно. На оригинале top:2000px — здесь у результатов. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[60px] -right-[240px] -z-10 h-[420px] w-[420px] opacity-45 sm:h-[700px] sm:w-[700px] sm:opacity-85"
          >
            <Image
              src="/images/decor/about-glow-orange.png"
              alt=""
              fill
              sizes="(min-width: 640px) 700px, 420px"
              className="object-contain"
            />
          </div>

          <SectionHeading title={caseResults.title} text={caseResults.text} />

          <div className="mt-3 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {caseResults.items.map((item) => (
              <StatPill key={item.label} {...item} />
            ))}
          </div>

          <p className="text-subtle mt-4 max-w-[720px] text-sm leading-[1.7]">
            {caseResults.note}
          </p>
        </section>

        {/* ГРАФИКИ */}
        <section className="mt-14">
          <SectionHeading title={caseGraphs.title} />

          <ul className="mt-6 grid gap-[22px] sm:grid-cols-2">
            {caseGraphs.items.map((graph) => (
              <li
                key={graph.src}
                className="flex flex-col gap-2.5 rounded-[20px] border border-border bg-[#202020] px-4 pt-4 pb-[18px]"
              >
                <h3 className="text-[15px] font-bold">{graph.title}</h3>
                <p className="text-muted text-[13px] leading-[1.7]">
                  {graph.note}
                </p>
                <Image
                  src={graph.src}
                  alt={graph.alt}
                  width={1200}
                  height={700}
                  sizes="(min-width: 640px) 520px, 100vw"
                  className="mt-1.5 h-auto w-full rounded-xl border border-dashed border-white/[0.18]"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* ВЫВОДЫ */}
        <section className="mt-14">
          <SectionHeading
            title={caseConclusion.title}
            text={caseConclusion.text}
          />
          <ul className="mt-2.5 list-disc space-y-1.5 pl-[18px] text-[15px] leading-[1.7]">
            {caseConclusion.items.map((item) => (
              <li key={item}>{rich(item)}</li>
            ))}
          </ul>
        </section>

        {/* КОМАНДА ПРОЕКТА */}
        <section className="pt-[60px] pb-10">
          <h2 className="mb-[22px] text-[22px] font-extrabold">
            {caseAuthors.title}
          </h2>

          <ul className="grid gap-[22px] lg:grid-cols-2">
            {caseAuthors.items.map((author) => (
              <li
                key={author.href}
                className="bg-surface grid gap-5 rounded-3xl border border-white/[0.09] px-[22px] py-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:px-[26px] sm:py-6"
              >
                <Image
                  src={author.photo}
                  alt={author.name}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] shrink-0 rounded-[22px] border border-white/[0.12] object-cover"
                />
                <div>
                  <p className="text-subtle mb-1.5 text-[11px] tracking-[0.11em] uppercase">
                    {author.label}
                  </p>
                  <h3 className="mb-0.5 text-[18px] font-extrabold">
                    {author.name}
                  </h3>
                  <p className="text-muted mb-2.5 text-sm">{author.role}</p>
                  <p className="mb-2.5 text-sm leading-[1.7]">{author.bio}</p>

                  <ul className="mb-3 flex flex-wrap gap-2">
                    {author.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-muted rounded-full border border-white/[0.14] bg-white/[0.04] px-2.5 py-1 text-[11px] whitespace-nowrap"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/*
                   * Подчёркивание — градиентная полоска, которая по наведению
                   * «переливается» слева направо: на оригинале это сдвиг
                   * background-position у ::after.
                   */}
                  <Link
                    href={author.href}
                    className="group relative mt-1 inline-flex items-center gap-1.5 pb-[3px] text-[13px] font-semibold"
                  >
                    {author.linkLabel}
                    <span aria-hidden className="opacity-90">
                      →
                    </span>
                    <span
                      aria-hidden
                      className="bg-gradient-link absolute inset-x-0 bottom-0 h-0.5 rounded-full opacity-70 transition-[background-position,opacity] duration-300 group-hover:bg-right group-hover:opacity-100"
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ОТЗЫВ КЛИЕНТА */}
        <section className="mt-14">
          <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
            {caseReview.title}
          </h2>
          <div className="mx-auto mt-8 max-w-[960px]">
            <VideoEmbed
              youtubeId={caseReview.youtubeId}
              title={`${caseReview.title}: Master Carp`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
