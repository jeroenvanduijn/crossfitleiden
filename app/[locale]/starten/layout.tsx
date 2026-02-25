import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Start met CrossFit Leiden',
        titleEn: 'Start at CrossFit Leiden',
        descriptionNl: 'Begin je CrossFit reis bij CrossFit Leiden. Stap voor stap, met persoonlijke begeleiding. Geen ervaring nodig. 80% van onze leden begon als beginner.',
        descriptionEn: 'Begin your CrossFit journey at CrossFit Leiden. Step by step, with personal coaching. No experience needed. 80% of our members started as beginners.',
        path: '/starten',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
