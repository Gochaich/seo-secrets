import Image from 'next/image';
import { tools, toolsIntro, type Tool } from '@content/ru/home';

/** Три кружка перед названием Monday — часть их логотипа */
const MONDAY_DOTS = ['#f62e36', '#ffad00', '#00c875'];

function ToolMark({ tool }: { tool: Tool }) {
  if (tool.logo) {
    return (
      <Image
        src={tool.logo}
        alt=""
        aria-hidden
        width={90}
        height={44}
        className="max-h-11 w-auto max-w-[90px] object-contain"
      />
    );
  }

  if (!tool.wordmark) return null;

  return (
    <span aria-hidden className="flex items-center gap-1.5">
      {tool.wordmark.dots &&
        MONDAY_DOTS.map((dot) => (
          <span
            key={dot}
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: dot }}
          />
        ))}
      <span
        className="font-extrabold whitespace-nowrap"
        style={{ color: tool.wordmark.color, fontSize: tool.wordmark.size }}
      >
        {tool.wordmark.text}
      </span>
    </span>
  );
}

/**
 * «SEO и AI SEO инструменты, которыми мы пользуемся»: 16 плиток по 6 в ряд.
 *
 * Содержимое 1090px, зазор 26px — плитка выходит 160px. В последнем ряду
 * четыре плитки, они центрируются сдвигом на колонку: при шести колонках
 * четыре по центру оставляют ровно по одной свободной с каждой стороны.
 *
 * У восьми инструментов на плитке картинка, у восьми — название в фирменном
 * цвете. Это не наш выбор, а разметка текущего сайта: у половины сервисов
 * там просто нет файла логотипа.
 */
export function Tools() {
  return (
    <section className="py-section">
      <div className="mx-auto w-full max-w-[1130px] px-page">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {toolsIntro.title}
        </h2>
        <p className="text-muted mt-3 text-center text-[15px]">
          {toolsIntro.lead}
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-[26px] md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool, index) => (
            <li
              key={tool.name}
              className={`bg-surface flex min-h-[110px] flex-col items-center justify-center gap-3 rounded-2xl px-3 py-5 text-center sm:min-h-[130px] sm:gap-3.5 sm:py-6 ${
                // Тринадцатая плитка открывает последний ряд из четырёх
                index === 12 ? 'lg:col-start-2' : ''
              }`}
            >
              <span className="flex h-11 items-center justify-center">
                <ToolMark tool={tool} />
              </span>

              <span className="text-sm leading-[1.3]">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
