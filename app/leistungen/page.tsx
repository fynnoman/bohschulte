import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactCTA from "@/components/home/ContactCTA";
import { services, brands } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unterhalts-, Glas-, Fassaden-, Grund- und Sonderreinigung im Saarland. Vollsortiment für Banken, Kommunen, Einzelhandel und Industrie.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        title={
          <>
            Zehn Gewerke.
            <br />
            <span className="italic text-forest-600">Eine Handschrift.</span>
          </>
        }
        intro="Ein Familienbetrieb bringt in dritter Generation ein Vollsortiment aus Reinigung, Pflege und Sonderleistungen — abgestimmt, dokumentiert, mit festen Objektteams. Alles, was in einem Gebäude gesehen wird, aus einer Hand."
      />

      <section className="bg-bone-50 pb-8">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <ul className="flex flex-wrap gap-2 border-t border-slate-900/10 pt-8">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 px-4 py-2 text-[13px] text-slate-800 transition-colors hover:border-slate-900/40 hover:bg-slate-950 hover:text-bone-50"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bone-50 pb-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-32 gap-10 border-t border-slate-900/10 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16 md:py-24"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-[22px] ring-1 ring-slate-950/10 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <PlaceholderImage
                  src={s.image}
                  alt={s.title}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  quality={74}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">
                  Nr. {String(i + 1).padStart(2, "0")} · {s.tagline}
                </p>
                <h2 className="mt-5 font-display font-light text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-brand-tight text-slate-950">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-slate-700">
                  {s.body}
                </p>
                <ul className="mt-8 space-y-3">
                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[14.5px] text-slate-800"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-6 bg-forest-500"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#EFF3EC] py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div>
              <p className="eyebrow">Ergänzend</p>
              <h2 className="mt-5 font-display font-light text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-brand-tight text-slate-950">
                Reinigungsbedarf
                <br />
                <span className="italic text-forest-600">vor Ort.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-slate-700">
                In Saarlouis verkaufen wir am Tresen — für Hausmeister,
                Reinigungskräfte, kleine Betriebe. Alles, was wir selbst
                einsetzen.
              </p>
            </div>
            <div>
              <p className="eyebrow">Marken</p>
              <p className="mt-4 font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-tight tracking-brand-tight text-slate-950">
                {brands.map((b, i) => (
                  <span key={b}>
                    {b}
                    {i < brands.length - 1 && (
                      <span className="mx-3 text-forest-500">·</span>
                    )}
                  </span>
                ))}
              </p>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-slate-700">
                Einwascher, Wischer, Teleskopstangen, Glasreiniger,
                Mikrofasertücher, Reinigungschemie. Persönliche Beratung während
                der Geschäftszeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
