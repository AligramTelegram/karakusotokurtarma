import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { CtaBand } from "@/components/ui";
import { CheckIcon, PhoneIcon, ArrowRightIcon, ICONS } from "@/components/Icons";
import { SERVICES, getService } from "@/lib/services";
import { SITE, telUrl } from "@/lib/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon as keyof typeof ICONS];
  const url = `${SITE.url}/hizmetler/${service.slug}`;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={serviceSchema(service.title, service.metaDescription, url)}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "Hizmetler", url: `${SITE.url}/hizmetler` },
          { name: service.title, url },
        ])}
      />

      <PageHeader
        title={service.title}
        desc={service.intro}
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetler", href: "/hizmetler" },
          { name: service.title },
        ]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* İçerik */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand/15 text-brand">
                  {Icon && <Icon className="h-7 w-7" />}
                </span>
                <h2 className="font-display text-2xl font-bold uppercase text-ink">
                  {service.title} Hizmeti
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                {service.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <h3 className="mt-10 mb-4 font-display text-xl font-bold uppercase text-ink">
                Neler Sunuyoruz?
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Yan panel */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-brand/20 bg-orange-50/60 p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold uppercase text-ink">
                  Hemen Destek Alın
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  7/24 hattımızdan arayın, en yakın ekibimiz yola çıksın.
                </p>
                <a href={telUrl()} className="btn-primary mt-4 w-full">
                  <PhoneIcon className="h-5 w-5" />
                  {SITE.phoneDisplay}
                </a>

                <div className="mt-8">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                    Diğer Hizmetler
                  </h4>
                  <ul className="space-y-2">
                    {others.map((o) => (
                      <li key={o.slug}>
                        <Link
                          href={`/hizmetler/${o.slug}`}
                          className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition-colors hover:border-brand/40 hover:text-brand"
                        >
                          {o.title}
                          <ArrowRightIcon className="h-4 w-4 text-brand" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
