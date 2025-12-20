"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';

type Section = {
  heading?: string;
  subheading?: string;
  text?: string;
  quote?: string;
  list?: string[];
};

type Content = {
  category: string;
  readTime: string;
  title: string;
  sections: Section[];
};

export default function BlogPost() {
  const locale = useLocale();

  const handleCTAClick = () => {
    track('Blog CTA Click', { post: 'nervous-to-start-one-small-step' });
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  const content: Record<string, Content> = {
    en: {
      category: "Getting Started",
      readTime: "6 min",
      title: "Nervous to Start? You're Not Alone. Here's How One Small Step Changed Everything.",
      sections: [
        {
          text: 'Do you ever look at a gym and think, "I should go," but then your brain says, "Not today"? Maybe you worry you\'re not fit enough yet. Maybe you\'re afraid of getting hurt. Or maybe life is just… a lot. Work. Kids. Travel. Repeat.'
        },
        {
          text: "If that sounds familiar, you're not alone. And there's a gentle way in."
        },
        {
          text: 'Recently at CrossFit Leiden, a member finished our Kickstart program and said: "I just finished the Kickstart program and had a great experience. The coaches are supportive, motivating, and they truly care. I learned a lot and enjoyed every session. Highly recommend." Simple words, but they tell a big story—one that might be yours too.'
        },
        {
          heading: "What makes starting so hard",
          text: "For many expat parents and professionals, the biggest challenge isn't a heavy barbell. It's the fear of starting. Maybe you haven't trained in years. Maybe your back feels tight from sitting. Maybe you tried other gyms and didn't stick with it. The idea of walking into a new place where everyone \"knows what they're doing\" can feel scary."
        },
        {
          text: "That's exactly why our Kickstart exists."
        },
        {
          heading: "A gentle first step (with people who actually see you)",
          text: "Our Kickstart is a short, structured introduction to training at CrossFit Leiden. It's designed for busy people who want to move better, feel stronger, and build confidence—without feeling lost or rushed."
        },
        {
          text: 'In this case, the member who shared their experience had all the usual worries: "What if I\'m the slowest? What if I get injured? Do I even have time for this?" On day one, the goal wasn\'t to prove anything. It was simply to learn how to move safely, get to know the coaches, and leave with more energy than when they arrived.'
        },
        {
          text: "The coaches set the tone right away—warm, clear, and personal. They checked form. They offered options. They explained why a movement matters in real life—like picking up your child or sitting at your desk without pain. Every session felt like a small win."
        },
        {
          heading: "Small wins add up",
          text: "Halfway through, the member noticed subtle changes. Less stiffness after long workdays. More energy in the morning. A clearer head. That's what happens when you build consistency gently: your body and mind start to trust you again."
        },
        {
          text: 'By the end, they weren\'t just "done" with Kickstart—they were proud. Proud to have shown up. Proud to have learned. Proud to say, "I can do this."'
        },
        {
          heading: "What this means for you",
          text: "If you've been waiting to feel fit before you start—here's the truth: you don't need to be fit to begin. You begin to get fit. Our coaches meet you where you are. We scale everything. And we keep it human—no one-size-fits-all, no shouting, no pressure."
        },
        {
          text: "Here are a few micro-habits we suggest to make your start easier:"
        },
        {
          list: [
            "Book two classes a week. Put them in your calendar like a meeting with your future self.",
            "Pack your gym bag the night before. Remove one morning decision.",
            "Drink a glass of water before your first coffee.",
            "Do a 5-minute stretch after you put the kids to bed. Back, hips, shoulders—nothing fancy."
          ]
        },
        {
          text: "These small actions build trust and momentum. And when you train with a group of people who are also starting—or restarting—it's much easier to keep going. You realize you're not behind. You're right on time."
        },
        {
          heading: "You belong here",
          text: 'Our member\'s words still make us smile: "The coaches are supportive, motivating, and they truly care." That is exactly the point. We want you to feel safe, seen, and excited to show up. We want you to leave with more energy for the rest of your life, not less.'
        },
        {
          text: "If you're nervous, that's okay. Nervous just means you care. And you can bring that feeling with you—we'll take it from there."
        },
        {
          heading: "Ready for a gentle first step?",
          text: "Join us for a free intro class to get a feel for our community. Come meet the coaches, try some simple movements, and see how good it feels to start—without pressure, without ego, and with people who've got your back."
        },
        {
          text: "We can't wait to welcome you at CrossFit Leiden."
        }
      ]
    },
    nl: {
      category: "Aan de Slag",
      readTime: "6 min",
      title: "Zenuwachtig om te Beginnen? Je Bent Niet Alleen. Zo Veranderde Één Kleine Stap Alles.",
      sections: [
        {
          text: 'Kijk je wel eens naar een sportschool en denk je: "Ik zou moeten gaan," maar zegt je hoofd: "Vandaag niet"? Misschien maak je je zorgen dat je nog niet fit genoeg bent. Misschien ben je bang om geblesseerd te raken. Of misschien is het leven gewoon… veel. Werk. Kinderen. Reizen. Herhaal.'
        },
        {
          text: "Als dat herkenbaar klinkt, ben je niet alleen. En er is een zachte manier om te beginnen."
        },
        {
          text: 'Onlangs voltooide een lid bij CrossFit Leiden ons Kickstart-programma en zei: "Ik heb net het Kickstart-programma afgerond en had een geweldige ervaring. De coaches zijn ondersteunend, motiverend en ze geven echt om je. Ik heb veel geleerd en genoten van elke sessie. Zeer aan te raden." Simpele woorden, maar ze vertellen een groot verhaal—een verhaal dat ook van jou zou kunnen zijn.'
        },
        {
          heading: "Wat maakt beginnen zo moeilijk",
          text: 'Voor veel expat-ouders en professionals is de grootste uitdaging geen zware barbell. Het is de angst om te beginnen. Misschien heb je al jaren niet meer getraind. Misschien voelt je rug stijf van het zitten. Misschien heb je andere sportscholen geprobeerd en ben je er niet mee doorgegaan. Het idee om een nieuwe plek binnen te lopen waar iedereen "weet wat ze doen" kan eng aanvoelen.'
        },
        {
          text: "Dat is precies waarom onze Kickstart bestaat."
        },
        {
          heading: "Een zachte eerste stap (met mensen die je echt zien)",
          text: "Onze Kickstart is een korte, gestructureerde introductie tot trainen bij CrossFit Leiden. Het is ontworpen voor drukke mensen die beter willen bewegen, zich sterker willen voelen en vertrouwen willen opbouwen—zonder zich verloren of gehaast te voelen."
        },
        {
          text: 'In dit geval had het lid dat hun ervaring deelde alle gebruikelijke zorgen: "Wat als ik de langzaamste ben? Wat als ik geblesseerd raak? Heb ik hier überhaupt tijd voor?" Op dag één was het doel niet om iets te bewijzen. Het was simpelweg om veilig te leren bewegen, de coaches te leren kennen, en te vertrekken met meer energie dan toen ze arriveerden.'
        },
        {
          text: "De coaches zetten meteen de toon—warm, duidelijk en persoonlijk. Ze controleerden de vorm. Ze boden opties. Ze legden uit waarom een beweging belangrijk is in het echte leven—zoals je kind oppakken of zonder pijn aan je bureau zitten. Elke sessie voelde als een kleine overwinning."
        },
        {
          heading: "Kleine overwinningen tellen op",
          text: "Halverwege merkte het lid subtiele veranderingen op. Minder stijfheid na lange werkdagen. Meer energie in de ochtend. Een helder hoofd. Dat is wat er gebeurt wanneer je voorzichtig consistentie opbouwt: je lichaam en geest beginnen je weer te vertrouwen."
        },
        {
          text: 'Aan het einde waren ze niet gewoon "klaar" met de Kickstart—ze waren trots. Trots dat ze waren gekomen. Trots dat ze hadden geleerd. Trots om te zeggen: "Ik kan dit."'
        },
        {
          heading: "Wat dit voor jou betekent",
          text: "Als je hebt gewacht tot je fit bent voordat je begint—hier is de waarheid: je hoeft niet fit te zijn om te beginnen. Je begint om fit te worden. Onze coaches ontmoeten je waar je bent. We passen alles aan. En we houden het menselijk—geen one-size-fits-all, geen geschreeuw, geen druk."
        },
        {
          text: "Hier zijn een paar micro-gewoontes die we voorstellen om je start makkelijker te maken:"
        },
        {
          list: [
            "Boek twee lessen per week. Zet ze in je agenda als een afspraak met je toekomstige zelf.",
            "Pak je gymtas de avond ervoor in. Verwijder één ochtendbeslissing.",
            "Drink een glas water voor je eerste koffie.",
            "Doe een 5-minuten stretch nadat je de kinderen naar bed hebt gebracht. Rug, heupen, schouders—niets bijzonders."
          ]
        },
        {
          text: "Deze kleine acties bouwen vertrouwen en momentum op. En wanneer je traint met een groep mensen die ook beginnen—of opnieuw beginnen—is het veel makkelijker om door te gaan. Je realiseert je dat je niet achterloopt. Je bent precies op tijd."
        },
        {
          heading: "Je hoort hier",
          text: 'De woorden van ons lid brengen ons nog steeds aan het glimlachen: "De coaches zijn ondersteunend, motiverend en ze geven echt om je." Dat is precies het punt. We willen dat je je veilig voelt, gezien wordt en enthousiast bent om te komen. We willen dat je vertrekt met meer energie voor de rest van je leven, niet minder.'
        },
        {
          text: "Als je zenuwachtig bent, is dat oké. Zenuwachtig betekent gewoon dat je om iets geeft. En je kunt dat gevoel meenemen—wij nemen het vanaf daar over."
        },
        {
          heading: "Klaar voor een zachte eerste stap?",
          text: "Sluit je bij ons aan voor een gratis intro-les om een gevoel te krijgen voor onze community. Kom de coaches ontmoeten, probeer een paar eenvoudige bewegingen en ervaar hoe goed het voelt om te beginnen—zonder druk, zonder ego, en met mensen die je rug dekken."
        },
        {
          text: "We kunnen niet wachten om je te verwelkomen bij CrossFit Leiden."
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
            <span className="text-gray-900">{locale === 'nl' ? 'Zenuwachtig om te Beginnen?' : 'Nervous to Start?'}</span>
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
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/IMG_6758.webp"
              alt="CrossFit Leiden member training"
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
