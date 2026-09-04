import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ScaleToBackground from "@/components/ScaleToBackground";
import ParallaxImage from "@/components/ParallaxImage";
import ContactCTA from "@/components/home/ContactCTA";
import { timeline, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Historie & Team",
  description:
    "Seit 1949 in Saarlouis. Drei Generationen Bohschulte: Hans, Bernd, Andreas. Ein Familienbetrieb mit gewachsenem Team.",
};

export default function HistoriePage() {
  return (
    <>
      <PageHeader
        eyebrow="Historie · seit 1949"
        title={
          <>
            Drei Generationen.
            <br />
            <span className="italic text-forest-600">
              Ein Familienbetrieb.
            </span>
          </>
        }
        intro="Der Betrieb wurde 1949 in Saarlouis von Hans Bohschulte gegründet. Was ihn seit 75 Jahren trägt: ein familiärer Führungsstil, ein gewachsenes Team und die Überzeugung, dass Reinigung ein Handwerk ist — kein Nebengeräusch."
      />

      <section className="bg-bone-50 pb-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <ul className="mt-6">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className="grid grid-cols-[auto_1fr] gap-8 border-t border-slate-900/10 py-10 md:gap-16 md:py-14"
              >
                <div>
                  <p className="tnum font-display font-light text-[54px] leading-none text-slate-950 md:text-[72px]">
                    {t.year}
                  </p>
                </div>
                <div className="max-w-2xl">
                  <h2 className="font-display text-[24px] leading-tight text-slate-950 md:text-[30px]">
                    {t.title}
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-slate-700">
                    {t.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80"
        eyebrow="Saarlouis"
        headline={
          <>
            Verwurzelt in
            <br />
            <span className="italic text-forest-300">der Region.</span>
          </>
        }
        paragraph="Zwischen Saarschleife und Untere Saar. Wir arbeiten dort, wo wir seit drei Generationen leben. Kurze Wege, gewachsene Beziehungen, Verantwortung, die nicht erst im Vertrag steht."
      />

      <section className="bg-bone-50 py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Team</p>
            <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-brand-tight text-slate-950">
              Menschen hinter
              <br />
              <span className="italic text-forest-600">dem Handwerk.</span>
            </h2>
          </div>
          <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <li
                key={m.name}
                className="glass rounded-[20px] p-6"
              >
                <p className="tnum eyebrow text-forest-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-display text-[24px] leading-tight text-slate-950">
                  {m.name}
                </p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-slate-600">
                  {m.role}
                </p>
                {m.note && (
                  <p className="mt-4 text-[14px] leading-relaxed text-slate-700">
                    {m.note}
                  </p>
                )}
                {(m.email || m.phone) && (
                  <div className="mt-5 hairline opacity-40" />
                )}
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="mt-4 block text-[14px] text-slate-950 hover:text-forest-600 transition-colors"
                  >
                    {m.email}
                  </a>
                )}
                {m.phone && (
                  <p className="text-[14px] text-slate-800">{m.phone}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ParallaxImage
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=80"
        alt=""
        height="h-[60dvh] min-h-[460px]"
      >
        <blockquote className="max-w-3xl text-center">
          <p className="font-display font-light text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.2] text-bone-50">
            &ldquo;Ein Handwerk bleibt nur so lange lebendig, wie eine Familie es
            weiterträgt.&rdquo;
          </p>
          <p className="mt-8 eyebrow" style={{ color: "rgba(251,248,243,0.7)" }}>
            Andreas Bohschulte · Geschäftsführer
          </p>
        </blockquote>
      </ParallaxImage>

      <ContactCTA />
    </>
  );
}
