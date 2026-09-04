// Nav/footer wordmark.
// - Dark variant (on light backgrounds like nav): actual company logo — the
//   original artwork with black wordmark + red/green rosette.
// - Light variant (on dark backgrounds like footer): typographic wordmark,
//   because the logo's black wordmark would be unreadable on slate-950.

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
          src="/logo.png"
          alt="Bohschulte Gebäudereinigung"
          width={2168}
          height={725}
          priority
          className={
            compact
              ? "h-8 w-auto sm:h-9"
              : "h-9 w-auto sm:h-10 md:h-11"
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
