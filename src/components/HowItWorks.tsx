import { useReveal } from "../hooks/useReveal";
import "./HowItWorks.css";

const steps = [
  {
    n: "01",
    title: "Teklif al",
    text: "Kalkış, varış ili, ürün tipi ve araç boyunu yazın. WhatsApp’tan hızlı dönüş.",
  },
  {
    n: "02",
    title: "Araç & rejim",
    text: "Panelvan’dan TIR’a uygun frigolu aracı ve −18 °C / soğuk rejimini netleştiririz.",
  },
  {
    n: "03",
    title: "81 ile teslim",
    text: "Yükünüz soğuk zincirde kalır; planlanan ile ve adrese zamanında ulaşır.",
  },
];

export function HowItWorks() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="nasil" className="section how reveal" ref={ref}>
      <div className="container">
        <span className="section-label">Süreç</span>
        <h2 className="section-title">Üç adımda donuk sevkiyat.</h2>
        <p className="section-lead">Karmaşık prosedür yok. Teklif, plan, teslim.</p>

        <ol className="how__steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span className="how__n" aria-hidden="true">
                {step.n}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
