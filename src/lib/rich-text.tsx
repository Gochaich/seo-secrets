import { Fragment, type ReactNode } from 'react';

const MARKUP = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

/**
 * Минимальная разметка для текстов из content/: **жирный**, *курсив*
 * и перенос строки по \n.
 *
 * Нужна ровно затем, чтобы не тащить в данные HTML и не звать
 * dangerouslySetInnerHTML: тексты приходят из файлов контента, и однажды
 * их будет править не разработчик.
 */
export function rich(text: string): ReactNode {
  return text.split('\n').map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(MARKUP).map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={partIndex} className="font-bold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
          return <em key={partIndex}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={partIndex}>{part}</Fragment>;
      })}
    </Fragment>
  ));
}
