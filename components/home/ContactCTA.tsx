"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/data";
import PlaceholderImage from "../PlaceholderImage";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-bone-50 py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-slate-950 text-bone-50 md:rounded-[40px]"
        >
          <div className="absolute inset-0 opacity-40">
            <PlaceholderImage
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1900&q=80"
              alt=""
              sizes="100vw"
              quality={72}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-forest-900/90 to-forest-500/75" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" />

          <div className="relative grid gap-12 p-10 sm:p-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-20">
            <div>
              <p className="eyebrow" style={{ color: "rgba(251,248,243,0.65)" }}>
                Angebot & Rückruf
              </p>
              <h2 className="mt-5 font-display font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-brand-tight">
                Erzählen Sie uns
                <br />
                <span className="italic text-forest-300">vom Objekt.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-bone-100/80">
                Filiale, Bürogebäude, Fassade, PV-Anlage oder ein einmaliger
                Sonderauftrag — schildern Sie uns kurz die Aufgabe. Wir melden
                uns innerhalb eines Werktages mit einer Einschätzung.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center gap-2 rounded-full bg-bone-50 px-6 py-3 text-[14px] font-medium text-slate-950 transition-transform duration-300 hover:-translate-y-[1px]"
                >
                  Angebot anfragen
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-bone-50/30 px-6 py-3 text-[14px] font-medium text-bone-50 transition-all duration-300 hover:border-bone-50/60"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="glass-dark rounded-[22px] p-7">
              <p className="eyebrow" style={{ color: "rgba(251,248,243,0.65)" }}>
                Ihr Ansprechpartner
              </p>
              <p className="mt-4 font-display text-[30px] leading-tight">
                Benni Osso
              </p>
              <p className="mt-1 text-[13.5px] uppercase tracking-[0.18em] text-forest-300">
                Prokurist · Auftragsbearbeitung
              </p>
              <p className="mt-5 text-[14.5px] leading-relaxed text-bone-100/85">
                Ein Ansprechpartner für Angebote, Terminierung, Auftragsabwicklung
                und Rückfragen. Kein Ping-Pong zwischen Abteilungen.
              </p>
              <div className="mt-6 hairline opacity-30" />
              <div className="mt-6 space-y-2 text-[14.5px]">
                <a
                  href={company.phoneHref}
                  className="block text-bone-50 hover:text-forest-300 transition-colors"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
