import Link from "next/link";

export default function PreTeens() {
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-cyan-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pre-teens CrossFit (8-12 jaar) 👦👧</h1>
          <p className="text-xl max-w-2xl">
            CrossFit voor kinderen 8-12 jaar. Sterker worden, zelfvertrouwen opbouwen en plezier hebben!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">CrossFit voor Pre-teens</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze Pre-teens lessen (8-12 jaar) zijn speciaal ontworpen voor kinderen in de basisschoolleeftijd.
              We focussen op fun, beweging en het opbouwen van een gezonde relatie met sport en fitness.
            </p>
            <p className="text-lg text-gray-700">
              Alle oefeningen zijn aangepast aan hun leeftijd en ontwikkeling, met veel nadruk op correcte bewegingspatronen
              die ze hun hele leven kunnen gebruiken!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Waarom CrossFit voor Pre-teens?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Fysieke Ontwikkeling</h3>
              <p className="text-gray-700">Bouw kracht, coördinatie en conditie op tijdens een cruciale groeifase</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">😊</div>
              <h3 className="text-xl font-bold mb-3">Zelfvertrouwen</h3>
              <p className="text-gray-700">Ontdek wat je lichaam kan en voel je sterker en zekerder</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3">Fun & Games</h3>
              <p className="text-gray-700">Leren door spelen - workouts voelen als een uitdaging, niet als een taak</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Sociale Vaardigheden</h3>
              <p className="text-gray-700">Samenwerken, teamwork en elkaar aanmoedigen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Hoe ziet een les eruit?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Warming-up met spelletjes (10 min)</h3>
                  <p className="text-gray-700">Tikspelletjes, estafettes en dynamische stretching</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Skill Practice (15 min)</h3>
                  <p className="text-gray-700">Leer een beweging (bijv. squats, push-ups) op speelse manier</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Workout (15 min)</h3>
                  <p className="text-gray-700">Een leuke, aangepaste WOD in teams of individueel</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cool-down & High-fives (5 min)</h3>
                  <p className="text-gray-700">Afsluiten met stretching en elkaar feliciteren!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-verdigris/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Praktische Info</h2>
            <div className="bg-white rounded-xl p-8">
              <div className="space-y-4 text-left">
                <div>
                  <p className="font-semibold text-lg mb-1">📅 Wanneer?</p>
                  <p className="text-gray-700">Maandag, Woensdag & Vrijdag 16:00-17:00</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">👥 Groepsgrootte</p>
                  <p className="text-gray-700">Maximaal 12 kinderen per les</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">💶 Prijs</p>
                  <p className="text-gray-700">€45 per maand (onbeperkt lessen)</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">👨‍👩‍👧 Ouders</p>
                  <p className="text-gray-700">Ouders mogen de eerste les meekijken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-verdigris text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Laat je kind sporten met plezier!</h2>
          <p className="text-xl mb-8">Meld je kind aan voor een gratis proefles.</p>
          <Link href="/starten" className="bg-white text-verdigris px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Proefles Aanmelden
          </Link>
        </div>
      </section>
    </>
  );
}
