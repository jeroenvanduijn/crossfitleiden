import Link from "next/link";

export default function UnlockMotion() {
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-teal-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Motion Programma 🧘</h1>
          <p className="text-xl max-w-2xl">
            Mobiliteit, flexibiliteit en bewegingskwaliteit. Beweeg beter, presteer sterker en voorkom blessures.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Unlock Motion?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Unlock Motion is ons gespecialiseerde programma gericht op mobiliteit, flexibiliteit en bewegingskwaliteit.
              Perfect voor mensen met stijfheid, pijn of blessures, maar ook voor atleten die hun bewegingspatronen willen verbeteren.
            </p>
            <p className="text-lg text-gray-700">
              Door gerichte mobility work, stretching en corrective exercises leer je je lichaam beter te bewegen,
              waardoor je sterker wordt én minder kans op blessures hebt.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Programma Opbouw</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Movement Assessments</h3>
              <p className="text-gray-700">We analyseren je bewegingspatronen en identificeren beperkingen</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold mb-3">Mobility Sessies</h3>
              <p className="text-gray-700">Gerichte oefeningen voor gewrichtsmobiliteit en flexibiliteit</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Corrective Exercises</h3>
              <p className="text-gray-700">Oefeningen om bewegingspatronen te corrigeren en pijn te verminderen</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Yoga & Stretching</h3>
              <p className="text-gray-700">Elementen van yoga voor ontspanning en flexibiliteit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Voor wie?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-verdigris/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Mensen met chronische pijn of stijfheid</p>
              </div>
              <div className="bg-verdigris/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Herstel van blessures</p>
              </div>
              <div className="bg-verdigris/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Ouderen die mobiel willen blijven</p>
              </div>
              <div className="bg-verdigris/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Atleten die performance willen verbeteren</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-verdigris text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start met Unlock Motion</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kom langs voor een gratis proefles of movement assessment.
          </p>
          <Link href="/starten" className="bg-white text-verdigris px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Plan Proefles
          </Link>
        </div>
      </section>
    </>
  );
}
