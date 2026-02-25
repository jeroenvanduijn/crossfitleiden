import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Zenuwachtig om te Beginnen? Eén Kleine Stap',
        titleEn: 'Nervous to Start? One Small Step',
        descriptionNl: 'Zenuwachtig om met CrossFit te beginnen? Dat is heel normaal. Lees hoe je met één kleine stap kunt starten bij CrossFit Leiden.',
        descriptionEn: 'Nervous about starting CrossFit? That\'s totally normal. Read how you can start with one small step at CrossFit Leiden.',
        path: '/blog/nervous-to-start-one-small-step',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
