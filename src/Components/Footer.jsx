import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] dark:bg-[#120c08] border-t border-stone-200/40 dark:border-[#2d2117] text-[#1C140E] dark:text-[#faf9f6] pt-16 md:pt-24 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 pb-16 md:pb-24">

          <div className="md:col-span-5 space-y-5">
            <span className="font-serif tracking-[0.25em] text-2xl font-normal uppercase block">
              Fashion Store
            </span>
            <p className="text-xs sm:text-[13px] text-stone-500 dark:text-stone-400 leading-relaxed max-w-[280px] font-light">
              Considered wardrobe essentials, made in small runs from the world's finest mills.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] tracking-[0.25em] font-medium text-stone-400 dark:text-stone-500 uppercase block">
              Shop
            </span>
            <ul className="space-y-3">
              {['New In', 'Outerwear', 'Knitwear', 'Denim', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/products?category=${link.toLowerCase()}`}
                    className="text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 hover:text-[#b96a4a] transition-colors font-light block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] tracking-[0.25em] font-medium text-stone-400 dark:text-stone-500 uppercase block">
              Studio
            </span>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Stockists'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 hover:text-[#b96a4a] transition-colors font-light block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] tracking-[0.25em] font-medium text-stone-400 dark:text-stone-500 uppercase block">
              Client Care
            </span>
            <ul className="space-y-3">
              {['Shipping', 'Returns', 'Size Guide', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 hover:text-[#b96a4a] transition-colors font-light block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-200/40 dark:border-[#2d2117] py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 text-center md:text-left">
            &copy; 2026 Fashion Store
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 text-center md:text-right">
            CRAFTED IN MILANO &middot; SHIPPED WORLDWIDE
          </span>
        </div>

      </div>
    </footer>
  );
}