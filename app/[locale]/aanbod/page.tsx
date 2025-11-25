import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Aanbod() {
  return (
    <>
      {/* Hero - Result-focused */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ons Aanbod</h1>
          <p className="text-xl max-w-2xl">
            Van gewone groepslessen tot speciale programma's – we hebben voor iedereen iets.
            Elk programma is volledig aanpasbaar aan jouw niveau, ervaring en doelen.
          </p>
        </div>
      </section>

      {/* Intro - Beginner Reassurance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Waar wil je mee beginnen?</h2>
            <p className="text-lg text-gray-700">
              Nieuw met sporten? Geen probleem – onze <strong>groepslessen</strong> zijn perfect om te starten.
              Al ervaren of op zoek naar iets specifieks? Dan zijn onze speciale programma's misschien wat voor jou!
            </p>
          </div>

          {/* Main Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Kickstart */}
            <div className="bg-gradient-to-br from-verdigris/10 to-verdigris/5 rounded-2xl p-8 border-2 border-verdigris relative">
              <div className="absolute top-4 right-4 bg-verdigris text-white text-xs font-bold px-3 py-1 rounded-full">
                START HIER
              </div>
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Kickstart Programma</h3>
              <p className="text-gray-700 mb-6">
                Perfect voor beginners! 4 weken intensive onboarding waar je alles leert over CrossFit in kleine groepjes. Na afloop ben je klaar voor de groepslessen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">4 weken intensive begeleiding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Max 5 personen per groep</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Inclusief voedingsadvies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Geen ervaring nodig</span>
                </li>
              </ul>
              <Link href="/kickstart" className="block text-center bg-verdigris text-white py-3 px-6 rounded-lg font-semibold hover:bg-verdigris/90 transition-all">
                Meer over Kickstart
              </Link>
            </div>

            {/* Groepslessen - PRIMAIR */}
            <div className="bg-gradient-to-br from-cinnabar/10 to-cinnabar/5 rounded-2xl p-8 border-2 border-cinnabar relative">
              <div className="absolute top-4 right-4 bg-cinnabar text-white text-xs font-bold px-3 py-1 rounded-full">
                MEEST GEKOZEN
              </div>
              <div className="text-6xl mb-4">🏋️</div>
              <h3 className="text-2xl font-bold mb-3">CrossFit Groepslessen</h3>
              <p className="text-gray-700 mb-6">
                De basis en favoriet van 90% van onze leden. Train samen in een groep waar iedereen elkaar aanmoedigt.
                Perfect voor beginners én gevorderden!
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">60 minuten per les, alles inbegrepen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Max 12 personen - persoonlijke aandacht</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Volledig aangepast op jouw niveau</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Elke dag meerdere tijden beschikbaar</span>
                </li>
              </ul>
              <Link href="/aanbod/groepslessen" className="block text-center bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all mb-3">
                Meer over Groepslessen
              </Link>
              <Link href="/starten" className="block text-center text-cinnabar font-semibold hover:underline">
                Of plan meteen een gratis intro →
              </Link>
            </div>

            {/* Private Coaching */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3">Personal Training</h3>
              <p className="text-gray-700 mb-6">
                1-op-1 begeleiding voor specifieke doelen, blessures of als je extra aandacht wilt.
                Jouw coach, jouw training, jouw tempo.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Persoonlijk trainingsplan op maat</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Focus op jouw specifieke doelen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Perfecte techniek verfijning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexibel in te plannen</span>
                </li>
              </ul>
              <Link href="/aanbod/private-coaching" className="block text-center bg-verdigris text-white py-3 px-6 rounded-lg font-semibold hover:bg-verdigris/90 transition-all">
                Meer over Personal Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Speciale Programma's</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Op zoek naar iets specifieks? Deze programma's combineren groepslessen met extra focus op bepaalde doelen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Small Group Training */}
            <Link href="/aanbod/small-group" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">Small Group Training</h3>
              <p className="text-sm text-gray-700 mb-3">
                Train met max 5 personen en krijg een programma op maat. Inclusief GetShredded en Unlock Motion.
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>

            {/* Hyrox */}
            <Link href="/aanbod/hyrox" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">HYROX Training</h3>
              <p className="text-sm text-gray-700 mb-3">
                Voorbereiding op Hyrox races. Gecombineerde conditie en kracht training voor dit populaire evenement.
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>

            {/* Fysiofabriek */}
            <Link href="/aanbod/fysiofabriek" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">🩺</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">Fysiofabriek</h3>
              <p className="text-sm text-gray-700 mb-3">
                Professionele fysiotherapie en revalidatie. Specialistische begeleiding bij blessures en pijn.
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>

            {/* Nutrition */}
            <Link href="/nutrition" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">🍎</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">Voeding</h3>
              <p className="text-sm text-gray-700 mb-3">
                80% van resultaat komt van voeding. Leer gezond eten zonder strenge diëten. Voor drukke mensen!
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Youth Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Voor de Jongeren</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Omdat fitte kinderen fitte volwassenen worden. Onze jeugdprogramma's zijn speciaal ontworpen voor verschillende leeftijden.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/aanbod/pre-teens" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4 text-center">👧👦</div>
              <h3 className="text-xl font-bold mb-2 text-center">Pre-teens (8-12 jaar)</h3>
              <p className="text-gray-700 text-center text-sm">
                Leren bewegen op een leuke, speelse manier. Basis technieken en groepsdynamiek.
              </p>
            </Link>

            <Link href="/aanbod/teens" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4 text-center">🧑‍🎓</div>
              <h3 className="text-xl font-bold mb-2 text-center">Teens (13-17 jaar)</h3>
              <p className="text-gray-700 text-center text-sm">
                Kracht en conditie opbouwen in een veilige omgeving. Focus op techniek en gezonde gewoontes.
              </p>
            </Link>

            <Link href="/aanbod/sport-performance" className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4 text-center">⚽</div>
              <h3 className="text-xl font-bold mb-2 text-center">Sport & Performance</h3>
              <p className="text-gray-700 text-center text-sm">
                Voor jonge atleten die beter willen worden in hun sport. Functionele conditioning.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Times Highlight */}
      <section className="section-padding bg-verdigris/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Flexibel Rooster</h2>
            <p className="text-lg text-gray-700 mb-8">
              We bieden dagelijks meerdere lestijden, van vroege ochtend tot late avond.
              Er is altijd wel een moment dat bij jou past!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-2">🌅</div>
                <h4 className="font-semibold mb-1">Ochtend</h4>
                <p className="text-gray-600">06:00 - 09:00</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-2">☀️</div>
                <h4 className="font-semibold mb-1">Middag</h4>
                <p className="text-gray-600">12:00 - 13:00</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-2">🌙</div>
                <h4 className="font-semibold mb-1">Avond</h4>
                <p className="text-gray-600">17:00 - 21:00</p>
              </div>
            </div>
            <Link href="/rooster" className="inline-block bg-verdigris text-white px-8 py-4 rounded-lg font-semibold hover:bg-verdigris/90 transition-all">
              Bekijk het Volledige Rooster
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Waarom CrossFit Leiden?</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Wat maakt onze trainingen anders dan een reguliere sportschool?
            </p>
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <strong>Kleine groepen (max 12 personen)</strong> – Geen massale gyms waar je op jezelf bent. Hier krijg je persoonlijke aandacht.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <strong>Professionele coaching</strong> – Elke les wordt begeleid door gecertificeerde coaches die je techniek verbeteren en motiveren.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <strong>Functionele bewegingen</strong> – We trainen bewegingen die je ook in het dagelijks leven helpen (tillen, bukken, dragen, rennen).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <strong>Variatie</strong> – Elke dag is anders. Je verveelt je nooit en je lichaam blijft verrast.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div>
                    <strong>Community</strong> – Je traint niet alleen, maar met een groep die elkaar steunt en motiveert. Dat maakt het verschil!
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Nog twijfelen?"
        subtitle="Plan een gratis intro en ervaar zelf waarom zoveel mensen hier trainen. Geen verplichtingen, gewoon kennismaken en kijken of het bij je past!"
        buttonLabel="Plan Mijn Gratis Intro"
      />
    </>
  );
}
