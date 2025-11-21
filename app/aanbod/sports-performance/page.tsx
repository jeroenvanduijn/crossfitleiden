import Link from "next/link";

export default function SportsPerformance() {
  return (
    <>
      <section className="bg-gradient-to-r from-chinese-violet to-indigo-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sports & Performance ⚽🏃</h1>
          <p className="text-xl max-w-2xl">
            Strength & Conditioning voor atleten. Train als een pro, presteer als een kampioen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sports & Performance Training</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze Sports & Performance programma's zijn ontworpen voor atleten die hun sportprestaties naar het volgende niveau
              willen tillen. Of je nu voetbal, hockey, rugby speelt of traint voor een marathon - wij helpen je sterker,
              sneller en explosiver te worden.
            </p>
            <p className="text-lg text-gray-700">
              We combineren CrossFit methodologie met sport-specifieke conditioning en injury prevention om jou de beste
              off-season of in-season training te bieden.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voor welke sporten?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: '⚽', name: 'Voetbal' },
              { icon: '🏑', name: 'Hockey' },
              { icon: '🏉', name: 'Rugby' },
              { icon: '🏃', name: 'Hardlopen' },
              { icon: '🏊', name: 'Zwemmen' },
              { icon: '🚴', name: 'Wielrennen' },
              { icon: '🥊', name: 'Vechtsporten' },
              { icon: '🎾', name: 'Tennis' },
            ].map((sport) => (
              <div key={sport.name} className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">{sport.icon}</div>
                <p className="font-semibold text-sm">{sport.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">En nog veel meer sporten!</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat bieden we?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💥</div>
              <h3 className="text-xl font-bold mb-3">Power & Explosiveness</h3>
              <p className="text-gray-700">Olympic lifts, plyometrics en sprint work voor maximale power output</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold mb-3">Sport-Specific Conditioning</h3>
              <p className="text-gray-700">Energy system work afgestemd op de demands van jouw sport</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Injury Prevention</h3>
              <p className="text-gray-700">Mobility, stability en correctieve oefeningen om blessures te voorkomen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-chinese-violet/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Programma Opties</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Group Training</h3>
                <p className="text-gray-700 mb-3">
                  Train 2-3x per week in een groep met andere atleten. Ideaal voor algemene athletic development.
                </p>
                <p className="font-semibold text-cinnabar">€85/maand</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-chinese-violet">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">Semi-Private (2-4 atleten)</h3>
                  <span className="bg-chinese-violet text-white text-xs px-2 py-1 rounded">POPULAIR</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Sport-specifiek programma met een klein team. Meer persoonlijke aandacht en customization.
                </p>
                <p className="font-semibold text-cinnabar">€150/maand (2x/week)</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">1-on-1 Performance Coaching</h3>
                <p className="text-gray-700 mb-3">
                  Volledig gepersonaliseerd programma inclusief testing, periodization en ongoing adjustments.
                </p>
                <p className="font-semibold text-cinnabar">Op aanvraag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 italic mb-4">
                "Dankzij de S&P training bij CrossFit Leiden ben ik sneller, sterker en explosiever geworden op het voetbalveld.
                Geen blessures meer en ik voel me fitter dan ooit!"
              </p>
              <p className="font-semibold text-gray-900">- Tim, 24, voetballer DESTO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-chinese-violet text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar voor next level performance?</h2>
          <p className="text-xl mb-8">Boek een performance assessment en we bespreken jouw doelen.</p>
          <Link href="/contact" className="bg-white text-chinese-violet px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Boek Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
