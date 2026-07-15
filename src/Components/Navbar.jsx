'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function Navbar() {
  
  const { cartCount } = useCart();

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Banner: Dark Editorial Brown */}
      <div className="bg-[#1c140e] text-white text-[10px] tracking-[0.18em] font-medium text-center py-2.5 uppercase px-4">
        Complimentary shipping on orders over $150 · Free returns within 30 days
      </div>

      {/* Primary Bar: Smooth Rich Cream */}
      <nav className="bg-[#fcfaf4] border-b border-[#e5dfd3] px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/*  Left Wing: Navigation Directory */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] text-[#2c221a] uppercase">
            <Link href="/products" className="hover:text-amber-800 transition-colors">
              Shop
            </Link>
            <Link href="/products?filter=new" className="hover:text-amber-800 transition-colors">
              New In
            </Link>
            <Link href="/products?category=accessories" className="hover:text-amber-800 transition-colors">
              Accessories
            </Link>
            <Link href="/journal" className="hover:text-amber-800 transition-colors">
              Journal
            </Link>
          </div>

          {/* Center Wing: Minimal Brand Typography */}
          <div className="text-center">
            <Link 
              href="/" 
              className="text-2xl lg:text-3xl font-serif tracking-[0.25em] font-bold text-[#1c140e] uppercase whitespace-nowrap select-none"
            >
              Fashion Store
            </Link>
          </div>

          {/*  Right Wing: System Actions */}
          <div className="flex items-center gap-5 text-[#1c140e]">
            {/* Action: Live Search */}
            <button aria-label="Search Catalog" className="hover:text-amber-800 transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
              </svg>
            </button>

            {/* Action: Saved Items Wishlist */}
            <button aria-label="Wishlist" className="hover:text-amber-800 transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>

            {/* Action: Aesthetic Light/Dark Mode Switch */}
            <button aria-label="Toggle Interface Mode" className="hover:text-amber-800 transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>


            {/* Action: Interactive Bag Counter Route */}
            <Link href="/cart" className="relative p-1 hover:text-amber-800 transition-colors block">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              
              
              {/* Context Counter: Mounts smoothly when item total increases */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-[#1c140e] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center scale-90 animate-fade-in">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}