import Link from "next/link";

export default function Blog() {
  // Placeholder blog posts - in productie zou dit komen uit een CMS of markdown files
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips voor CrossFit Beginners",
      excerpt: "Net begonnen met CrossFit? Deze 5 tips helpen je om veilig en effectief te starten.",
      date: "15 Jan 2025",
      category: "Training Tips",
      image: "📝",
    },
    {
      id: 2,
      title: "Community Spotlight: Meet Marieke",
      excerpt: "Marieke (39, moeder van 2) vertelt hoe CrossFit haar leven veranderde.",
      date: "8 Jan 2025",
      category: "Community",
      image: "👩",
    },
    {
      id: 3,
      title: "Voedingstips voor Drukke Ouders",
      excerpt: "Gezond eten met weinig tijd? Deze meal prep hacks maken het makkelijk.",
      date: "3 Jan 2025",
      category: "Nutrition",
      image: "🍎",
    },
    {
      id: 4,
      title: "Hyrox: Alles wat je moet weten",
      excerpt: "Wat is Hyrox en hoe kun je je erop voorbereiden? Een complete guide.",
      date: "28 Dec 2024",
      category: "Events",
      image: "🏃",
    },
    {
      id: 5,
      title: "Recovery: Het Belang van Rust",
      excerpt: "Train hard, herstel harder. Waarom recovery net zo belangrijk is als je workouts.",
      date: "20 Dec 2024",
      category: "Training Tips",
      image: "😴",
    },
  ];

  const categories = ["Alle", "Training Tips", "Nutrition", "Community", "Events"];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-2xl">
            Tips, verhalen en updates van CrossFit Leiden. Blijf op de hoogte en leer meer over fitness, nutrition en onze community.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  cat === "Alle"
                    ? "bg-cinnabar text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-cinnabar font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-cinnabar transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-cinnabar font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Lees meer
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 bg-cinnabar text-white rounded-lg font-medium">1</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">2</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">3</button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-chinese-violet/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Blijf op de hoogte</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ontvang onze nieuwsbrief met de laatste blog posts, tips en updates van CrossFit Leiden.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Je email adres"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-chinese-violet focus:border-transparent"
              />
              <button type="submit" className="bg-chinese-violet text-white px-6 py-3 rounded-lg font-semibold hover:bg-chinese-violet/90 transition-all">
                Inschrijven
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
