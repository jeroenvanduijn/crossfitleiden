import Link from "next/link";

export default function Nutrition() {
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-teal-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nutrition 🍎</h1>
          <p className="text-xl max-w-2xl">
            80% van je resultaat komt van wat je eet. Leer hoe je gezond eet zonder dat het voelt als een dieet.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom Nutrition zo belangrijk is</h2>
            <p className="text-lg text-gray-700 mb-4">
              Je kunt nog zo hard trainen, maar zonder de juiste voeding zie je niet de resultaten die je wilt.
              Nutrition is de foundation van je fitness journey – en wij helpen je om het simpel, haalbaar en duurzaam te maken.
            </p>
            <p className="text-lg text-gray-700">
              Geen crash diëten of onhaalbare plannen. Wij focussen op een lifestyle verandering die past bij jouw drukke leven.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Aanpak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Geen Diëten</h3>
              <p className="text-gray-700">We geloven niet in strikte diëten. We leren je hoe je bewuste keuzes maakt</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mb-3">Praktisch & Haalbaar</h3>
              <p className="text-gray-700">Speciaal voor drukke ouders: simpel, snel en gezond</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Macros & Planning</h3>
              <p className="text-gray-700">Leer wat je lichaam nodig heeft en hoe je het plant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Services</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-verdigris/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">1-op-1 Nutrition Coaching</h3>
              <p className="text-gray-700 mb-4">
                Persoonlijke begeleiding van een van onze nutrition coaches. We analyseren je huidige voedingspatroon,
                stellen doelen en maken een plan dat past bij jouw leven.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✅ Intake gesprek & doelen bepalen</li>
                <li>✅ Persoonlijk voedingsplan</li>
                <li>✅ Wekelijkse check-ins</li>
                <li>✅ WhatsApp support</li>
              </ul>
              <p className="font-bold text-xl text-cinnabar">€125 voor 4 weken</p>
            </div>

            <div className="bg-verdigris/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Workshops</h3>
              <p className="text-gray-700 mb-4">
                Maandelijkse workshops over verschillende nutrition topics: meal prep, macros uitleggen, gezond boodschappen doen, etc.
              </p>
              <p className="font-bold text-xl text-cinnabar">€25 per workshop</p>
            </div>

            <div className="bg-verdigris/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Free Resources</h3>
              <p className="text-gray-700 mb-4">
                Download ons gratis e-book "Healthy Eating voor Drukke Ouders" met tips, recepten en meal prep ideeën.
              </p>
              <Link href="/contact" className="text-verdigris font-semibold hover:underline">
                Download E-book →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-verdigris text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start met gezond eten</h2>
          <p className="text-xl mb-8">Boek een nutrition consult en ontdek hoe makkelijk het kan zijn.</p>
          <Link href="/contact" className="bg-white text-verdigris px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Boek Consult
          </Link>
        </div>
      </section>
    </>
  );
}
