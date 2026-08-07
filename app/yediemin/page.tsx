import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { CtaBand } from "@/components/ui";
import { CheckIcon, ShieldIcon, PhoneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import { SITE, YEDIEMIN, telUrl } from "@/lib/site";
import { serviceSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Çorum Yediemin Otoparkı | Lisanslı Yediemin İşletmeciliği",
  description:
    "Çorum yediemin otoparkı — trafikten men edilen, kaza yapan ve hukuki süreçteki araçlar için lisanslı, kameralı güvenlikli ve sigortalı yediemin işletmeciliği. Yediemin çekici hizmeti dahil.",
  alternates: { canonical: "/yediemin" },
};

const YEDIEMIN_FAQ = [
  {
    q: "Çorum'da yediemin otoparkına araç nasıl alınır?",
    a: "Trafikten men edilen, kaza yapan ya da hukuki/mahkeme kararlı araçlar, yetkili birimlerin yönlendirmesiyle veya sizin talebinizle yediemin çekicimiz tarafından alınıp lisanslı otoparkımıza kayıt altında teslim edilir.",
  },
  {
    q: "Yediemin otoparkındaki araçlar güvende mi?",
    a: "Evet. Çorum yediemin otoparkımız 7/24 kameralı güvenlik altındadır, sigortalıdır ve her araç kayıt altında teslim alınıp teslim edilir. Kapalı ve açık alan seçenekleriyle her araç tipine uygun muhafaza sağlanır.",
  },
  {
    q: "Trafikten men edilen aracımı nereden teslim alabilirim?",
    a: "Aracınızın bulunduğu yediemin otoparkı ile iletişime geçip gerekli belgelerle (ruhsat, kimlik, varsa yetkili yazısı) teslim alabilirsiniz. Karakuş Yol Yardım'a ait araçlar için bizi arayarak süreç hakkında bilgi alabilirsiniz.",
  },
  {
    q: "Yediemin çekici hizmeti Çorum'un tüm ilçelerinde var mı?",
    a: "Evet, Çorum merkez ve tüm 13 ilçede yediemin çekici hizmeti veriyoruz. Aracın bulunduğu noktadan alınıp lisanslı otoparkımıza güvenle taşınmasını sağlıyoruz.",
  },
];

export default function YediEminPage() {
  const url = `${SITE.url}/yediemin`;

  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Çorum Yediemin Otoparkı",
          YEDIEMIN.intro,
          url
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "Yediemin Otoparkı", url },
        ])}
      />
      <JsonLd data={faqPageSchema(YEDIEMIN_FAQ)} />

      <PageHeader
        title="Çorum Yediemin Otoparkı"
        desc={YEDIEMIN.intro}
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Yediemin Otoparkı" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Lisanslı Yediemin İşletmeciliği
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                <p>
                  Karakuş Yol Yardım, Çorum ve tüm ilçelerinde oto kurtarma ve
                  çekici hizmetlerinin yanı sıra lisanslı{" "}
                  <strong className="text-ink">yediemin işletmeciliği</strong> de
                  yapar. Trafikten men edilen, kaza yapan ya da hukuki
                  süreçteki (haciz, mahkeme kararlı) araçlar, yediemin
                  çekicimizle alınarak kayıt altında otoparkımıza taşınır.
                </p>
                <p>
                  Çorum yediemin otoparkımız 7/24 kameralı güvenlik altında,
                  sigortalı ve hem kapalı hem açık alan seçenekleriyle her
                  araç tipine uygun şekilde düzenlenmiştir. Aracınız,
                  teslim alma sürecine kadar güvenle muhafaza edilir.
                </p>
                <p>
                  Yediemin çekici talebiniz olduğunda Çorum merkez veya
                  ilçelerin herhangi bir noktasından aracınızı alıp, zarar
                  vermeden lisanslı otoparkımıza ulaştırıyoruz — süreç
                  baştan sona kayıt altında ilerler.
                </p>
              </div>

              <h3 className="mt-10 mb-4 font-display text-xl font-bold uppercase text-ink">
                Hangi Araçları Muhafaza Ediyoruz?
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {YEDIEMIN.vehicleTypes.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {v}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 mb-4 font-display text-xl font-bold uppercase text-ink">
                Neden Karakuş Yediemin Otoparkı?
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {YEDIEMIN.trust.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-slate-700">
                    <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {t}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 mb-6 font-display text-xl font-bold uppercase text-ink">
                Yediemin Otoparkı — Sıkça Sorulan Sorular
              </h3>
              <FaqAccordion items={YEDIEMIN_FAQ} />
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-brand/20 bg-orange-50/60 p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold uppercase text-ink">
                    Yediemin Hattı
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Aracınızla ilgili yediemin süreci hakkında bilgi almak
                    için 7/24 arayın.
                  </p>
                  <a href={telUrl()} className="btn-primary mt-4 w-full">
                    <PhoneIcon className="h-5 w-5" />
                    {SITE.phoneDisplay}
                  </a>
                </div>

                <div className="card">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-6 w-6 text-brand" />
                    <p className="text-sm font-semibold text-ink">
                      7/24 Kameralı Güvenlik
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <MapPinIcon className="h-6 w-6 text-brand" />
                    <p className="text-sm font-semibold text-ink">
                      Çorum Merkez ve Tüm İlçeler
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Yediemin Otoparkı Hakkında Bilgi Alın"
        desc={`${SITE.name} ekibi 7/24 hazır. Aracınızın durumu ve teslim süreci için hemen arayın.`}
      />
    </>
  );
}
