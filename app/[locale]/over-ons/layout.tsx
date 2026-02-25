import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Over Ons - CrossFit Leiden',
        titleEn: 'About Us - CrossFit Leiden',
        descriptionNl: 'Leer CrossFit Leiden kennen. Onze missie, visie en wat ons anders maakt. Gewone mensen, buitengewoon sterk.',
        descriptionEn: 'Get to know CrossFit Leiden. Our mission, vision and what makes us different. Everyday people, exceptionally strong.',
        path: '/over-ons',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
