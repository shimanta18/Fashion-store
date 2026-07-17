import { products } from '@/data/products';
import Link from 'next/link';

export default function HomePage() {
  
  const showcaseItems = products.slice(0, 8);

  const materials = [
    { name: "Selvedge Denim", highlight: true },
    { name: "Merino", highlight: false },
    { name: "Nappa Leather", highlight: true },
    { name: "Belgian Linen", highlight: false },
    { name: "Italian Wool", highlight: true },
    { name: "Cashmere", highlight: false }
  ];

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#120c08] min-h-screen overflow-x-hidden transition-colors duration-300">
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll 22s linear infinite;
        }
      `}</style>
      
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 items-center">
        
        <div className="md:col-span-6 lg:col-span-5 space-y-6 md:space-y-8 lg:pr-8 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="space-y-3 md:space-y-4 w-full">
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-medium text-stone-400 dark:text-stone-500 uppercase block">
              Autumn / Winter 26
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C140E] dark:text-[#faf9f6] tracking-tight leading-[1.15] md:leading-[1.12]">
              A wardrobe, <br />
              <span className="italic text-[#b96a4a] font-normal font-serif lowercase">quietly</span> <br />
              considered.
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm font-light mx-auto md:mx-0">
              Cut in Italy from mills we've worked with for a decade. Enduring silhouettes, made in editions small enough to feel personal.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
            <Link 
              href="/products" 
              className="w-full sm:w-auto text-center inline-block bg-[#1C140E] dark:bg-[#faf9f6] text-white dark:text-[#120c08] text-[11px] font-semibold tracking-widest uppercase px-7 py-4 rounded-full hover:bg-amber-950 dark:hover:bg-amber-100 transition-all shadow-sm active:scale-95"
            >
              Shop The Collection
            </Link>
            
            <Link 
              href="/products?category=outerwear" 
              className="text-[11px] font-semibold tracking-widest uppercase text-[#1C140E] dark:text-[#faf9f6] border-b border-[#1C140E] dark:border-[#faf9f6] pb-0.5 hover:text-amber-800 hover:border-amber-800 transition-colors"
            >
              Outerwear
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 md:pt-8 border-t border-slate-200/60 dark:border-[#2d2117] w-full max-w-sm">
            <div>
              <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1C140E] dark:text-[#faf9f6] block">12+</span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 block mt-1">Mills</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1C140E] dark:text-[#faf9f6] block">200</span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 block mt-1">Editions / Yr</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1C140E] dark:text-[#faf9f6] block">36</span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 block mt-1">Countries</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-4 h-[45vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] w-full rounded-sm overflow-hidden bg-slate-100 dark:bg-[#1a120c] shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=600&auto=format&fit=crop" 
            alt="Curated minimalist closet apparel setup" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="lg:col-span-3 hidden lg:flex flex-col gap-4 h-[65vh]">
          <div className="flex-1 rounded-sm overflow-hidden bg-slate-100 dark:bg-[#1a120c] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop" 
              alt="Minimalist baseline knit profile styling" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div className="flex-1 rounded-sm overflow-hidden bg-slate-100 dark:bg-[#1a120c] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop" 
              alt="Seasonal editorial overview detailing" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </section>

      <div className="w-full bg-[#1C140E] dark:bg-black py-4 md:py-5 overflow-hidden flex select-none">
        <div className="flex shrink-0 items-center gap-12 min-w-full animate-marquee">
          {[...materials, ...materials].map((mat, idx) => (
            <div key={idx} className="flex items-center gap-12 whitespace-nowrap">
              <span className={`text-sm md:text-base tracking-wider ${
                mat.highlight 
                  ? 'italic font-serif text-[#b96a4a]' 
                  : 'font-serif text-white/90'
              }`}>
                {mat.name}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
            </div>
          ))}
        </div>
        
        <div className="flex shrink-0 items-center gap-12 min-w-full animate-marquee" aria-hidden="true">
          {[...materials, ...materials].map((mat, idx) => (
            <div key={`clone-${idx}`} className="flex items-center gap-12 whitespace-nowrap">
              <span className={`text-sm md:text-base tracking-wider ${
                mat.highlight 
                  ? 'italic font-serif text-[#b96a4a]' 
                  : 'font-serif text-white/90'
              }`}>
                {mat.name}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        <div className="flex justify-between items-end pb-4 mb-8 md:mb-12 border-b border-slate-200/40 dark:border-[#2d2117]">
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.25em] font-medium text-stone-400 dark:text-stone-500 uppercase block">
              The Edit
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#1C140E] dark:text-[#faf9f6] font-normal tracking-tight">
              Featured pieces
            </h2>
          </div>
          
          <Link 
            href="/products" 
            className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1C140E] dark:text-[#faf9f6] border-b border-[#1C140E] dark:border-[#faf9f6] pb-1 hover:text-[#b96a4a] hover:border-[#b96a4a] transition-all whitespace-nowrap mb-1"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-10">
          {showcaseItems.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="group block">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-slate-50 dark:bg-[#1a120c] mb-2 md:mb-3 border border-slate-200/20 dark:border-[#2d2117]">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition duration-300" 
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 tracking-wide group-hover:underline truncate">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1C140E] dark:text-[#faf9f6]">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-16 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#EFEBE0] dark:bg-[#1a120c] rounded-sm overflow-hidden">
          
          <div className="h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh] w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
              alt="Model showcasing clean outerwear silhouette styling" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-24 space-y-4 md:space-y-6 text-[#1C140E] dark:text-[#faf9f6]">
            <div className="space-y-2 md:space-y-3">
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-medium text-stone-500 dark:text-stone-400 uppercase block">
                Journal &middot; Issue 04
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-normal tracking-tight leading-[1.2] lg:leading-[1.18]">
                Inside the atelier: cutting the camel wool overcoat.
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 leading-relaxed font-light max-w-md">
              A conversation with our head cutter on hand-finishing, thread counts, and why the shoulder is the soul of a great coat.
            </p>

            <div className="pt-2">
              <Link 
                href="/journal" 
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-[#1C140E] dark:text-[#faf9f6] border-b border-[#1C140E] dark:border-[#faf9f6] pb-1 hover:text-[#b96a4a] hover:border-[#b96a4a] transition-all"
              >
                Read The Story <span className="text-xs">&nearrow;</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}