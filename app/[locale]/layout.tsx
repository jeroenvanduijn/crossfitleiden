import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutWrapper from "@/components/LayoutWrapper";
import PageHistoryTracker from "@/components/PageHistoryTracker";
import StructuredData from "@/components/StructuredData";

const baseUrl = 'https://www.crossfitleiden.com';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'nl'
    ? 'CrossFit Leiden | CrossFit voor Beginners & Professionals | Gratis Proefles'
    : 'CrossFit Leiden | CrossFit for Beginners & Professionals | Free Intro';

  const description = locale === 'nl'
    ? 'CrossFit Leiden - Persoonlijke coaching voor beginners en gevorderden. Kleine groepen, ervaren trainers. Plan je gratis No Sweat Intro. 265+ 5-sterren reviews.'
    : 'CrossFit Leiden - Personal coaching for beginners and experienced athletes. Small groups, expert trainers. Schedule your free No Sweat Intro. 265+ 5-star reviews.';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: '%s | CrossFit Leiden',
    },
    description,
    keywords: ['CrossFit Leiden', 'fitness Leiden', 'groepslessen Leiden', 'personal training Leiden', 'crossfit beginners', 'no sweat intro', 'persoonlijke coaching', 'crossfit', 'gym Leiden', 'sport Leiden'],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        nl: `${baseUrl}/nl`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: 'CrossFit Leiden',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/homepage/IMG_6885.png',
          width: 1200,
          height: 630,
          alt: 'CrossFit Leiden',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/homepage/IMG_6885.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'geo.region': 'NL-ZH',
      'geo.placename': 'Leiden',
      'geo.position': '52.1518;4.4854',
      'ICBM': '52.1518, 4.4854',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LayoutWrapper>
            {children}
            <PageHistoryTracker />
          </LayoutWrapper>
        </NextIntlClientProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JPD4QBBYZ3"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPD4QBBYZ3');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1285596611453953');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1285596611453953&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          src="https://links.gymops.nl/js/external-tracking.js"
          data-tracking-id="tk_348787a4c93a414996dc9d11481a3c1c"
          strategy="afterInteractive"
        />
        <Analytics />
        <SpeedInsights />
        <StructuredData />
      </body>
    </html>
  );
}
