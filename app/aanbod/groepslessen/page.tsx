import Link from "next/link";
import CTA from "@/components/CTA";

export default function Groepslessen() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Groepslessen</h1>
          <p className="text-xl max-w-2xl">
            Train op jouw niveau, samen met anderen die je steunen
          </p>
        </div>
      </section>

      {/* 2. Wat is dit? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat zijn groepslessen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Groepslessen zijn de kern van wat we doen bij CrossFit Leiden. Elke dag bieden we meerdere
              lessen waarin je samen met andere leden traint onder begeleiding van een gecertificeerde coach.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              De trainingen zijn elke dag anders en combineren kracht, conditie en beweeglijkheid. 
              Het mooie? Elke training past zich aan jouw niveau aan – of je nu een complete beginner bent of al
              jaren sport.
            </p>
            <p className="text-lg text-gray-700">
              Je traint samen, motiveert elkaar en wordt sterker in een community die je steunt. 
              Geen competitie, wel samen vooruitgang boeken.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Voor wie? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Voor wie zijn de groepslessen?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Beginners</h3>
                  <p className="text-gray-700">Nog nooit gesport? Geen probleem! We beginnen bij de basis en bouwen langzaam op. Je voelt je meteen welkom.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Drukke ouders</h3>
                  <p className="text-gray-700">Weinig tijd? Onze 60-minuten lessen zijn super efficiënt en passen in elk schema. Vroege ochtend of late avond.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Mensen met blessures</h3>
                  <p className="text-gray-700">Onze coaches passen elke oefening aan zodat je veilig kunt trainen. Geef het aan en we houden er rekening mee.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-6">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Iedereen die sterker wil worden</h3>
                  <p className="text-gray-700">Of je nu al fit bent of net begint – iedereen is welkom. We trainen samen en helpen elkaar vooruit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Wat maakt dit CFL? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wat maakt onze groepslessen bijzonder?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-verdigris/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Warm en persoonlijk</h3>
                <p className="text-gray-700">Onze coaches kennen je naam en weten wat je doelen zijn. Geen anonieme sportschool, maar een tweede thuis.</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Veilig en goed begeleid</h3>
                <p className="text-gray-700">Techniek staat voorop. Onze coaches zorgen dat je op een veilige manier sterker wordt en letten op je vorm.</p>
              </div>
              <div className="bg-jonquil/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Community die je steunt</h3>
                <p className="text-gray-700">Je traint samen met mensen die je aanmoedigen. Geen competitie, wel samen vooruitgang boeken.</p>
              </div>
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Aangepast aan jouw niveau</h3>
                <p className="text-gray-700">Elke training past zich aan jou aan. Of je nu net begint of al jaren traint – iedereen doet mee op zijn eigen niveau.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hoe werkt het? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Hoe werkt een groepsles? (60 minuten)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Warming-up</h3>
              <p className="text-sm text-gray-600 mb-2">10-15 min</p>
              <p className="text-gray-700 mt-2 text-sm">Mobiliteit en dynamische opwarming om je lichaam voor te bereiden</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Techniek oefenen</h3>
              <p className="text-sm text-gray-600 mb-2">10-15 min</p>
              <p className="text-gray-700 mt-2 text-sm">We oefenen technieken en bouwen kracht op, aangepast aan jouw niveau</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Hoofdtraining</h3>
              <p className="text-sm text-gray-600 mb-2">15-25 min</p>
              <p className="text-gray-700 mt-2 text-sm">De hoofdtraining – hier ga je zweten! Aangepast aan jouw niveau</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Cool-down</h3>
              <p className="text-sm text-gray-600 mb-2">5-10 min</p>
              <p className="text-gray-700 mt-2 text-sm">Stretching en herstel om je lichaam te laten herstellen</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Praktische Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische informatie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Tijden</h3>
                <p className="text-gray-700 mb-4">
                  We bieden dagelijks meerdere lessen, van vroege ochtend tot late avond.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌅</span>
                    <span className="text-gray-700">Ochtend: 06:30 - 09:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">☀️</span>
                    <span className="text-gray-700">Middag: 12:00 - 13:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌙</span>
                    <span className="text-gray-700">Avond: 17:00 - 21:00</span>
                  </div>
                </div>
                <Link href="/rooster" className="inline-block mt-4 text-cinnabar font-semibold hover:underline">
                  Bekijk het volledige rooster →
                </Link>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Wat neem je mee?</h3>
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
                <p className="text-sm text-gray-600 mt-4">
                  Al het andere materiaal (barbells, kettlebells, rowers, etc.) hebben wij!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Mini Social Proof */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Wat zeggen onze leden?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-700 italic mb-4">
                  "Ik was bang dat ik niet fit genoeg was. Maar de groepslessen zijn zo toegankelijk! 
                  Iedereen doet mee op zijn eigen niveau en de coaches helpen je echt vooruit."
                </p>
                <p className="font-semibold text-gray-900">- Sarah, 35</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-700 italic mb-4">
                  "De community is geweldig. Je wordt echt gesteund door anderen. 
                  Ik train nu 3x per week en voel me sterker dan ooit!"
                </p>
                <p className="font-semibold text-gray-900">- Mark, 42</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Mini FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Veelgestelde Vragen</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Moet ik fit zijn om mee te doen?</h3>
              <p className="text-gray-700">
                Nee! Onze groepslessen zijn juist bedoeld om je fit te máken. We passen elke training aan op jouw niveau. 
                Je zult zien dat er allerlei niveaus meedoen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Hoe vaak moet ik komen?</h3>
              <p className="text-gray-700">
                We raden 2-3x per week aan voor het beste resultaat, maar zelfs 1x per week is al een goed begin! 
                Consistentie is belangrijker dan frequentie.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat als ik een blessure heb?</h3>
              <p className="text-gray-700">
                Geen probleem! Onze coaches hebben ervaring met het aanpassen van trainingen. 
                Geef je blessure aan en we zorgen dat je veilig kunt trainen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te starten?</h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Plan een gratis No Sweat Intro en ervaar zelf hoe onze groepslessen werken.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Geen verplichtingen, gewoon kennismaken met de community!
          </p>
          <CTA variant="primary-intro-alt2" />
        </div>
      </section>
    </>
  );
}
