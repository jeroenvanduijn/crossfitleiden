import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Member Service',
        titleEn: 'Member Service',
        descriptionNl: 'Member service van CrossFit Leiden. Hulp met je lidmaatschap, planning, pauzes en meer.',
        descriptionEn: 'Member service at CrossFit Leiden. Help with your membership, scheduling, pauses and more.',
        path: '/member-service',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
