import Link from "next/link";

export default function Groepslessen() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CrossFit Groepslessen</h1>
          <p className="text-xl max-w-2xl">
            Onze kern: gevarieerde, uitdagende WOD's (Workouts of the Day) voor alle niveaus.
            Train samen, motiveer elkaar en word sterker in een community die je steunt.
          </p>
        </div>
      </section>

      {/* Wat zijn groepslessen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat zijn CrossFit Groepslessen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              CrossFit groepslessen zijn de kern van wat we doen bij CrossFit Leiden. Elke dag bieden we meerdere
              lessen waarin je samen met andere leden traint onder begeleiding van een gecertificeerde coach.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              De workouts zijn constant gevarieerd en combineren elementen uit gymnastiek, weightlifting en cardio.
              Het mooie? Elke workout is schaalbaar naar jouw niveau – of je nu een complete beginner bent of al
              jaren sport.
            </p>
          </div>
        </div>
      </section>

      {/* Lesopbouw */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Lesopbouw (60 minuten)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Warming-up</h3>
              <p className="text-sm text-gray-600">10-15 min</p>
              <p className="text-gray-700 mt-2">Mobiliteit en dynamische opwarming</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Skill Work</h3>
              <p className="text-sm text-gray-600">10-15 min</p>
              <p className="text-gray-700 mt-2">Techniek oefenen en kracht opbouwen</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-bold text-lg mb-2">WOD</h3>
              <p className="text-sm text-gray-600">15-25 min</p>
              <p className="text-gray-700 mt-2">De hoofdworkout - hier ga je zweten!</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Cool-down</h3>
              <p className="text-sm text-gray-600">5-10 min</p>
              <p className="text-gray-700 mt-2">Stretching en herstel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Voor wie zijn de groepslessen?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Complete beginners</h3>
                  <p className="text-gray-700">Nog nooit gesport? Geen probleem! We beginnen bij de basis en bouwen langzaam op.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ervaren sporters</h3>
                  <p className="text-gray-700">Al fit? Perfect! We challengen je elke dag met nieuwe workouts en technieken.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Drukke ouders</h3>
                  <p className="text-gray-700">Weinig tijd? Onze 60-minuten lessen zijn super efficiënt en passen in elk schema.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Mensen met blessures</h3>
                  <p className="text-gray-700">Onze coaches passen elke oefening aan zodat je veilig kunt trainen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tijden & Frequentie */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tijden & Frequentie</h2>
            <p className="text-lg text-gray-700 mb-8">
              We bieden dagelijks meerdere groepslessen, van vroege ochtend tot late avond.
              Kies de tijden die bij jouw agenda passen!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-3">🌅</div>
                <h4 className="font-bold mb-2">Ochtend</h4>
                <p className="text-gray-600">06:30 - 09:00</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-3">☀️</div>
                <h4 className="font-bold mb-2">Middag</h4>
                <p className="text-gray-600">12:00 - 13:00</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-3">🌙</div>
                <h4 className="font-bold mb-2">Avond</h4>
                <p className="text-gray-600">17:00 - 21:00</p>
              </div>
            </div>
            <Link href="/rooster" className="cta-button-secondary">
              Bekijk het Volledige Rooster
            </Link>
          </div>
        </div>
      </section>

      {/* Wat neem je mee */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wat neem je mee?</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">👕</span>
                  <span className="text-gray-700">Sportkleding (comfortabel en ademend)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">👟</span>
                  <span className="text-gray-700">Sportschoenen (stabiel, geen hardloopschoenen)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">💧</span>
                  <span className="text-gray-700">Waterfles (blijf gehydrateerd!)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🧴</span>
                  <span className="text-gray-700">Handdoek (optioneel, voor douchen na)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">😊</span>
                  <span className="text-gray-700">Goede zin en positieve energie!</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-6 text-center">
                Al het andere equipment (barbells, kettlebells, rowers, etc.) hebben wij!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te starten?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Probeer een gratis proefles en ervaar zelf hoe onze groepslessen werken.
            Geen verplichtingen, gewoon kennismaken met de community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Plan Gratis Proefles
            </Link>
            <Link href="/tarieven" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cinnabar transition-all">
              Bekijk Tarieven
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
