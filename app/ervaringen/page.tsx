import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Ervaringen() {
  // Community photos with stories
  const communityPhotos = [
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-33.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-34.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-35.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-36.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-37.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-38.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-39.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-40.jpg",
      story: "Add a short story here about this moment. 3-5 sentences that capture the energy and spirit of our community."
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

            {/* Video Grid - 5 videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 - Raul (Portrait) */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative" style={{ padding: "177.78% 0 0 0" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1140347883?badge=0&autopause=0&player_id=0&app_id=58479"
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
                    title="Raul - 4 years of CrossFit"
                  />
                </div>
              </div>

              {/* Video 2 - Joost (Landscape) */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative" style={{ padding: "75% 0 0 0" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1140347959?badge=0&autopause=0&player_id=0&app_id=58479"
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
                    title="Joost - 100 visits milestone"
                  />
                </div>
              </div>

              {/* Video 3 - Daan (Portrait) */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative" style={{ padding: "177.78% 0 0 0" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1139251716?badge=0&autopause=0&player_id=0&app_id=58479"
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
                    title="Daan - From Leiden to Chicago"
                  />
                </div>
              </div>

              {/* Video 4 - Elcin (Portrait) */}
              <div className="bg-gray-50 rounded-xl overflow-hidden md:col-start-1 lg:col-start-2">
                <div className="relative" style={{ padding: "177.78% 0 0 0" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1133807494?badge=0&autopause=0&player_id=0&app_id=58479"
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
                    title="Elcin - 100 visits milestone"
                  />
                </div>
              </div>

              {/* Video 5 - Fleur (Portrait) */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative" style={{ padding: "177.78% 0 0 0" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1133807460?badge=0&autopause=0&player_id=0&app_id=58479"
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
                    title="Fleur - 300 workouts strong"
                  />
                </div>
              </div>
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

            {/* Photo Grid with Stories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {communityPhotos.map((photo, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={photo.url}
                      alt={`CrossFit Leiden Community ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
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
