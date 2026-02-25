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
                        <span className="text-gray-900">CrossFit na je 40e</span>
                    </div>
                </div>
            </div>

            {/* Article */}
            <article className="section-padding bg-organic-bg">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <span className="text-cinnabar font-semibold">Trainen & Herstel</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">6 min lezen</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">CrossFit na je 40e: wat verandert er – en wat niet</h1>

                    {/* Image */}
                    <div className="aspect-video rounded-xl mb-8 overflow-hidden">
                        <img
                            src="/images/blog/crossfit-na-je-40e.jpg"
                            alt="CrossFit training na je 40e bij CrossFit Leiden"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-lg leading-relaxed">Je bent 42. Of 47. Of 55.<br />Je hebt een drukke baan. Misschien kinderen. Misschien allebei.</p>

                        <p className="text-lg leading-relaxed">En ergens denk je:<br /><em>"Is dit nog wel het moment om hiermee te beginnen?"</em></p>

                        <p className="text-lg leading-relaxed font-semibold">Goed nieuws. Juist nu.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Wat verandert er na je 40e?</h2>

                        <p className="text-lg leading-relaxed">Eerlijk is eerlijk. Er verandert iets.</p>

                        <ul className="text-lg space-y-2">
                            <li>Herstel duurt iets langer</li>
                            <li>Spiermassa neemt sneller af als je niets doet</li>
                            <li>Mobiliteit vraagt meer aandacht</li>
                            <li>Stress en slaap hebben meer invloed</li>
                        </ul>

                        <p className="text-lg leading-relaxed">Maar hier komt het belangrijkste:</p>

                        <p className="text-lg leading-relaxed">👉 Dat is geen reden om minder te trainen.<br />👉 Dat is reden om <strong>slimmer</strong> te trainen.</p>

                        <p className="text-lg leading-relaxed">En precies daar maken wij het verschil.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Wat verandert er níet?</h2>

                        <p className="text-lg leading-relaxed">Je vermogen om sterker te worden.<br />Je vermogen om conditie op te bouwen.<br />Je vermogen om nieuwe dingen te leren.</p>

                        <p className="text-lg leading-relaxed">Sterker nog. Veel van onze sterkste members zijn 45+.<br />Niet omdat ze "jong van lijf" zijn.<br />Maar omdat ze <strong>consistent</strong> zijn.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Slim trainen in plaats van hard trainen</h2>

                        <p className="text-lg leading-relaxed">Bij ons is schalen geen zwakte. Het is strategie.</p>

                        <ul className="text-lg space-y-2">
                            <li>Minder gewicht? Prima.</li>
                            <li>Kortere intervallen? Goed plan.</li>
                            <li>Extra mobiliteit? Slim.</li>
                        </ul>

                        <p className="text-lg leading-relaxed">Iedere training heeft één doel: jou beter maken voor het leven buiten de gym.</p>

                        <p className="text-lg leading-relaxed">We programmeren met herstel in gedachten. We wisselen intensiteit af. We coachen techniek vóór tempo.</p>

                        <p className="text-lg leading-relaxed">Dat betekent:</p>

                        <ul className="text-lg space-y-2">
                            <li>Deadlifts om je rug sterk te houden</li>
                            <li>Squats om je heupen mobiel te houden</li>
                            <li>Pull-ups of aangepaste varianten om je bovenlichaam sterk te houden</li>
                        </ul>

                        <p className="text-lg leading-relaxed">Niet om te winnen.<br />Maar om over 20 jaar nog steeds makkelijk de trap op te lopen.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Wat we elke week op de vloer zien</h2>

                        <ul className="text-lg space-y-2">
                            <li>Een moeder van 48 die haar eerste echte push-up doet</li>
                            <li>Een ondernemer van 52 die zonder rugpijn opstaat</li>
                            <li>Iemand van 45 die zegt: "Ik heb meer energie dan toen ik 35 was"</li>
                        </ul>

                        <p className="text-lg leading-relaxed">Dat is geen uitzondering. Dat is <strong>normaal</strong> hier.</p>

                        <p className="text-lg leading-relaxed mt-6">Na je 40e train je niet om te bewijzen dat je nog jong bent.<br />Je traint om sterk te blijven voor alles wat belangrijk is.</p>

                        <p className="text-lg leading-relaxed"><strong>En geloof ons. Dat kan beter dan je denkt.</strong></p>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Klaar om te starten?</h3>
                        <p className="text-lg text-gray-700 mb-6">Plan een gratis intro en ontdek hoe we jou slim en veilig sterker maken — ongeacht je leeftijd.</p>
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
