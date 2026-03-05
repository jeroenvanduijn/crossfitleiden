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

const baseUrl = 'https://www.crossfitleiden.com';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'nl'
    ? 'CrossFit Leiden - Everyday people, exceptionally strong'
    : 'CrossFit Leiden - Everyday people, exceptionally strong';

  const description = locale === 'nl'
    ? 'CrossFit Leiden is meer dan een sportschool – het is een tweede thuis. Gewone mensen, buitengewoon sterk. Kom kennismaken!'
    : 'CrossFit Leiden is more than a gym – it\'s a second home. Everyday people, exceptionally strong. Come meet us!';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: '%s | CrossFit Leiden',
    },
    description,
    keywords: ['crossfit', 'leiden', 'fitness', 'gym', 'sport', 'training', 'community'],
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
