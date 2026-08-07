import Link from "next/link";
import { SITE, telUrl } from "@/lib/site";
import { PhoneIcon, ClockIcon, MapPinIcon, ShieldIcon, ArrowRightIcon, ChevronDownIcon } from "./Icons";

const STATS = [
  { icon: ClockIcon, big: "7/24", label: "Kesintisiz Hizmet" },
  { icon: MapPinIcon, big: "Çorum", label: "ve Tüm İlçeleri" },
  { icon: ShieldIcon, big: "Güvenilir", label: "Profesyonel Ekip" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Arka plan videosu — poster olarak hero.webp (anında paint + fallback) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.webp"
        aria-hidden
        className="absolute inset-0 h-full w-full animate-ken-burns object-cover object-center motion-reduce:animate-none"
      >
        <source src="/herodeneme2.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="container-x relative z-10 pt-24 pb-28 lg:pb-20">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5 animate-fade-up [animation-delay:0ms]">
            <span className="h-px w-8 bg-brand" />
            Çorum&apos;un 7/24 Acil Çekici ve Oto Kurtarma Ekibi
          </p>

          <h1 className="animate-fade-up font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white [animation-delay:100ms] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
            Çorum&apos;da Yolda Kaldıysanız
            <br className="hidden sm:block" />{" "}
            Bir Telefon <span className="text-brand">Yeter!</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/80 [animation-delay:220ms]">
            {SITE.name} ile Çorum ve tüm ilçelerinde 7/24 hızlı, güvenilir ve
            profesyonel oto kurtarma, çekici ve yol yardım desteği.
          </p>

          {/* İstatistikler */}
          <div className="mt-8 flex animate-fade-up flex-wrap gap-x-10 gap-y-5 [animation-delay:340ms]">
            {STATS.map((s) => (
              <div key={s.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-brand/40 bg-brand/10">
                  <s.icon className="h-5 w-5 text-brand" />
                </span>
                <span className="leading-tight">
                  <span className="block text-lg font-bold text-white">
                    {s.big}
                  </span>
                  <span className="block text-xs text-white/60">{s.label}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Butonlar */}
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:460ms] sm:flex-row">
            <a href={telUrl()} className="btn-primary animate-pulse-ring">
              <PhoneIcon className="h-5 w-5" />
              Hemen Ara · {SITE.phoneDisplay}
            </a>
            <Link href="/hizmetler" className="btn-outline">
              Hizmetlerimiz
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Aşağı kaydır */}
      <a
        href="#hizmetler"
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white lg:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
          Aşağı Kaydır
        </span>
        <ChevronDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
