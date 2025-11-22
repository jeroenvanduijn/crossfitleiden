import Link from "next/link";
import CTA from "@/components/CTA";
import KickstartBlock from "@/components/KickstartBlock";

export default function Home() {
  return (
    <>
      {/* 1. HERO - Result-focused, beginner-reassuring */}
      <section className="relative bg-gray-900 text-white section-padding">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70 z-10"></div>
        {/* Background image would go here */}
        <div className="relative z-20 container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Meer energie voor jouw gezin én jezelf
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Voor drukke ouders die weer fit willen worden, zonder oordeel en met begeleiding op jouw niveau.
              Geen ervaring nodig – wij leren je alles stap voor stap.
            </p>
            <CTA
              variant="hero"
              title=""
              description=""
              buttonText="Plan een Gratis Intro"
              href="/starten"
              className="inline-block"
            />
            <p className="text-sm text-gray-300 mt-4">
              👉 Geen workout, gewoon een gesprek. Ontdek of CrossFit Leiden bij je past.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY CROSSFIT LEIDEN - 5 USPs for busy parents & beginners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Waarom CrossFit Leiden?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            We snappen dat je druk bent en misschien al jaren niet meer gesport hebt. Daarom maken we het je makkelijk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* USP 1 - Personal Coaching */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Persoonlijke Begeleiding</h3>
              <p className="text-gray-600">
                Onze coaches kennen je naam, letten op je techniek en begeleiden je stap voor stap. Je bent nooit zomaar een nummer.
              </p>
            </div>

            {/* USP 2 - Beginner Friendly */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect voor Beginners</h3>
              <p className="text-gray-600">
                Je hoeft niet fit te zijn om te starten. We passen alles aan op jouw niveau – of je nu 35 of 55 bent.
              </p>
            </div>

            {/* USP 3 - Warm Community */}
            <div className="text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Warme, Hechte Community</h3>
              <p className="text-gray-600">
                Sport met andere ouders en professionals. Hier support en moedig je elkaar aan – geen oordeel, alleen support.
              </p>
            </div>

            {/* USP 4 - Safe & Professional */}
            <div className="text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-chinese-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Veilig & Verantwoord</h3>
              <p className="text-gray-600">
                Blessurepreventie staat voorop. We leren je de juiste techniek zodat je veilig sterker wordt, zonder risico.
              </p>
            </div>

            {/* USP 5 - Flexible Schedule */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Past in je Drukke Schema</h3>
              <p className="text-gray-600">
                Van vroege ochtend tot late avond – er is altijd een les die past. Lessen duren 1 uur, inclusief warming-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS - 3 Simple Steps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Hoe werkt het?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Drie simpele stappen – geen verplichtingen, geen druk. Gewoon kennismaken.
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Plan een Gratis Intro</h3>
                <p className="text-lg text-gray-700">
                  Klik op de knop, kies een moment dat jou past en vul je gegevens in. Het duurt 30 seconden.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ontspannen Gesprek (Geen Training!)</h3>
                <p className="text-lg text-gray-700 mb-3">
                  We leren je kennen, beantwoorden al je vragen en laten je onze box zien. Je hoeft niet te sporten – gewoon een kop koffie en een praatje.
                </p>
                <p className="text-sm text-gray-600 italic">
                  💡 Dit noemen we een "No Sweat Intro" – letterlijk: geen zweten!
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Jouw Persoonlijke Plan</h3>
                <p className="text-lg text-gray-700">
                  Als het klikt, maken we samen een plan dat past bij jouw doelen en schema. Wil je nog even nadenken? Prima!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTA
              variant="button-primary"
              buttonText="Plan Mijn Gratis Intro"
              href="/starten"
            />
          </div>
        </div>
      </section>

      {/* 4. KICKSTART BLOCK - 28-day Beginner Program */}
      <KickstartBlock />

      {/* 5. SOCIAL PROOF - 3 Stories + Google Review */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Zij gingen je voor</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Gewone mensen met drukke levens, net als jij. Dit is wat ze bereikten.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Story 1 - Marieke */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👩</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Marieke, 39</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Moeder van 2, werkt fulltime</p>
              <p className="text-gray-700 italic mb-4">
                "Ik durfde niet te beginnen – bang dat ik het niet zou kunnen. Nu, 8 maanden later, heb ik meer energie dan in jaren.
                Mijn kinderen zien een blije mama!"
              </p>
              <div className="text-sm text-cinnabar font-semibold">
                ✅ Meer energie<br />
                ✅ 2x per week, past perfect<br />
                ✅ Warme community
              </div>
            </div>

            {/* Story 2 - Peter */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Peter, 45</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">20 jaar niet gesport</p>
              <p className="text-gray-700 italic mb-4">
                "Ik had 20 jaar niet gesport en voelde me oud. CrossFit Leiden leerde me alles vanaf nul.
                Nu til ik mijn dochter weer moeiteloos op!"
              </p>
              <div className="text-sm text-cinnabar font-semibold">
                ✅ Van 0 naar sterk in 6 maanden<br />
                ✅ Blessurevrij<br />
                ✅ Nieuwe vrienden
              </div>
            </div>

            {/* Story 3 - Lisa */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Lisa, 38</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Drukke ondernemer</p>
              <p className="text-gray-700 italic mb-4">
                "Dacht altijd: 'Geen tijd'. Totdat ik besefte dat 3 uur per week investeren me 10x meer energie geeft.
                Beste beslissing ooit."
              </p>
              <div className="text-sm text-cinnabar font-semibold">
                ✅ Beter slapen<br />
                ✅ Minder stress<br />
                ✅ Meer productief
              </div>
            </div>
          </div>

          {/* Google Review Score */}
          <div className="max-w-md mx-auto bg-gradient-to-br from-cinnabar/10 to-verdigris/10 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-4xl font-bold">4.9</span>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 text-jonquil fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Google Reviews</p>
              </div>
            </div>
            <p className="text-gray-700 font-medium">
              "Beste box van Leiden! Coaches zijn super betrokken en community is geweldig." – 127 reviews
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/ervaringen" className="text-cinnabar font-semibold hover:underline text-lg inline-flex items-center gap-2">
              Lees meer verhalen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FAQ - 6 Common Beginner Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Veelgestelde Vragen</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Deze vragen krijgen we vaak. Herken je jezelf?
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Ben ik wel fit genoeg om te beginnen met CrossFit?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Absoluut! Je hoeft helemaal niet fit te zijn om te starten. 80% van onze leden had geen enkele sportervaring toen ze begonnen.
                We passen elke oefening aan op jouw niveau – of je nu 20 jaar niet hebt gesport of juist wel actief bent.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Hoe vaak moet ik komen?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                We raden 2-3x per week aan voor goede resultaten, maar je mag komen zo vaak als je wilt met jouw lidmaatschap.
                Veel drukke ouders komen 2x per week en zien al geweldige vooruitgang. Kwaliteit boven kwantiteit!
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Is CrossFit niet gevaarlijk? Ik wil geen blessures...</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Begrijpelijk dat je dat denkt! Maar juist door onze begeleiding is CrossFit véél veiliger dan alleen sporten.
                We leren je eerst de juiste techniek met lichte gewichten. Pas als je beweging goed zit, gaan we verder.
                Blessurepreventie staat bij ons voorop.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Ben ik niet te oud om te beginnen?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Helemaal niet! Onze leden zijn tussen de 20 en 65 jaar, met de meesten tussen 35-50.
                CrossFit is juist perfect voor "oudere" beginners omdat we alles aanpassen aan jouw lichaam en doelen.
                Je bent nooit te oud om sterker en gezonder te worden!
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Heb ik echt geen tijd, met werk en kinderen...</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                We snappen dat! Daarom duren onze lessen precies 1 uur (inclusief warming-up en cooling-down).
                We hebben lessen van 06:00 tot 20:30, dus er is altijd wel een moment dat past.
                Veel leden komen voor het werk, in de lunchpauze of 's avonds als de kids op bed liggen.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Wat gebeurt er tijdens de Gratis Intro?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                De intro duurt 20-30 minuten. We leren je kennen, praten over je doelen en zorgen, laten je de box zien en beantwoorden al je vragen.
                Je hoeft NIET te sporten tijdens deze intro – gewoon kennismaken. Daarna maken we samen een plan als je door wilt.
                Geen verplichtingen, geen druk!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CTA - Warm Final Push */}
      <CTA
        variant="footer"
        title="Zie je jezelf hier al sporten?"
        description="Plan je gratis intro – het is vrijblijvend, duurt 20 minuten en je hoeft niet te sporten. Gewoon kennismaken en kijken of het klikt. We kijken ernaar uit!"
        buttonText="Ja, ik wil kennismaken!"
        href="/starten"
      />
    </>
  );
}
