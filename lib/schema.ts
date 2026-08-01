// JSON-LD yapısal veri üreticileri — rakiplerin en büyük eksiği bu.
import { SITE } from "./site";
import { FAQS } from "./faq";
import { DISTRICTS } from "./districts";

// Merkez + tüm ilçeler — Google Maps/yerel arama için hizmet bölgesi listesi.
const SERVICE_AREAS = [
  { "@type": "City", name: "Çorum Merkez" },
  ...DISTRICTS.map((d) => ({ "@type": "City", name: `${d.name}, Çorum` })),
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    priceRange: "₺₺",
    image: `${SITE.url}/og-image.jpg`,
    logo: `${SITE.url}/logo.png`,
    knowsAbout: [
      "Oto kurtarma",
      "Çekici hizmeti",
      "Yol yardım",
      "Yediemin otoparkı",
      "Yediemin işletmeciliği",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: SERVICE_AREAS,
    hasMap: SITE.google.businessUrl || undefined,
    // Google İşletme Profili'nden alınan gerçek puan/yorum sayısı.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "41",
      bestRating: "5",
      worstRating: "1",
    },
    availableLanguage: "Turkish",
    sameAs: [
      SITE.social.instagram,
      SITE.social.facebook,
      SITE.google.businessUrl,
    ].filter(Boolean),
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function faqSchema() {
  return faqPageSchema([...FAQS]);
}

export function itemListSchema(
  items: { name: string; url: string }[],
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
  areaName?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: areaName
      ? { "@type": "City", name: `${areaName}, Çorum` }
      : SERVICE_AREAS,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: SITE.phoneRaw,
      availableLanguage: "Turkish",
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: `${SITE.url}/og-image.jpg`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/kus.png` },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
