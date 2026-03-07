"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Rooster() {
  const t = useTranslations('schedule');
  const locale = useLocale();
  const [activeRooster, setActiveRooster] = useState<'groepslessen' | 'small-group'>('groepslessen');

  useEffect(() => {
    // Wait for embed_rooster to be available, then initialize the active schedule
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && (window as any).embed_rooster) {
        // Clear the container first
        const container = document.getElementById('sportbit-rooster');
        if (container) {
          container.innerHTML = '&nbsp;';
        }

        // Initialize the appropriate category based on active rooster
        const category = activeRooster === 'groepslessen' ? 7 : 1;
        (window as any).embed_rooster.init('https://crossfitleiden.sportbitapp.nl/', category);
      } else {
        // Retry after 100ms
        setTimeout(checkAndInit, 100);
      }
    };

    // Start checking after a short delay
    const timer = setTimeout(checkAndInit, 500);

    return () => clearTimeout(timer);
  }, [activeRooster]); // Re-run when activeRooster changes

  return (
    <>
      {/* Hero - with background image */}
      <section className="relative bg-organic-text text-white overflow-hidden section-padding">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/CF%20Leiden%20Open%2025.1-23.jpg"
            alt={t('hero.title')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative z-20 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl max-w-2xl text-white/90">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Lesson Overview Section */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('ourClasses.title')}</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              {t('ourClasses.subtitle')}
            </p>

            {/* Group Classes */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('groupClasses.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Training */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/_DSC2937.jpg" alt={t('groupClasses.training.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.training.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.training.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.training.for')}
                  </p>
                </div>

                {/* Hyrox */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/466-DSC06591-2.jpg" alt={t('groupClasses.hyrox.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.hyrox.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.hyrox.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.hyrox.for')}
                  </p>
                </div>

                {/* Flex Friday */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/_DSC2163.jpg" alt={t('groupClasses.flexFriday.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.flexFriday.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.flexFriday.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.flexFriday.for')}
                  </p>
                </div>

                {/* Running */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/171-DSC04406.jpg" alt={t('groupClasses.running.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.running.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.running.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.running.for')}
                  </p>
                </div>

                {/* Olympic Lifting */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/CFLeiden-280.jpg" alt={t('groupClasses.olympicLifting.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.olympicLifting.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.olympicLifting.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.olympicLifting.for')}
                  </p>
                </div>

                {/* Teens */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/CFLeiden-67.jpg" alt={t('groupClasses.teens.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.teens.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.teens.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.teens.for')}
                  </p>
                </div>

                {/* Pre Teens */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/CFLeiden-44.jpg" alt={t('groupClasses.preTeens.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.preTeens.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.preTeens.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.preTeens.for')}
                  </p>
                </div>



                {/* Mobility */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/CFLeiden-238.jpg" alt={t('groupClasses.mobility.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.mobility.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.mobility.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.mobility.for')}
                  </p>
                </div>

                {/* Gymnastics */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/_DSC5419.jpg" alt={t('groupClasses.gymnastics.title')} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.gymnastics.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.gymnastics.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.gymnastics.for')}
                  </p>
                </div>

              </div>
            </div>

            {/* Small Group */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('smallGroup.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                {/* GetShredded */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{t('smallGroup.getShredded.title')}</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">{t('smallGroup.badge')}</span>
                  </div>
                  <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/CFLeiden-226.jpg" alt={t('smallGroup.getShredded.title')} fill className="object-cover" />
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('smallGroup.getShredded.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('smallGroup.getShredded.for')}
                  </p>
                </div>

                {/* Unlock Motion */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{t('smallGroup.unlockMotion.title')}</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">{t('smallGroup.badge')}</span>
                  </div>
                  <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/_DSC2798.jpg" alt={t('smallGroup.unlockMotion.title')} fill className="object-cover" />
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('smallGroup.unlockMotion.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('smallGroup.unlockMotion.for')}
                  </p>
                </div>

                {/* Kickstart */}
                <div className="bg-organic-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{t('smallGroup.kickstart.title')}</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">{t('smallGroup.badge')}</span>
                  </div>
                  <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                    <Image src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/rooster/unnamed%20%281%29.jpg" alt={t('smallGroup.kickstart.title')} fill className="object-cover" />
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('smallGroup.kickstart.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('smallGroup.kickstart.for')}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              {t('scheduleInfo.intro')}
            </p>
            <Link href={`/${locale}/starten`} className="text-cinnabar font-semibold hover:underline text-lg">
              {t('scheduleInfo.link')}
            </Link>
          </div>

          {/* Rooster Type Selector */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveRooster('groepslessen')}
                className={`flex-1 p-6 rounded-xl border-2 transition-all ${activeRooster === 'groepslessen'
                    ? 'border-verdigris bg-verdigris/10 shadow-lg'
                    : 'border-gray-200 bg-organic-bg hover:border-verdigris/50'
                  }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">👥</span>
                  <h3 className="text-2xl font-bold">{t('selector.groupClasses.title')}</h3>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  {t('selector.groupClasses.subtitle')}
                </p>
                {activeRooster === 'groepslessen' && (
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-verdigris text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t('selector.groupClasses.badge')}
                    </span>
                  </div>
                )}
              </button>

              <button
                onClick={() => setActiveRooster('small-group')}
                className={`flex-1 p-6 rounded-xl border-2 transition-all ${activeRooster === 'small-group'
                    ? 'border-cinnabar bg-cinnabar/10 shadow-lg'
                    : 'border-gray-200 bg-organic-bg hover:border-cinnabar/50'
                  }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-2xl font-bold">{t('selector.smallGroup.title')}</h3>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  {t('selector.smallGroup.subtitle')}
                </p>
                {activeRooster === 'small-group' && (
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-cinnabar text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t('selector.smallGroup.badge')}
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Sportbit Schedule Embed */}
          <div className="bg-stone-50 rounded-xl p-4 md:p-8">
            <div className="bg-organic-bg rounded-lg overflow-hidden shadow-sm min-h-[600px]">
              <link rel="stylesheet" href="https://crossfitleiden.sportbitapp.nl/cbm/css/embed/rooster/rooster.css" type="text/css" />
              <Script
                src="https://crossfitleiden.sportbitapp.nl/cbm/embed/rooster/cdn/"
                strategy="afterInteractive"
              />
              <div id="sportbit-rooster">&nbsp;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick tips */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('tips.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-organic-bg rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip1.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip1.text')}
                </p>
              </div>

              <div className="bg-organic-bg rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip2.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip2.text')}
                </p>
              </div>

              <div className="bg-organic-bg rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip3.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip3.text')}
                </p>
              </div>

              <div className="bg-organic-bg rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip4.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip4.text')}
                </p>
              </div>
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

      {/* Questions */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              {t.rich('questions.text', {
                a: (chunks) => (
                  <Link href={`/${locale}/contact`} className="text-cinnabar font-semibold hover:underline">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
