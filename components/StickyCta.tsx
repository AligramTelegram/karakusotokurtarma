"use client";

import { SITE, telUrl, whatsappUrl } from "@/lib/site";
import { PhoneIcon, WhatsappIcon } from "./Icons";

// Sağ altta scroll boyunca kalıcı hızlı erişim butonları + mobil alt çubuk.
export default function StickyCta() {
  return (
    <>
      {/* Mobil: alt sabit çubuk */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-slate-200 bg-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
        <a
          href={telUrl()}
          className="flex items-center justify-center gap-2 bg-brand py-4 text-sm font-bold uppercase tracking-wide text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          Hemen Ara
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-bold uppercase tracking-wide text-white"
        >
          <WhatsappIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>

      {/* Masaüstü: sağ altta yüzen, scroll'da kalıcı butonlar */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 lg:flex">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile yaz"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] py-2 pl-2 pr-4 text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
            <WhatsappIcon className="h-6 w-6" />
          </span>
          <span className="text-sm font-bold">WhatsApp</span>
        </a>

        <a
          href={telUrl()}
          aria-label={`Hemen ara ${SITE.phoneDisplay}`}
          className="flex items-center gap-3 rounded-full bg-brand py-2 pl-2 pr-5 text-white shadow-xl shadow-brand/30 transition-transform hover:scale-105 animate-pulse-ring"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
            <PhoneIcon className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.6rem] font-medium uppercase tracking-wide opacity-80">
              7/24 Hemen Ara
            </span>
            <span className="block text-sm font-bold">{SITE.phoneDisplay}</span>
          </span>
        </a>
      </div>
    </>
  );
}
