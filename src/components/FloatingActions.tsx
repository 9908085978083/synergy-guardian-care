import {MessageCircle, PhoneCall} from 'lucide-react';
import {PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL, PRIMARY_WHATSAPP_URL} from '../data/careData';

export function FloatingActions() {
  return (
    <div
      aria-label="Direct telephone and WhatsApp contact actions"
      className="fixed right-4 bottom-4 z-40 flex items-center gap-2.5 sm:right-6 sm:bottom-6"
    >
      <a
        href={PRIMARY_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message Synergy Guardian Care on WhatsApp (${PRIMARY_PHONE_DISPLAY})`}
        className="inline-flex h-12 items-center gap-2 rounded-md border border-[#1E8F5A] bg-[#1E8F5A] px-4 text-xs font-semibold text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#18764A] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <a
        href={PRIMARY_PHONE_TEL}
        aria-label={`Call Synergy Guardian Care on ${PRIMARY_PHONE_DISPLAY}`}
        className="inline-flex h-12 items-center gap-2 rounded-md border border-[#D4AF37] bg-[#081B3A] px-4 text-xs font-semibold text-[#F8F7F2] shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#0E2A57] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
      >
        <PhoneCall className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
        <span className="tabular-nums">{PRIMARY_PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}
