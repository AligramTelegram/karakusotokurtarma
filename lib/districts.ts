// Çorum ilçeleri — her biri özgün metinli yerel SEO sayfası.
// Rakiplerin en büyük zaafı: tüm ilçe sayfalarında aynı (duplicate) metin.
// Bizde her ilçe kendi mesafesi, güzergâhı ve senaryosuyla özgün.

export type District = {
  slug: string;
  name: string;
  distanceKm: number; // Çorum merkeze uzaklık
  intro: string;
  detail: string;
  roads: string;
};

export const DISTRICTS: District[] = [
  {
    slug: "sungurlu",
    name: "Sungurlu",
    distanceKm: 72,
    intro:
      "Sungurlu, Çorum'un batısında Ankara yolu üzerinde yer alan en büyük ilçelerimizden biridir. D200 karayolu üzerindeki yoğun trafik nedeniyle en sık çekici çağrısı alınan bölgelerden.",
    detail:
      "Sungurlu ve çevresinde, özellikle Ankara-Samsun D200 karayolu üzerinde arıza ve kaza durumlarında hızlı ulaşım sağlıyoruz. İlçe merkezi, sanayi bölgesi ve köy yollarında 7/24 oto kurtarma ve yol yardım hizmeti veriyoruz.",
    roads: "D200 (Ankara-Samsun) karayolu, Sungurlu sanayi ve merkez",
  },
  {
    slug: "osmancik",
    name: "Osmancık",
    distanceKm: 59,
    intro:
      "Osmancık, Çorum'un kuzeyinde Samsun yolu üzerinde, Kızılırmak kıyısında kurulu ilçemizdir. D100 karayolu trafiği nedeniyle çekici hizmetine sık ihtiyaç duyulur.",
    detail:
      "Osmancık merkez, Koyunbaba köprüsü çevresi ve D100 karayolu üzerinde 7/24 çekici ve kurtarma hizmeti sunuyoruz. Samsun istikametine giden ağır vasıta trafiğinde ağır tonaj kurtarma taleplerine de yanıt veriyoruz.",
    roads: "D100 (Samsun-Ankara) karayolu, Osmancık merkez ve köprü çevresi",
  },
  {
    slug: "iskilip",
    name: "İskilip",
    distanceKm: 56,
    intro:
      "İskilip, Çorum'un kuzeybatısında tarihi dokusuyla bilinen ilçemizdir. Dağlık ve virajlı yol yapısı nedeniyle özellikle kış aylarında yol yardım talepleri artar.",
    detail:
      "İskilip merkez ve bağlı köylerde, engebeli ve virajlı yollarda deneyimli ekibimizle güvenli çekim yapıyoruz. Kış şartlarında yolda kalan araçlara akü, lastik ve çekici desteği veriyoruz.",
    roads: "İskilip-Çorum yolu, ilçe merkezi ve dağ yolları",
  },
  {
    slug: "alaca",
    name: "Alaca",
    distanceKm: 51,
    intro:
      "Alaca, Çorum'un güneyinde Yozgat'a komşu, tarım ve ticaretin yoğun olduğu ilçemizdir. İlçeler arası bağlantı yollarında sık çekici ihtiyacı doğar.",
    detail:
      "Alaca merkez, sanayi sitesi ve Yozgat bağlantı yollarında 7/24 oto kurtarma hizmeti veriyoruz. Tarım araçları ve ticari vasıtalar için de uygun ekipmanla hızlı müdahale ediyoruz.",
    roads: "Alaca-Çorum ve Alaca-Yozgat yolları, ilçe merkezi",
  },
  {
    slug: "bayat",
    name: "Bayat",
    distanceKm: 84,
    intro:
      "Bayat, Çorum'un kuzeybatı ucunda yer alan ilçemizdir. Merkeze uzaklığı nedeniyle güvenilir ve zamanında ulaşan bir çekici hizmeti önem taşır.",
    detail:
      "Bayat ilçe merkezi ve bağlı yerleşimlerde, uzak mesafeye rağmen planlı ve hızlı çekici hizmeti sunuyoruz. Arıza ve kaza durumlarında bölgeye en kısa sürede ulaşan ekiple yanınızdayız.",
    roads: "Bayat-İskilip ve Bayat-Çorum bağlantı yolları",
  },
  {
    slug: "kargi",
    name: "Kargı",
    distanceKm: 98,
    intro:
      "Kargı, Çorum'un en kuzeyinde, Samsun-Ankara D100 karayolu üzerinde orman ve dağ yollarıyla çevrili ilçemizdir. Uzun yol trafiğinde çekici talebi yüksektir.",
    detail:
      "Kargı ve çevresinde, D100 karayolu üzerindeki uzun mesafe trafiğinde arıza ve kaza kurtarma hizmeti veriyoruz. Dağlık ve ormanlık yol koşullarına uygun ekipmanla güvenli çekim yapıyoruz.",
    roads: "D100 (Samsun-Ankara) karayolu, Kargı merkez ve dağ yolları",
  },
  {
    slug: "mecitozu",
    name: "Mecitözü",
    distanceKm: 37,
    intro:
      "Mecitözü, Çorum'un doğusunda Amasya yolu üzerinde yer alan ilçemizdir. Merkeze yakınlığı sayesinde çok hızlı çekici desteği sağlanır.",
    detail:
      "Mecitözü merkez ve Amasya bağlantı yolunda kısa sürede olay yerinde oluyoruz. Şehir içi ve şehirlerarası çekim ile yol yardım hizmetlerimiz 7/24 aktiftir.",
    roads: "Çorum-Amasya karayolu, Mecitözü merkez",
  },
  {
    slug: "ortakoy",
    name: "Ortaköy",
    distanceKm: 55,
    intro:
      "Ortaköy, Çorum'un güneydoğusunda Amasya ve Yozgat'a komşu ilçemizdir. Bağlantı yollarında ve köy yollarında çekici ihtiyacı doğar.",
    detail:
      "Ortaköy merkez ve çevre köylerde 7/24 oto kurtarma ve yol yardım hizmeti sunuyoruz. Uzak köy yollarında bile aracınıza güvenle ulaşır, en yakın servise taşırız.",
    roads: "Ortaköy-Çorum ve Ortaköy-Amasya yolları",
  },
  {
    slug: "oguzlar",
    name: "Oğuzlar",
    distanceKm: 62,
    intro:
      "Oğuzlar, Çorum'un kuzeyinde Obruk Barajı çevresinde yer alan ilçemizdir. Baraj ve göl çevresi yollarında yol yardım talepleri görülür.",
    detail:
      "Oğuzlar merkez ve baraj çevresi yollarında oto kurtarma hizmeti veriyoruz. Arıza, lastik ve akü sorunlarında ilçeye hızlı ulaşan ekibimizle destek sağlıyoruz.",
    roads: "Oğuzlar-Çorum yolu, Obruk Barajı çevresi",
  },
  {
    slug: "lacin",
    name: "Laçin",
    distanceKm: 34,
    intro:
      "Laçin, Çorum'un kuzeyinde merkeze yakın konumdaki ilçemizdir. Yakınlığı sayesinde en hızlı müdahale edilen bölgelerdendir.",
    detail:
      "Laçin merkez ve bağlı köylerde çok kısa sürede olay yerinde oluyoruz. Şehir içi çekim hızıyla ilçeye ulaşır, aracınızı güvenle taşırız.",
    roads: "Laçin-Çorum yolu, ilçe merkezi",
  },
  {
    slug: "dodurga",
    name: "Dodurga",
    distanceKm: 47,
    intro:
      "Dodurga, Çorum'un kuzeyinde Osmancık'a komşu, madencilik faaliyetleriyle bilinen ilçemizdir. Ağır vasıta trafiğinde kurtarma ihtiyacı doğar.",
    detail:
      "Dodurga merkez ve maden bölgesi yollarında ağır tonaj kurtarma ve oto çekici hizmeti veriyoruz. Ticari araç ve iş makineleri için uygun ekipmanla hizmetinizdeyiz.",
    roads: "Dodurga-Osmancık ve Dodurga-Çorum yolları",
  },
  {
    slug: "bogazkale",
    name: "Boğazkale",
    distanceKm: 87,
    intro:
      "Boğazkale, Çorum'un güneyinde Hattuşa antik kenti ile ünlü, turizm hareketliliği olan ilçemizdir. Ziyaretçi trafiğinde çekici talebi görülür.",
    detail:
      "Boğazkale merkez ve Hattuşa çevresi yollarında oto kurtarma ve yol yardım hizmeti sunuyoruz. Turistik bölge trafiğinde arıza ve lastik desteğiyle 7/24 yanınızdayız.",
    roads: "Boğazkale-Sungurlu ve Boğazkale-Çorum yolları",
  },
  {
    slug: "ugurludag",
    name: "Uğurludağ",
    distanceKm: 68,
    intro:
      "Uğurludağ, Çorum'un batısında, tarım ağırlıklı bir ilçemizdir. Kırsal yol ağında güvenilir çekici hizmeti önem taşır.",
    detail:
      "Uğurludağ merkez ve köy yollarında 7/24 oto kurtarma hizmeti veriyoruz. Tarımsal araçlar dahil geniş araç yelpazesine uygun ekipmanla hizmet sunuyoruz.",
    roads: "Uğurludağ-Sungurlu ve Uğurludağ-Çorum yolları",
  },
];

export const getDistrict = (slug: string) =>
  DISTRICTS.find((d) => d.slug === slug);
