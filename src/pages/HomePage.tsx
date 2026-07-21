import { useMemo } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Coverage } from "../components/Coverage";
import { Fleet } from "../components/Fleet";
import { WhyUs } from "../components/WhyUs";
import { Gallery } from "../components/Gallery";
import { Blog } from "../components/Blog";
import { HowItWorks } from "../components/HowItWorks";
import { QuoteForm } from "../components/QuoteForm";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { usePageSeo } from "../hooks/usePageSeo";
import { siteConfig } from "../siteConfig";
import { blogPosts } from "../data/blogPosts";

export function HomePage() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: siteConfig.brand,
          description: siteConfig.tagline,
          url: "https://frigogo.com/",
          telephone: siteConfig.phoneDisplay,
          email: siteConfig.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "İstanbul",
            addressCountry: "TR",
          },
          areaServed: "TR",
        },
        {
          "@type": "ItemList",
          itemListElement: blogPosts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://frigogo.com/blog/${post.slug}`,
            name: post.title,
          })),
        },
      ],
    }),
    [],
  );

  usePageSeo({
    title: "FrigoGo — 81 İle Donuk Ürün ve Frigolu Nakliye",
    description:
      "FrigoGo ile Türkiye'nin 81 iline donuk ürün nakliyesi. Frigolu panelvan, kamyonet, kamyon ve TIR. Soğuk zincir taşımacılığı ve anında teklif.",
    keywords:
      "donuk ürün nakliye, frigorifik taşımacılık, soğuk zincir, 81 il frigo, frigolu panelvan, İstanbul frigo nakliye",
    canonicalPath: "/",
    jsonLd,
  });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Coverage />
        <Fleet />
        <WhyUs />
        <Gallery />
        <Blog />
        <HowItWorks />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
