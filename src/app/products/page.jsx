'use client';

import { products } from '@/data/products';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState, useTransition } from 'react';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const activeCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('search') || '');
  const [greeting, setGreeting] = useState('The whole atelier');

  const urlSearch = searchParams.get('search') || '';
  useEffect(() => {
    setSearchQuery(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning. Going for shop?');
    else if (hour < 17) setGreeting('Good afternoon. The midday atelier');
    else setGreeting('Good evening. The evening archive');
  }, []);

  const categories = ['all', 'outerwear', 'knitwear', 'shirts', 'dresses', 'denim', 'accessories'];

  const processedProducts = useMemo(() => {
    const cleanQuery = searchQuery.trim().replace(/\s+/g, ' ').toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category?.toLowerCase() === activeCategory;
      const matchesSearch = !cleanQuery ||
                            product.name?.toLowerCase().includes(cleanQuery) ||
                            product.category?.toLowerCase().includes(cleanQuery) ||
                            product.tag?.toLowerCase().includes(cleanQuery);
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-low') return [...filtered].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [searchQuery, activeCategory, sortBy]);

  const updateUrlParam = (key, value) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === 'all' || !value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`/products?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <main className="bg-[#FAF8F5] dark:bg-[#120c08] min-h-screen text-[#1C140E] dark:text-[#faf9f6] pt-16 pb-32 px-4 sm:px-8 md:px-12 transition-all duration-300 selection:bg-stone-200">

      {/* header */}
      <header className="max-w-[1400px] mx-auto mb-16 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.3em] font-bold text-stone-400 dark:text-stone-500 uppercase">
            Collection &middot; A/W 26
          </span>
          {isPending && (
            <span className="h-1.5 w-1.5 rounded-full bg-[#b96a4a] animate-pulse" title="Syncing..." />
          )}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight transition-all duration-500">
          {greeting}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed font-light">
          Displaying {processedProducts.length} unique {processedProducts.length === 1 ? 'piece' : 'pieces'} sourced and cut from sustainable natural fibers. Produced in strictly limited numbers.
        </p>
      </header>

      /* navigation */
      <section className="max-w-[1400px] mx-auto border-b border-stone-200 dark:border-[#2d2117] pb-8 mb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          /* Categories Horizontal Scroller */
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 scroll-smooth whitespace-nowrap py-1">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => updateUrlParam('category', category)}
                  className={`text-[11px] font-medium tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 ease-out active:scale-95 ${
                    isActive
                      ? 'bg-[#1C140E] dark:bg-[#faf9f6] text-white dark:text-[#120c08] shadow-md shadow-stone-900/10'
                      : 'bg-[#F3EFEA]/70 dark:bg-[#1a120c] text-[#1C140E]/80 dark:text-[#faf9f6]/80 hover:text-[#1C140E] dark:hover:text-[#faf9f6] hover:bg-[#EFEBE0] dark:hover:bg-[#221912] border border-stone-200/40 dark:border-[#2d2117]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          /* search bar */
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full lg:w-auto">

            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find a specific style..."
                className="w-full bg-transparent border-b border-stone-300 dark:border-[#2d2117] pb-2 pt-1 text-sm tracking-wide font-light placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-[#1C140E] dark:focus:border-[#faf9f6] transition-colors duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-0 top-1.5 text-[10px] text-stone-400 dark:text-stone-500 hover:text-[#b96a4a] uppercase tracking-widest font-semibold transition-colors"
                  aria-label="Clear Search"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="relative min-w-[160px] border-b border-stone-300 dark:border-[#2d2117] pb-2">
              <select
                value={sortBy}
                onChange={(e) => updateUrlParam('sort', e.target.value)}
                className="w-full bg-transparent appearance-none cursor-pointer text-xs font-semibold tracking-widest uppercase text-[#1C140E]/90 dark:text-[#faf9f6]/90 focus:outline-none focus:text-[#1C140E] dark:focus:text-[#faf9f6]"
              >
                <option value="featured" className="text-black">Sort: Featured</option>
                <option value="price-low" className="text-black">Price: Low to High</option>
                <option value="price-high" className="text-black">Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute right-0 bottom-2.5 text-stone-400 dark:text-stone-500">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      /* conatainer  */
      <div className="max-w-[1400px] mx-auto relative min-h-[45vh]">

        {isPending && (
          <div className="absolute inset-0 bg-[#FAF8F5]/60 dark:bg-[#120c08]/60 z-20 backdrop-blur-[1px] flex items-center justify-center transition-all duration-300">
            <div className="flex flex-col items-center gap-3 bg-white dark:bg-[#1a120c] px-6 py-4 rounded-xl shadow-xl shadow-stone-200/50 dark:shadow-black/30 border border-stone-100 dark:border-[#2d2117] animate-fade-in">
              <svg className="animate-spin h-5 w-5 text-[#b96a4a]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span className="text-[9px] tracking-[0.25em] font-semibold uppercase text-stone-500 dark:text-stone-400">Refining Selection</span>
            </div>
          </div>
        )}

        {processedProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center px-6 max-w-md mx-auto space-y-6 animate-fade-in">
            <div className="h-12 w-12 rounded-full bg-[#F3EFEA] dark:bg-[#1a120c] flex items-center justify-center text-stone-400 dark:text-stone-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="font-serif italic text-xl text-stone-800 dark:text-stone-200">
                "We looked closely, but couldn't find a match."
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                We don't have pieces matching those exact parameters right now. Try adjusting your search query, or clear your filters to explore the full collection.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                router.push('/products');
              }}
              className="text-[11px] font-semibold tracking-widest uppercase bg-[#1C140E] dark:bg-[#faf9f6] text-white dark:text-[#120c08] px-6 py-3.5 rounded-full hover:bg-stone-800 dark:hover:bg-stone-200 transition-all duration-300 active:scale-95 shadow-md shadow-stone-900/10"
            >
              View Full Collection
            </button>
          </div>
        ) : (

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12 transition-all duration-500">
            {processedProducts.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`} className="group block space-y-3">

                <div className="aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-[#F3EFEA] dark:bg-[#1a120c] border border-stone-200/30 dark:border-[#2d2117] relative shadow-sm group-hover:shadow-md transition-all duration-500 ease-out">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />

                  {item.tag && (
                    <span className="absolute top-3 left-3 bg-white/95 dark:bg-[#120c08]/90 backdrop-blur-md text-[#1C140E] dark:text-[#faf9f6] text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-[2px] shadow-sm transform group-hover:translate-y-[-1px] transition-transform duration-300">
                      {item.tag}
                    </span>
                  )}

                  <div className="absolute inset-0 bg-stone-950/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                <div className="flex flex-col gap-0.5 px-0.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs font-normal text-stone-800 dark:text-stone-200 tracking-wide group-hover:text-[#b96a4a] transition-colors duration-300 truncate max-w-[80%]">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#1C140E] dark:text-[#faf9f6] shrink-0">
                      ${item.price}
                    </p>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500 font-medium">
                    {item.category}
                  </p>
                </div>

              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}