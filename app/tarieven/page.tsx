import Link from "next/link";
import CTA from "@/components/CTA";

export default function Tarieven() {
  const memberships = [
    {
      name: "2x per week",
      price: "€69",
      period: "per maand",
      description: "Ideaal om rustig te starten of te combineren met andere sporten.",
      features: [
        "2 trainingen per week op flexibele dagen",
        "Persoonlijke begeleiding van coaches",
        "Toegang tot community events",
        "Maandelijks opzegbaar"
      ],
      color: "verdigris",
      popular: false
    },
    {
      name: "Onbeperkt",
      price: "€95",
      period: "per maand",
      description: "Voor als je vaker wilt komen of snel progressie wilt maken.",
      features: [
        "Onbeperkt trainingen per week",
        "Toegang tot Open Gym tijden",
        "Voorrang bij speciale workshops",
        "Community events & social activities",
        "Maandelijks opzegbaar"
      ],
      color: "cinnabar",
      popular: true
    },
    {
      name: "Strippenkaart",
      price: "€150",
      period: "eenmalig",
      description: "Handig als je onregelmatig kunt komen.",
      features: [
        "10 lessen",
        "6 maanden geldig",
        "Flexibel in te plannen",
        "Geen abonnement vereist"
      ],
      color: "jonquil",
      popular: false
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tarieven & Lidmaatschap</h1>
          <p className="text-xl max-w-2xl">
            Transparant, flexibel en zonder verborgen kosten. 
            Kies wat het beste bij jou past.
          </p>
        </div>
      </section>

      {/* Intro - Angst wegnemen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Geen verrassingen, gewoon eerlijk</h2>
            <p className="text-lg text-gray-700">
              We begrijpen dat prijzen belangrijk zijn. Daarom zijn we volledig transparant. 
              Geen inschrijfkosten, geen verborgen kosten, geen lange contracten. 
              Je betaalt alleen wat je ziet, en je kunt maandelijks opzeggen.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
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
                    ⭐ Meest Populair
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{membership.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{membership.price}</span>
                    <span className="text-gray-600 ml-2">{membership.period}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{membership.description}</p>
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
                  <CTA 
                    variant={membership.popular ? "primary-intro" : "secondary-support-alt2"}
                    className="w-full text-center"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              * Alle prijzen zijn inclusief BTW. Geen inschrijfkosten bij eerste aanmelding.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              ** Alle abonnementen zijn maandelijks opzegbaar. Geen lange contracten.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Aanvullende diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Personal Training</h3>
              <p className="text-gray-700 mb-3">
                1-op-1 begeleiding voor specifieke doelen en extra aandacht.
              </p>
              <p className="font-semibold text-verdigris">Op aanvraag</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold mb-3">Voedingscoaching</h3>
              <p className="text-gray-700 mb-3">
                4-weeks programma inclusief persoonlijk plan en evaluaties.
              </p>
              <p className="font-semibold text-verdigris">€125</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Family Deal</h3>
              <p className="text-gray-700 mb-3">
                Beide ouders lid? Vraag naar ons gezinskorting tarief!
              </p>
              <p className="font-semibold text-verdigris">Tot 15% korting</p>
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
                <div className="text-5xl mb-4">🎁</div>
                <h2 className="text-3xl font-bold mb-4">Breng een vriend(in) mee – en beloon jezelf</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Tevreden leden zijn onze beste ambassadeurs. Daarom hebben we een referralprogramma:
                </p>

                <div className="bg-cinnabar/5 rounded-xl p-6 my-6">
                  <p className="text-lg font-semibold text-center mb-4">
                    Breng je een nieuwe sporter aan die lid wordt?
                  </p>
                  <p className="text-2xl font-bold text-cinnabar text-center">
                    Jullie krijgen allebei 50% korting op één maand contributie!
                  </p>
                </div>

                <p>
                  Bovendien is samen sporten nóg leuker – win-win! Stuur deze link door naar een vriend(in)
                  die ook een steuntje kan gebruiken en sport binnenkort samen.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold mb-3">Hoe werkt het?</h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Je vriend(in) meldt zich aan via de website of noemt jouw naam bij inschrijving</li>
                    <li>Als hij/zij lid wordt, ontvangen jullie beide automatisch de korting</li>
                    <li>De korting wordt toegepast op de eerstvolgende maand</li>
                  </ol>
                </div>

                <p className="text-center pt-4">
                  We organiseren ook speciale evenementen zoals <strong>Bring a Friend Friday</strong>,
                  waarop leden gratis iemand mogen meenemen voor een les. Houd onze agenda in de gaten!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info & FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Zijn er inschrijfkosten?</h3>
                <p className="text-gray-700">
                  Nee, bij je eerste aanmelding rekenen we geen inschrijfkosten. Je betaalt alleen je
                  maandelijkse contributie. Geen verborgen kosten.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Hoe lang zit ik vast aan mijn abonnement?</h3>
                <p className="text-gray-700">
                  Ons maandabonnement is flexibel en maandelijks opzegbaar. Geen lange contracten – wel
                  zo fijn in een druk leven. Je kunt elk moment opzeggen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik mijn abonnement pauzeren?</h3>
                <p className="text-gray-700">
                  Ja, bij ziekte, vakantie of andere omstandigheden kun je je lidmaatschap tijdelijk
                  pauzeren. Neem contact met ons op voor de mogelijkheden.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Welke betaalmethoden accepteren jullie?</h3>
                <p className="text-gray-700">
                  We werken met automatische incasso voor gemakkelijke maandelijkse betalingen. Je kunt
                  ook kiezen voor een strippenkaart die je vooraf betaalt.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Kan ik eerst proberen voordat ik me inschrijf?
                </h3>
                <p className="text-gray-700">
                  Absoluut! We bieden een <strong>gratis No Sweat Intro</strong> aan. Zo kun je de sfeer proeven
                  en ervaren of CrossFit Leiden bij je past, zonder verplichtingen.{" "}
                  <Link href="/starten" className="text-cinnabar font-semibold hover:underline">
                    Meld je hier aan →
                  </Link>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Wat als ik niet tevreden ben?</h3>
                <p className="text-gray-700">
                  We hopen natuurlijk dat je tevreden bent! Maar als het niet bevalt, kun je gewoon maandelijks opzeggen. 
                  Geen vragen, geen gedoe. We willen dat je blij bent met je keuze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om lid te worden?</h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Investeer in jezelf – voor nog geen €3 per dag werk je aan een fittere, gelukkigere jij.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Dat verdien je!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA variant="primary-intro-alt2" />
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cinnabar transition-all">
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
