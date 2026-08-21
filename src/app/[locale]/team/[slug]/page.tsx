import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { JsonLd } from '@/lib/json-ld';
import { buildMetadata } from '@/lib/metadata';
import { PersonProfile } from '@/components/sections/person-profile';
import { routing } from '@/i18n/routing';
import { site } from '@/lib/site';
import { people, peopleBySlug } from '@content/ru/people';

/**
 * Личные страницы сотрудников: /team/max/, /team/shamil/, /team/alexandr/,
 * /team/george/, /team/valeriya/, /team/regina/. Адреса совпадают с текущим
 * сайтом один в один, редиректы не нужны.
 *
 * Все шесть собраны из одних данных: на Tilda это шесть отдельных страниц
 * с почти одинаковой вёрсткой, здесь — один маршрут и content/ru/people.ts.
 */
type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    people.map((person) => ({ locale, slug: person.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Неизвестный slug — страница отдаст 404, метаданные ей не нужны
  if (!peopleBySlug.has(slug)) return {};
  return buildMetadata(`/team/${slug}/`);
}

export default async function PersonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const person = peopleBySlug.get(slug);
  if (!person) notFound();

  /*
   * Разметка schema.org/Person собирается из тех же данных, что и видимая
   * страница, — расходиться им нельзя. На Tilda в этой разметке прописаны
   * адреса вида /team/gaydar-maksim, которых на сайте нет; здесь стоит
   * настоящий адрес страницы.
   */
  const url = `${site.url}/team/${person.slug}/`;
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': url,
    url,
    name: person.schema.name,
    ...(person.schema.alternateName && {
      alternateName: person.schema.alternateName,
    }),
    jobTitle: person.schema.jobTitle,
    worksFor: { '@type': 'Organization', name: site.name },
    image: `${site.url}${person.photo}`,
    knowsAbout: person.schema.knowsAbout,
    address: {
      '@type': 'PostalAddress',
      addressLocality: person.schema.locality,
      addressCountry: person.schema.country,
    },
    description: person.schema.description,
  };

  return (
    <main className="overflow-x-clip">
      <JsonLd data={personLd} />
      <PersonProfile person={person} />
    </main>
  );
}
