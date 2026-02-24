import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Geen Slapende Leden bij CrossFit Leiden',
        titleEn: 'No Sleeping Members at CrossFit Leiden',
        descriptionNl: 'Bij CrossFit Leiden bestaan er geen slapende leden. Ontdek waarom onze community je motiveert om te blijven komen.',
        descriptionEn: 'At CrossFit Leiden there are no sleeping members. Discover why our community motivates you to keep coming.',
        path: '/blog/no-sleeping-members',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
