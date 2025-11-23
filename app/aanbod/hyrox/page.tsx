import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function HYROXPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#E4572E] to-[#E4572E]/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">HYROX Training</h1>
          <p className="text-xl max-w-3xl">
            Train wekelijks voor de ultieme fitness race. Specifieke HYROX workouts, running drills en stations om je klaar te stomen voor je race.
          </p>
        </div>
      </section>

      {/* What is HYROX */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is HYROX?</h2>
            <p className="text-lg text-gray-700 mb-4">
              HYROX is een wereldwijde fitness race voor iedereen. Het combineert hardlopen met functionele workout stations.
              De standaard format bestaat uit 8 x 1km rennen, afgewisseld met 8 workout stations.
            </p>
            <p className="text-lg text-gray-700">
              Bij CrossFit Leiden trainen we wekelijks specifiek voor HYROX: running techniques, SkiErg, sled push/pull,
              burpee broad jumps, rowing, farmers carry, sandbag lunges en wall balls.
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wekelijks HYROX Programma</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#E4572E]">Voor wie?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#17BEBB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Atleten die zich voorbereiden op een HYROX race</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#17BEBB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CrossFitters die hun running en conditioning willen verbeteren</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#17BEBB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Runners die functionele kracht willen toevoegen</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#E4572E]">Wat train je?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#17BEBB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Running technique en pacing strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#17BEBB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Alle 8 HYROX stations met tips & tricks</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#17BEBB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mentale voorbereiding en race strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Lessenrooster</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-[#E4572E]">Maandag</h3>
              <p className="text-gray-700">2 Hyrox lessen</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-[#E4572E]">Woensdag</h3>
              <p className="text-gray-700">2 Hyrox lessen</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-[#E4572E]">Vrijdag</h3>
              <p className="text-gray-700">2 Hyrox lessen (90 minuten)</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-[#E4572E]">Zaterdag</h3>
              <p className="text-gray-700">1 Hyrox les</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/rooster" className="inline-block bg-[#E25C2A] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#E25C2A]/90 transition-all shadow-md">
              Bekijk Rooster voor Tijden
            </Link>
          </div>
        </div>
      </section>

      {/* Hyrox Simulations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">HYROX Simulaties</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Regelmatig organiseren we volledige HYROX simulaties waar je de echte race kunt ervaren.
            Perfect voor je race voorbereiding!
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Volledige Race</h3>
              <p className="text-gray-700 mb-4">
                8 rondes van 1 km rennen + alle 8 stations. Ervaar de echte HYROX race in een veilige,
                ondersteunende omgeving met coaches die je door de race heen helpen.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Halve Race & Divisions</h3>
              <p className="text-gray-700 mb-4">
                Ook halve races beschikbaar. Kies tussen Solo of Doubles divisions.
                Ideaal als je nog niet klaar bent voor de volledige afstand.
              </p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <p className="text-gray-700">
              Check ons HYROX Simulation event voor meer informatie:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events/hyrox-simulation"
                className="inline-block bg-[#E25C2A] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#E25C2A]/90 transition-all shadow-md"
              >
                HYROX Simulation Event
              </Link>
              <a
                href="https://hyrox.crossfitleiden.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#E25C2A] border-2 border-[#E25C2A] px-8 py-4 rounded-lg font-bold hover:bg-[#E25C2A]/10 transition-all shadow-md"
              >
                Officiële HYROX Sim Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar om te beginnen met HYROX training?"
        subtitle="Plan een gratis intro en kom kennismaken. We vertellen je alles over ons HYROX programma."
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
