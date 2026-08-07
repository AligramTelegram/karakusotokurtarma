import Link from "next/link";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { SectionHeading, CtaBand } from "@/components/ui";
import {
  CheckIcon,
  StarIcon,
  PhoneIcon,
  ClockIcon,
  ShieldIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { SITE, telUrl, YEDIEMIN } from "@/lib/site";
import { FEATURED_SERVICES } from "@/lib/services";
import { DISTRICTS } from "@/lib/districts";
import { FAQS } from "@/lib/faq";
import { REVIEWS } from "@/lib/reviews";
import { faqSchema } from "@/lib/schema";

const WHY = [
  {
    icon: ClockIcon,
    title: "7/24 Hızlı Ulaşım",
    text: "Gece-gündüz, hafta sonu demeden her an yanınızdayız. Şehir içinde ortalama 15-25 dakikada olay yerinde.",
  },
  {
    icon: ShieldIcon,
    title: "Güvenli & Sigortalı",
    text: "Aracınızı zarar vermeden, kayar kasa çekicilerle yükler; şehirlerarası taşımada sigortalı hizmet sunarız.",
  },
  {
    icon: MapPinIcon,
    title: "Çorum'un Her Noktasında",
    text: "Merkez ve 13 ilçenin tamamında, karayolu ve otoyol üzerinde hizmet veren geniş ekip.",
  },
  {
    icon: CheckIcon,
    title: "Şeffaf & Sabit Fiyat",
    text: "Telefonda net fiyat veririz, olay yerinde sürpriz ek ücret çıkarmayız. Uygun ve dürüst fiyat politikası.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Hero />

      {/* Hizmetler */}
      <section id="hizmetler" className="section scroll-mt-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Çorum'da Aklınıza Gelen Her Kurtarma"
            desc="Şehir içinden şehirlerarasına, akü takviyeden ağır tonaj kurtarmaya kadar tek numarayla tüm yol yardım ihtiyaçlarınız."
          />
          <Reveal className="mt-12">
            <ServicesGrid items={FEATURED_SERVICES} />
          </Reveal>
          <div className="mt-8 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              Tüm hizmetleri görüntüle
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Yediemin Otoparkı */}
      <section id="yediemin" className="section scroll-mt-20 bg-slate-50">
        <div className="container-x">
          <Reveal className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Yediemin İşletmeciliği"
                title={YEDIEMIN.title}
                desc={YEDIEMIN.intro}
                center={false}
              />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {YEDIEMIN.trust.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-slate-700">
                    <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={telUrl()} className="btn-primary">
                  <PhoneIcon className="h-5 w-5" />
                  Bilgi Al · {SITE.phoneDisplay}
                </a>
                <Link
                  href="/yediemin"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                >
                  Yediemin otoparkı detayları
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="font-display text-lg font-bold uppercase text-ink">
                Muhafaza Edilen Araçlar
              </h3>
              <ul className="mt-4 grid gap-3">
                {YEDIEMIN.vehicleTypes.map((v) => (
                  <li
                    key={v}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <CheckIcon className="h-5 w-5 shrink-0 text-brand" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Neden biz */}
      <section className="section">
        <div className="container-x">
          <Reveal className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Neden Karakuş?"
                title="Zor Anınızda Güvenebileceğiniz Ekip"
                desc="Çorum yollarını en iyi bilen, deneyimli ve donanımlı kadromuzla yolda kaldığınız her an yanınızdayız."
                center={false}
              />
              <a href={telUrl()} className="btn-primary mt-8">
                <PhoneIcon className="h-5 w-5" />
                Hemen Ara · {SITE.phoneDisplay}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {WHY.map((w) => (
                <div key={w.title} className="card">
                  <w.icon className="h-8 w-8 text-brand" />
                  <h3 className="mt-3 font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bölgeler */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hizmet Bölgelerimiz"
            title="Çorum Merkez ve Tüm İlçeler"
            desc="Bulunduğunuz ilçeye özel çekici ve yol yardım hizmeti. İlçenizi seçin, size en yakın ekiple ulaşalım."
          />
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white">
              <MapPinIcon className="h-4 w-4" />
              Çorum Merkez
            </span>
            {DISTRICTS.map((d) => (
              <Link
                key={d.slug}
                href={`/bolgeler/${d.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-brand/50 hover:text-brand"
              >
                {d.name}
              </Link>
            ))}
          </Reveal>
          <div className="mt-8 text-center">
            <Link
              href="/bolgeler"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              Tüm bölgeleri görüntüle
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Müşteri Yorumları"
            title="Çorumluların Güvendiği Ekip"
            desc="Zor anlarında bize güvenen müşterilerimizin deneyimleri."
          />
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <span className="text-sm font-semibold text-ink">5.0</span>
            <span className="text-sm text-slate-500">
              · Google'da 41 yorum
            </span>
          </div>
          <Reveal className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="card">
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-slate-600">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">
                  {r.name}
                  <span className="ml-2 font-normal text-slate-400">
                    · {r.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>

          {SITE.google.reviewUrl && (
            <div className="mt-10 text-center">
              <a
                href={SITE.google.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <StarIcon className="h-4 w-4 text-brand" />
                Google&apos;da Bizi Değerlendirin
              </a>
            </div>
          )}
        </div>
      </section>

      {/* SSS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sıkça Sorulan Sorular"
            title="Merak Edilenler"
          />
          <Reveal className="mt-12">
            <FaqAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
