import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Ervaringen() {
  // Member video testimonials
  const memberVideos = [
    {
      vimeoId: "1140347883",
      name: "Raul",
      title: "4 years of CrossFit"
    },
    {
      vimeoId: "1140347959",
      name: "Joost",
      title: "100 visits milestone"
    },
    {
      vimeoId: "1139251716",
      name: "Daan",
      title: "From Leiden to Chicago"
    },
    {
      vimeoId: "1133807494",
      name: "Elcin",
      title: "100 visits milestone"
    },
    {
      vimeoId: "1133807460",
      name: "Fleur",
      title: "300 workouts strong"
    }
  ];

  // Community photos with stories - All 21 photos
  const communityPhotos = [
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-33.jpg",
      story: "Een moment van rust midden in het avontuur. Coach Sem peddelt over de Lesse tijdens ons jaarlijkse Ardennen-weekend. Buitenlucht, lachen en samen iets nieuws proberen."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-34.jpg",
      story: "Onze community gaat verder dan de box. Tijdens dit klettersteigweekend in Oostenrijk nam lid Richard ons mee de bergen in. Spannend, veilig en vooral heel mooi."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-35.jpg",
      story: "Kamp Stoof. Bijna 20 uur samen doorzetten, lachen, vloeken en groeien. Jeffrey nam tien CFL'ers mee op een mentale én fysieke reis die niemand ooit vergeet."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-36.jpg",
      story: "Coach Rochelle geeft tieners het vertrouwen om te bewegen, te leren en plezier te hebben. Hier nog op onze oude locatie, maar de energie is altijd hetzelfde."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-37.jpg",
      story: "Coach Sem laat zien dat goed tillen niet moeilijk hoeft te zijn. Stap voor stap, veilig en helder. Zo bouw je kracht waar je de rest van je leven iets aan hebt."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-38.jpg",
      story: "Trainen bij ons is hard werken, maar vooral veel plezier. Coach Sem lacht vaker dan hij squat, en dat zegt genoeg."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-39.jpg",
      story: "In het GetShredded small group programma helpt coach Jeffrey je sterker te squatten dan je ooit dacht. Techniek eerst, gewicht komt daarna."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-40.jpg",
      story: "Een warm afscheid voor coach Wouter. Onze community viert niet alleen trainingen, maar vooral mensen."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-41.jpg",
      story: "Coach Jari traint elke week met Brandweer Leiden Zuid zodat zij de stad veilig kunnen houden. Functioneel trainen in het echt."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-42.jpg",
      story: "Elke les minstens één high five. Vaak meer. Want samen sporten voelt beter dan alleen."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-43.jpg",
      story: "Tijdens de wallballs staat coach Jeffrey achter je. Voor techniek, voor tempo, maar vooral voor mentale steun."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-44.jpg",
      story: "Ons coachteam tijdens het jaarlijkse gala. Geen sportkleren, wel dezelfde gezelligheid."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-45.jpg",
      story: "High fives verzamelen na elke les. Simpel ritueel, groot effect. Je gaat altijd met een glimlach naar huis."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-46.jpg",
      story: "Hyrox simulaties zijn het leukste met een buddy. Zweten, lachen en je grenzen verkennen."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-47.jpg",
      story: "In 2025 kwalificeerden we ons voor het NK Drakenboot. Een team dat nog nooit gevaren had, maar wel samen alles gaf."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-48.jpg",
      story: "Je traint nooit alleen. Er is altijd iemand naast je die meedoet, helpt of lacht."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-49.jpg",
      story: "Coach Max wijst je de weg. Heldere uitleg, rustige energie en altijd aandacht voor jou."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-50.jpg",
      story: "Moeder en dochter die samen een Hyrox simulatie doen. Zo mooi om te zien wat samen sporten kan doen."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-51.jpg",
      story: "De moeder van onze GM Saskia bewijst dat plezier in bewegen geen leeftijd kent. Vooral als er een roeier bij is."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-52.jpg",
      story: "Samen met je dochter rennen. Kleine momentjes, grote herinneringen. Dit is waar we het voor doen."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-53.jpg",
      story: "Huub laat zien hoe je fit en vrolijk ouder wordt. Sterk, nuchter en elke week trouw op de vloer."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cinnabar to-red-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Echte mensen. Echte resultaten.
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Bij CrossFit Leiden trainen gewone mensen met volle agenda's. Geen fitness influencers, geen proteine-shakes op Instagram. Gewoon mensen die fitter, sterker en gezonder willen worden.
            </p>
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Bekijk hun verhalen
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Gewone mensen die kozen voor zichzelf
            </p>

            {/* Video Grid - 5 videos, all same size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memberVideos.map((video, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <div className="relative" style={{ padding: "177.78% 0 0 0" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        title={`${video.name} - ${video.title}`}
                      />
                    </div>
                  </div>
                  <p className="text-center font-semibold text-gray-900">{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Word Cloud Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Wat onze leden het meest noemen in hun reviews
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Gebaseerd op honderden 5-sterren reviews op Google
            </p>

            {/* Word Cloud */}
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                <span className="text-3xl md:text-5xl font-bold text-cinnabar">coaches</span>
                <span className="text-2xl md:text-4xl font-semibold text-verdigris">community</span>
                <span className="text-xl md:text-3xl font-semibold text-cinnabar/70">vriendelijk</span>
                <span className="text-2xl md:text-4xl font-bold text-verdigris/80">persoonlijk</span>
                <span className="text-xl md:text-3xl font-semibold text-cinnabar">sfeer</span>
                <span className="text-3xl md:text-5xl font-bold text-verdigris">welkom</span>
                <span className="text-xl md:text-2xl font-medium text-cinnabar/60">support</span>
                <span className="text-2xl md:text-3xl font-semibold text-verdigris/70">techniek</span>
                <span className="text-xl md:text-3xl font-bold text-cinnabar/80">begeleiding</span>
                <span className="text-2xl md:text-4xl font-semibold text-verdigris">energie</span>
                <span className="text-xl md:text-2xl font-medium text-cinnabar/70">gezellig</span>
                <span className="text-2xl md:text-3xl font-bold text-verdigris/80">resultaten</span>
                <span className="text-xl md:text-3xl font-semibold text-cinnabar">hyrox</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/place/CrossFit+Leiden/@52.1508889,4.4736111,17z/data=!4m8!3m7!1s0x47c5c7b0e0e0e0e1:0x1234567890abcdef!8m2!3d52.1508889!4d4.4758!9m1!1b1!16s%2Fg%2F11c5qz5678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cinnabar font-semibold hover:underline"
              >
                Lees alle reviews op Google
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Onze community in beeld
            </h2>

            {/* Photo Grid with Stories - 3 columns for smaller photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {communityPhotos.map((photo, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={photo.url}
                      alt={`CrossFit Leiden Community ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {photo.story}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-cinnabar to-red-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Klaar voor jouw eigen verhaal?
            </h2>
            <Link
              href="https://crossfitleiden.referralrock.com/l/1CROSSFITLEIDEN95/"
              className="inline-block bg-white text-cinnabar px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg"
            >
              Plan een gratis intro
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
