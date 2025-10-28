import Link from "next/link";

export default function OverOns() {
  const coaches = [
    {
      name: "Eva van Dam",
      role: "Head Coach",
      description: "Moeder van 3, gespecialiseerd in beginners begeleiden. Eva ziet elke ouder als een held die tijd voor zichzelf vrijmaakt.",
      qualifications: "CrossFit Level 2, Weightlifting Coach"
    },
    {
      name: "Mark de Vries",
      role: "Coach & Programmeur",
      description: "Vader van 2, passie voor functionele fitness. Mark helpt je graag om sterker te worden voor het dagelijks leven.",
      qualifications: "CrossFit Level 1, Sports Science"
    },
    {
      name: "Lisa Bakker",
      role: "Coach & Nutrition",
      description: "Specialist in voedingsadvies en lifestyle coaching. Lisa begrijpt de uitdagingen van een druk gezinsleven.",
      qualifications: "CrossFit Level 1, Nutritionist"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Everyday people, exceptionally strong
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Gewone mensen buitengewoon sterk – dát is waar CrossFit Leiden voor staat.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ons Verhaal</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                CrossFit Leiden is opgericht vanuit de overtuiging dat iedereen zich welkom moet voelen
                in de sportschool. Geen macho cultuur, maar een plek waar vriendschap en vooruitgang hand
                in hand gaan.
              </p>
              <p>
                We bieden een warm, informeel klimaat waar 'gewone' mensen buitengewoon sterk kunnen worden
                – onze slogan zegt het al. Hier ben je geen nummer; we kennen elkaars naam en vieren elkaars
                successen.
              </p>
              <p>
                We begrijpen de uitdagingen van drukke ouders en willen hen helpen balans en energie te
                vinden zonder schuldgevoel. CrossFit Leiden is meer dan een sportschool – het is een
                tweede thuis waar je samen vooruitgang boekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ons Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Onze coaches zijn deskundig én down-to-earth. Ze begrijpen wat het is om druk te zijn
            en helpen je graag je doelen te bereiken.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-cinnabar font-semibold mb-3">{coach.role}</p>
                  <p className="text-gray-700 mb-3">{coach.description}</p>
                  <p className="text-sm text-gray-500">{coach.qualifications}</p>
                  <p className="text-sm text-verdigris mt-3 italic">
                    "Spreek me gerust aan op de vloer – ik help je graag!"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Facilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Onze Locatie & Faciliteiten</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Je vindt ons aan de <strong>Rooseveltstraat 49C in Leiden</strong>, makkelijk
                bereikbaar met zowel auto als fiets. Parkeren kan gratis voor de deur.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-3">Onze voorzieningen:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ruime gymzaal met moderne CrossFit apparatuur
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gezellige loungehoek voor of na de WOD
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Schone kleedkamers en douchefaciliteiten
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gratis parkeren voor de deur
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Events */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Community & Events</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Bij CrossFit Leiden sport je niet alleen, maar samen. Onze leden motiveren elkaar –
                of je nu je eerste push-up doet of je PR verbreekt, er is altijd een high-five.
              </p>
              <p>
                We organiseren regelmatig leuke events zoals een Family Day, groepsuitjes of een
                'Bring a Friend'-workout waar we nieuwe gezichten verwelkomen. Het sociale aspect is
                net zo belangrijk als de training zelf.
              </p>
              <p>
                Veel van onze leden zijn ouders, dus je bent niet de enige in die levensfase.
                Hier vind je zowel fitheid als vriendschap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Lidverhaal</h3>
              <p className="text-lg text-gray-700 italic mb-4">
                "Nadat ik mijn tweede kind kreeg, was het lastig om weer fit te worden. Bij CrossFit
                Leiden vond ik de steun van andere ouders en trainers. Nu heb ik meer energie voor
                mijn gezin en mezelf."
              </p>
              <p className="font-semibold text-gray-900">– Lisa, 42 jaar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enthousiast geworden om deel uit te maken van onze community?
          </h2>
          <p className="text-xl mb-8">
            Probeer het zelf met een gratis proefles.
          </p>
          <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Plan je Proefles
          </Link>
        </div>
      </section>
    </>
  );
}
