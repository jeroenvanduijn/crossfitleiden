import Link from "next/link";
import CTA from "@/components/CTA";

export default function Hyrox() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hyrox</h1>
          <p className="text-xl max-w-2xl">
            De ultieme fitness race voor iedereen. Train je uithoudingsvermogen én je kracht.
          </p>
        </div>
      </section>

      {/* 2. Wat is dit? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Hyrox?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hyrox is dé fitness race die de wereld verovert. Het concept is simpel: 
              8 rondes van 1 km hardlopen, afgewisseld met 8 functionele oefeningen (zoals roeien, slee duwen, wall balls).
            </p>
            <p className="text-lg text-gray-700">
              Onze Hyrox lessen bereiden je perfect voor op zo'n race, maar zijn ook geweldig als je gewoon 
              je conditie en kracht wilt verbeteren. Het is een heerlijke endurance workout waar je flink van gaat zweten!
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
                <div className="w-8 h-8 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hardlopers</h3>
                  <p className="text-gray-700">Je wilt sterker worden om je loopprestaties te verbeteren.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">CrossFitters</h3>
                  <p className="text-gray-700">Je wilt specifiek werken aan je "engine" (uithoudingsvermogen).</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Iedereen die van een uitdaging houdt</h3>
                  <p className="text-gray-700">Je zoekt een concreet doel om naartoe te trainen.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Beginners</h3>
                  <p className="text-gray-700">Hyrox bewegingen zijn minder complex dan CrossFit, dus makkelijk te leren!</p>
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
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏃</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Conditie</h3>
              <p className="text-gray-700 mt-2">We werken aan je looptechniek en uithoudingsvermogen.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Kracht</h3>
              <p className="text-gray-700 mt-2">We oefenen de specifieke Hyrox onderdelen zoals slee duwen en lunges.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Simulatie</h3>
              <p className="text-gray-700 mt-2">We simuleren (delen van) de race zodat je weet wat je kunt verwachten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Praktische Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Aankomende Events</h2>
            <p className="text-lg text-gray-700 mb-8">
              We gaan regelmatig met een grote groep leden naar Hyrox events in binnen- en buitenland. 
              Super gezellig en motiverend!
            </p>
            <Link href="/events/hyrox-simulation" className="cta-button-secondary">
              Bekijk onze Hyrox Simulatie
            </Link>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Durf jij het aan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kom een keer meetrainen en ervaar de Hyrox energie.
          </p>
          <CTA variant="primary-intro-alt2">
            Plan Gratis Proefles
          </CTA>
        </div>
      </section>
    </>
  );
}
