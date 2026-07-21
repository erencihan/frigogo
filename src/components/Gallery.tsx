import { useReveal } from "../hooks/useReveal";
import "./Gallery.css";

const shots = [
  {
    src: "/images/frigo-example1.png",
    alt: "Donuk ürün yükleme örneği",
    caption: "Donuk yükleme",
  },
  {
    src: "/images/frigo-example2.png",
    alt: "Frigolu araç yolda",
    caption: "Yolda soğuk zincir",
  },
  {
    src: "/images/frigo-example4.png",
    alt: "Depo sevkiyatı",
    caption: "Depo teslim",
  },
  {
    src: "/images/frigo-example3.png",
    alt: "Panelvan frigo araç",
    caption: "Panelvan frigo",
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
            <figure key={shot.caption} className="gallery__item">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
