import Link from "next/link";
import CTA from "@/components/CTA";

export default function PrivateCoaching() {
  return (
    <>
      {/* 1. Mini Hero */}
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Private Coaching</h1>
          <p className="text-xl max-w-2xl">
            Jouw doelen, jouw tempo, 100% aandacht voor jou.
          </p>
        </div>
      </section>

      {/* 2. Wat is dit? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Private Coaching?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bij private coaching train je 1-op-1 met een van onze ervaren coaches. Alles draait om jou: 
              we maken een plan dat volledig is afgestemd op jouw doelen, lichaam en agenda.
            </p>
            <p className="text-lg text-gray-700">
              Of je nu wilt revalideren na een blessure, je techniek wilt perfectioneren, of gewoon liever 
              niet in een groep traint – met private coaching behaal je het snelst en veiligst resultaat.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Voor wie? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Voor wie is dit?</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-chinese-violet rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Specifieke doelen</h3>
                  <p className="text-gray-700">Je wilt werken aan iets specifieks, zoals een marathon, een wedstrijd, of een bepaalde skill.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-chinese-violet rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Revalidatie & Blessures</h3>
                  <p className="text-gray-700">Je hebt extra aandacht nodig om veilig te trainen en sterker te worden na een blessure.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-chinese-violet rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Drukke agenda</h3>
                  <p className="text-gray-700">De vaste groepsles tijden komen je niet uit. Je wilt flexibel plannen.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-chinese-violet rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Extra privacy</h3>
                  <p className="text-gray-700">Je voelt je prettiger in een 1-op-1 setting dan in een groep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Wat maakt dit CFL? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Onze aanpak</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Intake op maat</h3>
                <p className="text-gray-700">We beginnen altijd met een uitgebreid gesprek en een nulmeting.</p>
              </div>
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Deskundige coaches</h3>
                <p className="text-gray-700">Onze trainers zijn hoog opgeleid en hebben ervaring met diverse doelgroepen.</p>
              </div>
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Realistische doelen</h3>
                <p className="text-gray-700">We maken een plan dat past in jouw leven, zodat je het ook écht volhoudt.</p>
              </div>
              <div className="bg-chinese-violet/5 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">✅ Meer dan trainen</h3>
                <p className="text-gray-700">We kijken ook naar voeding, slaap en stress voor het beste resultaat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hoe werkt het? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Jouw traject</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗣️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">1. Intake</h3>
              <p className="text-gray-700 mt-2">We bespreken je wensen, blessures en doelen.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="font-bold text-lg mb-2">2. Plan</h3>
              <p className="text-gray-700 mt-2">We maken een persoonlijk plan van aanpak.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="font-bold text-lg mb-2">3. Actie</h3>
              <p className="text-gray-700 mt-2">We gaan aan de slag! Tussentijds sturen we bij waar nodig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Praktische Info & Tarieven */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tarieven</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <div className="mb-4 sm:mb-0">
                  <h3 className="font-bold text-lg">Losse Sessie</h3>
                  <p className="text-sm text-gray-600">60 minuten 1-op-1 training</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-chinese-violet">€75</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <div className="mb-4 sm:mb-0">
                  <h3 className="font-bold text-lg">5 Sessies</h3>
                  <p className="text-sm text-gray-600">Ideaal voor een kickstart</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-chinese-violet">€350</p>
                  <p className="text-sm text-green-600">Je bespaart €25</p>
                </div>
              </div>
              <div className="bg-chinese-violet/5 border-2 border-chinese-violet rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <div className="mb-4 sm:mb-0">
                  <h3 className="font-bold text-lg">10 Sessies ⭐</h3>
                  <p className="text-sm text-gray-600">Voor serieus resultaat</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-chinese-violet">€650</p>
                  <p className="text-sm text-green-600">Je bespaart €100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="section-padding bg-chinese-violet text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Wil je persoonlijke begeleiding?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Plan een vrijblijvend intakegesprek om te kijken of het klikt.
          </p>
          <CTA variant="secondary-support-alt" href="/contact">
            Boek Intakegesprek
          </CTA>
        </div>
      </section>
    </>
  );
}
