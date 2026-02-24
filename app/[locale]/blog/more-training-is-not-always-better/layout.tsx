import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Meer Trainen is Niet Altijd Beter',
        titleEn: 'More Training Is Not Always Better',
        descriptionNl: 'Waarom meer trainen niet altijd beter is. Leer over rust, herstel en slimmer trainen bij CrossFit Leiden.',
        descriptionEn: 'Why more training is not always better. Learn about rest, recovery and smarter training at CrossFit Leiden.',
        path: '/blog/more-training-is-not-always-better',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
