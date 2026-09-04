import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center bg-bone-50 pt-32">
      <div className="mx-auto max-w-[900px] px-6 sm:px-8">
        <p className="eyebrow">404 · Seite nicht gefunden</p>
        <h1 className="mt-5 font-display font-light text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] tracking-brand-tight text-slate-950">
          Hier war einmal
          <br />
          <span className="italic text-forest-600">etwas anderes.</span>
        </h1>
        <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-slate-700">
          Die Seite existiert nicht mehr oder ist umgezogen. Zurück zur
          Startseite oder direkt zu unseren Leistungen.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-[14px] font-medium text-bone-50 hover:bg-forest-700 transition-colors"
          >
            Zur Startseite
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 px-6 py-3 text-[14px] font-medium text-slate-950 hover:border-slate-900/40 transition-colors"
          >
            Leistungen
          </Link>
        </div>
      </div>
    </section>
  );
}
