import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import PostBlocks from "@/components/PostBlocks";
import FaqAccordion from "@/components/FaqAccordion";
import { CtaBand } from "@/components/ui";
import { PhoneIcon, ClockIcon, ArrowRightIcon } from "@/components/Icons";
import { POSTS, getPost } from "@/lib/posts";
import { SITE, telUrl } from "@/lib/site";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  };
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function PostDetail({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          url,
          datePublished: post.date,
          dateModified: post.updated,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "Blog", url: `${SITE.url}/blog` },
          { name: post.title, url },
        ])}
      />
      {post.faq && post.faq.length > 0 && (
        <JsonLd data={faqPageSchema(post.faq)} />
      )}

      <PageHeader
        title={post.title}
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title },
        ]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-4 text-xs text-slate-400">
                <span>Yayın: {fmt(post.date)}</span>
                <span>Güncelleme: {fmt(post.updated)}</span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-3.5 w-3.5" />
                  {post.readMin} dk
                </span>
              </div>

              <PostBlocks blocks={post.blocks} />

              {post.faq && post.faq.length > 0 && (
                <>
                  <h2 className="mt-12 mb-6 font-display text-2xl font-bold uppercase text-ink">
                    Sıkça Sorulan Sorular
                  </h2>
                  <FaqAccordion items={post.faq} />
                </>
              )}
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-brand/20 bg-orange-50/60 p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold uppercase text-ink">
                    Acil Çekici mi Lazım?
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Çorum ve tüm ilçelerinde 7/24 buradayız.
                  </p>
                  <a href={telUrl()} className="btn-primary mt-4 w-full">
                    <PhoneIcon className="h-5 w-5" />
                    {SITE.phoneDisplay}
                  </a>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                    Diğer Yazılar
                  </h4>
                  <ul className="space-y-2">
                    {others.map((o) => (
                      <li key={o.slug}>
                        <Link
                          href={`/blog/${o.slug}`}
                          className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition-colors hover:border-brand/40 hover:text-brand"
                        >
                          {o.title}
                          <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand" />
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
