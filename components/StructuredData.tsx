import { getLocale } from 'next-intl/server';

type FAQItem = {
    question: string;
    answer: string;
};

const faqItemsNl: FAQItem[] = [
    {
        question: 'Ben ik wel fit genoeg om te beginnen met CrossFit?',
        answer: 'Absoluut! Je hoeft helemaal niet fit te zijn om te starten. 80% van onze leden had geen enkele sportervaring toen ze begonnen. We passen elke oefening aan op jouw niveau – of je nu 20 jaar niet hebt gesport of juist wel actief bent.',
    },
    {
        question: 'Hoe vaak moet ik komen?',
        answer: 'We raden 2–3 keer per week aan voor goede resultaten. Hoe vaak je kunt komen hangt af van je lidmaatschap: tot 6 keer per week. Focus op kwaliteit en regelmaat, niet op extreme uren.',
    },
    {
        question: 'Is CrossFit niet gevaarlijk? Ik wil geen blessures...',
        answer: 'Begrijpelijk dat je dat denkt! Maar juist door onze begeleiding is CrossFit véél veiliger dan alleen sporten. We leren je eerst de juiste techniek met lichte gewichten. Pas als je beweging goed zit, gaan we verder. Blessurepreventie staat bij ons voorop. Daarnaast werken we samen met Fysiofabriek, een gespecialiseerde sportfysiopraktijk met een eigen behandelruimte in onze gym.',
    },
    {
        question: 'Ben ik niet te oud om te beginnen?',
        answer: 'Helemaal niet! Onze leden zijn tussen de 20 en 65 jaar, met de meesten tussen 35-50. CrossFit is juist perfect voor "oudere" beginners omdat we alles aanpassen aan jouw lichaam en doelen. Je bent nooit te oud om sterker en gezonder te worden!',
    },
    {
        question: 'Heb ik echt geen tijd, met werk en kinderen...',
        answer: 'We snappen dat! Daarom duren onze lessen precies 1 uur (inclusief warming-up en cooling-down). Onze lessen lopen van 06:00 tot 22:00, dus er is altijd een moment dat past. Veel leden komen voor het werk, in de lunchpauze of \'s avonds als de kids op bed liggen.',
    },
    {
        question: 'Wat gebeurt er tijdens de Gratis Intro?',
        answer: 'De intro duurt 20-30 minuten. We leren je kennen, praten over je doelen en zorgen, laten je de box zien en beantwoorden al je vragen. Je hoeft NIET te sporten tijdens deze intro – gewoon kennismaken. Daarna maken we samen een plan als je door wilt. Geen verplichtingen, geen druk!',
    },
    {
        question: 'Ik heb terugkerende klachten of pijn. Kan ik dan wel sporten?',
        answer: 'Juist dan ben je bij ons aan het goede adres. We werken met een bewegingsspecialist die je eerst kan analyseren via een Body-APK: een diepgaande houding- en bewegingsanalyse. Zo weten we precies hoe we je veilig kunnen laten bewegen. Geen lidmaatschap nodig.',
    },
];

const faqItemsEn: FAQItem[] = [
    {
        question: 'Am I fit enough to start CrossFit?',
        answer: 'Absolutely! You don\'t need to be fit to start. 80% of our members had no sports experience when they began. We adapt every exercise to your level – whether you haven\'t worked out in 20 years or you\'re already active.',
    },
    {
        question: 'How often should I come?',
        answer: 'We recommend 2-3 times per week for good results. How often you can come depends on your membership: up to 6 times per week. Focus on quality and consistency, not extreme hours.',
    },
    {
        question: 'Isn\'t CrossFit dangerous? I don\'t want injuries...',
        answer: 'Understandable concern! But our coaching actually makes CrossFit much safer than working out alone. We teach you proper technique with light weights first. Only when your movement is solid do we progress. Injury prevention is our priority. We also work with Fysiofabriek, a specialized sports physio practice with their own treatment room in our gym.',
    },
    {
        question: 'Am I too old to start?',
        answer: 'Not at all! Our members are between 20 and 65 years old, with most between 35-50. CrossFit is actually perfect for "older" beginners because we adapt everything to your body and goals. You\'re never too old to get stronger and healthier!',
    },
    {
        question: 'I really don\'t have time, with work and kids...',
        answer: 'We understand! That\'s why our classes are exactly 1 hour (including warm-up and cool-down). Our classes run from 06:00 to 22:00, so there\'s always a time that fits. Many members come before work, during lunch break, or in the evening when the kids are in bed.',
    },
    {
        question: 'What happens during the Free Intro?',
        answer: 'The intro takes 20-30 minutes. We get to know you, talk about your goals and concerns, show you the box and answer all your questions. You do NOT have to work out during this intro – just get acquainted. Then we make a plan together if you want to continue. No obligations, no pressure!',
    },
    {
        question: 'I have recurring complaints or pain. Can I still exercise?',
        answer: 'That\'s exactly where we can help. We work with a movement specialist who can first analyze you through a Body-APK: an in-depth posture and movement analysis. This way we know exactly how to help you move safely. No membership required.',
    },
];

export default async function StructuredData() {
    const locale = await getLocale();
    const faqItems = locale === 'nl' ? faqItemsNl : faqItemsEn;

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'SportsActivityLocation',
        name: 'CrossFit Leiden',
        description: locale === 'nl'
            ? 'CrossFit Leiden - Persoonlijke coaching voor beginners en gevorderden. Kleine groepen, ervaren trainers.'
            : 'CrossFit Leiden - Personal coaching for beginners and experienced athletes. Small groups, expert trainers.',
        url: 'https://www.crossfitleiden.com',
        telephone: '+31712340477',
        email: 'info@crossfitleiden.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Marie Diebenplaats 108',
            addressLocality: 'Leiden',
            postalCode: '2324 NG',
            addressRegion: 'Zuid-Holland',
            addressCountry: 'NL',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 52.1518,
            longitude: 4.4854,
        },
        image: 'https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/homepage/IMG_6885.png',
        priceRange: '€€',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '06:00',
                closes: '22:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '07:00',
                closes: '13:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '08:00',
                closes: '13:00',
            },
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            bestRating: '5',
            ratingCount: '265',
            reviewCount: '265',
        },
        sameAs: [
            'https://www.instagram.com/crossfitleiden/',
            'https://www.facebook.com/crossfitleiden/',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: locale === 'nl' ? 'Programma\'s' : 'Programs',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: locale === 'nl' ? 'CrossFit Groepslessen' : 'CrossFit Group Classes',
                        description: locale === 'nl'
                            ? 'Train samen in kleine groepen (max 14 personen) met persoonlijke coaching'
                            : 'Train together in small groups (max 14 people) with personal coaching',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: '28-Day Kickstart',
                        description: locale === 'nl'
                            ? 'Beginnersprogramma met persoonlijke begeleiding'
                            : 'Beginner program with personal guidance',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Personal Training',
                        description: locale === 'nl'
                            ? '1-op-1 coaching voor specifieke doelen'
                            : '1-on-1 coaching for specific goals',
                    },
                },
            ],
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
