"use client";

import { track } from '@vercel/analytics';

/**
 * IntroCtaSection - Herbruikbare CTA sectie voor gratis intro
 *
 * Deze component toont een oranje call-to-action sectie die de intro popup opent
 * via window.openCFLPopup() in plaats van te linken naar /starten.
 *
 * Props:
 * - title: Hoofdtekst van de CTA
 * - subtitle: Beschrijving/extra tekst (optioneel)
 * - buttonLabel: Tekst op de button (standaard: "Plan Mijn Gratis Intro")
 */

interface IntroCtaSectionProps {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
}

export default function IntroCtaSection({
  title,
  subtitle,
  buttonLabel = "Plan Mijn Gratis Intro"
}: IntroCtaSectionProps) {

  // Handler voor opening van de intro popup
  // De popup wordt gedefinieerd in HighLevelPopup component
  const handleClick = () => {
    track('Intro CTA Section Click', { title, buttonLabel });
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  return (
    <section
      className="section-padding bg-cinnabar text-white"
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-normal mb-8">{title}</h2>
        {subtitle && (
          <p className="text-xl mb-10 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <button
          onClick={handleClick}
          className="inline-block bg-organic-bg text-cinnabar font-heading px-10 py-4 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-cinnabar hover:bg-orange-50"
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
