import Link from "next/link";
import CTA from "@/components/CTA";

export default function Rooster() {
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

          {/* Schedule Embed */}
          <div className="bg-gray-50 rounded-xl p-4 md:p-8 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <link rel="stylesheet" href="https://crossfitleiden.sportbitapp.nl/cbm/css/embed/rooster/rooster.css" type="text/css" />
              <script type="text/javascript" src="https://crossfitleiden.sportbitapp.nl/cbm/embed/rooster/cdn/"></script>
              <div id="sportbit-rooster">&nbsp;</div>
              <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `(function(){embed_rooster.init('https://crossfitleiden.sportbitapp.nl/',7);})();`
              }} />
            </div>
          </div>

          {/* Weekly Schedule Preview */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Typische Week Overzicht</h3>
            <p className="text-center text-gray-600 mb-8">Dit is hoe een typische week eruit ziet – handig om te plannen!</p>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {[
                { day: 'Ma', label: 'Maandag' },
                { day: 'Di', label: 'Dinsdag' },
                { day: 'Wo', label: 'Woensdag' },
                { day: 'Do', label: 'Donderdag' },
                { day: 'Vr', label: 'Vrijdag' },
                { day: 'Za', label: 'Zaterdag' },
                { day: 'Zo', label: 'Zondag' }
              ].map((dayInfo, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-center mb-3 text-lg">{dayInfo.day}</h4>
                  <div className="space-y-2 text-sm">
                    {index < 5 ? ( // Weekdays
                      <>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">06:30</p>
                          <p className="text-xs text-gray-600">Groepsles</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">09:00</p>
                          <p className="text-xs text-gray-600">Groepsles</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">12:00</p>
                          <p className="text-xs text-gray-600">Groepsles</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">17:30</p>
                          <p className="text-xs text-gray-600">Groepsles</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">18:30</p>
                          <p className="text-xs text-gray-600">Groepsles</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">19:30</p>
                          <p className="text-xs text-gray-600">Groepsles</p>
                        </div>
                      </>
                    ) : index === 5 ? ( // Saturday
                      <>
                        <div className="bg-jonquil/20 rounded p-2">
                          <p className="font-semibold">09:00</p>
                          <p className="text-xs text-gray-600">Groepsles</p>
                        </div>
                        <div className="bg-jonquil/20 rounded p-2">
                          <p className="font-semibold">10:00</p>
                          <p className="text-xs text-gray-600">Beginners</p>
                        </div>
                        <div className="bg-chinese-violet/20 rounded p-2">
                          <p className="font-semibold">11:00</p>
                          <p className="text-xs text-gray-600">Vrij trainen</p>
                        </div>
                      </>
                    ) : ( // Sunday
                      <div className="text-center text-gray-400 py-4">
                        <p className="text-xs font-semibold">Vrij Trainen</p>
                        <p className="text-xs">10:00 - 12:00</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              * Dit is een voorbeeld rooster. Check het actuele rooster hierboven voor de laatste wijzigingen en beschikbaarheid.
            </p>
          </div>

          {/* Legend */}
          <div className="mt-12 max-w-2xl mx-auto bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold mb-4 text-center">Legenda</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-4 h-4 bg-verdigris/20 rounded mr-3"></div>
                <span className="text-gray-700">Groepslessen - Alle niveaus</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-4 h-4 bg-jonquil/20 rounded mr-3"></div>
                <span className="text-gray-700">Beginners - Extra begeleiding</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-4 h-4 bg-chinese-violet/20 rounded mr-3"></div>
                <span className="text-gray-700">Vrij Trainen - Open Gym</span>
              </div>
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
      <CTA
        variant="footer"
        title="Zie je een tijd die bij jou past?"
        description="Probeer het eerst vrijblijvend met een gratis intro. We laten je de box zien, beantwoorden al je vragen en kijken samen welke lestijden bij jou passen!"
        buttonText="Plan Mijn Gratis Intro"
        href="/starten"
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
