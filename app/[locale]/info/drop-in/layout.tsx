import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Drop-in - Train als Gast bij CrossFit Leiden',
        titleEn: 'Drop-in - Train as a Guest at CrossFit Leiden',
        descriptionNl: 'Drop-in bij CrossFit Leiden. Train als gast vanaf €15 per les. Boek online via Sportbit. Welkom voor alle CrossFit-ervaren atleten.',
        descriptionEn: 'Drop-in at CrossFit Leiden. Train as a guest from €15 per class. Book online via Sportbit. Welcome for all CrossFit-experienced athletes.',
        path: '/info/drop-in',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
