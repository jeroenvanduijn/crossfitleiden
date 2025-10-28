import Link from "next/link";

export default function Aanbod() {
  const services = [
    {
      icon: "🏋️",
      title: "CrossFit Groepslessen",
      description: "Onze kern: gevarieerde, uitdagende WOD's (Workouts of the Day) voor alle niveaus.",
      features: [
        "60 minuten intensieve training",
        "Maximaal 12 personen per groep",
        "Persoonlijke aandacht van coaches",
        "Scaling opties voor elk niveau",
        "Multiple tijden per dag"
      ]
    },
    {
      icon: "🎯",
      title: "Beginners Programma",
      description: "Nieuw met CrossFit? Geen zorgen – we begeleiden je vanaf dag één.",
      features: [
        "Extra aandacht aan techniek en veiligheid",
        "Maandelijkse introductieles voor beginners",
        "Rustige sfeer om de basics te leren",
        "Direct instappen mogelijk"
      ]
    },
    {
      icon: "👤",
      title: "Personal Training",
      description: "Wil je 1-op-1 begeleiding of specifieke aandacht voor jouw doelen?",
      features: [
        "Persoonlijke coaching op afspraak",
        "Focus op jouw specifieke doelen",
        "Techniek verfijning",
        "Extra motivatie en begeleiding"
      ]
    },
    {
      icon: "🍎",
      title: "Voedingsadvies",
      description: "Gezond eten is het halve werk – wij helpen je op weg.",
      features: [
        "Persoonlijk voedingsadvies",
        "Tips voor drukke ouders",
        "Praktische meal planning",
        "Begeleiding bij lifestyle verandering"
      ]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ons Aanbod</h1>
          <p className="text-xl max-w-2xl">
            Onze trainingen zijn gevarieerd, uitdagend en altijd aanpasbaar. Of je nu een doorgewinterde
            sporter bent of net begint – bij elke WOD vind je jouw niveau.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700">
              We trainen in kleine groepen met veel persoonlijke aandacht, zodat iedereen veilig en
              effectief kan meedoen. De oefeningen zijn functioneel en helpen om sterker te worden
              in het dagelijks leven.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Times Highlight */}
      <section className="section-padding bg-verdigris/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Flexibel Rooster</h2>
            <p className="text-lg text-gray-700 mb-8">
              We bieden dagelijks meerdere lestijden, zodat er altijd een moment is dat in jouw
              drukke agenda past. Van vroege ochtend tot late avond – we got you!
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
            <Link href="/rooster" className="cta-button-secondary">
              Bekijk het Volledige Rooster
            </Link>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Meer dan alleen training</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Bij CrossFit Leiden denken we breder dan alleen workouts. Het gaat om een holistische
              aanpak: training, voeding, mindset en community. Zo werk je aan een complete lifestyle
              verandering die past in je drukke leven.
            </p>
            <div className="bg-cinnabar/5 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Wat maakt ons anders?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-xl">•</span>
                  We wisselen intensieve oefeningen af met korte pauzes – zo werk je efficiënt aan je conditie
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-xl">•</span>
                  Functionele bewegingen die je in het dagelijks leven helpen (denk: tillen, bukken, dragen)
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-xl">•</span>
                  Constant variërende workouts – je verveelt je nooit
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-xl">•</span>
                  Samen zweten = samen groeien – de groepsdynamiek motiveert
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weet je het al zeker?
          </h2>
          <p className="text-xl mb-8">
            Plan meteen je proefles en doe mee!
          </p>
          <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Plan Gratis Proefles
          </Link>
        </div>
      </section>
    </>
  );
}
