import { useEffect, useState } from "react";
import { siteConfig } from "../siteConfig";
import "./Header.css";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#galeri", label: "Araçlar" },
  { href: "#nasil", label: "Nasıl çalışır" },
  { href: "#teklif", label: "Teklif al" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#ust" className="header__brand" aria-label={`${siteConfig.brand} ana sayfa`}>
          {siteConfig.brand}
        </a>

        <nav className="header__nav" aria-label="Ana menü">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#teklif" className="btn btn-primary header__cta">
          Teklif al
        </a>

        <button
          type="button"
          className={`header__burger ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`header__mobile ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobil menü">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
