import { siteConfig } from "../siteConfig";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">{siteConfig.brand}</p>
        <p className="footer__copy">
          © {year} {siteConfig.brand}. {siteConfig.tagline}
        </p>
      </div>
    </footer>
  );
}
