import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function LocatiePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-chinese-violet to-chinese-violet/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Onze Locatie
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Makkelijk bereikbaar, voldoende parkeerruimte en een professionele gym met alles wat je nodig hebt.
            </p>
          </div>
        </div>
      </section>

      {/* Address & Practical Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Address Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Adres & Contact</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">CrossFit Leiden</p>
                  <p>Marie Diebenplaats 108</p>
                  <p>2324 NG Leiden</p>
                </div>

                <div className="pt-4">
                  <p className="font-semibold text-gray-900 mb-2">Contact</p>
                  <p>
                    <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">
                      welcome@crossfitleiden.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:0712340477" className="text-cinnabar hover:underline">
                      071 - 234 0477
                    </a>
                  </p>
                </div>
              </div>

              {/* Openingstijden */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Openingstijden Lessen</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="font-medium">Maandag - Vrijdag:</span>
                      <span>06:00 - 22:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Zaterdag:</span>
                      <span>09:00 - 12:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Zondag:</span>
                      <span>10:00 - 11:00</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Controleer altijd het <Link href="/rooster" className="text-cinnabar hover:underline">rooster</Link> voor actuele lestijden.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Praktische Info</h2>

              <div className="space-y-6">
                {/* Parkeren */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-cinnabar flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Parkeren</h3>
                      <p className="text-gray-700">
                        Ruime parkeergelegenheid direct voor de deur. Gratis parkeren op eigen terrein.
                        Je kunt je auto altijd kwijt, ook tijdens de drukste lessen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fysio */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-verdigris flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Fysiofabriek In-house</h3>
                      <p className="text-gray-700 mb-2">
                        We hebben een professionele fysiopraktijk direct in onze gym.
                        Bij pijntjes, blessures of revalidatie kun je meteen geholpen worden.
                      </p>
                      <Link href="/aanbod/fysiofabriek" className="text-cinnabar font-semibold hover:underline">
                        Meer over Fysiofabriek →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Faciliteiten */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-jonquil flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Faciliteiten</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Professionele CrossFit apparatuur</li>
                        <li>• Ruime kleedkamers & douches</li>
                        <li>• Klimaatbeheersing</li>
                        <li>• Wifi & muziek</li>
                        <li>• Waterstation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Vind ons</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.564!2d4.4871!3d52.1534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c6f8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sMarie%20Diebenplaats%20108%2C%202324%20NG%20Leiden!5e0!3m2!1snl!2snl!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CrossFit Leiden Locatie"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Marie Diebenplaats 108, 2324 NG Leiden
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Kom langs voor een gratis intro"
        subtitle="Nieuwsgierig? Plan je gratis intro en kom de gym, het team en de sfeer ontdekken."
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
