// Blog / rehber içerikleri — blok tabanlı (featured snippet için h2/liste/tablo destekli).
// Rakiplerin zayıf olduğu "fiyat" ve "nasıl" aramalarını hedefler.

export type InlineLink = { text: string; href: string };

export type Block =
  | { type: "p"; text: string; links?: InlineLink[] }
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
        links: [{ text: "Çekici", href: "/hizmetler/oto-kurtarici" }],
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
        links: [{ text: "tüm ilçelerinde", href: "/bolgeler" }],
      },
      {
        type: "p",
        text: "Aracınız kaza sonrası hareket edemiyorsa güvenliğinizi öncelikli tutup kaza sonrası ne yapmalı rehberimize göz atabilirsiniz. Akü kaynaklı bir arızayla karşılaştıysanız akü bitince ne yapmalı yazımız işinize yarayabilir.",
        links: [
          { text: "kaza sonrası ne yapmalı", href: "/blog/kaza-sonrasi-ne-yapmali" },
          { text: "akü bitince ne yapmalı", href: "/blog/aku-bitince-ne-yapmali" },
        ],
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
      {
        q: "Şehirlerarası çekici ücreti nasıl hesaplanır?",
        a: "Genellikle kilometre başına ücretlendirilir; araç tipi ve güzergâh da fiyatı etkiler. Net teklif almak için konumunuzu belirterek bizi arayabilirsiniz.",
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
        links: [{ text: "haklarınızı", href: "/blog/sigortali-cekici-hakki" }],
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
        text: "Kaza sonrası çekici ücretinin ne kadar tutacağını merak ediyorsanız güncel çorum çekici fiyatları rehberimize göz atabilirsiniz.",
        links: [
          {
            text: "çorum çekici fiyatları rehberimize",
            href: "/blog/corum-cekici-fiyatlari-2026",
          },
        ],
      },
      {
        type: "p",
        text: "Çorum ve ilçelerinde kaza kurtarma için 7/24 buradayız. Güvenli ve hızlı müdahale için hemen arayın: 0541 840 38 95.",
        links: [
          { text: "kaza kurtarma", href: "/hizmetler/kaza-agir-tonaj-kurtarma" },
        ],
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
      {
        q: "Kaza sonrası aracımı istediğim servise götürebilir miyim?",
        a: "Evet. Kurtardığımız aracınızı sizin tercih ettiğiniz oto tamirciye veya yetkili servise güvenle taşırız.",
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
        text: "Trafik kazası yaşadıysanız kaza sonrası ne yapmalı rehberimizdeki adımları takip ederek hem güvenliğinizi hem haklarınızı koruyabilirsiniz.",
        links: [
          { text: "kaza sonrası ne yapmalı", href: "/blog/kaza-sonrasi-ne-yapmali" },
        ],
      },
      {
        type: "p",
        text: "Aceleniz varsa ya da anlaşmalı ekip uzaktaysa, Karakuş Yol Yardım olarak Çorum'da hızlı çözüm sunuyoruz. Faturalı hizmet için arayın: 0541 840 38 95.",
        links: [
          { text: "Çorum'da hızlı çözüm", href: "/hizmetler/sehir-ici-oto-kurtarma" },
        ],
      },
    ],
    faq: [
      {
        q: "Kaskomda çekici hakkı olduğunu nasıl anlarım?",
        a: "Poliçe belgenizde 'yol yardım / çekici' maddesine bakın veya sigorta şirketinizi arayın. Çoğu kasko yıllık belirli sayıda ücretsiz çekici hakkı içerir.",
      },
      {
        q: "Anlaşmalı çekici ile anlaşmasız çekici arasındaki fark nedir?",
        a: "Anlaşmalı çekici sigorta şirketinin yönlendirdiği firmadır ve genellikle ücretsizdir. Anlaşmasız çekici çağırırsanız ödediğiniz ücreti fatura ile sigortanıza ibraz edebilirsiniz (poliçe şartına göre).",
      },
      {
        q: "Yol yardım hakkımı yılda kaç kez kullanabilirim?",
        a: "Poliçenize göre değişir; çoğu kasko yılda birkaç kez ücretsiz çekici/yol yardım hakkı tanır. Kesin sayı için sigorta şirketinizi aramanızı öneririz.",
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
        text: "Akü takviyesi ücretlerini merak ediyorsanız çorum çekici fiyatları rehberimizde detayları bulabilirsiniz.",
        links: [
          {
            text: "çorum çekici fiyatları rehberimizde",
            href: "/blog/corum-cekici-fiyatlari-2026",
          },
        ],
      },
      {
        type: "p",
        text: "Çorum'da aküniz bittiyse yerinize gelir, dakikalar içinde çalıştırırız. Akü takviye ve değişim için: 0541 840 38 95.",
        links: [{ text: "Akü takviye ve değişim", href: "/hizmetler/aku-takviye" }],
      },
    ],
    faq: [
      {
        q: "Akü takviyesi araca zarar verir mi?",
        a: "Doğru yapıldığında zarar vermez. Ancak yanlış kutup bağlantısı elektronik aksama zarar verebilir; bu yüzden profesyonel takviye önerilir.",
      },
      {
        q: "Akü kaç yılda bir değişmeli?",
        a: "Ortalama akü ömrü 3-5 yıldır; iklim koşulları, kullanım sıklığı ve araç bakımına göre bu süre değişebilir.",
      },
      {
        q: "Kısa mesafe kullanım aküyü şarj eder mi?",
        a: "Hayır, kısa turlar aküyü tam şarj etmez. Akü zaten zayıfsa kısa kullanım yeterli olmaz; yerinde takviye veya değişim en hızlı çözümdür.",
      },
    ],
  },
  {
    slug: "arac-nasil-cekilir",
    title: "Araç Nasıl Çekilir? Doğru ve Güvenli Çekme Rehberi",
    metaTitle: "Araç Nasıl Çekilir? | Güvenli Çekme Rehberi",
    metaDescription:
      "Arızalı veya kaza yapmış araç nasıl çekilir? Doğru çekme yöntemleri, halatla çekmenin riskleri ve profesyonel çekicinin farkı. Çorum'da 7/24 destek.",
    excerpt:
      "Aracınızı kendiniz mi çekeceksiniz yoksa profesyonel çekici mi çağırmalısınız? Doğru ve güvenli araç çekme yöntemlerini anlatıyoruz.",
    date: "2026-07-25",
    updated: "2026-08-01",
    readMin: 5,
    blocks: [
      {
        type: "p",
        text: "Arızalanan ya da kaza yapan bir aracın nasıl çekileceğini bilmek, hem sürücü güvenliği hem de araç sağlığı açısından önemlidir. Yanlış çekme yöntemi aracınıza ciddi zarar verebilir. Bu rehberde doğru araç çekme yöntemlerini ve nelere dikkat etmeniz gerektiğini anlatıyoruz.",
      },
      { type: "h2", text: "Aracınızı kendiniz çekmeye çalışmalı mısınız?" },
      {
        type: "p",
        text: "Halat veya iple çekme, kısa mesafelerde bazen tercih edilse de risklidir: fren sistemi, direksiyon hakimiyeti ve şanzıman üzerinde ciddi zarar oluşabilir. Özellikle otomatik vitesli araçlarda yanlış çekme şanzımanı tamamen bozabilir.",
      },
      { type: "h2", text: "Profesyonel çekici ile araç çekmenin avantajları" },
      {
        type: "ul",
        items: [
          "Kayar kasa (sıfır zeminli) çekici, aracı hiç sürüklemeden yükler.",
          "Otomatik ve dört çeker araçlar için özel yöntemler uygulanır.",
          "Sigorta ve hasar süreçlerinde kayıt altına alınmış, güvenilir hizmet sağlar.",
          "Trafik güvenliği önlemleriyle çalışılır, ikinci bir kaza riski azalır.",
        ],
      },
      { type: "h2", text: "Hangi durumlarda çekici çağırmalısınız?" },
      {
        type: "ol",
        items: [
          "Araç hiç çalışmıyorsa veya marş atmıyorsa.",
          "Kaza sonrası hareket edemiyorsa.",
          "Lastik veya jant hasarlı ve stepne yoksa.",
          "Şanzıman veya fren arızası şüphesi varsa.",
        ],
      },
      {
        type: "p",
        text: "Kaza sonrası araç çekme sürecini adım adım öğrenmek isterseniz kaza sonrası ne yapmalı rehberimize göz atabilirsiniz.",
        links: [
          { text: "kaza sonrası ne yapmalı", href: "/blog/kaza-sonrasi-ne-yapmali" },
        ],
      },
      {
        type: "p",
        text: "Çorum'da aracınızı nasıl çekeceğinizi bilmiyorsanız bizi arayın; kayar kasa çekicilerimizle aracınızı zarar vermeden güvenle taşırız: 0541 840 38 95.",
        links: [
          { text: "kayar kasa çekicilerimizle", href: "/hizmetler/oto-kurtarici" },
        ],
      },
    ],
    faq: [
      {
        q: "Otomatik vitesli araç nasıl çekilir?",
        a: "Otomatik vitesli araçlar dört tekeri de yerden kesilecek şekilde, kayar kasa (platform) çekici ile taşınmalıdır; aksi halde şanzımana ciddi zarar verebilir.",
      },
      {
        q: "Aracımı halatla çekmek güvenli mi?",
        a: "Kısa ve düşük hızlı mesafelerde mümkün olsa da risklidir; fren ve direksiyon kontrolü zorlaşır. Güvenli olan yöntem profesyonel çekicidir.",
      },
      {
        q: "Çekici gelene kadar aracımı nasıl korurum?",
        a: "Aracı mümkünse yol kenarına çekin, dörtlü flaşörleri açın ve arkasına reflektör koyun; trafik güvenliğinizi sağlayın.",
      },
    ],
  },
  {
    slug: "yol-yardim-nedir",
    title: "Yol Yardım Nedir? Kapsamı ve Ne Zaman Gerekir",
    metaTitle: "Yol Yardım Nedir? | Kapsamı ve Hizmetleri",
    metaDescription:
      "Yol yardım nedir, neleri kapsar? Akü, lastik, yakıt ve çekici desteği dahil yol yardım hizmetlerini ve ne zaman gerektiğini anlatıyoruz. Çorum'da 7/24.",
    excerpt:
      "Yol yardım tam olarak nedir, hangi durumları kapsar? Aracınız yolda kaldığında hangi hizmeti çağırmanız gerektiğini öğrenin.",
    date: "2026-07-29",
    updated: "2026-08-05",
    readMin: 4,
    blocks: [
      {
        type: "p",
        text: "Yol yardım, aracınız yolda arıza yaptığında ya da beklenmedik bir sorunla karşılaştığınızda sizi tekrar yola çıkaran hizmetler bütünüdür. Her sorun çekici gerektirmez; çoğu zaman yerinde yapılan küçük bir müdahale yeterlidir.",
      },
      { type: "h2", text: "Yol yardım hangi hizmetleri kapsar?" },
      {
        type: "ul",
        items: [
          "Akü takviye ve akü değişimi",
          "Lastik değişimi ve stepne montajı",
          "Yakıt ikmali",
          "Kapıda/kontakta kalan anahtar için yönlendirme",
          "Küçük arızalarda yerinde müdahale",
        ],
      },
      { type: "h2", text: "Yol yardım ile çekici arasındaki fark nedir?" },
      {
        type: "p",
        text: "Yol yardım, aracınızı olduğu yerde tekrar çalışır hale getirmeyi hedefler. Sorun yerinde çözülemeyecek kadar büyükse (örneğin motor arızası veya ağır hasar), aynı ekip çekici hizmetine geçer ve aracınızı güvenle taşır.",
        links: [{ text: "çekici hizmetine", href: "/hizmetler/oto-kurtarici" }],
      },
      { type: "h2", text: "Ne zaman yol yardım çağırmalısınız?" },
      {
        type: "ol",
        items: [
          "Aracınız çalışmıyor ama hareket ettirilebiliyorsa.",
          "Akü, lastik veya yakıt kaynaklı bir sorun yaşıyorsanız.",
          "Kısa sürede çözülebilecek küçük bir arıza varsa.",
          "Emin değilseniz arayın; ekibimiz durumu değerlendirip doğru çözümü sunar.",
        ],
      },
      {
        type: "p",
        text: "Çorum ve tüm ilçelerinde 7/24 yol yardım hizmeti veriyoruz. Aküniz bittiyse akü bitince ne yapmalı rehberimize, çekici fiyatlarını merak ediyorsanız güncel fiyat rehberimize göz atabilirsiniz.",
        links: [
          { text: "akü bitince ne yapmalı", href: "/blog/aku-bitince-ne-yapmali" },
          {
            text: "güncel fiyat rehberimize",
            href: "/blog/corum-cekici-fiyatlari-2026",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Yol yardım ücretli mi?",
        a: "Hizmet türüne göre değişir; akü takviye ve lastik değişimi gibi işlemler uygun sabit ücretlidir, bazı kasko poliçeleri ise ücretsiz yol yardım hakkı sağlar.",
      },
      {
        q: "Yol yardım ekibi ne kadar sürede gelir?",
        a: "Çorum şehir merkezinde ortalama 15-25 dakika içinde olay yerinde oluyoruz; ilçelerde mesafeye göre süre değişebilir.",
      },
      {
        q: "Yol yardım gece de çalışıyor mu?",
        a: "Evet, 7 gün 24 saat kesintisiz hizmet veriyoruz; gece yarısı bile aynı hızda ulaşırız.",
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
