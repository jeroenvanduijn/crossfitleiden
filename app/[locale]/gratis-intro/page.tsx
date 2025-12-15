"use client";

export default function GratisIntroPage() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plan je Gratis No Sweat Intro
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Geen workout. Wel een goed gesprek.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Je komt binnen met vragen. Je gaat weg met een plan.
            </p>
            <button
              onClick={handleCTAClick}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinnabar/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              Plan mijn gratis intro
            </button>
          </div>
        </div>
      </section>

      {/* What is a No Sweat Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat is een No Sweat Intro?</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Een No Sweat Intro is een rustig gesprek van 20 minuten. Je hoeft niet te sporten. Je hoeft niet te zweten. We praten gewoon even.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">1-op-1 kennismaking</h3>
                <p className="text-gray-700">
                  Je praat met één van onze coaches. Rustig, zonder druk. We luisteren naar wat jij wilt bereiken.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Jouw doelen centraal</h3>
                <p className="text-gray-700">
                  We bespreken wat je wilt en wat je tegenhoudt. Daarna kijken we samen hoe wij je kunnen helpen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Vrijblijvend</h3>
                <p className="text-gray-700">
                  Je hoeft niks. Geen verkoop. Geen druk. Je besluit zelf of het bij je past.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Persoonlijk advies</h3>
                <p className="text-gray-700">
                  Na het gesprek weet je precies welke opties je hebt en wat het beste bij jou past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Voor wie is dit?</h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 flex items-start gap-4">
              <span className="text-verdigris text-2xl font-bold">✓</span>
              <div>
                <h3 className="font-bold mb-2">Je bent helemaal nieuw met sporten</h3>
                <p className="text-gray-700">Je hoeft niet fit te zijn om te starten. Je start om fit te worden.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4">
              <span className="text-verdigris text-2xl font-bold">✓</span>
              <div>
                <h3 className="font-bold mb-2">Je sport al, maar zoekt iets anders</h3>
                <p className="text-gray-700">Misschien mis je begeleiding. Of een groep die je motiveert. Of gewoon meer uitdaging.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4">
              <span className="text-verdigris text-2xl font-bold">✓</span>
              <div>
                <h3 className="font-bold mb-2">Je hebt weinig tijd door werk of gezin</h3>
                <p className="text-gray-700">Onze lessen duren 60 minuten. We trainen vroeg in de ochtend en laat in de avond.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4">
              <span className="text-verdigris text-2xl font-bold">✓</span>
              <div>
                <h3 className="font-bold mb-2">Je twijfelt of CrossFit of HYROX bij je past</h3>
                <p className="text-gray-700">Dat is precies waarom je eerst een intro moet doen. Dan weet je het zeker.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4">
              <span className="text-verdigris text-2xl font-bold">✓</span>
              <div>
                <h3 className="font-bold mb-2">Je bent al jaren niet meer actief geweest</h3>
                <p className="text-gray-700">Geen probleem. De meeste mensen die bij ons starten zijn al jaren gestopt met sporten.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4">
              <span className="text-verdigris text-2xl font-bold">✓</span>
              <div>
                <h3 className="font-bold mb-2">Je wilt sterker en fitter worden voor het echte leven</h3>
                <p className="text-gray-700">Boodschappen tillen. Met je kids spelen. Energie overhouden na je werk. Daar trainen we voor.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleCTAClick}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinnabar/90 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Plan mijn gratis intro
            </button>
          </div>
        </div>
      </section>

      {/* What Happens */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat gebeurt er tijdens de afspraak?</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-verdigris text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Kennismaken</h3>
                <p className="text-gray-700">
                  We beginnen met een kop koffie of thee. Je vertelt wat over jezelf. Wij vertellen wat over hoe wij werken.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-verdigris text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Doelen en obstakels bespreken</h3>
                <p className="text-gray-700">
                  Waar wil je naartoe? Wat hield je tot nu toe tegen? Heb je pijntjes of blessures? We luisteren echt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-verdigris text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Korte rondleiding</h3>
                <p className="text-gray-700">
                  We laten je onze gym zien. Je ziet waar we trainen en hoe een les eruit ziet. Geen verplichtingen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-verdigris text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Persoonlijk advies voor jouw beste start</h3>
                <p className="text-gray-700 mb-3">
                  We geven je advies over wat het beste bij jou past. Bijvoorbeeld:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Group Classes</strong> als je graag in een groep traint</li>
                  <li>• <strong>Small Group</strong> als je meer persoonlijke aandacht wilt</li>
                  <li>• <strong>Personal Training</strong> als je 1-op-1 begeleiding zoekt</li>
                  <li>• <strong>HYROX</strong> als je traint voor die race</li>
                  <li>• <strong>Kickstart</strong> als je als complete beginner wilt starten</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-verdigris/10 border-2 border-verdigris rounded-xl p-8 text-center">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              Na deze 20 minuten weet je precies wat je opties zijn. Geen druk. Geen verkoop. Gewoon een goed gesprek.
            </p>
          </div>
        </div>
      </section>

      {/* Why CrossFit Leiden */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Waarom CrossFit Leiden?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-verdigris">Persoonlijke aandacht</h3>
              <p className="text-gray-700">
                Onze coaches kennen je naam. Ze weten wat je doelen zijn. Ze letten op je techniek en zorgen dat je veilig traint.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-verdigris">Warme community</h3>
              <p className="text-gray-700">
                Je traint naast mensen die jou snappen. Geen ego's. Geen oordelen. Gewoon goede mensen die sterker willen worden.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-verdigris">Trainen voor het echte leven</h3>
              <p className="text-gray-700">
                We trainen bewegingen die je elke dag gebruikt. Optillen. Duwen. Trekken. Springen. Sterk zijn in het dagelijks leven.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-verdigris">Geen spiegels, geen ego's</h3>
              <p className="text-gray-700">
                We schreeuwen niet. We vergelijken niet. We helpen je gewoon om elke keer een beetje beter te worden dan gisteren.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-verdigris">Alle leeftijden en levels</h3>
              <p className="text-gray-700">
                Van complete beginners tot ervaren sporters. Van 18 tot 65 jaar. Iedereen traint samen, iedereen op zijn eigen niveau.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-verdigris">Professional backup</h3>
              <p className="text-gray-700">
                Fysiofabriek zit in ons pand. Pijntje? Blessure? Je kunt direct op locatie geholpen worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Veelgestelde vragen</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Moet ik sporten tijdens de intro?</h3>
              <p className="text-gray-700">
                Nee. Een No Sweat Intro is letterlijk: geen zweten. We praten alleen. Je hoeft geen sportkleding mee te nemen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Is het echt gratis?</h3>
              <p className="text-gray-700">
                Ja. Echt gratis. Geen kleine lettertjes. Geen verborgen kosten. We willen gewoon graag kennismaken.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Voor wie is dit bedoeld?</h3>
              <p className="text-gray-700">
                Voor iedereen die overweegt om te starten met CrossFit, HYROX of group fitness. Of je nu complete beginner bent of al jaren sport, we helpen je graag verder.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Wat moet ik meenemen?</h3>
              <p className="text-gray-700">
                Niets. Gewoon jezelf. Als je vragen hebt opgeschreven, neem die dan mee. Maar verder hoef je niks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Kan dit ook als ik interesse heb in HYROX?</h3>
              <p className="text-gray-700">
                Ja, absoluut. We bespreken dan specifiek hoe ons HYROX programma werkt en hoe wij je kunnen helpen met jouw race voorbereiding.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Wat gebeurt er na de intro?</h3>
              <p className="text-gray-700">
                Niks, als je dat wilt. We sturen geen pusherige emails. Als je wilt starten, helpen we je graag. Zo niet, ook goed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Hoe lang duurt het?</h3>
              <p className="text-gray-700">
                Ongeveer 20 minuten. Heb je meer tijd nodig? Geen probleem. We jagen je niet weg.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Ik ben al lang niet meer actief geweest. Kan ik dan wel starten?</h3>
              <p className="text-gray-700">
                Ja. De meeste mensen die bij ons starten zijn al jaren gestopt met sporten. Dat is precies waarom we zo goed zijn in beginners begeleiden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-verdigris to-verdigris/80 text-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Je komt binnen met vragen. Je gaat weg met een plan.
          </p>
          <button
            onClick={handleCTAClick}
            className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinnabar/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            Plan mijn gratis intro
          </button>
          <p className="text-white/80 mt-6">
            20 minuten. Geen workout. Geen druk. Gewoon een goed gesprek.
          </p>
        </div>
      </section>
    </>
  );
}
