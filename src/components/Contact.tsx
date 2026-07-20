import { siteConfig, whatsappUrl } from "../siteConfig";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="iletisim" className="section contact reveal" ref={ref}>
      <div className="container">
        <span className="section-label">Bize ulaşın</span>
        <h2 className="section-title">Donuk sevkiyat için yazın.</h2>
        <p className="section-lead">
          81 ile teklif, acil sevkiyat veya filo sorusu — hemen dönüş.
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
              href={whatsappUrl("Merhaba FrigoGo, donuk ürün nakliyesi için yazıyorum.")}
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
