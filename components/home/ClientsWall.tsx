"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/data";

// Editorial client list — no logos (we don't have them cleared), just names
// as typography. Reads like a masthead of a design magazine.

export default function ClientsWall() {
  return (
    <section className="relative bg-[#EFF3EC] py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
          <div className="md:sticky md:top-32 md:h-fit">
            <p className="eyebrow">Referenzen</p>
            <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-brand-tight text-slate-950">
              Die uns
              <br />
              <span className="italic text-forest-600">vertrauen.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15.5px] leading-relaxed text-slate-700">
              Banken, Kommunen, Einzelhandel und Industrie — Auftraggeber, für
              die Sauberkeit Teil der Wahrnehmung ihrer Marke ist.
            </p>
          </div>

          <ul>
            {clients.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-slate-900/10 py-6 last:border-b"
              >
                <div>
                  <p className="font-display text-[26px] leading-tight tracking-brand-tight text-slate-950 md:text-[32px] transition-colors group-hover:text-forest-600">
                    {c.name}
                  </p>
                </div>
                <p className="text-[12px] tracking-[0.2em] uppercase text-slate-600">
                  {c.sector}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
