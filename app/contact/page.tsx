"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "algemeen",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Er ging iets mis');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis bij het verzenden van je bericht');
      setIsSubmitting(false);
    }
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
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl max-w-2xl">
            Heb je vragen of wil je langskomen? We horen graag van je!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Bezoek ons</h2>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-cinnabar/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adres</h3>
                    <p className="text-gray-700">Marie Diebenplaats 108</p>
                    <p className="text-gray-700">2324 NG Leiden</p>
                    <p className="text-sm text-gray-600 mt-2">
                      (Makkelijk bereikbaar met voldoende parkeerruimte)
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-verdigris/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                    <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">
                      welcome@crossfitleiden.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-jonquil/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefoon</h3>
                    <a href="tel:0712340477" className="text-cinnabar hover:underline">
                      071 - 234 0477
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-chinese-violet/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-chinese-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Openingstijden</h3>
                    <p className="text-gray-700">Ma - Vr: 06:30 - 21:00</p>
                    <p className="text-gray-700">Zaterdag: 08:00 - 13:00</p>
                    <p className="text-gray-700">Zondag: 10:00 - 12:00 (Open Gym)</p>
                    <p className="text-sm text-gray-600 mt-2">
                      * Tijdens lesuren. Buiten lestijden op afspraak.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Volg ons</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/crossfitleiden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cinnabar hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/crossfitleiden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cinnabar hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Parking & Route */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Route & Parkeren</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Met de auto:</strong> Gratis parkeren voor de deur op het bedrijventerrein.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Met de fiets:</strong> Vanaf Leiden Centraal ~10 minuten fietsen.
                </p>
                <p className="text-gray-700">
                  <strong>Openbaar vervoer:</strong> Bus 43 stopt om de hoek.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Stuur ons een bericht</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Naam *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdigris focus:border-transparent"
                      placeholder="Je naam"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdigris focus:border-transparent"
                      placeholder="je@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Waar gaat je vraag over? *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdigris focus:border-transparent"
                    >
                      <option value="algemeen">Algemene vraag</option>
                      <option value="intro">Gratis Intro</option>
                      <option value="lidmaatschap">Lidmaatschap</option>
                      <option value="tarieven">Tarieven</option>
                      <option value="anders">Iets anders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Bericht *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdigris focus:border-transparent"
                      placeholder="Laat hier je berichtje achter – we helpen je graag!"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      <p className="font-semibold">⚠️ Fout</p>
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cta-button-secondary text-center py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We antwoorden meestal binnen 1 werkdag.
                  </p>
                </form>
              ) : (
                <div className="bg-verdigris/5 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-4">Bericht verzonden!</h3>
                  <p className="text-gray-700">
                    Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50">
        <div className="container-custom py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Vind ons op de kaart</h2>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-700 font-semibold mb-2">Google Maps Embed</p>
              <p className="text-sm text-gray-600 max-w-md">
                Hier komt een Google Maps iframe met de locatie Rooseveltstraat 49C, Leiden
              </p>
              <p className="text-xs text-gray-500 mt-4 font-mono">
                {'<iframe src="https://maps.google.com/...">'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Loop gerust eens binnen!</h2>
            <p className="text-lg text-gray-700 mb-4">
              Loop gerust eens binnen om de sfeer te proeven (je vindt ons op de 1e etage van het
              pand) – de koffie staat klaar. ☕
            </p>
            <p className="text-gray-600">
              Wil je direct een <strong>gratis intro</strong> plannen?{" "}
              <a href="/starten" className="text-cinnabar font-semibold hover:underline">
                Klik hier →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
