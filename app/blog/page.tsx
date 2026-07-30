import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { CtaBand } from "@/components/ui";
import { ArrowRightIcon, ClockIcon } from "@/components/Icons";
import { POSTS } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { itemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog & Rehber | Çorum Oto Kurtarma",
  description:
    "Çorum çekici fiyatları, kaza sonrası ne yapmalı, sigortalı çekici hakkı ve yol yardım rehberleri. Sürücüler için pratik bilgiler.",
  alternates: { canonical: "/blog" },
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <JsonLd
        data={itemListSchema(
          posts.map((p) => ({
            name: p.title,
            url: `${SITE.url}/blog/${p.slug}`,
          })),
          "Karakuş Yol Yardım Blog"
        )}
      />
      <PageHeader
        title="Blog & Rehber"
        desc="Çekici, oto kurtarma ve yol yardım hakkında bilmeniz gereken her şey — sürücüler için pratik rehberler."
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Blog" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card group flex flex-col hover:-translate-y-1 hover:border-brand/40"
              >
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{fmt(p.date)}</span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-3.5 w-3.5" />
                    {p.readMin} dk okuma
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-ink">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Devamını Oku
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
