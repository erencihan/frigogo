import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Coverage } from "./components/Coverage";
import { Fleet } from "./components/Fleet";
import { WhyUs } from "./components/WhyUs";
import { Gallery } from "./components/Gallery";
import { HowItWorks } from "./components/HowItWorks";
import { QuoteForm } from "./components/QuoteForm";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Coverage />
        <Fleet />
        <WhyUs />
        <Gallery />
        <HowItWorks />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
