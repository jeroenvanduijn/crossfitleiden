import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function FysiofabriekPage() {
  const locale = await getLocale();
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fysiofabriek
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Professionele fysiopraktijk in-house bij CrossFit Leiden.
              Snelle hulp bij pijntjes, blessures en revalidatie.
            </p>
          </div>
        </div>
      </section>

      {/* What is Fysiofabriek */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Wat is Fysiofabriek?</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Wij werken samen met Fysiofabriek, een gespecialiseerde sportfysiopraktijk met een eigen behandelruimte in onze gym. Dat betekent dat je direct op locatie geholpen kunt worden. Of je nu vragen hebt over pijntjes, techniek of revalidatie, je kunt snel terecht voor persoonlijk advies.
            </p>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/fysiofabriek/WhatsApp%20Image%202025-12-03%20at%2012.20.28.jpeg"
                alt="Fysiofabriek behandelruimte bij CrossFit Leiden"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voordelen van in-house fysio</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Snelle Schakeling</h3>
              <p className="text-gray-700">
                Pijntje tijdens de training? Meteen even sparren met de fysio.
                Geen wekenlange wachttijd, gewoon snelle hulp wanneer je het nodig hebt.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Geïntegreerde Zorg</h3>
              <p className="text-gray-700">
                Coaches en fysio werken samen aan jouw herstel.
                Je training wordt aangepast terwijl je revalideert – zo blijf je veilig in beweging.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Preventie & Advies</h3>
              <p className="text-gray-700">
                Ook zonder klachten kun je advies vragen over mobiliteit, opbouw of kracht.
                Preventie is beter dan genezen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Waar helpt Fysiofabriek bij?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blessures & Pijntjes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Schouder-, knie- en rugklachten</li>
                <li>• Tennis- en golfelleboog</li>
                <li>• Enkelblessures</li>
                <li>• Overbelasting</li>
                <li>• Spierblessures</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revalidatie & Herstel</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Post-operatief herstel</li>
                <li>• Sportrevalidatie</li>
                <li>• Terugkeer naar training</li>
                <li>• Chronische klachten</li>
                <li>• Preventief advies</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobiliteit & Kracht</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bewegelijkheid verbeteren</li>
                <li>• Kracht opbouwen</li>
                <li>• Houding & techniek</li>
                <li>• Balans & coördinatie</li>
                <li>• Sport-specifiek trainen</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Preventie & Screening</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bewegingsanalyses</li>
                <li>• Krachtmetingen</li>
                <li>• Blessurepreventie</li>
                <li>• Trainingsadvies</li>
                <li>• Periodiek check-ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Hoe werkt het?</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Afspraak maken</h3>
              <p className="text-gray-700 mb-6">
                Je kunt eenvoudig een afspraak maken via de website van Fysiofabriek.
              </p>

              <a
                href="https://fysiofabriek.nl/fysiotherapie-leiden/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-verdigris text-white px-6 py-3 rounded-lg font-bold hover:bg-verdigris/90 transition-all shadow-md"
              >
                Maak een afspraak
              </a>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Wil je mailen?</strong><br />
                  Dat kan via: <a href="mailto:leiden@fysiofabriek.nl" className="text-verdigris hover:underline">leiden@fysiofabriek.nl</a>
                </p>
                <p className="text-gray-700">
                  <strong>Bellen kan op:</strong> <a href="tel:0647679822" className="text-verdigris hover:underline">06 47 67 98 22</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Link & CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Direct afspraak maken?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Bezoek de website van Fysiofabriek voor meer informatie en om direct een afspraak in te plannen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fysiofabriek.nl/fysiotherapie-leiden/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-verdigris text-white px-8 py-4 rounded-lg font-bold hover:bg-verdigris/90 transition-all shadow-md"
            >
              Bezoek Fysiofabriek Website
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-all"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Nieuw bij CrossFit Leiden?"
        subtitle="Plan je gratis intro en ontdek hoe wij je helpen sterker te worden – met professionele zorg als backup."
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
