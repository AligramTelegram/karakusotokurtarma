import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Çorum Oto Kurtarma & Çekici 7/24`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "çorum çekici",
    "çorum oto kurtarma",
    "çorum oto çekici",
    "çorum yol yardım",
    "7/24 çekici çorum",
    "şehirlerarası çekici çorum",
    "çorum acil çekici",
    "çorum yediemin otoparkı",
    "çorum yediemin",
    "yediemin çekici çorum",
    "trafikten men araç çorum",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Çorum Oto Kurtarma & Çekici 7/24`,
    description: SITE.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Çorum Oto Kurtarma & Çekici`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Automotive",
  verification: {
    google: "mLw-ENXV4dpPp0xJScoJF5lS6n7WM2ahY5Wth00sDY0",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <CookieConsent />
      </body>
    </html>
  );
}
