import Link from "next/link";
import CTA from "@/components/CTA";

export default function Aanbod() {
  const services = [
    {
      icon: "🏋️",
      title: "Groepslessen",
      description: "Train samen op jouw niveau. Gevarieerd, effectief en altijd onder begeleiding.",
      features: [
        "60 minuten training",
        "Max 12 personen",
        "Altijd een coach erbij",
        "Voor elk niveau"
      ],
      link: "/aanbod/groepslessen"
    },
    {
      icon: "🎯",
      title: "Beginners",
      description: "Nieuw met fitness? Geen zorgen. We leren je de basis in een rustige omgeving.",
      features: [
        "Veilig starten",
        "Extra aandacht techniek",
        "Geen ervaring nodig",
        "Stap voor stap"
      ],
      link: "/starten"
    },
    {
      icon: "👤",
      title: "Private Coaching",
      description: "1-op-1 begeleiding voor specifieke doelen of extra aandacht.",
      features: [
        "100% persoonlijke aandacht",
        "Eigen schema",
        "Flexibel inplannen",
        "Sneller resultaat"
      ],
      link: "/aanbod/private-coaching"
    },
    {
      icon: "🍎",
      title: "Nutrition",
      description: "Gezond eten zonder ingewikkelde diëten. Praktisch en haalbaar.",
      features: [
        "Geen streng dieet",
        "Tips voor drukke levens",
        "Gezonde gewoontes",
        "Blijvend resultaat"
      ],
      link: "/nutrition"
    }
  ];

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ons Aanbod</h1>
          <p className="text-xl max-w-2xl">
            Of je nu net begint of al jaren traint – wij hebben een programma dat bij jou past.
            Veilig, effectief en altijd onder begeleiding.
          </p>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hoe wil jij trainen?</h2>
            <p className="text-lg text-gray-700">
              Bij CrossFit Leiden geloven we in maatwerk. Iedereen is anders, en elk leven is anders.
              Daarom bieden we verschillende manieren om fit te worden. Kies wat bij jou past.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all border border-gray-100 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className="text-verdigris font-semibold hover:underline mt-auto flex items-center">
                  Meer informatie <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Other Programs List */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Speciale Programma's</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/aanbod/hyrox" className="bg-white border border-gray-200 p-4 rounded-lg hover:border-cinnabar hover:shadow-md transition-all text-center">
                <span className="block font-bold mb-1">Hyrox</span>
                <span className="text-sm text-gray-600">Fitness racing voor iedereen</span>
              </Link>
              <Link href="/aanbod/getshredded" className="bg-white border border-gray-200 p-4 rounded-lg hover:border-cinnabar hover:shadow-md transition-all text-center">
                <span className="block font-bold mb-1">GetShredded</span>
                <span className="text-sm text-gray-600">8-weeks transformatie programma</span>
              </Link>
              <Link href="/aanbod/unlock-motion" className="bg-white border border-gray-200 p-4 rounded-lg hover:border-cinnabar hover:shadow-md transition-all text-center">
                <span className="block font-bold mb-1">Unlock Motion</span>
                <span className="text-sm text-gray-600">Mobiliteit & pijnvrij bewegen</span>
              </Link>
              <Link href="/aanbod/pre-teens" className="bg-white border border-gray-200 p-4 rounded-lg hover:border-cinnabar hover:shadow-md transition-all text-center">
                <span className="block font-bold mb-1">Pre-teens (8-12j)</span>
                <span className="text-sm text-gray-600">Spelenderwijs fit worden</span>
              </Link>
              <Link href="/aanbod/teens" className="bg-white border border-gray-200 p-4 rounded-lg hover:border-cinnabar hover:shadow-md transition-all text-center">
                <span className="block font-bold mb-1">Teens (13-17j)</span>
                <span className="text-sm text-gray-600">Sterk & zelfverzekerd</span>
              </Link>
              <Link href="/aanbod/sports-performance" className="bg-white border border-gray-200 p-4 rounded-lg hover:border-cinnabar hover:shadow-md transition-all text-center">
                <span className="block font-bold mb-1">Sports Performance</span>
                <span className="text-sm text-gray-600">Voor sportteams</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Waarom CrossFit Leiden? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meer dan alleen training</h2>
            <p className="text-lg text-gray-700 mb-8">
              Bij ons gaat het niet alleen om zweten. Het gaat om een complete aanpak: 
              training, voeding, mindset en community. Zo werk je aan een fitte lifestyle 
              die je wél volhoudt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">✅ Persoonlijk</h4>
                <p className="text-sm text-gray-600">We kennen je naam en je doelen.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">✅ Flexibel</h4>
                <p className="text-sm text-gray-600">Rooster dat past bij jouw leven.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">✅ Plezier</h4>
                <p className="text-sm text-gray-600">Sporten moet leuk zijn, anders houd je het niet vol.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weet je niet zeker wat bij je past?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Geen probleem! Plan een gratis No Sweat Intro, dan kijken we samen wat het beste werkt voor jou.
          </p>
          <CTA variant="primary-intro-alt2" />
        </div>
      </section>
    </>
  );
}
