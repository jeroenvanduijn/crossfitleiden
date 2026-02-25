import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Kickstart Programma - 4 Weken Persoonlijke Begeleiding',
        titleEn: 'Kickstart Program - 4 Weeks Personal Coaching',
        descriptionNl: 'Start met het Kickstart programma van CrossFit Leiden. 4 weken persoonlijke begeleiding, techniektraining en voedingsadvies. Beperkt aantal plekken.',
        descriptionEn: 'Start with CrossFit Leiden\'s Kickstart program. 4 weeks of personal coaching, technique training and nutrition advice. Limited spots available.',
        path: '/kickstart',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
