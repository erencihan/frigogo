import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../siteConfig";
import "./Header.css";

const homeLinks = [
  { href: "/#kapsama", label: "81 il" },
  { href: "/#filo", label: "Filo" },
  { href: "/#blog", label: "Blog" },
  { href: "/#galeri", label: "Taşıma" },
  { href: "/#teklif", label: "Teklif" },
  { href: "/#iletisim", label: "İletişim" },
];

type HeaderProps = {
  variant?: "auto" | "solid";
};

export function Header({ variant = "auto" }: HeaderProps) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(variant === "solid");
  const [open, setOpen] = useState(false);
  const solid = variant === "solid" || scrolled;

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant, location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${solid ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label={`${siteConfig.brand} ana sayfa`}>
          {siteConfig.brand}
        </Link>

        <nav className="header__nav" aria-label="Ana menü">
          {homeLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/#teklif" className="btn btn-primary header__cta">
          Teklif al
        </Link>

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
          {homeLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
