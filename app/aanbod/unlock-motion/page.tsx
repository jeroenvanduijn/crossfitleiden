import Link from "next/link";
import CTA from "@/components/CTA";

export default function UnlockMotion() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-verdigris to-teal-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Motion</h1>
          <p className="text-xl max-w-2xl">
            Beweeg vrijer, pijnvrij en met meer gemak. Voor iedereen die zich stijf voelt.
          </p>
        </div>
      </section>

      {/* 2. Wat is dit? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Unlock Motion?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Voel je je vaak stijf na een dag achter de computer? Heb je last van je rug of schouders? 
              Unlock Motion is speciaal ontwikkeld om je weer soepel te laten bewegen.
            </p>
            <p className="text-lg text-gray-700">
              In deze lessen werken we aan mobiliteit, flexibiliteit en balans. Geen zware gewichten, 
              maar rustige, gecontroleerde bewegingen die je gewrichten "smeren" en je spieren losmaken. 
              Het is de perfecte aanvulling op CrossFit, maar ook geweldig als op zichzelf staande training.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Voor wie? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Voor wie is dit?</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Kantoorwerkers</h3>
                  <p className="text-gray-700">Compenseer het vele zitten en maak je heupen en rug weer los.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Sporters</h3>
                  <p className="text-gray-700">Verbeter je mobiliteit voor betere prestaties en minder blessures.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Mensen met lichte klachten</h3>
                  <p className="text-gray-700">Verminder stijfheid en leer bewegen zonder pijn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hoe werkt het? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat doen we in de les?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Stretchen</h3>
              <p className="text-gray-700 mt-2">Actief en passief rekken om je spieren te verlengen.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Mobiliteit</h3>
              <p className="text-gray-700 mt-2">Oefeningen om de bewegingsvrijheid van je gewrichten te vergroten.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Balans & Controle</h3>
              <p className="text-gray-700 mt-2">Leer je lichaam beter beheersen voor een betere houding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-padding bg-verdigris text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Voel het verschil</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kom een keer meedoen en ervaar hoe fijn het is om soepel te bewegen.
          </p>
          <CTA variant="primary-intro-alt2">
            Plan Gratis Proefles
          </CTA>
        </div>
      </section>
    </>
  );
}
