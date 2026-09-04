import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { company, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Bohschulte Gebäudereinigung in Saarlouis. Ansprechpartner: Benni Osso.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={
          <>
            Ein Ansprechpartner
            <br />
            <span className="italic text-forest-600">für alles.</span>
          </>
        }
        intro="Ob Erstanfrage, laufender Vertrag, Notfall oder Sonderauftrag — die gesamte Auftragsabwicklung liegt in einer Hand. So bleiben Absprachen und Termine verbindlich."
      />

      <section className="bg-bone-50 pb-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-10">
            <div className="glass rounded-[24px] p-8 md:p-10">
              <p className="eyebrow">Zentraler Kontakt</p>
              <p className="mt-5 font-display font-light text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-slate-950">
                Benni Osso
              </p>
              <p className="mt-1 text-[13.5px] uppercase tracking-[0.18em] text-forest-500">
                Prokurist · Auftragsbearbeitung
              </p>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-slate-700">
                Für Angebote, Terminierung, EDV, Finanzbuchhaltung und
                allgemeine Rückfragen. Rückmeldung innerhalb eines Werktages.
              </p>
              <div className="mt-8 hairline" />
              <div className="mt-8 grid grid-cols-1 gap-4 text-[15.5px] sm:grid-cols-2">
                <div>
                  <p className="eyebrow">Telefon</p>
                  <a
                    href={company.phoneHref}
                    className="mt-2 block font-display text-[26px] leading-tight text-slate-950 hover:text-forest-600 transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="eyebrow">E-Mail</p>
                  <a
                    href={`mailto:${company.emailPrimary}`}
                    className="mt-2 block font-display text-[22px] leading-tight text-slate-950 hover:text-forest-600 transition-colors break-all"
                  >
                    {company.emailPrimary}
                  </a>
                </div>
              </div>
            </div>

            <aside className="rounded-[24px] bg-slate-950 p-8 text-bone-50 md:p-10">
              <p className="eyebrow" style={{ color: "rgba(251,248,243,0.65)" }}>
                Anschrift
              </p>
              <p className="mt-5 font-display text-[24px] leading-tight">
                {company.legalForm}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-bone-100/85">
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </p>
              <div className="mt-8 hairline opacity-30" />
              <p
                className="mt-6 eyebrow"
                style={{ color: "rgba(251,248,243,0.65)" }}
              >
                Geschäftsführung
              </p>
              <p className="mt-4 font-display text-[22px] leading-tight">
                {company.ceo}
              </p>
              <a
                href={`mailto:${company.emailCeo}`}
                className="mt-2 block text-[14.5px] text-bone-100/80 hover:text-forest-300 transition-colors break-all"
              >
                {company.emailCeo}
              </a>
            </aside>
          </div>

          <div className="mt-20">
            <p className="eyebrow">Weitere Ansprechpersonen</p>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team
                .filter((m) => m.name !== "Benni Osso")
                .map((m) => (
                  <li
                    key={m.name}
                    className="rounded-[20px] border border-slate-900/10 bg-bone-50 p-6"
                  >
                    <p className="font-display text-[22px] leading-tight text-slate-950">
                      {m.name}
                    </p>
                    <p className="mt-1 text-[12.5px] uppercase tracking-[0.16em] text-slate-600">
                      {m.role}
                    </p>
                    {m.email && (
                      <a
                        href={`mailto:${m.email}`}
                        className="mt-4 block text-[14px] text-slate-800 hover:text-forest-600 transition-colors break-all"
                      >
                        {m.email}
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          <div className="mt-24 rounded-[24px] bg-bone-100 p-8 md:p-12">
            <p className="eyebrow">Schnelle Anfrage</p>
            <h2 className="mt-5 max-w-3xl font-display font-light text-[clamp(1.6rem,3.5vw,2.6rem)] leading-tight tracking-brand-tight text-slate-950">
              Beschreiben Sie uns kurz das Objekt und die Aufgabe — wir kommen
              mit einer belastbaren Einschätzung zurück.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${company.emailPrimary}`}
      method="post"
      encType="text/plain"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <Input label="Ansprechpartner" name="name" required />
      <Input label="Unternehmen" name="firma" />
      <Input label="E-Mail" name="email" type="email" required />
      <Input label="Telefon" name="telefon" type="tel" />
      <Input label="Objektart" name="objektart" placeholder="Filiale, Bürogebäude, Fassade …" wide />
      <div className="md:col-span-2">
        <label className="eyebrow block">Kurze Aufgabenbeschreibung</label>
        <textarea
          name="nachricht"
          rows={5}
          required
          className="mt-3 w-full rounded-[14px] border border-slate-900/10 bg-bone-50 px-4 py-3 text-[15px] leading-relaxed text-slate-950 outline-none transition-colors focus:border-forest-500"
        />
      </div>
      <div className="md:col-span-2 flex items-center justify-between gap-6">
        <p className="text-[12px] text-slate-600">
          Mit dem Absenden bestätigen Sie, dass wir Ihre Angaben zur
          Bearbeitung Ihrer Anfrage verwenden dürfen.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-[14px] font-medium text-bone-50 transition-transform duration-300 hover:-translate-y-[1px] hover:bg-forest-700"
        >
          Anfrage senden
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
  placeholder,
  wide,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "md:col-span-2" : ""}>
      <label className="eyebrow block">
        {label}
        {required && <span aria-hidden className="text-forest-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-[14px] border border-slate-900/10 bg-bone-50 px-4 py-3 text-[15px] text-slate-950 outline-none transition-colors focus:border-forest-500"
      />
    </div>
  );
}
