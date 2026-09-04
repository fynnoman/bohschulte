// Minimal editorial wordmark. Reads as a stamp / masthead.
// Meant to be small in the nav and larger on the footer.

export default function Wordmark({
  variant = "dark",
  compact = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const fg = variant === "dark" ? "#0A1116" : "#FBF8F3";
  const muted = variant === "dark" ? "#64707A" : "rgba(251,248,243,0.6)";

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span
          className="font-display text-[22px] leading-none tracking-brand-tight"
          style={{ color: fg }}
        >
          Bohschulte
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-3">
      <span
        className="font-display text-[26px] leading-none tracking-brand-tight"
        style={{ color: fg }}
      >
        Bohschulte
      </span>
      <span
        className="hidden sm:inline eyebrow"
        style={{ color: muted, letterSpacing: "0.22em" }}
      >
        · seit 1949
      </span>
    </div>
  );
}
