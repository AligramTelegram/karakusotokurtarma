import Link from "next/link";
import Image from "next/image";

// Kartal ikonu (public/kus.png) + kendi tipografimizle marka yazısı.
// dark=true → koyu yazı (beyaz zemin), dark=false → beyaz yazı (hero üzerinde).
export default function Logo({
  compact = false,
  dark = true,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Karakuş Yol Yardım ana sayfa"
      className="flex items-center gap-2.5"
    >
      <Image
        src="/kus.png"
        alt="Karakuş Yol Yardım logo"
        width={44}
        height={44}
        priority
        className="h-10 w-auto"
      />
      {!compact && (
        <span className="leading-none">
          <span
            className={`block font-display text-xl font-bold tracking-wide ${
              dark ? "text-ink" : "text-white"
            }`}
          >
            KARAKUŞ
          </span>
          <span className="mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-brand">
            Yol Yardım
          </span>
        </span>
      )}
    </Link>
  );
}
