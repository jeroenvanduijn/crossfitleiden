import Link from "next/link";
import { getLocale } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Van kantoorstoel naar barbell: training als tegenwicht voor je werkdag',
        titleEn: 'From Office Chair to Barbell: Training as a Counterweight to Your Workday',
        descriptionNl: '8 uur zitten en toch moe thuis? Ontdek hoe functionele krachttraining jouw reset-knop wordt na een dag achter het bureau.',
        descriptionEn: 'Sitting 8 hours and still exhausted? Discover how functional strength training becomes your reset button after a day at the desk.',
        path: '/blog/van-kantoorstoel-naar-barbell',
    });
}

export default async function BlogPost() {
    const locale = await getLocale();

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-stone-50 py-4">
                <div className="container-custom">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href={`/${locale}`} className="hover:text-cinnabar">Home</Link>
                        <span>/</span>
                        <Link href={`/${locale}/blog`} className="hover:text-cinnabar">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-900">Van kantoorstoel naar barbell</span>
                    </div>
                </div>
            </div>

            {/* Article */}
            <article className="section-padding bg-organic-bg">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <span className="text-cinnabar font-semibold">Trainen & Leven</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">5 min lezen</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Van kantoorstoel naar barbell: training als tegenwicht voor je werkdag</h1>

                    {/* Image */}
                    <div className="aspect-video rounded-xl mb-8 overflow-hidden">
                        <img
                            src="/images/blog/van-kantoorstoel-naar-barbell.jpg"
                            alt="Training als tegenwicht voor een dag achter het bureau"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-lg leading-relaxed font-semibold">Acht uur zitten.</p>

                        <p className="text-lg leading-relaxed">Schouders naar voren.<br />Heupen vast.<br />Rug gespannen.</p>

                        <p className="text-lg leading-relaxed">En om 17:00 ben je moe. Terwijl je nauwelijks hebt bewogen.</p>

                        <p className="text-lg leading-relaxed">Dat is geen conditieprobleem.<br />Dat is een <strong>bewegingsprobleem</strong>.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Wat een zittend leven met je doet</h2>

                        <ul className="text-lg space-y-2">
                            <li>Verkorte heupspieren</li>
                            <li>Zwakke bilspieren</li>
                            <li>Overbelaste onderrug</li>
                            <li>Stijve schouders en nek</li>
                            <li>Lage energie</li>
                        </ul>

                        <p className="text-lg leading-relaxed">Je lichaam is gemaakt om te bewegen. Niet om vast te staan.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Waarom functionele krachttraining het perfecte tegenwicht is</h2>

                        <p className="text-lg leading-relaxed">Wij draaien het om.</p>

                        <p className="text-lg leading-relaxed">Zit je veel? Dan:</p>

                        <ul className="text-lg space-y-2">
                            <li>Deadlifts om je achterkant sterk te maken</li>
                            <li>Squats om je heupen mobiel te houden</li>
                            <li>Overhead presses om je schouders te openen</li>
                            <li>Roeien om je houding te verbeteren</li>
                        </ul>

                        <p className="text-lg leading-relaxed">Geen machines.<br />Wel bewegingen die je <strong>hele lichaam</strong> gebruiken.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Meer energie na je werk</h2>

                        <p className="text-lg leading-relaxed">Veel members zeggen:</p>

                        <blockquote className="border-l-4 border-cinnabar pl-6 italic text-lg text-gray-700">
                            "Ik kom moe binnen en ga wakker naar huis."
                        </blockquote>

                        <p className="text-lg leading-relaxed">Dat klinkt tegenstrijdig. Maar het klopt.</p>

                        <p className="text-lg leading-relaxed">Bewegen activeert.<br />Krachttraining verbetert je houding.<br />Je voelt je letterlijk <strong>rechter en sterker</strong>.</p>

                        <p className="text-lg leading-relaxed">Niet omdat je een sportdoel hebt.<br />Maar omdat je lichaam weer doet waarvoor het bedoeld is.</p>

                        <p className="text-lg leading-relaxed mt-6">Train je als tegenwicht voor je werkdag?<br />Dan wordt sporten geen extra belasting.</p>

                        <p className="text-lg leading-relaxed"><strong>Maar je reset-knop.</strong></p>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Klaar voor je reset?</h3>
                        <p className="text-lg text-gray-700 mb-6">Plan een gratis intro en ontdek hoe training jouw werkdag compleet anders maakt.</p>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                                    (window as any).openCFLPopup();
                                }
                            }}
                            className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
                        >
                            Plan je gratis intro
                        </button>
                    </div>

                    {/* Back to Blog */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link href={`/${locale}/blog`} className="text-cinnabar font-semibold hover:underline inline-flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Terug naar Blog
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}
