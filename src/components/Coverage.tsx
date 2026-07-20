import { provincesSample } from "../siteConfig";
import { useReveal } from "../hooks/useReveal";
import "./Coverage.css";

export function Coverage() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="kapsama" className="section coverage reveal" ref={ref}>
      <div className="container">
        <div className="coverage__head">
          <span className="section-label">Ulusal kapsama</span>
          <h2 className="section-title">Türkiye’nin 81 ili. Tek soğuk zincir.</h2>
          <p className="section-lead">
            Donuk gıda, dondurulmuş et, ice cream, ilaç ve sıcaklık hassas ürünlerinizi
            Edirne’den Hakkâri’ye frigolu araçlarla ulaştırıyoruz.
          </p>
        </div>

        <div className="coverage__hero-num" aria-hidden="true">
          <span>81</span>
          <em>il</em>
        </div>

        <p className="coverage__note">
          İstanbul çıkışlı düzenli hatlar · Şehir içi + şehirler arası · −18 °C donuk rejim
        </p>

        <div className="coverage__marquee" aria-label="Örnek varış illeri">
          <div className="coverage__track">
            {[...provincesSample, ...provincesSample].map((city, i) => (
              <span key={`${city}-${i}`}>{city}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
