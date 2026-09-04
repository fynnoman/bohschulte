"use client";

import { motion } from "framer-motion";

const values = [
  {
    n: "01",
    title: "Feste Objektteams",
    body: "Ihr Objekt wird immer von denselben Kräften betreut. Sie kennen die Räume, die Wege, die Details. Vertretung geregelt, Übergaben dokumentiert.",
  },
  {
    n: "02",
    title: "Dokumentierte Qualität",
    body: "Objektbücher, Reinigungspläne, digitale Nachweise. Objektleitung Anke Ehre prüft regelmäßig — nicht wenn reklamiert wird.",
  },
  {
    n: "03",
    title: "Ein Ansprechpartner",
    body: "Für die gesamte Auftragsabwicklung: Benni Osso. Angebot, Terminierung, Rechnung, Rückfragen — kein Ping-Pong zwischen Abteilungen.",
  },
  {
    n: "04",
    title: "Verlässliche Termine",
    body: "Fensterreinigung im Quartal, Grundreinigung im Jahr, Hygieneservice nach Plan. Wir erinnern, koordinieren, führen aus.",
  },
  {
    n: "05",
    title: "Regional verwurzelt",
    body: "Provinzialstraße 111, Saarlouis. Kurze Wege im gesamten Saarland — Reaktionszeit im Notfall unter drei Stunden.",
  },
  {
    n: "06",
    title: "Substanz vor Show",
    body: "Wir arbeiten mit Dr. Schnell, Vermop, Ecolab. Gute Chemie, gute Werkzeuge, gute Menschen — keine Marketing-Zeremonie darüber.",
  },
];

export default function Values() {
  return (
    <section className="relative bg-slate-950 py-28 text-bone-50 sm:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-grain" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-20">
          <div className="md:sticky md:top-32 md:h-fit">
            <p className="eyebrow" style={{ color: "rgba(251,248,243,0.65)" }}>
              Was uns ausmacht
            </p>
            <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-brand-tight">
              Sechs Regeln,
              <br />
              <span className="italic text-forest-300">
                nach denen wir arbeiten.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-bone-100/80">
              Ein Familienbetrieb bleibt nur so lange erfolgreich, wie seine
              Grundsätze klar sind. Hier stehen unsere — nachlesbar, prüfbar,
              vertraglich zusicherbar.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.li
                key={v.n}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 2) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-dark rounded-[20px] p-6"
              >
                <div className="flex items-baseline justify-between">
                  <span className="tnum text-forest-300 text-[12.5px] tracking-[0.2em]">
                    {v.n}
                  </span>
                  <span className="h-px w-8 bg-bone-100/20" />
                </div>
                <h3 className="mt-5 font-display text-[22px] leading-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-bone-100/80">
                  {v.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
