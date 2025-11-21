"use client";

import Link from "next/link";
import { useState } from "react";
import CTA from "@/components/CTA";

export default function Starten() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            Plan een gratis No Sweat Intro en ontdek hoe makkelijk starten kan
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700">
              Leuk dat je interesse hebt om bij ons te komen trainen! Een eerste stap zetten kan
              spannend zijn, maar bij CrossFit Leiden maken we het je makkelijk. 
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <span className="font-semibold">Een No Sweat Intro is een rustig gesprek – geen workout!</span>{" "}
              We praten over jouw doelen, eventuele zorgen en hoe we je kunnen helpen. 
              Alles op jouw tempo, zonder druk.
            </p>
          </div>

          {/* Wat is een No Sweat Intro */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-verdigris/5 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Wat is een No Sweat Intro?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">✅ Wat het WEL is:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-verdigris mt-1">•</span>
                      <span>Een rustig gesprek (30-45 minuten)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-verdigris mt-1">•</span>
                      <span>Kennismaken met onze coaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-verdigris mt-1">•</span>
                      <span>Rondleiding door de faciliteit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-verdigris mt-1">•</span>
                      <span>Praten over jouw doelen en vragen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-verdigris mt-1">•</span>
                      <span>Koffie of thee erbij</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">❌ Wat het NIET is:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cinnabar mt-1">•</span>
                      <span>Geen workout of training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cinnabar mt-1">•</span>
                      <span>Geen druk om te presteren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cinnabar mt-1">•</span>
                      <span>Geen verplichtingen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cinnabar mt-1">•</span>
                      <span>Geen verkooppraatjes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cinnabar mt-1">•</span>
                      <span>Gewoon kennismaken</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hoe werkt het? */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe werkt het?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center border-2 border-gray-100">
                <div className="w-16 h-16 bg-cinnabar rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Plan je intro</h3>
                <p className="text-gray-700 text-sm">
                  Vul het formulier hieronder in en kies een tijd die jou uitkomt.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center border-2 border-gray-100">
                <div className="w-16 h-16 bg-verdigris rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Rustig gesprek</h3>
                <p className="text-gray-700 text-sm">
                  We praten over jouw doelen, eventuele zorgen en hoe we je kunnen helpen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center border-2 border-gray-100">
                <div className="w-16 h-16 bg-jonquil rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Persoonlijk plan</h3>
                <p className="text-gray-700 text-sm">
                  Samen maken we een plan dat bij jou past. Daarna start je veilig met je eerste training.
                </p>
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
                <h2 className="text-3xl font-bold mb-6 text-center">Plan je gratis No Sweat Intro</h2>
                <p className="text-center text-gray-600 mb-8">
                  Vul het formulier in en we nemen binnen 24 uur contact met je op om een tijd af te spreken.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <p className="text-sm text-gray-500 mt-1">
                      We proberen altijd rekening te houden met jouw voorkeur
                    </p>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Vertel ons iets over jezelf (optioneel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-transparent"
                      placeholder="Je fitnessniveau, eventuele blessures of vragen die je hebt..."
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
                  We hebben je aanmelding ontvangen en nemen binnen 24 uur contact met je op om je 
                  No Sweat Intro te bevestigen.
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
                Nee, onze trainingen zijn juist bedoeld om je fit te máken. We passen elke oefening aan
                op jouw niveau. Je zult zien dat er allerlei niveaus meedoen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat is een No Sweat Intro?</h3>
              <p className="text-gray-700">
                Een No Sweat Intro is een rustig gesprek (geen workout!) waarin we kennismaken. 
                We praten over jouw doelen, eventuele zorgen en hoe we je kunnen helpen. 
                Alles op jouw tempo, zonder druk.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat gebeurt er tijdens de intro?</h3>
              <p className="text-gray-700">
                We geven je een rondleiding, praten over wat je wilt bereiken en beantwoorden al je vragen. 
                Geen druk, geen verplichtingen. Gewoon kennismaken in een ontspannen sfeer.
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
                Waarschijnlijk wel. Onze coaches hebben ervaring met het aanpassen van trainingen. Geef je
                blessure aan tijdens je intro, dan houden we er rekening mee en zorgen we dat je veilig kunt trainen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Wat kost het als ik daarna doorga?</h3>
              <p className="text-gray-700">
                Kijk gerust alvast bij{" "}
                <Link href="/tarieven" className="text-cinnabar font-semibold hover:underline">
                  Tarieven
                </Link>{" "}
                op de site. Tijdens je intro kunnen we je ook adviseren welk lidmaatschap
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
              Wij staan klaar om je te verwelkomen tijdens je No Sweat Intro!
            </p>
            <p className="text-gray-600 mb-6">
              Twijfel niet om{" "}
              <Link href="/contact" className="text-cinnabar font-semibold hover:underline">
                contact
              </Link>{" "}
              op te nemen als je nog vragen hebt.
            </p>
            <CTA variant="primary-intro" />
          </div>
        </div>
      </section>
    </>
  );
}
