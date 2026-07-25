import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Karakuş Yol Yardım çerez politikası. Web sitemizde kullanılan çerezler, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.",
  alternates: { canonical: "/cerez-politikasi" },
  robots: { index: true, follow: true },
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <PageHeader
        title="Çerez Politikası"
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Çerez Politikası" },
        ]}
      />
      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="space-y-5 leading-relaxed text-slate-600">
            <p>
              Bu Çerez Politikası, {SITE.name} ({SITE.legalName}) tarafından
              işletilen {SITE.domain} web sitesinde çerezlerin nasıl
              kullanıldığını açıklar. Sitemizi kullanarak bu politikada
              açıklanan çerez kullanımını kabul etmiş olursunuz.
            </p>

            <h2 className="pt-4 font-display text-2xl font-bold uppercase text-ink">
              Çerez Nedir?
            </h2>
            <p>
              Çerezler, ziyaret ettiğiniz web siteleri tarafından cihazınıza
              (bilgisayar, telefon, tablet) kaydedilen küçük metin
              dosyalarıdır. Çerezler, sitenin düzgün çalışmasını sağlamak ve
              kullanıcı deneyimini iyileştirmek için kullanılır.
            </p>

            <h2 className="pt-4 font-display text-2xl font-bold uppercase text-ink">
              Hangi Çerezleri Kullanıyoruz?
            </h2>
            <ul className="space-y-2">
              {[
                "Zorunlu çerezler: Sitenin temel işlevleri ve çerez tercihinizin hatırlanması için gereklidir.",
                "Performans/analiz çerezleri: Ziyaretçilerin siteyi nasıl kullandığını anlamak için (etkinleştirildiğinde) kullanılabilir.",
                "İşlevsellik çerezleri: Tercihlerinizi hatırlayarak daha iyi bir deneyim sunar.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {t}
                </li>
              ))}
            </ul>

            <h2 className="pt-4 font-display text-2xl font-bold uppercase text-ink">
              Çerezleri Nasıl Yönetebilirsiniz?
            </h2>
            <p>
              Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman
              silebilir veya engelleyebilirsiniz. Ancak zorunlu çerezlerin
              devre dışı bırakılması sitenin bazı bölümlerinin düzgün
              çalışmamasına neden olabilir. Sitedeki çerez bildiriminden de
              tercihinizi belirleyebilirsiniz.
            </p>

            <h2 className="pt-4 font-display text-2xl font-bold uppercase text-ink">
              İletişim
            </h2>
            <p>
              Çerez politikamız hakkında sorularınız için bize{" "}
              <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-brand hover:underline">
                {SITE.phoneDisplay}
              </a>{" "}
              numarasından ulaşabilirsiniz.
            </p>

            <p className="pt-4 text-sm text-slate-400">
              Bu politika bilgilendirme amaçlıdır ve gerektiğinde
              güncellenebilir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
