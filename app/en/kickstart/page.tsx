import Link from "next/link";
import CTA from "@/components/CTA";

export default function Kickstart() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-jonquil via-yellow-400 to-jonquil text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Safe and Strong with Our Kickstart
            </h1>
            <p className="text-xl mb-8 text-gray-800">
              Our 28-day beginner program with personal coaching, safe progression, and a clear plan.
            </p>
            <Link
              href="/starten"
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg"
            >
              Schedule a Free Intro
            </Link>
          </div>
        </div>
      </section>

      {/* What is the Kickstart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is the Kickstart?</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Kickstart is our 28-day beginner program, specially designed for people who have never done CrossFit, or who haven't exercised in a long time.
            </p>
            <div className="bg-verdigris/10 rounded-lg p-5 mb-6">
              <p className="text-gray-800">
                <strong>Note:</strong> Everyone starts with a free intro. During that conversation, we'll determine together if the Kickstart is the best starting point for you.
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Over <strong>28 days</strong> you'll work on your energy, routine, and master all the basic movements – completely at your own pace, with personal coaching from our trainers.
            </p>

            <div className="bg-jonquil/20 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-lg mb-3">What do we focus on?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Safe start</strong> – No high-skill movements, but lots of attention to proper technique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>More energy</strong> – Build conditioning and strength without overtraining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Creating a routine</strong> – Learn how to fit training into your busy life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Building confidence</strong> – Discover what your body can do, step by step</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who is the Kickstart For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">👋</div>
                <h3 className="font-bold text-lg mb-2">Complete Beginners</h3>
                <p className="text-gray-700">
                  Never done CrossFit before? Perfect. The Kickstart is made especially for you.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-lg mb-2">Busy Parents</h3>
                <p className="text-gray-700">
                  Need structure and a clear plan? The Kickstart gives you that foundation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">⏸️</div>
                <h3 className="font-bold text-lg mb-2">Haven't Exercised in Years</h3>
                <p className="text-gray-700">
                  Has it been years? No problem. We build up gradually from your current level.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">🩹</div>
                <h3 className="font-bold text-lg mb-2">Uncertainty or Injuries</h3>
                <p className="text-gray-700">
                  Have an old injury or feeling uncertain? We adapt everything to your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included in the Kickstart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included in the Kickstart?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🏋️</span>
                  Train 2-3 times per week
                </h3>
                <p className="text-gray-700">
                  In group classes or semi-private, depending on what suits you. Flexible scheduling.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">👨‍🏫</span>
                  Personal coach guidance
                </h3>
                <p className="text-gray-700">
                  Our coaches know your name, your goal, and your situation. Every class you get personal feedback.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">📐</span>
                  Technique training at your level
                </h3>
                <p className="text-gray-700">
                  Learn the basic movements (squats, push-ups, deadlifts) in a safe way that fits your body.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🍎</span>
                  Nutrition & lifestyle basics
                </h3>
                <p className="text-gray-700">
                  Simple, achievable tips about nutrition, sleep, and recovery – no complicated diets.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  A progression plan
                </h3>
                <p className="text-gray-700">
                  Safe progression that matches your level. Not too fast, not too slow – just right.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  Community onboarding
                </h3>
                <p className="text-gray-700">
                  You'll meet other members, feel welcome, and become part of the CFL family.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  Mini check-in halfway
                </h3>
                <p className="text-gray-700">
                  After 2 weeks we evaluate together how it's going and adjust where needed.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Evaluation at the end
                </h3>
                <p className="text-gray-700">
                  After 28 days we discuss your progress and give personal advice for your next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to get started - 3 steps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How Does Getting Started Work?</h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              Starting at CrossFit Leiden is easy. We guide you through 3 simple steps:
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Schedule a Free Intro</h3>
                  <p className="text-gray-700 mb-3">
                    This is a relaxed 30-minute conversation. <strong>No workout</strong>, no obligations.
                    We get to know each other, give you a tour, and listen to your goals and situation.
                  </p>
                  <p className="text-gray-600 text-sm">
                    You'll also get answers to all your questions about the Kickstart, scheduling, and pricing.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Learn About the Kickstart</h3>
                  <p className="text-gray-700 mb-3">
                    During the intro we explain the entire Kickstart program. You'll hear exactly what to expect,
                    how the coaching works, and how we help you start safely.
                  </p>
                  <p className="text-gray-600 text-sm">
                    If it's a good fit, we'll schedule your first class right away.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Start Your 28-Day Journey</h3>
                  <p className="text-gray-700 mb-3">
                    You start with your first class in a small, safe group. Our coaches guide you every step of the way.
                    Questions? You can always ask.
                  </p>
                  <p className="text-gray-600 text-sm">
                    After 28 days you're ready to continue with our regular classes – or you choose a different program.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/starten"
                className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg"
              >
                Schedule a Free Intro
              </Link>
              <p className="text-gray-600 text-sm mt-4">
                The conversation is free and no-obligation. No commitments!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member testimonials - Social proof */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">What Do Members Say About the Kickstart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👩</div>
                <div>
                  <p className="font-bold">Lisa, 38 years old</p>
                  <p className="text-sm text-gray-600">Mother of 2, busy job</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I started with zero experience and was really nervous. The Kickstart gave me exactly the structure and calm
                I needed. Within 4 weeks I already felt stronger and more energetic!"
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👨</div>
                <div>
                  <p className="font-bold">Peter, 45 years old</p>
                  <p className="text-sm text-gray-600">Hadn't exercised in 15 years</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The Kickstart gave me exactly the structure I needed. The coaches took the time to explain everything
                and I never felt rushed. Perfect program for people like me."
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👩</div>
                <div>
                  <p className="font-bold">Marieke, 39 years old</p>
                  <p className="text-sm text-gray-600">Mother of 3</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Perfect for busy parents! Easy to schedule, warm welcome, and I never felt uncertain.
                The Kickstart helped me build a new routine."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Do I need to be fit to do the Kickstart?</h3>
                <p className="text-gray-700">
                  Absolutely not! The Kickstart is specially designed for beginners who aren't fit yet.
                  We adapt everything to your level and build up gradually.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">How often do I train during the Kickstart?</h3>
                <p className="text-gray-700">
                  We recommend 2-3 times per week for the best results. That's manageable alongside work and family,
                  and gives your body enough time to recover.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Is the Kickstart mandatory?</h3>
                <p className="text-gray-700">
                  No, but we highly recommend it! 95% of our new members choose the Kickstart because it provides peace of mind,
                  structure, and confidence. It's the best way to start safely.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">What does the Kickstart cost?</h3>
                <p className="text-gray-700">
                  The Kickstart is included in your membership. You pay the regular monthly rate and get full
                  access to the Kickstart coaching. During your free intro we discuss all options.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Can I cancel after the Kickstart?</h3>
                <p className="text-gray-700">
                  Yes, you can cancel monthly. But most people happily continue because they notice
                  how much difference it makes in their energy and wellbeing!
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Do I train alone or in a group?</h3>
                <p className="text-gray-700">
                  That's your choice! Some people start in a small group (max 8-10 people), others choose
                  semi-private (2-4 people). We discuss during the intro what suits you best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CTA
        variant="footer"
        title="Curious if the Kickstart is right for you?"
        description="Schedule a free intro – no workout, just a relaxed conversation and a tour. We'll happily explain everything and answer all your questions. Completely no-obligation!"
        buttonText="Schedule a Free Intro"
        href="/starten"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Have questions about the Kickstart or want to know more?{" "}
              <Link href="/contact" className="text-cinnabar font-semibold hover:underline">
                Contact us
              </Link>
              {" "}– we're happy to help!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
