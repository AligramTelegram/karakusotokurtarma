// Hizmetler — her biri özgün içerik + kendi SEO sayfası.

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // components/Icons.tsx anahtarı
  metaTitle: string;
  metaDescription: string;
  intro: string;
  features: string[];
  content: string[]; // paragraflar
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "sehir-ici-oto-kurtarma",
    title: "Şehir İçi Oto Kurtarma",
    short:
      "Çorum şehir merkezinde arıza, kaza veya lastik sorununda en yakın çekici dakikalar içinde yanınızda.",
    icon: "city",
    metaTitle: "Çorum Şehir İçi Oto Kurtarma | 7/24 Çekici Hizmeti",
    metaDescription:
      "Çorum şehir içinde 7/24 oto kurtarma ve çekici hizmeti. Arıza, kaza ve lastik sorunlarında en yakın çekici dakikalar içinde. Hemen arayın: 0541 840 38 95.",
    intro:
      "Çorum şehir merkezinde aracınız yolda kaldıysa, kaza yaptıysanız ya da arıza verdiyse tek yapmanız gereken bizi aramak. Şehir içindeki tüm mahalle ve caddelere hızlı ulaşan ekibimizle aracınızı güvenle taşırız.",
    features: [
      "Ortalama 15-25 dakika içinde olay yerinde",
      "Kapalı kasa ve açık kasa çekici seçenekleri",
      "Kaza, arıza ve lastik patlağı desteği",
      "Aracınıza zarar vermeden yükleme",
      "Şeffaf, sabit fiyat — sürpriz ücret yok",
    ],
    content: [
      "Çorum şehir içinde trafiğin yoğun olduğu Gülabibey, Bahçelievler, Ulukavak, Akkent, Buharaevler ve çevre mahallelerde konumumuz sayesinde çok kısa sürede yanınızda oluruz. Aracınız çalışmıyorsa, kaza sonrası hareket edemiyorsa veya lastik/akü sorunu yaşıyorsanız 7/24 bize ulaşabilirsiniz.",
      "Modern kayar kasa (sıfır zeminli) çekicilerimizle otomobilinizi, ticari aracınızı veya motosikletinizi zemine sürtmeden, çizik ve hasar riski olmadan yükleriz. Düşük araçlar, spor araçlar ve elektrikli araçlar için özel ekipmanımız mevcuttur.",
      "Şehir içi çekim ücretlerimiz sabittir; telefonda net fiyat verir, olay yerinde sürpriz ek ücret çıkarmayız. Amacımız zor anınızda güvenilir ve hızlı çözüm sunmaktır.",
      "Ekibimiz Çorum trafiğini ve kestirme güzergâhları iyi bildiği için yoğun saatlerde bile gecikme yaşamadan olay yerine ulaşırız. İster iş yerinizin önünde, ister sitenizin otoparkında kalın, adresinizi paylaşmanız yeterlidir.",
      "Aracınızı kurtardıktan sonra isterseniz size en yakın oto tamirci veya oto servise, isterseniz güvendiğiniz özel servise güvenle taşırız — nereye götüreceğinizi bilmiyorsanız bölgedeki yetkili servisler konusunda da yönlendirme yaparız.",
    ],
    faq: [
      {
        q: "Çorum şehir içinde çekici ne kadar sürede gelir?",
        a: "Şehir merkezinde ortalama 15-25 dakika içinde olay yerinde oluyoruz. Trafik ve konumunuza göre bu süre değişebilir, aradığınızda size net bir tahmini süre veririz.",
      },
      {
        q: "Aracımı istediğim oto tamirciye/servise götürebilir misiniz?",
        a: "Evet. Aracınızı size en yakın veya tercih ettiğiniz oto tamirci ya da yetkili servise güvenle taşırız. Adresi belirtmeniz yeterli.",
      },
      {
        q: "Şehir içi çekici ücreti sabit mi?",
        a: "Evet, şehir içi çekimlerde sabit fiyat uyguluyoruz. Telefonda net fiyat veririz, olay yerinde ek ücret talep etmeyiz.",
      },
    ],
  },
  {
    slug: "sehirlerarasi-cekici",
    title: "Şehirlerarası Çekici",
    short:
      "Çorum'dan Türkiye'nin her iline güvenli, sigortalı ve uygun fiyatlı şehirlerarası araç taşıma.",
    icon: "road",
    metaTitle: "Çorum Şehirlerarası Çekici | Uzun Mesafe Araç Taşıma",
    metaDescription:
      "Çorum'dan tüm illere şehirlerarası çekici ve oto taşıma hizmeti. Sigortalı, güvenli ve uygun fiyatlı uzun mesafe araç transferi. 7/24: 0541 840 38 95.",
    intro:
      "Aracınızı Çorum'dan başka bir şehre ya da başka şehirden Çorum'a mı taşıtmak istiyorsunuz? Şehirlerarası çekici hizmetimizle aracınız güvenle, kilometrelerce yolu sorunsuz tamamlar.",
    features: [
      "Türkiye genelinde tüm illere transfer",
      "Sigortalı ve güvenli taşıma",
      "Kapalı kasa taşıma seçeneği (lüks/klasik araçlar)",
      "Tek araç veya çoklu araç taşıma",
      "Önceden planlı, zamanında teslim",
    ],
    content: [
      "İkinci el araç aldınız ve başka şehirden Çorum'a getirmeniz mi gerekiyor? Ya da arızalı aracınızı memleketinize mi taşıtacaksınız? Şehirlerarası çekici hizmetimizle Çorum'dan İstanbul, Ankara, Samsun, Amasya, Yozgat ve tüm illere güvenli taşıma yapıyoruz.",
      "Uzun mesafe taşımalarda aracınızı sabitleyip yola çıkar, tüm süreç boyunca güvenliğini sağlarız. Klasik, lüks veya hasarlı araçlar için kapalı kasa taşıma seçeneğimiz de mevcuttur.",
      "Şehirlerarası taşımalarda fiyat mesafeye ve araç tipine göre belirlenir; arayın, güzergâhınıza özel net fiyat verelim.",
      "Yola çıkmadan önce aracın lastik, cam ve karoser durumunu fotoğraflarız; teslimat sırasında aynı kontrolü birlikte yaparız. Böylece taşıma süresince oluşabilecek her türlü tereddüt baştan ortadan kalkar.",
    ],
    faq: [
      {
        q: "Şehirlerarası çekici ücreti neye göre hesaplanır?",
        a: "Mesafe, araç tipi (otomobil/ticari/ağır tonaj) ve kapalı/açık kasa tercihine göre değişir. Güzergâhınızı belirtirseniz telefonda net fiyat veririz.",
      },
      {
        q: "Aracım kaza yapmış olsa bile şehirlerarası taşıyabilir misiniz?",
        a: "Evet. Hareket edemeyen veya hasarlı araçları da güvenle yükleyip istediğiniz şehre taşırız.",
      },
    ],
  },
  {
    slug: "yol-yardim",
    title: "7/24 Yol Yardım",
    short:
      "Akü takviye, lastik değişimi, yakıt ikmali ve kapıda kalma gibi acil durumlarda anında destek.",
    icon: "battery",
    metaTitle: "Çorum Yol Yardım | 7/24 Akü, Lastik, Yakıt Desteği",
    metaDescription:
      "Çorum'da 7/24 yol yardım: akü takviye, lastik değişimi, yakıt ikmali ve acil destek. Çekiciye gerek kalmadan yolda kaldığınız yerde çözüm. 0541 840 38 95.",
    intro:
      "Her sorun çekici gerektirmez. Aküniz bittiyse, lastiğiniz patladıysa ya da yakıtınız tükendiyse yol yardım ekibimiz olduğunuz yere gelir, aracınızı yeniden yola hazır hale getirir.",
    features: [
      "Akü takviye ve akü değişimi",
      "Lastik değişimi ve stepne montajı",
      "Acil yakıt ikmali",
      "Kapıda/kontakta kalan anahtar desteği yönlendirmesi",
      "Yol kenarı hızlı müdahale",
    ],
    content: [
      "Soğuk kış sabahlarında akü sorunu, uzun yolda lastik patlağı ya da farkında olmadan biten yakıt... Bu durumlarda aracınızı çektirmenize gerek kalmadan, olduğunuz yerde çözüm sunuyoruz.",
      "Yol yardım ekibimiz akü takviye kabloları, kriko, stepne ekipmanı ve yedek yakıt ile donatılmıştır. Kısa sürede yanınıza gelip aracınızı tekrar çalışır hale getiririz.",
      "Sorun yerinde çözülemeyecek kadar büyükse, aynı ekip çekici hizmetine anında geçiş yapar; ikinci bir firma aramanıza gerek kalmaz.",
      "Yol yardım ekibimiz Çorum merkez ve tüm ilçelerde görevli olduğu için, hangi bölgede olursanız olun size en yakın ekibi yönlendiririz. Gece-gündüz, hafta sonu fark etmeksizin ulaşabilirsiniz.",
    ],
    faq: [
      {
        q: "Akü takviyesi için de çekici mi göndermem gerekiyor?",
        a: "Hayır. Yol yardım ekibimiz akü takviye, lastik ve yakıt ikmali gibi işlemleri olduğunuz yerde yapar; çekiciye gerek kalmaz.",
      },
      {
        q: "Yol yardım hizmeti gece de çalışıyor mu?",
        a: "Evet, 7/24 kesintisiz hizmet veriyoruz. Gece yarısı bile aynı hızda ulaşırız.",
      },
    ],
  },
  {
    slug: "kaza-agir-tonaj-kurtarma",
    title: "Kaza & Ağır Tonaj Kurtarma",
    short:
      "Kaza yapan araçlar, devrilen ve şarampole inen araçlar ile kamyon/tır için ağır tonaj kurtarma.",
    icon: "shield",
    metaTitle: "Çorum Kaza Kurtarma & Ağır Tonaj Çekici",
    metaDescription:
      "Çorum'da kaza kurtarma ve ağır tonaj çekici hizmeti. Devrilen, şarampole inen araçlar, kamyon ve tır kurtarma. Vinçli ekipman ile 7/24: 0541 840 38 95.",
    intro:
      "Kaza sonrası hareket edemeyen, devrilen ya da şarampole inen araçlar ile kamyon, tır ve iş makineleri için özel ekipmanlı ağır tonaj kurtarma hizmeti veriyoruz.",
    features: [
      "Kaza yapmış araçların güvenli kurtarılması",
      "Devrilen ve şarampole inen araç kurtarma",
      "Kamyon, tır ve otobüs için ağır tonaj çekici",
      "Vinçli ve palet destekli kurtarma",
      "Trafik güvenliği önlemleriyle çalışma",
    ],
    content: [
      "Ağır tonajlı araçların ve kaza yapmış otomobillerin kurtarılması uzmanlık ve doğru ekipman gerektirir. Yanlış müdahale hem aracınıza hem de çevreye zarar verebilir. Deneyimli ekibimiz kurtarma operasyonunu güvenle yönetir.",
      "Devrilen, bariyere çarpan ya da şarampole inen araçları vinçli sistemlerle güvenle çıkarır, gerekli trafik güvenliği önlemlerini alarak çalışırız.",
      "Karayolu ve otoyol üzerindeki kazalarda hızlı müdahale ekibimizle 7/24 yanınızdayız. Ağır tonaj kurtarma için özel donanımlı araçlarımız hazır bekler.",
      "Kaza tespit tutanağı ve sigorta süreciniz devam ederken aracınızı güvenli bir alanda muhafaza etmemiz gerekirse, yediemin otoparkımızda kayıt altında bekletiriz — ikinci bir yer aramanıza gerek kalmaz.",
    ],
    faq: [
      {
        q: "Devrilen bir aracı nasıl kurtarıyorsunuz?",
        a: "Vinçli kurtarma ekipmanı ve trafik güvenliği önlemleriyle, aracı zemine veya çevreye zarar vermeden dik konuma getirip güvenle çekiyoruz.",
      },
      {
        q: "Kamyon veya tır için de hizmet veriyor musunuz?",
        a: "Evet, ağır tonaj kurtarma ekipmanımızla kamyon, tır ve iş makineleri için de kurtarma hizmeti sunuyoruz.",
      },
    ],
  },
  {
    slug: "oto-kurtarici",
    title: "Oto Kurtarıcı",
    short:
      "Arıza, kaza ve her türlü acil durumda Çorum'un her noktasına ulaşan profesyonel oto kurtarıcı hizmeti.",
    icon: "truck",
    metaTitle: "Çorum Oto Kurtarıcı | 7/24 Araç Kurtarma Hizmeti",
    metaDescription:
      "Çorum oto kurtarıcı hizmeti: 7/24 araç kurtarma, arıza ve kaza kurtarma. Kayar kasa çekici ile en yakın kurtarıcı dakikalar içinde. Arayın: 0541 840 38 95.",
    intro:
      "Çorum oto kurtarıcı ekibimiz, aracınız yolda kaldığında ya da kaza yaptığında en kısa sürede yanınıza ulaşır ve aracınızı güvenle taşır. Şehir merkezinden otoyola kadar her noktadayız.",
    features: [
      "7/24 kesintisiz oto kurtarıcı hizmeti",
      "Kayar kasa (sıfır zeminli) modern kurtarıcı",
      "Arıza, kaza ve lastik kurtarma",
      "Otomobil, ticari araç ve motosiklet",
      "Şehir içi ve şehirlerarası kurtarma",
    ],
    content: [
      "Oto kurtarıcı, aracınızın kendi gücüyle hareket edemediği durumlarda devreye giren en pratik çözümdür. Çorum'da 7/24 hizmet veren kurtarıcı ekibimiz, çağrınızı aldığı an yola çıkar ve aracınızı zarar vermeden yükler.",
      "Modern kayar kasa kurtarıcılarımız düşük araçları, spor ve elektrikli araçları zemine sürtmeden taşır. Kaza yapmış ya da tekerleği dönmeyen araçlar için de özel ekipmanımız mevcuttur.",
      "En yakın kurtarıcıyı yönlendirdiğimiz için bekleme süreniz minimumdur. Telefonda net fiyat verir, sürpriz ücret çıkarmayız.",
      "Çorum merkez, sanayi bölgesi ve otoyol güzergâhlarında konumlu ekiplerimiz sayesinde, gün içinde nerede olursanız olun size en yakın kurtarıcıyı hızla yönlendiririz.",
      "Aracınızı kurtardıktan sonra süreç bitmiyor: talebinize göre en yakın oto tamirciye, markanızın yetkili oto servisine ya da doğrudan evinize/iş yerinize taşıyoruz. Hangi oto servisi tercih edeceğinizi bilmiyorsanız bölgedeki güvenilir seçenekler konusunda da yardımcı oluruz.",
    ],
    faq: [
      {
        q: "Oto kurtarıcı ile çekici arasında fark var mı?",
        a: "Aynı hizmeti kastediyoruz; oto kurtarıcı, aracınızı arıza veya kaza sonrası güvenle taşıyan çekici aracı ve ekibimizi ifade eder.",
      },
      {
        q: "Kurtardığınız aracı oto tamirciye veya servise götürüyor musunuz?",
        a: "Evet. Aracınızı kurtardıktan sonra tercih ettiğiniz oto tamirciye, yetkili oto servise veya istediğiniz adrese güvenle taşırız.",
      },
      {
        q: "Aracım çalışmıyor, yine de yükleyebilir misiniz?",
        a: "Evet. Kayar kasa kurtarıcılarımızla çalışmayan, hareket etmeyen araçları da vinç yardımıyla güvenle yükleriz.",
      },
    ],
  },
  {
    slug: "aku-takviye",
    title: "Akü Takviye",
    short:
      "Aküniz bittiğinde olduğunuz yere gelir, takviye yapar veya akü değişimiyle aracınızı yeniden çalıştırırız.",
    icon: "battery",
    metaTitle: "Çorum Akü Takviye | 7/24 Yerinde Akü Yol Yardım",
    metaDescription:
      "Çorum'da akü takviye ve akü değişimi. Aküniz bittiyse olduğunuz yere gelir, aracınızı çalıştırırız. 7/24 yerinde yol yardım: 0541 840 38 95.",
    intro:
      "Özellikle soğuk kış sabahlarında akü bitmesi en sık yaşanan sorunlardan biridir. Çorum akü takviye ekibimiz olduğunuz yere gelir, aracınızı dakikalar içinde çalıştırır.",
    features: [
      "Yerinde akü takviye (çalıştırma)",
      "Akü değişimi ve yeni akü temini",
      "Soğuk hava / kış şartlarında hızlı müdahale",
      "Otomobil ve ticari araçlar",
      "Çekiciye gerek kalmadan yerinde çözüm",
    ],
    content: [
      "Aracınız marş yapmıyor, farlar sönük yanıyorsa büyük ihtimalle akü sorunu yaşıyorsunuz. Akü takviye ekibimiz profesyonel takviye ekipmanıyla gelir, aracınızı güvenle çalıştırır.",
      "Aküniz tamamen ömrünü tamamladıysa, yerinde akü değişimi hizmetimizle yeni akü temin edip montajını yaparız; ikinci bir yere gitmenize gerek kalmaz.",
      "Akü takviye, çekiciden çok daha hızlı ve ekonomik bir çözümdür. Sorun yerinde çözülemezse aynı ekip anında çekici hizmetine geçer.",
      "Özellikle kış aylarında sabah saatlerinde akü şikayetleri artar; bu dönemde ekip sayımızı artırarak bekleme sürelerini minimumda tutuyoruz.",
    ],
    faq: [
      {
        q: "Akü takviyesi kaç dakika sürer?",
        a: "Ekip olay yerine ulaştıktan sonra takviye işlemi genellikle 5-10 dakika içinde tamamlanır.",
      },
      {
        q: "Yeni akü de temin ediyor musunuz?",
        a: "Evet, aküniz tamamen bitmişse yerinde uygun akü temin edip montajını yapabiliriz.",
      },
    ],
  },
  {
    slug: "lastik-degisimi",
    title: "Lastik Değişimi & Yol Yardım",
    short:
      "Lastiğiniz patladıysa, stepne montajı veya yerinde lastik değişimiyle yolunuza kaldığınız yerden devam edin.",
    icon: "wrench",
    metaTitle: "Çorum Lastik Değişimi | Yolda Lastik Yol Yardım 7/24",
    metaDescription:
      "Çorum'da yolda lastik değişimi ve stepne montajı. Lastiğiniz patladıysa olduğunuz yere gelir, hızlıca çözeriz. 7/24 yol yardım: 0541 840 38 95.",
    intro:
      "Uzun yolda ya da şehir içinde lastik patlağı can sıkıcıdır. Çorum lastik yol yardım ekibimiz olduğunuz yere gelir, stepnenizi takar veya lastik değişimini yerinde yapar.",
    features: [
      "Yolda stepne montajı",
      "Yerinde lastik değişimi",
      "Kriko ve profesyonel ekipman",
      "Şehir içi ve otoyol desteği",
      "Stepne yoksa çekici ile en yakın lastikçiye",
    ],
    content: [
      "Lastik patlaması sürüş güvenliğini tehlikeye atar; lastikle yola devam etmek jant ve araca zarar verir. Ekibimiz kriko ve gerekli ekipmanla gelir, stepnenizi güvenle takar.",
      "Stepneniz yoksa veya birden fazla lastik hasar gördüyse, aracınızı en yakın lastikçiye ya da servise güvenle taşırız.",
      "Otoyol ve karayolu üzerindeki lastik arızalarında trafik güvenliği önlemleriyle hızlıca müdahale ederiz.",
      "Aracınızda uygun ölçüde stepne bulunmuyorsa, sizi güvenle en yakın lastikçiye ya da anlaşmalı servise yönlendirir, gerekirse çekici desteğiyle taşırız.",
    ],
    faq: [
      {
        q: "Stepnem yoksa ne yapıyorsunuz?",
        a: "Stepneniz yoksa aracınızı en yakın lastikçiye ya da istediğiniz servise güvenle taşırız.",
      },
      {
        q: "Gece lastik patlağında hizmet alabilir miyim?",
        a: "Evet, 7/24 hizmet veriyoruz; gece dahil her saat ulaşabilirsiniz.",
      },
    ],
  },
  {
    slug: "yakit-ikmali",
    title: "Yakıt İkmali",
    short:
      "Yakıtınız yolda bittiyse, olduğunuz yere yakıt getirir; yolunuza devam etmenizi sağlarız.",
    icon: "fuel",
    metaTitle: "Çorum Yakıt İkmali | Yolda Yakıt Bitince Yol Yardım",
    metaDescription:
      "Çorum'da yolda yakıt ikmali hizmeti. Benzin veya motorin bittiyse olduğunuz yere getirir, yolunuza devam ettiririz. 7/24: 0541 840 38 95.",
    intro:
      "Yakıtın yolda bitmesi herkesin başına gelebilir. Çorum yakıt ikmali hizmetimizle, bulunduğunuz yere yakıt getirir ve en yakın istasyona ulaşmanızı sağlarız.",
    features: [
      "Yerinde acil yakıt ikmali",
      "Benzin ve motorin desteği",
      "Şehir içi ve otoyol",
      "Hızlı ve güvenli teslim",
      "7/24 ulaşılabilir",
    ],
    content: [
      "Gösterge sıfırı gösterdi ve en yakın istasyona ulaşamadınız mı? Yakıt ikmali ekibimiz, ihtiyacınız kadar yakıtı olduğunuz yere getirir.",
      "Aracınızı iterek ya da riskli şekilde ilerletmeye çalışmayın; güvenli noktada bekleyin, yakıtınızı biz getirelim.",
      "İhtiyaç halinde aynı ekip diğer yol yardım hizmetlerini (akü, lastik, çekici) de sunabilir.",
      "Şehir içinde ve otoyol üzerinde, hangi noktada olursanız olun ihtiyacınız kadar yakıtı güvenli şekilde ulaştırırız; siz sadece güvenli bir yerde bekleyin yeter.",
    ],
    faq: [
      {
        q: "Hangi yakıt türlerini getiriyorsunuz?",
        a: "Benzin ve motorin (dizel) ikmali yapıyoruz. Aracınızın yakıt türünü belirtmeniz yeterli.",
      },
      {
        q: "Yakıt ikmali ücrete dahil mi, yakıt ayrı mı ödeniyor?",
        a: "Hizmet ücretine ek olarak, getirilen yakıtın bedeli ayrıca ödenir. Telefonda size net bilgi veririz.",
      },
    ],
  },
  {
    slug: "motosiklet-cekici",
    title: "Motosiklet Çekici",
    short:
      "Motosikletiniz için özel ekipmanla güvenli, çizik ve hasar riski olmadan çekici ve taşıma hizmeti.",
    icon: "motorcycle",
    metaTitle: "Çorum Motosiklet Çekici | Güvenli Motor Taşıma",
    metaDescription:
      "Çorum motosiklet çekici hizmeti. Motorunuz için özel ekipmanla güvenli, hasarsız çekici ve şehirlerarası taşıma. 7/24: 0541 840 38 95.",
    intro:
      "Motosikletler taşınırken özel ekipman ve dikkat gerektirir. Çorum motosiklet çekici hizmetimizle motorunuzu çizik ve hasar riski olmadan güvenle taşırız.",
    features: [
      "Motosiklete özel sabitleme ekipmanı",
      "Çizik ve hasar riski olmadan taşıma",
      "Arıza ve kaza sonrası kurtarma",
      "Şehir içi ve şehirlerarası motor taşıma",
      "7/24 hizmet",
    ],
    content: [
      "Motosikletinizin devrilme veya çizilme riski olmadan taşınması için özel sabitleme sistemleri kullanırız. Sport, touring, cross ve scooter dahil her tip motora uygun ekipmanımız vardır.",
      "Arıza yapan ya da kaza geçiren motosikletinizi güvenle yükler, istediğiniz servise veya adrese taşırız.",
      "Şehirlerarası motor taşımalarında motosikletinizi sabitleyerek uzun yolu güvenle tamamlarız.",
      "İkinci el motosiklet aldığınızda ya da bakım/servis için motorunuzu taşıtmanız gerektiğinde de aynı özenli hizmeti sunuyoruz — sürüş güvenliğinden değil, taşıma güvenliğinden ödün vermeyiz.",
    ],
    faq: [
      {
        q: "Her marka ve model motosiklet için hizmet veriyor musunuz?",
        a: "Evet, sport, touring, cross, scooter ve ağır motosikletler dahil tüm tiplere uygun sabitleme ekipmanımız var.",
      },
      {
        q: "Motosiklet taşırken çizik/hasar riski var mı?",
        a: "Özel sabitleme sistemleri ve dikkatli yükleme sayesinde çizik ve hasar riski en aza indirilir.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

// Ana sayfada öne çıkan ilk 6 hizmet (silo sayfaları alt hizmetlerdir).
export const FEATURED_SERVICES = SERVICES.slice(0, 6);
