import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon, WhatsappIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "İletişim | Çorum Oto Kurtarma",
  description: `Karakuş Yol Yardım iletişim. Çorum oto kurtarma için 7/24 arayın: ${SITE.phoneDisplay}. Adres: ${SITE.address.full}.`,
  alternates: { canonical: "/iletisim" },
};

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24264.938855497163!2d34.90059752300888!3d40.51689707137569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40812ba3969ecd09%3A0x1617c6f4951645cc!2zS0FSQUtVxZ4gWU9MIFlBUkRJTSBWRSBZRUTEsEVNxLBOIMSwxZ5MRVRNRUPEsEzEsMSexLA!5e0!3m2!1str!2str!4v1784985363672!5m2!1str!2str";

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "İletişim", url: `${SITE.url}/iletisim` },
        ])}
      />
      <PageHeader
        title="İletişim"
        desc="7/24 hizmetimizle her an bir telefon uzağınızdayız. Aşağıdaki kanallardan bize ulaşabilirsiniz."
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "İletişim" }]}
      />

      <section className="section">
        <div className="container-x">
          <p className="mx-auto mb-10 max-w-3xl text-center text-slate-600">
            Çorum merkez ya da ilçelerinden birinde olun, {SITE.name} 7/24
            ulaşılabilir. Telefon veya WhatsApp ile bize yazın, konumunuzu
            paylaşın; en yakın ekibimiz hemen yola çıksın. Aşağıda adresimizi,
            çalışma saatlerimizi ve konumumuzu bulabilirsiniz.
          </p>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="space-y-4">
                <a
                  href={telUrl()}
                  className="flex items-center gap-4 rounded-2xl border border-brand/30 bg-orange-50 p-5 transition-colors hover:bg-orange-100"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">
                      Telefon · 7/24
                    </span>
                    <span className="block text-lg font-bold text-ink">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-[#25D366]/50"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-white">
                    <WhatsappIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">
                      WhatsApp
                    </span>
                    <span className="block text-lg font-bold text-ink">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-brand">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">
                      Adres
                    </span>
                    <span className="block font-semibold text-ink">
                      {SITE.address.full}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-brand">
                    <ClockIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">
                      Çalışma Saatleri
                    </span>
                    <span className="block font-semibold text-ink">
                      {SITE.hours}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  title="Karakuş Yol Yardım konumu"
                  src={mapSrc}
                  className="h-full min-h-[340px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {SITE.google.businessUrl && (
                <a
                  href={SITE.google.businessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <MapPinIcon className="h-4 w-4 text-brand" />
                  Google Haritalar&apos;da Aç / Yol Tarifi Al
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
