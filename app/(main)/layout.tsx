import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CrossFit Leiden - Everyday people, exceptionally strong",
  description: "CrossFit Leiden is meer dan een sportschool – het is een tweede thuis. Gewone mensen, buitengewoon sterk. Kom kennismaken!",
  keywords: ["crossfit", "leiden", "fitness", "gym", "sport", "training", "community"],
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
