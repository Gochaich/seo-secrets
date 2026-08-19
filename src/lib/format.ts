/**
 * Разряды разделяются неразрывным пробелом, чтобы «1 100 000 ₸» не переносилось
 * посреди числа.
 *
 * Своя функция, а не Intl.NumberFormat: страница рендерится на сервере,
 * а гидратируется в браузере, и разделитель разрядов у этих двух Intl может
 * отличаться — React ловил бы расхождение разметки. Здесь результат
 * одинаковый везде.
 */
export function formatNumber(value: number): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/** «13.7» -> «13,7»: одна цифра после запятой, как принято в русском тексте */
export function formatRatio(value: number): string {
  return value.toFixed(1).replace('.', ',');
}
