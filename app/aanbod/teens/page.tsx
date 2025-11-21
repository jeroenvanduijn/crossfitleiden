import Link from "next/link";

export default function Teens() {
  return (
    <>
      <section className="bg-gradient-to-r from-cinnabar to-red-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Teens CrossFit (13-17 jaar) 🔥</h1>
          <p className="text-xl max-w-2xl">
            CrossFit voor tieners. Word sterker, fitter en zelfverzekerder. Train als een atleet!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">CrossFit voor Teens</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze Teens lessen (13-17 jaar) zijn speciaal ontworpen voor middelbare scholieren. Dit is het perfecte moment
              om echte kracht op te bouwen, atletische vaardigheden te ontwikkelen en een solide fitness basis te leggen.
            </p>
            <p className="text-lg text-gray-700">
              We trainen net als volwassenen maar met speciale aandacht voor veiligheid, correcte techniek en passende belasting
              voor groeiende lichamen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Waarom CrossFit voor Teens?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Kracht & Atletiek</h3>
              <p className="text-gray-700">Bouw echte kracht en atletische vaardigheden die je in élke sport kunt gebruiken</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Zelfvertrouwen</h3>
              <p className="text-gray-700">Zie jezelf groeien en leer dat hard work pays off</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Discipline & Focus</h3>
              <p className="text-gray-700">Leer doelen stellen, volhouden en resultaat boeken</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Social & Support</h3>
              <p className="text-gray-700">Train met leeftijdsgenoten die ook willen groeien</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Voor wie?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Teens die willen sporten naast school</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Sporters die sterker willen worden</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Beginners zonder sportachtergrond</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Teens die een uitdaging zoeken</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Praktische Info</h2>
            <div className="bg-white rounded-xl p-8">
              <div className="space-y-4 text-left">
                <div>
                  <p className="font-semibold text-lg mb-1">📅 Wanneer?</p>
                  <p className="text-gray-700">Maandag, Dinsdag, Donderdag 17:00-18:00 | Zaterdag 10:00-11:00</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">⏱️ Lesduur</p>
                  <p className="text-gray-700">60 minuten</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">👥 Groepsgrootte</p>
                  <p className="text-gray-700">Maximaal 15 teens per les</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">💶 Prijs</p>
                  <p className="text-gray-700">€55 per maand (2x per week) of €75 (onbeperkt)</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">👨‍👩‍👧 Toestemming</p>
                  <p className="text-gray-700">Ouderlijke toestemming vereist bij inschrijving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Word de beste versie van jezelf!</h2>
          <p className="text-xl mb-8">Meld je aan voor een gratis proefles.</p>
          <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Proefles Aanmelden
          </Link>
        </div>
      </section>
    </>
  );
}
