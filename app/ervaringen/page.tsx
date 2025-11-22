import Link from "next/link";

export default function Ervaringen() {
  const testimonials = [
    {
      name: "Marieke",
      age: 39,
      subtitle: "moeder van 2",
      photo: "👩",
      story: `Ik dacht altijd dat ik geen tijd had voor sport naast mijn baan en kinderen. Toch ben ik vorig
              jaar bij CrossFit Leiden begonnen – beste beslissing ooit! In het begin was ik doodmoe na elke
              les, maar al snel merkte ik dat ik juist méér energie kreeg in het dagelijks leven. De coaches
              hielden rekening met mijn knieblessure en de groep moedigde me elke keer aan. Nu, een jaar later,
              ben ik 8 kilo lichter, slaap ik beter en heb ik nieuwe vrienden gemaakt. Als ik het kan, kan jij
              het ook – echt waar!`,
      memberSince: "2022"
    },
    {
      name: "Peter",
      age: 45,
      subtitle: "vader van 3 tieners",
      photo: "👨",
      story: `Toen mijn jongste tiener werd, besefte ik dat ik mezelf helemaal was vergeten. Via een collega
              hoorde ik over CrossFit Leiden en dacht: waarom niet? De vroege ochtendlessen passen perfect vóór
              werk. Wat me verraste was de samenhorigheid – iedereen is er voor elkaar. Door de functionele
              oefeningen voel ik me sterker bij het tillen en verplaatsen thuis. En de stress van mijn drukke
              baan? Verdampt na een goede WOD. CrossFit is nu een vast onderdeel van mijn leven geworden.`,
      memberSince: "2021"
    },
    {
      name: "Lisa & Tom",
      age: 42,
      subtitle: "ouders, sporten samen",
      photo: "👫",
      story: `We zochten samen naar een sport die we konden delen, naast ons drukke gezinsleven. CrossFit
              Leiden bleek de perfecte match. We vonden sportscholen altijd een beetje eng, maar hier voelden
              we ons direct op ons gemak. De community is echt speciaal – je mist de training en de mensen als
              je een week niet gaat. Voor ons is het niet alleen fitness, maar ook quality time samen. En onze
              kinderen vinden het stoer dat papa en mama zo sterk zijn geworden!`,
      memberSince: "2023"
    },
    {
      name: "Sandra",
      age: 38,
      subtitle: "moeder van 1, ondernemer",
      photo: "👩",
      story: `Als ondernemer en moeder had ik altijd het gevoel dat ik tekort schoot – ofwel in mijn bedrijf,
              ofwel thuis. CrossFit Leiden heeft me geleerd om ook tijd voor mezelf te nemen zonder schuldgevoel.
              De coaches zijn zo begripvol en de andere leden zitten in hetzelfde schuitje. Nu ben ik niet alleen
              fysiek sterker, maar ook mentaal. Ik kan beter omgaan met stress en heb meer zelfvertrouwen.
              Bovendien is het gewoon gezellig – de koffie na de training met de anderen is vaak het hoogtepunt
              van mijn dag!`,
      memberSince: "2022"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-chinese-violet to-chinese-violet/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ervaringen van onze Leden</h1>
          <p className="text-xl max-w-2xl">
            Laat je inspireren door de verhalen van onze leden. Zij waren ooit net als jij benieuwd
            of CrossFit bij hen zou passen – en kijk waar ze nu staan. 💪
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              <strong>Echte ouders, echte resultaten</strong> – lees hun verhalen in hun eigen woorden.
              Deze verhalen laten zien dat het mogelijk is om fit te worden, zelfs met een druk leven
              vol werk, kinderen en andere verplichtingen.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center bg-white rounded-2xl shadow-lg p-8 md:p-12`}
              >
                {/* Photo */}
                <div className="w-48 h-48 bg-gradient-to-br from-verdigris/20 to-cinnabar/20 rounded-full flex-shrink-0 flex items-center justify-center text-7xl">
                  {testimonial.photo}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">
                      {testimonial.name} ({testimonial.age})
                    </h3>
                    <p className="text-cinnabar font-semibold">{testimonial.subtitle}</p>
                    <p className="text-sm text-gray-500 mt-1">Lid sinds {testimonial.memberSince}</p>
                  </div>

                  <div className="text-lg text-gray-700 space-y-3">
                    {testimonial.story.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>

                  {/* Quote styling for last paragraph */}
                  {testimonial.name === "Marieke" && (
                    <p className="mt-4 text-verdigris font-semibold italic">
                      "Als ik het kan, kan jij het ook – echt waar!"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat onze leden zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-cinnabar mb-2">95%</div>
              <p className="text-gray-700">
                Voelt zich energieker in het dagelijks leven
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-verdigris mb-2">87%</div>
              <p className="text-gray-700">
                Heeft nieuwe vriendschappen gesloten
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-jonquil mb-2">92%</div>
              <p className="text-gray-700">
                Kan beter omgaan met stress
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            * Gebaseerd op interne ledenenquête 2024
          </p>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Bekijk hun verhalen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-5xl mb-3">🎥</div>
                <p className="text-gray-700 font-semibold">Video: Marieke's verhaal</p>
                <p className="text-sm text-gray-500 mt-2">
                  Embed YouTube/Instagram video hier
                </p>
              </div>
            </div>
            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-5xl mb-3">🎥</div>
                <p className="text-gray-700 font-semibold">Video: Peter's journey</p>
                <p className="text-sm text-gray-500 mt-2">
                  Embed YouTube/Instagram video hier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Community in Beeld</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-4xl">📸</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Volg ons op{" "}
            <a
              href="https://instagram.com/crossfitleiden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cinnabar font-semibold hover:underline"
            >
              Instagram
            </a>{" "}
            voor dagelijkse impressies van onze community!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ben jij klaar om jouw eigen verhaal te schrijven? 📖
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Doe een eerste stap net als deze leden. Plan een gratis intro en ontdek wat
            CrossFit Leiden voor jou kan betekenen.
          </p>
          <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Start Jouw Reis
          </Link>
        </div>
      </section>
    </>
  );
}
