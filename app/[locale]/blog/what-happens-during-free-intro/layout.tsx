import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Wat Gebeurt Er Tijdens een Gratis Intro?',
        titleEn: 'What Happens During a Free Intro?',
        descriptionNl: 'Benieuwd wat er gebeurt tijdens een gratis intro bij CrossFit Leiden? Ontdek hoe je eerste bezoek eruitziet, stap voor stap.',
        descriptionEn: 'Curious what happens during a free intro at CrossFit Leiden? Discover what your first visit looks like, step by step.',
        path: '/blog/what-happens-during-free-intro',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
