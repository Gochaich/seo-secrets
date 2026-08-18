import { WhatsAppIcon } from '@/components/icons/social';
import { whatsappWithText } from '@/lib/site';

/**
 * Кнопка «Связаться в WhatsApp» с градиентной обводкой.
 * Встречается на главной дважды: у основателя и после этапов работы.
 */
export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={whatsappWithText}
      target="_blank"
      rel="noopener"
      className={`rounded-btn border-brand text-whatsapp-ink inline-flex items-center gap-3 px-8 py-4 text-[15px] transition-opacity hover:opacity-80 ${className ?? ''}`}
    >
      {/*
        Глиф в иконке вырезан насквозь (fill-rule: evenodd), поэтому под него
        подложен белый кружок — иначе телефон проваливается в фон.
      */}
      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
        <span className="absolute inset-[3px] rounded-full bg-white" />
        <WhatsAppIcon className="text-whatsapp relative h-5 w-5" />
      </span>
      Связаться в WhatsApp
    </a>
  );
}
