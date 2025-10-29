import type { Metadata } from "next";
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
    <>
      <HyroxHeader />
      <main>{children}</main>
      <HyroxFooter />
    </>
  );
}
