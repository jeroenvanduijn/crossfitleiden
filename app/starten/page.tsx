"use client";

import Link from "next/link";
import { useState } from "react";
import CTA from "@/components/CTA";

export default function Starten() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "intro",
    preference: "",
    message: "",
    referral: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In productie: verstuur naar backend/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero - Warm & Welcoming */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welkom! Leuk dat je er bent 👋</h1>
          <p className="text-xl max-w-2xl">
            Klaar om kennis te maken? We maken het je makkelijk – gewoon even praten, rondkijken en kijken of het klikt. Geen druk, geen verplichtingen.
          </p>
        </div>
      </section>

      {/* Main Intro Text */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Je eerste stap? Super simpel.</h2>
            <p className="text-lg text-gray-700">
              We snappen dat beginnen spannend kan zijn. Daarom doen we het rustig aan.
              Kies hieronder wat het beste bij je past – <strong>geen foute keuze!</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Option 1: No Sweat Intro (PRIMARY) */}
            <div className="bg-gradient-to-br from-cinnabar/10 to-cinnabar/5 rounded-xl p-8 border-2 border-cinnabar relative">
              <div className="absolute top-4 right-4 bg-cinnabar text-white text-xs font-bold px-3 py-1 rounded-full">
                AANBEVOLEN
              </div>
              <div className="text-5xl mb-4">☕</div>
              <h2 className="text-2xl font-bold mb-4">Gratis Intro (No Sweat)</h2>
              <p className="text-gray-600 mb-4 italic">👉 Je hoeft niet te sporten – gewoon kennismaken!</p>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Wat gebeurt er?</h3>
                  <p>
                    We leren elkaar kennen over een kop koffie (of thee). Je vertelt wat je zoekt, wij vertellen hoe we je kunnen helpen.
                    Daarna krijg je een rondleiding in de box en beantwoorden we al je vragen. <strong>Je hoeft echt niet te sporten</strong> – het is gewoon een rustig gesprek.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Voor wie?</h3>
                  <p>
                    Perfect als je twijfelt, nog nooit CrossFit hebt gedaan of gewoon eerst wilt kijken of het bij je past.
                    Geen oordeel, geen druk – beloofd!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hoe lang?</h3>
                  <p>20-30 minuten. Geen sportkleding nodig – kom gewoon zoals je bent.</p>
                </div>
              </div>
            </div>

            {/* Option 2: Trial Class */}
            <div className="bg-verdigris/5 rounded-xl p-8">
              <div className="text-5xl mb-4">🏋️</div>
              <h2 className="text-2xl font-bold mb-4">Gratis Proefles</h2>
              <p className="text-gray-600 mb-4 italic">Voor wie meteen wil ervaren hoe het is!</p>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Wat gebeurt er?</h3>
                  <p>
                    Je draait mee met een beginnersvriendelijke les. Een coach heet je welkom, we warmen rustig op en dan doe je mee op jouw tempo.
                    We passen alles aan op jouw niveau – ook als je nog nooit gesport hebt.
                    Na afloop koffie + napraten.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Voor wie?</h3>
                  <p>
                    Wil je meteen de sfeer proeven en voelen hoe een les is? Dan is dit perfect!
                    Ook voor beginners – echt, je hoeft niet fit te zijn.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wat neem je mee?</h3>
                  <p>Sportkleding, schoenen en een waterfles. Wij zorgen voor de rest!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Helpful Note */}
          <div className="max-w-2xl mx-auto bg-jonquil/10 rounded-xl p-6 text-center">
            <p className="text-lg text-gray-700">
              <strong>💡 Weet je niet wat te kiezen?</strong><br />
              Begin met een No Sweat Intro – dan kun je altijd daarna nog een proefles doen!
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-3 text-center">Plan je Gratis Intro</h2>
                <p className="text-center text-gray-600 mb-8">Vul onderstaand formulier in en we nemen binnen 24 uur contact op!</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Type Selection */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Ik wil graag: *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                    >
                      <option value="intro">No Sweat Intro (gewoon praten, geen sporten)</option>
                      <option value="proefles">Gratis Proefles (meteen meedoen)</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Je naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Voornaam en achternaam"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Je e-mailadres *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="je@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Je telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="06-12345678"
                    />
                  </div>

                  {/* Preference */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Wanneer past het jou? (optioneel)
                    </label>
                    <input
                      type="text"
                      name="preference"
                      value={formData.preference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Bijv: maandagavond 18:30 of zaterdagochtend"
                    />
                    <p className="text-sm text-gray-500 mt-2">We bellen je om een definitieve tijd af te spreken</p>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Nog iets dat we moeten weten? (optioneel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Bijv: oude blessure, specifieke doelen, vragen..."
                    />
                  </div>

                  {/* Referral - Friend Bonus */}
                  <div className="bg-verdigris/5 rounded-lg p-6">
                    <label className="block text-sm font-semibold mb-2">
                      🎁 Ken je iemand bij ons?
                    </label>
                    <p className="text-sm text-gray-600 mb-3">
                      Ben je door een vriend of vriendin gewezen op CrossFit Leiden? Vermeld hun naam –
                      als jij lid wordt, trakteren we jullie allebei op <strong>een maand korting</strong>!
                    </p>
                    <input
                      type="text"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Naam van je vriend(in) die hier lid is"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-cinnabar text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cinnabar/90 transition-all"
                  >
                    Verstuur Aanmelding 🚀
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    We nemen binnen 24 uur contact op • Geen verplichtingen • 100% gratis
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold mb-4">Yes! We hebben je aanmelding binnen!</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We nemen binnen 24 uur contact met je op om je{" "}
                  {formData.type === "intro" ? "No Sweat Intro" : "proefles"} in te plannen.
                  Check ook even je spam – soms belandt onze mail daar per ongeluk.
                </p>
                <p className="text-gray-600 mb-8">
                  We kijken ernaar uit om je te leren kennen! 💪
                </p>
                <Link href="/" className="inline-block text-cinnabar font-semibold hover:underline text-lg">
                  ← Terug naar home
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ - Addressing Common Fears */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Nog even twijfelen?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Deze zorgen horen we vaak – misschien herken je ze.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>"Ik ben echt helemaal niet fit..."</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Dat hoeft ook helemaal niet! 80% van onze leden was niet fit toen ze begonnen. We passen álle oefeningen aan op jouw niveau.
                Of je nu 20 jaar niet hebt gesport of juist wel actief bent – we maken het passend voor jou.
                Dat is juist de kracht van CrossFit Leiden!
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>"Ga ik me niet schamen tussen die fitte types?"</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Begrijpelijk dat je dat denkt! Maar onze leden zijn juist gewone mensen: ouders met drukke levens, mensen die net beginnen, of al langer bezig zijn.
                Iedereen heeft ooit begonnen en iedereen moedigt elkaar aan – <strong>niemand oordeelt</strong>.
                Dat is wat onze community zo fijn maakt!
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>"Ik heb echt geen tijd..."</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Dat snap we – werk, kinderen, verplichtingen. Daarom duren onze lessen precies 1 uur (inclusief warming-up).
                We hebben lessen van 06:00 's ochtends tot 20:30 's avonds, dus er is altijd wel een moment dat past.
                Veel leden komen 2x per week en zien al geweldige resultaten!
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>"Moet ik me direct binden aan een lidmaatschap?"</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Nee! De intro en proefles zijn 100% gratis en vrijblijvend. Je kijkt gewoon of het bij je past.
                Pas als je besluit om door te gaan, praten we over lidmaatschappen – geen druk, geen gedoe.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>"Wat als ik een blessure of fysieke beperking heb?"</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Vertel het ons gewoon tijdens de intro! Onze coaches hebben veel ervaring met het aanpassen van oefeningen.
                Oude knieblessure? Rugklachten? Zwanger? We werken eromheen. Blessurepreventie en veiligheid staan bij ons voorop.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-gray-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>"Wat kost een lidmaatschap eigenlijk?"</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                Kijk gerust alvast bij{" "}
                <Link href="/tarieven" className="text-cinnabar font-semibold hover:underline">
                  Tarieven
                </Link>.
                We hebben verschillende opties, afhankelijk van hoe vaak je wilt komen.
                Tijdens je intro bespreken we samen wat het beste bij jou past. Geen verrassingen!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final Push - Warm CTA */}
      <CTA
        variant="footer"
        title="Heb je nog vragen? Twijfel je nog?"
        description="We snappen het. Bel of mail ons gewoon – geen verplichtingen, gewoon even praten. Of scroll naar boven en plan gewoon je gratis intro. Beloofd: het is super laagdrempelig!"
        buttonText="Plan Mijn Gratis Intro"
        href="#"
      />
    </>
  );
}
