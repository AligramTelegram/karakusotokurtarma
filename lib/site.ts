// Merkezi site sabitleri — NAP (Ad-Adres-Telefon) tutarlılığı için tek kaynak.

export const SITE = {
  name: "Karakuş Yol Yardım",
  legalName: "Karakuş Yol Yardım ve Yediemin İşletmeciliği",
  shortName: "Çorum Oto Çekici",
  domain: "corumotocekici.net",
  url: "https://corumotocekici.net",
  description:
    "Çorum ve tüm ilçelerinde 7/24 oto kurtarma, çekici ve yol yardım hizmeti. Şehir içi ve şehirlerarası araç çekme, akü takviye, lastik ve yakıt desteği. Hemen arayın.",
  slogan: "Yolda Kaldıysanız Bir Telefon Yeter!",

  // İletişim
  phoneDisplay: "0541 840 38 95",
  phoneRaw: "+905418403895",
  whatsappRaw: "905418403895",

  // Adres
  address: {
    street: "Akkent Mahallesi, Akkent Cd. 85/3",
    district: "Merkez",
    city: "Çorum",
    region: "Çorum",
    postalCode: "19000",
    country: "TR",
    full: "Akkent Mahallesi, Akkent Cd. 85/3, 19000 Merkez/Çorum",
  },
  geo: {
    // Karakuş Yol Yardım gerçek işletme işaretçisi (Google Maps)
    lat: 40.5231465,
    lng: 34.9049239,
  },

  hours: "7/24 (Haftanın 7 günü, 24 saat)",
  foundingYear: 2015,

  social: {
    // Doldurulunca aktif olur
    instagram: "",
    facebook: "",
  },

  // Google İşletme Profili (doğrulanmış). Linkler doldurulunca aktif olur.
  google: {
    // İşletme profili / Haritalar linki (schema sameAs + "Haritada aç" için)
    businessUrl: "https://maps.app.goo.gl/7Eb2U6vPeu3SrQkA9",
    // "Yorum yaz" linki (şimdilik profil; direkt writereview linki Place ID gelince güncellenir)
    reviewUrl: "https://maps.app.goo.gl/7Eb2U6vPeu3SrQkA9",
  },
} as const;

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Bölgeler", href: "/bolgeler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
] as const;

// Yediemin İşletmeciliği (hukuki araç muhafaza / yediemin otoparkı)
export const YEDIEMIN = {
  title: "Çorum Yediemin Otoparkı",
  intro:
    "Karakuş Yol Yardım, oto kurtarma hizmetlerinin yanı sıra lisanslı yediemin işletmeciliği de yapar. Trafikten men edilen, kaza yapan ya da hukuki süreçteki araçlar; kameralı güvenlikli ve sigortalı otoparkımızda güvenle muhafaza edilir.",
  vehicleTypes: [
    "Trafikten men edilen araçlar",
    "Kaza / hasarlı araçlar",
    "Haciz / mahkeme kararlı araçlar",
    "Özel & uzun süreli güvenli park",
  ],
  trust: [
    "Lisanslı yediemin otoparkı",
    "7/24 kameralı güvenlik",
    "Sigortalı ve kapalı/açık alan",
    "Kayıt altında teslim ve teslim alma",
  ],
} as const;

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Merhaba, Çorum'da oto kurtarma / çekici hizmetine ihtiyacım var."
);

export const whatsappUrl = () =>
  `https://wa.me/${SITE.whatsappRaw}?text=${WHATSAPP_MESSAGE}`;

export const telUrl = () => `tel:${SITE.phoneRaw}`;
