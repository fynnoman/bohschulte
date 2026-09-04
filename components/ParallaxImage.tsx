"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "./PlaceholderImage";

// A tall image that moves slower than the viewport — the classic parallax
// hero device. Wraps children (e.g. an overlaid quote or caption).

export default function ParallaxImage({
  src,
  alt,
  height = "h-[85dvh]",
  intensity = 120,
  overlay = true,
  children,
}: {
  src: string;
  alt: string;
  height?: string;
  intensity?: number;
  overlay?: boolean;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-intensity, intensity],
  );

  return (
    <section
      ref={ref}
      className={`relative w-full ${height} overflow-hidden bg-slate-950`}
    >
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[15%] inset-x-0 will-change-transform"
      >
        <PlaceholderImage
          src={src}
          alt={alt}
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/60" />
      )}
      {children && (
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
          {children}
        </div>
      )}
    </section>
  );
}
