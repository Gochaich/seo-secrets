import { Container, Section, SectionTitle } from '@/components/layout/container';
import { benefits } from '@content/ru/home';

export function Benefits() {
  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <SectionTitle className="text-center">
          Как SEO агентство влияет на бизнес?
        </SectionTitle>

        <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {benefits.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span
                aria-hidden
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
