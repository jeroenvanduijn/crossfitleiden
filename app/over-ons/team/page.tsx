import Link from "next/link";
import CTA from "@/components/CTA";

export default function TeamPage() {
  const coaches = [
    {
      name: "Jeroen van Duijn & Kees Houwaart",
      role: "Owners",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/jeroen%20en%20kees.png",
      story: "Kees Houwaart: Born into Fitness. Kees Houwaart was destined for the fitness world. Raised in a family that owned a top-tier gym in Katwijk, he was surrounded by barbells and dumbbells from a young age. After discovering the transformative power of CrossFit in 2012, Kees knew he had to share it. In 2014, he founded Gymbox Noordwijk, the first CrossFit-focused gym in the area. Kees, along with his wife Nathalie and their two sons Neal and Jake, reside in Katwijk aan Zee.\n\nJeroen van Duijn: From Finance to Fitness. Jeroen van Duijn's love for sports was instilled early on by his athlete parents. From football to surfing, he was always active. Initially in Corporate Finance, Jeroen took a bold step in 2014 to follow his passion. His journey led him to Chile, where he trained people and taught nutrition. Returning to the Netherlands, transitioning to the fitness industry was a natural move. Jeroen, his wife Amanda, and their daughter Zoe live in Katwijk aan Zee.\n\nThe Partnership That Built a Network: Kees and Jeroen's paths crossed in 2013, and they instantly connected over their love for fitness and community. In 2015, they teamed up with Coach Jeroen van der Most to co-found CrossFit Leiden. This trio laid the groundwork for what has now blossomed into the Creative Sports Company network of gyms. Though Jeroen van der Most took a different route in 2020, fate brought the original team back together in 2023. This is the story of how CrossFit Leiden came to be-a place where fitness legacies and entrepreneurial spirits unite to create a community of champions."
    },
    {
      name: "Rochelle",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20rochelle.png",
      story: "Say hello to Rochelle, the coach who's won over the toughest critic-my daughter Zoe-thanks to her 'Bring Your Kid' sessions. Don't let her friendly face fool you; she's a gymnastics wizard who can teach anyone, from toddlers to centenarians, how to do a handstand or a cartwheel. When she's not at CrossFit Leiden, she's busy being a Dutch national gymnastics coach. Rochelle stumbled upon us during the Corona period, initially looking for a place to train her gymnastics squad. A few sessions in, and she was hooked-not just on gymnastics but also on weightlifting. Now, she's a regular face, coaching at least two days a week at CrossFit Leiden, all while prepping her gymnastics team for world cups. Talk about a multitasker!"
    },
    {
      name: "Jeffrey Perez Stoof",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jef.png",
      story: "Introducing Jeffrey Perez Stoof, the coach with a name as smooth as his coaching style-and yes, it hints at his Spanish flair. He joined us during the Corona era, but don't let that fool you. This guy was a professional football player before he traded his cleats for CrossFit shoes (seriously, Google him!). Jeffrey knows what it takes to level up, both on the field and in the gym. He's the coach who'll push you to your limits while making sure you're as comfortable as a cat on a warm windowsill. Depending on the group he's coaching, he's either 'the butcher'-serving up intense workouts-or the 'listening ear,' offering a dose of empathy with your exercise. Like a chameleon, he adapts to what you need, ensuring each session is a win-win."
    },
    {
      name: "Jari Jansen",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jari.png",
      story: "Meet Jari Jansen, the guy who was so eager to join CrossFit Leiden, he showed up during our opening week in 2016-before he even cracked open a textbook at CIOS. Talk about being ahead of the game! With roots in sunny Curacao, Jari brings a tropical flair to our Dutch climate. Over the years, he's evolved from an eager intern to a coach who's basically a Swiss Army knife of skills. Need to fix an injury? Jari's your guy. Want to train future coaches? He's on it. You'll catch him leading a few classes, but he's mostly the 'Yoda' of workshops, seminars, and educational programs. And get this: he's so fit, he can grow muscles just by looking at a kettlebell. No, really!"
    },
    {
      name: "Sem Li",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20sem.png",
      story: "Meet Sem Li, the coach whose smile is as permanent as a tattoo. He's the guy who'll lift your spirits, no matter what kind of day you're having. And while he's at it, don't be surprised if he tries to sell you something from his Panda Power brand-talk about multitasking! Sem is a big fan of Olympic weightlifting, and you're more likely to spot a panda running than see him jog. He's the kind of coach who makes a point to connect with everyone in his classes, offering a unique blend of energy and friendliness. And get this: he's so committed to CrossFit that he's up training at 5 a.m., just so he can coach you in the 6 a.m. class. Now that's dedication!"
    },
    {
      name: "Saskia",
      role: "General (Client Satisfaction) Manager",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/saskia.png",
      story: "Meet Saskia, our General Manager and Client Success Manager, who's so good at her job, she might as well wear a superhero cape. A few years ago, she joined CrossFit Leiden to kick her back pain to the curb, and let's just say, she's never looked back—literally! Saskia enjoyed the gym so much that she traded her scrubs in the emergency room for workout gear, shifting from saving lives in the ER to helping people avoid it altogether. Talk about a career pivot! She's the wizard behind the curtain, managing the day-to-day operations and making sure all our members are on the fast track to success. With Saskia at the helm, you're not just joining a gym; you're joining a success story in the making."
    },
    {
      name: "Natália",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Natalia.png",
      story: "Meet Natália: our Brazilian bundle of energy and newest addition to the CFL coaching crew! 🇧🇷 Starting July 1st, Natália joins the team and you'll be seeing her in group classes, Teens sessions, and maybe even running circles around the rest of us (literally, she loves running). With a degree in Physical Education and a lifelong passion for movement, Natália brings creativity, positivity, and good vibes to every workout. Originally from Brazil, she moved to the Netherlands in 2022 for love and luckily for us, she's now calling Leiden home. She's all about helping you become stronger, healthier, and more confident, both physically and mentally. Whether you're crushing a WOD, learning your first pull-up, or just trying to survive the warm-up, Natália will be right there cheering you on (with that signature Brazilian flair)."
    },
    {
      name: "Max",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20max.png",
      story: "Max has worked as a coach for several years, including the last four as a personal trainer and CrossFit coach in a PT studio. He is passionate about hiking and wild camping, activities he loves to enjoy with his family, and is always ready for a new adventure. As a coach, Max loves creating a fun and positive atmosphere. His favorite WOD is 'Cindy' because it's perfectly balanced – not too long, not too short, and suitable for everyone to join in. Having already led a few classes as a guest coach and trained with us for several weeks. Max felt immediately welcome in our community and is looking forward to meeting everyone. If you see him in the box don't hesitate to introduce yourself and have a chat with him."
    },
    {
      name: "Erin",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Erin.png",
      story: "Meet Erin. Back on the floor and bringing the good vibes 💃🏋️‍♀️ Erin first joined the CrossFit Leiden coaching team in 2019. After a short break (because life happens), she's back and we're beyond happy to have her energy, knowledge, and dance moves in the gym again. Outside of CrossFit, Erin works at the Dutch Ministry of Defence as a researcher and advisor in work and mission experience. In short, she helps military professionals stay mentally strong, resilient, and ready. So yes, she knows a thing or two about mindset and performance under pressure. When she's not coaching or advising soldiers, you'll likely find her dancing. Erin teaches salsa in her free time and brings that same rhythm, passion, and connection to her coaching style. She's also a big fan of community events, so don't be surprised if she's the first to say yes to a Flex Friday or a social hangout. Erin is back and ready to coach you, challenge you, and maybe even sneak in a salsa step between sets. Give her a high five when you see her!"
    },
    {
      name: "Hoite",
      role: "Coach",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/hoite.png",
      story: "Meet Hoite, one of our dedicated coaches at CrossFit Leiden."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontmoet het Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Gewone mensen die je begrijpen en je helpen sterker te worden. Geen drill-sergeants, gewoon coaches die er voor je zijn.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Ons Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coaches.map((coach) => (
              <div key={coach.name} className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl">👤</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-cinnabar font-semibold mb-4">{coach.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{coach.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Coaches Matter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Waarom onze coaches het verschil maken</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Onze coaches zijn geen drill-sergeants. Het zijn gewone mensen met drukke levens, net als jij.
              Ze begrijpen hoe het voelt om te twijfelen, om geen tijd te hebben, om onzeker te zijn.
            </p>
            <p>
              <strong>Persoonlijke aandacht staat voorop.</strong> We kennen je naam, we onthouden je doelen,
              en we passen elke training aan op jouw niveau. Of je nu voor het eerst een barbell vasthoudt of al
              jaren traint – je krijgt de begeleiding die jij nodig hebt.
            </p>
            <p>
              Bij CrossFit Leiden coach je geen nummer. Je bent een persoon met een eigen verhaal,
              en we helpen je dat verhaal sterker te maken.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        title="Klaar om kennis te maken?"
        description="Plan je gratis intro en ontmoet het team. Geen verplichtingen, gewoon een goed gesprek over jouw doelen."
        buttonText="Plan een Gratis Intro"
        href="/starten"
      />
    </>
  );
}
