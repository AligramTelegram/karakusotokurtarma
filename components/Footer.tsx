import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE, telUrl, whatsappUrl } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { DISTRICTS } from "@/lib/districts";
import Logo from "./Logo";
import { PhoneIcon, WhatsappIcon, MapPinIcon, ClockIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-36 pt-16 lg:pb-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Marka */}
          <div>
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Çorum ve tüm ilçelerinde 7/24 oto kurtarma, çekici ve yol yardım
              hizmeti. Yolda kaldıysanız bir telefon yeter.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href={telUrl()} className="flex items-center gap-2 font-semibold text-ink hover:text-brand">
                <PhoneIcon className="h-4 w-4 text-brand" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-brand"
              >
                <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
              <p className="flex items-start gap-2 text-slate-500">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {SITE.address.full}
              </p>
              <p className="flex items-center gap-2 text-slate-500">
                <ClockIcon className="h-4 w-4 text-brand" />
                {SITE.hours}
              </p>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-slate-500 transition-colors hover:text-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#yediemin"
                  className="text-slate-500 transition-colors hover:text-brand"
                >
                  Yediemin Otoparkı
                </Link>
              </li>
            </ul>
          </div>

          {/* Sayfalar */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink">
              Kurumsal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-500 transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölgeler */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink">
              Hizmet Bölgeleri
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {DISTRICTS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/bolgeler/${d.slug}`}
                    className="text-slate-500 transition-colors hover:text-brand"
                  >
                    {d.name} Çekici
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.legalName}. Tüm
            hakları saklıdır.
            <span className="mx-2 text-slate-300">·</span>
            <Link href="/cerez-politikasi" className="hover:text-brand">
              Çerez Politikası
            </Link>
          </p>
          <a
            href="https://cihanbeytech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
            aria-label="Cihanbey Tech — web tasarım ve yazılım"
          >
            <Image
              src="/cihanbeytech-logo.png"
              alt="Cihanbey Tech"
              width={130}
              height={16}
              className="h-4 w-auto opacity-60 transition-opacity group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
