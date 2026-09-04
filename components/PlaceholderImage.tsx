// Small wrapper around next/image with fixed defaults and a graceful
// gradient fallback for when a src fails to load or is intentionally empty.
// Keeps the rest of the codebase free of next/image boilerplate.

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
      <div
        className={`h-full w-full bg-gradient-to-br from-slate-800 via-forest-700 to-slate-950 ${className}`}
        aria-hidden
      />
    );
  }

  return (
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
  );
}
