import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Tarieven - Lidmaatschap & Prijzen',
        titleEn: 'Pricing - Membership & Plans',
        descriptionNl: 'Bekijk de tarieven van CrossFit Leiden. Flexibele lidmaatschappen, Kickstart programma en meer. Alles inclusief coaching, community en faciliteiten.',
        descriptionEn: 'View CrossFit Leiden pricing. Flexible memberships, Kickstart program and more. Everything includes coaching, community and facilities.',
        path: '/tarieven',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
