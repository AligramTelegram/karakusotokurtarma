import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { CtaBand } from "@/components/ui";
import {
  CheckIcon,
  PhoneIcon,
  RoadIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { DISTRICTS, getDistrict } from "@/lib/districts";
import { SERVICES } from "@/lib/services";
import { SITE, telUrl } from "@/lib/site";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return DISTRICTS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const d = getDistrict(params.slug);
  if (!d) return {};
  const title = `${d.name} Oto Kurtarma & Çekici | Çorum 7/24`;
  const description = `${d.name} Çorum'da 7/24 oto kurtarma, çekici ve yol yardım. ${d.name} merkez ve çevresinde arıza, kaza ve lastik desteği. Hemen arayın: ${SITE.phoneDisplay}.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/bolgeler/${d.slug}` },
    openGraph: { title, description },
  };
}

export default function DistrictDetail({
  params,
}: {
  params: { slug: string };
}) {
  const d = getDistrict(params.slug);
  if (!d) notFound();

  const url = `${SITE.url}/bolgeler/${d.slug}`;
  const localFaqs = [
    {
      q: `${d.name}'e çekici kaç dakikada gelir?`,
      a: `${d.name} Çorum merkeze yaklaşık ${d.distanceKm} km uzaklıktadır. Talebinizi aldığımızda size net bir varış süresi bildirir, en yakın ekibimizi hemen yönlendiririz. 7/24 hizmet veriyoruz.`,
    },
    {
      q: `${d.name}'de hangi hizmetleri veriyorsunuz?`,
      a: `${d.name} merkez ve çevresinde şehir içi çekici, şehirlerarası araç taşıma, 7/24 yol yardım (akü, lastik, yakıt) ve kaza / ağır tonaj kurtarma hizmeti veriyoruz.`,
    },
    {
      q: `${d.name}'de gece çekici bulunur mu?`,
      a: `Evet. ${d.name} dahil Çorum'un tüm ilçelerinde gece-gündüz, hafta sonu ve tatil demeden 7/24 hizmet veriyoruz. ${SITE.phoneDisplay} numarasından bize her an ulaşabilirsiniz.`,
    },
  ];

  const otherDistricts = DISTRICTS.filter((x) => x.slug !== d.slug).slice(0, 6);

  return (
    <>
      <JsonLd
        data={serviceSchema(
          `${d.name} Oto Kurtarma`,
          `${d.name} Çorum'da 7/24 oto kurtarma ve çekici hizmeti.`,
          url
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "Bölgeler", url: `${SITE.url}/bolgeler` },
          { name: d.name, url },
        ])}
      />
      <JsonLd data={faqSchema()} />

      <PageHeader
        title={`${d.name} Oto Kurtarma & Çekici`}
        desc={d.intro}
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Bölgeler", href: "/bolgeler" },
          { name: d.name },
        ]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                {d.name}&apos;de 7/24 Çekici ve Yol Yardım
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">{d.detail}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="card flex items-start gap-3">
                  <RoadIcon className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Hizmet Güzergâhı
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{d.roads}</p>
                  </div>
                </div>
                <div className="card flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Merkeze Uzaklık
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Yaklaşık {d.distanceKm} km · 7/24 hızlı müdahale
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-10 mb-4 font-display text-xl font-bold uppercase text-ink">
                {d.name}&apos;de Verdiğimiz Hizmetler
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span>
                        <span className="font-semibold text-ink">{s.title}</span>
                        <span className="mt-0.5 block text-slate-500">
                          {d.name} ve çevresinde
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 mb-6 font-display text-xl font-bold uppercase text-ink">
                {d.name} Oto Kurtarma — Sıkça Sorulanlar
              </h3>
              <FaqAccordion items={localFaqs} />
            </div>

            {/* Yan panel */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-brand/20 bg-orange-50/60 p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold uppercase text-ink">
                  {d.name} Çekici Hattı
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {d.name} ve çevresinde yolda mı kaldınız? 7/24 arayın.
                </p>
                <a href={telUrl()} className="btn-primary mt-4 w-full">
                  <PhoneIcon className="h-5 w-5" />
                  {SITE.phoneDisplay}
                </a>

                <div className="mt-8">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                    Diğer Bölgeler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {otherDistricts.map((o) => (
                      <Link
                        key={o.slug}
                        href={`/bolgeler/${o.slug}`}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 hover:border-brand/40 hover:text-brand"
                      >
                        {o.name}
                        <ArrowRightIcon className="h-3 w-3 text-brand" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={`${d.name}'de Acil Çekici mi Lazım?`}
        desc={`${SITE.name} ${d.name} ekibi 7/24 hazır. Hemen arayın, en kısa sürede yanınızda olalım.`}
      />
    </>
  );
}
