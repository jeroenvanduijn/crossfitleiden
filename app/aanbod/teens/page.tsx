import Link from "next/link";
import CTA from "@/components/CTA";

export default function Teens() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-red-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Teens (13-17 jaar)</h1>
          <p className="text-xl max-w-2xl">
            Bouw kracht, conditie en zelfvertrouwen. Word de beste versie van jezelf.
          </p>
        </div>
      </section>

      {/* 2. Wat is dit? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom trainen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Als tiener verandert je lichaam snel. Het is dé perfecte tijd om een sterke basis te leggen. 
              Niet alleen voor sport, maar voor je hele leven.
            </p>
            <p className="text-lg text-gray-700">
              Onze teens lessen zijn uitdagend en stoer, maar altijd veilig. Je leert de juiste techniek 
              van squatten, deadliften en olympisch gewichtheffen. Je wordt sterker, sneller en fitter. 
              En je traint samen met leeftijdsgenoten die ook vooruit willen.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Voor wie? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wat levert het op?</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Echte kracht</h3>
                  <p className="text-gray-700">Geen opgepompte spieren, maar functionele kracht waar je wat aan hebt.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Zelfvertrouwen</h3>
                  <p className="text-gray-700">Merk dat je steeds meer kunt. Dat geeft een boost, ook buiten de gym.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Sportprestaties</h3>
                  <p className="text-gray-700">Of je nu voetbalt, hockeyt of tennist: CrossFit maakt je een betere atleet.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Energie</h3>
                  <p className="text-gray-700">Even je hoofd leegmaken na een lange schooldag.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hoe werkt het? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">De trainingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏋️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Techniek</h3>
              <p className="text-gray-700 mt-2">We leren je veilig omgaan met barbells, kettlebells en dumbbells.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤸</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Gymnastics</h3>
              <p className="text-gray-700 mt-2">Pull-ups, handstands, touwklimmen. Leren je eigen lichaam beheersen.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💨</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Conditie</h3>
              <p className="text-gray-700 mt-2">Rennen, roeien, fietsen. We bouwen een ijzersterke conditie op.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Praktische Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Praktisch</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Wanneer?</strong> Maandag, Dinsdag, Donderdag om 17:00 en Zaterdag om 10:00.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              <strong>Vrienden?</strong> Je mag altijd een vriend of vriendin meenemen voor een proefles!
            </p>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Zin om te knallen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kom langs voor een gratis proefles en ervaar het zelf.
          </p>
          <CTA variant="primary-intro-alt2">
            Plan Gratis Proefles
          </CTA>
        </div>
      </section>
    </>
  );
}
