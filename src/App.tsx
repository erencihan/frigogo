import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
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
        <Services />
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
