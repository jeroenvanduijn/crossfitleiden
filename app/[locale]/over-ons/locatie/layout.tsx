import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Locatie & Faciliteiten',
        titleEn: 'Location & Facilities',
        descriptionNl: 'Bekijk de locatie en faciliteiten van CrossFit Leiden. 1.000m² ruimte, parkeren voor de deur, douches en meer. Marie Diebenplaats 108, Leiden.',
        descriptionEn: 'View the location and facilities of CrossFit Leiden. 1,000m² space, parking at the door, showers and more. Marie Diebenplaats 108, Leiden.',
        path: '/over-ons/locatie',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
