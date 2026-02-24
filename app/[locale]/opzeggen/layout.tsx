import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Lidmaatschap Opzeggen',
        titleEn: 'Cancel Membership',
        descriptionNl: 'Lidmaatschap opzeggen bij CrossFit Leiden. Informatie over opzegtermijn en procedure.',
        descriptionEn: 'Cancel your CrossFit Leiden membership. Information about cancellation period and procedure.',
        path: '/opzeggen',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
