import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bohschulte Gebäudereinigung · Saarlouis · seit 1949",
    template: "%s · Bohschulte Gebäudereinigung",
  },
  description:
    "Familiengeführte Gebäudereinigung im Saarland — Unterhalts-, Glas-, Fassade, Grundreinigung, Sonderleistungen. 3. Generation, seit 1949.",
  metadataBase: new URL("https://www.bohschulte.de"),
  openGraph: {
    title: "Bohschulte Gebäudereinigung",
    description:
      "Sauberkeit als Handwerk. Familiengeführt seit 1949 in Saarlouis.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${geist.variable} ${mono.variable}`}
    >
      <body className="bg-bone-50 text-slate-950 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
