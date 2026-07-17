'use client';

import Link from 'next/link';
import { useState } from 'react';


const journalEntries = [
  {
    id: 1,
    category: 'Style Guide',
    title: 'How to Build a Capsule Wardrobe',
    excerpt: 'Simplify your morning routine with these 5 essential pieces that work for every occasion.',
    date: 'July 15, 2026',
    readTime: '4 min read',
  },
  {
    id: 2,
    category: 'Craftsmanship',
    title: 'The Art of Natural Fibers',
    excerpt: 'Why we choose organic cotton and linen, and how they age gracefully over time.',
    date: 'July 10, 2026',
    readTime: '6 min read',
  },
  {
    id: 3,
    category: 'Behind the Scenes',
    title: 'Our Design Process',
    excerpt: 'A look inside the studio where our sketches become tangible garments.',
    date: 'July 05, 2026',
    readTime: '5 min read',
  },
  {
    id: 4,
    category: 'Lifestyle',
    title: 'Slow Living in the City',
    excerpt: 'Finding quiet moments and maintaining a sustainable lifestyle in a fast-paced environment.',
    date: 'June 28, 2026',
    readTime: '3 min read',
  },
];

const categories = ['All', 'Style Guide', 'Craftsmanship', 'Behind the Scenes', 'Lifestyle'];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? journalEntries 
    : journalEntries.filter((post) => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#faf9f6] dark:bg-[#120c08] text-[#1c140e] dark:text-[#faf9f6] py-16 px-4 sm:px-6 lg:px-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">The Journal</h1>
          <p className="text-lg text-gray-600 dark:text-stone-400 max-w-xl">
            Reflections on style, craftsmanship, and the slow-living philosophy that defines our collection.
          </p>
        </header>

        {/* filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-[#1C140E] dark:bg-[#faf9f6] text-white dark:text-[#120c08] border-[#1C140E] dark:border-[#faf9f6]'
                  : 'bg-transparent border-gray-300 dark:border-[#2d2117] hover:border-gray-500 dark:hover:border-stone-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group flex flex-col gap-4">
              <Link href={`/journal`} className="block aspect-[16/10] bg-stone-200 dark:bg-[#1a120c] rounded-2xl overflow-hidden mb-2 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-400 opacity-50 group-hover:scale-105 transition-transform duration-500">
                  Article Preview
                </div>
              </Link>
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6C5DD3] dark:text-[#a094f6]">
                  {post.category}
                </span>
                <h2 className="text-2xl font-semibold leading-snug group-hover:underline decoration-2 underline-offset-4">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 pt-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}