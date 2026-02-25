import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Waarom 80% Begint als Beginner',
        titleEn: 'Why 80% Start as Beginners',
        descriptionNl: 'Wist je dat 80% van onze leden zonder ervaring begon? Lees waarom CrossFit Leiden perfect is voor beginners.',
        descriptionEn: 'Did you know 80% of our members started with no experience? Read why CrossFit Leiden is perfect for beginners.',
        path: '/blog/why-80-percent-start-as-beginners',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
