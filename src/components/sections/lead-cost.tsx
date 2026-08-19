import { formatNumber, formatRatio } from '@/lib/format';
import { leadCost } from '@content/ru/pricing';

/**
 * «Сколько стоит лид: SEO vs PPC» — две карточки с цифрами и шкалой.
 *
 * Всё, что можно вывести, выводится: цена лида, во сколько раз SEO дешевле,
 * длина шкалы и строка расчёта под блоком. В content лежат только лиды
 * и расход. Иначе рано или поздно поправят одну цифру и забудут вторую —
 * ровно это и случилось на текущем сайте с ценой 250 000 против 300 000.
 *
 * Длина шкалы — доля от самой дорогой цены лида: у SEO выходит 7% ширины,
 * и разрыв виден без чтения цифр.
 */
export function LeadCost() {
  const columns = leadCost.columns.map((column) => ({
    ...column,
    cpl: column.spend / column.leads,
  }));

  const maxCpl = Math.max(...columns.map((column) => column.cpl));
  const [seo, ppc] = columns;
  const ratio = ppc.cpl / seo.cpl;

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <h2 className="text-center text-3xl leading-tight font-extrabold text-balance md:text-[34px]">
          {leadCost.title}
        </h2>
        <p className="text-muted mt-3 text-center text-[15px]">
          {leadCost.lead}
        </p>
        <p className="text-mint mt-6 text-center text-[15px] font-bold">
          {`SEO-лид дешевле примерно в ${formatRatio(ratio)} раза*`}
        </p>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {columns.map((column, index) => (
            <li
              key={column.label}
              className="bg-surface rounded-2xl p-5 text-[15px]"
            >
              <span className="border-border-strong inline-block rounded-full border bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold">
                {column.label}
              </span>

              <dl className="mt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted">Лидов за месяц</dt>
                  <dd className="text-[17px] font-bold">
                    {formatNumber(column.leads)}
                  </dd>
                </div>
                <div className="mt-1 flex items-baseline justify-between gap-4">
                  <dt className="text-muted">Стоимость месяца</dt>
                  <dd className="text-[17px] font-bold">
                    {formatNumber(column.spend)} ₸
                  </dd>
                </div>

                <div className="border-border mt-4 flex items-baseline justify-between gap-4 border-t pt-4">
                  <dt className="font-bold">Цена за лид (CPL)</dt>
                  <dd className="text-[19px] font-bold">
                    ≈ {formatNumber(column.cpl)} ₸
                  </dd>
                </div>
              </dl>

              <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className={`h-full rounded-full ${
                    index === 0 ? 'bg-gradient-cool' : 'bg-gradient-warm'
                  }`}
                  style={{ width: `${(column.cpl / maxCpl) * 100}%` }}
                />
              </div>

              <p className="text-subtle mt-3 text-[13px] leading-[1.5]">
                {column.note}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-subtle mt-10 text-center text-[13px]">
          {`*Расчёт CPL: ${seo.label} — ${formatNumber(seo.spend)} ₸ / ${formatNumber(seo.leads)} = ~${formatNumber(seo.cpl)} ₸; PPC — ${formatNumber(ppc.spend)} ₸ / ${formatNumber(ppc.leads)} = ~${formatNumber(ppc.cpl)} ₸.`}
        </p>
      </div>
    </section>
  );
}
