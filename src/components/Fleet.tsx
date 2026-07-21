import { useReveal } from "../hooks/useReveal";
import "./Fleet.css";

const fleet = [
  {
    name: "Frigolu Panelvan / Doblo",
    size: "Küçük",
    capacity: "1–4 m³ · şehir içi & yakın hat",
    temp: "0 / +4 °C veya −18 °C",
    text: "Market, restoran ve küçük parti donuk sevkiyatlar için çevik çözüm. Dar sokaklara uygun.",
    image:
      "images/frigo-van.png",
    alt: "Küçük ticari panelvan araç",
  },
  {
    name: "Frigolu Kamyonet",
    size: "Orta",
    capacity: "5–12 m³ · bölgesel sevkiyat",
    temp: "Çift rejim opsiyonu",
    text: "Paletli donuk ürün ve orta hacimli yüklerde denge: kapasite + manevra.",
    image:
      "images/frigo-kamyonet.png",
    alt: "Orta boy nakliye kamyoneti",
  },
  {
    name: "Frigolu Kamyon",
    size: "Büyük",
    capacity: "15–30 m³ · şehirler arası",
    temp: "−18 °C donuk odaklı",
    text: "Depo–depo ve toptan donuk ürün taşımalarında güçlü soğuk zincir.",
    image:
      "images/frigo-kamyon.png",
    alt: "Büyük soğutmalı kamyon sevkiyat",
  },
  {
    name: "Frigolu TIR",
    size: "Komple",
    capacity: "33 palet’e kadar · 81 il",
    temp: "FRC / ATP uyumlu rejim",
    text: "Yüksek hacimli donuk sevkiyatlarda Türkiye geneli komple araç tahsisi.",
    image:
      "images/frigo-tir.png",
    alt: "Uzun mesafe soğuk zincir sevkiyat",
  },
];

export function Fleet() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="filo" className="section fleet reveal" ref={ref}>
      <div className="container">
        <div className="fleet__head">
          <span className="section-label">Filo & soğutma</span>
          <h2 className="section-title">Her boy araç. Frigolu seçenek.</h2>
          <p className="section-lead">
            Yük hacminize göre paneldan TIR’a; taze soğuk veya donuk (−18 °C) rejimle taşıyoruz.
          </p>
        </div>

        <div className="fleet__list">
          {fleet.map((item, index) => (
            <article
              key={item.name}
              className={`fleet__item ${index % 2 === 1 ? "fleet__item--reverse" : ""}`}
            >
              <div className="fleet__visual">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={720}
                  loading="lazy"
                />
              </div>
              <div className="fleet__copy">
                <span className="fleet__size">{item.size}</span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <dl>
                  <div>
                    <dt>Kapasite</dt>
                    <dd>{item.capacity}</dd>
                  </div>
                  <div>
                    <dt>Soğutma</dt>
                    <dd>{item.temp}</dd>
                  </div>
                </dl>
                <a href="#teklif" className="fleet__link">
                  Bu araç için teklif →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
