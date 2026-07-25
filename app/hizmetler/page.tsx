import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import { CtaBand } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Çorum Oto Kurtarma",
  description:
    "Çorum oto kurtarma hizmetlerimiz: şehir içi çekici, şehirlerarası araç taşıma, 7/24 yol yardım, kaza ve ağır tonaj kurtarma. Detaylar için tıklayın.",
  alternates: { canonical: "/hizmetler" },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader
        title="Hizmetlerimiz"
        desc="Çorum ve tüm ilçelerinde ihtiyaç duyabileceğiniz tüm oto kurtarma ve yol yardım hizmetleri tek çatı altında."
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetlerimiz" }]}
      />
      <section className="section">
        <div className="container-x">
          <ServicesGrid />
        </div>
      </section>
      {/* İç linkleme: hizmetler → bölgeler */}
      <CtaBand
        title="Hangi hizmete ihtiyacınız var?"
        desc={`${SITE.name} ekibi 7/24 hazır. Arayın, durumunuzu anlatın; en uygun çözümle yola çıkalım.`}
      />
    </>
  );
}
