import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="bg-bone-50 pb-24">
        <div className="mx-auto max-w-[820px] px-5 sm:px-8">
          <article className="space-y-10 text-[15.5px] leading-relaxed text-slate-800">
            <div>
              <h2 className="eyebrow">Angaben gemäß § 5 TMG</h2>
              <p className="mt-4 font-display text-[22px] leading-tight text-slate-950">
                {company.legalForm}
              </p>
              <p className="mt-2">
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Kontakt</h2>
              <p className="mt-4">
                Telefon: <a href={company.phoneHref} className="underline decoration-forest-500 underline-offset-4">{company.phone}</a><br />
                E-Mail: <a href={`mailto:${company.emailPrimary}`} className="underline decoration-forest-500 underline-offset-4">{company.emailPrimary}</a>
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Vertretungsberechtigter Geschäftsführer</h2>
              <p className="mt-4">{company.ceo}</p>
            </div>

            <div>
              <h2 className="eyebrow">Registereintrag</h2>
              <p className="mt-4">
                Eingetragen im Handelsregister. Registergericht:
                Amtsgericht Saarbrücken.<br />
                Registernummer wird auf Anfrage mitgeteilt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Umsatzsteuer-ID</h2>
              <p className="mt-4">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz wird auf Anfrage mitgeteilt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Aufsichtsbehörde · Kammerzugehörigkeit</h2>
              <p className="mt-4">
                Handwerkskammer des Saarlandes, Saarbrücken.<br />
                Berufsbezeichnung: Gebäudereiniger (verliehen in
                Deutschland).<br />
                Es gelten die berufsrechtlichen Regelungen der
                Handwerksordnung.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Inhaltlich verantwortlich (§ 55 Abs. 2 RStV)</h2>
              <p className="mt-4">
                Bonaventura (Benni) Osso<br />
                Anschrift wie oben
              </p>
            </div>

            <div>
              <h2 className="eyebrow">EU-Streitschlichtung</h2>
              <p className="mt-4">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <br />
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="underline decoration-forest-500 underline-offset-4"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">
                Verbraucher­streit­beilegung
              </h2>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Haftungshinweis</h2>
              <p className="mt-4">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
