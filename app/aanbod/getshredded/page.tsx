import Link from "next/link";

export default function GetShredded() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-orange-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GetShredded Programma 🔥</h1>
          <p className="text-xl max-w-2xl">
            6-12 weken intensief transformatieprogramma. Focus op vetverbranding, spierbehoud en een complete lifestyle reset.
          </p>
        </div>
      </section>

      {/* Wat is GetShredded */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is GetShredded?</h2>
            <p className="text-lg text-gray-700 mb-4">
              GetShredded is ons gestructureerde 6-12 weken transformatieprogramma specifiek ontworpen voor mensen die
              serieus willen afvallen, in shape willen komen en hun lichaam willen transformeren.
            </p>
            <p className="text-lg text-gray-700">
              Het is meer dan alleen trainen – we combineren intensieve workouts met een op maat gemaakt voedingsplan,
              progress tracking en community support. Samen zorgen we dat je jouw doel bereikt!
            </p>
          </div>
        </div>
      </section>

      {/* Programma opbouw */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat krijg je?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-bold mb-3">Training Schema</h3>
              <p className="text-gray-700 mb-3">4-5x per week specifieke workouts gericht op fat loss en muscle retention</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HIIT cardio sessies</li>
                <li>• Strength training</li>
                <li>• Metabolic conditioning</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold mb-3">Voedingsplan</h3>
              <p className="text-gray-700 mb-3">Persoonlijk voedingsplan afgestemd op jouw doelen en voorkeuren</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Macro berekening</li>
                <li>• Meal prep tips</li>
                <li>• Recepten & ideeën</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
              <p className="text-gray-700 mb-3">Wekelijkse check-ins en metingen om vooruitgang te monitoren</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Body composition</li>
                <li>• Foto's voor/na</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Community Support</h3>
              <p className="text-gray-700 mb-3">Exclusieve WhatsApp groep met andere GetShredded deelnemers</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dagelijkse motivatie</li>
                <li>• Tips & tricks delen</li>
                <li>• Accountability partners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Is dit voor jou?</h2>
            <p className="text-lg text-gray-700 mb-8">
              GetShredded is perfect als je:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-cinnabar/5 rounded-lg p-6">
                <p className="text-gray-700">✅ Serieus wilt afvallen (5+ kg)</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-6">
                <p className="text-gray-700">✅ Gecommiteerd bent aan 4-5x trainen per week</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-6">
                <p className="text-gray-700">✅ Bereid bent om je voeding aan te passen</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-6">
                <p className="text-gray-700">✅ Graag in een groep wordt gemotiveerd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultaten */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Verwachte Resultaten</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-cinnabar mb-2">-5 tot -12 kg</div>
                <p className="text-gray-700">Vetverbranding</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-cinnabar mb-2">+15%</div>
                <p className="text-gray-700">Kracht toename</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-cinnabar mb-2">100%</div>
                <p className="text-gray-700">Meer energie</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              * Resultaten variëren per persoon en zijn afhankelijk van commitment en consistentie
            </p>
          </div>
        </div>
      </section>

      {/* Start data & Pricing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Data & Investering</h2>
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                We starten 4x per jaar met een nieuwe GetShredded cohort:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Januari, April, Juli, Oktober</strong></p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-2xl font-bold text-cinnabar mb-2">€495</p>
                <p className="text-gray-600">Voor 12 weken programma (alles inclusief)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar voor je transformatie?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schrijf je in voor de volgende GetShredded ronde en start je reis naar een fitter, sterker en gezonder lichaam.
          </p>
          <Link href="/contact" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Schrijf je In
          </Link>
        </div>
      </section>
    </>
  );
}
