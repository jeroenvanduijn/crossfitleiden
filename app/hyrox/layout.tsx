import type { Metadata } from "next";
import "../globals.css";
import HyroxHeader from "@/components/HyroxHeader";
import HyroxFooter from "@/components/HyroxFooter";

export const metadata: Metadata = {
  title: "HYROX Simulation - CrossFit Leiden",
  description: "Doe mee aan onze HYROX Simulation event. Everyday people, exceptionally strong – test je HYROX-vorm in een supportieve omgeving!",
  keywords: ["hyrox", "crossfit", "leiden", "simulation", "fitness", "event", "race"],
};

export default function HyroxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <HyroxHeader />
        <main>{children}</main>
        <HyroxFooter />
      </body>
    </html>
  );
}
