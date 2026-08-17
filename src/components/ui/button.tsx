import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const button = cva(
  'inline-flex items-center justify-center gap-2 rounded-btn font-semibold whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-accent-ink hover:bg-accent-hover',
        outline:
          'border border-border-strong text-ink hover:border-accent hover:text-accent',
        ghost: 'text-muted hover:text-ink',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof button>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props} />
  );
}

type ButtonLinkProps = React.ComponentProps<'a'> & VariantProps<typeof button>;

/** Для внешних ссылок: WhatsApp, Telegram, телефон. Внутренние — через @/i18n/navigation */
export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return <a className={cn(button({ variant, size }), className)} {...props} />;
}

export { button as buttonVariants };
