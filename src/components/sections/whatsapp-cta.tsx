import Image from 'next/image';
import { whatsappWithText } from '@/lib/site';
import { whatsappCta } from '@content/ru/home';

/**
 * Кнопка WhatsApp между блоками. На текущем сайте — отдельная запись
 * с готовым SVG шириной 291px, повторяется на главной четыре раза.
 */
export function WhatsAppCta({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center px-5 ${className ?? ''}`}>
      <a
        href={whatsappWithText}
        target="_blank"
        rel="noopener"
        className="inline-block transition-transform duration-200 hover:scale-105"
      >
        <Image
          src={whatsappCta.image}
          alt={whatsappCta.label}
          width={291}
          height={57}
          className="h-auto w-[230px] md:w-[291px]"
        />
      </a>
    </div>
  );
}
