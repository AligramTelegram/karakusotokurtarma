import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { CtaBand, SectionHeading } from "@/components/ui";
import { CheckIcon, ClockIcon, ShieldIcon, MapPinIcon, TruckIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { DISTRICTS } from "@/lib/districts";

export const metadata: Metadata = {
  title: "Hakkımızda | Çorum Oto Kurtarma Ekibimiz",
  description:
    "Karakuş Yol Yardım, Çorum ve tüm ilçelerinde yılların deneyimiyle 7/24 oto kurtarma, çekici ve yol yardım hizmeti sunar. Güvenilir, hızlı ve profesyonel ekip.",
  alternates: { canonical: "/hakkimizda" },
};

const VALUES = [
  { icon: ClockIcon, title: "Hız", text: "Çağrınızı aldığımız an yola çıkar, en kısa sürede yanınızda oluruz." },
  { icon: ShieldIcon, title: "Güven", text: "Aracınıza zarar vermeden, sigortalı ve özenli taşıma." },
  { icon: CheckIcon, title: "Şeffaflık", text: "Net fiyat, sürpriz ücret yok. Dürüst hizmet anlayışı." },
  { icon: MapPinIcon, title: "Yaygınlık", text: "Merkez ve 13 ilçenin tamamında kesintisiz hizmet." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        title="Hakkımızda"
        desc={`${SITE.name} — Çorum'un güvenilir yol arkadaşı.`}
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Hakkımızda" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Biz Kimiz?"
                title="Çorum'un 7/24 Yol Yardım Ekibi"
                center={false}
              />
              <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                <p>
                  {SITE.name} olarak Çorum merkez ve tüm ilçelerinde oto kurtarma,
                  çekici ve yol yardım hizmeti veriyoruz. Amacımız; yolda kaldığınız
                  o zor anda hızlı, güvenilir ve dürüst bir çözüm ortağı olmak.
                </p>
                <p>
                  Modern kayar kasa çekicilerimiz, ağır tonaj kurtarma
                  ekipmanlarımız ve deneyimli kadromuzla otomobilden ticari araca,
                  motosikletten kamyona kadar her tür aracınıza güvenle müdahale
                  ediyoruz.
                </p>
                <p>
                  Şehir içi çekimden şehirlerarası araç taşımaya, akü takviyeden
                  lastik değişimine kadar tüm ihtiyaçlarınızda tek numara yeterli.
                  7 gün 24 saat, gece-gündüz demeden {SITE.address.city}
                  &apos;un yollarındayız.
                </p>
                <p>
                  Ayrıca <strong className="text-ink">lisanslı yediemin
                  işletmeciliği</strong> de yapıyoruz. Trafikten men edilen, kaza
                  yapan ya da hukuki süreçteki araçlar; 7/24 kameralı güvenlikli ve
                  sigortalı yediemin otoparkımızda kayıt altında, güvenle muhafaza
                  edilir.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <TruckIcon className="mx-auto h-7 w-7 text-brand" />
                  <p className="mt-2 text-2xl font-bold text-brand">7/24</p>
                  <p className="text-xs text-slate-500">Kesintisiz</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <MapPinIcon className="mx-auto h-7 w-7 text-brand" />
                  <p className="mt-2 text-2xl font-bold text-ink">
                    {DISTRICTS.length + 1}
                  </p>
                  <p className="text-xs text-slate-500">Bölge</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <ShieldIcon className="mx-auto h-7 w-7 text-brand" />
                  <p className="mt-2 text-2xl font-bold text-ink">%100</p>
                  <p className="text-xs text-slate-500">Güvenli</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:content-start">
              {VALUES.map((v) => (
                <div key={v.title} className="card">
                  <v.icon className="h-8 w-8 text-brand" />
                  <h3 className="mt-3 font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
