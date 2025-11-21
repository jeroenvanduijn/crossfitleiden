import Link from "next/link";
import CTA from "@/components/CTA";

export default function Nutrition() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-r from-verdigris to-teal-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gezond eten zonder gedoe 🍎</h1>
          <p className="text-xl max-w-2xl">
            Leer hoe je jezelf (en je gezin) voedt met energie, zonder uren in de keuken te staan 
            of saaie diëten te volgen.
          </p>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom is voeding vaak zo lastig?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Je wilt gezond eten, maar je hebt een drukke baan, een gezin, en weinig tijd. 
              Dan is het verleidelijk om voor snel en makkelijk te kiezen. Of je probeert een streng dieet, 
              houdt het twee weken vol, en valt dan terug in oude patronen.
            </p>
            <p className="text-lg text-gray-700">
              Bij CrossFit Leiden pakken we het anders aan. Wij geloven niet in 'verboden producten' of honger lijden. 
              Wij leren je hoe je gezonde keuzes maakt die passen in jouw drukke leven. Zodat je meer energie hebt 
              voor de dingen die écht belangrijk zijn.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Onze Aanpak */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze aanpak: Simpel & Haalbaar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mb-3">Family Proof</h3>
              <p className="text-gray-700">
                Je hoeft niet apart te koken. Onze tips zijn geschikt voor het hele gezin.
                Gezond eten wordt zo een gewoonte voor iedereen.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3">Tijdbesparend</h3>
              <p className="text-gray-700">
                Slimme meal prep tips en snelle recepten voor drukke dagen. 
                Gezond eten hoeft niet veel tijd te kosten.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold mb-3">Geen Dieet</h3>
              <p className="text-gray-700">
                Geen honger, geen strikte regels. We focussen op wat je wél mag eten 
                en hoe je je lichaam voedt met energie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Hoe kunnen we je helpen?</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 1-op-1 Coaching */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-verdigris transition-colors">
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">1-op-1 Nutrition Coaching</h3>
                  <p className="text-gray-700 mb-4">
                    Persoonlijke begeleiding van een van onze coaches. We analyseren je huidige patroon,
                    stellen doelen en maken een plan dat écht bij jou past.
                  </p>
                  <ul className="space-y-1 text-gray-700 mb-4 text-sm">
                    <li className="flex items-center">✅ Intake gesprek & doelen bepalen</li>
                    <li className="flex items-center">✅ Persoonlijk plan (geen standaard schema)</li>
                    <li className="flex items-center">✅ Wekelijkse check-ins & aanpassingen</li>
                    <li className="flex items-center">✅ WhatsApp support voor lastige momenten</li>
                  </ul>
                </div>
                <div className="text-right min-w-[150px]">
                  <p className="font-bold text-2xl text-verdigris mb-2">€125</p>
                  <p className="text-sm text-gray-500 mb-4">per 4 weken</p>
                  <Link href="/contact" className="cta-button-secondary text-sm px-6 py-3">
                    Meer info
                  </Link>
                </div>
              </div>
            </div>

            {/* Kickstart */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-verdigris transition-colors">
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Nutrition Kickstart</h3>
                  <p className="text-gray-700 mb-4">
                    Een eenmalige sessie om je op weg te helpen. We kijken naar je voeding 
                    en geven je direct toepasbare tips en een basisstructuur.
                  </p>
                </div>
                <div className="text-right min-w-[150px]">
                  <p className="font-bold text-2xl text-verdigris mb-2">€75</p>
                  <p className="text-sm text-gray-500 mb-4">eenmalig (60 min)</p>
                  <Link href="/contact" className="cta-button-secondary text-sm px-6 py-3">
                    Boek sessie
                  </Link>
                </div>
              </div>
            </div>

            {/* E-book */}
            <div className="bg-verdigris/5 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Gratis E-book: "Gezond Eten voor Drukke Ouders"</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Ontdek onze top 10 tips, 5 snelle recepten en een handige boodschappenlijst.
                Helemaal gratis, om je op weg te helpen.
              </p>
              <CTA variant="content-download" href="/contact" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="section-padding bg-verdigris text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar voor meer energie?</h2>
          <p className="text-xl mb-8">
            Start vandaag nog met kleine veranderingen die een groot verschil maken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-verdigris px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
