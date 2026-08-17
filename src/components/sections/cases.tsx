import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container, Section, SectionTitle } from '@/components/layout/container';
import { cases, casesIntro, type CaseStudy } from '@content/ru/home';

function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <article className="flex flex-col gap-3 rounded-card-lg border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold">{item.title}</h3>
          <p className="mt-1 text-[13px] text-subtle">{item.meta}</p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-border-strong bg-bg text-[11px] font-bold">
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
            className="rounded-btn border border-border-strong bg-white/5 px-2.5 py-1 text-xs whitespace-nowrap text-ink/95"
          >
            {kpi}
          </li>
        ))}
      </ul>

      <p className="text-sm leading-relaxed text-muted">{item.text}</p>

      <ul className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-btn border border-border px-2.5 py-0.5 text-[11px] whitespace-nowrap text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3 text-[13px]">
        <span className="text-subtle">{item.goal}</span>
        {item.href && (
          <Link
            href={item.href}
            className="font-bold whitespace-nowrap text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Смотреть кейс
          </Link>
        )}
      </div>
    </article>
  );
}

export function Cases() {
  return (
    <Section>
      <Container className="flex flex-col gap-9">
        <div className="flex flex-col items-center gap-2 text-center">
          <SectionTitle>Кейсы агентства SEO Secrets</SectionTitle>
          <p className="text-[15px] text-muted">{casesIntro}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
