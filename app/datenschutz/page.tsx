import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutz" />
      <section className="bg-bone-50 pb-24">
        <div className="mx-auto max-w-[820px] px-5 sm:px-8">
          <article className="space-y-10 text-[15.5px] leading-relaxed text-slate-800">
            <div>
              <h2 className="eyebrow">Verantwortlicher</h2>
              <p className="mt-4">
                {company.legalForm}
                <br />
                {company.address.street}, {company.address.zip} {company.address.city}
                <br />
                Telefon: {company.phone}
                <br />
                E-Mail: {company.emailPrimary}
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Datenschutzbeauftragte</h2>
              <p className="mt-4">
                Sabrina Altmeyer, erreichbar über die oben genannten
                Kontaktdaten mit dem Zusatz „z. H. Datenschutzbeauftragte“.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="mt-4">
                Beim Besuch dieser Website werden automatisch Informationen
                allgemeiner Natur erfasst (IP-Adresse, Datum, Uhrzeit,
                Browsertyp). Diese Daten lassen keine Rückschlüsse auf Ihre
                Person zu und sind für die technische Bereitstellung der Website
                erforderlich. Eine Auswertung findet nicht statt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Anfragen per Kontaktformular oder E-Mail</h2>
              <p className="mt-4">
                Wenn Sie uns per Formular oder per E-Mail kontaktieren, werden
                Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1 lit. b
                DSGVO). Wir geben diese Daten nicht weiter.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Speicherdauer</h2>
              <p className="mt-4">
                Personenbezogene Daten werden gelöscht, sobald der Zweck der
                Verarbeitung entfällt. Gesetzliche Aufbewahrungsfristen
                (insbesondere handels- und steuerrechtlich) bleiben unberührt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Ihre Rechte</h2>
              <p className="mt-4">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung, Datenübertragbarkeit und Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich
                dafür an die oben genannte Adresse. Ferner haben Sie das Recht,
                sich bei der zuständigen Aufsichtsbehörde zu beschweren.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Cookies</h2>
              <p className="mt-4">
                Diese Website verwendet ausschließlich technisch erforderliche
                Cookies. Es findet kein Tracking und keine Analyse Ihres
                Nutzungsverhaltens statt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Externe Bilder</h2>
              <p className="mt-4">
                Bilder in Vorschauzuständen dieser Website können von externen
                Bilddiensten geladen werden. Beim Laden kann die IP-Adresse an
                den jeweiligen Anbieter übermittelt werden. Nach Übernahme
                eigener Bilder entfällt diese Einbindung.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
