"use client";

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';

export default function KickstartPromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    // Don't show on kickstart page itself
    if (pathname?.includes('/kickstart') || pathname?.includes('/starten')) {
      return;
    }

    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem('kickstart-promo-shown');
    if (hasSeenPopup) {
      return;
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('kickstart-promo-shown', 'true');
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTA = () => {
    track('Kickstart Promo Popup CTA', { locale });
    setIsVisible(false);
    // Trigger the intro booking popup
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const content = {
    nl: {
      badge: "Laatste plekken!",
      title: "Kickstart Januari & Februari",
      subtitle: "Januari Kickstart (start 5 januari)",
      spotsLeft: "Nog maar 1 plek beschikbaar",
      subtitle2: "Februari Kickstart (start 2 februari)",
      spotsLeft2: "Nog 7 plekken beschikbaar",
      description: "Ons populaire 28-Day Kickstart programma voor beginners. Kleine groepen, persoonlijke begeleiding.",
      cta: "Reserveer je plek →",
      close: "Sluiten"
    },
    en: {
      badge: "Last spots!",
      title: "Kickstart January & February",
      subtitle: "January Kickstart (starts January 5th)",
      spotsLeft: "Only 1 spot left",
      subtitle2: "February Kickstart (starts February 2nd)",
      spotsLeft2: "7 spots available",
      description: "Our popular 28-Day Kickstart program for beginners. Small groups, personal coaching.",
      cta: "Reserve your spot →",
      close: "Close"
    }
  };

  const t = content[locale as keyof typeof content] || content.nl;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative pointer-events-auto animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={t.close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge */}
          <div className="inline-block bg-cinnabar text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            {t.badge}
          </div>

          {/* Content */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              {t.title}
            </h2>

            {/* January Kickstart */}
            <div className="bg-cinnabar/10 border-2 border-cinnabar rounded-xl p-4 mb-3">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {t.subtitle}
              </h3>
              <p className="text-base font-semibold text-cinnabar">
                🔥 {t.spotsLeft}
              </p>
            </div>

            {/* February Kickstart */}
            <div className="bg-verdigris/10 border-2 border-verdigris rounded-xl p-4 mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {t.subtitle2}
              </h3>
              <p className="text-base font-semibold text-verdigris">
                ✨ {t.spotsLeft2}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCTA}
            className="w-full bg-cinnabar text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-cinnabar/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t.cta}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
