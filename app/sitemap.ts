import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { DISTRICTS } from "@/lib/districts";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: SITE.url, priority: 1, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/hizmetler`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/bolgeler`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/hakkimizda`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${SITE.url}/iletisim`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${SITE.url}/cerez-politikasi`, priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const blogPages = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${SITE.url}/hizmetler/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const districtPages = DISTRICTS.map((d) => ({
    url: `${SITE.url}/bolgeler/${d.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...districtPages, ...blogPages].map((p) => ({
    ...p,
    lastModified: now,
  }));
}
