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
  vehicle: string;
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
  vehicle: "",
  temperature: "−18 °C (donuk)",
  date: "",
  note: "",
};

function buildMessage(data: FormState): string {
  const lines = [
    `Merhaba ${siteConfig.brand}, 81 il donuk nakliye teklifi istiyorum.`,
    `Ad: ${data.name}`,
    `Tel: ${data.phone}`,
    `Kalkış: ${data.from} → Varış: ${data.to}`,
    `Yük: ${data.cargo}`,
  ];

  if (data.vehicle) lines.push(`Araç: ${data.vehicle}`);
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
    window.open(whatsappUrl(buildMessage(form)), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="teklif" className="section quote reveal" ref={ref}>
      <div className="container quote__layout">
        <div className="quote__intro">
          <span className="section-label">Fiyat teklifi</span>
          <h2 className="section-title">Donuk yükünüz için fiyat alın.</h2>
          <p className="section-lead">
            Formu gönderince WhatsApp’ta hazır mesaj açılır. İl, araç ve sıcaklık bilginizle
            dakikalar içinde dönüş yaparız.
          </p>
        </div>

        <form className="quote__form" onSubmit={onSubmit}>
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
              Kalkış ili / ilçe
              <input
                name="from"
                type="text"
                required
                value={form.from}
                onChange={onChange}
                placeholder="Örn. İstanbul"
              />
            </label>
            <label>
              Varış ili / ilçe
              <input
                name="to"
                type="text"
                required
                value={form.to}
                onChange={onChange}
                placeholder="Örn. Van, Antalya, Samsun..."
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
                placeholder="Örn. dondurulmuş et, dondurma, ilaç"
              />
            </label>
            <label>
              Araç boyu
              <select name="vehicle" value={form.vehicle} onChange={onChange} required>
                <option value="" disabled>
                  Seçin
                </option>
                <option value="Frigolu Panelvan / Doblo">Frigolu Panelvan / Doblo</option>
                <option value="Frigolu Kamyonet">Frigolu Kamyonet</option>
                <option value="Frigolu Kamyon">Frigolu Kamyon</option>
                <option value="Frigolu TIR">Frigolu TIR</option>
                <option value="Emin değilim — siz önerin">Emin değilim — siz önerin</option>
              </select>
            </label>
          </div>

          <div className="quote__row">
            <label>
              Sıcaklık rejimi
              <select name="temperature" value={form.temperature} onChange={onChange}>
                <option value="−18 °C (donuk)">−18 °C (donuk)</option>
                <option value="0 / +4 °C (soğuk)">0 / +4 °C (soğuk)</option>
                <option value="+2 / +8 °C (taze)">+2 / +8 °C (taze)</option>
                <option value="Diğer / netleştirelim">Diğer / netleştirelim</option>
              </select>
            </label>
            <label>
              Taşıma tarihi
              <input name="date" type="date" value={form.date} onChange={onChange} />
            </label>
          </div>

          <label>
            Not (palet, kg, özel talep)
            <textarea
              name="note"
              rows={3}
              value={form.note}
              onChange={onChange}
              placeholder="Palet sayısı, hacim veya teslim saati..."
            />
          </label>

          <button type="submit" className="btn quote__submit">
            WhatsApp ile teklif iste
          </button>
        </form>
      </div>
    </section>
  );
}
