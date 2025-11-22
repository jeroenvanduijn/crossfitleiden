import Link from "next/link";
import CTA from "@/components/CTA";

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
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Training Schema</h2>
          <p className="text-lg text-gray-700 mb-8">
            Elke week staat de HYROX training in ons rooster. Check het rooster voor actuele tijden.
          </p>
          <Link href="/rooster" className="inline-block bg-[#E4572E] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#E4572E]/90 transition-all shadow-md">
            Bekijk Rooster
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        title="Klaar om te beginnen met HYROX training?"
        description="Plan een gratis intro en kom kennismaken. We vertellen je alles over ons HYROX programma."
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />
    </>
  );
}
