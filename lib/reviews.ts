// Örnek/temsili yorumlar. Gerçek Google yorumları geldikçe güncellenecek.
export type Review = { name: string; text: string; place: string };

export const REVIEWS: Review[] = [
  {
    name: "Murat K.",
    place: "Çorum Merkez",
    text: "Gece yarısı akım bitti, 20 dakika içinde geldiler. Çok ilgili ve hızlıydılar. Fiyat da telefonda söyledikleri gibiydi, sürpriz yok.",
  },
  {
    name: "Elif Ş.",
    place: "Sungurlu",
    text: "Ankara yolunda arıza yaptık, panikledik. Aradık, kısa sürede ulaştılar ve aracı Çorum'a güvenle taşıdılar. Teşekkürler.",
  },
  {
    name: "Hasan Y.",
    place: "Osmancık",
    text: "Kaza sonrası aracı çektirmek için aradım. Çok profesyonel çalıştılar, araca ekstra zarar vermeden yüklediler. Tavsiye ederim.",
  },
  {
    name: "Ayşe D.",
    place: "Çorum Merkez",
    text: "Lastik patladı, stepnem de yoktu. Yol yardım ekibi geldi, hallettiler. 7/24 ulaşılabilir olmaları çok rahatlatıcı.",
  },
  {
    name: "Serkan B.",
    place: "Alaca",
    text: "İkinci el aldığım aracı başka şehirden getirttim. Sigortalı ve zamanında teslim. İletişimleri çok iyiydi.",
  },
  {
    name: "Fatma T.",
    place: "İskilip",
    text: "Kış günü yolda kaldık, kar vardı. Yine de söz verdikleri sürede geldiler. Güler yüzlü ve güvenilir ekip.",
  },
];
