import Link from "next/link";
import { SERVICES, type Service } from "@/lib/services";
import { ICONS } from "./Icons";
import { ArrowRightIcon } from "./Icons";

export default function ServicesGrid({ items }: { items?: Service[] }) {
  const list = items ?? SERVICES;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => {
        const Icon = ICONS[s.icon as keyof typeof ICONS];
        return (
          <Link
            key={s.slug}
            href={`/hizmetler/${s.slug}`}
            className="card group hover:-translate-y-1 hover:border-brand/40"
          >
            <span className="mb-4 grid h-14 w-14 place-items-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              {Icon && <Icon className="h-7 w-7" />}
            </span>
            <h3 className="text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {s.short}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              Detaylı Bilgi
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
