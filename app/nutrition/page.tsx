import Link from "next/link";
import CTA from "@/components/CTA";

export default function Nutrition() {
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-teal-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Voeding Coaching</h1>
          <p className="text-xl max-w-2xl">
            Gezond eten zonder strenge diëten of ingewikkelde plannen. Perfect voor drukke ouders die écht resultaat willen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom is voeding zo belangrijk?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Je kunt nog zo hard trainen, maar zonder goede voeding zie je niet de resultaten die je wilt.
              <strong> 80% van je resultaat komt van wat je eet</strong> – niet van hoeveel je traint!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Maar we snappen het: als drukke ouder heb je geen tijd voor ingewikkelde meal prep, strenge diëten of eindeloze
              calorie-telling. Daarom maken wij het simpel, haalbaar en duurzaam.
            </p>
            <div className="bg-cinnabar/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Onze filosofie:</strong> Geen crash diëten, geen verboden voedsel, geen onrealistische plannen.
                Gewoon praktische tips die passen in jouw drukke leven en die je echt kunt volhouden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Aanpak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Geen Diëten</h3>
              <p className="text-gray-700">
                We geloven niet in strikte diëten die je na 2 weken alweer opgeeft. We leren je bewuste keuzes maken die je voor altijd kunt volhouden.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mb-3">Praktisch & Haalbaar</h3>
              <p className="text-gray-700">
                Speciaal voor drukke ouders: simpele recepten, realistische planning en tips die passen bij een vol gezinsleven.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Begrijpen wat je Lichaam Nodig Heeft</h3>
              <p className="text-gray-700">
                Leer de basics van voeding: wat je lichaam nodig heeft en waarom. Geen rocket science, gewoon begrijpelijke uitleg.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat We Je Leren</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Simpel Boodschappen Doen
              </h3>
              <p className="text-gray-700 text-sm">
                Wat koop je wel en niet? We leren je labels lezen en slimme keuzes maken in de supermarkt zonder veel tijd te verliezen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Meal Prep voor Drukke Ouders
              </h3>
              <p className="text-gray-700 text-sm">
                In 1-2 uur op zondag je hele week voorbereiden. Simpele recepten die je hele gezin lekker vindt.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Gezonde Snacks
              </h3>
              <p className="text-gray-700 text-sm">
                Wat eet je tussen de maaltijden? We geven je een lijst met makkelijke, gezonde snacks die je energie geven (geen suikercrash!).
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Omgaan met Sociale Momenten
              </h3>
              <p className="text-gray-700 text-sm">
                Verjaardagen, etentjes, feestjes – hoe blijf je on track zonder je sociaal leven op te geven? We leren je de balans vinden.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Porties & Hoeveelheden
              </h3>
              <p className="text-gray-700 text-sm">
                Hoeveel heb je eigenlijk nodig? Geen geweeg en gemeet, maar simpele hand-portie methodes die altijd werken.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Omgaan met Tegenslagen
              </h3>
              <p className="text-gray-700 text-sm">
                Slechte dag gehad? Te veel gegeten? We leren je hoe je verder gaat zonder schuldgevoel. Geen perfectie, wel vooruitgang!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Programma's</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 1-op-1 Coaching */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">🥗</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">1-op-1 Voedingscoaching (4 weken)</h3>
                  <p className="text-gray-700 mb-4">
                    Persoonlijke begeleiding van onze nutrition coach Lisa. We analyseren je huidige eetpatroon,
                    stellen realistische doelen en maken een plan dat perfect past bij jouw leven.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-verdigris mr-2">✓</span>
                        <span>Intake gesprek & doelen bepalen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-verdigris mr-2">✓</span>
                        <span>Persoonlijk voedingsplan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-verdigris mr-2">✓</span>
                        <span>Wekelijkse check-ins (4 weken)</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-verdigris mr-2">✓</span>
                        <span>WhatsApp support (binnen 24u antwoord)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-verdigris mr-2">✓</span>
                        <span>Boodschappen lijsten & recepten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-verdigris mr-2">✓</span>
                        <span>Meal prep planning</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-cinnabar">€125 (eenmalig)</p>
                    <Link href="/contact" className="bg-cinnabar text-white px-6 py-3 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all">
                      Start Nu
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshops */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">📚</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Maandelijkse Workshops</h3>
                  <p className="text-gray-700 mb-4">
                    Elke maand organiseren we een workshop over een ander onderwerp. Kom langs, leer nieuwe dingen en stel al je vragen!
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold mb-2">Komende workshops:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Meal Prep 101: In 2 uur je hele week klaarmaken</li>
                      <li>• Boodschappen doen: Labels lezen & slimme keuzes</li>
                      <li>• Gezond eten met kids: Recepten die je hele gezin lekker vindt</li>
                      <li>• Omgaan met cravings: Hoe blijf je on track?</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-cinnabar">€25 per workshop</p>
                    <Link href="/contact" className="bg-verdigris text-white px-6 py-3 rounded-lg font-semibold hover:bg-verdigris/90 transition-all">
                      Aanmelden
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Free E-book */}
            <div className="bg-gradient-to-br from-jonquil/20 to-jonquil/10 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">📖</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Gratis E-book Download</h3>
                  <p className="text-gray-700 mb-4">
                    Download ons gratis e-book <strong>"Gezond Eten voor Drukke Ouders"</strong> met:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="mr-2">📌</span>
                      <span>20 simpele, gezonde recepten (max 30 min kooktijd)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">📌</span>
                      <span>Boodschappen checklist voor de hele week</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">📌</span>
                      <span>Meal prep tips voor 2 uur op zondag</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">📌</span>
                      <span>Gezonde snack lijst (voor thuis én onderweg)</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="inline-block bg-jonquil text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-jonquil/90 transition-all">
                    Download Gratis E-book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat zeggen anderen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Lisa's voedingscoaching heeft mijn leven veranderd. Geen strenge diëten, gewoon simpele stapjes die ik echt kon volhouden.
                In 4 weken heb ik meer energie en ben ik 3kg lichter – zonder honger!"
              </p>
              <p className="font-semibold">– Marieke, 41, moeder van 2</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "De meal prep workshop was eye-opening. Nu prep ik elke zondag 2 uur en de hele week is geregeld.
                Mijn gezin eet gezonder én ik bespaar tijd en geld!"
              </p>
              <p className="font-semibold">– Tom, 45, vader van 3</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Ik dacht altijd dat gezond eten ingewikkeld was. Lisa maakte het super simpel – gewoon goede keuzes maken, geen rocket science.
                Nu eet ik beter dan ooit en het voelt makkelijk."
              </p>
              <p className="font-semibold">– Sandra, 38, ondernemer</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Door training én voeding aan te pakken zag ik pas echt resultaat. Het gratis e-book gaf me al zoveel nuttige tips!
                De personal coaching daarnaweg was de game-changer."
              </p>
              <p className="font-semibold">– Peter, 48, manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Moet ik leden zijn om voedingscoaching te krijgen?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee! Voedingscoaching is ook beschikbaar voor niet-leden. Maar natuurlijk werkt de combinatie van training én voeding het beste!
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Ga ik op streng dieet?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Absoluut niet! We geloven niet in strenge diëten. We leren je gewoon betere keuzes maken die je voor altijd kunt volhouden.
                  Je mag nog steeds genieten – het gaat om balans!
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Moet ik callorieën tellen?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Alleen als je dat wilt! We werken met simpele hand-portie methodes die voor de meeste mensen prima werken.
                  Geen geweeg, geen app nodig – gewoon gezond verstand.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Past dit bij mijn drukke leven?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Absoluut! Ons programma is juist ontworpen voor drukke ouders. Simpele recepten, realistische planning en geen uren in de keuken.
                  Als het niet praktisch is, werkt het niet!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <CTA
        variant="footer"
        title="Klaar om gezonder te gaan eten?"
        description="Download eerst ons gratis e-book of boek meteen een 1-op-1 consult. Kleine stappen, groot verschil!"
        buttonText="Boek Voedingsconsult"
        href="/contact"
      />
    </>
  );
}
