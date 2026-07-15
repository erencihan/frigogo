import { useReveal } from "../hooks/useReveal";
import "./HowItWorks.css";

const steps = [
  {
    n: "01",
    title: "Teklif al",
    text: "Formu doldurun veya WhatsApp’tan yazın. Kalkış, varış ve yük bilginizi alın.",
  },
  {
    n: "02",
    title: "Planla",
    text: "Uygun frigolu aracı ve saati birlikte netleştiririz. Sıcaklık talebiniz kayıt altına alınır.",
  },
  {
    n: "03",
    title: "Taşı",
    text: "Yükünüz soğuk zincirde kalır; planlanan adrese zamanında teslim edilir.",
  },
];

export function HowItWorks() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="nasil" className="section how reveal" ref={ref}>
      <div className="container">
        <span className="section-label">Süreç</span>
        <h2 className="section-title">Üç adımda yükünüzü taşıtırın.</h2>
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
