"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function OverOns() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gewone mensen, buitengewone resultaten
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              CrossFit Leiden is een plek waar drukke ouders, young professionals, studenten, expats en mensen die lang niet hebben gesport samen sterker worden. Geen oordeel, geen druk. Gewoon samen trainen en groeien.
            </p>
          </div>
        </div>
      </section>

      {/* Waarom CrossFit Leiden anders is */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom CrossFit Leiden anders is</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                We zijn geen typische sportschool. CrossFit Leiden is opgericht vanuit een simpele gedachte: <strong>iedereen moet zich welkom voelen om te sporten</strong>, ongeacht je leeftijd, fitheid of ervaring.
              </p>
              <p>
                Geen macho-cultuur of intimiderende sfeer. Hier train je naast ouders die na het kinderbedtijd nog komen, young professionals die voor hun werk komen, studenten die hun eerste barbell oppakken, expats die een nieuwe community zoeken, en mensen die 10 of 20 jaar niet hebben gesport. Ook leden die specifiek voor Hyrox trainen of extra uitdaging zoeken vinden hier hun plek. <strong>Iedereen begint ergens</strong>, en wij helpen je op weg.
              </p>
              <p>
                We begrijpen hoe het voelt om te twijfelen: "Ben ik wel fit genoeg?", "Heb ik wel tijd?", "Pas ik hier wel?" Het antwoord is altijd: <strong>ja!</strong> Onze community is gebouwd op support, niet op oordeel. Hier kennen we elkaars naam, vieren we elkaars successen (groot of klein), en moedigen we elkaar aan.
              </p>
              <p>
                We trainen niet alleen in de gym. We gaan ook samen uitdagingen aan buiten de box: Hyrox events, runs, outdoor challenges en trips. De gym is het middel, maar het doel is dat je sterker en zelfverzekerder in je leven staat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Het verhaal achter CrossFit Leiden */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Het verhaal achter CrossFit Leiden</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Ik ben Jeroen, oprichter van CrossFit Leiden.
              </p>
              <p>
                Voordat ik deze gym startte, werkte ik op kantoor als business controller bij Samsung. Ik zat hele dagen achter een bureau, voelde me steeds minder fit, werd zwaarder en merkte dat mijn zelfvertrouwen langzaam wegzakte. Ik was niet diep ongelukkig, maar ik voelde heel duidelijk: dit is het niet voor mij.
              </p>
              <p>
                Rond 2013 zag ik online een video van iemand die CrossFit deed. Iemand die vol zelfvertrouwen aan het sporten was. Ik voelde meteen: dat mis ik. Kort daarna ben ik begonnen met trainen, eerst bij CrossFit Bink en later bij Gymbox Noordwijk. Langzaam veranderde alles. Ik werd sterker, fitter en vooral veel zekerder in mijn lijf. Die energie sloeg ook over op mijn vriendin, nu mijn vrouw.
              </p>
              <p>
                Op een gegeven moment wist ik: ik wil niet alleen cijfers in Excel beter maken, ik wil mensen beter laten voelen in hun eigen lichaam. In 2016 ben ik samen met Kees Houwaart, eigenaar van Gymbox Noordwijk, CrossFit Leiden gestart.
              </p>
              <p>
                Sindsdien hebben we al meer dan 3.000 mensen mogen helpen. We hebben zo veel geleerd, zo veel verhalen gehoord en een community gebouwd waar ik zelf elke dag trots binnenstap.
              </p>
              <p>
                Inmiddels ben ik vader van twee kinderen en zie ik nog duidelijker hoe belangrijk het is dat mensen sterk en gezond blijven. We leven in een tijd waarin we bouwers nodig hebben: mensen met energie, veerkracht en plezier in wat ze doen. Ik wil dat CrossFit Leiden een positieve vuurtoren is in de stad. Een plek waar energie begint en zich verspreidt naar gezinnen, bedrijven en de straten van Leiden.
              </p>
              <p>
                Daarom is onze missie heel concreet: de komende tien jaar willen we in Leiden elke maand ongeveer tien mensen veilig laten starten. Dat zijn zo'n 120 nieuwe leden per jaar, en uiteindelijk rond de 1.200 gezinnen en ongeveer 4.800 mensen die we helpen om sterker, positiever en energieker in het leven te staan.
              </p>
              <p>
                Dat doen we niet met snelle trucs, maar met goede coaching, een sterke community en trainingen die je volhoudt. In de gym bouwen we aan kracht en vertrouwen, zodat jij daarbuiten meer durft: nieuwe uitdagingen aangaan, avonturen beleven, zakelijk groeien of gewoon weer met plezier achter je kinderen aanrennen.
              </p>
              <p>
                CrossFit Leiden is daarvoor het middel. Een tweede huiskamer waar je je gezien voelt, waar je elkaar leert kennen en waar je elke week een beetje sterker wegloopt dan je binnenkwam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onze missie voor Leiden */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Onze missie</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="text-xl font-semibold text-gray-900">
                De komende 10 jaar willen we 4800 mensen helpen om sterker, positiever en energieker te worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waar we voor staan */}
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
                We zijn geen competitie-gym. Hier train je samen, moedig je elkaar aan en vier je elkaars vooruitgang. Vriendschap staat voorop.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Iedereen Welkom</h3>
              <p className="text-gray-700 mb-4">
                Of je nu 25 of 55 bent, fit of niet, ervaren of beginner – je bent hier welkom zoals je bent. Wij passen ons aan jou aan.
              </p>
              <div className="text-sm text-gray-600 text-left space-y-1">
                <p>• Drukke ouders die tussen werk en gezin trainen</p>
                <p>• Young professionals en studenten</p>
                <p>• Expats die hun community zoeken</p>
                <p>• Mensen die 10-20 jaar niet hebben gesport</p>
                <p>• Members die Hyrox of extra uitdaging willen</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Persoonlijke Aandacht</h3>
              <p className="text-gray-700 mb-4">
                Je bent geen nummer bij ons. Onze coaches kennen je naam, je doelen en je uitdagingen. We begeleiden je persoonlijk.
              </p>
              <div className="text-sm text-gray-600 text-left space-y-1">
                <p>• Small group training voor extra begeleiding</p>
                <p>• Beginnersprogramma's om veilig te starten</p>
                <p>• Coaches die meedenken en aanpassen</p>
                <p>• Je staat er nooit alleen voor</p>
              </div>
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

      {/* CTA */}
      <section className="section-padding bg-cinnabar">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wil je ons leren kennen?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Plan een gratis intro en ontmoet ons team, zie de box en ervaar de sfeer. Geen sporten, gewoon kennismaken over een kop koffie. We kijken ernaar uit!
            </p>
            <CTAButton variant="white-bg">
              Plan een Gratis Intro
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
