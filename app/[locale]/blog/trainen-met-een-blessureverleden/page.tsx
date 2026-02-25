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
                        <span className="text-gray-900">Trainen met een blessureverleden</span>
                    </div>
                </div>
            </div>

            {/* Article */}
            <article className="section-padding bg-organic-bg">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <span className="text-cinnabar font-semibold">Blessures & Schalen</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">6 min lezen</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Trainen met een blessureverleden: hoe wij schalen en aanpassen</h1>

                    {/* Image */}
                    <div className="aspect-video rounded-xl mb-8 overflow-hidden">
                        <img
                            src="/images/blog/trainen-met-blessureverleden.jpg"
                            alt="Veilig trainen met blessureverleden bij CrossFit Leiden"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-lg leading-relaxed">"Ik zou wel willen… maar mijn knie."<br />"Mijn schouder is nooit meer hetzelfde geworden."<br />"Ik heb ooit een hernia gehad."</p>

                        <p className="text-lg leading-relaxed">We horen dit elke week.</p>

                        <p className="text-lg leading-relaxed">En bijna altijd volgt daarna:<br /><em>"Dus CrossFit is niets voor mij."</em></p>

                        <p className="text-lg leading-relaxed font-semibold">Maar hier komt het verschil.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Iedereen heeft iets</h2>

                        <p className="text-lg leading-relaxed">Boven de 35 heeft bijna iedereen een verhaal.</p>

                        <p className="text-lg leading-relaxed">Een oude voetbalblessure.<br />Een schouder van jarenlang bureauwerk.<br />Een rug die ooit vastzat.</p>

                        <p className="text-lg leading-relaxed">Dat is geen uitzondering. Dat is <strong>normaal</strong>.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Hoe wij starten</h2>

                        <p className="text-lg leading-relaxed">We beginnen niet met een barbell.</p>

                        <p className="text-lg leading-relaxed">We beginnen met een gesprek.</p>

                        <ul className="text-lg space-y-2">
                            <li>Wat is er gebeurd?</li>
                            <li>Wat voelt nog gevoelig?</li>
                            <li>Waar ben je bang voor?</li>
                        </ul>

                        <p className="text-lg leading-relaxed">Daarna bouwen we op.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Hoe schalen er in de praktijk uitziet</h2>

                        <p className="text-lg leading-relaxed"><strong>Voorbeeld 1: schouderklacht</strong><br />
                            Geen zware presses.<br />
                            Wel squats, lunges, roeien, lichte gecontroleerde bewegingen.</p>

                        <p className="text-lg leading-relaxed"><strong>Voorbeeld 2: knieklacht</strong><br />
                            Geen diepe sprongen.<br />
                            Wel box squats, sled pushes, gecontroleerde krachtopbouw.</p>

                        <p className="text-lg leading-relaxed"><strong>Voorbeeld 3: rugverleden</strong><br />
                            Geen snelle rotaties.<br />
                            Wel techniektraining, deadlifts met perfecte vorm, core-stabiliteit.</p>

                        <p className="text-lg leading-relaxed">Schalen betekent niet minder trainen.<br />Het betekent <strong>slimmer</strong> trainen.</p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Wat we het mooiste vinden</h2>

                        <p className="text-lg leading-relaxed">De mensen die binnenkomen met twijfel.</p>

                        <p className="text-lg leading-relaxed">En na drie maanden zeggen:</p>

                        <blockquote className="border-l-4 border-cinnabar pl-6 italic text-lg text-gray-700">
                            "Ik dacht dat ik dit nooit meer zou kunnen."
                        </blockquote>

                        <p className="text-lg leading-relaxed">Sterk worden is niet voor perfecte lichamen.<br />Het is voor <strong>echte mensen</strong>.</p>

                        <p className="text-lg leading-relaxed">En die lopen hier elke dag rond.</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Vertel ons jouw verhaal</h3>
                        <p className="text-lg text-gray-700 mb-6">Plan een gratis intro en we bespreken samen hoe we slim en veilig kunnen trainen — rekening houdend met jouw achtergrond.</p>
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
