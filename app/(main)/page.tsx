import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white section-padding">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70 z-10"></div>
        {/* Background image would go here */}
        <div className="relative z-20 container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Everyday people, exceptionally strong
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Welkom bij CrossFit Leiden – de gezelligste plek in Leiden om fit te worden.
              We begrijpen hoe druk je bent, en helpen je graag aan meer energie en balans!
            </p>
            <Link href="/starten" className="cta-button text-lg">
              Plan nu een gratis proefles
            </Link>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* USP 1 - Community */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community & Gezelligheid</h3>
              <p className="text-gray-600">
                Bij ons sport je samen – nieuwe vrienden en support horen er gewoon bij.
              </p>
            </div>

            {/* USP 2 - Coaching */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deskundige Coaching</h3>
              <p className="text-gray-600">
                Onze coaches begeleiden je persoonlijk en letten op techniek, zodat je veilig vooruitgang boekt.
              </p>
            </div>

            {/* USP 3 - Flexible */}
            <div className="text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibel Rooster</h3>
              <p className="text-gray-600">
                Vroege ochtend, late avond – altijd een les die past in jouw drukke schema.
              </p>
            </div>

            {/* USP 4 - Everyone Welcome */}
            <div className="text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-chinese-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Iedereen Welkom</h3>
              <p className="text-gray-600">
                Ongeacht je fitheid of ervaring – onze workouts passen we aan zodat gewone mensen buitengewoon sterk kunnen worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meer dan een sportschool – een tweede thuis
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              CrossFit Leiden is meer dan een sportschool – het is een tweede thuis.
              In onze box trainen everyday people samen en boeken uitzonderlijke resultaten.
              Ons team van gecertificeerde coaches staat klaar om jou te begeleiden, ongeacht je niveau.
              Wij geloven in persoonlijke aandacht, plezier en een hechte community.
            </p>
            <Link href="/over-ons" className="text-cinnabar font-semibold hover:underline">
              Lees meer over ons →
            </Link>
          </div>
        </div>
      </section>

      {/* Community Impressions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Onze Community in Actie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder for community photos */}
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-xl font-semibold text-gray-700">Samen Sterk</p>
                <p className="text-sm text-gray-500 mt-2">Foto: Groepstraining</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-xl font-semibold text-gray-700">Plezier</p>
                <p className="text-sm text-gray-500 mt-2">Foto: Lachende leden</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-xl font-semibold text-gray-700">Support</p>
                <p className="text-sm text-gray-500 mt-2">Foto: Coach en lid</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <div className="flex-1">
                  <p className="text-xl md:text-2xl text-gray-800 mb-4 italic">
                    "Dankzij CrossFit Leiden heb ik weer energie voor mijn gezin en mezelf!"
                  </p>
                  <p className="text-gray-600 font-medium">
                    – Marieke, 39, moeder van 2
                  </p>
                  <Link href="/ervaringen" className="inline-block mt-4 text-cinnabar font-semibold hover:underline">
                    Meer verhalen →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om de eerste stap te zetten?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Plan je gratis proefles en ontdek onze community zelf.
            Liever eerst een persoonlijk gesprek? Neem contact met ons op voor een intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Plan Gratis Proefles
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cinnabar transition-all">
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
