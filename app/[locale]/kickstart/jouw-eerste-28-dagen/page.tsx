"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';
import IntroCtaSection from "@/components/IntroCtaSection";

const content = {
    nl: {
        hero: {
            badge: "28 Dagen Kickstart",
            title: "Je eerste maand bij CrossFit Leiden",
            description: "Je start niet 'gewoon met lessen'. Je start met een plan. Met een vaste groep. Met coaches die je kennen bij naam.",
            cta: "Plan een Gratis Intro",
            scroll: "Of scroll en ontdek hoe het werkt ↓"
        },
        overview: {
            title: "Zo ziet de Kickstart eruit",
            cards: [
                { icon: "🗓️", title: "4 weken", description: "Vaste structuur, duidelijk ritme" },
                { icon: "📅", title: "3x per week", description: "Maandag, woensdag, vrijdag" },
                { icon: "👥", title: "Max 5 per groep", description: "Persoonlijke aandacht van je coach" },
                { icon: "💬", title: "Dagelijkse begeleiding", description: "Voeding & accountability met coach Annie" }
            ],
            cols: [
                { title: "Maandag & woensdag", description: "Small Group met coach Max. Veel persoonlijke aandacht, techniek, en opbouw." },
                { title: "Vrijdag", description: "Flex Friday met coach Jeff of Rochelle. Community, gezelligheid, en je vrienden mogen mee." }
            ]
        },
        personas: {
            title: "Drie mensen, één Kickstart",
            subtitle: "Iedereen start met een ander verhaal. Dit is hoe Lisa, Martin en Sophie hun eerste 28 dagen beleefden.",
            cards: [
                { initial: "L", name: "Lisa, 38", label: "Totale beginner", description: "Heeft in geen tien jaar gesport. Druk met werk en twee kinderen. Dacht dat CrossFit niet voor haar was." },
                { initial: "M", name: "Martin, 52", label: "Blessureverleden", description: "Heeft al jaren last van zijn rug en schouder. Zijn fysio zei: je moet meer bewegen. Maar hij was bang om het erger te maken." },
                { initial: "S", name: "Sophie, 34", label: "Sportervaring", description: "Heeft jarenlang hardgelopen en in een sportschool getraind. Miste persoonlijke aandacht en een groep om bij te horen." }
            ]
        },
        timeline: {
            title: "Jouw eerste maand, week voor week",
            weeks: [
                {
                    number: 1,
                    title: "Week 1 – Je landt",
                    paragraphs: [
                        "Maandag stap je binnen. Je groep bestaat uit maximaal vijf mensen. Iedereen is nieuw. Iedereen vindt het spannend.",
                        "Coach Max neemt je mee in de basis: hoe beweeg je veilig, wat is een squat, hoe pak je een barbell vast, hoe werkt een training. Geen haast. Geen druk.",
                        "Woensdag herhaal je en bouw je iets uit. Vrijdag doe je mee met Flex Friday. Vrienden mogen mee. De sfeer is relaxed en gezellig. Je merkt meteen: dit is geen koude fitnesszaal. Dit voelt warm."
                    ],
                    highlight: {
                        title: "Voeding start ook meteen",
                        text: "Coach Annie begeleidt je dagelijks via een simpele check-in: hoeveel stappen heb je gezet, heb je je voedingstarget gehaald, wat ging goed vandaag. Geen essays. Geen ingewikkelde schema's. Een kind van 11 kan dit invullen."
                    },
                    quotes: [
                        { text: "\"Ik was zo zenuwachtig dat ik drie keer heb overwogen om niet te gaan. Maar Max stelde me meteen op m'n gemak. Hij legde alles uit alsof het de normaalste zaak van de wereld was. Na de eerste les dacht ik: waarom heb ik dit niet eerder gedaan?\"", author: "Lisa, 38" },
                        { text: "\"Max vroeg meteen naar mijn schouder en rug. Bij elke oefening kreeg ik een aangepaste variant. Ik hoefde niks over te slaan. Dat was precies de geruststelling die ik nodig had.\"", author: "Martin, 52" },
                        { text: "\"Ik verwachtte een standaard groepsles, maar de aandacht voor techniek was veel dieper dan ik gewend was. Max corrigeerde dingen waar ik al jaren mee rondliep. Dit is geen afvindsportschool.\"", author: "Sophie, 34" }
                    ]
                },
                {
                    number: 2,
                    title: "Week 2 – Je voelt vertrouwen",
                    paragraphs: [
                        "Je ziet dezelfde mensen weer. Je kent hun namen al. In de small group krijg je veel persoonlijke feedback, wordt techniek steeds beter, en durf je vragen te stellen.",
                        "In de groepsapp help je elkaar: receptideeën, motivatie, kleine overwinningen. En Annie houdt je accountable. Niet streng. Niet bovenop je. Ze is ondersteunend. Ze helpt je reflecteren. Ze viert je successen.",
                        "Vrijdag voelt minder spannend dan vorige week. Je herkent gezichten. Je voelt je al onderdeel van iets."
                    ],
                    quotes: [
                        { text: "\"Ik kende iedereen al bij naam. We hadden een groepsapp en deelden recepten. Het voelde niet meer als 'naar de sportschool gaan'. Het voelde als afspreken met mensen die hetzelfde meemaken als jij.\"", author: "Lisa, 38" },
                        { text: "\"Mijn rug voelde na de eerste week al anders. Niet pijnvrij, maar losser. En Annie stuurde me een berichtje over hoe ik thuis kon stretchen. Dat verwacht je niet.\"", author: "Martin, 52" },
                        { text: "\"De voedingsbegeleiding verraste me het meest. Ik dacht dat ik gezond at, maar Annie liet me zien dat ik structureel te weinig eiwitten binnenkreeg. Simpele aanpassing, groot verschil.\"", author: "Sophie, 34" }
                    ]
                },
                {
                    number: 3,
                    title: "Week 3 – Je merkt verschil",
                    paragraphs: [
                        "Je beweegt zekerder. Je techniek is beter. Je weet hoe je moet schalen. Je kiest bewuster je gewicht. Je begrijpt hoe een workout is opgebouwd. Je voelt dat je sterker wordt.",
                        "Voeding begint automatisch te gaan. Meer eiwitten. Meer stappen. Meer structuur.",
                        "Je 1-op-1 moment met Annie helpt je bijsturen. Wat werkt? Wat kan beter? Je leert keuzes maken die blijven hangen."
                    ],
                    quotes: [
                        { text: "\"Ik merkte dat ik automatisch beter ging eten. Niet omdat het moest, maar omdat ik voelde dat het werkte. En in de training schaal ik nog steeds, maar ik weet nu wat ik doe. Dat gevoel is onbetaalbaar.\"", author: "Lisa, 38" },
                        { text: "\"Ik koos voor het eerst zelf mijn gewicht zonder het aan Max te vragen. Ik ken mijn lichaam weer. En het mooiste: ik heb deze week geen pijnstillers genomen.\"", author: "Martin, 52" },
                        { text: "\"In een normale sportschool was ik na drie weken alweer verveeld. Hier is elke training anders en de coaching wordt steeds specifieker. Ze zien echt waar jij aan moet werken.\"", author: "Sophie, 34" }
                    ]
                },
                {
                    number: 4,
                    title: "Week 4 – Je hoort erbij",
                    paragraphs: [
                        "Nu gebeurt er iets moois. Je kent meerdere coaches. Je kent mensen buiten je eigen groep. Je snapt hoe de gym werkt. Je weet waar alles ligt.",
                        "Je energie is hoger. Je houding verandert. Traplopen voelt makkelijker.",
                        "En misschien wel het belangrijkste: je voelt je thuis."
                    ],
                    quotes: [
                        { text: "\"Mijn man zei: je bent een ander mens. Meer energie, beter humeur, en ik slaap als een blok. Ik heb me aangemeld voor een volledig abonnement. Dit is nu van mij.\"", author: "Lisa, 38" },
                        { text: "\"Ik heb mijn fysio verteld wat ik doe. Ze was positief verrast. Mijn schouder is niet genezen, maar ik beweeg beter, sta steviger, en heb weer vertrouwen in mijn lichaam.\"", author: "Martin, 52" },
                        { text: "\"Ik ken nu de helft van de box bij naam. Niet alleen mijn Kickstart-groep, maar ook mensen uit de reguliere lessen. Dit is de community die ik miste. Ik ga nergens meer heen.\"", author: "Sophie, 34" }
                    ]
                }
            ]
        },
        results: {
            title: "Wat je na 28 dagen hebt",
            items: [
                "Je kent meerdere coaches",
                "Je hebt een vaste groep waar je mee begon",
                "Je hebt al veel community ervaren",
                "Je voeding is verbeterd",
                "Je bent sterker",
                "Je bent consistenter"
            ],
            quotes: [
                { text: "\"Ik kwam binnen als iemand die dacht dat ze niet sportief was. Ik ga weg als iemand die drie keer per week traint en het niet meer wil missen.\"", author: "Lisa, 38" },
                { text: "\"Ik kwam binnen met pijn en twijfel. Ik ga weg met minder pijn, meer vertrouwen, en een groep mensen die me kent.\"", author: "Martin, 52" },
                { text: "\"Ik kwam binnen als iemand die wist hoe je moest trainen. Ik ga weg als iemand die weet hoe je onderdeel wordt van iets.\"", author: "Sophie, 34" }
            ],
            conclusion: "Maar eerlijk is eerlijk. Het is nog maar het begin. De Kickstart is niet het eindpunt. Het is de start van iets dat blijft."
        },
        whyWorks: {
            title: "Waarom dit werkt",
            subtitle: "Je begint niet alleen. Je begint samen.",
            features: ["📅 Structuur", "👤 Persoonlijke aandacht", "👥 Community", "📞 Dagelijkse begeleiding"],
            conclusion: "Dat is het verschil tussen 'een proefles doen' en echt een nieuwe gewoonte bouwen."
        },
        finalCta: {
            title: "Wil je weten of dit bij je past?",
            subtitle: "Boek een kennismaking. Kom binnen. Voel de sfeer. Dan praten we verder.",
            button: "Plan een Gratis Intro",
            note: "Geen workout. Gewoon een gesprek. We kijken ernaar uit!"
        },
        backLink: "← Terug naar de Kickstart pagina"
    },
    en: {
        hero: {
            badge: "28 Day Kickstart",
            title: "Your first month at CrossFit Leiden",
            description: "You don't just 'start with classes'. You start with a plan. With a fixed group. With coaches who know your name.",
            cta: "Schedule a Free Intro",
            scroll: "Or scroll and discover how it works ↓"
        },
        overview: {
            title: "What the Kickstart looks like",
            cards: [
                { icon: "🗓️", title: "4 weeks", description: "Fixed structure, clear rhythm" },
                { icon: "📅", title: "3x per week", description: "Monday, Wednesday, Friday" },
                { icon: "👥", title: "Max 5 per group", description: "Personal attention from your coach" },
                { icon: "💬", title: "Daily guidance", description: "Nutrition & accountability with coach Annie" }
            ],
            cols: [
                { title: "Monday & Wednesday", description: "Small Group with coach Max. Lots of personal attention, technique, and progression." },
                { title: "Friday", description: "Flex Friday with coach Jeff or Rochelle. Community, fun, and your friends can join." }
            ]
        },
        personas: {
            title: "Three people, one Kickstart",
            subtitle: "Everyone starts with a different story. This is how Lisa, Martin and Sophie experienced their first 28 days.",
            cards: [
                { initial: "L", name: "Lisa, 38", label: "Complete beginner", description: "Hasn't exercised in ten years. Busy with work and two kids. Thought CrossFit wasn't for her." },
                { initial: "M", name: "Martin, 52", label: "History of injuries", description: "Has had back and shoulder issues for years. His physio said: you need to move more. But he was afraid of making it worse." },
                { initial: "S", name: "Sophie, 34", label: "Experienced athlete", description: "Has run and trained at gyms for years. Missed personal attention and a group to belong to." }
            ]
        },
        timeline: {
            title: "Your first month, week by week",
            weeks: [
                {
                    number: 1,
                    title: "Week 1 – You land",
                    paragraphs: [
                        "Monday you walk in. Your group consists of a maximum of five people. Everyone is new. Everyone is nervous.",
                        "Coach Max introduces you to the basics: how do you move safely, what is a squat, how do you hold a barbell, how does a workout work. No rush. No pressure.",
                        "Wednesday you repeat and build a little. Friday you join Flex Friday. Friends can come along. The atmosphere is relaxed and fun. You immediately notice: this isn't a cold gym. This feels warm."
                    ],
                    highlight: {
                        title: "Nutrition starts right away too",
                        text: "Coach Annie guides you daily through a simple check-in: how many steps have you taken, did you hit your nutrition target, what went well today. No essays. No complicated plans. An 11-year-old could fill this in."
                    },
                    quotes: [
                        { text: "\"I was so nervous I almost didn't go three times. But Max put me at ease right away. He explained everything like it was the most normal thing in the world. After the first class I thought: why didn't I do this sooner?\"", author: "Lisa, 38" },
                        { text: "\"Max asked about my shoulder and back right away. For every exercise I got a modified version. I didn't have to skip anything. That was exactly the reassurance I needed.\"", author: "Martin, 52" },
                        { text: "\"I expected a standard group class, but the attention to technique was much deeper than I was used to. Max corrected things I'd been carrying around for years. This is not a checkbox gym.\"", author: "Sophie, 34" }
                    ]
                },
                {
                    number: 2,
                    title: "Week 2 – You feel confidence",
                    paragraphs: [
                        "You see the same people again. You already know their names. In the small group you get a lot of personal feedback, technique keeps improving, and you dare to ask questions.",
                        "In the group app you help each other: recipe ideas, motivation, small victories. And Annie keeps you accountable. Not strict. Not on top of you. She's supportive. She helps you reflect. She celebrates your wins.",
                        "Friday feels less daunting than last week. You recognise faces. You already feel part of something."
                    ],
                    quotes: [
                        { text: "\"I already knew everyone by name. We had a group app and shared recipes. It didn't feel like 'going to the gym' anymore. It felt like meeting up with people going through the same thing as you.\"", author: "Lisa, 38" },
                        { text: "\"My back already felt different after the first week. Not pain-free, but looser. And Annie sent me a message about how to stretch at home. You don't expect that.\"", author: "Martin, 52" },
                        { text: "\"The nutrition guidance surprised me most. I thought I ate healthily, but Annie showed me I was consistently eating too little protein. Simple adjustment, big difference.\"", author: "Sophie, 34" }
                    ]
                },
                {
                    number: 3,
                    title: "Week 3 – You notice a difference",
                    paragraphs: [
                        "You move with more confidence. Your technique is better. You know how to scale. You choose your weight more deliberately. You understand how a workout is built. You feel yourself getting stronger.",
                        "Nutrition is starting to happen automatically. More protein. More steps. More structure.",
                        "Your 1-on-1 moment with Annie helps you adjust. What's working? What can be better? You learn to make choices that stick."
                    ],
                    quotes: [
                        { text: "\"I noticed I was automatically eating better. Not because I had to, but because I felt it was working. And in training I still scale, but I now know what I'm doing. That feeling is priceless.\"", author: "Lisa, 38" },
                        { text: "\"I chose my own weight for the first time without asking Max. I know my body again. And best of all: I haven't taken any painkillers this week.\"", author: "Martin, 52" },
                        { text: "\"At a normal gym I would have been bored after three weeks. Here every workout is different and the coaching gets more specific. They really see what you need to work on.\"", author: "Sophie, 34" }
                    ]
                },
                {
                    number: 4,
                    title: "Week 4 – You belong",
                    paragraphs: [
                        "Now something beautiful happens. You know multiple coaches. You know people outside your own group. You understand how the gym works. You know where everything is.",
                        "Your energy is higher. Your posture changes. Climbing stairs feels easier.",
                        "And perhaps most importantly: you feel at home."
                    ],
                    quotes: [
                        { text: "\"My husband said: you're a different person. More energy, better mood, and I sleep like a log. I signed up for a full membership. This is mine now.\"", author: "Lisa, 38" },
                        { text: "\"I told my physio what I've been doing. She was pleasantly surprised. My shoulder isn't healed, but I move better, stand steadier, and have regained confidence in my body.\"", author: "Martin, 52" },
                        { text: "\"I now know half the box by name. Not just my Kickstart group, but also people from the regular classes. This is the community I was missing. I'm not going anywhere.\"", author: "Sophie, 34" }
                    ]
                }
            ]
        },
        results: {
            title: "What you have after 28 days",
            items: [
                "You know multiple coaches",
                "You have a fixed group you started with",
                "You've already experienced a lot of community",
                "Your nutrition has improved",
                "You are stronger",
                "You are more consistent"
            ],
            quotes: [
                { text: "\"I came in as someone who thought she wasn't athletic. I leave as someone who trains three times a week and doesn't want to miss it.\"", author: "Lisa, 38" },
                { text: "\"I came in with pain and doubt. I leave with less pain, more confidence, and a group of people who know me.\"", author: "Martin, 52" },
                { text: "\"I came in knowing how to train. I leave knowing how to become part of something.\"", author: "Sophie, 34" }
            ],
            conclusion: "But honestly. It's just the beginning. The Kickstart isn't the destination. It's the start of something that lasts."
        },
        whyWorks: {
            title: "Why this works",
            subtitle: "You don't start alone. You start together.",
            features: ["📅 Structure", "👤 Personal attention", "👥 Community", "📞 Daily guidance"],
            conclusion: "That's the difference between 'doing a trial class' and truly building a new habit."
        },
        finalCta: {
            title: "Want to know if this suits you?",
            subtitle: "Book an introduction. Come in. Feel the atmosphere. Then we talk.",
            button: "Schedule a Free Intro",
            note: "No workout. Just a conversation. We look forward to it!"
        },
        backLink: "← Back to the Kickstart page"
    }
};

export default function JouwEerste28Dagen() {
    const locale = useLocale();
    const t = content[locale as keyof typeof content] || content.nl;

    const handleCtaClick = () => {
        track('28 Dagen Journey Page CTA Click');
        if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
            (window as any).openCFLPopup();
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="bg-gray-900 text-white section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cinnabar/20 to-transparent pointer-events-none" />
                <div className="container-custom relative z-10">
                    <span className="inline-block bg-cinnabar text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
                        {t.hero.badge}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
                        {t.hero.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8">
                        {t.hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <button
                            onClick={handleCtaClick}
                            className="bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg cursor-pointer"
                        >
                            {t.hero.cta}
                        </button>
                        <span className="text-gray-400 pt-4 text-sm">{t.hero.scroll}</span>
                    </div>
                </div>
            </section>

            {/* Back link */}
            <div className="bg-organic-bg border-b border-gray-200">
                <div className="container-custom py-3">
                    <Link href={`/${locale}/kickstart`} className="text-cinnabar text-sm font-medium hover:underline">
                        {t.backLink}
                    </Link>
                </div>
            </div>

            {/* Overview kaarten */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-10 text-center">{t.overview.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
                        {t.overview.cards.map((card, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                                <div className="text-3xl mb-3">{card.icon}</div>
                                <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                                <p className="text-gray-600 text-sm">{card.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {t.overview.cols.map((col, i) => (
                            <div key={i} className="bg-jonquil/20 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-2">{col.title}</h3>
                                <p className="text-gray-700">{col.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personas introductie */}
            <section className="section-padding bg-stone-50">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-3xl font-bold mb-4">{t.personas.title}</h2>
                        <p className="text-lg text-gray-600">{t.personas.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {t.personas.cards.map((card, i) => (
                            <div key={i} className="bg-organic-bg rounded-xl p-6 text-center shadow-sm">
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

            {/* Tijdlijn week voor week */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">{t.timeline.title}</h2>
                    <div className="max-w-4xl mx-auto space-y-16">
                        {t.timeline.weeks.map((week) => (
                            <div key={week.number} className="relative">
                                {/* Week marker */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-cinnabar rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                        {week.number}
                                    </div>
                                    <h3 className="text-2xl font-bold">{week.title}</h3>
                                </div>

                                <div className="pl-0 md:pl-18 space-y-4">
                                    {/* Narration */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        {week.paragraphs.map((p, i) => (
                                            <p key={i} className="text-gray-700 mb-3 last:mb-0">{p}</p>
                                        ))}

                                        {/* Highlight box (alleen week 1) */}
                                        {'highlight' in week && week.highlight && (
                                            <div className="bg-jonquil/20 rounded-lg p-4 mt-4">
                                                <h4 className="font-bold mb-2">{(week.highlight as { title: string; text: string }).title}</h4>
                                                <p className="text-gray-700 text-sm">{(week.highlight as { title: string; text: string }).text}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quotes */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {week.quotes.map((quote, qi) => (
                                            <div key={qi} className="bg-white border-l-4 border-cinnabar rounded-r-xl p-4 shadow-sm">
                                                <p className="italic text-gray-700 text-sm mb-2">{quote.text}</p>
                                                <p className="text-xs font-bold text-gray-500">{quote.author}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resultaten */}
            <section className="section-padding bg-stone-50">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-10 text-center">{t.results.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
                        {t.results.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm font-bold">
                                <span className="text-cinnabar text-xl">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                        {t.results.quotes.map((quote, i) => (
                            <div key={i} className="bg-organic-bg border-l-4 border-cinnabar rounded-r-xl p-6 shadow-sm">
                                <p className="italic text-gray-800 mb-3">{quote.text}</p>
                                <p className="text-sm font-bold text-gray-500">{quote.author}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xl font-bold max-w-2xl mx-auto text-gray-800">
                        {t.results.conclusion}
                    </p>
                </div>
            </section>

            {/* Waarom dit werkt */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">{t.whyWorks.title}</h2>
                    <p className="text-xl text-gray-600 mb-10">{t.whyWorks.subtitle}</p>
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {t.whyWorks.features.map((feature, i) => (
                            <div key={i} className="bg-white rounded-xl px-6 py-4 shadow-sm font-bold text-lg">
                                {feature}
                            </div>
                        ))}
                    </div>
                    <p className="text-xl font-bold text-cinnabar max-w-2xl mx-auto">
                        {t.whyWorks.conclusion}
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <IntroCtaSection
                title={t.finalCta.title}
                subtitle={t.finalCta.subtitle}
                buttonLabel={t.finalCta.button}
            />
        </>
    );
}
