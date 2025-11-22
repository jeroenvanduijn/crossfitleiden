import Link from "next/link";
import CTA from "@/components/CTA";

export default function Groepslessen() {
  return (
    <>
      {/* Hero - Warm & Welcoming */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CrossFit Groepslessen</h1>
          <p className="text-xl max-w-2xl">
            Train samen in een groep waar iedereen elkaar aanmoedigt. Elke les is anders, altijd uitdagend én altijd aangepast aan jouw niveau.
            Je bent nooit alleen – hier doe je het samen!
          </p>
        </div>
      </section>

      {/* Wat zijn groepslessen - Beginner-friendly */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hoe werken onze groepslessen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze groepslessen zijn de kern van CrossFit Leiden. Elke dag trainen we samen onder begeleiding van een ervaren coach.
              Het mooie? <strong>Je hoeft niet fit te zijn om te beginnen</strong> – we passen alles aan op jouw niveau.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Elke training is anders: vandaag werk je aan kracht, morgen aan conditie, overmorgen aan bewegingskwaliteit.
              Die variatie maakt het leuk én effectief! En het beste: je traint samen met anderen die net zo hard hun best doen als jij.
            </p>
            <div className="bg-cinnabar/10 rounded-xl p-6 mt-6">
              <p className="text-gray-700">
                <strong>💡 Belangrijk om te weten:</strong> Iedereen doet dezelfde training, maar op zijn of haar eigen niveau.
                Beginners gebruiken lichtere gewichten of eenvoudigere bewegingen. Gevorderden maken het uitdagender.
                De coach helpt je kiezen wat bij jou past!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesopbouw - Simplified & Clear */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-center">Hoe ziet een les eruit?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Elke les duurt precies 60 minuten en bestaat uit 4 onderdelen. Zo weet je precies waar je aan begint!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Part 1 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">1. Warming-up</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">10-15 minuten</p>
              <p className="text-gray-700 text-center">
                We starten rustig met bewegen, stretchen en je lichaam voorbereiden. Zo voorkom je blessures en ben je klaar voor de training!
              </p>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">2. Techniek & Kracht</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">10-15 minuten</p>
              <p className="text-gray-700 text-center">
                Oefenen met de bewegingen die je vandaag gaat doen. De coach legt alles uit en let op je techniek.
                Stap voor stap leren we je hoe het moet!
              </p>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">3. Hoofdtraining</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">15-25 minuten</p>
              <p className="text-gray-700 text-center">
                Hier gaan we! Dit is het intensieve deel waar je echt gaat werken. Iedereen doet mee op zijn of haar eigen tempo.
                Samen zweten, elkaar aanmoedigen!
              </p>
            </div>

            {/* Part 4 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">4. Cooling-down</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">5-10 minuten</p>
              <p className="text-gray-700 text-center">
                Rustig uitlopen, stretchen en je lichaam laten herstellen. Perfect moment om even na te praten met de groep!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie - More Personal & Reassuring */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Is dit iets voor mij?</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Kort antwoord: ja! Groepslessen zijn voor iedereen. Hier zijn een paar voorbeelden:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je hebt nog nooit gesport</h3>
                  <p className="text-gray-700">
                    Perfect! 80% van onze leden had geen sportervaring toen ze begonnen.
                    We beginnen bij nul en leren je alles stap voor stap. De coach let extra op je en de groep helpt je op weg.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je bent druk met werk en gezin</h3>
                  <p className="text-gray-700">
                    Daar snappen we alles van! Onze lessen duren precies 60 minuten en zijn super efficiënt.
                    In een uur krijg je een volledige training – geen minuut verspild. We hebben lessen van vroeg tot laat, dus er is altijd wel iets dat past.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je hebt een blessure of fysieke beperking</h3>
                  <p className="text-gray-700">
                    Vertel het gewoon aan de coach! We hebben veel ervaring met het aanpassen van oefeningen.
                    Oude knie? Rugpijn? We werken eromheen en zorgen dat je veilig kunt trainen zonder risico.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je sport al en zoekt nieuwe uitdaging</h3>
                  <p className="text-gray-700">
                    Ook top! We kunnen elke training uitdagender maken met meer gewicht, hogere snelheid of moeilijkere varianten.
                    Je zult nooit meer uitgeleerd raken – CrossFit blijft je uitdagen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tijden & Frequentie - Clear Schedule Info */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wanneer kun je komen?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We hebben dagelijks meerdere lessen, van vroege ochtend tot late avond. Kies wat jou past!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🌅</div>
                <h4 className="font-bold text-xl mb-2">Ochtend</h4>
                <p className="text-gray-600 mb-3">06:30 - 09:00</p>
                <p className="text-sm text-gray-600">Perfect voor de werk, fris en energiek de dag in!</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">☀️</div>
                <h4 className="font-bold text-xl mb-2">Middag</h4>
                <p className="text-gray-600 mb-3">12:00 - 13:00</p>
                <p className="text-sm text-gray-600">Lunchbreak? Trainingsbreak! Perfecte pauze van je werkdag.</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🌙</div>
                <h4 className="font-bold text-xl mb-2">Avond</h4>
                <p className="text-gray-600 mb-3">17:00 - 21:00</p>
                <p className="text-sm text-gray-600">Na het werk of als de kids op bed liggen – tijd voor jezelf!</p>
              </div>
            </div>

            {/* Frequency Recommendation */}
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-bold text-xl mb-4 text-center">Hoe vaak moet ik komen?</h3>
              <p className="text-gray-700 mb-4 text-center">
                We raden <strong>2-3x per week</strong> aan voor goede resultaten, maar je mag zo vaak komen als je wilt met je lidmaatschap.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-lg mb-1">1x per week</p>
                  <p className="text-sm text-gray-600">Goed begin, fitness onderhouden</p>
                </div>
                <div className="text-center p-4 bg-cinnabar/10 rounded-lg border-2 border-cinnabar">
                  <p className="font-bold text-lg mb-1">2-3x per week</p>
                  <p className="text-sm text-gray-600">Aanbevolen! Echt resultaat zien</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-lg mb-1">4-5x per week</p>
                  <p className="text-sm text-gray-600">Voor de fanatiekelingen!</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/rooster" className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all">
                Bekijk het Volledige Rooster
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wat neem je mee - Practical & Friendly */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wat neem je mee naar de les?</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">👕</span>
                  <div>
                    <p className="font-semibold mb-1">Sportkleding</p>
                    <p className="text-sm text-gray-600">Comfortabel en ademend – gewoon je normale sportkleding</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">👟</span>
                  <div>
                    <p className="font-semibold mb-1">Sportschoenen</p>
                    <p className="text-sm text-gray-600">Stabiele schoenen (geen hardloopschoenen) – CrossFit schoenen niet verplicht!</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">💧</span>
                  <div>
                    <p className="font-semibold mb-1">Waterfles</p>
                    <p className="text-sm text-gray-600">Blijf lekker gehydrateerd tijdens de training</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🧴</span>
                  <div>
                    <p className="font-semibold mb-1">Handdoek (optioneel)</p>
                    <p className="text-sm text-gray-600">Voor als je wilt douchen na de les</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">😊</span>
                  <div>
                    <p className="font-semibold mb-1">Goede zin!</p>
                    <p className="text-sm text-gray-600">Dat is eigenlijk het belangrijkste 😉</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-verdigris/10 rounded-lg">
                <p className="text-gray-700 text-center">
                  <strong>💪 Al het trainingsmateriaal hebben wij!</strong><br />
                  <span className="text-sm">Gewichten, touwjes, rowers, bikes – je hoeft niks zelf mee te nemen.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Real Experience */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Wat zeggen anderen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">👩</span>
                  </div>
                  <div>
                    <p className="font-bold">Linda, 42</p>
                    <p className="text-sm text-gray-600">Moeder van 3, sinds 1 jaar lid</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Ik was zo zenuwachtig voor mijn eerste les. Maar iedereen was super aardig en de coach legde alles rustig uit.
                  Nu is het het hoogtepunt van mijn week!"
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨</span>
                  </div>
                  <div>
                    <p className="font-bold">Jeroen, 38</p>
                    <p className="text-sm text-gray-600">15 jaar niet gesport, sinds 6 maanden lid</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Dacht dat ik te oud en te stijf was. Maar de groep trekt je mee en de coach past alles aan.
                  Nu til ik weer makkelijk mijn kinderen op!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA - Using CTA Component */}
      <CTA
        variant="footer"
        title="Klaar om het te proberen?"
        description="Alle nieuwe leden beginnen met een gratis intro. Dit is een ontspannen gesprek van 20-30 minuten waar je niet hoeft te sporten – gewoon kennismaken en kijken of het bij je past!"
        buttonText="Plan Mijn Gratis Intro"
        href="/starten"
      />
    </>
  );
}
