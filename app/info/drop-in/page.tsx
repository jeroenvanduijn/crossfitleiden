import Link from "next/link";

export default function DropIn() {
  return (
    <>
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Drop-in 🌍</h1>
          <p className="text-xl max-w-2xl">
            Op reis in Leiden? CrossFit leden van andere boxes zijn altijd welkom voor een drop-in!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is een Drop-in?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Een drop-in is een enkele trainingsessie voor bezoekers die niet lid zijn van CrossFit Leiden.
              Perfect voor CrossFitters die in Leiden op vakantie zijn, op zakenreis zitten of gewoon een keer willen meetrainen.
            </p>
            <p className="text-lg text-gray-700">
              We verwelkomen graag CrossFitters van andere boxes wereldwijd. Het is altijd leuk om nieuwe gezichten en verhalen te horen!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe werkt het?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Boek vooraf</h3>
                  <p className="text-gray-700">Stuur een email naar welcome@crossfitleiden.com of bel 071-234 0477 om je drop-in te boeken. Vermeld welke dag en tijd je wilt komen.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Kom 15 minuten vroeger</h3>
                  <p className="text-gray-700">Zo kun je ons kort ontmoeten, je intekenen en omk leden. We delen een korte intro over onze box en waar alles staat.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Join de WOD</h3>
                  <p className="text-gray-700">Draai gewoon mee met de groepsles. Onze coach weet dat je een drop-in bent en zal extra op je letten. Scaling is altijd mogelijk!</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Geniet!</h3>
                  <p className="text-gray-700">Na de WOD hangen de meeste leden nog wat rond voor een kop koffie. Perfect om mensen te leren kennen!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische Info</h2>
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">💶 Prijs</h3>
                <p className="text-2xl font-bold text-cinnabar mb-1">€20 per drop-in</p>
                <p className="text-sm text-gray-600">Betaling cash of via pin ter plekke</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">📅 Wanneer?</h3>
                <p className="text-gray-700">Drop-ins zijn mogelijk tijdens alle reguliere groepslessen</p>
                <Link href="/rooster" className="text-cinnabar font-semibold hover:underline">
                  Bekijk Rooster →
                </Link>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">🎒 Wat neem je mee?</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Sportkleding & schoenen</li>
                  <li>• Waterfles</li>
                  <li>• Handdoek (voor douchen)</li>
                  <li>• ID of paspoort (voor administratie)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">✋ Belangrijk</h3>
                <p className="text-gray-700">Je moet lid zijn van een andere CrossFit box of ervaring hebben met CrossFit. Geen ervaring? Boek dan een proefles!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-jonquil/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te droppen?</h2>
          <p className="text-xl mb-8">Boek je drop-in en we zien je graag in de box!</p>
          <Link href="/contact" className="bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all inline-block">
            Boek Drop-in
          </Link>
        </div>
      </section>
    </>
  );
}
