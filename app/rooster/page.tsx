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

      {/* Lesson Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Onze Lessen</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Bij CrossFit Leiden hebben we een breed aanbod aan lessen. Van intense group classes tot persoonlijke small group training – er is voor ieder wat wils.
            </p>

            {/* Group Classes */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Group Classes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Training */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-verdigris to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">💪</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Training</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Algemene CrossFit-style training. Full body workout, geschikt voor alle niveaus. De perfecte mix van kracht, conditie en techniek.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Beginners en gevorderden, 18+
                  </p>
                </div>

                {/* Hyrox */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-cinnabar to-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🏃</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Hyrox</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Geïnspireerd op HYROX races: veel conditie, sled pushes, lunges, ski, row en meer. Train voor je volgende race!
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Atleten die aan HYROX willen werken of hun uithoudingsvermogen willen verbeteren
                  </p>
                </div>

                {/* Flex Friday */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-jonquil to-yellow-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🎉</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Flex Friday</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Speelsere vrijdag-workout met focus op fun, teamwork en het afsluiten van de werkweek. Minder serieus, meer plezier!
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Alle leden die de week gezellig en actief willen afsluiten
                  </p>
                </div>

                {/* Running */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🏃‍♂️</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Running</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Hardlooptraining buiten, focus op techniek, tempo en duurvermogen. Van beginner tot marathon voorbereiding.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Leden die beter willen worden in hardlopen, ook beginners
                  </p>
                </div>

                {/* Olympic Lifting */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🏋️</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Olympic Lifting</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Focus op gewichtheffen: snatch, clean & jerk met veel techniekcoaching. Word sterker en verbeter je techniek.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Leden die sterker willen worden en aan hun techniek willen werken
                  </p>
                </div>

                {/* Teens */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">👦</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Teens</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Veilige en speelse training voor tieners. Focus op bewegen, kracht en zelfvertrouwen in een positieve omgeving.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Tieners (13-17 jaar)
                  </p>
                </div>

                {/* Pre Teens */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🧒</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Pre Teens</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Training voor jongere kids met veel fun en basisbewegingen. Leren bewegen, sterk worden en samen sporten!
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Kinderen (9-12 jaar)
                  </p>
                </div>

                {/* Urban Training */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🌆</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Urban Training</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Training buiten in de stad, gebruikmakend van de omgeving en obstakels. Frisse lucht, nieuwe uitdagingen!
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Leden die buiten willen trainen en van variatie houden
                  </p>
                </div>

                {/* Mobility */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🧘</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Mobility</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Rustige les met focus op mobiliteit, flexibiliteit en beter bewegen. Perfect voor herstel en preventie van blessures.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Iedereen die stijve schouders/heupen heeft en beter wil herstellen
                  </p>
                </div>

                {/* Gymnastics */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🤸</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Gymnastics</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Focus op bodyweight skills: pull-ups, handstand, dips en core. Technisch sterker worden in gymnastische bewegingen.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Leden die sterker en technisch beter willen worden in gymnastiek
                  </p>
                </div>

              </div>
            </div>

            {/* Small Group */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Small Group / Semi-Private</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                
                {/* GetShredded */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">GetShredded</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">Small Group</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">🔥</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Small group programma met focus op afvallen, strakker worden en conditie. Max 5 personen, persoonlijke aandacht.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Leden die vetmassa willen verliezen en zich fitter willen voelen
                  </p>
                </div>

                {/* Unlock Motion */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">Unlock Motion</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">Small Group</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">🔓</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Small group programma gericht op beter bewegen, pijnvrij trainen en mobiliteit. Ideaal bij klachten of beperkingen.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Leden met pijntjes, beperkingen of focus op techniek en bewegingskwaliteit
                  </p>
                </div>

                {/* Kickstart */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">Kickstart</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">Small Group</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">🚀</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Instapprogramma voor nieuwe leden. Veilige opbouw van bewegingen, extra coaching en begeleiding in kleine groep.
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    Voor: Complete beginners en mensen die rustig en veilig willen starten
                  </p>
                </div>

              </div>
            </div>
          </div>
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
