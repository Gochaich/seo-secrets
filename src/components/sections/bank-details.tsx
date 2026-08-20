'use client';

import { useState } from 'react';
import { requisites, requisitesPlainText } from '@content/ru/contacts';

/**
 * Реквизиты ИП с кнопкой «скопировать».
 *
 * Значения взяты из CSS текущего сайта: карточка 950px со скруглением 22px
 * и подложкой 50/50/40, заголовок 32px, таблица 16px с разделителями,
 * первая колонка 30% приглушённым цветом.
 *
 * Кнопка не отключается, если буфер обмена недоступен — в этом случае
 * показываем адрес почты: пусть человек хотя бы попросит реквизиты письмом,
 * а не смотрит на кнопку, которая ничего не делает.
 */
export function BankDetails() {
  const [status, setStatus] = useState('');

  async function copy() {
    try {
      await navigator.clipboard.writeText(requisitesPlainText);
      setStatus(requisites.copied);
    } catch {
      setStatus('Не удалось скопировать — выделите текст вручную');
    }
    setTimeout(() => setStatus(''), 3000);
  }

  return (
    <section className="px-page pt-[35px] pb-[30px]">
      <div className="bg-surface mx-auto w-full max-w-[950px] rounded-[22px] border border-white/[0.06] px-6 py-10 sm:px-[50px] sm:pt-[50px] sm:pb-10">
        <h2 className="mb-[26px] text-center text-2xl font-extrabold sm:text-[32px]">
          {requisites.title}
        </h2>

        <dl className="text-sm sm:text-base">
          {requisites.rows.map((row, index) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 py-2.5 sm:flex-row sm:gap-4 ${
                index < requisites.rows.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <dt className="text-muted sm:w-[30%] sm:shrink-0">{row.label}</dt>
              <dd className="break-words">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-[22px] flex justify-center">
          <button
            type="button"
            onClick={copy}
            className="bg-action-gradient rounded-full px-[34px] py-3.5 text-[15px] font-semibold transition-[transform,background-position,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-right-top hover:shadow-[0_12px_32px_rgba(0,0,0,0.55)] active:scale-95"
          >
            {requisites.copy}
          </button>
        </div>

        {/* aria-live, чтобы отклик на нажатие услышал и скринридер */}
        <p aria-live="polite" className="text-muted mt-2.5 min-h-[18px] text-center text-[13px]">
          {status}
        </p>
      </div>
    </section>
  );
}
