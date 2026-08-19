import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { team } from '@content/ru/home';

/**
 * «Команда экспертов SEO Secrets»: шесть карточек 3x2.
 *
 * Ширина содержимого 1100px — как на текущем сайте, там этот блок уже
 * остальных. Карточка 340x422, зазор 40px по обеим осям.
 *
 * У каждого сотрудника на Tilda два снимка: обычный и для наведения.
 * Второй лежит поверх первого и проявляется по opacity — так подмена
 * не мигает, в отличие от смены src.
 *
 * Ссылки ведут на /team/<имя>/ — страницы есть на текущем сайте, но в этой
 * сборке появятся на этапе 4. До тех пор «Подробнее» на превью отдаст 404.
 */
export function Team() {
  return (
    <section className="py-section">
      <div className="mx-auto w-full max-w-[1140px] px-page">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          Команда экспертов SEO Secrets
        </h2>

        <ul className="mt-10 grid gap-8 sm:mt-[60px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {team.map((member) => (
            <li key={member.href}>
              <Link
                href={member.href}
                className="group relative block aspect-[340/422] overflow-hidden"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={member.photoHover}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Затемнение снизу: без него подписи теряются на светлом фоне снимка */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-[18px] pt-20 pb-5">
                  <h3 className="text-[17px] font-bold">{member.name}</h3>
                  <p className="text-[13px] leading-[22px] text-white/75">
                    {member.role}
                  </p>
                  <p className="text-[13px] leading-[22px] text-white/75">
                    {member.experience}
                  </p>
                  <span className="mt-2 inline-block text-[13px] font-bold">
                    Подробнее
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
