import { useState, type ChangeEvent, type FormEvent } from "react";
import { siteConfig, whatsappUrl } from "../siteConfig";
import { useReveal } from "../hooks/useReveal";
import "./QuoteForm.css";

type FormState = {
  name: string;
  phone: string;
  from: string;
  to: string;
  cargo: string;
  temperature: string;
  date: string;
  note: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  from: "",
  to: "",
  cargo: "",
  temperature: "",
  date: "",
  note: "",
};

function buildMessage(data: FormState): string {
  const lines = [
    `Merhaba ${siteConfig.brand}, fiyat teklifi istiyorum.`,
    `Ad: ${data.name}`,
    `Tel: ${data.phone}`,
    `Kalkış: ${data.from} → Varış: ${data.to}`,
    `Yük: ${data.cargo}`,
  ];

  if (data.temperature) lines.push(`Sıcaklık: ${data.temperature}`);
  if (data.date) lines.push(`Tarih: ${data.date}`);
  if (data.note.trim()) lines.push(`Not: ${data.note.trim()}`);

  return lines.join("\n");
}

export function QuoteForm() {
  const ref = useReveal<HTMLElement>();
  const [form, setForm] = useState<FormState>(initial);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = whatsappUrl(buildMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="teklif" className="section quote reveal" ref={ref}>
      <div className="container quote__layout">
        <div className="quote__intro">
          <span className="section-label">Fiyat teklifi</span>
          <h2 className="section-title">Yükünüz için hemen fiyat alın.</h2>
          <p className="section-lead">
            Formu gönderince WhatsApp’ta hazır bir mesaj açılır. Dakikalar içinde dönüş yaparız.
          </p>
        </div>

        <form className="quote__form" onSubmit={onSubmit} noValidate>
          <div className="quote__row">
            <label>
              Ad soyad
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                placeholder="Adınız"
              />
            </label>
            <label>
              Telefon
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="05XX XXX XX XX"
              />
            </label>
          </div>

          <div className="quote__row">
            <label>
              Kalkış
              <input
                name="from"
                type="text"
                required
                value={form.from}
                onChange={onChange}
                placeholder="Örn. İstanbul / Kadıköy"
              />
            </label>
            <label>
              Varış
              <input
                name="to"
                type="text"
                required
                value={form.to}
                onChange={onChange}
                placeholder="Örn. Ankara / Çankaya"
              />
            </label>
          </div>

          <div className="quote__row">
            <label>
              Ürün / yük tipi
              <input
                name="cargo"
                type="text"
                required
                value={form.cargo}
                onChange={onChange}
                placeholder="Örn. süt ürünü, dondurulmuş et"
              />
            </label>
            <label>
              Sıcaklık (opsiyonel)
              <select name="temperature" value={form.temperature} onChange={onChange}>
                <option value="">Belirtmek istemiyorum</option>
                <option value="+2 / +8 °C (taze)">+2 / +8 °C (taze)</option>
                <option value="0 / +4 °C (soğuk)">0 / +4 °C (soğuk)</option>
                <option value="-18 °C (donuk)">−18 °C (donuk)</option>
                <option value="Diğer">Diğer</option>
              </select>
            </label>
          </div>

          <label>
            Taşıma tarihi (opsiyonel)
            <input name="date" type="date" value={form.date} onChange={onChange} />
          </label>

          <label>
            Not (opsiyonel)
            <textarea
              name="note"
              rows={3}
              value={form.note}
              onChange={onChange}
              placeholder="Palet sayısı, hacim veya özel talebiniz..."
            />
          </label>

          <button type="submit" className="btn btn-dark quote__submit">
            WhatsApp ile teklif iste
          </button>
        </form>
      </div>
    </section>
  );
}
