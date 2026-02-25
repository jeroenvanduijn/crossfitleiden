import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Fitness Test - Meet Je Vooruitgang',
        titleEn: 'Fitness Test - Measure Your Progress',
        descriptionNl: 'Doe de fitness test bij CrossFit Leiden. Meet je kracht, uithoudingsvermogen en mobiliteit. Volg je vooruitgang over tijd.',
        descriptionEn: 'Take the fitness test at CrossFit Leiden. Measure your strength, endurance and mobility. Track your progress over time.',
        path: '/fitness-test',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
