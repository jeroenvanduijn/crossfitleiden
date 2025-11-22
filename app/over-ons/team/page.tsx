import Link from "next/link";
import CTA from "@/components/CTA";

export default function TeamPage() {
  const coaches = [
    {
      name: "Eva van Dam",
      role: "Head Coach & Eigenaar",
      age: "39 jaar, moeder van 3",
      story: "Ik begon CrossFit Leiden omdat ik zelf worstelde met tijd voor mezelf vinden. Nu help ik andere ouders om diezelfde balans te vinden – zonder schuldgevoel.",
      speciality: "Beginners begeleiden, moeders na zwangerschap",
      qualifications: "CrossFit Level 2, Weightlifting Coach",
      quote: "Elke ouder die hier komt is een held. Jij maakt tijd voor jezelf – dat is het moeilijkste stapje!"
    },
    {
      name: "Mark de Vries",
      role: "Coach & Programmeur",
      age: "42 jaar, vader van 2",
      story: "Had 10 jaar een kantoorlijf en rugklachten. Door CrossFit ben ik sterker dan ooit en kan ik mijn kids weer moeiteloos optillen. Dat gun ik iedereen!",
      speciality: "Functionele kracht, blessurepreventie",
      qualifications: "CrossFit Level 1, Sports Science",
      quote: "Je hoeft niet jong of superfit te zijn. Als je wilt bewegen en sterker worden, ben je bij ons op de juiste plek."
    },
    {
      name: "Lisa Bakker",
      role: "Coach & Voedingsdeskundige",
      age: "36 jaar, ondernemer",
      story: "Als drukke ondernemer dacht ik altijd 'geen tijd'. Tot ik besefte dat 3 uur per week sporten me juist 10x meer energie geeft. Nu help ik anderen hetzelfde te ontdekken.",
      speciality: "Voeding, busy lifestyle coaching",
      qualifications: "CrossFit Level 1, Nutrition Coach",
      quote: "Gezond eten en bewegen hoeft niet ingewikkeld. Kleine stapjes, grote impact – daar help ik je graag bij!"
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
              Gewone mensen die je begrijpen en je helpen sterker te worden. Geen drill-sergeants, gewoon coaches die er voor je zijn.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Coaches</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {coaches.map((coach, index) => (
              <div key={coach.name} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                      {index === 0 ? "👩‍💼" : index === 1 ? "👨‍🏫" : "👩‍⚕️"}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{coach.name}</h3>
                    <p className="text-cinnabar font-semibold mb-1">{coach.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{coach.age}</p>

                    <div className="space-y-4 text-gray-700">
                      <p className="italic">"{coach.story}"</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Specialiteiten:</p>
                          <p className="text-sm">{coach.speciality}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Kwalificaties:</p>
                          <p className="text-sm">{coach.qualifications}</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 border-l-4 border-cinnabar">
                        <p className="text-gray-900 italic">"{coach.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Coaches Matter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Waarom onze coaches het verschil maken</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Onze coaches zijn geen drill-sergeants. Het zijn gewone mensen met drukke levens, net als jij.
              Ze begrijpen hoe het voelt om te twijfelen, om geen tijd te hebben, om onzeker te zijn.
            </p>
            <p>
              <strong>Persoonlijke aandacht staat voorop.</strong> We kennen je naam, we onthouden je doelen,
              en we passen elke training aan op jouw niveau. Of je nu voor het eerst een barbell vasthoudt of al
              jaren traint – je krijgt de begeleiding die jij nodig hebt.
            </p>
            <p>
              Bij CrossFit Leiden coach je geen nummer. Je bent een persoon met een eigen verhaal,
              en we helpen je dat verhaal sterker te maken.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        title="Klaar om kennis te maken?"
        description="Plan je gratis intro en ontmoet het team. Geen verplichtingen, gewoon een goed gesprek over jouw doelen."
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />
    </>
  );
}
