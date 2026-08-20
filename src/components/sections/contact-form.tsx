'use client';

import { useState } from 'react';
import { contacts } from '@/lib/site';
import { contactForm } from '@content/ru/contacts';

/**
 * Форма на странице контактов: телефон и домен.
 *
 * Значения взяты со скриншота текущего сайта — саму разметку формы Tilda
 * рисует скриптом, в сохранённом HTML её нет. Кнопка 155x56 со скруглением
 * 30px, поля с подчёркиванием вместо рамки, подписи 16px цветом #cccccc.
 *
 * Заявка уходит в WhatsApp с уже подставленными телефоном и доменом.
 * Своего обработчика у формы пока нет: приём заявок с валидацией,
 * антиспамом и уведомлениями — это отдельная задача, этап 5 в ROADMAP.
 * До неё лучше открытый мессенджер, чем форма, которая молча теряет лиды.
 */
export function ContactForm() {
  const [phone, setPhone] = useState('');
  const [domain, setDomain] = useState('');

  const message = [
    'Здравствуйте! Хотел бы обсудить условия по SEO.',
    phone.trim() && `Телефон: ${phone.trim()}`,
    domain.trim() && `Домен: ${domain.trim()}`,
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <section className="px-page py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[950px]">
        <h1 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {contactForm.title}
        </h1>

        <form
          action={contacts.whatsapp}
          method="get"
          target="_blank"
          rel="noopener"
          className="bg-surface mx-auto mt-8 max-w-[720px] rounded-2xl px-6 py-8 sm:px-12 sm:py-10"
        >
          {/*
           * WhatsApp принимает текст сообщения параметром text в строке
           * запроса — поэтому обычная отправка формы методом GET открывает
           * чат с уже набранным текстом. JS для этого не нужен.
           */}
          <input type="hidden" name="text" value={message} />

          <label className="block">
            <span className="text-subtle mb-[5px] block text-base">
              {contactForm.phoneLabel}
            </span>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={contactForm.phonePlaceholder}
              className="border-border-strong placeholder:text-subtle w-full border-0 border-b bg-transparent pb-2.5 text-base outline-none focus:border-accent-bright"
            />
          </label>

          <label className="mt-8 block">
            <span className="text-subtle mb-[5px] block text-base">
              {contactForm.domainLabel}
            </span>
            <input
              type="text"
              inputMode="url"
              autoComplete="url"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              placeholder={contactForm.domainPlaceholder}
              className="border-border-strong placeholder:text-subtle w-full border-0 border-b bg-transparent pb-2.5 text-base outline-none focus:border-accent-bright"
            />
          </label>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="h-14 w-[155px] rounded-[30px] bg-badge-from text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              {contactForm.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
