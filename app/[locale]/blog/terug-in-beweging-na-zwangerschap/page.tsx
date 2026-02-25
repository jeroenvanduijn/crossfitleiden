"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';

export default function BlogPost() {
    const locale = useLocale();

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
                        <span className="text-gray-900">Terug in beweging na je zwangerschap</span>
                    </div>
                </div>
            </div>

            {/* Article */}
            <article className="section-padding bg-organic-bg">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <span className="text-cinnabar font-semibold">Voor Moeders</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">5 min lezen</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terug in beweging na je zwangerschap</h1>

                    {/* Image */}
                    <div className="aspect-video rounded-xl mb-8 overflow-hidden">
                        <img
                            src="/images/blog/terug-in-beweging-zwangerschap.jpg"
                            alt="Vrouw traint na zwangerschap bij CrossFit Leiden"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-lg leading-relaxed">Je bent moeder geworden.<br />Alles is veranderd.</p>

                        <p className="text-lg leading-relaxed">Je lichaam. Je slaap. Je ritme. Je prioriteiten.</p>

                        <p className="text-lg leading-relaxed">En ergens denk je: <em>wanneer begin ik weer met sporten?</em></p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Wanneer kun je weer starten?</h2>

                        <p className="text-lg leading-relaxed">Altijd in overleg met je verloskundige of huisarts.</p>

                        <p className="text-lg leading-relaxed">Maar belangrijker dan "wanneer" is: <strong>hoe</strong>.</p>

                        <p className="text-lg leading-relaxed">Niet terug naar je oude lichaam.<br />Wel terug naar je energie.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Waar moet je op letten?</h2>

                        <p className="text-lg leading-relaxed">Na een zwangerschap vragen drie dingen extra aandacht:</p>

                        <ol className="text-lg space-y-2 list-decimal list-inside">
                            <li>Bekkenbodem</li>
                            <li>Buikspieren</li>
                            <li>Gewrichten en stabiliteit</li>
                        </ol>

                        <p className="text-lg leading-relaxed">Je lichaam heeft maanden aangepast gestaan. Dat draai je niet in twee weken terug.</p>

                        <p className="text-lg leading-relaxed">Daarom beginnen we rustig.</p>

                        <ul className="text-lg space-y-2">
                            <li>Ademhaling en core controle</li>
                            <li>Langzame krachtopbouw</li>
                            <li>Focus op houding en stabiliteit</li>
                        </ul>

                        <p className="text-lg leading-relaxed font-semibold">Geen haast. Geen druk.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Waarom structuur zo belangrijk is</h2>

                        <p className="text-lg leading-relaxed">Veel vrouwen zoeken niet een zware training.<br />Ze zoeken <strong>houvast</strong>.</p>

                        <p className="text-lg leading-relaxed">Een vast moment.<br />Een coach die meekijkt.<br />Een plek waar ze even niet alleen moeder zijn.</p>

                        <p className="text-lg leading-relaxed">Onze Kickstart sluit daar perfect op aan.</p>

                        <p className="text-lg leading-relaxed">Kleine groepen. Persoonlijke begeleiding. Aandacht voor jouw situatie.</p>

                        <p className="text-lg leading-relaxed">We bouwen stap voor stap op.<br />En vaak hoor je na een paar weken:</p>

                        <blockquote className="border-l-4 border-cinnabar pl-6 italic text-lg text-gray-700">
                            "Ik voel me weer mezelf."
                        </blockquote>

                        <p className="text-lg leading-relaxed">Niet dunner. Niet lichter.<br />Maar <strong>sterker. Rustiger. Energieker.</strong></p>

                        <p className="text-lg leading-relaxed mt-6">En dat is uiteindelijk waar het om gaat.</p>

                        <p className="text-lg leading-relaxed"><strong>Meer energie voor je gezin én voor jezelf.</strong></p>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Klaar om weer te beginnen?</h3>
                        <p className="text-lg text-gray-700 mb-6">Plan een gratis intro en ontdek hoe we jou veilig en persoonlijk begeleiden — op jouw tempo.</p>
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
