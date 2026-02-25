import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Rooster - Lesrooster & Planning',
        titleEn: 'Schedule - Class Timetable & Planning',
        descriptionNl: 'Bekijk het lesrooster van CrossFit Leiden. Lessen van 06:00 tot 22:00, 7 dagen per week. CrossFit, HYROX, Open Gym en meer.',
        descriptionEn: 'View the CrossFit Leiden class schedule. Classes from 06:00 to 22:00, 7 days a week. CrossFit, HYROX, Open Gym and more.',
        path: '/rooster',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
