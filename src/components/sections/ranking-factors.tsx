import { Container, Section, SectionTitle } from '@/components/layout/container';
import { rankingFactors } from '@content/ru/home';

export function RankingFactors() {
  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <SectionTitle className="mx-auto max-w-3xl text-center">
          7 основных факторов ранжирования, с которыми мы работаем в SEO Secrets
        </SectionTitle>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rankingFactors.map((factor, index) => (
            <li
              key={factor.title}
              className="flex flex-col gap-3 rounded-card border border-border bg-surface p-6"
            >
              <span
                aria-hidden
                className="font-mono text-xs text-accent tabular-nums"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-bold text-balance">
                {factor.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted">
                {factor.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
