import Link from "next/link";
import CTA from "@/components/CTA";

export default function PreTeens() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-verdigris to-cyan-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pre-teens (8-12 jaar)</h1>
          <p className="text-xl max-w-2xl">
            Spelenderwijs sterk en fit worden. Plezier staat voorop!
          </p>
        </div>
      </section>

      {/* 2. Wat is dit? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">CrossFit voor kinderen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Jazeker! Maar dan wel helemaal aangepast aan hun leeftijd. Geen zware gewichten, 
              maar wel klimmen, klauteren, rennen, springen en tillen.
            </p>
            <p className="text-lg text-gray-700">
              In onze Pre-teens lessen leren kinderen op een leuke manier goed bewegen. 
              We focussen op plezier, samenwerking en zelfvertrouwen. 
              Ze worden sterker, fitter en leren dat sporten leuk is!
            </p>
          </div>
        </div>
      </section>

      {/* 3. Voor wie? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wat leren ze?</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Goed bewegen</h3>
                  <p className="text-gray-700">De basis van een gezonde houding: squatten, tillen en springen.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Samenwerken</h3>
                  <p className="text-gray-700">In teamverband opdrachten uitvoeren en elkaar aanmoedigen.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Doorzetten</h3>
                  <p className="text-gray-700">Leren dat je meer kunt dan je denkt als je je best doet.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Plezier!</h3>
                  <p className="text-gray-700">Het allerbelangrijkste: met een lach de deur uitgaan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hoe werkt het? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">De lesopbouw</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎲</span>
              </div>
              <h3 className="font-bold text-lg mb-2">1. Spel</h3>
              <p className="text-gray-700 mt-2">We beginnen altijd met een leuk spel als warming-up.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤸</span>
              </div>
              <h3 className="font-bold text-lg mb-2">2. Skill</h3>
              <p className="text-gray-700 mt-2">We oefenen een nieuwe beweging, bijvoorbeeld de handstand of de squat.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-bold text-lg mb-2">3. Workout</h3>
              <p className="text-gray-700 mt-2">Een korte, intensieve workout om lekker moe te worden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Praktische Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Praktisch</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Wanneer?</strong> Elke woensdagmiddag om 15:00 en zaterdagochtend om 09:00.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              <strong>Kleding?</strong> Gewone sportkleding en binnenschoenen zijn prima.
            </p>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-padding bg-verdigris text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Kom een keer kijken!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Is jouw kind nieuwsgierig? Meld hem of haar aan voor een gratis proefles.
          </p>
          <CTA variant="primary-intro-alt2">
            Plan Gratis Proefles
          </CTA>
        </div>
      </section>
    </>
  );
}
