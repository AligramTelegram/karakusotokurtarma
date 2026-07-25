import Link from "next/link";
import { PhoneIcon, ArrowRightIcon } from "@/components/Icons";
import { SITE, telUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-x text-center">
        <p className="font-display text-7xl font-bold text-brand">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold uppercase text-ink">
          Sayfa Bulunamadı
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Acil çekici
          ihtiyacınız varsa hemen arayın.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={telUrl()} className="btn-primary">
            <PhoneIcon className="h-5 w-5" />
            {SITE.phoneDisplay}
          </a>
          <Link href="/" className="btn-outline">
            Ana Sayfaya Dön
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
