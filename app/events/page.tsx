import Link from "next/link";
import CTA from "@/components/CTA";

export default function Events() {
  const upcomingEvents = [
    {
      date: "24 SEP",
      title: "Hyrox Simulation",
      description: "Test je fitheid in deze volledige Hyrox simulatie. Alle 8 stations, 8km hardlopen.",
      time: "09:00 - 13:00",
      location: "CrossFit Leiden",
      link: "/events/hyrox-simulation"
    },
    {
      date: "12 OKT",
      title: "Bring a Friend Week",
      description: "De hele week mogen leden gratis een vriend(in) meenemen naar de training.",
      time: "Alle lessen",
      location: "CrossFit Leiden",
      link: "/contact"
    },
    {
      date: "31 OKT",
      title: "Halloween Throwdown",
      description: "Spooky workout in het donker! Verkleed komen mag (graag zelfs).",
      time: "19:30 - 21:00",
      location: "CrossFit Leiden",
      link: "/contact"
    }
  ];

  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Agenda & Events 📅</h1>
          <p className="text-xl max-w-2xl">
            Blijf op de hoogte van alles wat er speelt in onze box.
          </p>
        </div>
      </section>

      {/* 2. Events List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Aankomende Evenementen</h2>
            
            <div className="space-y-6">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6 border border-gray-200 hover:border-jonquil transition-colors">
                  {/* Date Badge */}
                  <div className="bg-white rounded-lg p-4 text-center min-w-[100px] flex flex-col justify-center shadow-sm">
                    <span className="text-cinnabar font-bold text-xl uppercase">{event.date.split(" ")[1]}</span>
                    <span className="text-gray-900 font-bold text-3xl">{event.date.split(" ")[0]}</span>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">🕒 {event.time}</span>
                      <span className="flex items-center">📍 {event.location}</span>
                    </div>
                    <Link href={event.link} className="text-cinnabar font-semibold hover:underline">
                      Meer info & Aanmelden →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Kalender Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Reguliere Activiteiten</h2>
            <p className="text-gray-700 mb-8">
              Naast deze speciale events hebben we natuurlijk ons vaste rooster en terugkerende activiteiten 
              zoals de zaterdagochtend team-workout en de maandelijkse borrel.
            </p>
            <Link href="/rooster" className="cta-button-secondary">
              Bekijk het Lesrooster
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mis niets!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Volg ons op Instagram voor de laatste updates en foto's van onze events.
          </p>
          <a 
            href="https://instagram.com/crossfitleiden" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Volg op Instagram
          </a>
        </div>
      </section>
    </>
  );
}
