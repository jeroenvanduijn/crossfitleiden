import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Contact - Neem Contact Op',
        titleEn: 'Contact - Get in Touch',
        descriptionNl: 'Neem contact op met CrossFit Leiden. Adres: Marie Diebenplaats 108, Leiden. Bel, mail of kom langs. We helpen je graag!',
        descriptionEn: 'Contact CrossFit Leiden. Address: Marie Diebenplaats 108, Leiden. Call, email or visit us. We\'re happy to help!',
        path: '/contact',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
