export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string; // Display date, e.g. "6 Mrt 2026"
    isoDate: string; // ISO 8601 date for RSS, e.g. "2026-03-06"
    category: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "hoge-intensiteit-of-kracht-opbouwen",
        title: "Hoge intensiteit of kracht opbouwen? Bij ons hoef je niet te kiezen.",
        excerpt: "CrossFit te zwaar? Te veel? Wij denken dat de echte vraag anders is. Ontdek hoe wij intensiteit, coaching en community combineren — al 10 jaar lang.",
        date: "6 Mrt 2026",
        isoDate: "2026-03-06",
        category: "Training & Coaching",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/blog/6-DSC03078.jpg",
    },
    {
        slug: "crossfit-na-je-40e",
        title: "CrossFit na je 40e: wat verandert er – en wat niet",
        excerpt: "Je bent 42, 47 of 55. En je denkt: is dit nog wel het moment? Goed nieuws. Juist nu. Leer hoe je slim traint na je 40e.",
        date: "25 Feb 2026",
        isoDate: "2026-02-25",
        category: "Trainen & Herstel",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/blog/333-DSC05475.jpg",
    },
    {
        slug: "terug-in-beweging-na-zwangerschap",
        title: "Terug in beweging na je zwangerschap",
        excerpt: "Je bent moeder geworden. Alles is veranderd. Maar wanneer begin je weer met sporten – en hoe? Niet terug naar je oude lichaam, wel terug naar je energie.",
        date: "25 Feb 2026",
        isoDate: "2026-02-25",
        category: "Voor Moeders",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/blog/397-DSC05939.jpg",
    },
    {
        slug: "van-kantoorstoel-naar-barbell",
        title: "Van kantoorstoel naar barbell: training als tegenwicht voor je werkdag",
        excerpt: "8 uur zitten en toch moe. Dat is geen conditieprobleem, dat is een bewegingsprobleem. Ontdek hoe training jouw reset-knop wordt.",
        date: "25 Feb 2026",
        isoDate: "2026-02-25",
        category: "Trainen & Leven",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/blog/440-DSC06352.jpg",
    },
    {
        slug: "trainen-met-een-blessureverleden",
        title: "Trainen met een blessureverleden: hoe wij schalen en aanpassen",
        excerpt: "Knie, schouder, hernia? We horen dit elke week. En bijna altijd volgt: 'Dus CrossFit is niets voor mij.' Maar hier komt het verschil.",
        date: "25 Feb 2026",
        isoDate: "2026-02-25",
        category: "Blessures & Schalen",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/blog/14-DSC03114.jpg",
    },
    {
        slug: "nervous-to-start-one-small-step",
        title: "Nervous to Start? You're Not Alone. Here's How One Small Step Changed Everything.",
        excerpt: "If you've been waiting to feel fit before you start—here's the truth: you don't need to be fit to begin. You begin to get fit.",
        date: "20 Dec 2025",
        isoDate: "2025-12-20",
        category: "Getting Started",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/IMG_6758.webp",
    },
    {
        slug: "no-sleeping-members",
        title: "No Sleeping Members: Why Your Membership Should Work For You",
        excerpt: "We're not here to collect monthly fees from people who don't show up. Our goal is to help you actually use your membership.",
        date: "3 Dec 2025",
        isoDate: "2025-12-03",
        category: "Gym Philosophy",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-80.jpg",
    },
    {
        slug: "more-training-is-not-always-better",
        title: "More training is not always better: supercompensation explained",
        excerpt: "Training 6-7 days per week? Learn why more is not always better and how supercompensation works.",
        date: "1 Dec 2025",
        isoDate: "2025-12-01",
        category: "Training Tips",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-79.jpg",
    },
    {
        slug: "how-to-start-crossfit-when-youre-busy",
        title: "How to Start CrossFit When You're Busy With Work and Kids",
        excerpt: "You don't need hours of free time to get stronger. Just one hour, two or three times a week.",
        date: "25 Nov 2025",
        isoDate: "2025-11-25",
        category: "Training Tips",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-61.jpg",
    },
    {
        slug: "is-crossfit-safe",
        title: "Is CrossFit Safe? Here's How We Make It Safe at CrossFit Leiden",
        excerpt: "Technique first, light weights first, coaching always watching you. Your safety is our priority.",
        date: "24 Nov 2025",
        isoDate: "2025-11-24",
        category: "Training Tips",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-62.jpg",
    },
    {
        slug: "why-80-percent-start-as-beginners",
        title: "Why 80% of Our Members Start as Complete Beginners",
        excerpt: "You don't need to be fit to start. You get fit by starting. Most of our members had zero experience.",
        date: "23 Nov 2025",
        isoDate: "2025-11-23",
        category: "Community",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-64.jpg",
    },
    {
        slug: "what-happens-during-free-intro",
        title: "What Really Happens During a Free Intro (Step-by-Step)",
        excerpt: "No workout, no pressure. Just coffee, conversation, and a tour. Here's exactly what to expect.",
        date: "22 Nov 2025",
        isoDate: "2025-11-22",
        category: "Getting Started",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-63.jpg",
    },
    {
        slug: "crossfit-for-40-plus-beginners",
        title: "CrossFit for 40+ Beginners: Getting Stronger Without Injuries",
        excerpt: "It's never too late to start. We have members in their 50s, 60s, and 70s who started as beginners.",
        date: "21 Nov 2025",
        isoDate: "2025-11-21",
        category: "Training Tips",
        image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-65.jpg",
    },
];
