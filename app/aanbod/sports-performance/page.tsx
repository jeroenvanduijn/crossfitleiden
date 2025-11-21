import Link from "next/link";
import CTA from "@/components/CTA";

export default function SportsPerformance() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-chinese-violet to-indigo-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sports Performance</h1>
          <p className="text-xl max-w-2xl">
            Word een betere atleet. Sneller, sterker en explosiever voor jouw sport.
          </p>
        </div>
      </section>

      {/* 2. Wat is dit? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Support voor jouw sport</h2>
            <p className="text-lg text-gray-700 mb-4">
              Of je nu voetbalt, hockeyt, rugbyt of hardloopt: kracht en conditie zijn de basis van elke prestatie. 
              Met ons Sports Performance programma helpen we je om die basis te vergroten.
            </p>
            <p className="text-lg text-gray-700">
              We trainen niet om de beste CrossFitter te worden, maar om jou beter te maken in jouw eigen sport. 
              Meer power in je sprint, meer stabiliteit in je duels, en minder blessuregevoelig.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Voor wie? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat levert het op?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💥</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Explosiviteit</h3>
              <p className="text-gray-700 mt-2">Snellere sprints, hogere sprongen en hardere schoten.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Blessurepreventie</h3>
              <p className="text-gray-700 mt-2">Een sterker lichaam kan meer klappen opvangen en herstelt sneller.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔋</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Uithoudingsvermogen</h3>
              <p className="text-gray-700 mt-2">Blijf gaan tot het laatste fluitsignaal, terwijl je tegenstander moe wordt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hoe werkt het? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Teams & Individueel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-2">Voor Teams</h3>
                <p className="text-gray-700 mb-4">
                  Kom met je hele team trainen in de voorbereiding of tijdens het seizoen. 
                  We maken een programma op maat, afgestemd op jullie sport en speelschema.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  <li>Teambuilding</li>
                  <li>Fysieke basis leggen</li>
                  <li>Samen sterker worden</li>
                </ul>
              </div>
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-2">Voor Individuen</h3>
                <p className="text-gray-700 mb-4">
                  Wil je zelf extra trainen naast je clubtrainingen? Sluit je aan bij onze lessen of kies voor Personal Training.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  <li>Persoonlijke aandacht</li>
                  <li>Werken aan je zwakke punten</li>
                  <li>Voorrang op de concurrentie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-padding bg-chinese-violet text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te winnen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor de mogelijkheden voor jou of je team.
          </p>
          <CTA variant="secondary-support-alt" href="/contact">
            Neem Contact Op
          </CTA>
        </div>
      </section>
    </>
  );
}
