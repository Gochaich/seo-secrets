import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { team } from '@content/ru/home';

/**
 * «Команда экспертов SEO Secrets»: шесть карточек 3x2.
 *
 * Значения взяты из CSS текущего сайта (reference/html), а не подобраны
 * по скриншоту: содержимое 1100px, зазор 40px по вертикали и 42px
 * по горизонтали, пропорция снимка 384x476.
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
    <section className="py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          Команда экспертов SEO Secrets
        </h2>

        <ul className="mt-[50px] grid gap-x-[42px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.href}>
              <Link
                href={member.href}
                className="group relative block aspect-[384/476] overflow-hidden"
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
                <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(to_top,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.35)_22%,rgba(0,0,0,0.12)_44%,rgba(0,0,0,0)_70%)] px-[18px] pb-4">
                  <h3 className="mb-1.5 text-[18px] leading-[1.15] font-bold">
                    {member.name}
                  </h3>
                  <p className="mb-[5px] text-[13px] leading-[1.3] text-white/[0.88]">
                    {member.role}
                  </p>
                  <p className="mb-2 text-[13px] leading-[1.3] text-white/[0.88]">
                    {member.experience}
                  </p>
                  <span className="inline-block origin-left text-[13px] leading-[1.3] font-bold transition-transform duration-200 group-hover:scale-[1.06]">
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
