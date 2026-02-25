import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Links - Handige Links',
        titleEn: 'Links - Useful Links',
        descriptionNl: 'Handige links van CrossFit Leiden. Sportbit, social media, apps en meer.',
        descriptionEn: 'Useful links from CrossFit Leiden. Sportbit, social media, apps and more.',
        path: '/links',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
