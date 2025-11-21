import Link from "next/link";
import CTA from "@/components/CTA";

export default function OverOns() {
  const coaches = [
    {
      name: "Eva van Dam",
      role: "Head Coach",
      description: "Moeder van 3, gespecialiseerd in beginners begeleiden. Eva ziet elke ouder als een held die tijd voor zichzelf vrijmaakt.",
      qualifications: "CrossFit Level 2, Weightlifting Coach",
      quote: "Ik help je graag om sterker te worden, op jouw tempo."
    },
    {
      name: "Mark de Vries",
      role: "Coach & Programmeur",
      description: "Vader van 2, passie voor functionele fitness. Mark helpt je graag om sterker te worden voor het dagelijks leven.",
      qualifications: "CrossFit Level 1, Sports Science",
      quote: "Training moet passen in je leven, niet andersom."
    },
    {
      name: "Lisa Bakker",
      role: "Coach & Nutrition",
      description: "Specialist in voedingsadvies en lifestyle coaching. Lisa begrijpt de uitdagingen van een druk gezinsleven.",
      qualifications: "CrossFit Level 1, Nutritionist",
      quote: "Gezond eten hoeft niet ingewikkeld te zijn."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meer dan een sportschool – een tweede thuis
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Bij CrossFit Leiden helpen we gewone mensen buitengewoon sterk te worden. 
              Warm, persoonlijk en zonder druk.
            </p>
          </div>
        </div>
      </section>

      {/* Ons Verhaal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ons verhaal</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                CrossFit Leiden is opgericht vanuit een simpele overtuiging: <strong>iedereen verdient een plek waar je je welkom voelt</strong>. 
                Geen macho cultuur, geen competitie, geen oordelen. Gewoon een plek waar je samen sterker wordt.
              </p>
              <p>
                We begrijpen hoe druk het leven kan zijn. Tussen werk, gezin en alle andere verplichtingen door, 
                is het lastig om tijd voor jezelf te maken. En als je dat dan doet, wil je dat het ook écht iets oplevert.
              </p>
              <p>
                Daarom hebben we CrossFit Leiden anders opgezet. Hier ben je geen nummer. We kennen elkaars naam, 
                vieren elkaars successen en helpen elkaar vooruit. Of je nu je eerste push-up doet of al jaren traint – 
                iedereen is welkom en iedereen doet mee op zijn eigen niveau.
              </p>
              <p>
                <strong>Onze slogan "Everyday people, exceptionally strong"</strong> betekent precies dat: 
                gewone mensen die buitengewoon sterk worden. Niet door te concurreren, maar door samen te trainen, 
                elkaar te steunen en kleine stapjes te zetten die grote verschillen maken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ons team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Onze coaches zijn deskundig én down-to-earth. Ze begrijpen wat het is om druk te zijn
            en helpen je graag je doelen te bereiken. Spreek ze gerust aan – ze staan altijd voor je klaar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-cinnabar font-semibold mb-3">{coach.role}</p>
                  <p className="text-gray-700 mb-3">{coach.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{coach.qualifications}</p>
                  <p className="text-sm text-verdigris italic border-l-2 border-verdigris pl-3">
                    "{coach.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom wij */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Waarom CrossFit Leiden?</h2>
            <div className="space-y-6">
              <div className="bg-verdigris/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Warm en persoonlijk</h3>
                <p className="text-gray-700">
                  We kennen je naam en weten wat je doelen zijn. Geen anonieme sportschool, maar een plek waar je je thuis voelt.
                </p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Beginnersvriendelijk</h3>
                <p className="text-gray-700">
                  Nog nooit gesport? Geen probleem. We beginnen bij de basis en bouwen rustig op. Je voelt je meteen welkom.
                </p>
              </div>
              <div className="bg-jonquil/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Community die je steunt</h3>
                <p className="text-gray-700">
                  Je traint samen met mensen die je aanmoedigen. Geen competitie, wel samen vooruitgang boeken.
                </p>
              </div>
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Past bij drukke agenda's</h3>
                <p className="text-gray-700">
                  Vroege ochtend, late avond – altijd een les die past. Flexibel en efficiënt, zodat het past in jouw leven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Facilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Onze locatie</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Je vindt ons aan de <strong>Rooseveltstraat 49C in Leiden</strong>, makkelijk
                bereikbaar met zowel auto als fiets. Parkeren kan gratis voor de deur.
              </p>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-3">Onze voorzieningen:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ruime gymzaal met moderne apparatuur</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gezellige loungehoek voor of na de training</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Schone kleedkamers en douchefaciliteiten</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verdigris mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gratis parkeren voor de deur</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Community & events</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Bij CrossFit Leiden sport je niet alleen, maar samen. Onze leden motiveren elkaar –
                of je nu je eerste push-up doet of je persoonlijke vooruitgang viert, er is altijd een high-five.
              </p>
              <p>
                We organiseren regelmatig leuke events zoals een Family Day, groepsuitjes of een
                'Bring a Friend'-training waar we nieuwe gezichten verwelkomen. Het sociale aspect is
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
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Een verhaal van een lid</h3>
              <p className="text-lg text-gray-700 italic mb-4">
                "Nadat ik mijn tweede kind kreeg, was het lastig om weer fit te worden. Ik voelde me schuldig 
                als ik tijd voor mezelf nam. Bij CrossFit Leiden vond ik de steun van andere ouders en trainers. 
                Nu train ik 2x per week en heb ik meer energie voor mijn gezin én mezelf. Het is mijn momentje 
                voor mezelf geworden."
              </p>
              <p className="font-semibold text-gray-900">– Lisa, 42 jaar, moeder van 2</p>
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
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Plan een gratis No Sweat Intro en ontdek zelf hoe warm en persoonlijk het bij ons is.
          </p>
          <CTA variant="primary-intro-alt2" />
        </div>
      </section>
    </>
  );
}
