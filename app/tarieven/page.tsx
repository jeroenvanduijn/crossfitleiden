"use client";

import { useState } from "react";
import Image from "next/image";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Tarieven() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/faciliteit/hero-background-15.jpg"
            alt="CrossFit Leiden gym"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-20 container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Investeer in je gezondheid voor maar €4,50 per dag
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Persoonlijke coaching in kleine groepen, een warme community en maandelijks opzegbare memberships. Geen verborgen kosten.
            </p>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                  (window as any).openCFLPopup();
                }
              }}
              className="inline-block bg-white text-[#E25C2A] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E25C2A]/10 transition-all shadow-lg hover:shadow-xl border-2 border-[#E25C2A]"
            >
              Plan Gratis Intro
            </button>
          </div>
        </div>
      </section>

      {/* Kostenvergelijking */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Waar ga je het aan uit?</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">☕</div>
                <p className="font-semibold mb-2">Dagelijkse flat white</p>
                <p className="text-2xl font-bold text-gray-900">€100</p>
                <p className="text-sm text-gray-600">per maand</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <p className="font-semibold mb-2">1x per week uit eten</p>
                <p className="text-2xl font-bold text-gray-900">€320</p>
                <p className="text-sm text-gray-600">per maand</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📺</div>
                <p className="font-semibold mb-2">Streaming</p>
                <p className="text-2xl font-bold text-gray-900">€50</p>
                <p className="text-sm text-gray-600">per maand</p>
              </div>

              <div className="bg-[#E25C2A]/10 border-2 border-[#E25C2A] rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">💪</div>
                <p className="font-semibold mb-2">CrossFit Leiden</p>
                <p className="text-2xl font-bold text-[#E25C2A]">€135</p>
                <p className="text-sm text-gray-600">per maand</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                Je betaalt óf nu aan je gezondheid, óf later aan klachten, weinig energie en zorgkosten. Bij ons bouw je rustig en veilig aan een fitter leven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programma's met accordions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Onze Programma's</h2>
            <p className="text-lg text-gray-600 mb-10 text-center">
              Klik op een programma voor meer informatie en prijzen
            </p>

            <div className="space-y-4">
              {/* Kickstart */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('kickstart')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">28-Day Kickstart</h3>
                      <p className="text-sm text-gray-600">Perfect voor beginners</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'kickstart' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'kickstart' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-[#E25C2A]">€600</p>
                        <p className="text-sm text-gray-600">eenmalig</p>
                      </div>

                      <p className="text-gray-700">
                        Voor beginners of mensen die veilig willen opbouwen. Je traint in kleine groepen, leert de basis en krijgt begeleiding van meerdere coaches. We bouwen rustig op zodat je vertrouwen groeit.
                      </p>

                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-3">Inclusief:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>2 small group sessies per week</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>1 groepsles per week</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>InBody scan</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>Persoonlijke coaching en voedingsdoelen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>Groepssupport</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Group Coaching */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('group')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E25C2A]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Group Coaching</h3>
                      <p className="text-sm text-gray-600">max 14 personen • elke les gecoacht</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'group' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'group' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        Bij ons train je nooit alleen. Onze coaches kennen je naam, helpen je veilig te bewegen en zorgen dat elke les past bij jouw niveau. De sfeer is warm, persoonlijk en zonder ego's. Je bouwt stap voor stap aan kracht, energie en vertrouwen.
                      </p>

                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">Base Membership</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">€135</p>
                              <p className="text-sm text-gray-600">per maand</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>3 groepslessen per week</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Elke 90 dagen Goal Review</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Toegang tot workshops & community events</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Gratis 10-min fysiocheck</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Koffie, fruit & douches inbegrepen</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">Pro Membership</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">€159</p>
                              <p className="text-sm text-gray-600">per maand</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>4 groepslessen per week</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Inclusief alles uit Base</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">Elite Membership</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">€169</p>
                              <p className="text-sm text-gray-600">per maand</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>6 groepslessen per week</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Inclusief alles uit Base</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-center text-gray-600 italic">
                        Nieuw bij ons? Tijdens een gratis Intro kijken we welke optie bij jou past.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Small Group / Semi-Private */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('small')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">GetShredded</h3>
                      <p className="text-sm text-gray-600">Small Group / Semi-Private</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'small' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'small' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        Small Group voelt als personal training met de energie van een kleine groep. Je traint op vaste tijden met een coach die precies weet wat jij nodig hebt. Perfect voor wie sneller resultaat wil en meer persoonlijke begeleiding zoekt.
                      </p>

                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">3x per week</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">€450</p>
                              <p className="text-sm text-gray-600">per maand</p>
                              <p className="text-sm text-gray-600">of €400 (6 maanden)</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>3 semi-private sessies</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Persoonlijk trainingsplan</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Vaste plek</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Inclusief alles uit Base</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">2x per week</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">€400</p>
                              <p className="text-sm text-gray-600">per maand</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>2 semi-private sessies</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Persoonlijk plan</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>Inclusief 2 groepslessen per week</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-center text-gray-600 italic">
                        Onze meest resultaatgerichte vorm van coaching.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Unlock Motion */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('unlock')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔓</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Unlock Motion</h3>
                      <p className="text-sm text-gray-600">Small Group / Semi-Private (UnlockMotion)</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'unlock' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'unlock' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">€1575</p>
                        <p className="text-sm text-gray-600">12 weken</p>
                      </div>

                      <p className="text-gray-700">
                        Voor mensen met terugkerende pijn of fysieke beperkingen. Je traint 12 weken in een kleine groep aan mobiliteit, kracht en bewegingskwaliteit, met een plan dat helemaal op jouw lichaam is afgestemd.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Body APK */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('body-apk')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E25C2A]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Body APK</h3>
                      <p className="text-sm text-gray-600">intake voor UnlockMotion — inbegrepen bij UnlockMotion</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'body-apk' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'body-apk' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">€220</p>
                      </div>

                      <p className="text-gray-700">
                        Een volledige check van je houding, mobiliteit en bewegingen. Je ontdekt waarom je klachten hebt (of krijgt) en krijgt een duidelijk actieplan.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Personal Training */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('pt')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💪</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Personal Training</h3>
                      <p className="text-sm text-gray-600">Punchcards • 1-op-1 coaching</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'pt' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'pt' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        Voor wie 1-op-1 wil werken aan techniek, blessureherstel of specifieke doelen. Helemaal afgestemd op jou, flexibel in te plannen en ideaal voor snelle progressie.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">60 minuten PT</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">5 sessies</span>
                              <span className="text-xl font-bold text-[#E25C2A]">€450</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">10 sessies</span>
                              <span className="text-xl font-bold text-[#E25C2A]">€800</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">30 minuten PT</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">5 sessies</span>
                              <span className="text-xl font-bold text-[#E25C2A]">€225</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">10 sessies</span>
                              <span className="text-xl font-bold text-[#E25C2A]">€400</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Monthly Private Coaching */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('skill')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E25C2A]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Monthly Private Coaching</h3>
                      <p className="text-sm text-gray-600">Skill development • maandelijks</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'skill' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'skill' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        Elke maand een privé coachmoment waarin je werkt aan techniek, kracht, mobiliteit of herstel. Simpel, duidelijk en super effectief om gericht stappen te zetten.
                      </p>

                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">Skill 1</span>
                          <span className="text-xl font-bold text-[#E25C2A]">€90 p/m</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">Skill 2</span>
                          <span className="text-xl font-bold text-[#E25C2A]">€175 p/m</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">Skill 4</span>
                          <span className="text-xl font-bold text-[#E25C2A]">€370 p/m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nutrition Kickstart */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('nutrition-kickstart')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍎</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Nutrition Kickstart</h3>
                      <p className="text-sm text-gray-600">4 weken programma</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'nutrition-kickstart' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'nutrition-kickstart' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-[#E25C2A]">€200</p>
                        <p className="text-sm text-gray-600">4 weken</p>
                      </div>

                      <p className="text-gray-700">
                        Samen met je coach werk je vier weken aan simpele, haalbare voedingsgewoontes. Geen ingewikkelde regels, maar duidelijke begeleiding en dagelijks contact.
                      </p>

                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-3">Inclusief:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>Persoonlijke targets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>Dagelijkse accountability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>InBody scan</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>Groepssupport</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nutrition Membership */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('nutrition')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🥗</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Nutrition Membership</h3>
                      <p className="text-sm text-gray-600">Langdurige begeleiding</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'nutrition' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'nutrition' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">€350</p>
                        <p className="text-sm text-gray-600">per maand</p>
                      </div>

                      <p className="text-gray-700 text-center">
                        Voor wie langdurig structuur wil op voeding en leefstijl.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Teens */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('teens')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🧑</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Teens Membership</h3>
                      <p className="text-sm text-gray-600">Voor tieners</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'teens' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'teens' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        Veilige en leuke trainingen die tieners sterker, fitter en zelfverzekerder laten worden.
                      </p>

                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">1x per week</span>
                          <span className="text-xl font-bold text-[#E25C2A]">€42,50 p/m</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">2x per week</span>
                          <span className="text-xl font-bold text-[#E25C2A]">€80 p/m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Base Weekend */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('base-weekend')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Base Weekend</h3>
                      <p className="text-sm text-gray-600">2-daags trainingsweekend</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'base-weekend' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'base-weekend' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">€599</p>
                      </div>

                      <p className="text-gray-700">
                        Een 2-daags trainingsweekend waarin je leert bewegen zoals onze coaches trainen. Praktisch, leerzaam en perfect voor sportliefhebbers die dieper willen begrijpen hoe het lichaam werkt.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Flex Friday */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('flex')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👫</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">Flex Friday</h3>
                      <p className="text-sm text-gray-600">Vriend meenemen</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'flex' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'flex' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">Elke vrijdag</p>
                        <p className="text-sm text-gray-600">12:00 en 20:00</p>
                      </div>

                      <p className="text-gray-700">
                        Leden mogen tijdens deze les een vriend meenemen. Ontspannen, sociaal en de perfecte manier om iemand kennis te laten maken met CFL.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Wat zeggen onze leden?</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Eerst dacht ik dat €135 veel was, maar nu realiseer ik me dat dit de beste investering is die ik doe. Meer energie, beter slapen en ik voel me echt fitter."
              </p>
              <p className="font-semibold text-gray-900">Lisa, 38</p>
              <p className="text-sm text-gray-600">Lid sinds 8 maanden</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "De coaches kennen mijn naam en helpen me echt verder. Dat krijg je niet bij een gewone sportschool. Voor mij is het de prijs dubbel en dwars waard."
              </p>
              <p className="font-semibold text-gray-900">Mark, 45</p>
              <p className="text-sm text-gray-600">Lid sinds 1 jaar</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Ik was eerst bang dat ik niet fit genoeg was, maar ze helpen je echt op jouw niveau. Super fijn dat je niet vastzit aan een jaarcontract."
              </p>
              <p className="font-semibold text-gray-900">Sarah, 42</p>
              <p className="text-sm text-gray-600">Lid sinds 5 maanden</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>

            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Moet ik fit zijn om te starten?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee, je begint op jouw niveau. Wij begeleiden je stap voor stap.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Kan ik pauzeren bij vakantie of drukte?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Ja, gewoon even laten weten en we regelen het.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Hoe werkt betalen?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Automatische incasso. Geen inschrijfkosten. Geen kleine lettertjes.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Wat maakt CrossFit Leiden anders dan een normale sportschool?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Kleine groepen, persoonlijke coaching, warme community. Bij ons hoef je het niet alleen te doen.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar om in jezelf te investeren?"
        subtitle="Plan je gratis intro en kom kennismaken. Geen verplichtingen, gewoon ontdekken of CrossFit Leiden bij jou past."
        buttonLabel="Plan Gratis Intro"
      />
    </>
  );
}
