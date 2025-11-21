import Link from "next/link";

export default function PrivateCoaching() {
  return (
    <>
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Private Coaching 👤</h1>
          <p className="text-xl max-w-2xl">
            1-op-1 Personal Training. Volledig gepersonaliseerd, maximale aandacht, flexibele tijden.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Private Coaching?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bij private coaching train je 1-op-1 met één van onze gecertificeerde coaches. De volledige focus ligt op
              jouw doelen, jouw bewegingspatronen en jouw vooruitgang.
            </p>
            <p className="text-lg text-gray-700">
              Dit is perfect voor mensen met specifieke doelen (wedstrijdvoorbereiding, revalidatie) of mensen die
              simpelweg de voorkeur geven aan individuele begeleiding.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat krijg je?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Gepersonaliseerd Programma</h3>
              <p className="text-gray-700">Training volledig afgestemd op jouw doelen en niveau</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-3">Exclusieve Aandacht</h3>
              <p className="text-gray-700">100% focus op jouw techniek en progressie</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Flexibele Tijden</h3>
              <p className="text-gray-700">Plan sessies wanneer het jou uitkomt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pakketten & Tarieven</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Enkele Sessie</h3>
                  <p className="text-sm text-gray-600">60 minuten 1-op-1 training</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cinnabar">€75</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">5 Sessies Pakket</h3>
                  <p className="text-sm text-gray-600">5x 60 minuten (€70 per sessie)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cinnabar">€350</p>
                  <p className="text-sm text-green-600">Bespaar €25</p>
                </div>
              </div>
              <div className="bg-chinese-violet/10 border-2 border-chinese-violet rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">10 Sessies Pakket ⭐</h3>
                  <p className="text-sm text-gray-600">10x 60 minuten (€65 per sessie)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cinnabar">€650</p>
                  <p className="text-sm text-green-600">Bespaar €100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-chinese-violet text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start met Private Coaching</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Boek een intakegesprek en we bespreken jouw doelen en hoe we je kunnen helpen.
          </p>
          <Link href="/contact" className="bg-white text-chinese-violet px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Boek Intakegesprek
          </Link>
        </div>
      </section>
    </>
  );
}
