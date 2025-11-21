import Link from "next/link";
import CTA from "@/components/CTA";

export default function FAQ() {
  const faqCategories = [
    {
      title: "Starten & Proefles",
      questions: [
        {
          q: "Moet ik fit zijn om te beginnen?",
          a: "Nee, absoluut niet! Onze trainingen zijn juist bedoeld om je fit te máken. We passen elke oefening aan op jouw niveau. Je zult zien dat er allerlei niveaus meedoen."
        },
        {
          q: "Wat is een No Sweat Intro?",
          a: "Een No Sweat Intro is een rustig gesprek (geen workout!) waarin we kennismaken. We praten over jouw doelen, eventuele zorgen en hoe we je kunnen helpen. Alles op jouw tempo."
        },
        {
          q: "Wat heb ik nodig voor een proefles?",
          a: "Alleen sportkleding, schone binnenschoenen en een flesje water. Wij zorgen voor de rest! En een beetje goede zin natuurlijk 😉."
        }
      ]
    },
    {
      title: "Lidmaatschap & Kosten",
      questions: [
        {
          q: "Zitten er inschrijfkosten aan verbonden?",
          a: "Nee, bij CrossFit Leiden betaal je geen inschrijfkosten. Je betaalt alleen je maandelijkse contributie."
        },
        {
          q: "Kan ik mijn abonnement pauzeren?",
          a: "Ja, bij langdurige blessures, zwangerschap of lange reizen kun je je lidmaatschap tijdelijk pauzeren. Neem even contact met ons op voor de mogelijkheden."
        },
        {
          q: "Wat is de opzegtermijn?",
          a: "Onze abonnementen zijn maandelijks opzegbaar met een opzegtermijn van één kalendermaand. We doen niet aan lange, wurgende contracten."
        }
      ]
    },
    {
      title: "Training & Blessures",
      questions: [
        {
          q: "Ik heb een blessure, kan ik wel trainen?",
          a: "In de meeste gevallen wel! Onze coaches zijn getraind om oefeningen aan te passen (scalen) zodat je veilig om je blessure heen kunt trainen. Overleg dit altijd even vooraf."
        },
        {
          q: "Hoe vaak moet ik trainen voor resultaat?",
          a: "Dat hangt van je doel af, maar voor de meeste mensen is 2 tot 3 keer per week een mooie frequentie om fitter en sterker te worden. Consistentie is het belangrijkst!"
        },
        {
          q: "Is CrossFit niet gevaarlijk?",
          a: "Niet als je het goed doet. Bij ons staat techniek altijd op nummer 1. Pas als je de techniek beheerst, gaan we intensiteit of gewicht toevoegen. Veiligheid voor alles."
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Veelgestelde Vragen</h1>
          <p className="text-xl max-w-2xl">
            Antwoorden op de meest gestelde vragen over starten, lidmaatschap en trainingen.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-verdigris/20 pb-2">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((item, qIdx) => (
                    <div key={qIdx} className="bg-gray-50 rounded-lg p-6 hover:shadow-sm transition-shadow">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{item.q}</h3>
                      <p className="text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Staat je vraag er niet tussen?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Geen probleem! Stuur ons gerust een berichtje, we helpen je graag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cta-button-secondary">
              Neem Contact Op
            </Link>
            <Link href="/starten" className="cta-button">
              Plan Gratis Intro
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
