import Link from "next/link";
import Wordmark from "./Wordmark";
import { company, brands } from "@/lib/data";

const cols = [
  {
    title: "Leistungen",
    links: [
      { href: "/leistungen#unterhaltsreinigung", label: "Unterhaltsreinigung" },
      {
        href: "/leistungen#glas-und-fensterreinigung",
        label: "Glas & Fenster",
      },
      { href: "/leistungen#fassaden-und-markisenreinigung", label: "Fassade" },
      { href: "/leistungen#photovoltaik", label: "Photovoltaik" },
      { href: "/leistungen#graffitischutz", label: "Graffitischutz" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { href: "/historie", label: "Historie" },
      { href: "/referenzen", label: "Referenzen" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/barrierefreiheit", label: "Barrierefreiheit" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-bone-50">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-grain" />
      <div className="relative mx-auto max-w-[1240px] px-6 pt-20 pb-10 sm:pt-24 sm:pb-12 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark variant="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-bone-100/70">
              Familiengeführte Gebäudereinigung im Saarland. Drei Generationen, ein Handwerk — verlässlich, dokumentiert, mit langfristigen Verträgen bei Banken, Kommunen und Industrie.
            </p>
            <div className="mt-8 space-y-1.5 text-[14.5px]">
              <p className="text-bone-100/90">{company.address.street}</p>
              <p className="text-bone-100/90">
                {company.address.zip} {company.address.city}
              </p>
              <a
                href={company.phoneHref}
                className="mt-3 block text-bone-50 hover:text-forest-300 transition-colors"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.emailPrimary}`}
                className="block text-bone-50 hover:text-forest-300 transition-colors"
              >
                {company.emailPrimary}
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="eyebrow" style={{ color: "rgba(251,248,243,0.6)" }}>
                {col.title}
              </p>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[14.5px] text-bone-100/80 hover:text-bone-50 transition-colors"
                    >
                      <span>{l.label}</span>
                      <span
                        aria-hidden
                        className="inline-block translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 hairline opacity-40" />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[12.5px] tracking-[0.14em] uppercase text-bone-100/50">
            Wir arbeiten mit {brands.join(" · ")}
          </p>
          <p className="text-[12.5px] text-bone-100/50">
            © {new Date().getFullYear()} {company.legalForm}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
