import Image from 'next/image';
import { tools, toolsIntro } from '@content/ru/home';

/**
 * «SEO и AI SEO инструменты, которыми мы пользуемся»: 16 плиток по 6 в ряд.
 *
 * Содержимое 1090px, зазор 26px — плитка выходит 160px. В последнем ряду
 * четыре плитки, они центрируются сдвигом на колонку: при шести колонках
 * четыре по центру оставляют ровно по одной свободной с каждой стороны.
 *
 * Часть плиток на текущем сайте — картинки, часть — название в фирменном
 * цвете сервиса. Логотипы, адресов которых у нас нет, показываются вторым
 * способом; какие именно — в docs/AUDIT.md, п. 14.
 */
export function Tools() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1130px] px-5">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {toolsIntro.title}
        </h2>
        <p className="text-muted mt-3 text-center text-[15px]">
          {toolsIntro.lead}
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-[26px] sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool, index) => (
            <li
              key={tool.name}
              className={`bg-surface flex min-h-[130px] flex-col items-center justify-center gap-3.5 rounded-2xl px-3 py-6 text-center ${
                // Тринадцатая плитка открывает последний ряд из четырёх
                index === 12 ? 'lg:col-start-2' : ''
              }`}
            >
              <span className="flex h-11 items-center justify-center">
                {tool.logo ? (
                  <Image
                    src={tool.logo}
                    alt=""
                    aria-hidden
                    width={44}
                    height={44}
                    className="h-11 w-auto object-contain"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="text-sm font-bold"
                    style={{ color: tool.color }}
                  >
                    {tool.wordmark ?? tool.name}
                  </span>
                )}
              </span>

              <span className="text-sm leading-[1.3]">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
