import Link from "next/link";
import CTA from "@/components/CTA";

export default function SemiPrivate() {
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-teal-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Small Group Training (2-4 Personen)</h1>
          <p className="text-xl max-w-2xl">
            De perfecte balans tussen persoonlijke aandacht en groepsdynamiek.
            Train met 2-4 personen en krijg een programma op maat.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Small Group Training?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Small Group Training (ook wel semi-private genoemd) is training in een kleine groep van 2-4 personen.
              Je krijgt veel persoonlijke aandacht van je coach, maar traint wel samen met anderen die vergelijkbare doelen hebben.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Het programma wordt aangepast op jullie specifieke wensen: afvallen, sterker worden, herstel na blessure,
              of training voor een specifieke sport. De perfecte keuze als je meer begeleiding wilt dan in groepslessen,
              maar toch de motivatie van een groep waardeert.
            </p>

            <div className="bg-verdigris/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Perfect voor:</strong> Vrienden die samen willen trainen, collega's, gezinsleden,
                of mensen die meer aandacht willen maar niet 1-op-1.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voordelen van Small Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Persoonlijke Aandacht</h3>
              <p className="text-gray-700">
                Met maximaal 4 personen krijg je veel individuele feedback en begeleiding van je coach.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Programma Op Maat</h3>
              <p className="text-gray-700">
                Het programma wordt aangepast op jullie gezamenlijke doelen en individuele niveaus.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Betere Prijs Dan 1-op-1</h3>
              <p className="text-gray-700">
                Goedkoper dan private coaching, maar met dezelfde kwaliteit en aandacht.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3">Motivatie van Groep</h3>
              <p className="text-gray-700">
                Train samen, moedig elkaar aan en behaal doelen als team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tarieven</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold">2 Personen</h3>
                    <p className="text-gray-600">2x per week, 60 minuten</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-verdigris">€125</p>
                    <p className="text-sm text-gray-600">per persoon/maand</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-verdigris">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      3-4 Personen
                      <span className="bg-verdigris text-white text-xs px-2 py-1 rounded">POPULAIR</span>
                    </h3>
                    <p className="text-gray-600">2x per week, 60 minuten</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-verdigris">€95</p>
                    <p className="text-sm text-gray-600">per persoon/maand</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-jonquil/20 rounded-xl p-6">
              <p className="text-gray-700 text-sm">
                <strong>💡 Tip:</strong> Heb je al een groepje van vrienden, collega's of familie?
                Dat is perfect! Je kunt ook starten als 1 persoon en we helpen je een groepje te vinden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        variant="footer"
        title="Interesse in Small Group Training?"
        description="Plan een gratis intro. We bespreken je doelen, laten je de gym zien en kijken of small group iets voor jou is!"
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over small group training?{" "}
              <Link href="/contact" className="text-verdigris font-semibold hover:underline">
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
