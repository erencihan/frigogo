export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  excerpt: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "soguk-zincir-tasimaciliginda-dikkat-edilmesi-gerekenler",
    title: "Soğuk Zincir Taşımacılığında Dikkat Edilmesi Gerekenler",
    description:
      "Soğuk zincir taşımacılığında sıcaklık kontrolü, araç seçimi, yükleme ve teslimat süreçlerinde dikkat edilmesi gerekenler. FrigoGo rehberi.",
    keywords:
      "soğuk zincir taşımacılığı, frigolu nakliye, soğuk zincir kuralları, sıcaklık kontrollü taşıma, İstanbul frigo nakliye",
    datePublished: "2026-07-20",
    dateModified: "2026-07-22",
    readingMinutes: 7,
    excerpt:
      "Donuk ve soğuk ürünlerin kalitesi yolda belirlenir. Sıcaklık disiplini, doğru araç ve planlı sevkiyat ile soğuk zinciri koparmadan taşıyın.",
    sections: [
      {
        heading: "Soğuk zincir nedir ve neden kritiktir?",
        paragraphs: [
          "Soğuk zincir, ürünün üretim veya depolama noktasından teslimata kadar belirli bir sıcaklık aralığında tutulmasını sağlayan kesintisiz lojistik sürecidir. Gıda, ilaç, dondurma ve dondurulmuş et gibi ürünlerde zincirin bir an bile bozulması bozulma, kalite kaybı ve ekonomik zarara yol açabilir.",
          "Türkiye genelinde 81 ile yapılan şehirler arası frigolu nakliyede mesafe uzadıkça risk artar. Bu yüzden doğru araç, doğru rejim ve disiplinli operasyon bir arada olmalıdır.",
        ],
      },
      {
        heading: "Taşıma öncesi kontrol listesi",
        paragraphs: [
          "Sevkiyat başlamadan önce ürün tipi, hedef sıcaklık, hacim ve varış ili netleştirilmelidir. Eksik bilgi, yanlış araç tahsisine ve yolda derece sapmasına neden olur.",
        ],
        bullets: [
          "Ürün cinsini ve hedef sıcaklığı (ör. −18 °C donuk, 0/+4 °C soğuk) yazılı netleştirin",
          "Palet / m³ / kg bilgisini vererek uygun araç boyunu seçin",
          "Yükleme ve boşaltma adreslerinde soğuk oda veya hızlı aktarım imkânını kontrol edin",
          "Araç ön soğutmasının (pre-cooling) yapıldığından emin olun",
          "Sevkiyat tarihini ve varış ili planını peşin kilitleyin",
        ],
      },
      {
        heading: "Yükleme ve boşaltmada en sık yapılan hatalar",
        paragraphs: [
          "Soğuk zincirin en zayıf halkası çoğu zaman yükleme rampasıdır. Kapıların uzun süre açık kalması, sıcak ortamda bekleyen ürün ve yetersiz istif düzeni dereceyi hızla yükseltir.",
          "İstif yaparken hava sirkülasyonunu engellemeyin. Ürünü evaporatör önünü kapatacak şekilde yığmak soğutma performansını düşürür. Kapı açılış sürelerini kısaltın; mümkünse hızlı transfer planlayın.",
        ],
      },
      {
        heading: "Şehirler arası frigolu nakliyede planlama",
        paragraphs: [
          "İstanbul çıkışlı uzun mesafe sevkiyatlarda güzergâh, mola ve teslim saati önceden planlanmalıdır. Donuk ürünlerde gereksiz beklemeler riski artırır.",
          "FrigoGo olarak panelvan’dan TIR’a kadar frigolu filomuzla yükünüze uygun aracı seçiyor, −18 °C odaklı donuk sevkiyatlarda soğuk zinciri koruyarak 81 ile teslimatı hedefliyoruz.",
        ],
      },
      {
        heading: "Kısaca: soğuk zinciri koparmamak için",
        paragraphs: [
          "Doğru sıcaklık rejimi, ön soğutulmuş frigorifik araç, hızlı yükleme-boşaltma ve net güzergâh planı soğuk zincir taşımacılığının temelidir. Şüphede kaldığınızda ürünü “ortalama araçla” göndermek yerine frigolu ve ölçülü kapasiteli bir çözüm tercih edin.",
        ],
      },
    ],
  },
  {
    slug: "donuk-urunlerde-derece-dusme-riski-ve-onlenmesi",
    title: "Donuk Ürünlerde Derece Düşme Riski ve Önlenmesi",
    description:
      "Donuk ürünlerde sıcaklık yükselmesi (derece kaybı) neden olur, nasıl önlenir? −18 °C soğuk zincir için pratik önlemler ve frigolu nakliye ipuçları.",
    keywords:
      "donuk ürün taşıma, −18 derece nakliye, derece düşme riski, dondurulmuş gıda lojistik, soğuk zincir bozulması",
    datePublished: "2026-07-20",
    dateModified: "2026-07-22",
    readingMinutes: 6,
    excerpt:
      "Donuk ürünlerde asıl tehlike çoğu zaman “aşırı soğuma” değil, yolda sıcaklığın yükselmesidir. Derece kaybını nasıl önlersiniz?",
    sections: [
      {
        heading: "“Derece düşme” ne anlama gelir?",
        paragraphs: [
          "Sektörde sıkça kullanılan “derece düşme” ifadesi, pratikte ürünün hedef soğukluğunu kaybetmesi — yani sıcaklığın yükselmesi — anlamında da kullanılır. Donuk rejimde hedef genelde −18 °C civarıdır. Ürün −12 °C’ye, −10 °C’ye doğru çıkarsa kalite ve gıda güvenliği riski artar.",
          "Kristal yapı bozulması, su salınımı, doku kaybı ve raf ömrü kısalması; kısa süreli sıcaklık sapmalarında bile görülebilir. Bu yüzden donuk sevkiyatlarda süre ve sıcaklık disiplini birlikte yönetilmelidir.",
        ],
      },
      {
        heading: "Derece kaybına yol açan başlıca nedenler",
        paragraphs: [
          "Risklerin çoğu önlenebilir operasyon hatalarından kaynaklanır. Araç soğutması çalışıyor olsa bile kapı yönetimi ve istif hataları ürün ısısını yükseltebilir.",
        ],
        bullets: [
          "Araçın yüklemeden önce yeterince ön soğutulmaması",
          "Rampada uzun süre açık kalan frigo kapıları",
          "Sıcak depodan doğrudan yüklenen ısınmış ürün",
          "Hava akışını bozan sıkışık veya yanlış istif",
          "Arızalı soğutma ünitesi veya yanlış sıcaklık ayarı",
          "Gereksiz beklemeler ve plansız teslimat pencereleri",
        ],
      },
      {
        heading: "Önleme: sahada işe yarayan adımlar",
        paragraphs: [
          "Ürünü soğuk oda çıkış sıcaklığında yükleyin. Frigorifik aracı hedef rejime getirip sonra yüklemeye başlayın. Kapı açık kaldığı her dakika riski büyütür; bu yüzden yükleme ekibini ve sırayı önceden organize edin.",
          "Şehirler arası hatlarda mümkünse doğrudan teslim planlayın. Ara aktarmalar çoğaldıkça kapı açılışı ve bekleme artar. Hassas ürünlerde tek araç – tek güzergâh yaklaşımı daha güvenlidir.",
        ],
      },
      {
        heading: "Hangi sıcaklık rejimi hangi ürün için?",
        paragraphs: [
          "Dondurulmuş et, deniz ürünü, dondurma ve benzeri ürünlerde −18 °C standart kabul edilir. Taze et, süt ürünü ve bazı ilaçlarda 0/+4 °C soğuk rejim kullanılır. Yanlış rejim seçmek, “frigo araç” kullanılmış olsa bile kaliteyi bozar.",
          "FrigoGo teklif sürecinde ürün tipi ve hedef sıcaklığı peşinen sorar; donuk sevkiyatlarda −18 °C odaklı planlama yaparız. 81 il kapsama ile şehirler arası donuk nakliyede derece disiplinini korumayı hedefleriz.",
        ],
      },
      {
        heading: "Sonuç",
        paragraphs: [
          "Donuk ürünlerde derece kaybını önlemek; doğru rejim, ön soğutma, hızlı kapı yönetimi ve uygun frigorifik araç seçiminden geçer. Küçük bir sevkiyatta panelvan, büyük hacimde kamyon veya TIR — önemli olan soğuk zincirin kopmamasıdır.",
        ],
      },
    ],
  },
  {
    slug: "frigorifik-arac-turleri-ve-hacim-rehberi",
    title: "Frigorifik Araç Türleri ve Hacim Rehberi",
    description:
      "Frigorifik (frigolu) araç türleri: panelvan, kamyonet, kamyon ve TIR. Hacim, palet ve hangi yük için hangi araç gerekir? Pratik rehber.",
    keywords:
      "frigorifik araç, frigolu araç türleri, panelvan frigo, frigo kamyon, frigo TIR hacim, soğutmalı nakliye araç seçimi",
    datePublished: "2026-07-20",
    dateModified: "2026-07-22",
    readingMinutes: 8,
    excerpt:
      "Panelvan’dan TIR’a frigolu araç seçimi: hacim, palet ve ürün tipine göre doğru frigorifik aracı nasıl seçersiniz?",
    sections: [
      {
        heading: "Frigorifik araç nedir?",
        paragraphs: [
          "Frigorifik (halk arasında frigolu) araçlar; ısı yalıtımlı kasa ve soğutma ünitesiyle ürünü belirli sıcaklıkta taşıyan ticari araçlardır. Donuk (−18 °C) veya soğuk (0/+4 °C) rejimde çalışabilirler. “Frigofirik” diye yazılan aramalar da genellikle frigorifik araçları kasteder.",
          "Doğru araç seçimi maliyeti düşürür ve soğuk zinciri korur. Gereğinden büyük araç gereksiz maliyet; küçük araç ise istif baskısı ve hava sirkülasyonu sorunları yaratabilir.",
        ],
      },
      {
        heading: "1) Frigolu panelvan / Doblo sınıfı",
        paragraphs: [
          "Küçük hacimli, şehir içi ve yakın mesafe sevkiyatlar için idealdir. Tipik olarak yaklaşık 1–4 m³ aralığında düşünülür. Market, restoran, küçük parti donuk ürün ve acil tamamlayıcı sevkiyatlarda sık tercih edilir.",
          "Avantajı manevra kabiliyeti ve hızdır. Dezavantajı sınırlı hacimdir; yüksek palet sayısında yetersiz kalır.",
        ],
      },
      {
        heading: "2) Frigolu kamyonet",
        paragraphs: [
          "Orta hacim için denge sunar. Yaklaşık 5–12 m³ bandında, bölgesel dağıtım ve orta ölçekli donuk sevkiyatlarda kullanılır. Şehirler arası kısa-orta mesafelerde de verimlidir.",
          "Paletli yüklerde panelvana göre daha rahat istif imkânı sağlar; TIR kadar büyük hacim gerektirmeyen işletmeler için ekonomik seçenektir.",
        ],
      },
      {
        heading: "3) Frigolu kamyon",
        paragraphs: [
          "Daha yüksek hacimli depo–depo taşımalarında öne çıkar. Kabaca 15–30 m³ bandı ve şehirler arası donuk ürün hatlarında sık görülür. −18 °C odaklı sevkiyatlarda güçlü soğuk zincir sunar.",
          "Toptan gıda, zincir market besleme ve üretim tesisi çıkışlı düzenli sevkiyatlarda tercih edilir.",
        ],
      },
      {
        heading: "4) Frigolu TIR (komple)",
        paragraphs: [
          "Yüksek hacimli, komple yük (FTL) senaryolarında kullanılır. Yaklaşık 33 palet kapasitesine kadar çıkabilen frigorifik TIR’lar, Türkiye geneli 81 il sevkiyatlarında büyük hacimli donuk ürünler için uygundur.",
          "Parsiyel ihtiyacınız varsa komple TIR yerine daha küçük frigolu araç veya planlı parsiyel çözüm değerlendirilmelidir.",
        ],
      },
      {
        heading: "Hızlı seçim tablosu",
        paragraphs: ["Pratik karar için şu çerçeveyi kullanabilirsiniz:"],
        bullets: [
          "1–4 m³ / az palet / şehir içi → Frigolu panelvan–Doblo",
          "5–12 m³ / orta parti / bölgesel → Frigolu kamyonet",
          "15–30 m³ / depo hattı / şehirler arası → Frigolu kamyon",
          "Yüksek palet / komple yük / 81 il → Frigolu TIR",
        ],
      },
      {
        heading: "FrigoGo ile araç seçimi",
        paragraphs: [
          "Emin değilseniz ürün tipi, varış ili ve yaklaşık hacmi yazmanız yeterlidir. FrigoGo, yükünüze göre frigolu panelvan, kamyonet, kamyon veya TIR önerir; donuk rejimde soğuk zinciri koruyarak tekliflendirir.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
