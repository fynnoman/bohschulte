"use client";

import { motion } from "framer-motion";

// Reusable editorial page header used across all sub-pages so the type
// treatment and eyebrow rhythm stay consistent.

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <header className="relative bg-bone-50 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-display font-light text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] tracking-brand-tight text-slate-950"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-2xl text-[16px] leading-relaxed text-slate-700 md:text-[17px]"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </header>
  );
}
