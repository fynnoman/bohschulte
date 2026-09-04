// Nav/footer wordmark.
// - Dark variant (on light backgrounds like nav): actual company logo image.
// - Light variant (on dark backgrounds like footer): typographic wordmark,
//   because the current logo file is a JPEG with a light background — it would
//   render as a bright box on dark surfaces. Replace with a transparent PNG or
//   SVG later to use the real logo everywhere.

import Image from "next/image";

export default function Wordmark({
  variant = "dark",
  compact = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  if (variant === "dark") {
    return (
      <div className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="Bohschulte Gebäudereinigung"
          width={304}
          height={84}
          priority
          className={
            compact
              ? "h-7 w-auto sm:h-8"
              : "h-8 w-auto sm:h-9 md:h-10"
          }
        />
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-3">
      <span
        className="font-display text-[26px] leading-none tracking-brand-tight text-bone-50"
      >
        Bohschulte
      </span>
      <span
        className="hidden sm:inline eyebrow"
        style={{ color: "rgba(251,248,243,0.6)", letterSpacing: "0.22em" }}
      >
        · seit 1949
      </span>
    </div>
  );
}
