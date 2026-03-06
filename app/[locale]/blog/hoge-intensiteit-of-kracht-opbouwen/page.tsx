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
                        <span className="text-gray-900">Hoge intensiteit of kracht opbouwen?</span>
                    </div>
                </div>
            </div>

            {/* Article */}
            <article className="section-padding bg-organic-bg">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <span className="text-cinnabar font-semibold">Training & Coaching</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">8 min lezen</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hoge intensiteit of kracht opbouwen? Bij ons hoef je niet te kiezen.</h1>

                    {/* Image */}
                    <div className="aspect-video rounded-xl mb-8 overflow-hidden">
                        <img
                            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-80.jpg"
                            alt="CrossFit Leiden training — intensiteit én kracht"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-lg leading-relaxed">Er wordt veel geschreven over de &quot;gevaren&quot; van hoge intensiteit. Dat CrossFit te zwaar is. Te veel. Te snel. Dat mensen met een druk leven eigenlijk iets rustiger aan zouden moeten doen.</p>

                        <p className="text-lg leading-relaxed">We begrijpen waar dat vandaan komt. En eerlijk gezegd: soms heeft het ook een punt.</p>

                        <p className="text-lg leading-relaxed font-semibold">Maar het mist iets essentieels.</p>

                        <hr className="my-8 border-gray-200" />

                        <h2 className="text-3xl font-bold mt-8 mb-4">Het is niet óf intensiteit, óf herstel</h2>

                        <p className="text-lg leading-relaxed">De échte vraag is niet: <em>moet ik zwaar trainen of rustig trainen?</em></p>

                        <p className="text-lg leading-relaxed">De echte vraag is: <strong>heeft iemand mij ooit gevraagd hoe jij je vandaag voelt?</strong></p>

                        <p className="text-lg leading-relaxed">Dat is precies waar het in de meeste gym-discussies mis gaat. Ze praten over methodes. Wij praten over mensen.</p>

                        <p className="text-lg leading-relaxed">CrossFit Leiden bestaat 10 jaar. We hebben inmiddels meer dan 400 mensen zien groeien. Ouders die na de training meer energie hebben voor hun kinderen. Professionals die na een zware werkweek juist die ene les nodig hadden om hun hoofd leeg te maken. En mensen die voor het eerst in jaren weer trots op zichzelf zijn.</p>

                        <p className="text-lg leading-relaxed">Die 400 mensen hebben ons één ding geleerd: <strong>niemand heeft precies hetzelfde nodig.</strong></p>

                        <hr className="my-8 border-gray-200" />

                        <h2 className="text-3xl font-bold mt-8 mb-4">Wat wij al die jaren zien</h2>

                        <p className="text-lg leading-relaxed">Ja, CrossFit is soms intensief. Dat klopt. En dat is ook niet altijd het antwoord.</p>

                        <p className="text-lg leading-relaxed">Maar weet je wat we nooit doen? We schrijven niet voor iedereen hetzelfde programma voor, hopen dat het klopt, en kijken dan weg.</p>

                        <p className="text-lg leading-relaxed">Onze coaches zien je. Ze weten wanneer je een mindere week hebt. Ze passen de belasting aan. Ze kennen je naam, je blessuregeschiedenis, je ritme.</p>

                        <p className="text-lg leading-relaxed">Dat is geen toevalligheid. Dat is hoe wij CrossFit al tien jaar doen.</p>

                        <hr className="my-8 border-gray-200" />

                        <h2 className="text-3xl font-bold mt-8 mb-4">Hoge intensiteit is een tool, geen religie</h2>

                        <p className="text-lg leading-relaxed">We trainen niet hard omdat we dat gewoon vinden. We trainen functioneel, met variatie, met coaching, en met aandacht voor hoe jij je die dag voelt.</p>

                        <p className="text-lg leading-relaxed">Soms betekent dat een zware WOD waar je alles uitgeeft.<br />Soms betekent dat techniekwerk op lager gewicht.<br />Soms betekent dat een gesprek met een coach over wat je lichaam nu écht nodig heeft.</p>

                        <p className="text-lg leading-relaxed">Dat laatste is trouwens ook waarom we de <Link href={`/${locale}/aanbod/body-apk`} className="text-cinnabar font-semibold hover:underline">Body-APK</Link> hebben ontwikkeld, een diepgaande analyse van hoe jij beweegt, staat en ademt. Niet als vervanging van training, maar als manier om te begrijpen wat er speelt. Want goed trainen begint bij begrijpen hoe jouw lichaam werkt.</p>

                        <hr className="my-8 border-gray-200" />

                        <h2 className="text-3xl font-bold mt-8 mb-4">De kracht van een community van 400 mensen</h2>

                        <p className="text-lg leading-relaxed">Er is iets wat een kleine studio van 8 mensen je niet kan geven: de energie van een grote, diverse community die al jaren samen traint.</p>

                        <p className="text-lg leading-relaxed">Mensen die elkaar bij naam kennen. Die elkaar aanmoedigen op slechte dagen. Die samen de Ardennen inrijden, de Murph doen, de Parijs-Leiden fietsen, of gewoon na de les nog even blijven hangen.</p>

                        <p className="text-lg leading-relaxed">Dat is niet iets wat je plant. Dat groeit. Over tien jaar.</p>

                        <p className="text-lg leading-relaxed">En die community is ook precies wat mensen helpt vol te houden. Niet de methode. De mensen eromheen.</p>

                        <hr className="my-8 border-gray-200" />

                        <h2 className="text-3xl font-bold mt-8 mb-4">Voor wie is CrossFit Leiden dan?</h2>

                        <p className="text-lg leading-relaxed">Niet voor de sporter die alleen maar maximaal wil presteren. Niet voor de persoon die op zoek is naar een methode die klinkt als een wetenschappelijk experiment.</p>

                        <p className="text-lg leading-relaxed">Wel voor de drukke ouder die een uur voor zichzelf nodig heeft.<br />Voor de professional die na werk z&apos;n hoofd leeg wil maken.<br />Voor de beginner die voor het eerst iets wil proberen wat echt werkt.<br />Voor iedereen die op zoek is naar een plek waar ze gezien worden.</p>

                        <p className="text-lg leading-relaxed">Bij ons hoef je niet te kiezen tussen intensiteit en duurzaamheid. Tussen kracht en herstel. Tussen community en coaching.</p>

                        <p className="text-lg leading-relaxed font-semibold">Je kiest gewoon voor een plek die al 10 jaar weet hoe dat werkt.</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Klaar om het zelf te ervaren?</h3>
                        <p className="text-lg text-gray-700 mb-6">Plan een gratis kennismaking. Geen verplichtingen, geen verkooppraatje. Gewoon kijken of het bij jou past.</p>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                                    (window as any).openCFLPopup();
                                }
                            }}
                            className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
                        >
                            Plan je gratis kennismaking →
                        </button>
                    </div>

                    {/* Footer note */}
                    <div className="mt-8 text-center text-sm text-gray-500 italic">
                        CrossFit Leiden, opgericht in 2016. Meer dan 400 leden. Gelegen in Leiden.
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
