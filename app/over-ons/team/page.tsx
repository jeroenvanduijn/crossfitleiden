import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function TeamPage() {
  const coaches = [
    {
      name: "Rochelle",
      role: "Lead Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20rochelle.png",
      story: "Rochelle is turncoach op nationaal niveau en brengt die expertise naar CrossFit Leiden. Ze is geweldig met kinderen en volwassenen, en helpt iedereen om bewegingen veilig te leren. Naast coaching bij ons, traint ze haar turnploeg voor wereldkampioenschappen."
    },
    {
      name: "Saskia",
      role: "General Manager",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/saskia.png",
      story: "Saskia kwam een paar jaar geleden naar CrossFit Leiden om van haar rugpijn af te komen, en het werkte zo goed dat ze van baan veranderde. Ze zorgt ervoor dat alles in de gym soepel loopt en dat iedereen zich welkom voelt."
    },
    {
      name: "Jeffrey Perez Stoof",
      role: "GetShredded Lead Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jef.png",
      story: "Jeffrey was profvoetballer voordat hij CrossFit coach werd. Hij snapt wat het betekent om te presteren én om je op je gemak te voelen. Jeffrey past zijn coaching aan op wat jij nodig hebt, of je nu uitdaging zoekt of juist rustig wilt opbouwen."
    },
    {
      name: "Jari Jansen",
      role: "Movement Specialist",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jari.png",
      story: "Jari geeft small group lessen, de Unlock Motion lessen en workshops. Hij helpt leden met pijn, beperkte mobiliteit of techniek. Als jij ergens last van hebt, is de kans groot dat Jari je kan helpen dit op te lossen."
    },
    {
      name: "Max",
      role: "Kickstart Lead Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20max.png",
      story: "Max heeft jaren ervaring als personal trainer en CrossFit coach. Hij houdt van wandelen en kamperen met zijn familie. Als coach creëert Max een leuke en positieve sfeer waar iedereen zich welkom voelt, ongeacht niveau."
    },
    {
      name: "Annie",
      role: "Voedingscoach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/annie.png",
      story: "Annie helpt leden met praktische voedingsadviezen die passen bij een druk leven. Geen extreme diëten, maar simpele stappen die werken."
    },
    {
      name: "Sem Li",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20sem.png",
      story: "Sem is altijd vrolijk en maakt graag contact met iedereen in zijn lessen. Hij houdt van Olympic weightlifting en staat elke ochtend om 5 uur op om te trainen voordat hij de eerste les geeft. Die toewijding en energie zie je terug in zijn coaching."
    },
    {
      name: "Natália",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Natalia.png",
      story: "Natália komt uit Brazilië en verhuisde in 2022 naar Nederland. Met een diploma in bewegingswetenschappen en een passie voor hardlopen brengt ze creativiteit en positiviteit naar elke les. Ze coacht groepslessen en de Teens sessies met veel energie en geduld."
    },
    {
      name: "Erin",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Erin.png",
      story: "Erin coachte al in 2019 bij CrossFit Leiden en is nu terug. Overdag werkt ze bij Defensie waar ze militairen helpt mentaal sterk te blijven. In haar vrije tijd geeft ze salsalessen. Die combinatie van ritme, focus en veerkracht zie je terug in haar coaching."
    },
    {
      name: "Hoite",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/hoite.png",
      story: "Hoite is een van onze toegewijde coaches die graag met beginners werkt. Hij neemt de tijd om bewegingen goed uit te leggen en zorgt ervoor dat je je op je gemak voelt tijdens de les."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontmoet het Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Kennismaken met de coaches die je begeleiden. Gewoon mensen met een passie voor beweging en community.
            </p>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              CrossFit Leiden is opgericht door Kees en Jeroen, twee vrienden die geloven dat iedereen welkom moet zijn om te sporten.
            </p>

            <div className="bg-gray-50 rounded-2xl overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/jeroen%20en%20kees.png"
                    alt="Jeroen van Duijn & Kees Houwaart"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">De Oprichters</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg text-cinnabar mb-2">Kees Houwaart</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Kees groeide op in een sportschool en ontdekte CrossFit in 2012. Hij startte in 2014 Gymbox Noordwijk. In 2015 richtte hij samen met Jeroen CrossFit Leiden op. Kees woont met zijn vrouw Nathalie en hun twee zoons Neal en Jake in Katwijk aan Zee.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-cinnabar mb-2">Jeroen van Duijn</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Jeroen was altijd actief, van voetbal tot surfen. In 2014 koos hij voor de fitnesswereld en trainde mensen in Chili voordat hij terugkwam naar Nederland. Samen met Kees bouwde hij CrossFit Leiden tot een plek waar iedereen zich thuis voelt. Jeroen woont met zijn vrouw Amanda en dochter Zoe in Katwijk aan Zee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="bg-white rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    In 2015 startten Kees en Jeroen CrossFit Leiden met een simpel idee: een plek waar iedereen welkom is, ongeacht je niveau of ervaring. Wat begon als één gym is uitgegroeid tot een netwerk van sportscholen waar community voorop staat.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-verdigris/10 rounded-xl p-6 text-center">
              <p className="text-gray-700">
                Wil je kennismaken met Kees, Jeroen en het team? Plan een gratis intro en kom een kopje koffie drinken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Ons Coach Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coaches.map((coach) => (
              <div key={coach.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl">👤</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-cinnabar font-semibold mb-4">{coach.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{coach.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Coaches Matter */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Waarom onze coaches het verschil maken</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Onze coaches zijn geen drill-sergeants. Het zijn gewone mensen met drukke levens, net als jij. Ze begrijpen hoe het voelt om te twijfelen of onzeker te zijn.
            </p>
            <p>
              Persoonlijke aandacht staat voorop. We kennen je naam, onthouden je doelen en passen elke training aan op jouw niveau. Of je nu voor het eerst een barbell vasthoudt of al jaren traint, je krijgt de begeleiding die jij nodig hebt.
            </p>
            <p>
              Bij CrossFit Leiden ben je geen nummer, maar een persoon met je eigen verhaal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar om kennis te maken?"
        subtitle="Plan je gratis intro en ontmoet het team. Geen verplichtingen, gewoon een goed gesprek over jouw doelen."
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
