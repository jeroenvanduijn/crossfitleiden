import Link from "next/link";

export default function Rooster() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-jonquil to-jonquil/80 text-gray-900 py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lesrooster</h1>
          <p className="text-xl max-w-2xl">
            Hieronder vind je ons actuele lesrooster. We bieden dagelijks meerdere CrossFit lessen,
            zodat er altijd een tijdstip is dat in jouw agenda past.
          </p>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center">
              Klik op een les voor details of om je aan te melden. Leden kunnen via hun account direct
              inschrijven. Geen account nog? Plan dan eerst een <Link href="/starten" className="text-cinnabar font-semibold hover:underline">gratis proefles</Link>.
            </p>
          </div>

          {/* Schedule Iframe - Placeholder */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="bg-white rounded-lg shadow-inner min-h-[600px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-bold mb-4">Rooster Integratie</h3>
                <p className="text-gray-600 mb-4">
                  Hier komt de iframe van het roostersysteem (bijv. WODify, CrossHero, of Google Calendar)
                </p>
                <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-sm text-gray-700 mb-2 font-mono">
                    {'<iframe src="https://yourschedulesystem.com/...">'}
                  </p>
                  <p className="text-xs text-gray-500">
                    Vervang dit door het echte rooster-embed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Preview (as fallback/example) */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Typische Weekplanning</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map((day, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-center mb-3 text-lg">{day}</h4>
                  <div className="space-y-2 text-sm">
                    {index < 5 ? ( // Weekdays
                      <>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">06:30</p>
                          <p className="text-xs text-gray-600">CrossFit</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">09:00</p>
                          <p className="text-xs text-gray-600">CrossFit</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">12:00</p>
                          <p className="text-xs text-gray-600">CrossFit</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">17:30</p>
                          <p className="text-xs text-gray-600">CrossFit</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">18:30</p>
                          <p className="text-xs text-gray-600">CrossFit</p>
                        </div>
                        <div className="bg-verdigris/10 rounded p-2">
                          <p className="font-semibold">19:30</p>
                          <p className="text-xs text-gray-600">CrossFit</p>
                        </div>
                      </>
                    ) : index === 5 ? ( // Saturday
                      <>
                        <div className="bg-jonquil/20 rounded p-2">
                          <p className="font-semibold">09:00</p>
                          <p className="text-xs text-gray-600">CrossFit</p>
                        </div>
                        <div className="bg-jonquil/20 rounded p-2">
                          <p className="font-semibold">10:00</p>
                          <p className="text-xs text-gray-600">Beginners</p>
                        </div>
                        <div className="bg-jonquil/20 rounded p-2">
                          <p className="font-semibold">11:00</p>
                          <p className="text-xs text-gray-600">Open Gym</p>
                        </div>
                      </>
                    ) : ( // Sunday
                      <div className="text-center text-gray-400 py-4">
                        <p className="text-xs">Open Gym</p>
                        <p className="text-xs">10:00 - 12:00</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              * Dit is een voorbeeld rooster. Check het actuele rooster hierboven voor de laatste wijzigingen.
            </p>
          </div>

          {/* Legend */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h4 className="font-semibold mb-4">Legenda</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-verdigris/20 rounded mr-3"></div>
                <span className="text-gray-700">CrossFit - Alle niveaus</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-jonquil/20 rounded mr-3"></div>
                <span className="text-gray-700">Beginners - Extra begeleiding</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-chinese-violet/20 rounded mr-3"></div>
                <span className="text-gray-700">Open Gym - Vrij trainen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Heb je een les gevonden die je wilt proberen?
          </h2>
          <p className="text-xl mb-8">
            Meld je hier aan voor een gratis proefles, dan reserveren we meteen je plekje!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Plan Gratis Proefles
            </Link>
          </div>
          <p className="text-sm mt-6 text-white/80">
            Ken je iemand die ook wel eens mee wil? Onze leden mogen altijd een vriend(in) meenemen
            voor een proefles!
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Geen idee welke les bij jou past? Stuur ons gerust een{" "}
              <Link href="/contact" className="text-cinnabar font-semibold hover:underline">
                berichtje
              </Link>
              {" "}– we denken graag met je mee.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
