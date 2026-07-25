"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE, telUrl } from "@/lib/site";
import Logo from "./Logo";
import { PhoneIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Ana sayfada hero koyu olduğu için üstte şeffaf/beyaz-yazı; diğer sayfalar hep beyaz.
  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <nav className="container-x flex h-[68px] items-center justify-between">
        <Logo dark={solid} />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active
                    ? "text-brand"
                    : solid
                    ? "text-ink/80 hover:text-brand"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={telUrl()}
            className={`hidden items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-colors sm:inline-flex ${
              solid
                ? "border-brand bg-brand text-white hover:bg-brand-dark"
                : "border-brand/60 bg-brand/15 text-white hover:bg-brand hover:border-brand"
            }`}
          >
            <PhoneIcon className={`h-4 w-4 ${solid ? "text-white" : "text-brand"}`} />
            <span>7/24 YOL YARDIM</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            className={`grid h-11 w-11 place-items-center rounded-lg border lg:hidden ${
              solid
                ? "border-slate-200 bg-slate-50 text-ink"
                : "border-white/20 bg-white/10 text-white"
            }`}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobil menü */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink/90 hover:bg-slate-50 hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <a href={telUrl()} className="btn-primary mt-3">
              <PhoneIcon className="h-4 w-4" />
              HEMEN ARA · {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
