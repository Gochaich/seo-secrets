import {
  Container,
  Section,
  SectionTitle,
} from '@/components/layout/container';
import { Glow, GlowStage } from '@/components/layout/glow';
import { process, processIntro, type ProcessStep } from '@content/ru/home';

function Step({ step, index }: { step: ProcessStep; index: number }) {
  const List = step.list?.ordered ? 'ol' : 'ul';

  return (
    <li className="grid gap-5 rounded-card-lg border border-border bg-surface p-6 md:grid-cols-[72px_1fr] md:p-8">
      <span
        aria-hidden
        className="font-mono text-4xl leading-none font-bold text-accent tabular-nums"
      >
        {index + 1}
      </span>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-balance">{step.title}</h3>

        {step.paragraphs.map((text) => (
          <p key={text} className="text-sm leading-relaxed text-muted">
            {text}
          </p>
        ))}

        {step.list && (
          <List
            className={`flex flex-col gap-1.5 pl-5 text-sm text-muted ${
              step.list.ordered ? 'list-decimal' : 'list-disc'
            }`}
          >
            {step.list.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </List>
        )}

        {step.duration && (
          <p className="text-sm text-subtle">⏱ {step.duration}</p>
        )}
      </div>
    </li>
  );
}

export function Process() {
  return (
    <GlowStage>
      <Glow tone="violet" className="-top-20 -left-40" size={700} />
      <Glow tone="blue" className="top-1/3 -right-52" size={760} />
      <Glow tone="cyan" className="-bottom-40 left-1/4" size={560} />

      <Section>
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <SectionTitle>Как мы работаем в SEO Secrets?</SectionTitle>
            <p className="text-[15px] text-muted">{processIntro}</p>
          </div>

          <ol className="flex flex-col gap-5">
            {process.map((step, index) => (
              <Step key={step.title} step={step} index={index} />
            ))}
          </ol>
        </Container>
      </Section>
    </GlowStage>
  );
}
