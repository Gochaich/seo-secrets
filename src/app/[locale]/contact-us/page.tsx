import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/sections/contact-form';
import { BankDetails } from '@/components/sections/bank-details';
import { Clients } from '@/components/sections/clients';
import { contactsMeta } from '@content/ru/pages';

/**
 * «Контакты» (/contact-us/): форма, реквизиты и блок клиентов с главной.
 *
 * Фоновых пятен первого экрана здесь нет — на текущем сайте они нарисованы
 * прямо в блоке с формой и уезжают за края экрана. Их вернём вместе с
 * приёмом заявок на этапе 5, чтобы не тащить декор ради декора.
 */
export const metadata: Metadata = {
  title: contactsMeta.title,
  description: contactsMeta.description,
};

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-clip">
      <ContactForm />
      <BankDetails />
      <Clients />
    </main>
  );
}
