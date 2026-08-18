import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import {
  Container,
  Section,
  SectionTitle,
} from '@/components/layout/container';
import { Glow, GlowStage } from '@/components/layout/glow';
import { team, type TeamMember } from '@content/ru/home';

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative aspect-[384/476] overflow-hidden rounded-card bg-surface-2">
      <Image
        src={member.photo}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      {/* Вторая фотография проявляется при наведении — как на текущем сайте */}
      <Image
        src={member.photoHover}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
        <h3 className="text-lg leading-tight font-bold">{member.name}</h3>
        <p className="text-[13px] text-white/90">{member.role}</p>
        <p className="text-[13px] text-white/90">{member.experience}</p>
        <Link
          href={member.href}
          className="mt-1 w-fit text-[13px] font-bold text-ink transition-transform hover:scale-105"
        >
          Подробнее
          <span className="sr-only"> о специалисте {member.name}</span>
        </Link>
      </div>
    </article>
  );
}

export function Team() {
  return (
    <GlowStage>
      <Glow tone="blue" className="top-1/4 -right-40" size={700} />
      <Glow tone="cyan" className="-bottom-24 left-0" size={520} />

      <Section>
        <Container className="flex flex-col gap-12">
          <SectionTitle className="text-center">
            Команда экспертов SEO Secrets
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {team.map((member) => (
              <TeamCard key={member.href} member={member} />
            ))}
          </div>
        </Container>
      </Section>
    </GlowStage>
  );
}
