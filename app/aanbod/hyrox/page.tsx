import Link from "next/link";
import CTA from "@/components/CTA";

export default function Hyrox() {
  return (
    <>
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hyrox Training: Voor Iedereen</h1>
          <p className="text-xl max-w-2xl">
            Train voor de populaire Hyrox-race, of gebruik het gewoon als uitdagend doel om naartoe te werken.
            Van beginners tot ervaren sporters – iedereen kan meedoen op eigen niveau!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Hyrox?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hyrox is een fitness-evenement dat explosief groeit wereldwijd. Het concept is simpel:
              8 rondes van 1 kilometer rennen, afgewisseld met 8 verschillende fitness-opdrachten (zoals sleeën duwen,
              roeien, burpees, wall balls).
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Het mooie aan Hyrox? Je hoeft geen topatleet te zijn! Er zijn verschillende divisies (individueel, duo, relay)
              en iedereen doet hetzelfde parcours – van Olympisch atleten tot mensen die net beginnen met fitness.
            </p>

            <div className="bg-jonquil/20 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Belangrijk:</strong> Je hoeft NIET mee te doen aan een Hyrox-race om Hyrox lessen te volgen!
                Veel mensen gebruiken Hyrox training gewoon als uitdagend programma om fitter te worden, zonder ooit een race te doen.
                Het is een leuk doel om naartoe te werken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De 8 Hyrox Stations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">De 8 Hyrox Oefeningen</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Tussen elke kilometer rennen doe je een van deze oefeningen. Klinkt intimiderend? Geen zorgen – we leren je alles vanaf nul!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">1. SkiErg</h3>
              <p className="text-gray-700 text-sm">Ski-machine (1000 meter) – goed voor je armen en bovenlichaam</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">2. Sled Push</h3>
              <p className="text-gray-700 text-sm">Een slee duwen (50 meter) – beenspieren en power</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">3. Sled Pull</h3>
              <p className="text-gray-700 text-sm">Een slee trekken (50 meter) – rugkracht en grip</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">4. Burpee Broad Jumps</h3>
              <p className="text-gray-700 text-sm">80 meter burpees met voorwaartse sprong – uithouding en beenkracht</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">5. Rowing</h3>
              <p className="text-gray-700 text-sm">Roeimachine (1000 meter) – volledig lichaam cardio</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">6. Farmers Carry</h3>
              <p className="text-gray-700 text-sm">Zware gewichten dragen (200 meter) – grip en core</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">7. Sandbag Lunges</h3>
              <p className="text-gray-700 text-sm">Lunges met zandzak (100 meter) – beenkracht en balans</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">8. Wall Balls</h3>
              <p className="text-gray-700 text-sm">75 wall balls – been- en armkracht, coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt onze training */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe Werkt Onze Hyrox Training?</h2>
            <div className="space-y-6">
              <div className="bg-jonquil/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">🏃 Hardloop-Conditie Opbouwen</h3>
                <p className="text-gray-700 mb-2">
                  We werken rustig op naar 8 kilometer rennen, afgewisseld met pauzes. Geen ervaring met hardlopen? Geen probleem!
                </p>
                <p className="text-sm text-gray-600">
                  We starten met lopen/wandelen intervallen en bouwen langzaam op
                </p>
              </div>

              <div className="bg-jonquil/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">💪 Oefeningen Leren & Oefenen</h3>
                <p className="text-gray-700 mb-2">
                  Elke les focussen we op 1-2 Hyrox oefeningen: technieken leren, efficiëntie verbeteren, sterker worden
                </p>
                <p className="text-sm text-gray-600">
                  Eerst lichte gewichten/aangepaste versies, later bouwen we op naar race-gewichten
                </p>
              </div>

              <div className="bg-jonquil/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">🎯 Simulatie-Trainingen</h3>
                <p className="text-gray-700 mb-2">
                  We doen regelmatig (gedeeltelijke) simulaties: bijv. 2-3 rondes van rennen + oefening
                </p>
                <p className="text-sm text-gray-600">
                  Zo leer je tempo verdelen en mentaal sterk blijven wanneer je moe bent
                </p>
              </div>

              <div className="bg-jonquil/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">📊 Persoonlijke Doelen & Strategie</h3>
                <p className="text-gray-700 mb-2">
                  We helpen je een realistisch race-doel te stellen en een strategie te maken
                </p>
                <p className="text-sm text-gray-600">
                  Waar bespaar je tijd? Waar rust je? Hoe verdeel je energie? We begeleiden je van A tot Z
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Verhalen van Hyrox Deelnemers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik had nog nooit hardgelopen en was doodsbang voor de race. Maar na 12 weken training heb ik mijn eerste
                Hyrox uitgelopen in 1 uur 52 minuten! Het was zwaar, maar ik voelde me een held!"
              </p>
              <div>
                <p className="font-semibold">Annemiek, 41 jaar</p>
                <p className="text-sm text-gray-600">Van 0 naar Hyrox finisher</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik train nog steeds Hyrox, maar heb nog nooit een race gedaan. Het is gewoon super uitdagend en afwisselend
                training – precies wat ik zocht. Misschien doe ik ooit een race, maar het hoeft niet!"
              </p>
              <div>
                <p className="font-semibold">Jeroen, 38 jaar</p>
                <p className="text-sm text-gray-600">Traint voor het plezier</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Mijn partner en ik deden Hyrox Doubles samen. Wat een ervaring! We trainden 16 weken en finishten
                in 1 uur 28 minuten. Het heeft ons relatie zelfs sterker gemaakt haha!"
              </p>
              <div>
                <p className="font-semibold">Tim & Laura</p>
                <p className="text-sm text-gray-600">Hyrox Doubles finishers</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Op mijn 52e dacht ik: nu of nooit. Hyrox training maakte me fitter dan ik in mijn 30s was.
                Het is toegankelijk, geen rare bewegingen, gewoon hard werken!"
              </p>
              <div>
                <p className="font-semibold">Rob, 52 jaar</p>
                <p className="text-sm text-gray-600">Oudste deelnemer in zijn heat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Is Hyrox Training iets voor jou?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Hyrox training is perfect als je jezelf herkent in een van deze situaties:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je wilt een concreet doel om naartoe te werken</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je houdt van afwisselende trainingen (kracht + cardio)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je wilt werken aan je conditie en uithouding</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je overweegt een Hyrox race te doen (of bent gewoon nieuwsgierig)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je zoekt een nieuwe uitdaging naast je reguliere trainingen</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je wilt trainen met anderen die hetzelfde doel hebben</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische Informatie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">📅 Wanneer?</h3>
                <p className="text-gray-700 mb-2">1-2x per week specifieke Hyrox lessen</p>
                <p className="text-sm text-gray-600">
                  Plus je reguliere CrossFit lessen voor algemene fitness<br/>
                  (Check actuele roostertijden)
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">⏱️ Hoe lang?</h3>
                <p className="text-gray-700 mb-2">12-16 weken training naar een race</p>
                <p className="text-sm text-gray-600">
                  Of gewoon doorlopend als je het als reguliere training wilt volgen
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">💰 Kosten</h3>
                <p className="text-gray-700 mb-2">Inclusief in je reguliere lidmaatschap</p>
                <p className="text-sm text-gray-600">
                  Hyrox lessen zijn onderdeel van je onbeperkt groepsles-abonnement
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">🎯 Niveau</h3>
                <p className="text-gray-700 mb-2">Alle niveaus – ook complete beginners</p>
                <p className="text-sm text-gray-600">
                  We passen alles aan op jouw niveau en bouwen rustig op
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Moet ik kunnen hardlopen om te starten?</h3>
                <p className="text-gray-700">
                  Nee! We leren je hardlopen vanaf nul als dat nodig is. We starten met lopen/wandelen intervallen
                  en bouwen langzaam op. Veel deelnemers hadden nog nooit hardgelopen voordat ze startten.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Moet ik meedoen aan een Hyrox race?</h3>
                <p className="text-gray-700">
                  Absoluut niet! Veel mensen volgen Hyrox lessen gewoon als uitdagend trainingsprogramma zonder ooit
                  een race te doen. Het is wel een leuk doel om naartoe te werken, maar geen verplichting.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Hoe zwaar zijn de gewichten in een echte race?</h3>
                <p className="text-gray-700">
                  Dat hangt af van je divisie. Voor mannen: sled 152kg, sandbag 20kg, farmers carry 2x24kg, wall ball 9kg.
                  Voor vrouwen lichter. Maar tijdens training passen we alles aan op jouw niveau!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik dit combineren met normale CrossFit?</h3>
                <p className="text-gray-700">
                  Ja, zeker! De meeste Hyrox-deelnemers doen ook reguliere CrossFit lessen. Hyrox is 1-2x per week
                  extra, de rest van de week train je gewoon je normale groepslessen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Hoelang duurt een Hyrox race?</h3>
                <p className="text-gray-700">
                  Dat verschilt enorm per niveau. Elite atleten doen het in 60-70 minuten. Gemiddelde
                  recreatieve deelnemers: 1,5-2 uur. Beginners die het rustig aanpakken: 2-2,5 uur. Iedereen finisht op eigen tempo!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Zijn er leeftijdsbeperkingen?</h3>
                <p className="text-gray-700">
                  Voor officiële Hyrox races moet je 16+ zijn. Voor onze training: geen leeftijdslimiet zolang je medisch
                  fit bent om intensief te trainen. We hebben deelnemers van 25 tot 60!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        title="Klaar voor een nieuwe uitdaging?"
        description="Kom een gratis intro doen en probeer een Hyrox-les! Ervaar hoe toegankelijk en leuk Hyrox training is, bespreek je doelen met een coach. Geen verplichtingen!"
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over Hyrox of twijfel je of dit iets voor jou is?{" "}
              <Link href="/contact" className="text-cinnabar font-semibold hover:underline">
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
