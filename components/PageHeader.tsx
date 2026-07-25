import { Breadcrumbs } from "./ui";

export default function PageHeader({
  title,
  desc,
  crumbs,
}: {
  title: string;
  desc?: string;
  crumbs: { name: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 pt-28 pb-12 sm:pt-32 sm:pb-14">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />
      <div className="container-x relative">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {desc && (
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
