import Link from "next/link";

export default function Hyrox() {
  return (
    <>
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hyrox Lessen 🏃</h1>
          <p className="text-xl max-w-2xl">
            De fitness race voor iedereen. Train specifiek voor Hyrox events of gebruik het als ultimate endurance challenge!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Hyrox?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hyrox is dé snelst groeiende fitness race wereldwijd. Het format is simpel maar uitdagend:
              8 rondes van 1 km hardlopen afgewisseld met een functioneel fitness station (zoals sled push, burpees, rowing).
            </p>
            <p className="text-lg text-gray-700">
              Ons Hyrox trainingsprogramma bereidt je voor op officiële Hyrox events of geeft je een nieuw doel om naartoe te werken!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">De 8 Hyrox Stations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['SkiErg', 'Sled Push', 'Sled Pull', 'Burpee Broad Jump', 'Rowing', 'Farmers Carry', 'Sandbag Lunges', 'Wall Balls'].map((station) => (
              <div key={station} className="bg-white rounded-lg p-4 text-center">
                <p className="font-semibold">{station}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Onze Hyrox Training</h2>
            <div className="space-y-4">
              <div className="bg-jonquil/10 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">🏃 Endurance Building</h3>
                <p className="text-gray-700">Werk aan je running base en cardio capacity</p>
              </div>
              <div className="bg-jonquil/10 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">💪 Station Practice</h3>
                <p className="text-gray-700">Oefen alle 8 stations tot je ze perfect beheerst</p>
              </div>
              <div className="bg-jonquil/10 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">🎯 Race Simulations</h3>
                <p className="text-gray-700">Volledige of gedeeltelijke race simulaties</p>
              </div>
              <div className="bg-jonquil/10 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">📊 Pacing Strategy</h3>
                <p className="text-gray-700">Leer hoe je je energie verdeelt over 8 rondes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-jonquil/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Aankomende Hyrox Event</h2>
          <p className="text-lg text-gray-700 mb-6">
            Train met ons mee naar het volgende officiële Hyrox event!
          </p>
          <Link href="/events/hyrox-simulation" className="bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all inline-block">
            Hyrox Simulation Event
          </Link>
        </div>
      </section>

      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start met Hyrox Training</h2>
          <Link href="/starten" className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Doe een Proefles
          </Link>
        </div>
      </section>
    </>
  );
}
