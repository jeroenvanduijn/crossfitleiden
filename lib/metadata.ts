import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

const baseUrl = 'https://www.crossfitleiden.com';

type PageMetaConfig = {
    titleNl: string;
    titleEn: string;
    descriptionNl: string;
    descriptionEn: string;
    path: string;
    image?: string;
};

export async function createPageMetadata(config: PageMetaConfig): Promise<Metadata> {
    const locale = await getLocale();
    const { titleNl, titleEn, descriptionNl, descriptionEn, path, image } = config;

    const title = locale === 'nl' ? titleNl : titleEn;
    const description = locale === 'nl' ? descriptionNl : descriptionEn;
    const ogImage = image || 'https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/homepage/IMG_6885.png';

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/${locale}${path}`,
            languages: {
                nl: `${baseUrl}/nl${path}`,
                en: `${baseUrl}/en${path}`,
            },
        },
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${locale}${path}`,
            siteName: 'CrossFit Leiden',
            locale: locale === 'nl' ? 'nl_NL' : 'en_US',
            type: 'website',
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}
