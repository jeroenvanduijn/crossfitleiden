"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function LocatiePage() {
  // Genereer foto URLs van hero-background-07.jpg t/m hero-background-28.jpg (29 uitgesloten)
  const galleryImages = Array.from({ length: 22 }, (_, i) => {
    const number = i + 7;
    return {
      url: `https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/faciliteit/hero-background-${number}.jpg`,
      number: number
    };
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section met foto 21 */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Hero Background Image - foto 21 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/faciliteit/hero-background-21.jpg"
            alt="CrossFit Leiden faciliteit"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay voor leesbaarheid */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50"></div>
        </div>

        <div className="relative z-20 container-custom section-padding">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Onze Locatie
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Makkelijk bereikbaar in Leiden, met veel parkeerruimte direct voor de deur.
            </p>
          </div>
        </div>
      </section>

      {/* Adres & Contact - Twee kolommen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Adres & Contact</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Links: Adres & Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Adres</h3>
              <div className="space-y-2 text-lg text-gray-700 mb-6">
                <p className="font-semibold text-gray-900">CrossFit Leiden</p>
                <p>Marie Diebenplaats 108</p>
                <p>2324 NG Leiden</p>
              </div>

              {/* Google Maps Link */}
              <div className="mb-6">
                <a
                  href="https://maps.app.goo.gl/eq5bA5kG31aDr5246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cinnabar font-semibold hover:underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Bekijk op Google Maps
                </a>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8 text-gray-900">Contact</h3>
              <div className="space-y-2 text-lg text-gray-700">
                <p>
                  <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">
                    welcome@crossfitleiden.com
                  </a>
                </p>
                <p>
                  <a href="tel:0712340477" className="text-cinnabar hover:underline">
                    071 - 234 0477
                  </a>
                </p>
              </div>
            </div>

            {/* Rechts: Openingstijden */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Openingstijden lessen</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span className="font-medium">Maandag t/m vrijdag:</span>
                    <span>06:00 - 22:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Zaterdag:</span>
                    <span>07:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Zondag:</span>
                    <span>08:00 - 13:00</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Controleer altijd het <Link href="/rooster" className="text-cinnabar hover:underline">rooster</Link> voor actuele lestijden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Info - 3 Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Praktische Info</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Parkeren */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cinnabar/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Parkeren</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Ruime parkeergelegenheid direct voor de deur</li>
                <li>• Maandag t/m vrijdag van 07:30 tot 19:30 parkeer je de eerste twee uur voor €0,20 per uur</li>
                <li>• Daarna geldt het normale tarief van de gemeente</li>
                <li>• Op zaterdag en zondag is parkeren gratis</li>
                <li>• Er is een invalide parkeerplek direct voor de deur</li>
              </ul>
            </div>

            {/* Card 2: Fysiofabriek */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-verdigris/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fysiofabriek in-house</h3>
              </div>
              <p className="text-gray-700 mb-3 text-sm">
                We hebben een professionele fysiopraktijk direct in onze gym. Bij pijntjes, blessures of revalidatie kun je snel terecht.
              </p>
              <p className="text-gray-700 mb-4 text-sm">
                Voor leden zijn er gratis inloopuren, zodat je laagdrempelig even kunt laten checken wat er aan de hand is.
              </p>
              <Link href="/aanbod/fysiofabriek" className="text-cinnabar font-semibold hover:underline text-sm inline-flex items-center gap-1">
                Meer over Fysiofabriek
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 3: Faciliteiten */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-jonquil/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Faciliteiten</h3>
              </div>
              <ul className="text-gray-700 space-y-1.5 text-sm">
                <li>• Professionele CrossFit apparatuur</li>
                <li>• Ruime kleedkamers en douches</li>
                <li>• Klimaatbeheersing</li>
                <li>• Gratis wifi voor leden</li>
                <li>• Waterstation om je bidon te vullen</li>
                <li>• Gratis koffie en thee in de lounge</li>
                <li>• Toiletten</li>
                <li>• Rolstoeltoegankelijke entree</li>
                <li>• Buitenruimte met rubberen tegels</li>
                <li>• Hardloopmogelijkheden buiten</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fotosectie - Horizontale rij */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-3 text-center">Een kijkje in onze gym</h2>
          <p className="text-center text-gray-600 mb-8">
            Krijg een indruk van onze gym, lounge en trainingsruimte.
          </p>

          {/* Horizontale scrollbare fotorij */}
          <div className="relative">
            <div className="overflow-x-auto pb-4 scroll-smooth">
              <div className="flex gap-4 min-w-max px-4">
                {galleryImages.map((img) => (
                  <div
                    key={img.number}
                    className="relative w-80 h-56 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(img.url)}
                  >
                    <Image
                      src={img.url}
                      alt={`CrossFit Leiden faciliteit ${img.number}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="320px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            Klik op een foto voor een grotere weergave
          </p>
        </div>
      </section>

      {/* Lightbox voor grotere weergave */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Sluit"
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="CrossFit Leiden faciliteit"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}

      {/* Vind ons */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Vind ons</h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            Marie Diebenplaats 108, 2324 NG Leiden
          </p>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Kom langs voor een gratis intro"
        subtitle="Nieuwsgierig? Plan je gratis intro en kom de gym, het team en de sfeer ontdekken."
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
