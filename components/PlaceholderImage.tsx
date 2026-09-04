// Small wrapper around next/image with fixed defaults, a graceful
// gradient fallback for when a src fails to load, and a large "PLATZHALTER"
// watermark overlay so it's obvious which images still need to be replaced.

"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  ratio?: string;
};

export default function PlaceholderImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  quality = 78,
  fill = true,
  ratio,
  ...rest
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <>
        <div
          className={`h-full w-full bg-gradient-to-br from-slate-800 via-forest-700 to-slate-950 ${className}`}
          aria-hidden
        />
        <Watermark />
      </>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        quality={quality}
        className={className}
        onError={() => setFailed(true)}
        {...rest}
      />
      <Watermark />
    </>
  );
}

function Watermark() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] flex select-none items-center justify-center overflow-hidden"
    >
      <span
        className="font-display font-light uppercase tracking-[0.35em] whitespace-nowrap"
        style={{
          fontSize: "clamp(1.4rem, 8vw, 6.5rem)",
          color: "rgba(255,255,255,0.55)",
          textShadow: "0 2px 32px rgba(0,0,0,0.45), 0 0 2px rgba(0,0,0,0.3)",
          mixBlendMode: "difference",
        }}
      >
        Platzhalter
      </span>
    </span>
  );
}
