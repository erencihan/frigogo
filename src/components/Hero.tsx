import { siteConfig, whatsappUrl } from "../siteConfig";
import "./Hero.css";

export function Hero() {
  return (
    <section id="ust" className="hero" aria-label="FrigoGo tanıtım">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/Hero.png"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="hero__shade" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand">{siteConfig.brand}</p>
        <h1 className="hero__title">Yükünüz soğuk kalsın, siz rahat edin.</h1>
        <p className="hero__lead">
          İstanbul içi ve şehirler arası frigolu panelvan ile güvenli nakliye.
        </p>
        <div className="hero__actions">
          <a href="#teklif" className="btn btn-primary">
            Teklif al
          </a>
          <a
            href={whatsappUrl("Merhaba FrigoGo, soğutmalı nakliye hakkında bilgi almak istiyorum.")}
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
