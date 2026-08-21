import { benefits, benefitsTitle } from '@content/ru/home';

/**
 * «Как SEO агентство влияет на бизнес?». Блок родной тильдовский (t820),
 * поэтому шрифт здесь Montserrat, а не Inter.
 *
 * Из исходника: контейнер 1200px, две колонки, заголовок 34px с отступом
 * снизу 90px (45px на ≤960), отступы секции 60px сверху и снизу.
 *
 * Номера пунктов на Tilda — шесть отдельных SVG, и у каждого свой viewBox:
 * цифра занимает разную долю холста, поэтому в одинаковой рамке они выходили
 * разного размера. Набираем цифры текстом: один шрифт, один кегль, минус
 * шесть запросов к CDN. tabular-nums держит одинаковую ширину знака,
 * чтобы колонка под номер не «дышала» от пункта к пункту.
 *
 * Колонка под номер — 47px (40 + 7): у Тильды на текст остаётся ровно 513px,
 * и строка «…где клиенты выбирают,» помещается впритык. Лишний пиксель ломает перенос.
 */
export function Benefits() {
  return (
    <section className="py-5 sm:py-[30px]">
      <div className="px-page mx-auto max-w-[1200px]">
        <h2 className="mb-[45px] text-center text-[26px] leading-[1.1] font-bold sm:text-[30px] md:mb-[90px] md:text-[34px]">
          {benefitsTitle}
        </h2>

        <ol className="grid gap-x-10 gap-y-[60px] md:grid-cols-2">
          {benefits.map((item, index) => (
            <li
              key={item.title}
              className="grid grid-cols-[30px_1fr] gap-x-[7px] sm:grid-cols-[40px_1fr]"
            >
              <span className="text-accent-bright -mt-[4px] text-[32px] leading-none font-bold tabular-nums sm:-mt-[6px] sm:text-[44px]">
                {index + 1}
              </span>

              <div>
                <div className="mb-3 text-xl font-semibold">{item.title}</div>
                {item.text.map((line) => (
                  <p key={line} className="text-sm leading-[1.55]">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
