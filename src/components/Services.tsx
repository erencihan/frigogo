import { useReveal } from "../hooks/useReveal";
import "./Services.css";

const services = [
  {
    title: "İstanbul içi frigo",
    text: "Şehir içinde tazeliği kaçırmayan hızlı sevkiyat. Market, restoran ve depolara soğuk zincir ile.",
  },
  {
    title: "Şehirler arası nakliye",
    text: "İstanbul çıkışlı güzergâhlarda frigolu panelvan. Gıda, ilaç ve sıcaklık hassas ürünler için.",
  },
  {
    title: "Panelvan & Doblo frigo",
    text: "Soğutuculu doblo ve panelvan filomuzla küçük-orta yüklerde çevik, kontrollü taşıma.",
  },
];

export function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="hizmetler" className="section services reveal" ref={ref}>
      <div className="container">
        <span className="section-label">Hizmetler</span>
        <h2 className="section-title">Soğuk kalsın, zamanında varsın.</h2>
        <p className="section-lead">
          Gıda, ilaç, çiçek ve dondurulmuş ürünlerinizi sıcaklık kontrollü araçlarla güvenle taşıyoruz.
        </p>

        <ul className="services__list">
          {services.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
