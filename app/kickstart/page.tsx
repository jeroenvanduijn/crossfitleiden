import Link from "next/link";
import CTA from "@/components/CTA";

export default function Kickstart() {
  return (
    <>
      {/* Hero sectie */}
      <section className="bg-gradient-to-r from-jonquil via-yellow-400 to-jonquil text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start veilig en sterk met onze Kickstart
            </h1>
            <p className="text-xl mb-8 text-gray-800">
              Ons 28-dagen beginnersprogramma met persoonlijke begeleiding, veilige opbouw en een duidelijk plan.
            </p>
            <Link
              href="/starten"
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg"
            >
              Plan een Gratis Intro
            </Link>
          </div>
        </div>
      </section>

      {/* Wat is de Kickstart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is de Kickstart?</h2>
            <p className="text-lg text-gray-700 mb-4">
              De Kickstart is het programma waar elke nieuwe starter mee begint bij CrossFit Leiden.
              Het is speciaal ontworpen voor mensen die nog nooit CrossFit hebben gedaan, of die lang niet gesport hebben.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Gedurende <strong>28 dagen</strong> werk je aan je energie, routine en krijg je alle basis-bewegingen
              onder de knie – volledig op jouw tempo, met persoonlijke begeleiding van onze coaches.
            </p>

            <div className="bg-jonquil/20 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-lg mb-3">Waar focussen we op?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Veilig starten</strong> – Geen high-skill bewegingen, wel veel aandacht voor goede techniek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Meer energie</strong> – Bouw conditie en kracht op zonder te overtrainen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Een routine creëren</strong> – Leer hoe je training inpast in je drukke leven</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Vertrouwen opbouwen</strong> – Ontdek wat je lichaam kan, stap voor stap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie is het */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Voor Wie is de Kickstart?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">👋</div>
                <h3 className="font-bold text-lg mb-2">Complete Beginners</h3>
                <p className="text-gray-700">
                  Nog nooit CrossFit gedaan? Perfect. De Kickstart is speciaal gemaakt voor jou.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-lg mb-2">Drukke Ouders</h3>
                <p className="text-gray-700">
                  Heb je structuur en een duidelijk plan nodig? De Kickstart geeft je houvast.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">⏸️</div>
                <h3 className="font-bold text-lg mb-2">Lang Niet Gesport</h3>
                <p className="text-gray-700">
                  Is het jaren geleden? Geen probleem. We bouwen rustig op vanaf jouw niveau.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">🩹</div>
                <h3 className="font-bold text-lg mb-2">Onzekerheid of Blessures</h3>
                <p className="text-gray-700">
                  Heb je een oude blessure of ben je onzeker? We passen alles aan op jouw situatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat zit er in de Kickstart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Wat Zit Er in de Kickstart?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🏋️</span>
                  2-3 keer per week trainen
                </h3>
                <p className="text-gray-700">
                  In groepslessen of semi-private, afhankelijk van wat bij jou past. Flexibel in te plannen.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">👨‍🏫</span>
                  Persoonlijke coachbegeleiding
                </h3>
                <p className="text-gray-700">
                  Onze coaches kennen jouw naam, jouw doel en jouw situatie. Elke les krijg je persoonlijke feedback.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">📐</span>
                  Techniektraining op jouw niveau
                </h3>
                <p className="text-gray-700">
                  Leer de basis-bewegingen (squats, push-ups, deadlifts) op een veilige manier die past bij jouw lichaam.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🍎</span>
                  Voeding & leefstijl basics
                </h3>
                <p className="text-gray-700">
                  Simpele, haalbare tips over voeding, slaap en herstel – geen ingewikkelde diëten.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  Een progressieplan
                </h3>
                <p className="text-gray-700">
                  Veilige opbouw die past bij jouw niveau. Niet te snel, niet te langzaam – precies goed.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  Community onboarding
                </h3>
                <p className="text-gray-700">
                  Je leert andere leden kennen, voelt je welkom en wordt onderdeel van de CFL familie.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  Mini check-in halverwege
                </h3>
                <p className="text-gray-700">
                  Na 2 weken evalueren we samen hoe het gaat en passen we waar nodig aan.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Evaluatie aan het einde
                </h3>
                <p className="text-gray-700">
                  Na 28 dagen bespreken we jouw vooruitgang en geven we persoonlijk advies voor je vervolg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het starten - 3 stappen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe Werkt Het Starten?</h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              Beginnen bij CrossFit Leiden is makkelijk. We leiden je door 3 eenvoudige stappen:
            </p>

            <div className="space-y-8">
              {/* Stap 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Plan een Gratis Intro</h3>
                  <p className="text-gray-700 mb-3">
                    Dit is een rustig gesprek van 30 minuten. <strong>Geen workout</strong>, geen verplichtingen.
                    We maken kennis, geven je een rondleiding en luisteren naar jouw doelen en situatie.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Je krijgt ook antwoord op al je vragen over de Kickstart, planning en tarieven.
                  </p>
                </div>
              </div>

              {/* Stap 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Maak Kennis met de Kickstart</h3>
                  <p className="text-gray-700 mb-3">
                    Tijdens de intro leggen we het hele Kickstart-programma uit. Je hoort precies wat je kunt verwachten,
                    hoe de begeleiding werkt en hoe we jou helpen veilig te starten.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Past het bij je? Dan plannen we meteen je eerste les in.
                  </p>
                </div>
              </div>

              {/* Stap 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Start Jouw 28-Dagen Traject</h3>
                  <p className="text-gray-700 mb-3">
                    Je start met je eerste les in een kleine, veilige groep. Onze coaches begeleiden je elke stap van de weg.
                    Vragen? Die kun je altijd stellen.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Na 28 dagen ben je klaar om door te gaan met onze reguliere lessen – of je kiest voor een ander programma.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/starten"
                className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg"
              >
                Plan een Gratis Intro
              </Link>
              <p className="text-gray-600 text-sm mt-4">
                Het gesprek is gratis en vrijblijvend. Geen verplichtingen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultaten van leden - Social proof */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat Zeggen Leden Over de Kickstart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👩</div>
                <div>
                  <p className="font-bold">Lisa, 38 jaar</p>
                  <p className="text-sm text-gray-600">Moeder van 2, drukke baan</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Ik begon met nul ervaring en was echt zenuwachtig. De Kickstart gaf me precies de structuur en rust
                die ik nodig had. Binnen 4 weken voelde ik me al sterker en energieker!"
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👨</div>
                <div>
                  <p className="font-bold">Peter, 45 jaar</p>
                  <p className="text-sm text-gray-600">15 jaar niet gesport</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "De Kickstart gaf mij precies de structuur die ik nodig had. De coaches namen de tijd om alles uit te leggen
                en ik voelde me nooit gehaast. Perfect programma voor mensen zoals ik."
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👩</div>
                <div>
                  <p className="font-bold">Marieke, 39 jaar</p>
                  <p className="text-sm text-gray-600">Moeder van 3</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Perfect voor drukke ouders! Haalbaar in te plannen, warm ontvangen, en ik voelde me nooit onzeker.
                De Kickstart heeft me geholpen een nieuwe routine op te bouwen."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Moet ik fit zijn om de Kickstart te doen?</h3>
                <p className="text-gray-700">
                  Absoluut niet! De Kickstart is speciaal gemaakt voor beginners die nog niet fit zijn.
                  We passen alles aan op jouw niveau en bouwen rustig op.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Hoe vaak train ik tijdens de Kickstart?</h3>
                <p className="text-gray-700">
                  We raden 2-3 keer per week aan voor de beste resultaten. Dat is haalbaar naast werk en gezin,
                  en geeft je lichaam genoeg tijd om te herstellen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Is de Kickstart verplicht?</h3>
                <p className="text-gray-700">
                  Nee, maar we raden het sterk aan! 95% van onze nieuwe leden kiest voor de Kickstart omdat het rust,
                  structuur en vertrouwen geeft. Het is de beste manier om veilig te starten.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Wat kost de Kickstart?</h3>
                <p className="text-gray-700">
                  De Kickstart is inbegrepen in je lidmaatschap. Je betaalt het normale maandtarief en krijgt volledige
                  toegang tot de Kickstart begeleiding. Tijdens je gratis intro bespreken we alle opties.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik na de Kickstart stoppen?</h3>
                <p className="text-gray-700">
                  Ja, je kunt maandelijks opzeggen. Maar de meeste mensen gaan graag door omdat ze merken
                  hoeveel verschil het maakt in hun energie en welzijn!
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Train ik alleen of in een groep?</h3>
                <p className="text-gray-700">
                  Dat kies je zelf! Sommige mensen starten in een kleine groep (max 8-10 personen), anderen kiezen
                  voor semi-private (2-4 personen). We bespreken tijdens de intro wat het beste bij jou past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <CTA
        variant="footer"
        title="Benieuwd of de Kickstart bij jou past?"
        description="Plan een gratis intro – geen workout, alleen een rustig gesprek en een rondleiding. We leggen je graag alles uit en beantwoorden al je vragen. Volledig vrijblijvend!"
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Heb je vragen over de Kickstart of wil je meer weten?{" "}
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
