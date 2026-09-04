"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "../PlaceholderImage";

// Editorial hero: masthead lockup, a single arresting sentence, a floating
// glass card with three quiet facts, and a background image that drifts
// slightly on scroll (parallax). Deliberately restrained.

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, 220],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [1.05, 1.18],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -60],
  );
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-bone-50 pt-28 sm:pt-32"
    >
      {/* Background image, subtly scaling and drifting */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-x-6 bottom-6 top-24 z-0 overflow-hidden rounded-[28px] sm:inset-x-8 md:inset-x-10 md:top-28 md:rounded-[36px] will-change-transform"
      >
        <PlaceholderImage
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
          alt="Repräsentative Glasfassade in Saarlouis"
          sizes="100vw"
          quality={82}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" />
      </motion.div>

      {/* Content, drifting up slightly on scroll */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1240px] flex-col justify-end px-6 pb-16 sm:px-8 md:pb-24"
      >
        <div className="max-w-[820px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow text-bone-100"
            style={{ color: "rgba(251,248,243,0.75)" }}
          >
            Gebäudereinigung · Saarlouis · seit 1949
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-light text-bone-50 text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.98] tracking-brand-tight"
          >
            Sauberkeit
            <br />
            <span className="italic font-light text-forest-300">
              als Handwerk.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-xl text-[16px] leading-relaxed text-bone-100/85 md:text-[17px]"
          >
            Drei Generationen. Ein Familienbetrieb aus Saarlouis. Verlässliche
            Objektbetreuung für Banken, Kommunen, Einzelhandel und Industrie im
            gesamten Saarland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-bone-50 px-6 py-3 text-[14px] font-medium text-slate-950 transition-transform duration-300 hover:-translate-y-[1px]"
            >
              Angebot anfragen
              <span
                aria-hidden
                className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/leistungen"
              className="group inline-flex items-center gap-2 rounded-full border border-bone-50/30 px-6 py-3 text-[14px] font-medium text-bone-50 transition-all duration-300 hover:border-bone-50/60"
            >
              Leistungen ansehen
            </Link>
          </motion.div>
        </div>

        {/* Floating liquid-glass "facts" card, pinned bottom-right on md+ */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass mt-12 hidden max-w-[380px] rounded-[22px] p-6 md:absolute md:right-6 md:bottom-16 md:mt-0 md:block lg:right-10 lg:bottom-24"
        >
          <div className="grid grid-cols-3 gap-4">
            <Fact k="1949" v="Gegründet" />
            <Fact k="3." v="Generation" />
            <Fact k="10+" v="Leistungen" />
          </div>
          <div className="mt-5 hairline" />
          <p className="mt-5 text-[13.5px] leading-relaxed text-slate-800/90">
            Vollsortiment im Saarland. Für Objekte, bei denen die Reinigung
            gesehen wird — Filiale, Foyer, Konferenz, Fassade.
          </p>
        </motion.aside>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center"
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-bone-100/60">
          <span className="h-px w-8 bg-bone-100/50" />
          Scrollen
        </div>
      </motion.div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="tnum font-display text-[28px] leading-none text-slate-950">
        {k}
      </p>
      <p className="mt-1 text-[11.5px] tracking-[0.14em] uppercase text-slate-700">
        {v}
      </p>
    </div>
  );
}
