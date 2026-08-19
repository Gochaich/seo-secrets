import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { rich } from '@/lib/rich-text';
import { process, processIntro, type ProcessStep } from '@content/ru/home';

function Step({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <li className="rounded-card-lg bg-surface grid grid-cols-[56px_1fr] gap-x-[23px] px-[45px] py-7">
      <span className="bg-step-gradient flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold">
        {index + 1}
      </span>

      <div>
        <h3 className="text-[17px] leading-[1.6] font-bold">{step.title}</h3>

        <div className="text-muted mt-4 flex flex-col gap-4 text-sm leading-[1.55]">
          {step.blocks.map((block, blockIndex) =>
            block.type === 'text' ? (
              <p key={blockIndex}>{rich(block.value)}</p>
            ) : block.ordered ? (
              <ol key={blockIndex} className="list-decimal pl-5">
                {block.items.map((item) => (
                  <li key={item}>{rich(item)}</li>
                ))}
              </ol>
            ) : (
              <ul key={blockIndex} className="list-disc pl-5">
                {block.items.map((item) => (
                  <li key={item}>{rich(item)}</li>
                ))}
              </ul>
            ),
          )}

          {step.duration && <p>{step.duration}</p>}
        </div>
      </div>
    </li>
  );
}

/**
 * «Как мы работаем в SEO Secrets?» — четыре этапа карточками.
 *
 * Ширина содержимого 850px: карточки заметно уже остальных блоков.
 * Кружок с номером 56px, колонка под него плюс зазор — 79px.
 *
 * Фоновые пятна повторяют PNG с Tilda: жёлто-зелёное слева у первых этапов
 * и синее справа у последних. Сделаны градиентами — не тянут файлы с CDN
 * и не уезжают за край на промежуточных ширинах.
 */
export function Process() {
  return (
    <section className="relative py-10 md:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[2%] -left-32 h-[560px] w-[640px] rounded-full bg-[radial-gradient(circle,var(--color-yellow)_0%,var(--color-yellow)_34%,var(--color-green)_62%,transparent_80%)] opacity-80 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[58%] -right-40 h-[560px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--color-accent-bright)_0%,var(--color-accent)_45%,transparent_72%)] opacity-80 blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[890px] px-5">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          Как мы работаем в SEO Secrets?
        </h2>
        <p className="text-muted mt-3 text-center text-sm">{processIntro}</p>

        <ol className="mt-10 flex flex-col gap-8">
          {process.map((step, index) => (
            <Step key={step.title} step={step} index={index} />
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
