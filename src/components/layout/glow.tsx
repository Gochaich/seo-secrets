import { cn } from '@/lib/utils';

/**
 * Размытые цветные свечения на фоне — визуальная подпись сайта.
 *
 * На Tilda это PNG-«кляксы» (Group_1.png, Group_2.png, Group_61.png), расставленные
 * абсолютными координатами под каждое разрешение. Здесь то же самое на градиентах:
 * не тянет файлы с CDN, не пикселится на больших экранах и не ломается на промежуточных
 * ширинах, где у Тильды свечения уезжают за край.
 */

const tones = {
  blue: 'rgba(17, 75, 232, 0.5)',
  cyan: 'rgba(54, 224, 255, 0.3)',
  violet: 'rgba(104, 42, 232, 0.42)',
  yellow: 'rgba(245, 240, 74, 0.22)',
  green: 'rgba(39, 208, 97, 0.3)',
} as const;

type GlowProps = {
  tone?: keyof typeof tones;
  className?: string;
  /** Размер пятна, по умолчанию 620px */
  size?: number;
  /** Сила размытия, по умолчанию 130px */
  blur?: number;
};

export function Glow({
  tone = 'blue',
  className,
  size = 620,
  blur = 150,
}: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute -z-10', className)}
      style={{
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
        background: `radial-gradient(circle, ${tones[tone]} 0%, transparent 66%)`,
      }}
    />
  );
}

/** Обёртка для секции со свечениями: прячет всё, что вылезает за края. */
export function GlowStage({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('relative isolate overflow-hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
}
