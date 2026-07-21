import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">{siteConfig.brand}</p>
        <p className="footer__copy">
          © {year} {siteConfig.brand}. {siteConfig.tagline}{" "}
          <Link to="/#blog">Blog</Link>
        </p>
      </div>
    </footer>
  );
}
