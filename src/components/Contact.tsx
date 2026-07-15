import { siteConfig, whatsappUrl } from "../siteConfig";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="iletisim" className="section contact reveal" ref={ref}>
      <div className="container">
        <span className="section-label">Bize ulaşın</span>
        <h2 className="section-title">Hemen yazın veya arayın.</h2>
        <p className="section-lead">
          Teklif, rezervasyon veya acil sevkiyat için doğrudan iletişime geçin.
        </p>

        <ul className="contact__list">
          <li>
            <span>Telefon</span>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </li>
          <li>
            <span>E-posta</span>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
          <li>
            <span>WhatsApp</span>
            <a
              href={whatsappUrl("Merhaba FrigoGo!")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mesaj gönder
            </a>
          </li>
          <li>
            <span>Adres</span>
            <p>{siteConfig.address}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
