"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import PlaceholderImage from "../PlaceholderImage";

// Editorial services grid. On hover, the card's image reveals from below
// with a soft parallax. On mobile, images are shown by default.

export default function ServicesGrid() {
  return (
    <section id="leistungen" className="relative bg-bone-50 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Leistungen</p>
            <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-brand-tight text-slate-950">
              Vollsortiment für
              <br />
              <span className="italic text-forest-600">
                gepflegte Objekte.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-slate-700">
            Von der werktäglichen Unterhaltsreinigung bis zur Sanierung nach
            Brand- oder Wasserschaden — zehn eng aufeinander abgestimmte
            Gewerke, dokumentiert und aus einer Hand.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  s,
  i,
}: {
  s: (typeof services)[number];
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (i % 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/leistungen#${s.slug}`}
        className="group relative block h-[380px] overflow-hidden rounded-[22px] bg-slate-900 ring-1 ring-slate-950/10 transition-transform duration-500 hover:-translate-y-1"
      >
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
          <PlaceholderImage
            src={s.image}
            alt=""
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={72}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/10 transition-opacity duration-500 group-hover:from-slate-950/75" />

        <div className="relative flex h-full flex-col justify-end p-6">
          <div className="translate-y-4 opacity-90 transition-transform duration-500 group-hover:translate-y-0">
            <p className="eyebrow text-forest-300">{s.tagline}</p>
            <h3 className="mt-3 font-display text-[26px] leading-tight text-bone-50">
              {s.title}
            </h3>
            <p className="mt-3 max-h-0 overflow-hidden text-[13.5px] leading-relaxed text-bone-100/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
              {s.body}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[12.5px] tracking-[0.18em] uppercase text-bone-100/70">
            <span className="h-px w-6 bg-bone-100/50 transition-all duration-500 group-hover:w-12 group-hover:bg-forest-300" />
            <span>Ansehen</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
