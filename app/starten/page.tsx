"use client";

import Link from "next/link";
import { useState } from "react";

export default function Starten() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "proefles",
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
      {/* Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Start je reis naar een fitter leven</h1>
          <p className="text-xl max-w-2xl">
            Meld je aan voor een gratis proefles of intake
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700">
              Leuk dat je interesse hebt om bij ons te komen trainen! Een eerste stap zetten kan
              spannend zijn, maar bij CrossFit Leiden maken we het je makkelijk. We bieden een gratis
              proefles om vrijblijvend sfeer te proeven. Ook kun je kiezen voor een persoonlijk
              intakegesprek als je eerst je doelen en eventuele vragen wilt bespreken.{" "}
              <span className="font-semibold">Wat voor jou werkt – jij bepaalt!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Proefles Info */}
            <div className="bg-verdigris/5 rounded-xl p-8">
              <div className="text-4xl mb-4">🏋️</div>
              <h2 className="text-2xl font-bold mb-4">Gratis Proefles</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Wat kun je verwachten?</h3>
                  <p>
                    Je doet mee met een reguliere beginnersvriendelijke CrossFit les, samen met onze
                    leden. Onze coach heet je welkom en begeleidt je gedurende de hele les. Je krijgt
                    een introductie, we warmen rustig op, leren wat basistechnieken en dan draai je
                    volledig mee – op jouw tempo. Na de les is er tijd voor vragen en napraten met een
                    kop koffie.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wanneer?</h3>
                  <p>
                    Je kunt bijna elke dag instromen op een tijd die jou uitkomt. In het formulier
                    hieronder kun je je voorkeur aangeven; wij bevestigen altijd even per e-mail.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wat neem je mee?</h3>
                  <p>Alleen sportkleding en een dosis goede zin! Wij zorgen voor de rest.</p>
                </div>
              </div>
            </div>

            {/* Intake Info */}
            <div className="bg-jonquil/10 rounded-xl p-8">
              <div className="text-4xl mb-4">☕</div>
              <h2 className="text-2xl font-bold mb-4">Intakegesprek</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Liever eerst een gesprek?</h3>
                  <p>
                    Dat kan ook. In een persoonlijke intake (ca. 30 min) luisteren we naar jouw doelen,
                    eventuele blessures of zorgen en leggen we uit hoe wij jou kunnen helpen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wat gebeurt er?</h3>
                  <p>
                    Je krijgt een rondleiding in de box en we beantwoorden al je vragen onder het genot
                    van een kop koffie of thee. Zo stap je met een goed gevoel de eerste les in.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Kosten?</h3>
                  <p>Kosteloos en vrijblijvend – geen verplichtingen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Aanmeldformulier</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Type Selection */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Ik wil graag *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                    >
                      <option value="proefles">Een gratis proefles plannen</option>
                      <option value="intake">Een intakegesprek aanvragen</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Je volledige naam"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      E-mail *
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
                      Telefoon *
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
                      Voorkeur dag/tijd
                    </label>
                    <input
                      type="text"
                      name="preference"
                      value={formData.preference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Bijv: maandagavond 18:30 of zaterdagochtend"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Vertel ons iets over jezelf
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Je fitnessniveau, eventuele blessures of vragen..."
                    />
                  </div>

                  {/* Referral */}
                  <div className="bg-verdigris/5 rounded-lg p-6">
                    <label className="block text-sm font-semibold mb-2">
                      Via via? 🎁
                    </label>
                    <p className="text-sm text-gray-600 mb-3">
                      Ben je door een vriend(in) gewezen op CrossFit Leiden? Vermeld zijn/haar naam
                      – als jij lid wordt, trakteren we jullie allebei op een maand korting!
                    </p>
                    <input
                      type="text"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Naam van je vriend(in)"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full cta-button text-center py-4 text-lg"
                  >
                    Verstuur Aanmelding
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-3xl font-bold mb-4">Dank voor je aanmelding!</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We hebben je aanmelding ontvangen en nemen binnen 24 uur contact met je op om je{" "}
                  {formData.type === "proefles" ? "proefles" : "intakegesprek"} te bevestigen.
                </p>
                <p className="text-gray-600">
                  Tot snel in de box! 💪
                </p>
                <Link href="/" className="inline-block mt-6 text-cinnabar font-semibold hover:underline">
                  ← Terug naar home
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Veelgestelde Vragen</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Moet ik fit zijn om te beginnen?</h3>
              <p className="text-gray-700">
                Nee, onze lessen zijn juist bedoeld om je fit te máken. We passen elke oefening aan
                op jouw niveau. Je zult zien dat er allerlei niveaus meedoen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Hoe vaak moet ik komen voor resultaat?</h3>
              <p className="text-gray-700">
                We raden 2-3x per week aan, maar zelfs 1x is al een begin! Consistentie is belangrijker
                dan frequentie, en we denken flexibel met je mee.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Ik heb een oude blessure, kan ik meedoen?</h3>
              <p className="text-gray-700">
                Waarschijnlijk wel. Onze coaches hebben ervaring met het schalen van workouts. Geef je
                blessure aan bij de intake of proefles, dan houden we er rekening mee.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat kost het als ik daarna doorga?</h3>
              <p className="text-gray-700">
                Kijk gerust alvast bij{" "}
                <Link href="/tarieven" className="text-cinnabar font-semibold hover:underline">
                  Tarieven
                </Link>{" "}
                op de site. Tijdens je proefles/intake kunnen we je ook adviseren welk lidmaatschap
                passend is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Heb je er al zin in?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Wij staan klaar om je te verwelkomen in onze volgende les!
            </p>
            <p className="text-gray-600">
              Twijfel niet om{" "}
              <Link href="/contact" className="text-cinnabar font-semibold hover:underline">
                contact
              </Link>{" "}
              op te nemen als je nog vragen hebt. Tot snel in de box!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
