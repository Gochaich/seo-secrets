import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { cases, casesIntro, type CaseStudy } from '@content/ru/home';

function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <article className="rounded-card-lg surface-card flex flex-col gap-3 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold">{item.title}</h3>
          <p className="text-subtle mt-1 text-[13px]">{item.meta}</p>
        </div>

        <div className="border-border-strong bg-bg flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border text-[11px] font-bold">
          {item.logo ? (
            <Image
              src={item.logo}
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          ) : (
            item.initials
          )}
        </div>
      </div>

      <ul className="flex flex-wrap gap-2">
        {item.kpis.map((kpi) => (
          <li
            key={kpi}
            className="rounded-btn border-border-strong text-ink/95 border bg-white/5 px-2.5 py-1 text-xs whitespace-nowrap"
          >
            {kpi}
          </li>
        ))}
      </ul>

      <p className="text-muted text-sm leading-relaxed">{item.text}</p>

      <ul className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-btn border-border text-muted border px-2.5 py-0.5 text-[11px] whitespace-nowrap"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="border-border mt-auto flex items-center justify-between gap-3 border-t pt-3 text-[13px]">
        <span className="text-subtle">{item.goal}</span>

        {/*
          Ссылка появляется только там, где страница кейса существует.
          У Kinesio Doctor и Degen-ne.kz на Tilda она ведёт на «#» — см.
          docs/AUDIT.md, п. 11. Появятся страницы — добавьте href в content,
          кнопка встанет сама.
        */}
        {item.href && (
          <Link
            href={item.href}
            className="decoration-accent text-ink hover:text-accent font-bold whitespace-nowrap underline decoration-2 underline-offset-4 transition-colors"
          >
            Смотреть кейс
          </Link>
        )}
      </div>
    </article>
  );
}

/** «Кейсы агентства SEO Secrets»: три карточки в ряд, на планшете — две. */
export function Cases() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-9 px-5">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
            Кейсы агентства SEO Secrets
          </h2>
          <p className="text-muted text-[15px]">{casesIntro}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
