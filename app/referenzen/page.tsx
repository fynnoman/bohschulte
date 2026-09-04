import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ClientsWall from "@/components/home/ClientsWall";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Banken, Kommunen, Einzelhandel und Industrie im Saarland — eine Auswahl unserer langjährigen Auftraggeber.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzen"
        title={
          <>
            Auftraggeber mit
            <br />
            <span className="italic text-forest-600">Qualitätsanspruch.</span>
          </>
        }
        intro="Wir arbeiten vorwiegend für Auftraggeber, für die Sauberkeit ein sichtbarer Teil ihrer Marke ist — Banken, Kommunen, gehobener Einzelhandel und Industrie mit repräsentativen Verwaltungen. Viele der hier genannten Beziehungen bestehen seit über einem Jahrzehnt."
      />
      <ClientsWall />
      <ContactCTA />
    </>
  );
}
