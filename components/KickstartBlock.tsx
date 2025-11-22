import Link from "next/link";

export default function KickstartBlock() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start veilig en sterk met onze Kickstart
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              De Kickstart is ons 28-dagen beginnersprogramma, speciaal ontworpen voor mensen zonder ervaring.
              Je hoeft geen topsporter te zijn. Geen extreme conditie. Gewoon beginnen, op jouw tempo, met persoonlijke begeleiding.
            </p>
            <p>
              Perfect voor drukke ouders die structuur zoeken, mensen die lang niet hebben gesport,
              of iedereen die CrossFit wel interessant vindt maar het nog spannend vindt.
              Wij zorgen ervoor dat je veilig en vol vertrouwen begint.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Voor wie is het */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Voor wie is de Kickstart?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Beginners</strong> die nog nooit CrossFit hebben gedaan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Drukke ouders</strong> die structuur en flexibiliteit zoeken
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Mensen die lang niet hebben gesport</strong> en rustig willen opbouwen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Mensen met blessures of onzekerheid</strong> over hun lichaam
                </span>
              </li>
            </ul>
          </div>

          {/* Wat zit erin */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Wat zit er in de Kickstart?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">2–3 lessen per week</strong> op jouw eigen niveau
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Persoonlijke begeleiding</strong> van ervaren coaches
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Techniektraining</strong> en veilige opbouw
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Voeding &amp; leefstijl basics</strong> voor duurzame resultaten
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Community onboarding</strong> – je leert mensen kennen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Check-ins en evaluatie</strong> halverwege en aan het einde
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hoe werkt het */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Hoe begin je?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Stap 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-jonquil rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Plan een Gratis Intro
              </h4>
              <p className="text-gray-600">
                Een persoonlijk gesprek van 20–30 minuten. Geen workout, geen druk.
                We luisteren naar jouw verhaal en doelen.
              </p>
            </div>

            {/* Stap 2 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-verdigris rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Kennismaking met de Kickstart
              </h4>
              <p className="text-gray-600">
                Tijdens de intro leggen we uit hoe de Kickstart werkt en beantwoorden we al je vragen.
                Alles op jouw tempo.
              </p>
            </div>

            {/* Stap 3 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-cinnabar rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Start jouw 28-dagen traject
              </h4>
              <p className="text-gray-600">
                Begin met de Kickstart op een moment dat jou uitkomt.
                Veilig, persoonlijk begeleid, en helemaal op jouw niveau.
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Wat anderen zeggen
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Quote 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Ik was altijd bang dat CrossFit te heftig zou zijn. De Kickstart liet zien dat ik het op mijn eigen tempo kon doen.
                Na 28 dagen voelde ik me zoveel sterker en zekerder."
              </p>
              <p className="text-gray-900 font-semibold">
                Lisa, 38 jaar
              </p>
              <p className="text-gray-500 text-sm">
                Moeder van twee kinderen
              </p>
            </div>

            {/* Quote 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Ik had 15 jaar niet gesport. De Kickstart was perfect om rustig op te bouwen.
                De coaches namen alle tijd en iedereen was super vriendelijk."
              </p>
              <p className="text-gray-900 font-semibold">
                Peter, 45 jaar
              </p>
              <p className="text-gray-500 text-sm">
                Begonnen zonder sportervaring
              </p>
            </div>

            {/* Quote 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Als drukke moeder vond ik het lastig om tijd te maken. De Kickstart gaf me structuur en
                ik merkte dat 2-3 keer per week echt genoeg was om resultaat te zien."
              </p>
              <p className="text-gray-900 font-semibold">
                Marieke, 39 jaar
              </p>
              <p className="text-gray-500 text-sm">
                Moeder van drie, fulltime baan
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto bg-gradient-to-r from-jonquil/10 via-jonquil/5 to-transparent rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Plan een gratis, vrijblijvend gesprek. We nemen alle tijd om je vragen te beantwoorden
            en te kijken of de Kickstart bij jou past.
          </p>
          <Link
            href="/starten"
            className="inline-block bg-jonquil text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-jonquil/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Plan een Gratis Intro
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Geen verplichtingen, gewoon kennismaken
          </p>
        </div>
      </div>
    </section>
  );
}
