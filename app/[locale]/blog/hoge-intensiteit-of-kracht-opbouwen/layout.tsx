import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Hoge intensiteit of kracht opbouwen? Bij ons hoef je niet te kiezen',
        titleEn: 'High Intensity or Building Strength? At Our Gym You Don\'t Have to Choose',
        descriptionNl: 'Bij CrossFit Leiden combineren we intensiteit met persoonlijke coaching. Ontdek waarom je niet hoeft te kiezen tussen kracht en herstel.',
        descriptionEn: 'At CrossFit Leiden we combine intensity with personal coaching. Discover why you don\'t have to choose between strength and recovery.',
        path: '/blog/hoge-intensiteit-of-kracht-opbouwen',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
