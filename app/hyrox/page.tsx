import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Simulation - CrossFit Leiden",
  description: "Doe mee aan onze HYROX Simulation event. Everyday people, exceptionally strong – test je HYROX-vorm in een supportieve omgeving!",
  keywords: ["hyrox", "crossfit", "leiden", "simulation", "fitness", "event", "race"],
};

export default function HyroxPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cinnabar via-cinnabar/90 to-verdigris text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
          }}></div>
        </div>

        <div className="relative z-20 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-sm font-semibold tracking-wide uppercase">
                HYROX Simulation Event
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Everyday people,<br />
              exceptionally strong
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-white/95 max-w-3xl mx-auto">
              Durf jij de uitdaging aan? Doe mee aan onze HYROX Simulation op 1 november 2025!
            </p>

            <p className="text-lg mb-8 text-white/85 max-w-2xl mx-auto">
              Test je vorm, ervaar de sfeer en ontdek wat je kunt bereiken in onze nieuwe locatie met 500m outdoor track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#inschrijven"
                className="bg-white text-cinnabar px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Schrijf je nu in
              </a>
              <Link
                href="/hyrox/heats"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cinnabar transition-all"
              >
                Bekijk Heats & Uitslagen
              </Link>
            </div>

            {/* Event Details Quick Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">📅</div>
                <div className="font-semibold">1 November 2025</div>
                <div className="text-sm text-white/80">Start vanaf 08:00</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">📍</div>
                <div className="font-semibold">CrossFit Leiden</div>
                <div className="text-sm text-white/80">Nieuwe locatie</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">💪</div>
                <div className="font-semibold">Alle Niveaus</div>
                <div className="text-sm text-white/80">Singles & Doubles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Meedoen Section */}
      <section id="waarom" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Waarom Meedoen?
            </h2>
            <p className="text-lg text-gray-600">
              Of je nu een doorgewinterde HYROX atleet bent of gewoon een epische workout zoekt – dit event is voor jou.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Reason 1 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cinnabar/5 to-cinnabar/10 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-cinnabar rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Probeer HYROX zonder druk</h3>
              <p className="text-gray-600">
                Ervaar HYROX in een supportieve, leuke omgeving voordat je aan het echte werk begint. Perfect om kennis te maken zonder meteen een officiële wedstrijd te doen.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-verdigris/5 to-verdigris/10 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-verdigris rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Test je HYROX-vorm</h3>
              <p className="text-gray-600">
                Onze simulatie spiegelt een echte HYROX race inclusief overgangszones. Je finishtijd geeft een goede indicatie van je niveau en waar je staat.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-jonquil/5 to-jonquil/10 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-jonquil rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Epische workout & gezelligheid</h3>
              <p className="text-gray-600">
                Zoek je gewoon een epische workout? Deze dag biedt een geweldige uitdaging, veel zweet en vooral plezier samen met gelijkgestemden!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section id="over" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Over de HYROX Simulation
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  HYROX is een toegankelijk maar uitdagend fitnessparcours, perfect voor zowel beginners als ervaren atleten.
                  Het is een gestandaardiseerde fitness race waarbij je 8 kilometer rent, afgewisseld met 8 functionele workouts.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  CrossFit Leiden is de ideale plek voor dit event dankzij onze nieuwe locatie met 500m outdoor track,
                  wat een realistische HYROX-ervaring mogelijk maakt in een geweldige atmosfeer.
                </p>

                <div className="bg-verdigris/5 border-l-4 border-verdigris p-6 rounded-r-lg">
                  <p className="font-semibold text-verdigris mb-2">Voor iedereen toegankelijk</p>
                  <p className="text-gray-700">
                    HYROX vereist geen geavanceerde skills – de oefeningen zijn simpel en aan te passen waar nodig.
                    De sfeer neemt iedereen mee, ongeacht je niveau!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inschrijfformulier Section */}
      <section id="inschrijven" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Schrijf je in
              </h2>
              <p className="text-lg text-gray-600">
                Vul het formulier hieronder in om je plek te reserveren. Beperkte plaatsen beschikbaar!
              </p>
            </div>

            {/* HighLevel Form Embed Container */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-6 bg-jonquil/10 border border-jonquil/30 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-800">
                  💡 <strong>Let op:</strong> CFL-leden en partner gym leden gebruiken het formulier hieronder.
                  Niet-leden hebben een apart inschrijfformulier nodig.
                </p>
              </div>

              {/* Placeholder for HighLevel Form */}
              <div className="bg-white rounded-lg p-8 border-2 border-dashed border-gray-300 text-center">
                <p className="text-gray-600 mb-4">
                  🔗 <strong>HighLevel Formulier Embed Placeholder</strong>
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Hier komt de embedded code van het HighLevel inschrijfformulier.
                </p>
                <div className="text-xs text-gray-400 bg-gray-50 p-4 rounded font-mono">
                  {'<script src="https://highlevel-form-embed-url"></script>'}
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>
                  Vragen over inschrijven? <Link href="/contact" className="text-cinnabar hover:underline font-semibold">Neem contact met ons op</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details & Regels */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Event Details & Praktische Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dagindeling */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cinnabar/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Dagindeling</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">•</span>
                    <span><strong>08:00 - 13:00:</strong> Heats starten doorlopend</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">•</span>
                    <span>Singles en Doubles categorieën</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">•</span>
                    <span>Koffie, snacks en toeschouwers welkom!</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">•</span>
                    <span>Bekijk de <Link href="/hyrox/heats" className="text-cinnabar hover:underline font-semibold">volledige heat-indeling</Link></span>
                  </li>
                </ul>
              </div>

              {/* Tarieven */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-verdigris/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Deelname & Kosten</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2 font-bold">•</span>
                    <span><strong>CFL-leden:</strong> €10</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2 font-bold">•</span>
                    <span><strong>Partner gyms:</strong> €10</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2 font-bold">•</span>
                    <span><strong>Niet-leden:</strong> €20</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2 font-bold">•</span>
                    <span><strong>Doubles:</strong> Slechts 1 persoon hoeft in te schrijven</span>
                  </li>
                </ul>
              </div>

              {/* Vrijwilligers */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-jonquil/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Vrijwilligers</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Help een handje mee als jurylid en doe gratis mee – samen maken we er een topdag van!
                </p>
                <p className="text-gray-600 text-sm">
                  Vrijwilligers (juryleden) nemen gratis deel als dank voor hun hulp.
                  Geef dit aan bij inschrijven.
                </p>
              </div>

              {/* Wat mee te nemen */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-chinese-violet/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-chinese-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Wat mee te nemen</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">✓</span>
                    <span>Sportkleding en goede sportschoenen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">✓</span>
                    <span>Handdoek en water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">✓</span>
                    <span>Positieve mindset en veel energie!</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2 font-bold">✓</span>
                    <span>Je vrienden voor extra support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Wat Deelnemers Zeggen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-verdigris/5 to-verdigris/10 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-verdigris/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah</p>
                  <p className="text-sm text-gray-600">Beginnende deelnemer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Ik twijfelde of ik HYROX aankon, maar de sfeer bij CFL is zo aanmoedigend dat ik mijn grenzen heb verlegd én veel plezier had!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-cinnabar/5 to-cinnabar/10 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cinnabar/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Mark & Lisa</p>
                  <p className="text-sm text-gray-600">Doubles team</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We deden mee als duo en het was fantastisch; samen afzien en samen finishen geeft zo'n kick. Volgend jaar weer!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-jonquil/5 to-jonquil/10 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-jonquil/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Coach Tom</p>
                  <p className="text-sm text-gray-600">CrossFit Leiden Coach</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Als coach vond ik het geweldig om iedereen te zien groeien tijdens de simulatie. HYROX daagt je uit op een andere manier, en iedereen kan meedoen – dat maakt het zo mooi."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">
              HYROX is gewoon superleuk! De mix van kracht, uithoudingsvermogen en mindset maakt het een geweldige uitdaging voor ieder niveau.
            </p>
            <p className="text-gray-600">
              De gezellige community-sfeer is ongeëvenaard. 🙌
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sfeerimpressie
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm text-gray-600 font-medium">HYROX Foto {i}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-cinnabar/0 group-hover:bg-cinnabar/10 transition-colors"></div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-600">
            Foto's van vorige edities – dynamische actiefoto's en glimlachende deelnemers die samen de finish halen!
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-cinnabar to-verdigris text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor de uitdaging?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Schrijf je nu in en verzeker je van een plek. Beperkte plaatsen beschikbaar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inschrijven"
              className="bg-white text-cinnabar px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Schrijf je in
            </a>
            <Link
              href="/hyrox/heats"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cinnabar transition-all"
            >
              Bekijk Heats & Uitslagen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
