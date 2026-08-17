import Image from 'next/image';
import { Container, Section } from '@/components/layout/container';
import { impactExample } from '@content/ru/home';

export function ImpactExample() {
  return (
    <Section className="py-12">
      <Container className="grid items-center gap-8 md:grid-cols-2">
        <p className="text-base leading-relaxed">
          <strong className="font-bold text-accent">
            {impactExample.label}
          </strong>{' '}
          <span className="text-muted">{impactExample.text}</span>
        </p>

        <Image
          src={impactExample.image}
          alt="График роста трафика из Google: с нуля до ~500 кликов в день к ноябрю"
          width={1200}
          height={600}
          className="h-auto w-full rounded-[4px]"
        />
      </Container>
    </Section>
  );
}
