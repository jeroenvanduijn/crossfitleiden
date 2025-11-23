"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Rooster() {
  const [activeRooster, setActiveRooster] = useState<'groepslessen' | 'small-group'>('groepslessen');

  useEffect(() => {
    // Wait for embed_rooster to be available, then initialize the active schedule
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && (window as any).embed_rooster) {
        // Clear the container first
        const container = document.getElementById('sportbit-rooster');
        if (container) {
          container.innerHTML = '&nbsp;';
        }

        // Initialize the appropriate category based on active rooster
        const category = activeRooster === 'groepslessen' ? 7 : 1;
        (window as any).embed_rooster.init('https://crossfitleiden.sportbitapp.nl/', category);
      } else {
        // Retry after 100ms
        setTimeout(checkAndInit, 100);
      }
    };

    // Start checking after a short delay
    const timer = setTimeout(checkAndInit, 500);

    return () => clearTimeout(timer);
  }, [activeRooster]); // Re-run when activeRooster changes

  return (
    <>
      {/* Hero - Simplified */}
      <section className="bg-gradient-to-r from-jonquil to-jonquil/80 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lessen Rooster</h1>
          <p className="text-xl max-w-2xl">
            Van vroege ochtend tot late avond – er is altijd een moment dat bij jou past.
            Alle lessen zijn geschikt voor elk niveau!
          </p>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Hieronder zie je ons actuele rooster. Nog geen lid? Begin met een gratis intro!
            </p>
            <Link href="/starten" className="text-cinnabar font-semibold hover:underline text-lg">
              Plan een gratis intro →
            </Link>
          </div>

          {/* Rooster Type Selector */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveRooster('groepslessen')}
                className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                  activeRooster === 'groepslessen'
                    ? 'border-verdigris bg-verdigris/10 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-verdigris/50'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">👥</span>
                  <h3 className="text-2xl font-bold">Groepslessen</h3>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  Alle niveaus • Max 12 personen • 60 minuten
                </p>
                {activeRooster === 'groepslessen' && (
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-verdigris text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Actief rooster ✓
                    </span>
                  </div>
                )}
              </button>

              <button
                onClick={() => setActiveRooster('small-group')}
                className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                  activeRooster === 'small-group'
                    ? 'border-cinnabar bg-cinnabar/10 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-cinnabar/50'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-2xl font-bold">Small Group</h3>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  2-4 personen • Persoonlijke aandacht • Op maat
                </p>
                {activeRooster === 'small-group' && (
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-cinnabar text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Actief rooster ✓
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Sportbit Schedule Embed */}
          <div className="bg-gray-50 rounded-xl p-4 md:p-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm min-h-[600px]">
              <link rel="stylesheet" href="https://crossfitleiden.sportbitapp.nl/cbm/css/embed/rooster/rooster.css" type="text/css" />
              <Script
                src="https://crossfitleiden.sportbitapp.nl/cbm/embed/rooster/cdn/"
                strategy="afterInteractive"
              />
              <div id="sportbit-rooster">&nbsp;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick tips */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Handig om te weten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">🕐 Hoe laat moet ik er zijn?</h4>
                <p className="text-gray-700 text-sm">
                  Kom 5-10 minuten voor de les. Zo heb je tijd om te verkleden en rustig te beginnen.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">📱 Moet ik me aanmelden?</h4>
                <p className="text-gray-700 text-sm">
                  Ja, via onze app of website. Zo kunnen we zorgen dat de groep niet te groot wordt (max 12 personen).
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">❓ Welke les is het beste voor beginners?</h4>
                <p className="text-gray-700 text-sm">
                  Alle lessen zijn geschikt! Coaches passen oefeningen aan op jouw niveau. De zaterdagochtend les heeft wel extra focus op beginners.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">🔄 Kan ik een les annuleren?</h4>
                <p className="text-gray-700 text-sm">
                  Ja, tot 2 uur van tevoren via de app. Geen zorgen als iets tussenkomt – we snappen dat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Zie je een tijd die bij jou past?"
        subtitle="Probeer het eerst vrijblijvend met een gratis intro. We laten je de box zien, beantwoorden al je vragen en kijken samen welke lestijden bij jou passen!"
        buttonLabel="Plan Mijn Gratis Intro"
      />

      {/* Questions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Geen idee welke tijd bij jou past of heb je vragen over het rooster?{" "}
              <Link href="/contact" className="text-cinnabar font-semibold hover:underline">
                Stuur ons een berichtje
              </Link>
              {" "}– we helpen je graag!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
