"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';

export default function Blog() {
  const locale = useLocale();

  // Blog posts
  const blogPosts = [
    {
      slug: "crossfit-na-je-40e",
      title: "CrossFit na je 40e: wat verandert er – en wat niet",
      excerpt: "Je bent 42, 47 of 55. En je denkt: is dit nog wel het moment? Goed nieuws. Juist nu. Leer hoe je slim traint na je 40e.",
      date: "25 Feb 2026",
      category: "Trainen & Herstel",
      image: "/images/blog/crossfit-na-je-40e.jpg",
    },
    {
      slug: "terug-in-beweging-na-zwangerschap",
      title: "Terug in beweging na je zwangerschap",
      excerpt: "Je bent moeder geworden. Alles is veranderd. Maar wanneer begin je weer met sporten – en hoe? Niet terug naar je oude lichaam, wel terug naar je energie.",
      date: "25 Feb 2026",
      category: "Voor Moeders",
      image: "/images/blog/terug-in-beweging-zwangerschap.jpg",
    },
    {
      slug: "van-kantoorstoel-naar-barbell",
      title: "Van kantoorstoel naar barbell: training als tegenwicht voor je werkdag",
      excerpt: "8 uur zitten en toch moe. Dat is geen conditieprobleem, dat is een bewegingsprobleem. Ontdek hoe training jouw reset-knop wordt.",
      date: "25 Feb 2026",
      category: "Trainen & Leven",
      image: "/images/blog/van-kantoorstoel-naar-barbell.jpg",
    },
    {
      slug: "trainen-met-een-blessureverleden",
      title: "Trainen met een blessureverleden: hoe wij schalen en aanpassen",
      excerpt: "Knie, schouder, hernia? We horen dit elke week. En bijna altijd volgt: 'Dus CrossFit is niets voor mij.' Maar hier komt het verschil.",
      date: "25 Feb 2026",
      category: "Blessures & Schalen",
      image: "/images/blog/trainen-met-blessureverleden.jpg",
    },
    {
      slug: "nervous-to-start-one-small-step",
      title: "Nervous to Start? You're Not Alone. Here's How One Small Step Changed Everything.",
      excerpt: "If you've been waiting to feel fit before you start—here's the truth: you don't need to be fit to begin. You begin to get fit.",
      date: "20 Dec 2025",
      category: "Getting Started",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/IMG_6758.webp",
    },
    {
      slug: "no-sleeping-members",
      title: "No Sleeping Members: Why Your Membership Should Work For You",
      excerpt: "We're not here to collect monthly fees from people who don't show up. Our goal is to help you actually use your membership.",
      date: "3 Dec 2025",
      category: "Gym Philosophy",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-80.jpg",
    },
    {
      slug: "more-training-is-not-always-better",
      title: "More training is not always better: supercompensation explained",
      excerpt: "Training 6-7 days per week? Learn why more is not always better and how supercompensation works.",
      date: "1 Dec 2025",
      category: "Training Tips",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-79.jpg",
    },
    {
      slug: "how-to-start-crossfit-when-youre-busy",
      title: "How to Start CrossFit When You're Busy With Work and Kids",
      excerpt: "You don't need hours of free time to get stronger. Just one hour, two or three times a week.",
      date: "25 Nov 2025",
      category: "Training Tips",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-61.jpg",
    },
    {
      slug: "is-crossfit-safe",
      title: "Is CrossFit Safe? Here's How We Make It Safe at CrossFit Leiden",
      excerpt: "Technique first, light weights first, coaching always watching you. Your safety is our priority.",
      date: "24 Nov 2025",
      category: "Training Tips",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-62.jpg",
    },
    {
      slug: "why-80-percent-start-as-beginners",
      title: "Why 80% of Our Members Start as Complete Beginners",
      excerpt: "You don't need to be fit to start. You get fit by starting. Most of our members had zero experience.",
      date: "23 Nov 2025",
      category: "Community",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-64.jpg",
    },
    {
      slug: "what-happens-during-free-intro",
      title: "What Really Happens During a Free Intro (Step-by-Step)",
      excerpt: "No workout, no pressure. Just coffee, conversation, and a tour. Here's exactly what to expect.",
      date: "22 Nov 2025",
      category: "Getting Started",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-63.jpg",
    },
    {
      slug: "crossfit-for-40-plus-beginners",
      title: "CrossFit for 40+ Beginners: Getting Stronger Without Injuries",
      excerpt: "It's never too late to start. We have members in their 50s, 60s, and 70s who started as beginners.",
      date: "21 Nov 2025",
      category: "Training Tips",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-65.jpg",
    },
  ];

  const categories = ["All", "Training Tips", "Community", "Getting Started", "Gym Philosophy", "Trainen & Herstel", "Voor Moeders", "Trainen & Leven", "Blessures & Schalen"];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-2xl">
            Tips, stories, and updates from CrossFit Leiden. Learn more about fitness, training, and our community.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-medium transition-all ${cat === "All"
                  ? "bg-cinnabar text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-organic-bg rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-cinnabar font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-cinnabar transition-colors">
                    <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-cinnabar font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-chinese-violet/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our community and discover how CrossFit Leiden can help you get stronger, healthier, and more confident.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                  (window as any).openCFLPopup();
                }
              }}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
            >
              Schedule Your Free Intro
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
