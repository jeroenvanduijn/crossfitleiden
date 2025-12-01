"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';

export default function BlogPost() {
  const locale = useLocale();

  const handleCTAClick = () => {
    track('Blog CTA Click', { post: 'more-training-is-not-always-better' });
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-cinnabar">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-cinnabar">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">More training is not always better</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-cinnabar font-semibold">Training</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">8 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">More training is not always better: supercompensation explained</h1>

          {/* Image */}
          <div className="aspect-video rounded-xl mb-8 overflow-hidden">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-79.jpg"
              alt="CrossFit training and recovery"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">You love training. Maybe you are in the gym 5, 6 or even 7 days per week.</p>

            <p className="text-lg leading-relaxed">It feels logical. More training means more results, right?</p>

            <p className="text-lg leading-relaxed">Not always.</p>

            <p className="text-lg leading-relaxed">At some point you may notice:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>You feel tired all the time</li>
              <li>Your numbers do not go up</li>
              <li>Small aches stay longer</li>
              <li>Motivation drops</li>
            </ul>

            <p className="text-lg leading-relaxed">This is where supercompensation comes in.</p>

            <h2 className="text-3xl font-bold mt-10 mb-6">What is supercompensation?</h2>

            <p className="text-lg leading-relaxed">Supercompensation is a fancy word for a simple idea.</p>

            <p className="text-lg leading-relaxed">Every training session is a small stress for your body.</p>

            <ol className="list-decimal pl-6 space-y-2 text-lg">
              <li>You train. You use energy and create small damage in muscle and tissue.</li>
              <li>Right after training your body is actually a bit weaker and tired.</li>
              <li>Then you rest, eat and sleep. Your body repairs the damage.</li>
              <li>Your body does not only repair. It prepares for the next training and comes back a bit stronger than before.</li>
            </ol>

            <p className="text-lg leading-relaxed">That extra bit is supercompensation. That is where progress happens.</p>

            <p className="text-lg leading-relaxed"><strong>Important:</strong> supercompensation only happens if you give your body enough time and space to recover.</p>

            <p className="text-lg leading-relaxed">If you train hard again while your body is still in the "tired and not yet recovered" phase, you do not get the benefit. You only stack more fatigue on top of fatigue.</p>

            <h2 className="text-3xl font-bold mt-10 mb-6">What happens if you train 6–7 days per week with little rest?</h2>

            <p className="text-lg leading-relaxed">For most people, 6 or 7 hard CrossFit style sessions per week is a lot. Especially if you also have:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>A job</li>
              <li>Kids</li>
              <li>Normal life stress</li>
              <li>Less than 7–8 hours of sleep</li>
            </ul>

            <p className="text-lg leading-relaxed">If you push too often, your body can respond like this:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Performance goes down or stays stuck</li>
              <li>You feel more tired outside the gym</li>
              <li>You sleep worse or wake up often</li>
              <li>You get more small injuries or nagging pain</li>
              <li>You get sick more often</li>
              <li>You feel low in mood or more irritable</li>
            </ul>

            <p className="text-lg leading-relaxed">You are working very hard, but your body never reaches the supercompensation phase. It is always catching up.</p>

            <p className="text-lg leading-relaxed">So you feel like you are doing "more", but your body gets "less" out of it.</p>

            <h2 className="text-3xl font-bold mt-10 mb-6">How much training makes sense for most people?</h2>

            <p className="text-lg leading-relaxed">For many people at a gym like CrossFit Leiden, this is a very good starting point:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><strong>3 to 5 training sessions per week</strong></li>
              <li>Plus daily normal movement, like cycling, walking, playing with your kids, taking the stairs</li>
            </ul>

            <p className="text-lg leading-relaxed">With 3 to 5 sessions per week you can:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Train hard enough to give your body a strong signal</li>
              <li>Recover enough to actually get stronger and fitter</li>
              <li>Still have energy for work, family and life</li>
            </ul>

            <p className="text-lg leading-relaxed"><strong>More is not automatically better. Smart and consistent is better.</strong></p>

            <h2 className="text-3xl font-bold mt-10 mb-6">When can 6–7 training days per week make sense?</h2>

            <p className="text-lg leading-relaxed">There are people who can handle 6 or 7 training sessions per week for a period of time. Often that looks like this:</p>

            <div className="bg-gray-50 rounded-xl p-6 my-6">
              <ol className="list-decimal pl-6 space-y-4 text-lg">
                <li>
                  <strong>Sleep is very good</strong><br />
                  <span className="text-gray-700">Around 8 to 9 hours per night, with a regular rhythm.</span>
                </li>
                <li>
                  <strong>Nutrition is on point</strong><br />
                  <span className="text-gray-700">Enough protein, enough calories, enough carbs around training.</span>
                </li>
                <li>
                  <strong>Stress is relatively low</strong><br />
                  <span className="text-gray-700">No constant pressure at work, no big life problems, time to relax.</span>
                </li>
                <li>
                  <strong>Not every session is full gas</strong><br />
                  <span className="text-gray-700">A smart week with for example:</span>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>2 or 3 hard days</li>
                    <li>2 or 3 medium days</li>
                    <li>1 or 2 very easy days (technique work, light cardio, mobility)</li>
                  </ul>
                </li>
                <li>
                  <strong>It is a planned phase</strong><br />
                  <span className="text-gray-700">For example in the build up to a HYROX event or competition, with a calmer phase after that.</span>
                </li>
              </ol>
            </div>

            <p className="text-lg leading-relaxed">So yes, 6–7 times can work, but only if recovery is almost like a "part time job" next to training.</p>

            <h2 className="text-3xl font-bold mt-10 mb-6">And what if you are a parent, have a busy job or sleep poorly?</h2>

            <p className="text-lg leading-relaxed">Let us look at a few real life situations.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Parent, busy job, broken nights</h3>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>One or more kids</li>
              <li>Full time job</li>
              <li>Sleep is 6 to 7 hours and not always deep</li>
            </ul>

            <p className="text-lg leading-relaxed">In this case, 6 or 7 hard sessions per week is almost never a good idea.</p>

            <p className="text-lg leading-relaxed"><strong>A better plan:</strong></p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>3 CrossFit style sessions per week</li>
              <li>Maybe 1 extra light session, like mobility or an easy run or walk</li>
            </ul>

            <p className="text-lg leading-relaxed">Your life already gives a lot of stress. Training must make you stronger, not finish you off.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Young, no kids, flexible job</h3>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Good sleep schedule</li>
              <li>Less stress</li>
              <li>Some control over your day</li>
            </ul>

            <p className="text-lg leading-relaxed">Here it can be possible to train 5 or 6 times per week, if:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>You mix heavy and light days</li>
              <li>You eat enough</li>
              <li>You listen to early warning signs like heavy fatigue, bad mood, worse sleep</li>
            </ul>

            <p className="text-lg leading-relaxed">Even then it is smart to plan a lighter week every now and then.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. High stress job, big responsibility</h3>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Long days</li>
              <li>A lot of mental pressure</li>
              <li>Many screens, meetings and decisions</li>
            </ul>

            <p className="text-lg leading-relaxed">Your brain and nervous system are already working hard.</p>

            <p className="text-lg leading-relaxed">If you add 6–7 very intense sessions on top, your body can go into "always on" mode. That means:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Harder to relax</li>
              <li>Harder to sleep</li>
              <li>Higher heart rate</li>
              <li>Less progress</li>
            </ul>

            <p className="text-lg leading-relaxed">Here, 3–4 quality sessions per week are usually much better than 6 average sessions.</p>

            <h2 className="text-3xl font-bold mt-10 mb-6">How do you know you are doing too much?</h2>

            <p className="text-lg leading-relaxed">Some signals that you may need more rest:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Your lifts, times and scores are not improving for several weeks</li>
              <li>You feel more pain than usual</li>
              <li>You drag yourself to training, instead of looking forward to it</li>
              <li>You feel tired all day, even with coffee</li>
              <li>Your resting heart rate is higher than normal</li>
              <li>You get sick more often</li>
            </ul>

            <p className="text-lg leading-relaxed">If you recognise yourself in many of these, "more rest" is often the next smart step, not "more work".</p>

            <h2 className="text-3xl font-bold mt-10 mb-6">How to get the most from your training</h2>

            <p className="text-lg leading-relaxed">A few simple rules.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Plan your rest like you plan your WOD</h3>

            <p className="text-lg leading-relaxed">Rest days are not "lost days". They are the days where your body does the building work.</p>

            <p className="text-lg leading-relaxed">Without rest there is no supercompensation. So put rest days in your calendar on purpose.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Treat sleep as your number one recovery tool</h3>

            <p className="text-lg leading-relaxed">Supplements, massages and gadgets are all fine. But nothing beats:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>7 to 9 hours of sleep</li>
              <li>In a dark, cool room</li>
              <li>With a fixed time to go to bed and to wake up</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Eat enough, especially if you train often</h3>

            <p className="text-lg leading-relaxed">If you train hard but eat too little, your body cannot repair and grow. Think:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Protein with every meal</li>
              <li>Enough total calories</li>
              <li>Carbs around training for energy</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">4. Mix heavy and light sessions</h3>

            <p className="text-lg leading-relaxed">Not every day needs to be a "PR day".</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Some days you push</li>
              <li>Some days you practice</li>
              <li>Some days you just move and feel good</li>
            </ul>

            <p className="text-lg leading-relaxed">This is not weak. This is exactly how strong people train for the long term.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4">5. Stop comparing yourself to social media</h3>

            <p className="text-lg leading-relaxed">Many people you see online:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Have a different life</li>
              <li>Maybe work in fitness</li>
              <li>Maybe train twice per day</li>
              <li>Maybe do not have a busy family life</li>
            </ul>

            <p className="text-lg leading-relaxed">Your context is different. Your training plan should match your life, not someone else their highlight reel.</p>

            <h3 className="text-2xl font-bold mt-8 mb-4">6. Talk to your coach</h3>

            <p className="text-lg leading-relaxed">At CrossFit Leiden, we can help you look at:</p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>How often you train now</li>
              <li>How you sleep</li>
              <li>How stressed your life is</li>
              <li>What your goals are</li>
            </ul>

            <p className="text-lg leading-relaxed">Often one or two small changes in your week are enough to feel better and progress again.</p>

            <h2 className="text-3xl font-bold mt-10 mb-6">Summary</h2>

            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Supercompensation means your body comes back a bit stronger after training, but only if it gets enough rest.</li>
              <li>If you train too often and too hard, you collect fatigue instead of progress.</li>
              <li>For most busy people, 3 to 5 sessions per week is a great range.</li>
              <li>6 or 7 sessions can work in special situations, with very good sleep, nutrition and low stress, and with smart planning.</li>
              <li>Listening to your body and being honest about your life situation is more important than chasing a number of sessions.</li>
            </ul>

            <p className="text-lg leading-relaxed mt-6"><strong>You do not need to train every day to get results. You need the right mix of training and recovery.</strong></p>

            <p className="text-lg leading-relaxed">If you are not sure what is right for you, talk to one of the coaches. We are happy to help you create a week plan that fits your life and still makes you stronger, fitter and happier.</p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Finding Your Balance?</h3>
            <p className="text-lg text-gray-700 mb-6">Talk to one of our coaches. We'll help you create a training plan that matches your life and goals.</p>
            <button
              onClick={handleCTAClick}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
            >
              Schedule Free Intro
            </button>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href={`/${locale}/blog`} className="text-cinnabar font-semibold hover:underline inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
