"use client";

export default function DropIn() {
  const sportbitUrl = "https://crossfitleiden.sportbitapp.nl/web/nl/dropinplanner/kalender";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Train een keer mee bij CrossFit Leiden</h1>
          <p className="text-xl max-w-2xl mb-8">
            In de buurt of wil je onze box proberen? Boek een drop-in en doe mee op jouw niveau. Alleen voor ervaren CrossFitters.
          </p>
          <a
            href={sportbitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-white text-cinnabar border-2 border-cinnabar hover:bg-gray-50"
          >
            Boek een Drop-in
          </a>
        </div>
      </section>

      {/* Hoe werkt het? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe werkt het?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Kies je les</h3>
                  <p className="text-gray-700 mb-3">
                    Selecteer eerst de vestiging <strong>CrossFit Leiden</strong> in SportBit. Vervolgens kies je uit twee lesopties:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>"Training"</strong> (reguliere CrossFit WOD) – drop-in fee €30</li>
                    <li><strong>"HYROX Training"</strong> – €30 voor 60 minuten, €35 voor 90 minuten</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">Andere lessen zijn niet beschikbaar voor drop-ins.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Kies je tijd en boek</h3>
                  <p className="text-gray-700">
                    De beschikbare tijden verschijnen in de kalender. Vul je gegevens in, accepteer de voorwaarden en betaal direct bij het boeken. Er is geen cash of PIN in de gym.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Kom 10 minuten eerder</h3>
                  <p className="text-gray-700">
                    Meld je bij de coach. Rondleiding is afhankelijk van hoe druk de les is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische Info</h2>
            <div className="bg-white rounded-xl p-8 space-y-6 shadow-lg">
              <div>
                <h3 className="font-bold text-lg mb-3">💶 Prijs</h3>
                <ul className="text-gray-700 space-y-1 mb-3">
                  <li>• <strong>Training (WOD)</strong> – €30</li>
                  <li>• <strong>HYROX 60 minuten</strong> – €30</li>
                  <li>• <strong>HYROX 90 minuten</strong> – €35</li>
                </ul>
                <p className="text-sm text-gray-600">Betalen gebeurt direct bij de boeking via SportBit. Geen cash of PIN.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">🎒 Wat neem je mee?</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Sportkleding en schoenen</li>
                  <li>• Waterfles</li>
                  <li>• Handdoek voor douchen (optioneel)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-4">
              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Kan ik ook als beginner een drop-in doen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee. Drop-ins zijn alleen voor mensen met CrossFit-ervaring. Ben je helemaal nieuw? Plan dan eerst een gratis intro.
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Wat kost een drop-in?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Afhankelijk van de les 30 tot 35 euro. Betaling gebeurt online tijdens de boeking.
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Welke les kan ik het beste kiezen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  HYROX Training is vaak iets toegankelijker door minder technische bewegingen en meer conditie. Training (WOD) varieert per dag. Het kan kracht zijn, techniek of conditie. Beide opties zijn geschikt voor ervaren sporters.
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Moet ik van tevoren boeken?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Ja. Je moet altijd vooraf boeken via de drop-in kalender zodat we plek voor je kunnen garanderen.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <section className="section-padding bg-gradient-to-r from-jonquil to-yellow-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Klaar om een keer mee te trainen?</h2>
          <p className="text-xl mb-8 text-gray-900 max-w-2xl mx-auto">
            Boek je drop-in en ervaar de CrossFit Leiden sfeer!
          </p>
          <a
            href={sportbitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-white text-cinnabar border-2 border-cinnabar hover:bg-gray-50"
          >
            Boek een Drop-in
          </a>
        </div>
      </section>
    </>
  );
}
