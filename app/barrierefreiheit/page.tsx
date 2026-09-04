import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Barrierefreiheit",
};

export default function BarrierefreiheitPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Erklärung zur Barrierefreiheit" />
      <section className="bg-bone-50 pb-24">
        <div className="mx-auto max-w-[820px] px-5 sm:px-8">
          <article className="space-y-8 text-[15.5px] leading-relaxed text-slate-800">
            <p>
              Wir bemühen uns, unsere Website im Einklang mit den Vorgaben zur
              Barrierefreiheit im Web zugänglich zu gestalten. Grundlage ist
              der Standard WCAG 2.2 auf Level AA.
            </p>
            <div>
              <h2 className="eyebrow">Stand der Vereinbarkeit</h2>
              <p className="mt-4">
                Diese Website ist teilweise vereinbar mit den genannten
                Anforderungen. Einzelne Bereiche werden schrittweise
                nachgezogen.
              </p>
            </div>
            <div>
              <h2 className="eyebrow">Barrieren melden</h2>
              <p className="mt-4">
                Fällt Ihnen eine nicht barrierefreie Stelle auf, wenden Sie
                sich bitte an <a className="underline decoration-forest-500 underline-offset-4" href={`mailto:${company.emailPrimary}`}>{company.emailPrimary}</a>. Wir prüfen den Hinweis
                und melden uns zeitnah zurück.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
