import Link from "next/link";
import CTA from "@/components/CTA";

export default function GetShredded() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-orange-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GetShredded: Jouw 12-Weken Transformatie</h1>
          <p className="text-xl max-w-2xl">
            Een praktisch en realistisch programma voor drukke ouders die eindelijk willen afvallen, fitter willen worden
            en meer energie willen – zonder extreme diëten of onrealistische verwachtingen.
          </p>
        </div>
      </section>

      {/* Wat is GetShredded */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is GetShredded?</h2>
            <p className="text-lg text-gray-700 mb-4">
              GetShredded is ons 12-weken transformatieprogramma speciaal ontworpen voor drukke ouders die
              écht willen afvallen en in shape willen komen – maar geen tijd hebben voor ingewikkelde plannen.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We combineren slimme trainingen (4-5x per week) met een eenvoudig voedingsplan dat past in jouw drukke leven,
              wekelijkse begeleiding en een groep andere ouders die hetzelfde doel hebben. Geen extreme diëten, geen onrealistische
              beloftes – gewoon een praktisch plan dat werkt.
            </p>

            <div className="bg-cinnabar/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Belangrijk om te weten:</strong> Dit programma vraagt commitment (4-5x trainen + voeding aanpassen),
                maar is realistisch inpasbaar naast werk en gezin. De meeste deelnemers zijn werkende ouders net als jij!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programma opbouw */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat krijg je in die 12 weken?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-bold mb-3">Slimme Trainingen</h3>
              <p className="text-gray-700 mb-3">4-5x per week effectieve trainingen die je vet laten verbranden én je spiermassa behouden</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Korte, intensieve cardio (15-20 min)</li>
                <li>• Krachtoefeningen om spieren te behouden</li>
                <li>• Gecombineerde oefeningen voor maximale calorieverbranding</li>
                <li>• Alle lessen bij je reguliere groepslessen</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold mb-3">Eenvoudig Voedingsplan</h3>
              <p className="text-gray-700 mb-3">Persoonlijk plan dat past bij jouw leven, voorkeuren en gezinssituatie</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Simpele richtlijnen (geen complex puntentellen)</li>
                <li>• Praktische tips voor drukke ouders</li>
                <li>• Gezinsvriendelijke recepten & maaltijdideeën</li>
                <li>• Geen verboden voedsel, wel slimme keuzes</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Wekelijkse Begeleiding</h3>
              <p className="text-gray-700 mb-3">Persoonlijke check-ins en metingen zodat je precies ziet hoe je vooruitgaat</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lichaamsmetingen (gewicht, omtrek, vetpercentage)</li>
                <li>• Voortgangsfoto's (vrijwillig, maar super motiverend!)</li>
                <li>• Bijsturing van plan waar nodig</li>
                <li>• 1-op-1 gesprekken met je coach</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Groepsondersteuning</h3>
              <p className="text-gray-700 mb-3">Privé WhatsApp groep met andere deelnemers die precies weten waar jij doorheen gaat</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dagelijkse motivatie en support</li>
                <li>• Praktische tips van anderen</li>
                <li>• Elkaar verantwoordelijk houden (op een positieve manier!)</li>
                <li>• Vriendschappen die blijven na het programma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Echte Verhalen van Deelnemers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Na mijn tweede kind was ik 15 kilo zwaarder en had ik nul energie. Na GetShredded ben ik 11 kilo kwijt
                en voel ik me eindelijk weer mezelf. Het voedingsplan was verrassend makkelijk – geen gedoe, gewoon slimme keuzes."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Sarah, 38 jaar</p>
                  <p className="text-sm text-gray-600">Moeder van 2, deeltijd werkend</p>
                  <p className="text-sm text-cinnabar font-semibold mt-1">-11 kg in 12 weken</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik dacht dat ik geen tijd had voor 4-5x trainen, maar de lessen zijn zo efficiënt! 45 minuten en je bent klaar.
                Plus de groep motiveert enorm – je mist niemand. Ben 8 kilo kwijt én veel sterker geworden."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Patrick, 42 jaar</p>
                  <p className="text-sm text-gray-600">Vader van 3, fulltime baan</p>
                  <p className="text-sm text-cinnabar font-semibold mt-1">-8 kg + veel meer energie</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Het mooiste? Na GetShredded ben ik gewoon doorgegaan met trainen. Het programma heeft me geleerd
                hoe ik gezond kan eten zonder gekke diëten. 10 kilo lichter en nooit meer terug naar het oude gewicht!"
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Linda, 45 jaar</p>
                  <p className="text-sm text-gray-600">Moeder van 2 pubers, eigen bedrijf</p>
                  <p className="text-sm text-cinnabar font-semibold mt-1">-10 kg (blijvend resultaat)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Ik was altijd bang dat ik de enige 'dikke' zou zijn, maar iedereen in de groep had hetzelfde doel.
                Dat maakte het zo veel makkelijker. We motiveerden elkaar elke dag in de WhatsApp groep!"
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Mark, 39 jaar</p>
                  <p className="text-sm text-gray-600">Vader van 1, jaren niet gesport</p>
                  <p className="text-sm text-cinnabar font-semibold mt-1">-9 kg + nieuwe vrienden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Is dit programma iets voor jou?</h2>
            <p className="text-lg text-gray-700 mb-8">
              GetShredded is perfect als je jezelf herkent in een van deze situaties:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Je wilt 5+ kilo afvallen en weet dat je begeleiding nodig hebt</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Je kunt 4-5x per week trainen (lessen zijn 45-60 min)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Je wilt je voeding aanpassen, maar zonder extreme diëten</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Je wordt graag gemotiveerd door anderen met hetzelfde doel</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Je zoekt een realistisch plan dat past bij je drukke leven</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Je bent klaar om 12 weken écht voor jezelf te gaan</p>
              </div>
            </div>

            <div className="mt-8 bg-verdigris/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>🤔 Twijfel je of dit voor jou is?</strong> De meeste deelnemers twijfelden ook!
                Kom eerst een gratis intro doen, dan kun je coaches en andere leden spreken over hun ervaringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultaten */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Wat kun je verwachten?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Eerlijke verwachtingen gebaseerd op onze deelnemers die het programma volledig hebben gevolgd:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-cinnabar/5 rounded-xl p-6">
                <div className="text-4xl font-bold text-cinnabar mb-2">5-12 kg</div>
                <p className="text-gray-700 font-semibold mb-2">Gewichtsverlies</p>
                <p className="text-sm text-gray-600">Gemiddeld 7-8 kg voor mensen die het plan goed volgen</p>
              </div>
              <div className="bg-verdigris/5 rounded-xl p-6">
                <div className="text-4xl font-bold text-verdigris mb-2">Veel meer</div>
                <p className="text-gray-700 font-semibold mb-2">Energie</p>
                <p className="text-sm text-gray-600">Bijna iedereen voelt zich fitter en vitaler na 2-3 weken</p>
              </div>
              <div className="bg-jonquil/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-gray-700 mb-2">Sterker</div>
                <p className="text-gray-700 font-semibold mb-2">Krachttoename</p>
                <p className="text-sm text-gray-600">Je verliest vet, maar behoudt (of bouwt!) spiermassa</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm text-gray-700">
                <strong>💡 Belangrijk:</strong> Deze resultaten zijn realistisch voor mensen die het programma volledig volgen
                (4-5x trainen + voedingsplan). Iedereen is anders – sommigen verliezen meer, anderen iets minder.
                Het gaat om jouw persoonlijke vooruitgang!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start data & Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Wanneer Start de Volgende Ronde?</h2>
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                We starten 4x per jaar met een nieuwe GetShredded groep, zodat iedereen tegelijk begint en samen de reis maakt:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-cinnabar/10 rounded-lg p-4">
                  <p className="font-bold text-lg">Januari</p>
                  <p className="text-sm text-gray-600">Start na de kerst</p>
                </div>
                <div className="bg-cinnabar/10 rounded-lg p-4">
                  <p className="font-bold text-lg">April</p>
                  <p className="text-sm text-gray-600">Voor de zomer</p>
                </div>
                <div className="bg-cinnabar/10 rounded-lg p-4">
                  <p className="font-bold text-lg">Juli</p>
                  <p className="text-sm text-gray-600">Na de zomer</p>
                </div>
                <div className="bg-cinnabar/10 rounded-lg p-4">
                  <p className="font-bold text-lg">Oktober</p>
                  <p className="text-sm text-gray-600">Voor de kerst</p>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-3xl font-bold text-cinnabar mb-2">€495</p>
                <p className="text-gray-700 mb-4">Voor het complete 12-weken programma</p>
                <div className="text-left max-w-md mx-auto bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2"><strong>Dit is inbegrepen:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ 12 weken onbeperkt groepslessen</li>
                    <li>✓ Persoonlijk voedingsplan & begeleiding</li>
                    <li>✓ Wekelijkse check-ins met je coach</li>
                    <li>✓ Privé WhatsApp groep met deelnemers</li>
                    <li>✓ Progress tracking & metingen</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Dat is €41 per week, of €5,87 per dag voor complete begeleiding!</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Beperkte plekken per ronde (max 15 personen). Wil je meedoen? Neem contact op om je plek te reserveren!
            </p>
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
                <h3 className="font-semibold text-lg mb-2">Moet ik al lid zijn van CrossFit Leiden?</h3>
                <p className="text-gray-700">
                  Nee, je kunt GetShredded ook doen als niet-lid! De €495 is dan inclusief 12 weken onbeperkt groepslessen.
                  Ben je al lid? Dan krijg je korting op het programma – vraag naar de ledentarieven.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Moet ik al ervaring hebben met CrossFit?</h3>
                <p className="text-gray-700">
                  Nee! Veel deelnemers zijn complete beginners. De coaches passen alle oefeningen aan op jouw niveau.
                  Het gaat om jouw persoonlijke vooruitgang, niet om wat anderen doen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Wat als ik niet 4-5x per week kan trainen?</h3>
                <p className="text-gray-700">
                  Voor de beste resultaten raden we 4-5x aan, maar 3-4x kan ook werken (met iets langzamere resultaten).
                  Minder dan 3x? Dan is het reguliere lidmaatschap misschien beter voor je – we helpen je graag de juiste keuze maken.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Is het voedingsplan heel streng?</h3>
                <p className="text-gray-700">
                  Nee! We geloven niet in extreme diëten. Je krijgt simpele richtlijnen en praktische tips die passen
                  bij je gezinsleven. Geen verboden voedsel, geen ingewikkelde recepten – gewoon slimme keuzes leren maken.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Wat als ik ziek word of op vakantie ga?</h3>
                <p className="text-gray-700">
                  Het leven gebeurt! We kunnen het programma aanpassen of iets langer laten duren als dat nodig is.
                  Belangrijk is dat je consistent bent wanneer je er wel bent.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Blijven de resultaten daarna ook?</h3>
                <p className="text-gray-700">
                  Dat hangt van jou af! Het programma leert je gezonde gewoontes die je kunt blijven toepassen.
                  Veel deelnemers gaan daarna gewoon door met groepslessen en houden hun nieuwe gewicht moeiteloos vast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        title="Klaar om te starten met GetShredded?"
        description="Twijfel je nog? Kom eerst een gratis intro doen. Dan kun je met coaches en vorige deelnemers praten over het programma en hun ervaringen. Geen verplichtingen!"
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over GetShredded of wil je weten wanneer de volgende ronde start?{" "}
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
