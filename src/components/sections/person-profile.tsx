import Image from 'next/image';
import { rich } from '@/lib/rich-text';
import type { Person, PersonBlock } from '@content/ru/people';

/**
 * Личная страница сотрудника: карточка с фото и представлением, ниже —
 * плитка карточек в две колонки.
 *
 * Значения взяты из CSS текущего сайта (reference/html/team-*.html):
 * содержимое 1100px, колонка с фото 320px, зазор 28px, карточка со
 * скруглением 16px и подложкой 20px, фото 360x360 со скруглением 20px.
 * Отступы секции 185px сверху и снизу уменьшены вдвое — как и везде
 * по сайту после правки отступов.
 *
 * Набор блоков у сотрудников разный: у Александра, Валерии и Регины нет
 * плашек с цифрами, у Георгия лишний блок с сертификатами, у Валерии в
 * «О специалисте» под текстом ещё и список. Поэтому блок здесь рисуется
 * по тому, какие поля у него заполнены, а не по жёсткой схеме.
 */

/**
 * Чип с навыком или нишей. Градиент лежит отдельным слоем под текстом
 * и проявляется по наведению — ровно как ::before на оригинале.
 */
function Chip({ label }: { label: string }) {
  return (
    <li className="border-border hover:chip-glow relative isolate rounded-full border bg-white/[0.04] px-3 py-1.5 text-xs transition-[border-color,transform,box-shadow] duration-200 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-[image:var(--gradient-badge)] before:opacity-0 before:transition-opacity before:duration-200 hover:-translate-y-px hover:border-transparent hover:before:opacity-100">
      {label}
    </li>
  );
}

function Block({ block }: { block: PersonBlock }) {
  return (
    <div className="person-card flex-[1_1_calc(50%-14px)] p-5">
      <h2 className="mb-3.5 text-xl font-bold">{block.title}</h2>

      {block.text && (
        <p className="text-[15px] leading-[1.65]">{rich(block.text)}</p>
      )}

      {block.kpi && (
        <dl className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {block.kpi.map((item) => (
            <div
              key={item.cap}
              className="border-border rounded-xl border bg-white/[0.04] p-3 text-center"
            >
              <dt className="sr-only">{item.cap}</dt>
              <dd>
                <span className="block text-xl font-extrabold">{item.num}</span>
                <span className="text-muted block text-xs">{item.cap}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {block.items && (
        <ul
          className={`flex flex-col gap-2 text-[15px] leading-[1.65] ${
            block.text ? 'mt-3' : ''
          }`}
        >
          {block.items.map((item) => (
            <li key={item}>{rich(item)}</li>
          ))}
        </ul>
      )}

      {block.chips && (
        <ul className="flex flex-wrap gap-2">
          {block.chips.map((chip) => (
            <Chip key={chip} label={chip} />
          ))}
        </ul>
      )}
    </div>
  );
}

export function PersonProfile({ person }: { person: Person }) {
  return (
    <section className="px-page py-10 sm:py-14 lg:py-[92px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-start gap-7 lg:grid-cols-[320px_1fr]">
          <div className="person-card p-5">
            <div className="relative mx-auto h-[360px] w-full max-w-[360px] overflow-hidden rounded-[20px] bg-black">
              <Image
                src={person.photo}
                alt={`Фото: ${person.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 360px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="person-card p-5">
            <h1 className="mb-2.5 text-[38px] leading-[1.15] font-extrabold">
              {person.name}
            </h1>
            <p className="text-accent-soft mt-1 mb-4 font-bold">
              {person.role}
            </p>
            <p className="text-base leading-[1.7]">{rich(person.intro)}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {person.badges.map((badge) => (
                <li
                  key={badge}
                  className="bg-badge-gradient rounded-full px-2.5 py-1.5 text-xs"
                >
                  {badge}
                </li>
              ))}
            </ul>

            {person.note && (
              <p className="text-muted mt-4 text-xs">{person.note}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-7">
          {person.blocks.map((block) => (
            <Block key={block.title} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
