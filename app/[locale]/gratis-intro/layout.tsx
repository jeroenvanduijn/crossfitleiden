import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Gratis Intro - Kom Kennismaken',
        titleEn: 'Free Intro - Come Meet Us',
        descriptionNl: 'Plan een gratis intro bij CrossFit Leiden. Kennismaken met de box, coaches en community. Vrijblijvend en zonder verplichtingen.',
        descriptionEn: 'Schedule a free intro at CrossFit Leiden. Meet the box, coaches and community. No obligations, no pressure.',
        path: '/gratis-intro',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
