import Image from 'next/image';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { whatsappWithText } from '@/lib/site';
import { hero } from '@content/ru/home';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-8 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-6">
          <h1 className="max-w-[18ch] text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-[60ch] text-lg leading-relaxed text-muted">
            {hero.lead}
          </p>
          <ButtonLink
            href={whatsappWithText}
            target="_blank"
            rel="noopener"
            size="lg"
          >
            Связаться в WhatsApp
          </ButtonLink>
        </div>

        <div aria-hidden className="hidden justify-center lg:flex">
          <Image
            src={hero.image}
            alt=""
            width={520}
            height={520}
            priority
            className="h-auto w-full max-w-[520px] drop-shadow-[0_20px_80px_rgba(0,180,255,0.25)]"
          />
        </div>
      </Container>
    </section>
  );
}
