"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import { blogPosts } from '@/lib/blog-data';

export default function Blog() {
  const locale = useLocale();

  const categories = ["All", "Training Tips", "Training & Coaching", "Community", "Getting Started", "Gym Philosophy", "Trainen & Herstel", "Voor Moeders", "Trainen & Leven", "Blessures & Schalen"];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-2xl">
            Tips, stories, and updates from CrossFit Leiden. Learn more about fitness, training, and our community.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-organic-bg">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-medium transition-all ${cat === "All"
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
              <article key={post.slug} className="bg-organic-bg rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-cinnabar font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-cinnabar transition-colors">
                    <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-cinnabar font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-chinese-violet/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our community and discover how CrossFit Leiden can help you get stronger, healthier, and more confident.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                  (window as any).openCFLPopup();
                }
              }}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
            >
              Schedule Your Free Intro
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
