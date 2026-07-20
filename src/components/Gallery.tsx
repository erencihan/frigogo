import { useReveal } from "../hooks/useReveal";
import "./Gallery.css";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1578574577315-2f83b998d65b?auto=format&fit=crop&w=1100&q=80",
    alt: "Donuk ürün yükleme örneği",
    caption: "Donuk yükleme",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    alt: "Frigolu araç yolda",
    caption: "Yolda soğuk zincir",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1580674285054-bed31e145f91?auto=format&fit=crop&w=800&q=80",
    alt: "Depo sevkiyatı",
    caption: "Depo teslim",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1100&q=80",
    alt: "Panelvan frigo araç",
    caption: "Panelvan frigo",
    wide: true,
  },
];

export function Gallery() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="galeri" className="section gallery reveal" ref={ref}>
      <div className="container">
        <div className="gallery__head">
          <span className="section-label">Sahada</span>
          <h2 className="section-title">Taşıma anları, gerçek iş.</h2>
          <p className="section-lead">
            Frigolu araçlar ve donuk sevkiyat örnekleri. Kendi filo fotoğraflarınızı kolayca
            ekleyebilirsiniz.
          </p>
        </div>

        <div className="gallery__grid">
          {shots.map((shot) => (
            <figure
              key={shot.caption}
              className={`gallery__item ${shot.wide ? "gallery__item--wide" : ""}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                width={shot.wide ? 1100 : 800}
                height={shot.wide ? 700 : 900}
                loading="lazy"
              />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
