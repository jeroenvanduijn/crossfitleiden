import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { GoogleAnalytics } from '@next/third-parties/google';
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
        <GoogleAnalytics gaId="G-JPD4QBBYZ3" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
