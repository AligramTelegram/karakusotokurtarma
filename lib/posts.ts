// Blog / rehber içerikleri — blok tabanlı (featured snippet için h2/liste/tablo destekli).
// Rakiplerin zayıf olduğu "fiyat" ve "nasıl" aramalarını hedefler.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  updated: string; // ISO
  readMin: number;
  blocks: Block[];
  faq?: { q: string; a: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "corum-cekici-fiyatlari-2026",
    title: "Çorum Çekici Fiyatları 2026 — Güncel Oto Kurtarma Ücretleri Rehberi",
    metaTitle: "Çorum Çekici Fiyatları 2026 | Oto Kurtarma Ne Kadar?",
    metaDescription:
      "Çorum çekici ve oto kurtarma fiyatları 2026: şehir içi, şehirlerarası, akü, lastik ve ağır tonaj ücretleri. Fiyatı etkileyen faktörler ve net teklif nasıl alınır.",
    excerpt:
      "Çorum'da çekici ve oto kurtarma ücretleri neye göre belirlenir? 2026 güncel fiyat aralıkları, örnek tablo ve net teklif almanın yolu.",
    date: "2026-07-01",
    updated: "2026-07-20",
    readMin: 6,
    blocks: [
      {
        type: "p",
        text: "Çorum'da yolda kaldığınızda en çok merak edilen sorulardan biri: “Çekici kaç para?” Oto kurtarma ücretleri sabit bir tarife değildir; mesafe, araç tipi, hizmet türü ve aracın durumu fiyatı belirler. Bu rehberde 2026 güncel fiyat aralıklarını ve net teklifi nasıl alacağınızı açıklıyoruz.",
      },
      { type: "h2", text: "Çorum çekici fiyatları neye göre değişir?" },
      {
        type: "ul",
        items: [
          "Mesafe: Şehir içi mi, şehirlerarası mı; km başına ücret değişir.",
          "Araç tipi: Otomobil, ticari araç, motosiklet veya ağır tonaj (kamyon/tır).",
          "Aracın durumu: Çalışır arıza mı, kaza mı, devrilme/şarampol kurtarma mı.",
          "Hizmet türü: Çekici mi, yoksa yerinde yol yardım (akü/lastik/yakıt) mı.",
          "Zaman: Gece, hafta sonu ve zorlu hava koşulları operasyonu etkileyebilir.",
        ],
      },
      { type: "h2", text: "Çorum oto kurtarma fiyat aralıkları (2026, bilgilendirme)" },
      {
        type: "p",
        text: "Aşağıdaki tablo sektörel ortalama aralıkları gösterir; kesin fiyat için aracınızın konumu ve durumuna göre telefonda net teklif alırsınız.",
      },
      {
        type: "table",
        head: ["Hizmet", "Yaklaşık Ücret Aralığı"],
        rows: [
          ["Yerinde lastik değişimi / stepne", "150 – 300 ₺"],
          ["Akü takviye", "200 – 400 ₺"],
          ["Yakıt ikmali (yakıt hariç servis)", "150 – 250 ₺"],
          ["Şehir içi çekici", "400 ₺ ve üzeri (mesafeye göre)"],
          ["Şehirlerarası çekici", "Km başına değişken"],
          ["Ağır tonaj / vinçli kurtarma", "Operasyona göre (yüksek)"],
        ],
      },
      { type: "h2", text: "Net fiyatı nasıl öğrenirim?" },
      {
        type: "ol",
        items: [
          "Bulunduğunuz konumu (mahalle/yol/km) net belirtin.",
          "Aracınızın tipini ve durumunu söyleyin (çalışıyor / kaza / lastik vb.).",
          "Nereye taşınacağını belirtin (servis, adres, şehir).",
          "Telefonda sabit ve net fiyatınızı alın — olay yerinde sürpriz ücret olmaz.",
        ],
      },
      {
        type: "p",
        text: "Karakuş Yol Yardım olarak Çorum ve tüm ilçelerinde şeffaf fiyat politikası uygularız. Aramanız yeterli: 0541 840 38 95.",
      },
    ],
    faq: [
      {
        q: "Çorum'da en ucuz çekici hangisi?",
        a: "Fiyat mesafe ve araç durumuna göre değişir. En doğru yöntem, konumunuzu ve aracınızın durumunu belirterek telefonda net teklif almaktır. Karakuş Yol Yardım şeffaf ve sabit fiyat verir.",
      },
      {
        q: "Çekici ücreti mesafeye göre mi hesaplanır?",
        a: "Evet. Şehir içi çekimlerde genellikle sabit bir taban ücret, şehirlerarası taşımada ise km başına ücret uygulanır. Ağır tonaj kurtarma operasyona göre fiyatlanır.",
      },
    ],
  },
  {
    slug: "kaza-sonrasi-ne-yapmali",
    title: "Trafik Kazası Sonrası Ne Yapmalı? Adım Adım Rehber",
    metaTitle: "Kaza Sonrası Ne Yapmalı? | Çorum Kaza Kurtarma Rehberi",
    metaDescription:
      "Trafik kazası sonrası yapılması gerekenler: güvenlik, tutanak, sigorta ve araç çektirme adımları. Çorum'da 7/24 kaza kurtarma için pratik rehber.",
    excerpt:
      "Kaza anında panik yapmadan atmanız gereken adımlar: güvenlik önlemi, tutanak, sigorta bildirimi ve aracı güvenle çektirme.",
    date: "2026-07-05",
    updated: "2026-07-18",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "Trafik kazası stresli bir andır; ancak doğru adımları bilmek hem güvenliğinizi hem de haklarınızı korur. İşte kaza sonrası yapmanız gerekenler.",
      },
      { type: "h2", text: "Kaza sonrası ilk 5 adım" },
      {
        type: "ol",
        items: [
          "Önce can güvenliği: Aracı mümkünse güvenli kenara çekin, dörtlüleri yakın, reflektör koyun.",
          "Yaralı varsa 112'yi arayın; ciddi kaza veya anlaşmazlıkta 155/156 trafik ekiplerini çağırın.",
          "Kaza yerini ve hasarları fotoğraflayın (plakalar, konum, hasar detayları).",
          "Karşı tarafla kaza tespit tutanağı doldurun; sürücü ve poliçe bilgilerini alın.",
          "Sigorta şirketinize bildirin ve aracınızı çektirmek için oto kurtarma çağırın.",
        ],
      },
      { type: "h2", text: "Aracı çektirirken nelere dikkat etmeli?" },
      {
        type: "ul",
        items: [
          "Kaza yapmış aracı kendi başınıza hareket ettirmeye çalışmayın; gizli hasar riski vardır.",
          "Kayar kasa (sıfır zeminli) çekici, aracınıza ek hasar vermeden yükleme yapar.",
          "Aracın nereye (anlaşmalı servis / istediğiniz adres) taşınacağını netleştirin.",
          "Devrilme veya şarampol durumunda vinçli/ağır tonaj kurtarma gerekir.",
        ],
      },
      {
        type: "p",
        text: "Çorum ve ilçelerinde kaza kurtarma için 7/24 buradayız. Güvenli ve hızlı müdahale için hemen arayın: 0541 840 38 95.",
      },
    ],
    faq: [
      {
        q: "Kaza yapan aracı çektirmek zorunda mıyım?",
        a: "Araç güvenli şekilde hareket edemiyorsa veya gizli hasar riski varsa çektirmek en güvenli seçenektir. Kayar kasa çekici ile araca ek hasar verilmeden taşınır.",
      },
      {
        q: "Kaza kurtarma ücretini sigorta karşılar mı?",
        a: "Poliçenizin kapsamına göre değişir; birçok kasko ve bazı trafik sigortası paketleri çekici/kurtarma desteği içerir. Sigorta şirketinizle teyit etmeniz önerilir.",
      },
    ],
  },
  {
    slug: "sigortali-cekici-hakki",
    title: "Sigortalı Çekici Hakkınız: Trafik Sigortası ve Kasko Çekici Desteği",
    metaTitle: "Sigortalı Çekici Hakkı | Trafik Sigortası & Kasko Çekici",
    metaDescription:
      "Trafik sigortası ve kaskoda çekici / yol yardım hakkınız nedir? Ücretsiz çekici desteğini nasıl kullanırsınız? Çorum oto kurtarma rehberi.",
    excerpt:
      "Kasko ve trafik sigortanızda çoğu zaman çekici/yol yardım desteği bulunur. Bu hakkı nasıl öğrenir ve kullanırsınız?",
    date: "2026-07-08",
    updated: "2026-07-19",
    readMin: 4,
    blocks: [
      {
        type: "p",
        text: "Birçok sürücü, poliçesinde çekici hakkı olduğunu bilmez. Kasko ve bazı sigorta paketleri belirli koşullarda ücretsiz çekici veya yol yardım desteği sunar.",
      },
      { type: "h2", text: "Hangi poliçeler çekici desteği içerir?" },
      {
        type: "ul",
        items: [
          "Kasko poliçeleri: Genellikle yıllık belirli sayıda çekici / yol yardım hakkı içerir.",
          "Bazı trafik sigortası paketleri: Sınırlı yol yardım desteği sunabilir.",
          "Araç markalarının yol yardım programları: Yeni araçlarda üretici desteği olabilir.",
        ],
      },
      { type: "h2", text: "Sigortalı çekici hakkını nasıl kullanırım?" },
      {
        type: "ol",
        items: [
          "Poliçenizi kontrol edin veya sigorta şirketinizi arayın.",
          "Yol yardım hattına durumu ve konumu bildirin.",
          "Anlaşmalı çekici gelmezse veya beklemek istemezseniz, özel çekici çağırıp fatura ile başvurabilirsiniz (poliçe şartına göre).",
        ],
      },
      {
        type: "p",
        text: "Aceleniz varsa ya da anlaşmalı ekip uzaktaysa, Karakuş Yol Yardım olarak Çorum'da hızlı çözüm sunuyoruz. Faturalı hizmet için arayın: 0541 840 38 95.",
      },
    ],
    faq: [
      {
        q: "Kaskomda çekici hakkı olduğunu nasıl anlarım?",
        a: "Poliçe belgenizde 'yol yardım / çekici' maddesine bakın veya sigorta şirketinizi arayın. Çoğu kasko yıllık belirli sayıda ücretsiz çekici hakkı içerir.",
      },
    ],
  },
  {
    slug: "aku-bitince-ne-yapmali",
    title: "Akü Bitince Ne Yapmalı? Takviye ve Önleme Rehberi",
    metaTitle: "Akü Bitince Ne Yapmalı? | Çorum Akü Takviye Yol Yardım",
    metaDescription:
      "Araç aküsü bitti, marş basmıyor mu? Akü takviye adımları, dikkat edilecekler ve akü ömrünü uzatma ipuçları. Çorum'da 7/24 yerinde akü yol yardım.",
    excerpt:
      "Marş basmıyor, farlar sönük mü yanıyor? Akü takviyesinde doğru adımlar ve akünüzü koruma ipuçları.",
    date: "2026-07-10",
    updated: "2026-07-17",
    readMin: 4,
    blocks: [
      {
        type: "p",
        text: "Özellikle soğuk havalarda akü bitmesi çok yaygındır. Marş zayıf basıyor, farlar sönük yanıyor veya araç hiç çalışmıyorsa büyük ihtimalle akü sorunu vardır.",
      },
      { type: "h2", text: "Akü bittiğinde ne yapmalı?" },
      {
        type: "ol",
        items: [
          "Tüm elektrikli tüketicileri kapatın (far, radyo, klima).",
          "Takviye kablonuz ve yardımcı araç varsa doğru sırayla bağlayın; emin değilseniz denemeyin.",
          "Yanlış bağlantı elektronik aksama zarar verebilir; profesyonel takviye en güvenlisidir.",
          "Yerinde akü takviye / değişim için yol yardım çağırın.",
        ],
      },
      { type: "h2", text: "Akü ömrünü uzatma ipuçları" },
      {
        type: "ul",
        items: [
          "Aracı uzun süre çalıştırmadan bırakmayın; kısa turlar aküyü tam şarj etmez.",
          "Kontak kapalıyken far/iç aydınlatmayı açık bırakmayın.",
          "Kışa girmeden akü sağlığını kontrol ettirin.",
          "Akü kutup başlarını temiz ve sıkı tutun.",
        ],
      },
      {
        type: "p",
        text: "Çorum'da aküniz bittiyse yerinize gelir, dakikalar içinde çalıştırırız. Akü takviye ve değişim için: 0541 840 38 95.",
      },
    ],
    faq: [
      {
        q: "Akü takviyesi araca zarar verir mi?",
        a: "Doğru yapıldığında zarar vermez. Ancak yanlış kutup bağlantısı elektronik aksama zarar verebilir; bu yüzden profesyonel takviye önerilir.",
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
