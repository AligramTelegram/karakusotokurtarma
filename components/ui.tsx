import Link from "next/link";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";
import { PhoneIcon, WhatsappIcon, ArrowRightIcon } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${center ? "justify-center" : ""}`}>
          {center && <span className="h-px w-8 bg-brand" />}
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-slate-600">{desc}</p>}
    </div>
  );
}

export function CtaBand({
  title = "Acil çekiciye mi ihtiyacınız var?",
  desc = "7/24 hattımızdan hemen ulaşın, en yakın ekibimiz dakikalar içinde yola çıksın.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-orange-50 via-white to-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl" aria-hidden />
          <h2 className="relative font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-600">{desc}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={telUrl()} className="btn-primary">
              <PhoneIcon className="h-5 w-5" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <WhatsappIcon className="h-5 w-5 text-[#25D366]" />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-brand">
                {it.name}
              </Link>
            ) : (
              <span className="font-medium text-ink">{it.name}</span>
            )}
            {i < items.length - 1 && (
              <ArrowRightIcon className="h-3 w-3 text-slate-300" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
