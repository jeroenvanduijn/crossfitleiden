import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Tarieven() {
  const memberships = [
    {
      name: "2x per week",
      price: "€69",
      period: "per maand",
      perDay: "€2,30 per dag",
      description: "Perfect om rustig te starten of naast een andere sport.",
      features: [
        "2 lessen per week op flexibele dagen",
        "Persoonlijke begeleiding van coaches",
        "Toegang tot alle community events",
        "Maandelijks opzegbaar",
        "Geen inschrijfkosten"
      ],
      color: "verdigris",
      popular: false,
      bestFor: "Beginners & combinatie met andere sporten"
    },
    {
      name: "3x per week",
      price: "€85",
      period: "per maand",
      perDay: "€2,83 per dag",
      description: "De ideale balans voor echte vooruitgang en resultaat.",
      features: [
        "3 lessen per week op flexibele dagen",
        "Persoonlijke begeleiding van coaches",
        "Toegang tot alle community events",
        "Voorrang bij speciale workshops",
        "Maandelijks opzegbaar",
        "Geen inschrijfkosten"
      ],
      color: "cinnabar",
      popular: true,
      bestFor: "Voor wie echt resultaat wil zien"
    },
    {
      name: "Strippenkaart",
      price: "€150",
      period: "eenmalig",
      perDay: "€15 per les",
      description: "Handig als je onregelmatig kunt komen of wilt uitproberen.",
      features: [
        "10 lessen",
        "6 maanden geldig",
        "Flexibel in te plannen",
        "Geen abonnement vereist",
        "Ideaal om te starten"
      ],
      color: "jonquil",
      popular: false,
      bestFor: "Onregelmatige schema's of uitproberen"
    }
  ];

  return (
    <>
      {/* Hero - Waarde focus */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Investeer in jezelf</h1>
          <p className="text-xl max-w-2xl mb-6">
            Voor minder dan een dagje uit of een maandabonnement op streaming krijg je professionele begeleiding,
            een hechte community én een fitter, gezonder lijf. <strong>Dat verdien je!</strong>
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-white text-lg">
              💡 Vanaf €2,30 per dag • Maandelijks opzegbaar • Geen verborgen kosten
            </p>
          </div>
        </div>
      </section>

      {/* Value Comparison - NEW */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Waar ga je het aan uit?</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Gezondheid is de beste investering die je kunt doen. Ter vergelijking:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">☕</div>
                <p className="font-semibold mb-1">Dagelijkse koffie</p>
                <p className="text-sm text-gray-600">€90/maand</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📺</div>
                <p className="font-semibold mb-1">Streaming diensten</p>
                <p className="text-sm text-gray-600">€40-60/maand</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🍔</div>
                <p className="font-semibold mb-1">2x per week uit eten</p>
                <p className="text-sm text-gray-600">€160/maand</p>
              </div>
              <div className="text-center p-4 bg-cinnabar/10 rounded-lg border-2 border-cinnabar">
                <div className="text-3xl mb-2">💪</div>
                <p className="font-semibold mb-1">CrossFit Leiden</p>
                <p className="text-sm text-cinnabar font-bold">€69-85/maand</p>
              </div>
            </div>
            <p className="text-center text-gray-700 italic">
              Voor ongeveer dezelfde prijs als je dagelijkse koffie krijg je professionele coaching,
              nieuwe vrienden én een gezonder leven. Wat is jouw prioriteit?
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Kies wat bij jou past</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Flexibele opties zonder lange contracten. Beginnen, pauzeren of stoppen kan altijd.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  membership.popular ? "ring-4 ring-cinnabar transform md:scale-105" : ""
                }`}
              >
                {membership.popular && (
                  <div className="bg-cinnabar text-white text-center py-2 font-semibold">
                    ⭐ Meest Gekozen
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{membership.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{membership.price}</span>
                    <span className="text-gray-600 ml-2">{membership.period}</span>
                  </div>
                  <p className="text-sm text-verdigris font-semibold mb-4">{membership.perDay}</p>
                  <p className="text-gray-700 mb-4">{membership.description}</p>

                  <div className="bg-gray-50 rounded-lg p-3 mb-6">
                    <p className="text-sm font-semibold text-gray-700">
                      ✅ {membership.bestFor}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {membership.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-${membership.color}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/starten"
                    className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                      membership.popular
                        ? "bg-cinnabar text-white hover:bg-cinnabar/90"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Plan Gratis Intro
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <p className="font-semibold text-lg mb-2">Weet je niet wat te kiezen?</p>
                <p className="text-gray-700">
                  We raden bijna iedereen <strong>3x per week</strong> aan – dat is de sweet spot voor echte vooruitgang
                  zonder dat het je hele week overneemt. Tijdens je intro kijken we samen wat het beste bij jou past!
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            * Alle prijzen zijn inclusief BTW • Geen inschrijfkosten • Geen verborgen kosten • Maandelijks opzegbaar
          </p>
        </div>
      </section>

      {/* Extra Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Extra Ondersteuning Nodig?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Private Coaching</h3>
              <p className="text-gray-700 mb-4">
                1-op-1 begeleiding voor specifieke doelen, blessures of extra aandacht. Jouw coach, jouw training, jouw tempo.
              </p>
              <p className="font-semibold text-cinnabar mb-2">Vanaf €60/sessie</p>
              <Link href="/aanbod/private-coaching" className="text-cinnabar hover:underline text-sm">
                Meer info →
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-xl font-bold mb-3">Voedingscoaching</h3>
              <p className="text-gray-700 mb-4">
                4 weken persoonlijke voedingsbegeleiding. Geen strenge diëten, maar simpele stappen die écht werken voor drukke mensen.
              </p>
              <p className="font-semibold text-cinnabar mb-2">€125 (eenmalig)</p>
              <Link href="/nutrition" className="text-cinnabar hover:underline text-sm">
                Meer info →
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Gezinskorting</h3>
              <p className="text-gray-700 mb-4">
                Sport samen met je partner! Als jullie beide lid zijn krijgen jullie allebei korting. Samen fitter, samen sterker.
              </p>
              <p className="font-semibold text-cinnabar mb-2">Tot 15% korting</p>
              <Link href="/contact" className="text-cinnabar hover:underline text-sm">
                Vraag meer info →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎁</div>
                <h2 className="text-3xl font-bold mb-4">Breng een vriend mee en bespaar allebei!</h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg text-center">
                  We geloven dat samen sporten leuker is. Daarom belonen we je als je iemand meebrengt:
                </p>

                <div className="bg-gradient-to-br from-cinnabar/10 to-verdigris/10 rounded-xl p-8 my-6 text-center">
                  <p className="text-lg font-semibold mb-3">
                    Breng je een nieuwe sporter die lid wordt?
                  </p>
                  <p className="text-3xl font-bold text-cinnabar">
                    50% korting voor jullie allebei!
                  </p>
                  <p className="text-sm text-gray-600 mt-3">
                    (Geldt voor één maand contributie)
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4 text-center">Hoe werkt het?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="w-12 h-12 bg-cinnabar text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                        1
                      </div>
                      <p className="text-sm">
                        Je vriend noemt jouw naam bij aanmelding
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-cinnabar text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                        2
                      </div>
                      <p className="text-sm">
                        Hij/zij wordt lid en begint te trainen
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-cinnabar text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                        3
                      </div>
                      <p className="text-sm">
                        Jullie krijgen allebei 50% korting!
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-center italic">
                  Bonus: We organiseren ook regelmatig <strong>Bring a Friend</strong> events waar je gratis iemand mag meenemen voor een les.
                  Samen sporten is gewoon leuker!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Member Testimonials about Value */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Is het de investering waard?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Dit zeggen onze leden over de waarde van hun lidmaatschap:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Ik vond het eerst duur, maar toen realiseerde ik me: ik geef meer uit aan Netflix en lunches!
                Dit is investeren in mezelf. Beste geld dat ik uitgeef."
              </p>
              <p className="font-semibold">– Mark, 45, vader van 2</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Toen ik uitrekende wat personal training zou kosten (€60-80 per sessie), was de keuze snel gemaakt.
                Hier krijg ik 3x per week coaching voor minder dan 1 PT sessie!"
              </p>
              <p className="font-semibold">– Sarah, 38, ondernemer</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Door fitter te zijn slaap ik beter, heb ik meer energie en neem ik minder vrije dagen.
                Gezondheid = geld besparen op de lange termijn!"
              </p>
              <p className="font-semibold">– Linda, 41, lerares</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "De community alleen is al goud waard. Ik heb hier vrienden gemaakt voor het leven.
                Dat krijg je niet bij een goedkope sportschool."
              </p>
              <p className="font-semibold">– Tom, 48, manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Price Anxiety Focused */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Zijn er inschrijf- of verborgen kosten?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee! Geen inschrijfkosten, geen jaarcontract, geen verborgen kosten. Je betaalt alleen je maandelijkse lidmaatschap.
                  Wat je ziet is wat je betaalt – transparant en eerlijk.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Zit ik vast aan een lang contract?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee! Ons lidmaatschap is maandelijks opzegbaar. Geen lange contracten of boetes. We willen dat je blijft omdat je het leuk vindt,
                  niet omdat je vast zit. Dat is veel gezonder!
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Kan ik mijn lidmaatschap pauzeren bij ziekte of vakantie?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Ja! Bij ziekte, vakantie of andere omstandigheden kun je je lidmaatschap tijdelijk pauzeren.
                  We snappen dat het leven soms roet in het eten gooit. Neem gewoon even contact met ons op.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Kan ik eerst proberen voordat ik me inschrijf?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Absoluut! Alle nieuwe leden beginnen met een <strong>gratis intro</strong> waar we kennismaken zonder dat je hoeft te sporten.
                  Pas als je tevreden bent en het klikt, beslis je of je lid wordt.{" "}
                  <Link href="/starten" className="text-cinnabar font-semibold hover:underline">
                    Plan hier je intro →
                  </Link>
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Hoe werkt de betaling?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  We werken met automatische incasso voor gemakkelijke maandelijkse betalingen. Je hoeft er verder niet meer naar om te kijken.
                  Voor de strippenkaart betaal je vooraf via iDEAL of pin.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Waarom is CrossFit duurder dan een reguliere sportschool?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Bij ons krijg je elke les persoonlijke coaching, kleine groepen (max 12 personen), geprogrammeerde trainingen en een hechte community.
                  Vergelijk het met personal training (€60-80/sessie) en je ziet dat CrossFit juist een koopje is!
                  Bij een reguliere gym krijg je een sleutel en ben je op jezelf aangewezen – hier krijg je begeleiding en support.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar om in jezelf te investeren?"
        subtitle="Voor minder dan €3 per dag krijg je professionele begeleiding, een warme community en een gezonder leven. Probeer het vrijblijvend met een gratis intro!"
        buttonLabel="Plan Mijn Gratis Intro"
      />
    </>
  );
}
