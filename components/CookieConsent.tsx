"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "karakus-cerez-onay";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage yoksa sessizce geç */
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Çerez bilgilendirmesi"
      className="fixed inset-x-0 bottom-[64px] z-[60] px-3 pb-3 lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-md lg:px-0 lg:pb-0"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-black/10">
        <p className="text-sm leading-relaxed text-slate-600">
          Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.
          Kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
          Detaylar için{" "}
          <Link
            href="/cerez-politikasi"
            className="font-semibold text-brand hover:underline"
          >
            Çerez Politikası
          </Link>
          ‘nı inceleyebilirsiniz.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="btn-primary flex-1"
          >
            Kabul Et
          </button>
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="btn-outline flex-1"
          >
            Reddet
          </button>
        </div>
      </div>
    </div>
  );
}
