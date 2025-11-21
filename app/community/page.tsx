import Link from "next/link";
import CTA from "@/components/CTA";

export default function Community() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-red-500 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze Community ❤️</h1>
          <p className="text-xl max-w-2xl">
            Meer dan een sportschool. Een plek waar vriendschappen ontstaan en we successen vieren.
          </p>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Samen sta je sterker</h2>
            <p className="text-lg text-gray-700 mb-8">
              Bij CrossFit Leiden train je nooit alleen. Of je nu als laatste eindigt of als eerste, 
              iedereen moedigt elkaar aan tot de laatste rep. We zijn een diverse groep mensen – 
              van studenten tot drukke ouders en gepensioneerden – verbonden door de wil om fitter te worden.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Content Blokken */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          
          {/* Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4">Social Events</h3>
              <p className="text-lg text-gray-700 mb-4">
                We houden van gezelligheid! Naast hard trainen organiseren we regelmatig leuke dingen:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center">🎉 Community BBQ's</li>
                <li className="flex items-center">🏋️ Clubkampioenschappen (voor elk niveau)</li>
                <li className="flex items-center">🎄 Kerstdiner & Nieuwjaarsborrel</li>
                <li className="flex items-center">🏖️ Beach workouts in de zomer</li>
              </ul>
              <Link href="/events" className="cta-button-secondary">
                Bekijk onze Agenda
              </Link>
            </div>
            <div className="order-1 md:order-2 bg-gray-200 h-80 rounded-xl flex items-center justify-center text-gray-500">
              [Foto: Gezellige BBQ of Groepsfoto]
            </div>
          </div>

          {/* Member Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center text-gray-500">
              [Foto: Lachend lid tijdens training]
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Leden aan het woord</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <p className="italic text-gray-700 mb-4">
                  "Ik kwam voor de training, maar bleef voor de mensen. 
                  Ik heb hier vrienden voor het leven gemaakt."
                </p>
                <p className="font-bold text-cinnabar">- Rob (34)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-700 mb-4">
                  "Doodeng vond ik het in het begin. Maar iedereen was zo aardig en behulpzaam. 
                  Ik voelde me direct thuis."
                </p>
                <p className="font-bold text-cinnabar">- Annet (52)</p>
              </div>
            </div>
          </div>

          {/* High Fives */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">De 'High Five' Cultuur</h3>
            <p className="text-lg text-gray-700 mb-8">
              Bij ons is er geen spiegelwand. We kijken naar elkaar om te helpen, niet om te oordelen. 
              Een high-five na de workout is standaard. We vieren elke overwinning, hoe klein ook.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Zachte CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Word onderdeel van de familie</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kom sfeer proeven en ontmoet onze leden tijdens een gratis intro.
          </p>
          <CTA variant="primary-intro-alt2" />
        </div>
      </section>
    </>
  );
}
