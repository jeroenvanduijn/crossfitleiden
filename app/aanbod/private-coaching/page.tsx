import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function PrivateCoaching() {
  return (
    <>
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Private Coaching: 1-op-1 Begeleiding</h1>
          <p className="text-xl max-w-2xl">
            Persoonlijke training op jouw tijd, helemaal afgestemd op jouw doelen en situatie.
            Perfect als je specifieke aandacht nodig hebt of graag in je eigen tempo werkt.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Private Coaching?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bij private coaching train je 1-op-1 met een van onze coaches. Geen groep, geen afleiding –
              alleen jij en je coach die 100% gefocust is op jouw vooruitgang, techniek en doelen.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Elke sessie wordt volledig afgestemd op jou: wat je wilt bereiken, waar je mee worstelt,
              en wat past bij je lichaam en je leven. Flexibele tijden, op jouw tempo, met maximale resultaten.
            </p>

            <div className="bg-chinese-violet/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Goed om te weten:</strong> Private coaching is duurder dan groepslessen, maar levert vaak
                sneller resultaat op doordat alles 100% op jou is afgestemd. Veel mensen combineren het:
                1-2x private + groepslessen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voordelen van 1-op-1 Coaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Volledig Persoonlijk Programma</h3>
              <p className="text-gray-700 mb-3">
                Jouw training wordt 100% afgestemd op jouw doelen, blessures, beperkingen en voorkeuren
              </p>
              <p className="text-sm text-gray-600">
                Of je nu wilt afvallen, sterker worden, of herstellen van een blessure – je coach maakt een plan specifiek voor jou
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-3">Volledige Aandacht</h3>
              <p className="text-gray-700 mb-3">
                Je coach kijkt elke seconde naar jouw techniek en geeft direct feedback
              </p>
              <p className="text-sm text-gray-600">
                Geen wachten tot de coach bij jou is zoals in groepslessen – alle aandacht gaat naar jou
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Flexibele Planning</h3>
              <p className="text-gray-700 mb-3">
                Train wanneer het jou uitkomt – ochtend vroeg, middag pauze, of 's avonds laat
              </p>
              <p className="text-sm text-gray-600">
                Perfect voor onregelmatige werkschema's of als groepslestijden niet bij je passen
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Sneller Resultaat</h3>
              <p className="text-gray-700 mb-3">
                Doordat alles op jou is afgestemd, bereik je doelen vaak veel sneller
              </p>
              <p className="text-sm text-gray-600">
                Minder tijd verspillen aan oefeningen die niet bij je passen – elke minuut telt
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🤫</div>
              <h3 className="text-xl font-bold mb-3">Geen Groepsdruk</h3>
              <p className="text-gray-700 mb-3">
                Perfect als je onzeker bent, liever niet in een groep werkt, of extra tijd nodig hebt
              </p>
              <p className="text-sm text-gray-600">
                Niemand die meekijkt – alleen jij en je coach in een veilige, ondersteunende omgeving
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Techniek Perfectie</h3>
              <p className="text-gray-700 mb-3">
                Leer bewegingen perfect uitvoeren voordat je aan intensiteit toevoegt
              </p>
              <p className="text-sm text-gray-600">
                Ideaal om sterke fundamenten te leggen of om slechte gewoontes te doorbreken
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Verhalen van Private Coaching Cliënten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik heb jaren geblesseerd rondgelopen. Met private coaching kon mijn coach elke beweging controleren
                en aanpassen. Na 12 sessies ben ik eindelijk pijnvrij en kan ik weer sporten. Goud waard!"
              </p>
              <div>
                <p className="font-semibold">Tom, 44 jaar</p>
                <p className="text-sm text-gray-600">Herstel van rugblessure</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik was doodsbang om in een groep te trainen. Private coaching gaf me de ruimte om op mijn eigen tempo
                te leren zonder me onzeker te voelen. Nu train ik zelfs in groepslessen!"
              </p>
              <div>
                <p className="font-semibold">Emma, 37 jaar</p>
                <p className="text-sm text-gray-600">Van 0 naar groepslessen in 8 weken</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Mijn werkschema is chaotisch en groepslessen passen er nooit in. Met private coaching train ik wanneer
                ik kan – vroeg in de ochtend of laat in de avond. Super flexibel!"
              </p>
              <div>
                <p className="font-semibold">Jasper, 41 jaar</p>
                <p className="text-sm text-gray-600">Consultant met veel reizen</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik wilde snel resultaat voor mijn vakantie. 10 private sessies in 5 weken, 100% focus op afvallen
                en sterker worden. Ik verloor 6 kilo en voelde me geweldig. Het werkt echt!"
              </p>
              <div>
                <p className="font-semibold">Sophie, 39 jaar</p>
                <p className="text-sm text-gray-600">Intensief 5-weken programma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Is Private Coaching iets voor jou?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Private coaching is perfect als je jezelf herkent in een van deze situaties:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Herstel van een blessure met specifieke beperkingen</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Onzeker of nerveus om in een groep te trainen</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Onregelmatig werkschema waardoor groepslessen niet passen</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Specifiek doel (afvallen, sterker, wedstrijd) met tijdslimiet</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Complete beginner die techniek perfect wil leren</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Extra aandacht nodig voor specifieke bewegingen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pakketten & Tarieven */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pakketten & Tarieven</h2>
            <p className="text-center text-gray-700 mb-8">
              Alle sessies zijn 60 minuten 1-op-1 training. Grotere pakketten = lagere prijs per sessie.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">Losse Sessie</h3>
                    <p className="text-sm text-gray-600">60 minuten 1-op-1 training</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cinnabar">€75</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Perfect om te proberen of voor incidentele begeleiding</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">5 Sessies Pakket</h3>
                    <p className="text-sm text-gray-600">5x 60 minuten • €70 per sessie</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cinnabar">€350</p>
                    <p className="text-sm text-green-600 font-semibold">Bespaar €25</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Goed voor korte focus (bijv. techniek perfectioneren)</p>
              </div>

              <div className="bg-chinese-violet/10 border-2 border-chinese-violet rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      10 Sessies Pakket
                      <span className="bg-chinese-violet text-white text-xs px-2 py-1 rounded">POPULAIR</span>
                    </h3>
                    <p className="text-sm text-gray-600">10x 60 minuten • €65 per sessie</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cinnabar">€650</p>
                    <p className="text-sm text-green-600 font-semibold">Bespaar €100</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-semibold">
                  💡 Beste prijs-kwaliteit voor serieuze resultaten (2-3 maanden 1x per week)
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">Maandabonnement</h3>
                    <p className="text-sm text-gray-600">4x per maand • €60 per sessie</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cinnabar">€240/maand</p>
                    <p className="text-sm text-green-600 font-semibold">Beste deal!</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Voor langdurige begeleiding (minimaal 3 maanden commitment)</p>
              </div>
            </div>

            <div className="mt-8 bg-verdigris/10 rounded-xl p-6">
              <p className="text-gray-700 text-sm">
                <strong>💡 Combinatie met groepslessen?</strong> Veel mensen doen 1-2x private per maand als aanvulling
                op hun groepslidmaatschap (€35/maand extra voor 2x private). Vraag naar de combi-deals!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Hoe vaak moet ik trainen voor resultaat?</h3>
                <p className="text-gray-700">
                  Dat hangt van je doel af. Voor techniek leren: 5-10 sessies is vaak genoeg. Voor blijvende resultaten
                  (afvallen, sterker): minimaal 1x per week voor 8-12 weken. Veel mensen starten met 2x per week en
                  schalen af naar 1x per week onderhoud.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Welke coach krijg ik?</h3>
                <p className="text-gray-700">
                  Tijdens het intakegesprek bespreken we jouw doelen en koppelen we je aan de coach die het beste bij je past
                  (bijv. specialisatie in blessures, afvallen, of kracht). Je houdt dezelfde coach voor continuïteit.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik later overstappen naar groepslessen?</h3>
                <p className="text-gray-700">
                  Absoluut! Veel mensen starten met private coaching om techniek te leren en stappen daarna over naar
                  groepslessen. We helpen je graag met de overgang op het juiste moment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Hoe flexibel is het plannen?</h3>
                <p className="text-gray-700">
                  Zeer flexibel! Je spreekt tijden af met je coach die bij jullie beiden passen. Annuleren kan tot
                  24 uur van tevoren. Ideaal voor onregelmatige schema's.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Wat als ik niet tevreden ben?</h3>
                <p className="text-gray-700">
                  Na de eerste sessie kun je kosteloos stoppen als het niet bij je past. Daarna geldt voor pakketten:
                  ongebruikte sessies kun je binnen 3 maanden omzetten of terugkrijgen (minus €25 administratie).
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Krijg ik ook een voedingsplan?</h3>
                <p className="text-gray-700">
                  Op verzoek wel! Vooral bij doelen zoals afvallen combineren we training met voedingsadvies.
                  Dit is inclusief in de prijs – geen extra kosten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar voor persoonlijke begeleiding?"
        subtitle="Start met een gratis intakegesprek (30 min). We bespreken jouw doelen, welke coach bij je past, en stellen een plan op. Daarna kun je beslissen of private coaching iets voor jou is. Geen verplichtingen!"
        buttonLabel="Boek Gratis Intakegesprek"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over private coaching of twijfel je tussen groepslessen en 1-op-1?{" "}
              <Link href="/contact" className="text-chinese-violet font-semibold hover:underline">
                Neem contact met ons op
              </Link>
              {" "}– we helpen je graag de juiste keuze maken!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
