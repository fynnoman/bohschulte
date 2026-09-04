// Single source of truth for all company data.
// If Bohschulte updates a phone number or price, this is where it changes.

export const company = {
  name: "Bohschulte Gebäudereinigung",
  short: "Bohschulte",
  foundedYear: 1949,
  generations: 3,
  location: "Saarlouis",
  region: "Saarland",
  ceo: "Andreas Bohschulte",
  legalForm: "Bohschulte Gebäudereinigung GmbH",
  claim: "Sauberkeit als Handwerk. Seit 1949.",
  phone: "06831 128573",
  phoneHref: "tel:+4968311285730",
  emailPrimary: "b.osso@bohschulte.de",
  emailCeo: "a.bohschulte@bohschulte.de",
  address: {
    street: "Provinzialstraße 111",
    zip: "66740",
    city: "Saarlouis",
  },
};

export const timeline = [
  {
    year: 1949,
    title: "Gegründet in Saarlouis",
    body: "Hans Bohschulte legt in der Nachkriegszeit den Grundstein für ein Handwerk, das bis heute in der Familie liegt.",
  },
  {
    year: 1973,
    title: "Zweite Generation",
    body: "Bernd Bohschulte übernimmt den Betrieb und erweitert das Leistungsspektrum um Fassade, Glas und Sonderreinigungen.",
  },
  {
    year: 1998,
    title: "Ausbau der Dienstleistungen",
    body: "Der Fuhrpark und die Objektbetreuung wachsen. Erste langjährige Verträge mit Banken und Kommunen entstehen.",
  },
  {
    year: 2014,
    title: "Dritte Generation",
    body: "Andreas Bohschulte übernimmt die Geschäftsführung und führt den Betrieb technisch und organisatorisch in die Gegenwart.",
  },
  {
    year: 2025,
    title: "Heute",
    body: "Vollsortiment-Gebäudereinigung im gesamten Saarland — Unterhalts-, Glas-, Fassade, Sonderreinigung, Hygiene, PV, Graffitischutz.",
  },
];

export const services = [
  {
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    tagline: "Der stille Standard.",
    body: "Regelmäßige Pflege für Büros, Filialen, Verkaufsflächen und öffentliche Gebäude. Feste Teams, feste Zeiten, dokumentierte Qualität.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Feste Objektteams", "Digital dokumentiert", "Qualitätskontrollen durch Objektleitung"],
  },
  {
    slug: "glas-und-fensterreinigung",
    title: "Glas- und Fensterreinigung",
    tagline: "Klarheit auf jeder Höhe.",
    body: "Von der klassischen Fensterreinigung bis zu großflächigen Glasfassaden — mit Hebebühne, Teleskopstange und reinem Osmose-Wasser.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Osmose-Verfahren", "Bis 25 m Arbeitshöhe", "Innen- und Außenreinigung"],
  },
  {
    slug: "grund-und-bauschlussreinigung",
    title: "Grund- und Bauschlussreinigung",
    tagline: "Übergabe in einwandfreiem Zustand.",
    body: "Nach Bau, Umbau oder als jährliche Grundreinigung — wir bringen Räume in den Zustand, in dem sie eröffnet, übergeben oder erneut vermietet werden können.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Feinreinigung nach VOB", "Materialgerecht", "Kurzfristig planbar"],
  },
  {
    slug: "fassaden-und-markisenreinigung",
    title: "Fassaden- und Markisenreinigung",
    tagline: "Zurück zum Werkston.",
    body: "Schonende Verfahren für Putz, Klinker, Metall und Textil. Markisen und Sonnensegel werden textilgerecht gereinigt und imprägniert.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Niederdruck-Verfahren", "Imprägnierung optional", "Substanzschonend"],
  },
  {
    slug: "teppich-und-polsterreinigung",
    title: "Teppich- und Polstermöbelreinigung",
    tagline: "Sprühextraktion.",
    body: "Tiefenreinigung ohne Rückstände — für Büro-Teppiche, Konferenzstühle, Lobby-Möbel und Kinosessel.",
    image:
      "https://images.unsplash.com/photo-1583845112203-29329902332e?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Sprühextraktion", "Trockenzeit < 6 h", "Fleckensanierung"],
  },
  {
    slug: "brand-und-wasserschaeden",
    title: "Brand- und Wasserschäden",
    tagline: "Erste Hilfe am Gebäude.",
    body: "Sanierungsreinigung nach Wasser-, Rauch- oder Rußschäden. Wir arbeiten mit Versicherungen und Sachverständigen zusammen.",
    image:
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Rufbereitschaft", "Versicherungsabrechnung", "Geruchsneutralisation"],
  },
  {
    slug: "taubenvergraemung",
    title: "Taubenvergrämung",
    tagline: "Pico-System.",
    body: "Nachhaltige, tierschutzgerechte Vergrämung durch das Pico-System — dezent, wartungsarm, langfristig wirksam.",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Tierschutzgerecht", "Dezent an der Fassade", "Wartungsarm"],
  },
  {
    slug: "hygieneservice",
    title: "Hygieneservice",
    tagline: "Sanitär, Küche, Kontaktflächen.",
    body: "Verbrauchsmaterial, Desinfektionspläne, Nachfüllung und Kontrolle — sichtbare Sauberkeit dort, wo sie am meisten gesehen wird.",
    image:
      "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Spender-Management", "Verbrauchslieferung", "Desinfektionspläne"],
  },
  {
    slug: "photovoltaik",
    title: "Photovoltaik-Reinigung",
    tagline: "Ertrag zurückholen.",
    body: "Fachgerechte Reinigung von PV-Anlagen mit vollentsalztem Wasser. Kein Kratzen, kein Verlust der Herstellergarantie.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Osmose-Wasser", "Ertragsanalyse optional", "Herstellerkonform"],
  },
  {
    slug: "graffitischutz",
    title: "Graffitischutz",
    tagline: "Prävention und Entfernung.",
    body: "Permanente und semipermanente Anti-Graffiti-Beschichtungen. Rückstandsfreie Entfernung — auf Wunsch mit Wiederherstellung der Beschichtung.",
    image:
      "https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=1900&q=80",
    highlights: ["Permanent / semipermanent", "Rückstandsfreie Entfernung", "Denkmal-tauglich"],
  },
];

export const team = [
  {
    name: "Andreas Bohschulte",
    role: "Geschäftsführer",
    email: "a.bohschulte@bohschulte.de",
    note: "3. Generation. Allein vertretungsberechtigt.",
  },
  {
    name: "Benni Osso",
    role: "Prokurist · Auftragsbearbeitung",
    email: "b.osso@bohschulte.de",
    phone: "06831 128573",
    note: "Zentraler Ansprechpartner für Angebote, EDV, Finanzbuchhaltung.",
  },
  {
    name: "Anke Ehre",
    role: "Objektleitung",
    note: "Qualitätskontrollen und Objektbetreuung im Feld.",
  },
  {
    name: "Katja Schäfer",
    role: "Rechnungswesen",
  },
  {
    name: "Nicole Folz",
    role: "Lohnbuchhaltung",
  },
  {
    name: "Tanja Wilhelm-Darm",
    role: "Lohnbuchhaltung",
  },
  {
    name: "Sabrina Altmeyer",
    role: "Datenschutzbeauftragte",
  },
];

export const clients = [
  { name: "Kreissparkasse Saarlouis", sector: "Bank" },
  { name: "Volksbank Westliche Saar+", sector: "Bank" },
  { name: "Kaufhaus Pieper", sector: "Einzelhandel" },
  { name: "Galerie Kleiner Markt", sector: "Einzelhandel" },
  { name: "Ruhland Kallenborn", sector: "Handel" },
  { name: "FL-Smidth Wadgassen", sector: "Industrie" },
  { name: "Gemeinde Merchweiler", sector: "Kommune" },
  { name: "Torpedo Gruppe / Mercedes-Benz", sector: "Automotive" },
];

export const brands = ["Dr. Schnell", "Vileda", "Vermop", "Ecolab", "Tana"];

export const shopItems = [
  "Einwascher & Wischer",
  "Teleskopstangen bis 12 m",
  "Glasreiniger & Rakel",
  "Mikrofasertücher",
  "Reinigungschemie",
  "Verbrauchsmaterial",
];
