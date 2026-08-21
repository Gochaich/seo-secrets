import { Database } from 'lucide-react';
import { tools, toolsIntro, type Tool } from '@content/ru/home';

const TOOL_LOGO_SPRITE = '/images/tools/tools-sprite.svg';

function ToolMark({ tool }: { tool: Tool }) {
  if (!tool.logoId) {
    return (
      <Database
        aria-hidden
        className="h-11 w-11 text-[#d6d7db]"
        strokeWidth={1.7}
      />
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 120 56"
      className="h-14 w-[120px]"
      focusable="false"
    >
      <use href={TOOL_LOGO_SPRITE + '#' + tool.logoId} />
    </svg>
  );
}

/**
 * «SEO и AI SEO инструменты, которыми мы пользуемся»: 18 плиток по 6 в ряд.
 *
 * Официальные знаки инструментов хранятся локально в одном SVG-спрайте:
 * так карточки не зависят от внешних CDN и загружают один файл. У SQL нет
 * единого официального логотипа, поэтому для него используется нейтральная
 * иконка базы данных.
 *
 * Содержимое 1090px, зазор 26px — плитка выходит 160px.
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
          {tools.map((tool) => (
            <li
              key={tool.name}
              className="bg-surface flex min-h-[110px] flex-col items-center justify-center gap-3 rounded-2xl px-3 py-5 text-center sm:min-h-[130px] sm:py-6"
            >
              <span className="flex h-14 items-center justify-center">
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
