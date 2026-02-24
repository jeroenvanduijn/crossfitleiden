import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Ons Team - Coaches & Staff',
        titleEn: 'Our Team - Coaches & Staff',
        descriptionNl: 'Maak kennis met het team van CrossFit Leiden. Onze gecertificeerde coaches en staff. Ervaren, betrokken en altijd klaar om je te helpen.',
        descriptionEn: 'Meet the CrossFit Leiden team. Our certified coaches and staff. Experienced, committed and always ready to help you.',
        path: '/over-ons/team',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
