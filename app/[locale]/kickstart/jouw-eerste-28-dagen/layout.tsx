import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Jouw Eerste 28 Dagen bij CrossFit Leiden – Week voor Week',
        titleEn: 'Your First 28 Days at CrossFit Leiden – Week by Week',
        descriptionNl: 'Ontdek hoe de eerste maand bij CrossFit Leiden eruitziet. Week voor week, door de ogen van Lisa, Martin en Sophie. Persoonlijke begeleiding, community en échte resultaten.',
        descriptionEn: 'Discover what the first month at CrossFit Leiden looks like. Week by week, through the eyes of Lisa, Martin and Sophie. Personal coaching, community and real results.',
        path: '/kickstart/jouw-eerste-28-dagen',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
