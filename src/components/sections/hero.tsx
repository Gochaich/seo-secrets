import Image from 'next/image';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { Glow } from '@/components/layout/glow';
import { whatsappWithText } from '@/lib/site';
import { hero } from '@content/ru/home';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Glow tone="blue" className="-top-40 right-0" size={780} />
      <Glow tone="cyan" className="top-16 right-1/4" size={520} />
      <Glow tone="violet" className="-bottom-40 -left-40" size={640} />
      <Container className="grid items-center gap-8 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-6">
          <h1 className="max-w-[18ch] text-[40px] leading-[1.12] font-bold tracking-tight text-balance md:text-[56px]">
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
