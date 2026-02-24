import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Is CrossFit Veilig? Feiten & Mythes',
        titleEn: 'Is CrossFit Safe? Facts & Myths',
        descriptionNl: 'Is CrossFit veilig? We ontkrachten de mythes en leggen uit waarom CrossFit bij CrossFit Leiden veilig is voor iedereen.',
        descriptionEn: 'Is CrossFit safe? We debunk the myths and explain why CrossFit at CrossFit Leiden is safe for everyone.',
        path: '/blog/is-crossfit-safe',
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
