import Link from "next/link";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero Sectie */}
      <section className="relative bg-gray-900 text-white section-padding">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70 z-10"></div>
        {/* Background image would go here - echte CFL foto */}
        <div className="relative z-20 container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fit worden zonder stress
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Bij CrossFit Leiden help je jezelf fitter te worden, op jouw tempo. 
              Geen druk, wel resultaat.
            </p>
            <CTA variant="primary-intro" />
          </div>
        </div>
      </section>

      {/* 2. Waarom CrossFit Leiden? (4-5 USP's) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Waarom CrossFit Leiden?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* USP 1 - Persoonlijke coaching */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Persoonlijke coaching</h3>
              <p className="text-gray-600">
                Onze coaches kijken naar jou. Ze helpen je veilig vooruitgang te boeken, op jouw niveau.
              </p>
            </div>

            {/* USP 2 - Beginnersvriendelijk */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Beginnersvriendelijk</h3>
              <p className="text-gray-600">
                Nog nooit gesport? Geen probleem. We beginnen bij de basis en bouwen rustig op.
              </p>
            </div>

            {/* USP 3 - Warme community */}
            <div className="text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Warme community</h3>
              <p className="text-gray-600">
                Je traint samen met mensen die je steunen. Geen competitie, wel samen sterk worden.
              </p>
            </div>

            {/* USP 4 - Veilig en goed begeleid */}
            <div className="text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-chinese-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Veilig en goed begeleid</h3>
              <p className="text-gray-600">
                Techniek staat voorop. Onze coaches zorgen dat je op een veilige manier sterker wordt.
              </p>
            </div>

            {/* USP 5 - Past bij drukke agenda's */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Past bij drukke agenda's</h3>
              <p className="text-gray-600">
                Vroege ochtend, late avond – altijd een les die past. Flexibel en efficiënt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hoe werkt starten? (3 stappen) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Hoe werkt starten?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Stap 1 */}
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-cinnabar rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Plan gratis No Sweat Intro</h3>
                <p className="text-gray-700">
                  Vul het formulier in en kies een tijd die jou uitkomt. Geen verplichtingen, gewoon kennismaken.
                </p>
              </div>

              {/* Stap 2 */}
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-verdigris rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Rustig gesprek (GEEN workout)</h3>
                <p className="text-gray-700">
                  We praten over jouw doelen, eventuele zorgen en hoe we je kunnen helpen. In een ontspannen sfeer.
                </p>
              </div>

              {/* Stap 3 */}
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-jonquil rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Persoonlijk plan + veilig starten</h3>
                <p className="text-gray-700">
                  Samen maken we een plan dat bij jou past. Daarna start je op een veilige manier met je eerste training.
                </p>
              </div>
            </div>
            <div className="text-center">
              <CTA variant="primary-intro" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Social Proof (3 verhalen) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Verhalen van echte beginners
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Google Reviews: 4.9/5 ⭐⭐⭐⭐⭐
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Verhaal 1 - Marieke */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👩</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Marieke, 39</h3>
                  <p className="text-gray-600 text-sm">Moeder van 2</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Ik was bang dat ik te oud was en niet fit genoeg. Maar de coaches hebben me zo gerustgesteld. Nu train ik 2x per week en voel ik me sterker dan ooit!"
              </p>
              <p className="text-sm text-gray-600">
                Was bang om te starten
              </p>
            </div>

            {/* Verhaal 2 - Peter */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👨</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Peter, 45</h3>
                  <p className="text-gray-600 text-sm">Nooit gesport</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Ik dacht dat ik te oud was om nog te beginnen. Maar bij CrossFit Leiden voelde ik me meteen welkom. Iedereen helpt elkaar, ongeacht je niveau."
              </p>
              <p className="text-sm text-gray-600">
                Dacht te oud te zijn
              </p>
            </div>

            {/* Verhaal 3 - Lisa */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👩</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Lisa, 38</h3>
                  <p className="text-gray-600 text-sm">Drukke baan</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Ik had geen tijd en voelde me schuldig dat ik niet voor mezelf zorgde. Nu train ik 's ochtends vroeg en geeft het me energie voor de hele dag!"
              </p>
              <p className="text-sm text-gray-600">
                Geen tijd, schuldgevoel
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/ervaringen" className="text-cinnabar font-semibold hover:underline">
              Meer verhalen lezen →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQ (6 vragen) */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Veelgestelde Vragen
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Moet ik fit zijn om te starten?</h3>
              <p className="text-gray-700">
                Nee, absoluut niet! Onze trainingen zijn juist bedoeld om je fit te máken. We passen elke oefening aan op jouw niveau. Je zult zien dat er allerlei niveaus meedoen.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat is een No Sweat Intro?</h3>
              <p className="text-gray-700">
                Een No Sweat Intro is een rustig gesprek (geen workout!) waarin we kennismaken. We praten over jouw doelen, eventuele zorgen en hoe we je kunnen helpen. Alles op jouw tempo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat gebeurt er tijdens de intro?</h3>
              <p className="text-gray-700">
                We geven je een rondleiding, praten over wat je wilt bereiken en beantwoorden al je vragen. Geen druk, geen verplichtingen. Gewoon kennismaken in een ontspannen sfeer.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat kost het?</h3>
              <p className="text-gray-700">
                De No Sweat Intro is volledig gratis en vrijblijvend. Daarna kun je kiezen uit verschillende lidmaatschappen. Kijk gerust bij{" "}
                <Link href="/tarieven" className="text-cinnabar font-semibold hover:underline">
                  Tarieven
                </Link>{" "}
                of vraag het tijdens je intro.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Hoe vaak moet ik komen?</h3>
              <p className="text-gray-700">
                We raden 2-3x per week aan voor het beste resultaat, maar zelfs 1x per week is al een goed begin! Consistentie is belangrijker dan frequentie. We denken flexibel met je mee.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat als ik blessures heb?</h3>
              <p className="text-gray-700">
                Geen probleem! Onze coaches hebben ervaring met het aanpassen van trainingen. Geef je blessure aan tijdens je intro, dan houden we er rekening mee en zorgen we dat je veilig kunt trainen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor de eerste stap?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Plan een gratis No Sweat Intro en ontdek hoe makkelijk starten kan. 
            Geen druk, geen verplichtingen. Gewoon kennismaken.
          </p>
          <CTA variant="primary-intro-alt2" />
        </div>
      </section>
    </>
  );
}
