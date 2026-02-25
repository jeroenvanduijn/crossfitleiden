"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';
import IntroCtaSection from "@/components/IntroCtaSection";

const content = {
  nl: {
    hero: {
      title: "Start veilig en sterk met onze Kickstart",
      description: "Ons 28-dagen programma voor iedereen die veilig wil opbouwen. Persoonlijke begeleiding, gestructureerde aanpak, op jouw tempo.",
      cta: "Plan een Gratis Intro"
    },
    whatIs: {
      title: "Wat is de Kickstart?",
      intro: "Ons 28-dagen programma voor iedereen die veilig wil opbouwen. Of je nu helemaal nieuw bent, lang niet hebt gesport, of gewoon een solide basis wilt leggen – we starten op jouw niveau.",
      important: "<strong>Belangrijk:</strong> Je begint altijd met een gratis intro. In dat gesprek kijken we samen of de Kickstart de beste start voor jou is.",
      description: "Gedurende <strong>28 dagen</strong> werk je aan je energie, routine en krijg je alle basis-bewegingen onder de knie – volledig op jouw tempo, met persoonlijke begeleiding van onze coaches.",
      focusTitle: "Waar focussen we op?",
      focus: [
        { title: "Veilig opbouwen", description: "Starten op jouw niveau met veel aandacht voor goede techniek" },
        { title: "Meer energie", description: "Bouw conditie en kracht op zonder te overtrainen" },
        { title: "Een routine creëren", description: "Leer hoe je training inpast in je drukke leven" },
        { title: "Vertrouwen opbouwen", description: "Ontdek wat je lichaam kan, stap voor stap" }
      ]
    },
    forWho: {
      title: "Voor Wie is de Kickstart?",
      cards: [
        { emoji: "👋", title: "Nieuwe Start", description: "Nog nooit CrossFit gedaan of lang niet gesport? We starten op jouw niveau." },
        { emoji: "👨‍👩‍👧‍👦", title: "Drukke Ouders", description: "Heb je structuur en een duidelijk plan nodig? De Kickstart geeft je houvast." },
        { emoji: "⏸️", title: "Weer Beginnen", description: "Wil je (opnieuw) starten of heropbouwen? We pakken rustig op vanaf waar jij staat." },
        { emoji: "🩹", title: "Veilig Trainen", description: "Onzeker of oude blessure? We passen alles aan op jouw situatie en bouwen veilig op." }
      ]
    },
    whatsIncluded: {
      title: "Wat Zit Er in de Kickstart?",
      items: [
        { emoji: "🏋️", title: "2-3 keer per week trainen", description: "In groepslessen of semi-private, afhankelijk van wat bij jou past. Flexibel in te plannen." },
        { emoji: "👨‍🏫", title: "Persoonlijke coachbegeleiding", description: "Onze coaches kennen jouw naam, jouw doel en jouw situatie. Elke les krijg je persoonlijke feedback." },
        { emoji: "📐", title: "Techniektraining op jouw niveau", description: "Leer de basis-bewegingen (squats, push-ups, deadlifts) op een veilige manier die past bij jouw lichaam." },
        { emoji: "🍎", title: "Voeding & leefstijl basics", description: "Simpele, haalbare tips over voeding, slaap en herstel – geen ingewikkelde diëten." },
        { emoji: "📊", title: "Een progressieplan", description: "Veilige opbouw die past bij jouw niveau. Niet te snel, niet te langzaam – precies goed." },
        { emoji: "👥", title: "Community onboarding", description: "Je leert andere leden kennen, voelt je welkom en wordt onderdeel van de CFL familie." },
        { emoji: "🔄", title: "Mini check-in halverwege", description: "Na 2 weken evalueren we samen hoe het gaat en passen we waar nodig aan." },
        { emoji: "🎯", title: "Evaluatie aan het einde", description: "Na 28 dagen bespreken we jouw vooruitgang en geven we persoonlijk advies voor je vervolg." }
      ]
    },
    howItWorks: {
      title: "Hoe Werkt Het Starten?",
      intro: "Beginnen bij CrossFit Leiden is makkelijk. We leiden je door 3 eenvoudige stappen:",
      steps: [
        {
          title: "Plan een Gratis Intro",
          description: "Dit is een rustig gesprek van 30 minuten. <strong>Geen workout</strong>, geen verplichtingen. We maken kennis, geven je een rondleiding en luisteren naar jouw doelen en situatie.",
          note: "Je krijgt ook antwoord op al je vragen over de Kickstart, planning en tarieven."
        },
        {
          title: "Maak Kennis met de Kickstart",
          description: "Tijdens de intro leggen we het hele Kickstart-programma uit. Je hoort precies wat je kunt verwachten, hoe de begeleiding werkt en hoe we jou helpen veilig te starten.",
          note: "Past het bij je? Dan plannen we meteen je eerste les in."
        },
        {
          title: "Start Jouw 28-Dagen Traject",
          description: "Je start met je eerste les in een kleine, veilige groep. Onze coaches begeleiden je elke stap van de weg. Vragen? Die kun je altijd stellen.",
          note: "Na 28 dagen ben je klaar om door te gaan met onze reguliere lessen – of je kiest voor een ander programma."
        }
      ],
      cta: "Plan een Gratis Intro",
      ctaNote: "Het gesprek is gratis en vrijblijvend. Geen verplichtingen!"
    },
    coaches: {
      title: "Guided by certified coaches",
      max: {
        name: "Coach Max",
        role: "Kickstart Lead Coach",
        description: "Max is de coach die zelfs tijdens burpees blijft glimlachen. Rustig, duidelijk en positief – en hij zorgt dat jij je meteen thuis voelt."
      },
      annie: {
        name: "Coach Annie",
        role: "Nutrition Coach",
        description: "Annie is onze rustige kracht. Geen gedoe, geen drama – gewoon praktische tips die passen in je drukke leven."
      }
    },
    testimonials: {
      title: "Wat Zeggen Leden Over de Kickstart?",
      items: [
        {
          emoji: "👨",
          name: "Matthew, 43",
          subtitle: "Father of 4 kids",
          text: '"Just completed the intake month – what a great experience. Max explained everything so clearly and kept it fun. If you\'re thinking about it, just book. The environment is incredibly welcoming."'
        },
        {
          emoji: "👩",
          name: "Liselotte, 42",
          subtitle: "Mother of a young child",
          text: '"I\'m so glad I started training here. After one month of small-group training and nutrition guidance, I already feel fitter and have more energy. The coaches are professional and relaxed."'
        },
        {
          emoji: "👩",
          name: "Julia, 44",
          subtitle: "Mom with low energy",
          text: '"If you\'re hesitating: DO IT. I started the Kickstart at the end of October and it changed everything. After four weeks of coaching and community, I feel fitter, stronger and honestly happier."'
        }
      ]
    },
    faq: {
      title: "Veelgestelde Vragen",
      items: [
        {
          question: "Moet ik fit zijn om de Kickstart te doen?",
          answer: "Absoluut niet! De Kickstart is er juist voor om veilig op te bouwen, waar je ook begint. We passen alles aan op jouw niveau en bouwen rustig op."
        },
        {
          question: "Hoe vaak train ik tijdens de Kickstart?",
          answer: "We raden 2-3 keer per week aan voor de beste resultaten. Dat is haalbaar naast werk en gezin, en geeft je lichaam genoeg tijd om te herstellen."
        },
        {
          question: "Is de Kickstart verplicht?",
          answer: "Nee, maar we raden het sterk aan! 95% van onze nieuwe leden kiest voor de Kickstart omdat het rust, structuur en vertrouwen geeft. Het is de beste manier om veilig te starten."
        },
        {
          question: "Kan ik na de Kickstart stoppen?",
          answer: "Ja, je kunt maandelijks opzeggen. Maar de meeste mensen gaan graag door omdat ze merken hoeveel verschil het maakt in hun energie en welzijn!"
        },
        {
          question: "Train ik alleen of in een groep?",
          answer: "Nee, je traint in een kleine groep van max 5 personen."
        }
      ]
    },
    personas: {
      sectionTitle: "Drie mensen, één Kickstart",
      sectionSubtitle: "Iedereen start met een ander verhaal. Dit is hoe Lisa, Martin en Sophie hun eerste 28 dagen beleefden.",
      cards: [
        { initial: "L", name: "Lisa, 38", label: "Totale beginner", description: "Heeft in geen tien jaar gesport. Druk met werk en twee kinderen. Dacht dat CrossFit niet voor haar was." },
        { initial: "M", name: "Martin, 52", label: "Blessureverleden", description: "Heeft al jaren last van zijn rug en schouder. Zijn fysio zei: je moet meer bewegen. Maar hij was bang om het erger te maken." },
        { initial: "S", name: "Sophie, 34", label: "Sportervaring", description: "Heeft jarenlang hardgelopen en in een sportschool getraind. Miste persoonlijke aandacht en een groep om bij te horen." }
      ],
      weekQuotes: [
        [
          { text: "\"Ik was zo zenuwachtig dat ik drie keer heb overwogen om niet te gaan. Maar Max stelde me meteen op m'n gemak. Na de eerste les dacht ik: waarom heb ik dit niet eerder gedaan?\"", author: "Lisa, 38" },
          { text: "\"Max vroeg meteen naar mijn schouder en rug. Bij elke oefening kreeg ik een aangepaste variant. Dat was precies de geruststelling die ik nodig had.\"", author: "Martin, 52" },
          { text: "\"Ik verwachtte een standaard groepsles, maar de aandacht voor techniek was veel dieper dan ik gewend was. Dit is geen afvindsportschool.\"", author: "Sophie, 34" }
        ],
        [
          { text: "\"Het voelde niet meer als 'naar de sportschool gaan'. Het voelde als afspreken met mensen die hetzelfde meemaken als jij.\"", author: "Lisa, 38" },
          { text: "\"Mijn rug voelde al anders. Niet pijnvrij, maar losser. En Annie stuurde me een berichtje over hoe ik thuis kon stretchen. Dat verwacht je niet.\"", author: "Martin, 52" },
          { text: "\"Annie liet me zien dat ik structureel te weinig eiwitten binnenkreeg. Simpele aanpassing, groot verschil.\"", author: "Sophie, 34" }
        ],
        [
          { text: "\"Ik merkte dat ik automatisch beter ging eten. In de training schaal ik nog steeds, maar ik weet nu wat ik doe. Dat gevoel is onbetaalbaar.\"", author: "Lisa, 38" },
          { text: "\"Ik koos voor het eerst zelf mijn gewicht. Ik ken mijn lichaam weer. En het mooiste: ik heb deze week geen pijnstillers genomen.\"", author: "Martin, 52" },
          { text: "\"Hier is elke training anders en de coaching wordt steeds specifieker. Ze zien echt waar jij aan moet werken.\"", author: "Sophie, 34" }
        ],
        [
          { text: "\"Mijn man zei: je bent een ander mens. Meer energie, beter humeur, en ik slaap als een blok. Dit is nu van mij.\"", author: "Lisa, 38" },
          { text: "\"Mijn schouder is niet genezen, maar ik beweeg beter, sta steviger, en heb weer vertrouwen in mijn lichaam.\"", author: "Martin, 52" },
          { text: "\"Dit is de community die ik miste. Ik ga nergens meer heen.\"", author: "Sophie, 34" }
        ]
      ],
      weekTitles: ["Week 1", "Week 2", "Week 3", "Week 4"],
      resultTitle: "Wat zeggen ze na 28 dagen?",
      resultQuotes: [
        { text: "\"Ik kwam binnen als iemand die dacht dat ze niet sportief was. Ik ga weg als iemand die drie keer per week traint en het niet meer wil missen.\"", author: "Lisa, 38" },
        { text: "\"Ik kwam binnen met pijn en twijfel. Ik ga weg met minder pijn, meer vertrouwen, en een groep mensen die me kent.\"", author: "Martin, 52" },
        { text: "\"Ik kwam binnen als iemand die wist hoe je moest trainen. Ik ga weg als iemand die weet hoe je onderdeel wordt van iets.\"", author: "Sophie, 34" }
      ]
    },
    finalCta: {
      title: "Benieuwd of de Kickstart bij jou past?",
      subtitle: "Plan een gratis intro – geen workout, alleen een rustig gesprek en een rondleiding. We leggen je graag alles uit en beantwoorden al je vragen. Volledig vrijblijvend!",
      button: "Plan een Gratis Intro"
    },
    footer: {
      text: "Heb je vragen over de Kickstart of wil je meer weten?",
      linkText: "Neem contact met ons op",
      suffix: "– we helpen je graag!"
    }
  },
  en: {
    hero: {
      title: "Start Safe and Strong with our Kickstart",
      description: "Our 28-day program for everyone who wants to build safely. Personal guidance, structured approach, at your own pace.",
      cta: "Schedule a Free Intro"
    },
    whatIs: {
      title: "What is the Kickstart?",
      intro: "Our 28-day program for everyone who wants to build safely. Whether you're completely new, haven't exercised in years, or simply want to build a solid foundation – we start at your level.",
      important: "<strong>Important:</strong> You always start with a free intro. In that conversation we'll determine together if the Kickstart is the best start for you.",
      description: "During <strong>28 days</strong> you'll build energy, create a routine, and master all fundamental movements – completely at your own pace, with personal guidance from our coaches.",
      focusTitle: "What do we focus on?",
      focus: [
        { title: "Safe progression", description: "Starting at your level with lots of attention to proper technique" },
        { title: "More energy", description: "Build conditioning and strength without overtraining" },
        { title: "Creating a routine", description: "Learn how to fit training into your busy life" },
        { title: "Building confidence", description: "Discover what your body can do, step by step" }
      ]
    },
    forWho: {
      title: "Who is the Kickstart For?",
      cards: [
        { emoji: "👋", title: "Fresh Start", description: "Never done CrossFit or haven't exercised in a while? We start at your level." },
        { emoji: "👨‍👩‍👧‍👦", title: "Busy Parents", description: "Need structure and a clear plan? The Kickstart provides guidance." },
        { emoji: "⏸️", title: "Starting Again", description: "Want to (re)start or rebuild? We'll pick up calmly from where you are." },
        { emoji: "🩹", title: "Training Safely", description: "Uncertain or old injury? We adapt everything to your situation and build safely." }
      ]
    },
    whatsIncluded: {
      title: "What's Included in the Kickstart?",
      items: [
        { emoji: "🏋️", title: "Train 2-3 times per week", description: "In group classes or semi-private, depending on what suits you. Flexible scheduling." },
        { emoji: "👨‍🏫", title: "Personal coach guidance", description: "Our coaches know your name, your goal, and your situation. Every class you get personal feedback." },
        { emoji: "📐", title: "Technique training at your level", description: "Learn the basic movements (squats, push-ups, deadlifts) in a safe way that fits your body." },
        { emoji: "🍎", title: "Nutrition & lifestyle basics", description: "Simple, achievable tips about nutrition, sleep, and recovery – no complicated diets." },
        { emoji: "📊", title: "A progression plan", description: "Safe progression that fits your level. Not too fast, not too slow – just right." },
        { emoji: "👥", title: "Community onboarding", description: "You'll meet other members, feel welcome, and become part of the CFL family." },
        { emoji: "🔄", title: "Mini check-in halfway", description: "After 2 weeks we evaluate together how things are going and adjust where needed." },
        { emoji: "🎯", title: "Evaluation at the end", description: "After 28 days we discuss your progress and give personal advice for your continuation." }
      ]
    },
    howItWorks: {
      title: "How Does Starting Work?",
      intro: "Starting at CrossFit Leiden is easy. We guide you through 3 simple steps:",
      steps: [
        {
          title: "Schedule a Free Intro",
          description: "This is a relaxed 30-minute conversation. <strong>No workout</strong>, no obligations. We meet, give you a tour, and listen to your goals and situation.",
          note: "You'll also get answers to all your questions about the Kickstart, scheduling, and pricing."
        },
        {
          title: "Get to Know the Kickstart",
          description: "During the intro we explain the entire Kickstart program. You'll hear exactly what to expect, how the guidance works, and how we help you start safely.",
          note: "Does it fit? Then we'll schedule your first class right away."
        },
        {
          title: "Start Your 28-Day Journey",
          description: "You start with your first class in a small, safe group. Our coaches guide you every step of the way. Questions? You can always ask.",
          note: "After 28 days you're ready to continue with our regular classes – or choose another program."
        }
      ],
      cta: "Schedule a Free Intro",
      ctaNote: "The conversation is free and non-binding. No obligations!"
    },
    coaches: {
      title: "Guided by certified coaches",
      max: {
        name: "Coach Max",
        role: "Kickstart Lead Coach",
        description: "Max is the coach who keeps smiling even during burpees. Calm, clear, and positive – and he makes sure you feel at home right away."
      },
      annie: {
        name: "Coach Annie",
        role: "Nutrition Coach",
        description: "Annie is our quiet strength. No fuss, no drama – just practical tips that fit into your busy life."
      }
    },
    testimonials: {
      title: "What Do Members Say About the Kickstart?",
      items: [
        {
          emoji: "👨",
          name: "Matthew, 43",
          subtitle: "Father of 4 kids",
          text: '"Just completed the intake month – what a great experience. Max explained everything so clearly and kept it fun. If you\'re thinking about it, just book. The environment is incredibly welcoming."'
        },
        {
          emoji: "👩",
          name: "Liselotte, 42",
          subtitle: "Mother of a young child",
          text: '"I\'m so glad I started training here. After one month of small-group training and nutrition guidance, I already feel fitter and have more energy. The coaches are professional and relaxed."'
        },
        {
          emoji: "👩",
          name: "Julia, 44",
          subtitle: "Mom with low energy",
          text: '"If you\'re hesitating: DO IT. I started the Kickstart at the end of October and it changed everything. After four weeks of coaching and community, I feel fitter, stronger and honestly happier."'
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do I need to be fit to do the Kickstart?",
          answer: "Absolutely not! The Kickstart is designed to help you build safely, wherever you're starting from. We adapt everything to your level and build up gradually."
        },
        {
          question: "How often do I train during the Kickstart?",
          answer: "We recommend 2-3 times per week for best results. That's manageable alongside work and family, and gives your body enough time to recover."
        },
        {
          question: "Is the Kickstart mandatory?",
          answer: "No, but we strongly recommend it! 95% of our new members choose the Kickstart because it provides peace, structure, and confidence. It's the best way to start safely."
        },
        {
          question: "Can I quit after the Kickstart?",
          answer: "Yes, you can cancel monthly. But most people happily continue because they notice how much difference it makes in their energy and well-being!"
        },
        {
          question: "Do I train alone or in a group?",
          answer: "No, you train in a small group of max 5 people."
        }
      ]
    },
    personas: {
      sectionTitle: "Three people, one Kickstart",
      sectionSubtitle: "Everyone starts with a different story. This is how Lisa, Martin and Sophie experienced their first 28 days.",
      cards: [
        { initial: "L", name: "Lisa, 38", label: "Complete beginner", description: "Hasn't exercised in ten years. Busy with work and two kids. Thought CrossFit wasn't for her." },
        { initial: "M", name: "Martin, 52", label: "History of injuries", description: "Has had back and shoulder issues for years. His physio said: you need to move more. But he was afraid of making it worse." },
        { initial: "S", name: "Sophie, 34", label: "Experienced athlete", description: "Has run and trained at gyms for years. Missed personal attention and a group to belong to." }
      ],
      weekQuotes: [
        [
          { text: "\"I was so nervous I almost turned back three times. But Max put me at ease straight away. After the first class I thought: why didn't I do this sooner?\"", author: "Lisa, 38" },
          { text: "\"Max asked about my shoulder and back right away. For every exercise I got a modified version. That was exactly the reassurance I needed.\"", author: "Martin, 52" },
          { text: "\"I expected a standard group class, but the attention to technique was much deeper than I was used to. This is not a checkbox gym.\"", author: "Sophie, 34" }
        ],
        [
          { text: "\"It didn't feel like 'going to the gym' anymore. It felt like meeting up with people going through the same thing as you.\"", author: "Lisa, 38" },
          { text: "\"My back already felt different. Not pain-free, but looser. And Annie sent me a message about how to stretch at home. You don't expect that.\"", author: "Martin, 52" },
          { text: "\"Annie showed me I was consistently eating too little protein. Simple adjustment, big difference.\"", author: "Sophie, 34" }
        ],
        [
          { text: "\"I noticed I was automatically eating better. Not because I had to, but because I felt it was working.\"", author: "Lisa, 38" },
          { text: "\"I chose my own weight for the first time without asking Max. I know my body again. And: no painkillers this week.\"", author: "Martin, 52" },
          { text: "\"Every session is different and the coaching gets more specific. They really see what you need to work on.\"", author: "Sophie, 34" }
        ],
        [
          { text: "\"My husband said: you're a different person. More energy, better mood, and I sleep like a log. This is mine now.\"", author: "Lisa, 38" },
          { text: "\"My shoulder isn't healed, but I move better, stand steadier, and have regained confidence in my body.\"", author: "Martin, 52" },
          { text: "\"This is the community I was missing. I'm not going anywhere.\"", author: "Sophie, 34" }
        ]
      ],
      weekTitles: ["Week 1", "Week 2", "Week 3", "Week 4"],
      resultTitle: "What do they say after 28 days?",
      resultQuotes: [
        { text: "\"I came in as someone who thought she wasn't athletic. I leave as someone who trains three times a week and doesn't want to miss it.\"", author: "Lisa, 38" },
        { text: "\"I came in with pain and doubt. I leave with less pain, more confidence, and a group of people who know me.\"", author: "Martin, 52" },
        { text: "\"I came in knowing how to train. I leave knowing how to become part of something.\"", author: "Sophie, 34" }
      ]
    },
    finalCta: {
      title: "Curious if the Kickstart suits you?",
      subtitle: "Schedule a free intro – no workout, just a relaxed conversation and a tour. We're happy to explain everything and answer all your questions. Completely non-binding!",
      button: "Schedule a Free Intro"
    },
    footer: {
      text: "Have questions about the Kickstart or want to know more?",
      linkText: "Contact us",
      suffix: "– we're happy to help!"
    }
  }
};

export default function Kickstart() {
  const locale = useLocale();
  const t = content[locale as keyof typeof content] || content.nl;

  // Handler for opening the intro popup
  const handlePopupClick = () => {
    track('Kickstart Page CTA Click');
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  return (
    <>
      {/* Hero sectie */}
      <section className="bg-gradient-to-r from-jonquil via-yellow-400 to-jonquil text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl mb-8 text-gray-800">
              {t.hero.description}
            </p>
            <button
              onClick={handlePopupClick}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg cursor-pointer"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Wat is de Kickstart */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t.whatIs.title}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {t.whatIs.intro}
            </p>
            <div className="bg-jonquil/10 rounded-lg p-5 mb-6">
              <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: t.whatIs.important }} />
            </div>
            <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t.whatIs.description }} />

            <div className="bg-jonquil/20 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-lg mb-3">{t.whatIs.focusTitle}</h3>
              <ul className="space-y-2 text-gray-700">
                {t.whatIs.focus.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cinnabar mr-2">✓</span>
                    <span><strong>{item.title}</strong> – {item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personas - Drie mensen, één Kickstart */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">{t.personas.sectionTitle}</h2>
            <p className="text-lg text-gray-600">{t.personas.sectionSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {t.personas.cards.map((card, index) => (
              <div key={index} className="bg-organic-bg rounded-xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500 mx-auto mb-4">
                  {card.initial}
                </div>
                <h3 className="font-bold text-xl mb-1">{card.name}</h3>
                <p className="text-cinnabar text-sm font-semibold mb-3">{card.label}</p>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week-by-week quotes from personas */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {locale === 'nl' ? 'Hun ervaring, week voor week' : 'Their experience, week by week'}
            </h2>
            <div className="space-y-10">
              {t.personas.weekTitles.map((weekTitle, weekIndex) => (
                <div key={weekIndex}>
                  <h3 className="text-xl font-bold mb-4 text-cinnabar">{weekTitle}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {t.personas.weekQuotes[weekIndex].map((quote, quoteIndex) => (
                      <div key={quoteIndex} className="bg-white border-l-4 border-cinnabar rounded-r-xl p-4 shadow-sm">
                        <p className="italic text-gray-700 text-sm mb-2">{quote.text}</p>
                        <p className="text-xs font-bold text-gray-500">{quote.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Persona result quotes */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">{t.personas.resultTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.personas.resultQuotes.map((quote, index) => (
                <div key={index} className="bg-organic-bg border-l-4 border-cinnabar rounded-r-xl p-6 shadow-sm">
                  <p className="italic text-gray-800 mb-3">{quote.text}</p>
                  <p className="text-sm font-bold text-gray-500">{quote.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie is het */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.forWho.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.forWho.cards.map((card, index) => (
                <div key={index} className="bg-stone-50 rounded-xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">{card.emoji}</div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wat zit er in de Kickstart */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.whatsIncluded.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.whatsIncluded.items.map((item, index) => (
                <div key={index} className="bg-verdigris/5 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-3">{item.emoji}</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het starten - 3 stappen */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.howItWorks.title}</h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              {t.howItWorks.intro}
            </p>

            <div className="space-y-8">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className="bg-organic-bg rounded-xl p-8 shadow-sm flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: step.description }} />
                    <p className="text-gray-600 text-sm">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={handlePopupClick}
                className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg cursor-pointer"
              >
                {t.howItWorks.cta}
              </button>
              <p className="text-gray-600 text-sm mt-4">
                {t.howItWorks.ctaNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by certified coaches */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.coaches.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coach Max */}
            <div className="bg-organic-bg rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20max.png"
                  alt="Coach Max"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-xl">{t.coaches.max.name}</h3>
                  <p className="text-cinnabar font-semibold">{t.coaches.max.role}</p>
                </div>
              </div>
              <p className="text-gray-700">
                {t.coaches.max.description}
              </p>
            </div>

            {/* Coach Annie */}
            <div className="bg-organic-bg rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Annie%20%20%283%29.png"
                  alt="Coach Annie"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-xl">{t.coaches.annie.name}</h3>
                  <p className="text-cinnabar font-semibold">{t.coaches.annie.role}</p>
                </div>
              </div>
              <p className="text-gray-700">
                {t.coaches.annie.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultaten van leden - Social proof */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-stone-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.emoji}</div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Journey page teaser */}
      <section className="section-padding bg-jonquil/10 border-y border-jonquil/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-cinnabar font-semibold text-sm uppercase tracking-wide mb-3">
              {locale === 'nl' ? 'Wil je weten hoe het echt voelt?' : 'Want to know how it really feels?'}
            </p>
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'nl'
                ? 'Lees het verhaal van Lisa, Martin en Sophie'
                : 'Read the story of Lisa, Martin and Sophie'}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {locale === 'nl'
                ? 'Drie mensen. Drie totaal andere startpunten. Week voor week lees je hoe zij hun eerste 28 dagen beleefden — van nerveus op dag 1 tot "ik ga nergens meer heen" op dag 28.'
                : 'Three people. Three completely different starting points. Week by week you read how they experienced their first 28 days — from nervous on day 1 to "I\'m not going anywhere" on day 28.'}
            </p>
            <Link
              href={`/${locale}/kickstart/jouw-eerste-28-dagen`}
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg text-lg"
            >
              {locale === 'nl' ? 'Lees de volledige reis →' : 'Read the full journey →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.faq.title}</h2>
            <div className="space-y-4">
              {t.faq.items.map((item, index) => (
                <details key={index} className="bg-organic-bg rounded-xl p-6 group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    {item.question}
                    <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <IntroCtaSection
        title={t.finalCta.title}
        subtitle={t.finalCta.subtitle}
        buttonLabel={t.finalCta.button}
      />

      {/* Final note */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              {t.footer.text}{" "}
              <Link href={`/${locale}/contact`} className="text-cinnabar font-semibold hover:underline">
                {t.footer.linkText}
              </Link>
              {" "}{t.footer.suffix}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
