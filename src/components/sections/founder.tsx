import Image from 'next/image';
import { ButtonLink } from '@/components/ui/button';
import { Container, Section } from '@/components/layout/container';
import { whatsappWithText } from '@/lib/site';
import { founder } from '@content/ru/home';

export function Founder() {
  return (
    <Section>
      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-6">
          <h2 className="max-w-[20ch] text-3xl leading-tight font-bold tracking-wide text-balance md:text-[34px]">
            {founder.title}
          </h2>
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-muted">
            {founder.text}
          </p>

          <ul className="flex flex-col gap-3">
            {founder.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan"
                />
                <span className="text-[15px] text-muted">{fact}</span>
              </li>
            ))}
          </ul>

          <ButtonLink href={whatsappWithText} target="_blank" rel="noopener">
            Связаться в WhatsApp
          </ButtonLink>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={founder.photo}
            alt="Максим Гайдар, основатель агентства SEO Secrets"
            width={407}
            height={550}
            className="h-auto w-full max-w-[407px] rounded-card object-cover"
          />
        </div>
      </Container>
    </Section>
  );
}
