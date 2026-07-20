import { siteConfig, whatsappUrl } from "../siteConfig";
import "./Hero.css";

export function Hero() {
  return (
    <section id="ust" className="hero" aria-label="FrigoGo tanıtım">
      <div className="hero__media">
        <img
          src="/images/hero-fleet-road.png"
          alt="Büyükten küçüğe frigolu araçlar yolda yan yana"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand">{siteConfig.brand}</p>
        <h1 className="hero__title">Donuk ürününüz, Türkiye’nin her iline.</h1>
        <p className="hero__lead">
          81 ile frigolu araçlarla kesintisiz soğuk zincir. Panelvan’dan TIR’a — yükünüze göre araç.
        </p>
        <div className="hero__actions">
          <a href="#teklif" className="btn btn-primary">
            Hemen teklif al
          </a>
          <a
            href={whatsappUrl(
              "Merhaba FrigoGo, 81 il donuk ürün nakliyesi için fiyat almak istiyorum.",
            )}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
