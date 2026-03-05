import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";
import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return createPageMetadata({
        titleNl: 'Body-APK - Diepgaande houding- en bewegingsanalyse',
        titleEn: 'Body-APK - In-depth Posture & Movement Analysis',
        descriptionNl: 'Begrijp waar je klachten écht vandaan komen. Persoonlijke 1-op-1 sessie met houding-, ademhaling- en bewegingsanalyse bij CrossFit Leiden.',
        descriptionEn: 'Understand where your pain really comes from. Personal 1-on-1 posture, breathing and movement analysis at CrossFit Leiden.',
        path: '/aanbod/body-apk',
    });
}

export default async function BodyAPKPage() {
    const locale = await getLocale();
    const isNl = locale === 'nl';

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {isNl
                                ? 'Je auto laat je keuren. Je lichaam niet?'
                                : "You get your car inspected. But what about your body?"}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-4">
                            {isNl
                                ? 'De Body-APK laat je letterlijk zien waar je lichaam vastloopt. Geen giswerk. Geen standaard oefeningen. Wel antwoorden.'
                                : "The Body-APK shows you exactly where your body gets stuck. No guesswork. No generic exercises. Just answers."}
                        </p>
                        <p className="text-lg text-gray-300">
                            {isNl
                                ? 'Voor mensen bij wie klachten steeds blijven terugkomen.'
                                : 'For people whose complaints keep coming back.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Herken je dit? */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">
                        {isNl ? 'Herken je dit?' : 'Does this sound familiar?'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            isNl ? 'Het schiet in je rug bij een kleine beweging' : 'Your back goes out with a small movement',
                            isNl ? 'Je voelt dat je houding niet klopt, maar je weet niet wat je moet doen' : "You feel your posture is off, but you don't know what to do",
                            isNl ? 'Je sport, maar dezelfde klacht blijft terugkomen' : 'You exercise, but the same complaint keeps returning',
                            isNl ? 'Je denkt: dit hoort vast bij het ouder worden' : "You think: this must be part of getting older",
                        ].map((symptom, i) => (
                            <div key={i} className="flex items-start gap-3 bg-stone-50 rounded-xl p-5">
                                <span className="text-cinnabar text-xl flex-shrink-0">✗</span>
                                <p className="text-gray-700">{symptom}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wat is de Body-APK? */}
            <section className="section-padding bg-stone-50">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">
                        {isNl ? 'Wat is de Body-APK?' : 'What is the Body-APK?'}
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        {isNl
                            ? 'Een diepgaande lichaamsanalyse waarbij we kijken naar het grote geheel. Het doel: snappen waarom je klachten blijven terugkomen, ook als je al van alles hebt geprobeerd.'
                            : "An in-depth body analysis where we look at the big picture. The goal: understanding why your complaints keep returning, even if you've already tried everything."}
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-organic-bg rounded-xl p-6 text-center">
                            <div className="w-14 h-14 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{isNl ? 'Houding' : 'Posture'}</h3>
                            <p className="text-gray-700">{isNl ? 'Hoe je staat en zit' : 'How you stand and sit'}</p>
                        </div>
                        <div className="bg-organic-bg rounded-xl p-6 text-center">
                            <div className="w-14 h-14 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{isNl ? 'Ademhaling' : 'Breathing'}</h3>
                            <p className="text-gray-700">{isNl ? 'Hoe je ademt in rust en onder belasting' : 'How you breathe at rest and under load'}</p>
                        </div>
                        <div className="bg-organic-bg rounded-xl p-6 text-center">
                            <div className="w-14 h-14 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{isNl ? 'Beweging' : 'Movement'}</h3>
                            <p className="text-gray-700">{isNl ? 'Lopen of rennen in slow motion' : 'Walking or running in slow motion'}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coach Jari */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">
                        {isNl ? 'Wie begeleidt de Body-APK?' : 'Who guides the Body-APK?'}
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <img
                                src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jari.png"
                                alt="Jari Jansen"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Jari Jansen</h3>
                            <p className="text-verdigris font-semibold mb-4">Movement Specialist</p>
                            <p className="text-lg text-gray-700 mb-4">
                                {isNl
                                    ? 'Jari is bewegingsspecialist bij CrossFit Leiden. Hij is gespecialiseerd in houding, ademhaling en bewegingsanalyse. Hij kijkt niet alleen naar waar je klachten voelt, maar vooral naar hoe je lichaam als geheel beweegt.'
                                    : "Jari is the movement specialist at CrossFit Leiden. He specializes in posture, breathing and movement analysis. He doesn't just look at where you feel pain, but at how your body moves as a whole."}
                            </p>
                            <p className="text-gray-600 italic">
                                {isNl
                                    ? 'Geen standaard protocollen, maar kijken wat jouw lichaam laat zien. Zonder haast. Zonder oordeel.'
                                    : 'No standard protocols, but observing what your body shows. Without rush. Without judgment.'}
                            </p>
                        </div>
                    </div>

                    {/* Video: Jari introduces Body-APK */}
                    <div className="mt-10">
                        <h3 className="text-xl font-bold mb-4 text-center">
                            {isNl ? 'Bekijk de Body-APK in actie' : 'See the Body-APK in action'}
                        </h3>
                        <div className="rounded-xl overflow-hidden shadow-lg w-full">
                            <div className="relative" style={{ padding: '56.25% 0 0 0' }}>
                                <iframe
                                    src="https://player.vimeo.com/video/1162594482?badge=0&autopause=0&player_id=0&app_id=58479"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    title={isNl ? 'Body-APK in actie met coach Jari' : 'Body-APK in action with coach Jari'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Al van alles geprobeerd? */}
            <section className="section-padding bg-stone-50">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">
                        {isNl ? 'Al van alles geprobeerd?' : "Already tried everything?"}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {[
                            isNl ? 'Je bent bij de fysio geweest, maar de klacht komt terug' : "You've been to physio, but the complaint keeps returning",
                            isNl ? 'Je hebt oefeningen gekregen die niet werken' : "You've been given exercises that don't work",
                            isNl ? 'Je bent het zat om steeds hetzelfde verhaal te vertellen' : "You're tired of telling the same story over and over",
                            isNl ? 'Je wilt eindelijk weten waar het probleem vandaan komt' : 'You finally want to know where the problem comes from',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-organic-bg rounded-xl p-5">
                                <span className="text-verdigris text-xl flex-shrink-0">→</span>
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-cinnabar/5 border-l-4 border-cinnabar rounded-r-xl p-6">
                        <p className="text-lg font-semibold text-gray-900">
                            {isNl
                                ? 'De Body-APK is geen symptoombestrijding. We zoeken de oorzaak.'
                                : "The Body-APK doesn't treat symptoms. We look for the cause."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Wat levert het op? */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">
                        {isNl ? 'Wat levert het op?' : 'What do you get?'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-stone-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">📸</div>
                            <h3 className="text-lg font-bold mb-2">{isNl ? 'Houdingsfoto\'s' : 'Posture photos'}</h3>
                            <p className="text-gray-700 text-sm">{isNl ? 'We leggen je houding vast vanuit meerdere hoeken' : 'We capture your posture from multiple angles'}</p>
                        </div>
                        <div className="bg-stone-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">🎥</div>
                            <h3 className="text-lg font-bold mb-2">{isNl ? 'Slow-motion beelden' : 'Slow-motion footage'}</h3>
                            <p className="text-gray-700 text-sm">{isNl ? 'Je ziet hoe je loopt en beweegt in detail' : 'See how you walk and move in detail'}</p>
                        </div>
                        <div className="bg-stone-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">📋</div>
                            <h3 className="text-lg font-bold mb-2">{isNl ? 'Concrete vervolgstappen' : 'Concrete next steps'}</h3>
                            <p className="text-gray-700 text-sm">{isNl ? 'Een helder plan: wat is de logische volgende stap voor jou' : 'A clear plan: what is the logical next step for you'}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zo werkt het */}
            <section className="section-padding bg-stone-50">
                <div className="container-custom max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        {isNl ? 'Zo werkt het' : 'How it works'}
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-organic-bg rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-cinnabar text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {isNl ? 'Belafspraak' : 'Phone call'}
                                    </h3>
                                    <p className="text-gray-700">
                                        {isNl
                                            ? 'We bellen je kort (5-10 min) om je situatie te bespreken. Geen verkooppraatje.'
                                            : "We'll call you briefly (5-10 min) to discuss your situation. No sales pitch."}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-organic-bg rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-verdigris text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {isNl ? 'Analyse in de gym' : 'Analysis in the gym'}
                                    </h3>
                                    <p className="text-gray-700">
                                        {isNl
                                            ? 'Tijdens de sessie (60-90 min) analyseren we je houding, ademhaling en beweging.'
                                            : 'During the session (60-90 min) we analyze your posture, breathing and movement.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-organic-bg rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-jonquil text-gray-900 rounded-full flex items-center justify-center font-bold text-lg">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {isNl ? 'Uitleg en vervolgstap' : 'Explanation and next step'}
                                    </h3>
                                    <p className="text-gray-700">
                                        {isNl
                                            ? 'Je krijgt beelden, uitleg en een heldere samenvatting. Je weet precies wat de logische vervolgstap is.'
                                            : "You get footage, explanation and a clear summary. You'll know exactly what the logical next step is."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Testimonial - Chantal */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        {isNl ? 'Ervaringen' : 'Experiences'}
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <div
                            className="overflow-hidden rounded-xl"
                            style={{ aspectRatio: '9/16', maxWidth: '360px', width: '100%' }}
                        >
                            <iframe
                                src="https://player.vimeo.com/video/1169864962?badge=0&autopause=0&player_id=0&app_id=58479"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Member Story Chantal"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className="max-w-sm">
                            <p className="text-sm text-gray-500 mb-2">Chantal — {isNl ? 'Ondernemer uit Leiden · Rugklachten' : 'Entrepreneur from Leiden · Back pain'}</p>
                            <blockquote className="text-lg text-gray-700 italic border-l-4 border-cinnabar pl-4">
                                {isNl
                                    ? '"Chantal had al jaren rugklachten en had van alles geprobeerd. De Body-APK liet haar eindelijk zien waar het probleem vandaan kwam."'
                                    : '"Chantal had back pain for years and had tried everything. The Body-APK finally showed her where the problem came from."'}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Voor wie wel/niet */}
            <section className="section-padding bg-stone-50">
                <div className="container-custom max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        {isNl ? 'Voor wie is dit geschikt?' : 'Who is this for?'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-organic-bg rounded-xl p-8">
                            <h3 className="text-xl font-bold mb-4 text-verdigris">
                                {isNl ? '✓ Wel geschikt als je...' : '✓ Suitable if you...'}
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-verdigris flex-shrink-0">✓</span>
                                    {isNl ? 'Terugkerende klachten hebt' : 'Have recurring complaints'}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-verdigris flex-shrink-0">✓</span>
                                    {isNl ? 'Klaar bent met pleisters plakken' : 'Are done with band-aid solutions'}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-verdigris flex-shrink-0">✓</span>
                                    {isNl ? 'Bereid bent om zelf aan de slag te gaan' : 'Are willing to put in the work yourself'}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-verdigris flex-shrink-0">✓</span>
                                    {isNl ? 'Openstaat voor een eerlijk gesprek' : 'Are open to an honest conversation'}
                                </li>
                            </ul>
                        </div>
                        <div className="bg-organic-bg rounded-xl p-8">
                            <h3 className="text-xl font-bold mb-4 text-cinnabar">
                                {isNl ? '✗ Niet geschikt als je...' : '✗ Not suitable if you...'}
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-cinnabar flex-shrink-0">✗</span>
                                    {isNl ? 'Acute pijn hebt en medische hulp nodig hebt' : 'Have acute pain and need medical help'}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cinnabar flex-shrink-0">✗</span>
                                    {isNl ? 'Op zoek bent naar een snelle fix' : 'Are looking for a quick fix'}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cinnabar flex-shrink-0">✗</span>
                                    {isNl ? 'Een officiële diagnose verwacht' : 'Expect an official diagnosis'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-organic-bg">
                <div className="container-custom max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        {isNl ? 'Veelgestelde vragen' : 'Frequently asked questions'}
                    </h2>
                    <div className="space-y-4">
                        <details className="bg-stone-50 rounded-lg p-6 shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                                <span>{isNl ? 'Wat is de Body-APK?' : 'What is the Body-APK?'}</span>
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-gray-700 mt-4">
                                {isNl
                                    ? 'Een diepgaande analyse van hoe jouw lichaam beweegt: houding, ademhaling en looppatroon. Coach Jari kijkt naar de oorzaak van terugkerende klachten, niet het symptoom. Je ontvangt slow-motion beelden, houdingsfoto\'s en concrete vervolgstappen.'
                                    : "An in-depth analysis of how your body moves: posture, breathing and walking pattern. Coach Jari looks at the cause of recurring complaints, not the symptom. You receive slow-motion footage, posture photos and concrete next steps."}
                            </p>
                        </details>

                        <details className="bg-stone-50 rounded-lg p-6 shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                                <span>{isNl ? 'Heb ik een lidmaatschap nodig?' : 'Do I need a membership?'}</span>
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-gray-700 mt-4">
                                {isNl
                                    ? 'Nee. De Body-APK is beschikbaar voor iedereen, ook zonder abonnement bij CrossFit Leiden.'
                                    : 'No. The Body-APK is available for everyone, even without a CrossFit Leiden membership.'}
                            </p>
                        </details>

                        <details className="bg-stone-50 rounded-lg p-6 shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                                <span>{isNl ? 'Wat is het verschil met Unlock Motion?' : 'What is the difference with Unlock Motion?'}</span>
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-gray-700 mt-4">
                                {isNl
                                    ? 'De Body-APK is de analyse. Unlock Motion is het 12-weken trainingsprogramma dat erop volgt. Je kunt de Body-APK doen zonder door te gaan met Unlock Motion.'
                                    : 'The Body-APK is the analysis. Unlock Motion is the 12-week training program that follows. You can do the Body-APK without continuing with Unlock Motion.'}
                            </p>
                        </details>

                        <details className="bg-stone-50 rounded-lg p-6 shadow-sm group">
                            <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                                <span>{isNl ? 'Hoe boek ik een Body-APK?' : 'How do I book a Body-APK?'}</span>
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-gray-700 mt-4">
                                {isNl
                                    ? 'Via het formulier hieronder. Je begint met een kort telefoongesprek van 5-10 minuten, daarna plan je de analysesessie in de gym (60-90 minuten).'
                                    : "Through the form below. You start with a short phone call of 5-10 minutes, then you schedule the analysis session in the gym (60-90 minutes)."}
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="section-padding bg-gray-900 text-white">
                <div className="container-custom max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {isNl ? 'Klaar om te weten wat er speelt?' : 'Ready to find out what\'s going on?'}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        {isNl
                            ? 'We beginnen met een kort, vrijblijvend telefoongesprek.'
                            : "We start with a short, no-obligation phone call."}
                    </p>
                    <div className="bg-white rounded-xl p-2 max-w-2xl mx-auto">
                        <iframe
                            src="https://links.gymops.nl/widget/booking/shoFMv6aUldZKsGsUxfm"
                            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                            scrolling="no"
                            id="bodyapk-booking-calendar"
                            title={isNl ? 'Body-APK Intro Call Boeken' : 'Book Body-APK Intro Call'}
                        />
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        {isNl
                            ? 'Geen lidmaatschap nodig. Geen verplicht vervolg.'
                            : 'No membership required. No obligation to continue.'}
                    </p>
                </div>
            </section>

            {/* Footer CTA */}
            <IntroCtaSection
                title={isNl ? "Liever eerst een rondleiding?" : "Prefer a tour first?"}
                subtitle={isNl
                    ? "Plan een gratis No Sweat Intro. We laten je de gym zien en bespreken je doelen."
                    : "Schedule a free No Sweat Intro. We'll show you the gym and discuss your goals."}
                buttonLabel={isNl ? "Plan een Gratis Intro" : "Schedule a Free Intro"}
            />
        </>
    );
}
