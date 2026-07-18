import { useReveal } from "../hooks/useReveal";
import "./Gallery.css";

const shots = [
  {
    src: "/images/frigo-van-4.png",
    alt: "Frigolu panelvan tarzı ticari araç — örnek görsel",
    caption: "Dikkatli yükleme",
  },
  {
    src: "/images/frigo-van-4.png",
    alt: "Frigolu panelvan tarzı ticari araç — örnek görsel",
    caption: "Dikkatli yükleme",
  },
  {
    src: "/images/frigo-van-4.png",
    alt: "Frigolu panelvan tarzı ticari araç — örnek görsel",
    caption: "Dikkatli yükleme",
  },
  {
    src: "/images/frigo-van-4.png",
    alt: "Frigolu panelvan tarzı ticari araç — örnek görsel",
    caption: "Dikkatli yükleme",
  },
  {
    src: "/images/frigo-van-1.png",
    alt: "Yükleme sırasında soğuk ürünler — örnek taşıma",
    caption: "Frigolu panelvan",
  },
  {
    src: "/images/frigo-van-2.png",
    alt: "Soğuk zincir gıda sevkiyatı — örnek görsel",
    caption: "",
  },
  {
    src: "/images/frigo-van-3.png",
    alt: "Nakliye aracı yolda — şehirler arası örnek",
    caption: "",
  },
];

export function Gallery() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="galeri" className="section gallery reveal" ref={ref}>
      <div className="container">
        <div>
          <span className="section-label">Araçlar & taşıma</span>
          <h2 className="section-title">Frigo araçlarımız, sahadaki işimiz.</h2>
          <p className="section-lead">
            Soğutuculu vanlarla örnek taşıma anları. Kendi araç fotoğraflarınızı buraya kolayca ekleyebilirsiniz.
          </p>
        </div>

        <div className="gallery__grid">
          {shots.map((shot) => (
            <figure key={shot.caption} className="gallery__item">
              <img src={shot.src} alt={shot.alt} width={900} height={600} loading="lazy" />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
