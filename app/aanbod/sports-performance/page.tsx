import Link from "next/link";
import CTA from "@/components/CTA";

export default function SportsPerformance() {
  return (
    <>
      <section className="bg-gradient-to-r from-chinese-violet to-indigo-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Voor Sporters: Word Beter in Je Sport</h1>
          <p className="text-xl max-w-2xl">
            Kracht & Conditietraining speciaal voor atleten. Word sterker, sneller, explosie ver en voorkom blessures
            – zodat je beter presteert in je eigen sport.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom Kracht & Conditie voor Sporters?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze Sports Performance programma's zijn ontworpen voor atleten die hun sportprestaties willen verbeteren.
              Of je nu voetbal, hockey, rugby speelt of traint voor een hardloopwedstrijd – een sterker en fitter lichaam
              maakt je beter in je sport.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We combineren kracht training, snelheidstraining en sport-specifieke conditie, plus blessurepreventie
              zodat je fit blijft én beter presteert.
            </p>

            <div className="bg-chinese-violet/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Goed om te weten:</strong> We werken samen met verschillende sportclubs en teams in Leiden.
                Programma's kunnen off-season (buitenseizoen) of in-season (tijdens het seizoen) zijn, afgestemd op je wedstrijdschema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor welke sporten */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Voor Welke Sporten?</h2>
          <p className="text-center text-gray-700 mb-8">
            Onze training werkt voor praktisch elke sport. We passen de oefeningen aan op wat jij nodig hebt:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: '⚽', name: 'Voetbal', detail: 'Snelheid & explosiviteit' },
              { icon: '🏑', name: 'Hockey', detail: 'Kracht & uithoudingsvermogen' },
              { icon: '🏉', name: 'Rugby', detail: 'Power & contact-kracht' },
              { icon: '🏃', name: 'Hardlopen', detail: 'Beenkracht & core-stabiliteit' },
              { icon: '🏊', name: 'Zwemmen', detail: 'Totale lichaamskracht' },
              { icon: '🚴', name: 'Wielrennen', detail: 'Beenkracht & stamina' },
              { icon: '🥊', name: 'Vechtsporten', detail: 'Explosiviteit & conditie' },
              { icon: '🎾', name: 'Racketsporten', detail: 'Snelheid & reactie' },
            ].map((sport) => (
              <div key={sport.name} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{sport.icon}</div>
                <p className="font-semibold text-sm mb-1">{sport.name}</p>
                <p className="text-xs text-gray-600">{sport.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Doe je een andere sport? Geen probleem – we passen het programma aan op jouw sport!
          </p>
        </div>
      </section>

      {/* Wat bieden we */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat Train Je Bij Ons?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">💥</div>
              <h3 className="text-xl font-bold mb-3">Kracht & Explosiviteit</h3>
              <p className="text-gray-700 mb-3">
                Train om harder te kunnen schieten, hoger te springen, sneller te accelereren
              </p>
              <p className="text-sm text-gray-600">
                Olympisch gewichtheffen, plyometrische oefeningen en sprint-training
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold mb-3">Sport-Specifieke Conditie</h3>
              <p className="text-gray-700 mb-3">
                Conditie-opbouw die past bij jouw sport (bijv. korte sprints voor voetbal, lange duur voor hardlopen)
              </p>
              <p className="text-sm text-gray-600">
                Afgestemd op de energie die jouw sport vraagt
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Blessurepreventie</h3>
              <p className="text-gray-700 mb-3">
                Bewegelijkheid, stabiliteit en corrigerende oefeningen om blessures te voorkomen
              </p>
              <p className="text-sm text-gray-600">
                Blijf fit en mis minder wedstrijden door blessures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programma opties */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Programma Opties</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Groepstraining</h3>
                <p className="text-gray-700 mb-3">
                  Train 2-3x per week in een groep met andere atleten. Algemene kracht & conditie training.
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Perfect voor: Recreatieve sporters, off-season training, algemene fitheid
                </p>
                <p className="font-semibold text-chinese-violet">€85 per maand</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-chinese-violet">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">Semi-Private (2-4 sporters)</h3>
                  <span className="bg-chinese-violet text-white text-xs px-2 py-1 rounded">POPULAIR</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Sport-specifiek programma met een klein team. Meer persoonlijke aandacht en programma op maat.
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Perfect voor: Competitieve sporters, teams, specifieke doelen (bijv. sneller worden, hoger springen)
                </p>
                <p className="font-semibold text-chinese-violet">€150 per maand (2x per week)</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">1-op-1 Performance Coaching</h3>
                <p className="text-gray-700 mb-3">
                  Volledig gepersonaliseerd programma inclusief testing, periodisering en continue bijsturing.
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Perfect voor: Topsporters, mensen met specifieke eisen, voorbereiding op belangrijke wedstrijden
                </p>
                <p className="font-semibold text-chinese-violet">Op aanvraag (vanaf €250/maand)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat Sporters Zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Sinds ik hier train ben ik sneller, sterker en explodeer ik beter op het veld. Ik had vorig
                seizoen constant hamstringklachten, dit seizoen geen enkele blessure!"
              </p>
              <div>
                <p className="font-semibold">Tim, 24 jaar</p>
                <p className="text-sm text-gray-600">Voetballer DESTO, eredivisie amateurvoetbal</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Als hardloper had ik altijd last van zwakke benen en kniepijn. De kracht training hier heeft me
                veel sterker gemaakt en ik loop nu snellere tijden zonder pijn!"
              </p>
              <div>
                <p className="font-semibold">Sophie, 31 jaar</p>
                <p className="text-sm text-gray-600">Recreatief hardloper, halve marathon</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ons hockeyteam doet samen de semi-private training in de off-season. We zijn als team veel fitter
                en sterker geworden. Aanrader voor elk team!"
              </p>
              <div>
                <p className="font-semibold">Laura, 27 jaar</p>
                <p className="text-sm text-gray-600">Hockey hoofdklasse dames</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik ben wielrenner en wilde meer beenkracht opbouwen voor klimmen. Na 12 weken merk ik echt verschil –
                ik kan veel meer power leveren op de fiets!"
              </p>
              <div>
                <p className="font-semibold">Martijn, 35 jaar</p>
                <p className="text-sm text-gray-600">Wielrenner, amateurs</p>
              </div>
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
                <h3 className="font-semibold text-lg mb-2">Wordt dit niet te veel naast mijn eigen sport?</h3>
                <p className="text-gray-700">
                  Nee, we stemmen de training af op jouw wedstrijdschema. In-season (tijdens het seizoen) trainen we lichter
                  en focussen we op onderhoud. Off-season (buitenseizoen) bouwen we op aan kracht en conditie.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Moet ik ervaring hebben met gewichttraining?</h3>
                <p className="text-gray-700">
                  Nee! We leren je alles vanaf nul. Goede techniek is belangrijker dan zware gewichten. We bouwen rustig op.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik dit doen als ik recreatief sport?</h3>
                <p className="text-gray-700">
                  Ja! Je hoeft geen prof te zijn. We hebben recreatieve voetballers, weekend-hardlopers, hobbyisten –
                  iedereen die beter wil worden in hun sport is welkom.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Werken jullie met teams?</h3>
                <p className="text-gray-700">
                  Ja! We werken regelmatig met teams (voetbal, hockey, rugby). Semi-private groepen zijn perfect voor teams.
                  Neem contact op voor team-tarieven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        title="Klaar om Beter te Presteren?"
        description="Boek een gratis performance assessment (30 min). We testen je huidige niveau, bespreken je sportdoelen, en stellen een plan op. Daarna kun je beslissen welk programma bij je past!"
        buttonText="Boek Gratis Assessment"
        href="/contact"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over sports performance training?{" "}
              <Link href="/contact" className="text-chinese-violet font-semibold hover:underline">
                Neem contact met ons op
              </Link>
              {" "}– we helpen je graag!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
