import { products } from '@/data/products';
import Link from 'next/link';

export default function HomePage() {
  
  const showcaseItems = products.slice(0, 4);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* editorial asymetrical hero section  */}

      
      <section className="max-w-[1400px] mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Layout Box: Typography copy block */}
        <div className="md:col-span-5 space-y-6 lg:pr-8">
          <span className="text-[11px] tracking-[0.22em] font-semibold text-slate-400 uppercase block">
            Autumn / Winter 26
          </span>
          
          <h1 className="text-5xl lg:text-6xl font-serif text-[#1C140E] tracking-tight leading-[1.12]">
            A wardrobe, <br />
            <span className="italic text-[#b96a4a] font-normal font-serif lowercase">quietly</span> <br />
            considered.
          </h1>
          
          <p className="text-xs lg:text-sm text-slate-600 leading-relaxed max-w-sm font-light">
            Cut in Italy from mills we've worked with for a decade. Enduring silhouettes, made in editions small enough to feel personal.
          </p>
          
          {/* Action Row Elements */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 bg-[#1C140E] text-white text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-amber-950 transition-colors shadow-sm"
            >
              Shop The Collection
              <span className="text-xs">&rarr;</span>
            </Link>
            
            <Link 
              href="/products?category=outerwear" 
              className="text-[11px] font-semibold tracking-widest uppercase text-[#1C140E] border-b border-[#1C140E] pb-0.5 hover:text-amber-800 hover:border-amber-800 transition-colors"
            >
              Outerwear
            </Link>
          </div>
        </div>

        {/* Center Layout Box: Large Vertical Primary Banner */}
        <div className="md:col-span-4 h-[65vh] w-full rounded-sm overflow-hidden bg-slate-100 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=600&auto=format&fit=crop" 
            alt="Curated minimalist closet apparel setup" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Layout Box: Double Stacked Secondary Grid Frames */}
        <div className="md:col-span-3 flex flex-col gap-4 h-[65vh]">
          {/* Upper Stack Frame */}
          <div className="flex-1 rounded-sm overflow-hidden bg-slate-100 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop" 
              alt="Minimalist baseline knit profile styling" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Lower Stack Frame */}
          <div className="flex-1 rounded-sm overflow-hidden bg-slate-100 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop" 
              alt="Seasonal editorial overview detailing" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </section>

      {/*FEATURED PRODUCT GRID DISPLAY  */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 border-t border-slate-200/50">
        <div className="flex justify-between items-baseline mb-10">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#1C140E] tracking-wide">Featured Edit</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">Handpicked statement garments from the runway array.</p>
          </div>
          
          <Link href="/products" className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[#1C140E] transition-colors">
            Browse All Products &rarr;
          </Link>
        </div>





        {/* Responsive Catalog Display */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseItems.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="group block">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-slate-50 mb-3 border border-slate-200/20">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition duration-300" 
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-medium text-slate-700 tracking-wide group-hover:underline">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-[#1C140E]">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}