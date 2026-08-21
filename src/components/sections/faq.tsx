import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { faq, faqIntro } from '@content/ru/faq';

/**
 * F.A.Q. — девять раскрывающихся вопросов.
 *
 * Собран на <details>, а не на состоянии в React. Три причины:
 * ответы лежат в HTML и достаются поиском даже в свёрнутом виде, блоку
 * не нужен ни байт JavaScript, и клавиатура с скринридером работают
 * из коробки, без aria-expanded и обработчиков.
 *
 * Ширина содержимого 1000px, строка 55px, зазор 18px.
 */
export function Faq() {
  return (
    <section className="py-section">
      <div className="mx-auto w-full max-w-[1040px] px-page">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {faqIntro.title}
        </h2>
        <p className="text-muted mt-3 text-center text-sm">{faqIntro.lead}</p>

        <div className="mt-12 flex flex-col gap-[18px]">
          {faq.map((item, index) => (
            <details
              key={item.question}
              className="bg-surface group rounded-2xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-faq-question font-bold sm:px-6 [&::-webkit-details-marker]:hidden">
                <span>
                  {index + 1}) {item.question}
                </span>
                {/* Плюс превращается в минус поворотом одной половины креста */}
                <span
                  aria-hidden
                  className="text-subtle relative block h-4 w-4 shrink-0"
                >
                  <span className="absolute top-1/2 left-0 h-[1.5px] w-4 -translate-y-1/2 rounded-full bg-current" />
                  <span className="absolute top-0 left-1/2 h-4 w-[1.5px] -translate-x-1/2 rounded-full bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>

              <div className="text-muted flex flex-col gap-3 px-5 pb-5 text-faq-answer leading-[1.6] sm:px-6">
                {item.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton />
        </div>

        {/*
          Разметка FAQPage — она есть на текущем сайте, и терять её на переезде
          нельзя: из-за неё вопросы попадают в расширенный сниппет Google.
          Собирается из тех же данных, что и видимый блок, поэтому разойтись
          с текстом на странице не может.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer.join(' '),
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
