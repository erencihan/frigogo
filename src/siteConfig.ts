export const siteConfig = {
  brand: "FrigoGo",
  tagline: "Soğuk zincir, hızlı yol.",
  phoneDisplay: "+90 530 997 99 38",
  phoneHref: "tel:+905309979938",
  email: "info@frigogo.com",
  whatsapp: "905309979938",
  address: "İstanbul, Türkiye",
};

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
