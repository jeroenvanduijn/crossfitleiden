"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';

export default function BlogPost() {
  const locale = useLocale();

  const handleCTAClick = () => {
    track('Blog CTA Click', { post: 'no-sleeping-members' });
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  const content = {
    nl: {
      category: "Gym Filosofie",
      readTime: "7 min",
      title: "Geen Slapende Leden: Waarom Je Lidmaatschap Voor Je Moet Werken",
      sections: [
        {
          text: "In veel sportscholen is het businessmodel simpel. Ze verkopen zo veel mogelijk lidmaatschappen, wetende dat een groot deel van de leden niet komt opdagen."
        },
        {
          text: "Jij blijft betalen, je komt niet, en de gymvloer blijft lekker rustig. Dat maakt het makkelijk om de prijzen laag te houden, maar er is een probleem. Jij wordt niet fitter, en niemand belt je."
        },
        {
          text: "Bij CrossFit Leiden werken we compleet anders. We hebben geen slapende of inactieve leden. Als je niet komt opdagen, merken we dat, nemen we contact op, en als trainen echt niet meer in je leven past, helpen we je je lidmaatschap te stoppen in plaats van het eindeloos door te laten lopen. Onze hele gym is gebouwd rondom coaching, community en echte resultaten, niet rondom het verkopen van zo veel mogelijk toegangspasjes."
        },
        {
          heading: "We zien onze leden echt",
          text: "Op dit moment hebben we ongeveer 450 leden. Elke week trainen er rond de 400 van hen bij ons. Dat betekent dat meer dan 90% van onze leden elke week actief is."
        },
        {
          text: "Dat is niet normaal in de fitnesswereld. Het betekent:"
        },
        {
          list: [
            "Onze lessen zitten vol met echte mensen, geen namen in een systeem",
            "Coaches weten wie je bent en hoe je beweegt",
            "Je voelt je deel van een levende community, niet een nummer op een lijst"
          ]
        },
        {
          text: "Om dat mogelijk te maken, houden we de aanwezigheid goed in de gaten."
        },
        {
          heading: "Wat gebeurt er als je niet meer komt?",
          text: "We wachten niet 6 maanden om te reageren. We beginnen veel eerder."
        },
        {
          subheading: "Na ongeveer 2 weken afwezigheid",
          text: "Nemen we contact op. Een WhatsApp, een mail of een kort telefoontje:"
        },
        {
          list: [
            "\"Hey, alles goed?\"",
            "\"Is er iets veranderd in je schema?\"",
            "\"Kunnen we je helpen een nieuw trainingsmoment te vinden?\""
          ]
        },
        {
          text: "Geen druk, gewoon contact. Het leven gebeurt. Kinderen worden ziek, werk explodeert, je verhuist. We snappen het."
        },
        {
          subheading: "Tussen 2 weken en 100 dagen",
          text: "Als je wegblijft, nemen we vaker contact op. We nodigen je uit voor een goal review, of we kijken samen naar een ander plan:"
        },
        {
          list: [
            "Misschien heb je een ander tijdslot nodig",
            "Misschien past small group of personal training beter",
            "Misschien passen we je doel aan omdat je leven is veranderd"
          ]
        },
        {
          text: "Het punt is: we laten je niet stilletjes verdwijnen."
        },
        {
          subheading: "Na ongeveer 100 dagen geen training",
          text: "Dan stellen we een andere vraag:"
        },
        {
          quote: "\"Wil je dit lidmaatschap nog?\""
        },
        {
          text: "Als je 100 dagen niet hebt getraind, is het duidelijk dat de huidige opzet niet voor je werkt. Op dat moment stellen we vaak voor om je lidmaatschap te stoppen, of te bevriezen als dat meer zin heeft."
        },
        {
          text: "Niet als straf, maar als eerlijkheid. We willen niet dat je betaalt voor iets wat je niet gebruikt."
        },
        {
          heading: "Waarom we dit doen",
          text: "Er zijn drie grote redenen."
        },
        {
          subheading: "1. Je lidmaatschap moet waarde geven",
          text: "Je werkt hard voor je geld. We willen dat dat geld je iets teruggeeft:"
        },
        {
          list: [
            "Meer energie",
            "Een sterker lichaam",
            "Minder stress",
            "Meer plezier in beweging"
          ]
        },
        {
          text: "Als je niet traint, krijg je niks hiervan. Dan is je lidmaatschap gewoon een maandelijkse rekening. Dat voelt verkeerd voor ons."
        },
        {
          subheading: "2. We houden plekken open voor mensen die echt komen",
          text: "We zijn geen 3000 vierkante meter gym waar iedereen zomaar kan binnenlopen. Onze lessen hebben beperkte plekken en coaches geven persoonlijke aandacht."
        },
        {
          text: "Als we het systeem zouden vullen met slapende leden, wordt het:"
        },
        {
          list: [
            "Volle ledenlijst",
            "Lege gym",
            "Of volgepropte lessen waar niemand goede coaching krijgt"
          ]
        },
        {
          text: "We kiezen het tegenovergestelde. We houden ruimte en energie voor mensen die komen opdagen en willen bewegen."
        },
        {
          subheading: "3. We zijn een community, geen kaartje scannen",
          text: "We zien CrossFit Leiden als een tweede huiskamer voor ouders, expats en drukke mensen die zich sterk willen voelen in het dagelijks leven. In een huiskamer merk je wanneer iemand ontbreekt."
        },
        {
          text: "Daarom plannen we elke drie maanden een goal review voor onze leden. We gaan met je zitten, kijken naar je doelen en je leven, en vragen:"
        },
        {
          list: [
            "\"Wat heb je nodig de komende maanden?\"",
            "\"Hoe kunnen we je beter helpen?\""
          ]
        },
        {
          text: "Als we zien dat je helemaal niet komt, negeren we dat niet. We praten erover."
        },
        {
          heading: "Is dat niet slecht voor business?",
          text: "In het klassieke gym model, ja. Als je inkomsten afhangen van mensen die betalen en niet komen, dan is inactieve leden bellen niet slim."
        },
        {
          text: "Ons model is anders:"
        },
        {
          list: [
            "We verdienen ons geld door mensen te helpen die echt trainen",
            "We investeren in coaching, community en opvolging",
            "We focussen op lange termijn relaties, niet snelle inschrijvingen"
          ]
        },
        {
          text: "Dat betekent dat onze prijzen niet de laagste in de stad zijn. Maar je betaalt ook niet voor niks."
        },
        {
          heading: "Wat dit voor jou betekent als je lid wordt",
          text: "Als je lid wordt bij CrossFit Leiden, kun je dit verwachten:"
        },
        {
          list: [
            "Je verdwijnt niet stilletjes uit het systeem",
            "Als je een tijdje weg bent, merken we dat en nemen we contact op",
            "Elke drie maanden nodigen we je uit voor een goal review",
            "Je traint in een groep waar bijna iedereen elke week komt",
            "Coaches kennen je naam en je verhaal"
          ]
        },
        {
          text: "Kort gezegd: we zijn blij als je er bent, zwetend met ons. Als je niet meer kunt of wilt trainen, helpen we je een oplossing te vinden, inclusief het stoppen van je lidmaatschap."
        },
        {
          text: "Het is heel simpel. We willen dat je actief bent, niet slapend."
        },
        {
          heading: "Wil je ervaren hoe dat voelt?",
          text: "Als dit klinkt als het type gym waar je naar op zoek was, kom dan langs."
        },
        {
          text: "Boek een vrijblijvende intro, drink een kop koffie met ons, en kijk of onze manier van werken bij je leven past. Als je lid wordt, beloven we één ding:"
        },
        {
          quote: "Je zult nooit gewoon een nummer zijn in ons systeem."
        }
      ]
    },
    en: {
      category: "Gym Philosophy",
      readTime: "7 min",
      title: "No Sleeping Members: Why Your Membership Has To Work For You",
      sections: [
        {
          text: "In many gyms the business model is simple. They sell as many memberships as possible, knowing that a big part of the members will not show up."
        },
        {
          text: "You keep paying, you do not come, and the gym floor stays nice and quiet. That makes it easy to keep prices low, but there is a problem. You do not get fitter, and nobody calls you."
        },
        {
          text: "At CrossFit Leiden we work completely different. We do not have sleeping or inactive members. If you do not show up, we notice it, we contact you, and if training really does not fit your life anymore, we help you stop your membership instead of letting it run forever. Our whole gym is built around coaching, community and real results, not around selling as many keycards as possible."
        },
        {
          heading: "We actually see our members",
          text: "Right now we have about 450 members. Every week around 400 of them train with us. That means more than 90% of our members are active every single week."
        },
        {
          text: "That is not normal in the fitness world. It means:"
        },
        {
          list: [
            "Our classes are full of real people, not names in a system",
            "Coaches know who you are and how you move",
            "You feel part of a living community, not a number on a list"
          ]
        },
        {
          text: "To make that possible, we keep a close eye on attendance."
        },
        {
          heading: "What happens if you stop coming?",
          text: "We do not wait 6 months to react. We start much earlier."
        },
        {
          subheading: "After about 2 weeks of no shows",
          text: "We reach out. A WhatsApp, a mail or a quick call:"
        },
        {
          list: [
            "\"Hey, everything ok?\"",
            "\"Did something change in your schedule?\"",
            "\"Can we help you find a new training moment?\""
          ]
        },
        {
          text: "No pressure, just contact. Life happens. Kids get sick, work explodes, you move house. We get it."
        },
        {
          subheading: "Between 2 weeks and 100 days",
          text: "If you stay away, we will contact you more times. We invite you for a goal review, or we look together at another plan:"
        },
        {
          list: [
            "Maybe you need a different time slot",
            "Maybe small group or personal training fits better",
            "Maybe we adjust your goal because your life changed"
          ]
        },
        {
          text: "The point is: we do not let you quietly disappear."
        },
        {
          subheading: "After about 100 days of no training",
          text: "Then we ask a different question:"
        },
        {
          quote: "\"Do you still want this membership?\""
        },
        {
          text: "If you have not trained for 100 days, it is clear the current setup does not work for you. At that moment we often propose to stop your membership, or to freeze it if that makes more sense."
        },
        {
          text: "Not as a punishment, but as honesty. We do not want you to pay for something you do not use."
        },
        {
          heading: "Why we do this",
          text: "There are three big reasons."
        },
        {
          subheading: "1. Your membership should give value",
          text: "You work hard for your money. We want that money to give you something back:"
        },
        {
          list: [
            "More energy",
            "A stronger body",
            "Less stress",
            "More fun in movement"
          ]
        },
        {
          text: "If you do not train, you get none of that. Then your membership is just a monthly bill. That feels wrong to us."
        },
        {
          subheading: "2. We keep spots open for people who really come",
          text: "We are not a 3000 square meter gym where everybody can just walk in. Our classes have limited places and coaches give personal attention."
        },
        {
          text: "If we would fill the system with sleeping members, it becomes:"
        },
        {
          list: [
            "Full member list",
            "Empty gym",
            "Or packed classes where nobody gets good coaching"
          ]
        },
        {
          text: "We choose the opposite. We keep space and energy for people who show up and want to move."
        },
        {
          subheading: "3. We are a community, not a card swipe",
          text: "We see CrossFit Leiden as a second living room for parents, expats and busy people who want to feel strong in daily life. In a living room you notice when someone is missing."
        },
        {
          text: "That is why we plan a goal review every three months for our members. We sit down with you, look at your goals and your life, and ask:"
        },
        {
          list: [
            "\"What do you need in the coming months?\"",
            "\"How can we help you better?\""
          ]
        },
        {
          text: "If we see that you are not coming at all, we do not ignore it. We talk about it."
        },
        {
          heading: "Is that not bad for business?",
          text: "In the classic gym model, yes. If your income depends on people paying and not coming, then calling inactive members is not smart."
        },
        {
          text: "Our model is different:"
        },
        {
          list: [
            "We earn our money by helping people who actually train",
            "We invest in coaching, community and follow up",
            "We focus on long term relationships, not quick sign ups"
          ]
        },
        {
          text: "That means our prices are not the lowest in town. But you also do not pay for nothing."
        },
        {
          heading: "What this means for you if you join",
          text: "If you become a member at CrossFit Leiden, this is what you can expect:"
        },
        {
          list: [
            "You will not disappear silently from the system",
            "If you are gone for a while, we will notice and contact you",
            "Every three months we invite you for a goal review",
            "You train in a group where almost everyone comes every week",
            "Coaches know your name and your story"
          ]
        },
        {
          text: "Short version: we are happy if you are here, sweating with us. If you cannot or do not want to train anymore, we help you find a solution, including stopping your membership."
        },
        {
          text: "It is very simple. We want you to be active, not sleeping."
        },
        {
          heading: "Want to experience how that feels?",
          text: "If this sounds like the type of gym you were looking for, come and meet us."
        },
        {
          text: "Book a no pressure intro, drink a coffee with us, and see if our way of working fits your life. If you join, we promise one thing:"
        },
        {
          quote: "You will never be just a number in our system."
        }
      ]
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-cinnabar">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-cinnabar">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{locale === 'nl' ? 'Geen Slapende Leden' : 'No Sleeping Members'}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-cinnabar font-semibold">{t.category}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{t.readTime} read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>

          {/* Image */}
          <div className="aspect-video rounded-xl mb-8 overflow-hidden">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-80.jpg"
              alt="CrossFit Leiden community"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            {t.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h2 className="text-3xl font-bold mt-10 mb-6">{section.heading}</h2>
                )}
                {section.subheading && (
                  <h3 className="text-2xl font-bold mt-8 mb-4">{section.subheading}</h3>
                )}
                {section.text && (
                  <p className="text-lg leading-relaxed">{section.text}</p>
                )}
                {section.quote && (
                  <blockquote className="border-l-4 border-cinnabar pl-6 py-2 my-6 italic text-xl">
                    {section.quote}
                  </blockquote>
                )}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              {locale === 'nl' ? 'Wil je kennismaken?' : 'Want to meet us?'}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {locale === 'nl'
                ? 'Plan een gratis intro en ervaar zelf hoe wij werken.'
                : 'Schedule a free intro and experience how we work.'}
            </p>
            <button
              onClick={handleCTAClick}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
            >
              {locale === 'nl' ? 'Plan een Gratis Intro' : 'Schedule Free Intro'}
            </button>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href={`/${locale}/blog`} className="text-cinnabar font-semibold hover:underline inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'nl' ? 'Terug naar Blog' : 'Back to Blog'}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
