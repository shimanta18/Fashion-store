'use client';

import { useCart } from '@/context/CartContext';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-[#fcfaf4] dark:bg-[#120c08] transition-colors duration-300">

      <div className="bg-[#1c140e] dark:bg-black text-white text-[10px] tracking-[0.18em] font-medium text-center py-2.5 uppercase px-4 select-none">
        Complimentary shipping on orders over $150 &middot; Free returns within 30 days
      </div>

      {/*navigation bar */}
      <nav className="border-b border-[#e5dfd3] dark:border-[#2d2117] px-4 sm:px-6 py-4 lg:px-12 relative z-50 bg-[#fcfaf4] dark:bg-[#120c08] transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex-1 flex items-center justify-start">
            <button
              onClick={toggleMenu}
              className="p-3 -ml-3 text-[#1c140e] dark:text-[#faf9f6] hover:text-amber-800 dark:hover:text-amber-500 transition-colors focus:outline-none flex items-center gap-2"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
              <span className="hidden sm:block text-[11px] font-semibold tracking-[0.2em] uppercase mt-0.5">
                Menu
              </span>
            </button>
          </div>

          {/*center wing */}
          <div className="shrink-0 text-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-lg sm:text-2xl lg:text-3xl font-serif tracking-[0.2em] font-bold text-[#1c140e] dark:text-[#faf9f6] uppercase whitespace-nowrap select-none"
            >
              Fashion Store
            </Link>
          </div>

          {/* right Wing */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4 text-[#1c140e] dark:text-[#faf9f6]">

            <button aria-label="Search Catalog" className="hover:text-amber-800 dark:hover:text-amber-500 transition-colors p-1.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
              </svg>
            </button>

            <button aria-label="Wishlist" className="hover:text-amber-800 dark:hover:text-amber-500 transition-colors p-1.5 hidden xs:block">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>

            {/*toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Interface Mode"
              className="hover:text-amber-800 dark:hover:text-amber-500 transition-colors p-1.5 hidden sm:block"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Shopping Cart Link */}
            <Link href="/cart" onClick={closeMenu} className="relative p-1.5 hover:text-amber-800 dark:hover:text-amber-500 transition-colors block">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#1c140e] dark:bg-[#faf9f6] text-white dark:text-[#120c08] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center scale-90 animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </nav>

      {/* dropdown */}
      <div
        className={`bg-[#fcfaf4] dark:bg-[#120c08] border-b border-[#e5dfd3] dark:border-[#2d2117] transition-all duration-300 ease-in-out absolute w-full left-0 shadow-lg overflow-hidden z-40 ${
          isMenuOpen ? 'max-h-96 opacity-100 visible border-t border-stone-200/50 dark:border-[#2d2117]' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 lg:py-8 flex flex-col gap-4 text-xs lg:text-sm font-semibold tracking-[0.25em] text-[#2c221a] dark:text-[#faf9f6] uppercase">
          <Link href="/products" onClick={closeMenu} className="hover:text-amber-800 dark:hover:text-amber-500 py-2 border-b border-stone-200/40 dark:border-[#2d2117] transition-colors w-full sm:w-1/2 lg:w-1/3">Shop</Link>
          <Link href="/products?filter=new" onClick={closeMenu} className="hover:text-amber-800 dark:hover:text-amber-500 py-2 border-b border-stone-200/40 dark:border-[#2d2117] transition-colors w-full sm:w-1/2 lg:w-1/3">New In</Link>
          <Link href="/products?category=accessories" onClick={closeMenu} className="hover:text-amber-800 dark:hover:text-amber-500 py-2 border-b border-stone-200/40 dark:border-[#2d2117] transition-colors w-full sm:w-1/2 lg:w-1/3">Accessories</Link>
          <Link href="/journal" onClick={closeMenu} className="hover:text-amber-800 dark:hover:text-amber-500 py-2 transition-colors w-full sm:w-1/2 lg:w-1/3">Journal</Link>
        </div>
      </div>
    </header>
  );
}