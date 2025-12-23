"use client";

import { useState, useEffect } from 'react';

export default function KickstartPromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  const content = {
    nl: {
      badge: "Laatste plekken!",
      title: "Kickstart Februari & Maart",
      subtitle: "Februari Kickstart (start 2 februari)",
      spotsLeft: "Nog 6 plekken beschikbaar",
      subtitle2: "Maart Kickstart (start 2 maart)",
      spotsLeft2: "Nog 9 plekken beschikbaar",
      description: "Ons populaire 28-Day Kickstart programma voor beginners. Kleine groepen, persoonlijke begeleiding.",
      cta: "Reserveer je plek →",
      close: "Sluiten"
    },
    en: {
      badge: "Last spots!",
      title: "Kickstart February & March",
      subtitle: "February Kickstart (starts February 2nd)",
      spotsLeft: "6 spots available",
      subtitle2: "March Kickstart (starts March 2nd)",
      spotsLeft2: "9 spots available",
      description: "Our popular 28-Day Kickstart program for beginners. Small groups, personal coaching.",
      cta: "Reserve your spot →",
      close: "Close"
    }
  };

  // Default to Dutch content
  const t = content.nl;

  useEffect(() => {
    // Check if user has seen this popup before
    const hasSeenPopup = sessionStorage.getItem('kickstart-popup-seen');

    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('kickstart-popup-seen', 'true');
  };

  const handleCTA = () => {
    // Store traffic source in sessionStorage for GHL to pick up
    sessionStorage.setItem('traffic_source', 'kickstart-popup');
    sessionStorage.setItem('utm_source', 'website');
    sessionStorage.setItem('utm_medium', 'popup');
    sessionStorage.setItem('utm_campaign', 'kickstart-feb-march');

    // Add UTM parameters to current URL for tracking
    const url = new URL(window.location.href);
    url.searchParams.set('utm_source', 'website');
    url.searchParams.set('utm_medium', 'popup');
    url.searchParams.set('utm_campaign', 'kickstart-feb-march');
    window.history.replaceState({}, '', url.toString());

    // Mark as seen
    sessionStorage.setItem('kickstart-popup-seen', 'true');
    setIsVisible(false);

    // Trigger the intro booking popup
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-[9998] flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-2xl max-w-md w-full shadow-2xl relative animate-slideIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={t.close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Badge */}
            <div className="inline-block bg-cinnabar text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {t.badge}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              {t.description}
            </p>

            {/* February Box */}
            <div className="bg-verdigris/10 border-2 border-verdigris rounded-xl p-4 mb-3">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {t.subtitle}
              </h3>
              <p className="text-base font-semibold text-verdigris">
                ✨ {t.spotsLeft}
              </p>
            </div>

            {/* March Box */}
            <div className="bg-jonquil/10 border-2 border-jonquil rounded-xl p-4 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {t.subtitle2}
              </h3>
              <p className="text-base font-semibold text-gray-900">
                ✨ {t.spotsLeft2}
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCTA}
              className="w-full bg-cinnabar text-white py-4 px-6 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md text-lg"
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
