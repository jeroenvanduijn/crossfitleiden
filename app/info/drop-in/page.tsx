import IntroCtaSection from "@/components/IntroCtaSection";

export default function DropIn() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Train een keer mee bij CrossFit Leiden</h1>
          <p className="text-xl max-w-2xl mb-8">
            Ben je in de buurt of wil je onze box een keer proberen? Boek een drop-in en doe mee op jouw niveau.
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                (window as any).openCFLPopup();
              }
            }}
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-white text-cinnabar border-2 border-cinnabar hover:bg-gray-50"
          >
            Boek een Drop-in
          </button>
        </div>
      </section>

      {/* Hoe werkt een drop-in? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe werkt een drop-in?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Kies je les in het rooster</h3>
                  <p className="text-gray-700">Bekijk ons rooster en kies een les die past bij jouw niveau en beschikbaarheid. Alle lessen zijn geschikt voor drop-ins.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Boek je drop-in en vul je gegevens in</h3>
                  <p className="text-gray-700">Stuur ons een bericht via het contactformulier of bel ons op. We nemen direct contact met je op om alles te bevestigen.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Kom 10 minuten eerder en meld je bij de coach</h3>
                  <p className="text-gray-700">Zo hebben we even tijd om kennis te maken, je rond te leiden en je voor te bereiden op de training.</p>
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
                <h3 className="font-bold text-lg mb-2">💶 Prijs</h3>
                <p className="text-2xl font-bold text-cinnabar mb-1">€20 per drop-in</p>
                <p className="text-sm text-gray-600">Betaling cash of via pin ter plekke</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">🎒 Wat neem je mee?</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Sportkleding & schoenen</li>
                  <li>• Waterfles</li>
                  <li>• Handdoek (optioneel, voor douchen)</li>
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
                  Ja! Onze coaches passen de oefeningen aan naar jouw niveau. Als je helemaal nieuw bent met CrossFit, raden we wel aan om eerst ons Kickstart Programma te doen – daar leer je alle basisbewegingen in een veilige omgeving met extra begeleiding.
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Wat kost een drop-in?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Een drop-in kost €20 per sessie. Je kunt betalen via pin of contant na afloop van de les.
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Welke les kan ik het beste kiezen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Onze reguliere "Training" lessen zijn het meest geschikt voor een drop-in. Deze lessen zijn full-body workouts die je op elk niveau kunt doen. Kijk in het rooster voor de tijden die jou het beste passen!
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Moet ik van tevoren boeken?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Ja, we vragen je om van tevoren contact op te nemen zodat we weten dat je komt en genoeg plek hebben in de les. Stuur ons een bericht of bel ons even!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar om een keer mee te trainen?"
        subtitle="Boek je drop-in en ervaar de CrossFit Leiden sfeer!"
        buttonLabel="Boek een Drop-in"
      />
    </>
  );
}
