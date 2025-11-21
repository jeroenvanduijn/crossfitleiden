import Link from "next/link";
import CTA from "@/components/CTA";

export default function Rooster() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-jonquil to-jonquil/80 text-gray-900 py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lesrooster</h1>
          <p className="text-xl max-w-2xl">
            Een overzichtelijk rooster dat past in jouw drukke leven.
          </p>
        </div>
      </section>

      {/* 2. Hoofdcontent */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center mb-6">
              Bij CrossFit Leiden bieden we dagelijks meerdere lessen aan, zodat je altijd kunt trainen 
              wanneer het jou uitkomt. Van vroege ochtend tot late avond.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-jonquil">
              <p className="text-gray-700">
                <strong>💡 Tip:</strong> Ben je nog geen lid? Plan dan eerst een 
                <Link href="/starten" className="text-cinnabar font-semibold hover:underline mx-1">
                  gratis No Sweat Intro
                </Link> 
                om kennis te maken. Leden kunnen zich direct inschrijven via de app.
              </p>
            </div>
          </div>

          {/* Rooster Iframe Placeholder */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-8 mb-12">
            {/* 
                In a real implementation, this would be the iframe from WODify, SportBit, or similar.
                For now, we keep the visual representation simple.
            */}
            <div className="bg-gray-50 rounded-lg min-h-[500px] flex flex-col items-center justify-center text-center p-8">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Actueel Rooster</h3>
              <p className="text-gray-600 max-w-md mb-6">
                Hier laadt normaal gesproken ons interactieve rooster. 
                Je kunt filteren op dag, tijd en type les.
              </p>
              <Link 
                href="https://app.wodify.com/Schedule/Public/Calendar.aspx" 
                target="_blank"
                className="cta-button bg-gray-900 hover:bg-gray-800"
              >
                Open Rooster in App
              </Link>
            </div>
          </div>

          {/* 3. Praktische Details - Vereenvoudigd */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🌅 Ochtend</h3>
              <p className="text-gray-600 mb-2">Voor de vroege vogels</p>
              <ul className="space-y-1 text-gray-700">
                <li>06:30 - 07:30</li>
                <li>07:30 - 08:30</li>
                <li>09:00 - 10:00</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">☀️ Middag</h3>
              <p className="text-gray-600 mb-2">Even pauze van werk</p>
              <ul className="space-y-1 text-gray-700">
                <li>12:00 - 13:00</li>
                <li>16:00 - 17:00 (Open Gym)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🌙 Avond</h3>
              <p className="text-gray-600 mb-2">Ontstressen na werk</p>
              <ul className="space-y-1 text-gray-700">
                <li>17:30 - 18:30</li>
                <li>18:30 - 19:30</li>
                <li>19:30 - 20:30</li>
              </ul>
            </div>
          </div>

          {/* 4. Mini FAQ */}
          <div className="max-w-3xl mx-auto border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Veelgestelde vragen over het rooster</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold mb-1">Moet ik me inschrijven voor een les?</h4>
                <p className="text-gray-600 text-sm">Ja, we werken met kleine groepen om kwaliteit te garanderen. Inschrijven kan eenvoudig via onze app.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold mb-1">Kan ik ook vrij trainen?</h4>
                <p className="text-gray-600 text-sm">Zeker! Tijdens 'Open Gym' uren kun je zelfstandig aan de slag.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold mb-1">Wat als ik een keer niet kan?</h4>
                <p className="text-gray-600 text-sm">Geen probleem. Je kunt tot 2 uur van tevoren kosteloos annuleren via de app.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Zachte CTA */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">
            Nog geen lid?
          </h2>
          <p className="text-gray-700 mb-6">
            Kom een keer sfeer proeven tijdens een vrijblijvende kennismaking.
          </p>
          <CTA variant="soft-info-alt2" />
        </div>
      </section>
    </>
  );
}
