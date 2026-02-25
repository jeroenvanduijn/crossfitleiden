"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import IntroCtaSection from "@/components/IntroCtaSection";

// Branded SVGs for Comparison Section
const IconWrapper = ({ children, size = 32 }: { children: React.ReactNode, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const CoffeeIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </IconWrapper>
);

const DiningIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </IconWrapper>
);

const StreamingIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="m10 8 5 3-5 3V8z" />
  </IconWrapper>
);

const CrossFitIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="m3 21 18-18" strokeWidth="2" />
    <path d="m3 3 18 18" strokeWidth="2" />
    <path d="M2 19l3 3" strokeWidth="2" />
    <path d="M19 2l3 3" strokeWidth="2" />
    <path d="M2 5l3-3" strokeWidth="2" />
    <path d="M19 22l3-3" strokeWidth="2" />
  </IconWrapper>
);

const RocketIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-4.42-3.58s-1.29 0-2.13.71l0 0z" />
    <path d="m11.5 8.5 2 2" />
    <path d="M12 11c0 3.31-2.69 6-6 6-3.31 0-6-2.69-6-6S2.69 5 6 5s6 2.69 6 6z" />
    <path d="m21 3-9 9" />
    <path d="M21 3s.5 9-3.5 13" />
    <path d="M21 3s-9 .5-13 3.5" />
  </IconWrapper>
);

const UsersIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconWrapper>
);

const TargetIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </IconWrapper>
);

const UnlockIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </IconWrapper>
);

const ClipboardIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </IconWrapper>
);

const DumbbellIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="m6.5 6.5 11 11" />
    <path d="m6.5 17.5 11-11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
    <rect x="8" y="2" width="8" height="20" rx="2" transform="rotate(45 12 12)" />
  </IconWrapper>
);

const AppleIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12 0-4.35-3.56-7-7-7s-7 2.65-7 7c0 4 3 12 6 12 1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M12 6c.35-1.61 1.44-2.9 2.15-3.41" />
  </IconWrapper>
);

const SaladIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M22 11v1a10 10 0 0 1-20 0v-1" />
    <path d="M12 5V2" />
    <path d="m7 7-2-3" />
    <path d="m17 7 2-3" />
    <path d="M22 11c0-4-3-7-10-7S2 7 2 11" />
  </IconWrapper>
);

const UserIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconWrapper>
);

const BookIcon = ({ size }: { size?: number }) => (
  <IconWrapper size={size}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </IconWrapper>
);

const DiamondIcon = ({
  icon: Icon,
  size = "lg",
  active = false,
  className = ""
}: {
  icon: any,
  size?: "sm" | "lg",
  active?: boolean,
  className?: string
}) => {
  const sizes = {
    sm: "w-12 h-12",
    lg: "w-16 h-16 mb-6"
  };

  return (
    <div className={`relative ${sizes[size]} mx-auto flex items-center justify-center shrink-0 ${className}`}>
      <div className={`absolute inset-0 rotate-45 border transition-all duration-300 rounded-xl ${active
        ? 'border-cinnabar bg-cinnabar shadow-lg shadow-cinnabar/20'
        : 'border-cinnabar/20 bg-organic-bg'
        } ${size === 'lg' ? 'border-2' : ''}`}></div>
      <div className={`relative z-10 transition-colors duration-300 ${active ? 'text-white' : 'text-cinnabar'
        }`}>
        <Icon size={size === 'lg' ? 32 : 24} />
      </div>
    </div>
  );
};

export default function Tarieven() {
  const t = useTranslations('pricing');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-organic-text text-white overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/faciliteit/hero-background-15.jpg"
            alt={t('hero.imageAlt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-20 container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {t('hero.subtitle')}
            </p>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                  (window as any).openCFLPopup();
                }
              }}
              className="inline-block bg-organic-bg text-cinnabar px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl border-2 border-cinnabar font-heading"
            >
              {t('hero.button')}
            </button>
          </div>
        </div>
      </section>

      {/* Kostenvergelijking */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('comparison.title')}</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <DiamondIcon icon={CoffeeIcon} />
                <p className="font-bold text-lg mb-2 text-organic-text">{t('comparison.coffee.title')}</p>
                <p className="text-3xl font-extrabold text-organic-text mb-1">{t('comparison.coffee.price')}</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{t('comparison.coffee.period')}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <DiamondIcon icon={DiningIcon} />
                <p className="font-bold text-lg mb-2 text-organic-text">{t('comparison.dining.title')}</p>
                <p className="text-3xl font-extrabold text-organic-text mb-1">{t('comparison.dining.price')}</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{t('comparison.dining.period')}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <DiamondIcon icon={StreamingIcon} />
                <p className="font-bold text-lg mb-2 text-organic-text">{t('comparison.streaming.title')}</p>
                <p className="text-3xl font-extrabold text-organic-text mb-1">{t('comparison.streaming.price')}</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{t('comparison.streaming.period')}</p>
              </div>

              <div className="bg-organic-bg border-2 border-cinnabar rounded-2xl p-8 text-center shadow-xl shadow-cinnabar/10 transform lg:-translate-y-2 transition-transform">
                <DiamondIcon icon={CrossFitIcon} active />
                <p className="font-bold text-lg mb-2 text-cinnabar">{t('comparison.crossfit.title')}</p>
                <p className="text-3xl font-extrabold text-cinnabar mb-1">{t('comparison.crossfit.price')}</p>
                <p className="text-sm text-cinnabar/70 font-medium uppercase tracking-wider">{t('comparison.crossfit.period')}</p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-8 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                {t('comparison.message')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programma's met accordions */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('programs.title')}</h2>
            <p className="text-lg text-gray-600 mb-10 text-center">
              {t('programs.subtitle')}
            </p>

            <div className="space-y-4">
              {/* Kickstart */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('kickstart')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={RocketIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.kickstart.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.kickstart.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'kickstart' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'kickstart' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-cinnabar">{t('programs.kickstart.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.kickstart.period')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.kickstart.description')}
                      </p>

                      <div className="bg-stone-50 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-3">{t('programs.kickstart.included')}</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.kickstart.item1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.kickstart.item2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.kickstart.item3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.kickstart.item4')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.kickstart.item5')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Group Coaching */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('group')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={UsersIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.group.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.group.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'group' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'group' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.group.description')}
                      </p>

                      <div className="space-y-4">
                        <div className="bg-stone-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.group.base.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-cinnabar">{t('programs.group.base.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.group.base.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.base.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.base.item2')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.base.item3')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.base.item4')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.base.item5')}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-stone-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.group.pro.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-cinnabar">{t('programs.group.pro.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.group.pro.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.pro.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.pro.item2')}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-stone-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.group.elite.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-cinnabar">{t('programs.group.elite.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.group.elite.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.elite.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.group.elite.item2')}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-center text-gray-600 italic">
                        {t('programs.group.note')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Small Group / Semi-Private */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('small')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={TargetIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.small.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.small.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'small' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'small' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.small.description')}
                      </p>

                      <div className="space-y-4">
                        <div className="bg-stone-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.small.tier3.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-cinnabar">{t('programs.small.tier3.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.small.tier3.period')}</p>
                              <p className="text-sm text-gray-600">{t('programs.small.tier3.period2')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.small.tier3.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.small.tier3.item2')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.small.tier3.item3')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.small.tier3.item4')}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-stone-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.small.tier2.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-cinnabar">{t('programs.small.tier2.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.small.tier2.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.small.tier2.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.small.tier2.item2')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cinnabar mt-1">✓</span>
                              <span>{t('programs.small.tier2.item3')}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-center text-gray-600 italic">
                        {t('programs.small.note')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Unlock Motion */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('unlock')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={UnlockIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.unlock.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.unlock.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'unlock' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'unlock' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cinnabar">{t('programs.unlock.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.unlock.period')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.unlock.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Body APK */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('body-apk')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={ClipboardIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.bodyApk.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.bodyApk.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'body-apk' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'body-apk' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cinnabar">{t('programs.bodyApk.price')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.bodyApk.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Personal Training */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('pt')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={DumbbellIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.pt.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.pt.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'pt' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'pt' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.pt.description')}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-stone-50 rounded-lg p-5">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">{t('programs.pt.pt60.title')}</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt60.tier1')}</span>
                              <span className="text-xl font-bold text-cinnabar">{t('programs.pt.pt60.price1')}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt60.tier2')}</span>
                              <span className="text-xl font-bold text-cinnabar">{t('programs.pt.pt60.price2')}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 rounded-lg p-5">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">{t('programs.pt.pt30.title')}</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt30.tier1')}</span>
                              <span className="text-xl font-bold text-cinnabar">{t('programs.pt.pt30.price1')}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt30.tier2')}</span>
                              <span className="text-xl font-bold text-cinnabar">{t('programs.pt.pt30.price2')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Monthly Private Coaching */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('skill')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={TargetIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.skill.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.skill.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'skill' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'skill' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.skill.description')}
                      </p>

                      <div className="space-y-3">
                        <div className="bg-stone-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.skill.skill1')}</span>
                          <span className="text-xl font-bold text-cinnabar">{t('programs.skill.price1')}</span>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.skill.skill2')}</span>
                          <span className="text-xl font-bold text-cinnabar">{t('programs.skill.price2')}</span>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.skill.skill4')}</span>
                          <span className="text-xl font-bold text-cinnabar">{t('programs.skill.price4')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nutrition Kickstart */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('nutrition-kickstart')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={AppleIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.nutritionKickstart.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.nutritionKickstart.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'nutrition-kickstart' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'nutrition-kickstart' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-cinnabar">{t('programs.nutritionKickstart.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.nutritionKickstart.period')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.nutritionKickstart.description')}
                      </p>

                      <div className="bg-stone-50 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-3">{t('programs.nutritionKickstart.included')}</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cinnabar mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item4')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nutrition Membership */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('nutrition')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={SaladIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.nutrition.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.nutrition.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'nutrition' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'nutrition' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cinnabar">{t('programs.nutrition.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.nutrition.period')}</p>
                      </div>

                      <p className="text-gray-700 text-center">
                        {t('programs.nutrition.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Teens */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('teens')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={UserIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.teens.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.teens.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'teens' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'teens' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.teens.description')}
                      </p>

                      <div className="space-y-3">
                        <div className="bg-stone-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.teens.tier1')}</span>
                          <span className="text-xl font-bold text-cinnabar">{t('programs.teens.price1')}</span>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.teens.tier2')}</span>
                          <span className="text-xl font-bold text-cinnabar">{t('programs.teens.price2')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Base Weekend */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('base-weekend')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={BookIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.baseWeekend.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.baseWeekend.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'base-weekend' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'base-weekend' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-cinnabar">{t('programs.baseWeekend.price')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.baseWeekend.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Flex Friday */}
              <div className="bg-organic-bg rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('flex')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <DiamondIcon icon={UsersIcon} size="sm" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.flex.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.flex.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'flex' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'flex' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{t('programs.flex.time')}</p>
                        <p className="text-sm text-gray-600">{t('programs.flex.schedule')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.flex.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Review Widget */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('reviews.title')}</h2>

          {/* Google Review Widget */}
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full min-h-[500px] md:min-h-[400px]">
              <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
              <iframe
                className='lc_reviews_widget'
                src='https://reputationhub.site/reputation/widgets/review_widget/s0YuoK12A9YPXCKsfUp3?widgetId=690b468e0591d2ab3477c77a'
                frameBorder='0'
                scrolling='no'
                style={{
                  minWidth: '100%',
                  width: '100%',
                  minHeight: '500px',
                  height: '100%',
                  border: 'none'
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('faq.title')}</h2>

            <div className="space-y-4">
              <details className="bg-organic-bg rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{t('faq.q1')}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a1')}
                </p>
              </details>

              <details className="bg-organic-bg rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{t('faq.q2')}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a2')}
                </p>
              </details>

              <details className="bg-organic-bg rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{t('faq.q3')}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a3')}
                </p>
              </details>

              <details className="bg-organic-bg rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{t('faq.q4')}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a4')}
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        buttonLabel={t('cta.button')}
      />
    </>
  );
}
