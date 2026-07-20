import { useReveal } from "../hooks/useReveal";
import "./WhyUs.css";

const points = [
  {
    title: "Donuk ürün odaklı",
    text: "−18 °C rejimde çalışan araçlar ve sıcaklık disiplinli yükleme. Ürününüz yolda çözülmez.",
  },
  {
    title: "81 il lojistik ağı",
    text: "İstanbul merkezli planlama ile Türkiye geneline şehirler arası frigolu sevkiyat.",
  },
  {
    title: "Yükünüze göre araç",
    text: "Panelvan, kamyonet, kamyon veya TIR — fazla kapasiteye para ödemezsiniz.",
  },
  {
    title: "Hızlı teklif, net süreç",
    text: "WhatsApp’tan dakika içinde teklif. Tarih, güzergâh ve sıcaklık netleşir, araç yola çıkar.",
  },
];

export function WhyUs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="neden" className="section why reveal" ref={ref}>
      <div className="container">
        <span className="section-label">Neden FrigoGo</span>
        <h2 className="section-title">Müşteri kazanan soğuk zincir.</h2>
        <p className="section-lead">
          Sadece taşımak değil; ürününüzü donuk ve zamanında teslim etmek.
        </p>

        <ul className="why__list">
          {points.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
