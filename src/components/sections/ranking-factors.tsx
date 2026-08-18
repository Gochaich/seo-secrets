import { rich } from '@/lib/rich-text';
import { rankingFactors, rankingFactorsTitle } from '@content/ru/home';

/**
 * «7 основных факторов ранжирования»: 4 карточки в первом ряду, 3 во втором.
 *
 * Сетка одна на оба ряда и разбита на 24 колонки. Так решаются сразу две
 * задачи: второй ряд из трёх карточек встаёт ровно по центру относительно
 * первого (со смещением в 3 колонки), а карточки обоих рядов получают
 * одинаковую высоту — двумя отдельными сетками этого не добиться.
 * При 24 колонках и зазоре 30px карточка выходит 232px, как на оригинале.
 */
export function RankingFactors() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] left-1/2 h-[420px] w-[1100px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,var(--color-yellow)_0%,var(--color-yellow)_46%,var(--color-green)_72%,transparent_88%)] opacity-80 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[55%] -left-32 h-[340px] w-[440px] rounded-full bg-[radial-gradient(circle,var(--color-cyan)_0%,transparent_70%)] opacity-50 blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1060px] px-5">
        <h2 className="text-center text-3xl leading-[1.5] font-extrabold text-balance md:text-[34px]">
          {rich(rankingFactorsTitle)}
        </h2>

        <ul className="mt-12 grid auto-rows-fr gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-[repeat(24,minmax(0,1fr))]">
          {rankingFactors.map((factor, index) => (
            <li
              key={factor.title}
              className={`bg-surface rounded-2xl p-5 text-center lg:col-span-6 ${
                // Пятая карточка открывает второй ряд и задаёт ему сдвиг
                index === 4 ? 'lg:col-start-4' : ''
              }`}
            >
              {/*
                Заголовок центрируется в блоке фиксированной высоты: у первой
                карточки он в две строки, у остальных в одну, а тексты под
                ними на оригинале начинаются на одном уровне.
              */}
              <h3 className="flex min-h-[52px] items-center justify-center text-[15px] leading-[1.5] font-bold">
                {factor.title}
              </h3>

              <p className="text-muted mt-8 text-sm leading-[1.55]">
                {factor.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
