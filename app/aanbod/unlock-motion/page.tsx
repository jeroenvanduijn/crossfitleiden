import Link from "next/link";
import CTA from "@/components/CTA";

export default function UnlockMotion() {
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-teal-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Motion: Beweeg Weer Vrij</h1>
          <p className="text-xl max-w-2xl">
            Voor iedereen met een stijve rug, pijnlijke schouders of stramme heupen door te veel zitten.
            Leer weer soepel bewegen zonder pijn – in kleine, rustige groepslessen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Unlock Motion?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Unlock Motion is ons programma voor mensen die stijf, stram of pijnlijk aanvoelen – meestal door te veel zitten,
              een oude blessure, of gewoon ouder worden. Denk aan: lage rugpijn, stijve schouders, krappe heupen, beperkte nek.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In rustige groepslessen (max 8 personen) werken we aan soepeler bewegen door gerichte oefeningen,
              rekken en mobiliteitswerk. Geen intensieve trainingen – gewoon gericht aan je bewegelijkheid werken
              zodat dagelijkse dingen weer makkelijker gaan.
            </p>

            <div className="bg-verdigris/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Goed om te weten:</strong> Dit is geen fysio, maar preventief en herstel-ondersteunend.
                Heb je een acute blessure? Check eerst met je dokter of fysio. Wij werken graag samen met je zorgverlener!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Hoe werkt een les?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">1. Intake & Analyse</h3>
              <p className="text-gray-700 mb-3">
                We starten met een korte intake: waar voel je stijfheid of pijn? Welke bewegingen zijn lastig?
              </p>
              <p className="text-sm text-gray-600">
                Zo kunnen we de lessen afstemmen op jouw specifieke klachten
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold mb-3">2. Gerichte Oefeningen</h3>
              <p className="text-gray-700 mb-3">
                Rustige oefeningen om gewrichten soepeler te maken en spieren te rekken
              </p>
              <p className="text-sm text-gray-600">
                • Mobiliteit voor rug, schouders, heupen, enkels<br />
                • Stretching voor verkrampte spieren<br />
                • Ademhalingsoefeningen voor ontspanning
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">3. Krachtoefeningen (Licht)</h3>
              <p className="text-gray-700 mb-3">
                Oefeningen om zwakke spieren sterker te maken die je gewrichten ondersteunen
              </p>
              <p className="text-sm text-gray-600">
                Niet intensief – gewoon gericht aan stabiliteit werken
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">4. Thuisoefeningen</h3>
              <p className="text-gray-700 mb-3">
                Simpele oefeningen (5-10 min per dag) om thuis je vooruitgang te versnellen
              </p>
              <p className="text-sm text-gray-600">
                Optioneel, maar wel effectief voor sneller resultaat!
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 text-center bg-white rounded-xl p-6">
            <p className="text-gray-700">
              <strong>Een typische les duurt 60 minuten</strong> en bestaat uit rustige mobility work, rekken,
              lichte krachtoefeningen en ontspanning. Tempo is laag, groep is klein (max 8 personen), iedereen op eigen niveau.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat zeggen Deelnemers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik zat 40 uur per week achter mijn bureau en had constant last van mijn onderrug. Na 6 weken Unlock Motion
                ben ik zoveel soepeler en heb ik veel minder pijn. De thuisoefeningen helpen enorm!"
              </p>
              <div>
                <p className="font-semibold">Marieke, 42 jaar</p>
                <p className="text-sm text-gray-600">Kantoorwerk, chronische rugpijn</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik dacht dat stijve schouders en krappe heupen 'erbij hoorden' op mijn leeftijd. Maar na Unlock Motion
                kan ik weer moeiteloos mijn kleinkinderen optillen. Ongelooflijk wat verschil!"
              </p>
              <div>
                <p className="font-semibold">Jan, 58 jaar</p>
                <p className="text-sm text-gray-600">Gepensioneerd, algemene stijfheid</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Na mijn schouderoperatie kreeg ik Unlock Motion aangeraden door mijn fysio. Perfecte aanvulling op mijn revalidatie.
                Rustige opbouw, goede begeleiding, en ik merk echt vooruitgang!"
              </p>
              <div>
                <p className="font-semibold">Peter, 51 jaar</p>
                <p className="text-sm text-gray-600">Herstel na schouderblessure</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik wilde starten met CrossFit maar was zo stijf dat ik niet eens in een squat kon komen. Na 8 weken Unlock Motion
                ben ik overgestapt naar groepslessen en het gaat super!"
              </p>
              <div>
                <p className="font-semibold">Lisa, 39 jaar</p>
                <p className="text-sm text-gray-600">Voorbereiding op CrossFit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Is Unlock Motion iets voor jou?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Dit programma is perfect als je jezelf herkent in een van deze situaties:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Stijve rug, schouders of heupen door kantoorwerk</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Chronische lage rugpijn of nekklachten</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Herstel na een blessure (in overleg met fysio)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Ouder worden en mobiel willen blijven</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Voorbereiding op intensievere trainingen</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Aanvulling op je huidige CrossFit training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische Informatie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">📅 Wanneer?</h3>
                <p className="text-gray-700 mb-2">2x per week, 60 minuten per les</p>
                <p className="text-sm text-gray-600">
                  Bijvoorbeeld: maandagochtend 10:00 & donderdagavond 19:00<br />
                  (Check actuele roostertijden)
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">👥 Groepsgrootte</h3>
                <p className="text-gray-700 mb-2">Maximaal 8 personen per les</p>
                <p className="text-sm text-gray-600">
                  Kleine groep = veel persoonlijke aandacht
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">💰 Kosten</h3>
                <p className="text-gray-700 mb-2">€65 per maand (2x per week)</p>
                <p className="text-sm text-gray-600">
                  Combineer met regulier lidmaatschap voor €20/maand extra
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">🎯 Niveau</h3>
                <p className="text-gray-700 mb-2">Alle niveaus welkom</p>
                <p className="text-sm text-gray-600">
                  Van complete beginners tot gevorderde sporters
                </p>
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
                <h3 className="font-semibold text-lg mb-2">Moet ik al flexibel zijn om te starten?</h3>
                <p className="text-gray-700">
                  Absoluut niet! Dit programma is juist bedoeld voor mensen die NIET flexibel zijn. We werken op jouw niveau
                  en bouwen rustig op. Iedereen start waar ze zijn.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Is dit hetzelfde als yoga?</h3>
                <p className="text-gray-700">
                  Er zijn overeenkomsten (rekken, ademhaling), maar Unlock Motion is meer gericht op functionele mobiliteit
                  en kracht. We gebruiken elementen van yoga, fysio, en strength training. Denk: yoga meets revalidatie.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan dit helpen bij mijn specifieke klacht?</h3>
                <p className="text-gray-700">
                  Voor veel voorkomende klachten (lage rugpijn, stijve schouders, krappe heupen) werkt Unlock Motion goed.
                  Twijfel je? Kom een gratis intro doen en bespreek je klacht met een coach. We werken graag samen met je fysio!
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Hoe snel zie ik resultaat?</h3>
                <p className="text-gray-700">
                  De meeste mensen merken al na 2-3 weken verschil in bewegelijkheid en pijn. Voor blijvend resultaat
                  raden we minimaal 8-12 weken aan. Daarna kun je vaak terugschalen naar 1x per week onderhoud.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik dit combineren met CrossFit lessen?</h3>
                <p className="text-gray-700">
                  Ja, zeker! Veel CrossFitters volgen Unlock Motion als aanvulling op hun training. Het helpt je beter bewegen,
                  voorkomt blessures en verbetert je prestaties. Perfecte combinatie!
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Wat moet ik meenemen naar een les?</h3>
                <p className="text-gray-700">
                  Gewoon comfortabele sportkleding en een waterfles. Yogamatten en alle materialen zijn aanwezig.
                  Eventueel een handdoekje voor eigen comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        title="Klaar om weer soepel te bewegen?"
        description="Begin met een gratis intro. We bespreken je klachten, leggen uit hoe Unlock Motion werkt, en kijken of het bij je past. Geen verplichtingen!"
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over Unlock Motion of twijfel je of dit iets voor jou is?{" "}
              <Link href="/contact" className="text-verdigris font-semibold hover:underline">
                Neem contact met ons op
              </Link>
              {" "}– we denken graag met je mee!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
