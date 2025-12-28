"use client";

import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CookieConsent from "@/components/CookieConsent";
import KickstartPromoPopup from "@/components/KickstartPromoPopup";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLinksPage = pathname?.includes('/links');
  const isFitnessTestPage = pathname?.includes('/fitness-test');

  if (isLinksPage || isFitnessTestPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
      <CookieConsent />
      <KickstartPromoPopup />
    </>
  );
}
