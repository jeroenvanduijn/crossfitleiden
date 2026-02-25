import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Blog - Tips, Verhalen & Inzichten',
        titleEn: 'Blog - Tips, Stories & Insights',
        descriptionNl: 'CrossFit Leiden blog: trainingstips, succesverhalen, voedingsadvies en meer. Leer hoe je sterker en gezonder wordt.',
        descriptionEn: 'CrossFit Leiden blog: training tips, success stories, nutrition advice and more. Learn how to get stronger and healthier.',
        path: '/blog',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
