"use client";

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';
import Link from 'next/link';

// Diamond shape SVG component (CFL brand element)
const Diamond = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style}>
    <polygon points="50,0 100,50 50,100 0,50" fill="currentColor" />
  </svg>
);

export default function FitnessCheckTeaser() {
  const locale = useLocale();
  const [hoveredQuestion, setHoveredQuestion] = useState<number | null>(null);

  const content = {
    nl: {
      badge: "Gratis Zelftest",
      badgeAnimation: true,
      title: "Benieuwd waar je nu staat?",
      description: "Doe onze 7-minuten Fitness Reality Check. Krijg eerlijke inzichten over je fitness, energie en leefstijl. Geen oordeel, alleen helderheid.",
      duration: "7 minuten",
      questionCount: "18 vragen",
      personalResult: "Persoonlijk resultaat",
      ctaButton: "Doe de test",
      previewTitle: "Fitness Reality Check",
      previewSubtitle: "Voorbeeld vragen",
      previewQuestions: [
        { icon: "💪", text: "Hoeveel dagen per week ben je actief?" },
        { icon: "⚡", text: "Heb je energie over na je werkdag?" },
        { icon: "🌙", text: "Hoe uitgerust word je wakker?" }
      ],
      moreQuestions: "+ 15 vragen meer",
      freeBadge: "100% Gratis"
    },
    en: {
      badge: "Free Self-Assessment",
      badgeAnimation: true,
      title: "Curious where you stand?",
      description: "Take our 7-minute Fitness Reality Check. Get honest insights about your fitness, energy, and lifestyle. No judgement, just clarity.",
      duration: "7 minutes",
      questionCount: "18 questions",
      personalResult: "Personal result",
      ctaButton: "Take the test",
      previewTitle: "Fitness Reality Check",
      previewSubtitle: "Preview questions",
      previewQuestions: [
        { icon: "💪", text: "How many days per week are you active?" },
        { icon: "⚡", text: "Do you have energy left after work?" },
        { icon: "🌙", text: "How rested do you wake up?" }
      ],
      moreQuestions: "+ 15 more questions",
      freeBadge: "100% Free"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  const handleCTAClick = () => {
    track('Fitness Check Teaser CTA Click', { locale });
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative diamonds */}
      <Diamond
        className="absolute -top-16 -right-16 w-64 h-64 text-[#EF4C37] opacity-5 rotate-12"
      />
      <Diamond
        className="absolute -bottom-20 -left-20 w-72 h-72 text-[#F7CB15] opacity-5 -rotate-12"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EF4C37]/10 text-[#EF4C37] rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#EF4C37] rounded-full animate-pulse"></span>
              {t.badge}
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              {t.title}
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-[#0CBABA]">⏱</span> {t.duration}
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-[#F7CB15]">📊</span> {t.questionCount}
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-[#EF4C37]">🎯</span> {t.personalResult}
              </div>
            </div>

            <Link
              href={`/${locale}/fitness-test`}
              onClick={handleCTAClick}
              className="group inline-flex items-center gap-3 bg-[#EF4C37] hover:bg-[#d94430] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#EF4C37]/20 hover:-translate-y-0.5"
            >
              {t.ctaButton}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right: Preview card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#EF4C37] rounded-full mb-3">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t.previewTitle}</h3>
                <p className="text-gray-500 text-sm">{t.previewSubtitle}</p>
              </div>

              <div className="space-y-3">
                {t.previewQuestions.map((q, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredQuestion(index)}
                    onMouseLeave={() => setHoveredQuestion(null)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-default
                      ${hoveredQuestion === index
                        ? 'border-[#EF4C37] bg-[#EF4C37]/5'
                        : 'border-gray-100 bg-gray-50'
                      }
                    `}
                  >
                    <span className="text-2xl">{q.icon}</span>
                    <span className="text-gray-700 font-medium">{q.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-sm">{t.moreQuestions}</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#F7CB15] text-gray-900 font-bold text-sm px-4 py-2 rounded-full shadow-lg transform rotate-6">
              {t.freeBadge}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
