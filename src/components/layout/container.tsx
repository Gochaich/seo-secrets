import { cn } from '@/lib/utils';

/** Ширина контента 1200px — как на текущем сайте. */
export function Container({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1200px] px-5', className)}
      {...props}
    />
  );
}

export function Section({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return <section className={cn('py-20 md:py-24', className)} {...props} />;
}

export function SectionTitle({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-3xl leading-tight font-extrabold text-balance md:text-[34px]',
        className,
      )}
      {...props}
    />
  );
}
