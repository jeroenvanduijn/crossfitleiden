"use client";

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';

// Diamond shape SVG component
const Diamond = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style}>
    <polygon points="50,0 100,50 50,100 0,50" fill="currentColor" />
  </svg>
);

type Question = {
  text: string;
  options: string[];
};

type Section = {
  section: string;
  icon: string;
  questions: Question[];
};

type Result = {
  range: [number, number];
  level: string;
  color: string;
  title: string;
  description: string;
  insight: string;
};

type Content = {
  questions: Section[];
  results: Result[];
  startScreen: {
    title: string;
    tagline: string;
    description: string;
    duration: string;
    questionCount: string;
    personalProfile: string;
    startButton: string;
    noJudgement: string;
  };
  resultScreen: {
    yourResults: string;
    of: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    ctaDescription: string;
    retakeTest: string;
  };
  questionScreen: {
    of: string;
  };
};

export default function FitnessRealityCheck() {
  const locale = useLocale();
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const content: Record<string, Content> = {
    nl: {
      questions: [
        {
          section: "Bewegen & Fitness",
          icon: "💪",
          questions: [
            {
              text: "Hoeveel dagen per week ben je minimaal 30 minuten fysiek actief?",
              options: ["0 dagen", "1-2 dagen", "3-4 dagen", "5+ dagen"]
            },
            {
              text: "Hoe zou je je huidige kracht omschrijven?",
              options: [
                "Ik worstel met basistaken",
                "Ik red dagelijkse taken maar vermijd zware dingen",
                "Ik voel me redelijk sterk",
                "Ik voel me sterk en zelfverzekerd"
              ]
            },
            {
              text: "Wanneer heb je voor het laatst getraind tot je zweet en hijgde?",
              options: [
                "Meer dan een maand geleden",
                "2-4 weken geleden",
                "1-2 weken geleden",
                "In de afgelopen 7 dagen"
              ]
            },
            {
              text: "Vergeleken met mensen van jouw leeftijd, is je fitnessniveau:",
              options: ["Veel lager", "Iets lager", "Ongeveer gelijk", "Hoger"]
            }
          ]
        },
        {
          section: "Energie & Dagelijks Leven",
          icon: "⚡",
          questions: [
            {
              text: "Hoe voel je je meestal overdag?",
              options: [
                "Moe het grootste deel van de tijd",
                "Energie komt en gaat",
                "Meestal energiek",
                "Constant energiek"
              ]
            },
            {
              text: "Na een normale werkdag heb je nog energie over voor beweging of sport.",
              options: ["Nooit", "Zelden", "Soms", "Vaak"]
            },
            {
              text: "Trappen lopen, snel wandelen of boodschappen dragen voelt:",
              options: ["Heel zwaar", "Zwaar maar te doen", "Gemakkelijk", "Gemakkelijk en moeiteloos"]
            }
          ]
        },
        {
          section: "Slaap & Herstel",
          icon: "🌙",
          questions: [
            {
              text: "Hoeveel uur slaap je gemiddeld per nacht?",
              options: ["Minder dan 6", "6-7", "7-8", "Meer dan 8"]
            },
            {
              text: "Hoe uitgerust voel je je wanneer je wakker wordt?",
              options: [
                "Bijna nooit uitgerust",
                "Soms uitgerust",
                "Meestal uitgerust",
                "Bijna altijd uitgerust"
              ]
            },
            {
              text: "Word je 's nachts wakker of heb je moeite met inslapen?",
              options: [
                "Bijna elke nacht",
                "Een paar nachten per week",
                "Af en toe",
                "Zelden of nooit"
              ]
            }
          ]
        },
        {
          section: "Voeding & Gewoontes",
          icon: "🥗",
          questions: [
            {
              text: "Hoe zou je je eetgewoonten omschrijven?",
              options: [
                "Meestal ongepland en inconsistent",
                "Redelijk maar vaak gehaast of gemaksvoeding",
                "Meestal gebalanceerd met wat structuur",
                "Gebalanceerd, gestructureerd en bewust"
              ]
            },
            {
              text: "Hoe vaak eet je groenten en fruit?",
              options: ["Bijna nooit", "Een paar dagen per week", "De meeste dagen", "Elke dag"]
            },
            {
              text: "Hoe vaak vertrouw je op suiker, snacks of quick fixes voor energie?",
              options: [
                "Meerdere keren per dag",
                "Dagelijks",
                "Een paar keer per week",
                "Zelden"
              ]
            }
          ]
        },
        {
          section: "Stress & Mindset",
          icon: "🧠",
          questions: [
            {
              text: "Hoeveel stress ervaar je in het dagelijks leven?",
              options: ["Heel veel", "Veel", "Gemiddeld", "Weinig"]
            },
            {
              text: "Als het leven druk wordt, zijn bewegen en trainen het eerste wat wegvalt.",
              options: ["Altijd", "Vaak", "Soms", "Zelden"]
            },
            {
              text: "Hoe zelfverzekerd ben je dat je de komende 3 maanden consistent kunt trainen?",
              options: [
                "Helemaal niet zelfverzekerd",
                "Een beetje zelfverzekerd",
                "Redelijk zelfverzekerd",
                "Zeer zelfverzekerd"
              ]
            }
          ]
        },
        {
          section: "Motivatie & Potentieel",
          icon: "🎯",
          questions: [
            {
              text: "Wat beschrijft je huidige situatie het beste?",
              options: [
                "Ik weet dat ik iets moet doen, maar blijf uitstellen",
                "Ik probeer af en toe iets, maar het blijft nooit hangen",
                "Ik ben actief, maar voel dat ik veel beter kan",
                "Ik ben klaar om me te committeren en te verbeteren"
              ]
            },
            {
              text: "Wat zou het verbeteren van je fitness je het meeste geven?",
              options: [
                "Minder pijn en ongemak",
                "Meer energie en zelfvertrouwen",
                "Betere prestaties in dagelijks leven of sport",
                "Al het bovenstaande"
              ]
            }
          ]
        }
      ],
      results: [
        {
          range: [18, 35],
          level: "Wake-up call",
          color: "#EF4C37",
          title: "Tijd voor een frisse start",
          description: "Je gebruikt momenteel niet je volledige fysieke potentieel. Het dagelijks leven kost meer energie dan zou moeten.",
          insight: "Het goede nieuws? Vooruitgang komt snel zodra je begint te bewegen met structuur en begeleiding. Veel van onze leden zijn precies begonnen waar jij nu bent."
        },
        {
          range: [36, 50],
          level: "Ruimte om te groeien",
          color: "#F7CB15",
          title: "Je bent klaar voor meer",
          description: "Je doet sommige dingen goed, maar consistentie ontbreekt. Je kent het verschil tussen 'proberen' en 'trainen'.",
          insight: "Met het juiste plan en een ondersteunende community kunnen je energie en kracht binnen enkele weken veranderen."
        },
        {
          range: [51, 62],
          level: "Solide basis",
          color: "#0CBABA",
          title: "Klaar voor het volgende level",
          description: "Je hebt al een goede basis. Nu gaat het om richting, uitdaging en progressie.",
          insight: "Gestructureerde training en expert coaching helpen je ontdekken wat de volgende stap is. Je hebt de basis gelegd, nu gaan we erop bouwen."
        },
        {
          range: [63, 72],
          level: "Hoog potentieel",
          color: "#7B6D8D",
          title: "Je bent klaar om verder te gaan",
          description: "Je bent fit, gemotiveerd en klaar om het op te voeren. Je hebt geen motivatie nodig, je hebt de juiste omgeving nodig.",
          insight: "Dit is waar coaching, community en slimme training het echte verschil maken. Sluit je aan bij mensen die jouw drive delen."
        }
      ],
      startScreen: {
        title: "Fitness Reality Check",
        tagline: "Tijd om eerlijk te zijn.",
        description: "Deze korte test laat zien waar je nu staat. En wat mogelijk is wanneer je gaat trainen met de juiste begeleiding.",
        duration: "7-10 minuten",
        questionCount: "18 vragen",
        personalProfile: "Persoonlijk profiel",
        startButton: "Start de test",
        noJudgement: "Geen oordeel. Alleen helderheid."
      },
      resultScreen: {
        yourResults: "Jouw Resultaat",
        of: "van",
        ctaTitle: "Je score laat zien waar je vandaag staat.",
        ctaSubtitle: "Het bepaalt niet waar je naartoe kunt.",
        ctaButton: "Plan je gratis intake",
        ctaDescription: "We bekijken je resultaten samen en laten je precies zien hoe je verder komt.\nGeen druk. Alleen een helder plan.",
        retakeTest: "Test opnieuw doen"
      },
      questionScreen: {
        of: "van"
      }
    },
    en: {
      questions: [
        {
          section: "Movement & Fitness",
          icon: "💪",
          questions: [
            {
              text: "How many days per week are you physically active for at least 30 minutes?",
              options: ["0 days", "1–2 days", "3–4 days", "5+ days"]
            },
            {
              text: "How would you describe your current strength?",
              options: [
                "I struggle with basic daily tasks",
                "I manage daily tasks but avoid lifting heavy things",
                "I feel reasonably strong",
                "I feel strong and confident"
              ]
            },
            {
              text: "When was the last time you did a workout that made you sweat and breathe hard?",
              options: [
                "More than a month ago",
                "2–4 weeks ago",
                "1–2 weeks ago",
                "In the last 7 days"
              ]
            },
            {
              text: "Compared to people your age, your fitness level is:",
              options: ["Much lower", "Slightly lower", "About the same", "Higher"]
            }
          ]
        },
        {
          section: "Energy & Daily Life",
          icon: "⚡",
          questions: [
            {
              text: "How do you usually feel during the day?",
              options: [
                "Tired most of the time",
                "Energy comes and goes",
                "Mostly energetic",
                "Consistently energetic"
              ]
            },
            {
              text: "After a normal workday, you still have energy left for movement or sport.",
              options: ["Never", "Rarely", "Sometimes", "Often"]
            },
            {
              text: "Stairs, walking fast or carrying groceries feels:",
              options: ["Very hard", "Hard but manageable", "Easy", "Easy and effortless"]
            }
          ]
        },
        {
          section: "Sleep & Recovery",
          icon: "🌙",
          questions: [
            {
              text: "How many hours do you sleep on average per night?",
              options: ["Less than 6", "6–7", "7–8", "More than 8"]
            },
            {
              text: "How rested do you feel when you wake up?",
              options: [
                "Almost never rested",
                "Sometimes rested",
                "Usually rested",
                "Almost always rested"
              ]
            },
            {
              text: "Do you wake up at night or have trouble falling asleep?",
              options: [
                "Almost every night",
                "A few nights per week",
                "Occasionally",
                "Rarely or never"
              ]
            }
          ]
        },
        {
          section: "Food & Habits",
          icon: "🥗",
          questions: [
            {
              text: "How would you describe your eating habits?",
              options: [
                "Mostly unplanned and inconsistent",
                "Reasonable but often rushed or convenience-based",
                "Mostly balanced with some structure",
                "Balanced, structured and intentional"
              ]
            },
            {
              text: "How often do you eat vegetables and fruit?",
              options: ["Almost never", "A few days per week", "Most days", "Every day"]
            },
            {
              text: "How often do you rely on sugar, snacks or quick fixes for energy?",
              options: [
                "Multiple times per day",
                "Daily",
                "A few times per week",
                "Rarely"
              ]
            }
          ]
        },
        {
          section: "Stress & Mindset",
          icon: "🧠",
          questions: [
            {
              text: "How much stress do you experience in daily life?",
              options: ["Very high", "High", "Moderate", "Low"]
            },
            {
              text: "When life gets busy, movement and training are the first things to drop.",
              options: ["Always", "Often", "Sometimes", "Rarely"]
            },
            {
              text: "How confident are you that you could train consistently for the next 3 months?",
              options: [
                "Not confident at all",
                "Slightly confident",
                "Fairly confident",
                "Very confident"
              ]
            }
          ]
        },
        {
          section: "Motivation & Potential",
          icon: "🎯",
          questions: [
            {
              text: "What best describes your current situation?",
              options: [
                "I know I should do something, but I keep postponing",
                "I try now and then, but it never really sticks",
                "I am active, but I feel I could do much better",
                "I am ready to commit and improve"
              ]
            },
            {
              text: "What would improving your fitness give you most?",
              options: [
                "Less pain and discomfort",
                "More energy and confidence",
                "Better performance in daily life or sports",
                "All of the above"
              ]
            }
          ]
        }
      ],
      results: [
        {
          range: [18, 35],
          level: "Wake-up call",
          color: "#EF4C37",
          title: "Time for a fresh start",
          description: "You're currently not using your full physical potential. Daily life costs more energy than it should.",
          insight: "The good news? Progress comes fast once you start moving with structure and guidance. Many of our members started exactly where you are now."
        },
        {
          range: [36, 50],
          level: "Room to grow",
          color: "#F7CB15",
          title: "You're ready for more",
          description: "You're doing some things right, but consistency is missing. You know the difference between 'trying' and 'training'.",
          insight: "With the right plan and a supportive community, your energy and strength can change within weeks."
        },
        {
          range: [51, 62],
          level: "Solid base",
          color: "#0CBABA",
          title: "Ready for the next level",
          description: "You already have a decent base. Now it's about direction, challenge and progression.",
          insight: "Structured training and expert coaching will help you unlock what's next. You've built the foundation, now let's build on it."
        },
        {
          range: [63, 72],
          level: "High potential",
          color: "#7B6D8D",
          title: "You're ready to push further",
          description: "You're fit, motivated and ready to take it up a notch. You don't need more motivation, you need the right environment.",
          insight: "This is where coaching, community and smart training make the real difference. Join people who share your drive."
        }
      ],
      startScreen: {
        title: "Fitness Reality Check",
        tagline: "Time to be honest.",
        description: "This short test shows you where you stand right now. And what's possible when you start training with the right guidance.",
        duration: "7-10 minutes",
        questionCount: "18 questions",
        personalProfile: "Personal profile",
        startButton: "Start the test",
        noJudgement: "No judgement. Just clarity."
      },
      resultScreen: {
        yourResults: "Your Results",
        of: "of",
        ctaTitle: "Your score shows where you are today.",
        ctaSubtitle: "It doesn't define where you can go.",
        ctaButton: "Plan your free intake",
        ctaDescription: "We'll look at your results together and show you exactly how to move forward.\nNo pressure. Just a clear plan.",
        retakeTest: "Take the test again"
      },
      questionScreen: {
        of: "of"
      }
    }
  };

  const t = content[locale as keyof typeof content] || content.en;
  const questions = t.questions;
  const results = t.results;

  const totalQuestions = questions.reduce((sum, s) => sum + s.questions.length, 0);

  const getCurrentQuestionIndex = () => {
    let index = 0;
    for (let i = 0; i < currentSection; i++) {
      index += questions[i].questions.length;
    }
    return index + currentQuestion;
  };

  const progress = ((getCurrentQuestionIndex()) / totalQuestions) * 100;

  const handleAnswer = (optionIndex: number) => {
    if (isAnimating) return;

    setSelectedOption(optionIndex);
    const questionIndex = getCurrentQuestionIndex();
    const score = optionIndex + 1;

    setAnswers(prev => ({ ...prev, [questionIndex]: score }));

    setIsAnimating(true);

    setTimeout(() => {
      const currentSectionQuestions = questions[currentSection].questions;

      if (currentQuestion < currentSectionQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else if (currentSection < questions.length - 1) {
        setCurrentSection(prev => prev + 1);
        setCurrentQuestion(0);
      } else {
        setShowResult(true);
        track('Fitness Test Completed', { score: calculateScore(), locale });
      }

      setSelectedOption(null);
      setIsAnimating(false);
    }, 400);
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
  };

  const getResult = () => {
    const score = calculateScore();
    return results.find(r => score >= r.range[0] && score <= r.range[1]) || results[0];
  };

  const restart = () => {
    setStarted(false);
    setCurrentSection(0);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    track('Fitness Test Restarted', { locale });
  };

  const handleStart = () => {
    setStarted(true);
    track('Fitness Test Started', { locale });
  };

  // Start Screen
  if (!started) {
    return (
      <div className="min-h-screen bg-organic-bg relative overflow-hidden">
        <Diamond
          className="absolute -top-20 -right-20 w-80 h-80 text-[#EF4C37] opacity-10 rotate-12"
        />
        <Diamond
          className="absolute -bottom-32 -left-32 w-96 h-96 text-[#F7CB15] opacity-10 -rotate-12"
        />
        <Diamond
          className="absolute top-1/3 -left-16 w-48 h-48 text-[#0CBABA] opacity-5 rotate-45"
        />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-xl w-full text-center">

            <div className="mb-8">
              <img
                src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/logo/Untitled%20design.png"
                alt="CrossFit Leiden"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">CrossFit Leiden</p>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              {t.startScreen.title}
            </h1>

            <p className="text-xl text-gray-600 mb-3">
              {t.startScreen.tagline}
            </p>

            <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
              {t.startScreen.description}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center gap-2 text-gray-600 bg-stone-50 px-4 py-2 rounded-full">
                <span className="text-[#0CBABA]">⏱</span> {t.startScreen.duration}
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-stone-50 px-4 py-2 rounded-full">
                <span className="text-[#F7CB15]">📊</span> {t.startScreen.questionCount}
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-stone-50 px-4 py-2 rounded-full">
                <span className="text-[#EF4C37]">🎯</span> {t.startScreen.personalProfile}
              </div>
            </div>

            <button
              onClick={handleStart}
              className="group inline-flex items-center gap-3 bg-[#EF4C37] hover:bg-[#d94430] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#EF4C37]/20 hover:-translate-y-0.5"
            >
              {t.startScreen.startButton}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="mt-6 text-gray-400 text-sm">
              {t.startScreen.noJudgement}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult) {
    const result = getResult();
    const score = calculateScore();
    const percentage = Math.round((score / 72) * 100);

    return (
      <div className="min-h-screen bg-organic-bg relative overflow-hidden">
        <Diamond
          className="absolute -top-20 -right-20 w-80 h-80 opacity-10 rotate-12"
          style={{ color: result.color }}
        />
        <Diamond
          className="absolute -bottom-32 -left-32 w-96 h-96 text-[#EF4C37] opacity-5 -rotate-12"
        />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-xl w-full">

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-600 text-sm font-medium mb-8">
                {t.resultScreen.yourResults}
              </div>

              <div className="relative mb-8">
                <div className="w-36 h-36 mx-auto relative">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      stroke="#f3f4f6"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      stroke={result.color}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${percentage * 4.02} 402`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-gray-900">{score}</span>
                    <span className="text-gray-400 text-sm">{t.resultScreen.of} 72</span>
                  </div>
                </div>
              </div>

              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                style={{ backgroundColor: `${result.color}15`, color: result.color }}
              >
                {result.level}
              </div>

              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {result.title}
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {result.description}
              </p>

              <div
                className="rounded-2xl p-6 mb-10 text-left"
                style={{ backgroundColor: `${result.color}08`, borderLeft: `4px solid ${result.color}` }}
              >
                <p className="text-gray-700 leading-relaxed">
                  👉 {result.insight}
                </p>
              </div>
            </div>

            <div className="bg-[#EF4C37] rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {t.resultScreen.ctaTitle}
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                {t.resultScreen.ctaSubtitle}
              </p>

              <a
                href={`https://www.crossfitleiden.com/${locale}/gratis-intro`}
                className="inline-flex items-center gap-3 bg-organic-bg text-[#EF4C37] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 mb-4"
                onClick={() => track('Fitness Test CTA Click', { score, level: result.level, locale })}
              >
                {t.resultScreen.ctaButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <p className="text-white/70 text-sm whitespace-pre-line">
                {t.resultScreen.ctaDescription}
              </p>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={restart}
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm underline underline-offset-4"
              >
                {t.resultScreen.retakeTest}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  const section = questions[currentSection];
  const question = section.questions[currentQuestion];
  const questionNumber = getCurrentQuestionIndex() + 1;

  return (
    <div className="min-h-screen bg-organic-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100">
        <div
          className="h-full bg-[#EF4C37] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-sm">
        <span className="text-gray-400 font-medium">{questionNumber} {t.questionScreen.of} {totalQuestions}</span>
        <span className="flex items-center gap-2 text-gray-600 bg-stone-50 px-3 py-1.5 rounded-full">
          <span>{section.icon}</span>
          {section.section}
        </span>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-xl w-full">
          <div
            className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 leading-relaxed text-center">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnimating}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 group
                    ${selectedOption === index
                      ? 'bg-[#EF4C37] border-[#EF4C37] text-white scale-[0.98]'
                      : 'bg-organic-bg border-gray-200 hover:border-[#EF4C37] hover:bg-[#EF4C37]/5'
                    }
                    ${isAnimating && selectedOption !== index ? 'opacity-50' : ''}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all
                      ${selectedOption === index
                        ? 'border-white bg-organic-bg text-[#EF4C37]'
                        : 'border-gray-300 text-gray-400 group-hover:border-[#EF4C37] group-hover:text-[#EF4C37]'
                      }
                    `}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={`text-lg ${selectedOption === index ? 'text-white' : 'text-gray-700'}`}>
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="flex gap-1">
          {questions.map((s, sIndex) => (
            <div key={sIndex} className="flex gap-1">
              {s.questions.map((_, qIndex) => {
                const idx = questions.slice(0, sIndex).reduce((sum, sec) => sum + sec.questions.length, 0) + qIndex;
                const isCurrent = sIndex === currentSection && qIndex === currentQuestion;
                const isAnswered = answers[idx] !== undefined;
                return (
                  <div
                    key={qIndex}
                    className={`w-2 h-2 rounded-full transition-all duration-300
                      ${isCurrent ? 'bg-[#EF4C37] scale-150' : isAnswered ? 'bg-[#EF4C37]/40' : 'bg-gray-200'}
                    `}
                  />
                );
              })}
              {sIndex < questions.length - 1 && <div className="w-3" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
