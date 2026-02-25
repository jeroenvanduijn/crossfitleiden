import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Leidse Wintertriatlon - Gesponsord door CrossFit Leiden',
        titleEn: 'Leidse Wintertriatlon - Sponsored by CrossFit Leiden',
        descriptionNl: 'De Leidse Wintertriatlon: hardlopen, fietsen en schaatsen. CrossFit Leiden is trotse sponsor. Schrijf je in en train met ons!',
        descriptionEn: 'The Leidse Wintertriatlon: running, cycling, and skating. CrossFit Leiden is proud sponsor. Sign up and train with us!',
        path: '/events/leidse-wintertriatlon',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
