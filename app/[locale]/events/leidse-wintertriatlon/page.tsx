"use client";

import { track } from '@vercel/analytics';

export default function LeidsWintertriatlon() {

  const handleRegistration = () => {
    track('Wintertriatlon Registration Click');
    window.open('https://inschrijven.nl/form/2026030151453-nl', '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-organic-bg/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-semibold">Proud sponsor • 1 maart 2026</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leidse Wintertriatlon
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Run. Bike. Skate.
            </p>

            <p className="text-lg mb-8 text-white/80 max-w-2xl">
              Doe mee aan de ultieme winteruitdaging. CrossFit Leiden is trotse sponsor van dit geweldige evenement georganiseerd door ZVL-1886.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRegistration}
                className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-lg text-lg cursor-pointer"
              >
                Schrijf je in →
              </button>
              <a
                href="https://www.zvl-1886.nl/leidse-wintertriathlon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-organic-bg/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-organic-bg/30 transition-all text-lg border-2 border-white/40 text-center"
              >
                Meer info
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>1 maart 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Schaatshal De Vliet, Leiden</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wat is de Leidse Wintertriatlon?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Een uniek evenement dat drie winter-onderdelen combineert. Geen zwemmen, maar schaatsen.
              Het perfecte avontuur voor crossfitters die ook buiten de gym hun grenzen willen verleggen.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Run</h3>
                <p className="text-gray-600">5 of 10 km hardlopen, afhankelijk van je gekozen afstand</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Bike</h3>
                <p className="text-gray-600">24 of 48 km fietsen op tijd, pure uithouding</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Skate</h3>
                <p className="text-gray-600">10 of 20 km schaatsen, de ultieme wintertest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Praktische Informatie</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-organic-bg rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-cinnabar">Wanneer & Waar</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Datum:</strong> 1 maart 2026</li>
                <li><strong>Locatie:</strong> Schaatshal De Vliet, Leiden</li>
                <li><strong>Start:</strong> Verschillende starttijden per categorie</li>
                <li><strong>Organisatie:</strong> ZVL-1886</li>
              </ul>
            </div>

            <div className="bg-organic-bg rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-cinnabar">Registratie</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Inschrijven:</strong> Via inschrijven.nl</li>
                <li><strong>Kosten:</strong> Check de website voor actuele prijzen</li>
                <li><strong>Limiet:</strong> Maximaal aantal deelnemers</li>
                <li><strong>Tip:</strong> Schrijf je op tijd in!</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-organic-bg rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Afstanden & Categorieën</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-cinnabar pl-6 py-2">
                  <h4 className="text-lg font-bold mb-2">Middenafstand (17+)</h4>
                  <p className="text-gray-700 mb-2">Perfect als je eerste wintertriatlon of als je de lange afstand nog te heftig vindt.</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 5 km hardlopen</li>
                    <li>• 24 km fietsen</li>
                    <li>• 10 km schaatsen</li>
                  </ul>
                </div>

                <div className="border-l-4 border-verdigris pl-6 py-2">
                  <h4 className="text-lg font-bold mb-2">Lange afstand (19+)</h4>
                  <p className="text-gray-700 mb-2">De ultieme test. Voor iedereen die echt wil weten wat ze in huis hebben.</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 10 km hardlopen</li>
                    <li>• 48 km fietsen</li>
                    <li>• 20 km schaatsen</li>
                  </ul>
                </div>

                <div className="border-l-4 border-jonquil pl-6 py-2">
                  <h4 className="text-lg font-bold mb-2">Jeugdduatlon (t/m 16 jaar)</h4>
                  <p className="text-gray-700 mb-2">Voor de jongere atleten. Geen fietsonderdeel, wel een mooie uitdaging.</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 2 km hardlopen</li>
                    <li>• 3 km schaatsen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Hoe kun je je voorbereiden?</h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Bij CrossFit Leiden bouw je al aan de basis: uithoudingsvermogen, explosieve kracht, mentale weerbaarheid.
              Dit helpt je enorm bij de wintertriatlon.
            </p>

            <div className="space-y-6">
              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Welke lessen helpen?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cinnabar mt-1">✓</span>
                    <span><strong>HYROX lessen:</strong> Running conditioning en mentale toughness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cinnabar mt-1">✓</span>
                    <span><strong>Group Classes:</strong> Algemene fitheid en uithoudingsvermogen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cinnabar mt-1">✓</span>
                    <span><strong>Running Classes:</strong> Extra techniek, loopscholing en duurvermogen voor het hardlooponderdeel</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cinnabar/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Extra tips van onze coaches</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-verdigris mt-1">→</span>
                    <span>Train ook buiten de gym: ga echt hardlopen en fietsen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verdigris mt-1">→</span>
                    <span>Oefen schaatsen als je er niet aan gewend bent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verdigris mt-1">→</span>
                    <span>Bouw langzaam op, vermijd overtraining</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verdigris mt-1">→</span>
                    <span>Bespreek je plan met je coach voor persoonlijk advies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-jonquil/10 rounded-xl p-6 border-2 border-jonquil/30">
                <p className="text-center text-gray-800">
                  <strong>Wil je een persoonlijk trainingsplan?</strong><br />
                  Bespreek je doelen met één van onze coaches. We helpen je graag met specifieke voorbereiding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>

            <div className="space-y-4">
              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Moet ik kunnen schaatsen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Je hoeft geen ervaren schaatser te zijn om mee te doen, zeker niet op de kortere afstanden. Maar een beetje kunnen schaatsen helpt wel. De Schaatshal De Vliet is open voor publiek, dus je kunt daar alvast oefenen. Ze bieden ook schaatslessen aan. CrossFit Leiden geeft geen schaatslessen.
                </p>
              </details>

              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Moet ik fit zijn om mee te doen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Als je regelmatig bij CrossFit Leiden traint, heb je al een goede basis. De middenafstand is goed te doen
                  als je 3-4 keer per week traint. Voor de lange afstand is wat meer voorbereiding aan te raden.
                </p>
              </details>

              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Heb ik een speciale fiets nodig?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee, een normale racefiets of hybride fiets is prima. Je hoeft geen tijdritfiets of triatlonfiets.
                  Zorg wel dat je fiets in goede staat is en dat je banden goed opgepompt zijn.
                </p>
              </details>

              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Wat moet ik meenemen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Hardloopschoenen, fiets, helm, schaatsen (kunnen soms gehuurd worden), sportkleding voor alle onderdelen,
                  warme kleding voor tussen de onderdelen, drinken en snacks. Check de website van ZVL-1886 voor de volledige lijst.
                </p>
              </details>

              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Kan ik in teams deelnemen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Check de website van de organisatie voor de actuele regelgeving. Sommige jaren zijn er teamcategorieën,
                  andere jaren alleen individueel. Het kan per editie verschillen.
                </p>
              </details>

              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Hoe lang duurt het evenement?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Dat hangt af van je tempo en de gekozen afstand. De middenafstand duurt gemiddeld 2-3 uur,
                  de lange afstand 4-6 uur. Reken ook tijd voor wissel tussen onderdelen en warming-up.
                </p>
              </details>

              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Zijn er CrossFit Leiden leden die meedoen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Ja! Elk jaar doen verschillende leden mee. Het is altijd gezellig om samen te trainen en op de dag zelf
                  elkaar aan te moedigen. Vraag in de gym wie er meedoet en sluit je aan!
                </p>
              </details>

              <details className="bg-stone-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Wat als het weer slecht is?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Het schaatsen is binnen in de schaatshal, dus dat gaat altijd door. Hardlopen en fietsen zijn buiten,
                  maar het evenement gaat door bij nagenoeg alle weersomstandigheden. Kleed je goed!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor het avontuur?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Train met ons voor het echte leven. De Leidse Wintertriatlon is het perfecte voorbeeld
              waarom we elke dag in de gym staan: om buiten sterker, fitter en zelfverzekerder te zijn.
            </p>
            <button
              onClick={handleRegistration}
              className="inline-block bg-organic-bg text-cinnabar px-10 py-5 rounded-lg font-bold hover:bg-organic-bg/90 transition-all shadow-xl text-lg cursor-pointer"
            >
              Schrijf je nu in voor de Wintertriatlon
            </button>
            <p className="text-sm mt-6 text-white/70">
              Vragen? Kom langs in de gym of stuur ons een bericht. We helpen je graag!
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-organic-text text-gray-400 text-center text-sm">
        <div className="container-custom">
          <p>
            CrossFit Leiden is trotse sponsor van de Leidse Wintertriatlon •
            Georganiseerd door <a href="https://www.zvl-1886.nl" target="_blank" rel="noopener noreferrer" className="text-verdigris hover:underline">ZVL-1886</a>
          </p>
        </div>
      </section>
    </>
  );
}
