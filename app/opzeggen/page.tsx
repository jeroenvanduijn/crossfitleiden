export default function OpzeggenPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-700 to-gray-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Abonnement Opzeggen
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Jammer dat je gaat! We horen graag waarom je stopt, zodat we onze dienstverlening kunnen verbeteren.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Belangrijke informatie</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-gray-700">
              <p>
                <strong>Let op:</strong> Je opzegging moet voor de 1e van de maand zijn ingediend om de volgende maand te stoppen.
              </p>
              <p>
                Je blijft welkom tot het einde van de betaalde periode. Je hebt nog steeds toegang tot alle lessen.
              </p>
              <p>
                Wil je liever even pauzeren? Neem dan contact met ons op – we denken graag met je mee!
              </p>
            </div>
          </div>

          {/* HighLevel Form Embed Placeholder */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Opzegformulier</h3>

            {/* Placeholder for HighLevel form - replace with actual embed code */}
            <div className="bg-white rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
              <p className="text-gray-600 mb-4">
                Hier komt het HighLevel opzegformulier
              </p>
              <p className="text-sm text-gray-500">
                Vervang deze placeholder met de embed code van je HighLevel form
              </p>
              <div className="mt-6 bg-gray-100 rounded p-4">
                <code className="text-xs text-gray-700">
                  {`<iframe src="your-highlevel-form-url" ...></iframe>`}
                </code>
              </div>
            </div>

            {/* Alternative: Direct contact */}
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                Of neem direct contact op:
              </p>
              <div className="space-y-2">
                <p>
                  <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar font-semibold hover:underline">
                    welcome@crossfitleiden.com
                  </a>
                </p>
                <p>
                  <a href="tel:0712340477" className="text-cinnabar font-semibold hover:underline">
                    071 - 234 0477
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mt-12 bg-jonquil/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-center">We horen graag van je</h3>
            <p className="text-gray-700 text-center">
              Jouw feedback helpt ons beter te worden. Wat kunnen we verbeteren?
              Wat vond je goed? Laat het ons weten!
            </p>
          </div>
        </div>
      </section>

      {/* Maybe Reconsider */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Twijfel je nog?</h2>
          <p className="text-gray-700 mb-6">
            Heb je vragen of wil je praten over alternatieven? We denken graag mee over oplossingen.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cinnabar text-white px-8 py-3 rounded-lg font-bold hover:bg-cinnabar/90 transition-all"
          >
            Neem Contact Op
          </a>
        </div>
      </section>
    </>
  );
}
