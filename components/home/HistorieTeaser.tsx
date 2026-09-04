"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

// Editorial timeline: sticky intro left, stacked years right.

export default function HistorieTeaser() {
  return (
    <section className="relative overflow-hidden bg-bone-50 py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
          <div className="md:sticky md:top-32 md:h-fit">
            <p className="eyebrow">Historie</p>
            <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-brand-tight text-slate-950">
              Drei Generationen,
              <br />
              <span className="italic text-forest-600">ein Handwerk.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-slate-700">
              1949 von Hans Bohschulte gegründet, 1973 von Bernd Bohschulte
              weitergeführt, heute in dritter Generation von Andreas Bohschulte
              geleitet. Die Werte des Betriebs haben sich in 75 Jahren nicht
              verändert.
            </p>
            <Link
              href="/historie"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-slate-950 hover:text-forest-600 transition-colors"
            >
              Ganze Geschichte lesen
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div>
            <ul className="space-y-10">
              {timeline.slice(0, 4).map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid grid-cols-[auto_1fr] gap-8 border-t border-slate-900/10 pt-8"
                >
                  <div>
                    <p className="tnum font-display text-[44px] leading-none text-slate-950 md:text-[56px]">
                      {t.year}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-[22px] leading-tight text-slate-950">
                      {t.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-slate-700">
                      {t.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
