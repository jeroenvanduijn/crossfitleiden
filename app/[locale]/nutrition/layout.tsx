import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Voeding & Coaching',
        titleEn: 'Nutrition & Coaching',
        descriptionNl: 'Voedingscoaching bij CrossFit Leiden. Krijg persoonlijk voedingsadvies afgestemd op je trainingsdoelen. Meer resultaat uit je training.',
        descriptionEn: 'Nutrition coaching at CrossFit Leiden. Get personalized nutrition advice aligned with your training goals. Get more out of your training.',
        path: '/nutrition',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
