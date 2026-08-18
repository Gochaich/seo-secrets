import Image from 'next/image';
import { benefits, benefitsTitle } from '@content/ru/home';

/**
 * «Как SEO агентство влияет на бизнес?». Блок родной тильдовский (t820),
 * поэтому шрифт здесь Montserrat, а не Inter.
 *
 * Из исходника: контейнер 1200px, две колонки, заголовок 34px с отступом
 * снизу 90px (45px на ≤960), отступы секции 60px сверху и снизу.
 * Цифры — шесть отдельных SVG, каждый свой.
 *
 * Колонка под иконку — 47px (40 + 7): у Тильды на текст остаётся ровно 513px,
 * и строка «…где клиенты выбирают,» помещается впритык. Лишний пиксель ломает перенос.
 */
export function Benefits() {
  return (
    <section className="py-[60px]">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-[45px] text-center text-[34px] leading-[1.1] font-bold md:mb-[90px]">
          {benefitsTitle}
        </h2>

        <ul className="grid gap-x-10 gap-y-[60px] md:grid-cols-2">
          {benefits.map((item) => (
            <li key={item.title} className="grid grid-cols-[40px_1fr] gap-x-[7px]">
              <Image
                src={item.icon}
                alt=""
                aria-hidden
                width={40}
                height={40}
                className="h-10 w-10"
              />

              <div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                {item.text.map((line) => (
                  <p key={line} className="text-sm leading-[1.55]">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
