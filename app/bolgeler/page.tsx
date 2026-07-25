import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CtaBand } from "@/components/ui";
import { MapPinIcon, ArrowRightIcon } from "@/components/Icons";
import { DISTRICTS } from "@/lib/districts";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri | Çorum ve İlçeleri",
  description:
    "Çorum merkez ve 13 ilçesinde 7/24 oto kurtarma ve çekici hizmeti. Sungurlu, Osmancık, İskilip, Alaca, Bayat ve tüm ilçelerde yol yardım.",
  alternates: { canonical: "/bolgeler" },
};

export default function BolgelerPage() {
  return (
    <>
      <PageHeader
        title="Hizmet Bölgelerimiz"
        desc="Çorum merkez ve tüm ilçelerinde 7/24 oto kurtarma, çekici ve yol yardım hizmeti. Bölgenizi seçin, size en yakın ekiple ulaşalım."
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Bölgeler" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DISTRICTS.map((d) => (
              <Link
                key={d.slug}
                href={`/bolgeler/${d.slug}`}
                className="card group flex flex-col hover:-translate-y-1 hover:border-brand/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 text-brand">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Merkeze {d.distanceKm} km
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-ink">
                  {d.name} Oto Kurtarma
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {d.intro.length > 120 ? d.intro.slice(0, 117) + "…" : d.intro}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {d.name} Çekici Hizmeti
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
