import Link from "next/link";
import CTA from "@/components/CTA";

export default function OverOns() {
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
      {/* Hero Section - More Personal */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gewone mensen, buitengewone resultaten
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              CrossFit Leiden is een plek waar drukke ouders, professionals en beginners samen sterker worden.
              Geen oordeel, geen druk – gewoon samen trainen en groeien.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story - Warmer & More Personal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom CrossFit Leiden anders is</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                We zijn geen typische sportschool. CrossFit Leiden is opgericht vanuit een simpele gedachte:
                <strong> iedereen moet zich welkom voelen om te sporten</strong> – ongeacht je leeftijd, fitheid of ervaring.
              </p>
              <p>
                Geen macho-cultuur of intimiderende sfeer. Hier train je naast andere ouders die net zo druk zijn als jij,
                professionals die na een lange werkdag komen, en mensen die misschien 20 jaar niet hebben gesport.
                <strong> Iedereen begint ergens</strong>, en wij helpen je op weg.
              </p>
              <p>
                We begrijpen hoe het voelt om te twijfelen: "Ben ik wel fit genoeg?", "Heb ik wel tijd?", "Pas ik hier wel?"
                Het antwoord is altijd: <strong>ja!</strong> Onze community is gebouwd op support, niet op oordeel.
                Hier kennen we elkaars naam, vieren we elkaars successen (groot of klein), en moedigen we elkaar aan.
              </p>
              <div className="bg-cinnabar/10 rounded-xl p-6">
                <p className="font-semibold text-gray-900 mb-2">
                  💡 Onze missie is simpel:
                </p>
                <p className="text-gray-700">
                  Drukke mensen helpen meer energie, kracht en zelfvertrouwen te vinden – zodat je er niet alleen fitter uitziet,
                  maar je ook beter voelt in je eigen vel. Voor je gezin, je werk, en vooral: voor jezelf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - NEW */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Waar we voor staan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community > Competitie</h3>
              <p className="text-gray-700">
                We zijn geen competitie-gym. Hier train je samen, moedig je elkaar aan en vier je elkaars vooruitgang.
                Vriendschap staat voorop.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Iedereen Welkom</h3>
              <p className="text-gray-700">
                Of je nu 25 of 55 bent, fit of niet, ervaren of beginner – je bent hier welkom zoals je bent.
                Wij passen ons aan jou aan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Persoonlijke Aandacht</h3>
              <p className="text-gray-700">
                Je bent geen nummer bij ons. Onze coaches kennen je naam, je doelen en je uitdagingen.
                We begeleiden je persoonlijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - More Personal Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Maak kennis met je coaches</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Onze coaches zijn meer dan trainers – ze zijn mensen zoals jij, met drukke levens en hun eigen sportreizen.
            Ze snappen wat je doormaakt en helpen je graag verder.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-cinnabar font-semibold mb-1">{coach.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{coach.age}</p>

                  <div className="mb-4">
                    <p className="text-gray-700 italic mb-3">"{coach.story}"</p>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Specialiteit:</p>
                    <p className="text-sm text-gray-600">{coach.speciality}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500">{coach.qualifications}</p>
                  </div>

                  <div className="bg-white rounded-lg p-3 border-l-4 border-verdigris">
                    <p className="text-sm text-gray-700 italic">
                      "{coach.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-verdigris/10 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-700">
              <strong>💬 Vraag ons alles!</strong><br />
              Onze coaches zijn er niet alleen tijdens de les. Twijfel je over een oefening? Blessure? Voedingsvraag?
              Spreek ons gerust aan – we helpen je graag, ook buiten de trainingstijd!
            </p>
          </div>
        </div>
      </section>

      {/* Member Stories - NEW Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Verhalen van onze leden</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Dit zijn echte mensen met drukke levens, net als jij. Lees wat CrossFit Leiden voor hen heeft betekend.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Story 1 */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Sandra, 43</p>
                  <p className="text-sm text-gray-600">Moeder van 2, parttime docent</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Na mijn tweede kind worstelde ik met mijn zelfvertrouwen. Ik durfde niet naar de sportschool – bang voor oordeel.
                Bij CrossFit Leiden werd ik met open armen ontvangen. Iedereen is echt zo aardig! Nu, 1 jaar later, voel ik me sterker dan ooit.
                Niet alleen fysiek, maar ook mentaal."
              </p>
              <p className="text-sm text-cinnabar font-semibold">
                ✨ Resultaat: Meer zelfvertrouwen, 3x per week trainen, nieuwe vriendinnen gemaakt
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Tom, 48</p>
                  <p className="text-sm text-gray-600">Ondernemer, vader van 3</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Ik had 15 jaar niet gesport. Dacht dat ik te oud was om te beginnen met CrossFit. Maar Eva en Mark namen alle tijd
                om me de basics te leren. Nu sport ik 2x per week en heb ik geen last meer van mijn rug. Mijn kids zijn trots dat papa
                weer mee kan voetballen!"
              </p>
              <p className="text-sm text-cinnabar font-semibold">
                ✨ Resultaat: Geen rugklachten meer, veel meer energie, papa die mee kan spelen
              </p>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Nienke, 37</p>
                  <p className="text-sm text-gray-600">Manager, geen kinderen</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Ik kwam voor de fitness, maar bleef voor de community. In mijn drukke baan is CrossFit Leiden mijn uitlaatklep geworden.
                Het uur dat ik hier train is echt mijn 'me-time'. En de groep? Die voelt inmiddels als familie. We appen, gaan samen koffie drinken
                en moedigen elkaar aan."
              </p>
              <p className="text-sm text-cinnabar font-semibold">
                ✨ Resultaat: Betere werk-life balans, minder stress, nieuwe vriendenkring
              </p>
            </div>

            {/* Story 4 */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Lisa, 42</p>
                  <p className="text-sm text-gray-600">Moeder van 3, fulltime baan</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Na mijn derde kind was ik kapot, constant moe. Een vriendin sleepte me mee naar CrossFit Leiden. De eerste maanden deed ik
                het rustig aan, 1x per week. Nu, 8 maanden later, kom ik 3x per week en heb ik meer energie dan voordat ik kinderen kreeg.
                Mijn man zegt: 'Jij bent mijn inspiratie!'"
              </p>
              <p className="text-sm text-cinnabar font-semibold">
                ✨ Resultaat: Veel meer energie, beter slapen, gezondere levensstijl
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Facilities - Simplified */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Kom een keer langs!</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We zitten midden in Leiden en zijn makkelijk bereikbaar. Kom langs voor een kop koffie en een rondleiding!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location Info */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-semibold text-xl mb-4">📍 Locatie</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Rooseveltstraat 49C</strong><br />
                  2321 BM Leiden
                </p>
                <ul className="space-y-2 mt-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span>🚗</span>
                    <span>Gratis parkeren voor de deur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🚴</span>
                    <span>Fietsenstalling beschikbaar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🚌</span>
                    <span>5 min lopen van bushalte</span>
                  </li>
                </ul>
              </div>

              {/* Facilities */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-semibold text-xl mb-4">🏋️ Faciliteiten</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-verdigris flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ruime trainingsruimte (250m²)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-verdigris flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Moderne apparatuur (gewichten, rowers, bikes, rigs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-verdigris flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Schone kleedkamers met douches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-verdigris flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gezellige lounge voor na de training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-verdigris flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Koffie & thee (altijd vers!)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/info/faciliteit" className="text-cinnabar font-semibold hover:underline text-lg inline-flex items-center gap-2">
                Bekijk meer foto's van onze box
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Events - More Specific */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Meer dan alleen trainen</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Bij CrossFit Leiden sport je niet alleen – je wordt deel van een hechte groep mensen die elkaar echt kennen en steunen.
                Of je nu je eerste keer komt of al jaren lid bent, <strong>je hoort erbij</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3">👨‍👩‍👧‍👦 Family Day</h3>
                  <p className="text-gray-700">
                    4x per jaar organiseren we een Family Day waar je partner en kids mee kunnen doen. Laat ze zien waar jij je tijd besteedt!
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3">🎉 Social Events</h3>
                  <p className="text-gray-700">
                    Van borrels tot groepsuitjes – we vinden het leuk om buiten de box ook tijd met elkaar door te brengen.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3">🙋 Bring a Friend</h3>
                  <p className="text-gray-700">
                    Elke maand een speciale les waar je een vriend(in) gratis mee mag nemen. Samen sporten is leuker!
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3">💬 WhatsApp Groep</h3>
                  <p className="text-gray-700">
                    Onze leden-app groep is actief! Van "wie komt er vanavond?" tot het delen van recepten en successen.
                  </p>
                </div>
              </div>

              <p className="text-center italic">
                "Het sociale aspect is net zo belangrijk als de training zelf. Hier vind je niet alleen fitheid, maar ook vriendschap."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Updated */}
      <CTA
        variant="footer"
        title="Wil je ons leren kennen?"
        description="Plan een gratis intro en ontmoet ons team, zie de box en ervaar de sfeer. Geen sporten, gewoon kennismaken over een kop koffie. We kijken ernaar uit!"
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />
    </>
  );
}
