import Hero from "@/components/home/Hero";
import HistorieTeaser from "@/components/home/HistorieTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import Values from "@/components/home/Values";
import ClientsWall from "@/components/home/ClientsWall";
import ShopStrip from "@/components/home/ShopStrip";
import ContactCTA from "@/components/home/ContactCTA";
import ScaleToBackground from "@/components/ScaleToBackground";
import ParallaxImage from "@/components/ParallaxImage";

export default function Home() {
  return (
    <>
      <Hero />

      <HistorieTeaser />

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80"
        eyebrow="Handwerk"
        headline={
          <>
            Sauberkeit ist
            <br />
            <span className="italic text-forest-300">kein Zufall.</span>
          </>
        }
        paragraph="Es sind die kleinen Dinge, die den Unterschied machen — der Rakel, der nicht rattert. Die Sockelleiste, die genauso wischt wie der Boden. Der Mülleimer, dessen Deckel sauber schließt. Wir bemerken sie, weil wir jeden Tag daran arbeiten."
      />

      <ServicesGrid />

      <ShopStrip />

      <Values />

      <ParallaxImage
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2200&q=80"
        alt="Saarlouis"
        height="h-[70dvh] min-h-[520px]"
      >
        <blockquote className="max-w-3xl text-center">
          <p className="font-display font-light text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15] text-bone-50">
            &ldquo;Bohschulte ist der Betrieb, den wir seit Jahren nicht wechseln
            müssen — weil er nicht wechselhaft ist.&rdquo;
          </p>
          <p className="mt-8 eyebrow" style={{ color: "rgba(251,248,243,0.7)" }}>
            Langjähriger Auftraggeber · Bank im Saarland
          </p>
        </blockquote>
      </ParallaxImage>

      <ClientsWall />

      <ContactCTA />
    </>
  );
}
