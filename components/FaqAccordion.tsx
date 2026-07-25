"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faq";
import { ChevronDownIcon } from "./Icons";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-ink">{item.q}</span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
