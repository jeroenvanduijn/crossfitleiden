import Link from "next/link";
import CTA from "@/components/CTA";

export default function OverOns() {
  return (
    <>
      {/* Hero Section - More Personal */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gewone mensen, buitengewone resultaten
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              CrossFit Leiden is een plek waar drukke ouders, professionals en beginners samen sterker worden.
              Geen oordeel, geen druk – gewoon samen trainen en groeien.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story - Warmer & More Personal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom CrossFit Leiden anders is</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                We zijn geen typische sportschool. CrossFit Leiden is opgericht vanuit een simpele gedachte:
                <strong> iedereen moet zich welkom voelen om te sporten</strong> – ongeacht je leeftijd, fitheid of ervaring.
              </p>
              <p>
                Geen macho-cultuur of intimiderende sfeer. Hier train je naast andere ouders die net zo druk zijn als jij,
                professionals die na een lange werkdag komen, en mensen die misschien 20 jaar niet hebben gesport.
                <strong> Iedereen begint ergens</strong>, en wij helpen je op weg.
              </p>
              <p>
                We begrijpen hoe het voelt om te twijfelen: "Ben ik wel fit genoeg?", "Heb ik wel tijd?", "Pas ik hier wel?"
                Het antwoord is altijd: <strong>ja!</strong> Onze community is gebouwd op support, niet op oordeel.
                Hier kennen we elkaars naam, vieren we elkaars successen (groot of klein), en moedigen we elkaar aan.
              </p>
              <div className="bg-cinnabar/10 rounded-xl p-6">
                <p className="font-semibold text-gray-900 mb-2">
                  💡 Onze missie is simpel:
                </p>
                <p className="text-gray-700">
                  Drukke mensen helpen meer energie, kracht en zelfvertrouwen te vinden – zodat je er niet alleen fitter uitziet,
                  maar je ook beter voelt in je eigen vel. Voor je gezin, je werk, en vooral: voor jezelf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - NEW */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Waar we voor staan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community &gt; Competitie</h3>
              <p className="text-gray-700">
                We zijn geen competitie-gym. Hier train je samen, moedig je elkaar aan en vier je elkaars vooruitgang.
                Vriendschap staat voorop.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Iedereen Welkom</h3>
              <p className="text-gray-700">
                Of je nu 25 of 55 bent, fit of niet, ervaren of beginner – je bent hier welkom zoals je bent.
                Wij passen ons aan jou aan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Persoonlijke Aandacht</h3>
              <p className="text-gray-700">
                Je bent geen nummer bij ons. Onze coaches kennen je naam, je doelen en je uitdagingen.
                We begeleiden je persoonlijk.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/over-ons/team" className="text-cinnabar font-semibold hover:underline text-lg inline-flex items-center gap-2">
              Ontmoet ons team
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA - Updated */}
      <CTA
        variant="footer"
        title="Wil je ons leren kennen?"
        description="Plan een gratis intro en ontmoet ons team, zie de box en ervaar de sfeer. Geen sporten, gewoon kennismaken over een kop koffie. We kijken ernaar uit!"
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />
    </>
  );
}
