import Link from "next/link";
import Image from "next/image";

export default function KickstartBlock() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Start veilig en sterk met onze Kickstart
          </h2>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/hero-background-6.jpg"
              alt="CrossFit Leiden Kickstart"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Ons 28-dagen beginnersprogramma voor mensen zonder ervaring.
            Persoonlijke begeleiding, veilige opbouw, op jouw tempo.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto">
          {/* Voor wie is het */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Voor wie is de Kickstart?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Beginners zonder ervaring</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Drukke ouders die structuur zoeken</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Mensen die lang niet hebben gesport</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Mensen met onzekerheid of pijntjes</span>
              </li>
            </ul>
          </div>

          {/* Wat zit erin */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Wat zit er in de Kickstart?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">2–3 lessen per week, op jouw niveau</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">Persoonlijke coaching & techniektraining</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">Voeding & leefstijl basics</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">Check-ins & voortgangsgesprekken</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hoe werkt het - Korter & scanbaarder */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Hoe begin je?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Stap 1 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-jonquil rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-gray-900">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Gratis Intro
              </h4>
              <p className="text-gray-600 text-sm">
                20 min kennismaken. Geen workout, gewoon een gesprek.
              </p>
            </div>

            {/* Stap 2 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-verdigris rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Plan maken
              </h4>
              <p className="text-gray-600 text-sm">
                We leggen de Kickstart uit en beantwoorden je vragen.
              </p>
            </div>

            {/* Stap 3 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-cinnabar rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Starten
              </h4>
              <p className="text-gray-600 text-sm">
                Begin op jouw moment met persoonlijke begeleiding.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials - Nieuwe reviews */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Ervaringen van starters
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Matthew */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-3">
                <svg className="w-7 h-7 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                Just completed the intake month – what a great experience. Max explained everything so clearly and kept it fun.
                If you're thinking about it, just book. The environment is incredibly welcoming.
              </p>
              <p className="text-gray-900 font-semibold">Matthew, 43</p>
              <p className="text-gray-500 text-sm">Father of 4 kids</p>
            </div>

            {/* Liselotte */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-3">
                <svg className="w-7 h-7 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                I'm so glad I started training here. After one month of small-group training and nutrition guidance, I already feel fitter and have more energy.
                The coaches are professional and relaxed.
              </p>
              <p className="text-gray-900 font-semibold">Liselotte, 42</p>
              <p className="text-gray-500 text-sm">Mother of a young child</p>
            </div>

            {/* Julia */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-3">
                <svg className="w-7 h-7 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                If you're hesitating: DO IT. I started the Kickstart at the end of October and it changed everything.
                After four weeks of coaching and community, I feel fitter, stronger and honestly happier.
              </p>
              <p className="text-gray-900 font-semibold">Julia, 44</p>
              <p className="text-gray-500 text-sm">Mom with low energy</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-gray-700 mb-6">
            Plan een gratis gesprek. Geen verplichtingen, gewoon kennismaken.
          </p>
          <Link
            href="/starten"
            className="inline-block bg-jonquil text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-jonquil/90 transition-all shadow-md hover:shadow-lg"
          >
            Plan een Gratis Intro
          </Link>
        </div>
      </div>
    </section>
  );
}
