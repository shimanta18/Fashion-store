'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FcRating } from 'react-icons/fc';


const formatPrice = (price) => {
  if (typeof price !== 'number') return '';
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(price);
};

// Generates safe, stable numbers from alphanumeric IDs
const getMockMetric = (id, multiplier, offset) => {
  if (!id) return offset;
  const numericString = String(id).replace(/\D/g, ''); 
  const seed = parseInt(numericString.slice(-4), 10) || 42; 
  return (seed % 100) * multiplier + offset;
};

export default function ProductDetail({ product }) {
  
  const { addToCart } = useCart(); 

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [activeImageIndex, setActiveImageIndex] = useState(0); 

  // Early return fallback guard placed safely before hooks processing
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm font-medium tracking-wide text-gray-500">
        Loading product details...
      </div>
    );
  }

  // Deduplicate and filter out invalid/empty images cleanly
  const productImages = Array.from(
    new Set([product.image, ...(product.images || [])].filter(Boolean))
  );

 
  const handleAddToCart = () => {
    const payload = {
      id: product.id,
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      price: product.price,
     
      image: productImages[activeImageIndex] || productImages[0], 
      quantity: 1, 
      category: product.category || 'Clothing' 
    };

    console.log('Adding to cart payload:', payload);

    // Execute the global context function
   if (addToCart) {
      addToCart(payload);
      
      toast.success('Added to bag!'); 
    } else {
      console.error("CartContext is missing the addToCart function.");
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] dark:bg-[#120c08] text-[#1c140e] dark:text-[#faf9f6] py-8 px-4 sm:px-6 lg:px-16 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Action Header navigation Row */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-[#1a120c] border border-[#e5dfd3] dark:border-[#2d2117] hover:border-gray-400 dark:hover:border-stone-500 text-sm font-semibold rounded-xl shadow-xs transition-all duration-200 group"
          >
            <svg
              className="w-4 h-4 text-gray-600 dark:text-stone-400 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="text-gray-700 dark:text-stone-300">Back to Products</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/*  Visual Showcase & Meta metrics */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
           
            <div className="aspect-[3/4] bg-white dark:bg-[#1a120c] border border-[#e5dfd3]/60 dark:border-[#2d2117] rounded-3xl overflow-hidden relative shadow-sm">
              <Image
                src={productImages[activeImageIndex] || '/placeholder-product.jpg'}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-all duration-300"
              />

              {!product.inStock && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-10">
                  <span className="bg-red-500 text-white font-extrabold text-xs uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
                    Sold Out
                  </span>
                </div>
              )}
            </div>

           
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2.5">
                {productImages.map((imgUrl, idx) => (
                  <button
                    key={`${imgUrl}-${idx}`}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Switch main display to view image variant ${idx + 1}`}
                    aria-selected={activeImageIndex === idx}
                    className={`aspect-square overflow-hidden rounded-2xl border transition-all duration-300 relative bg-white dark:bg-[#1a120c] ${
                      activeImageIndex === idx
                        ? 'border-[#6C5DD3] ring-2 ring-[#6C5DD3]/20 scale-[1.02]'
                        : 'border-[#e5dfd3] dark:border-[#2d2117] opacity-80 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${product.name} gallery item ${idx + 1}`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

             
            <div className="border border-[#e5dfd3] dark:border-[#2d2117] bg-white dark:bg-[#1a120c] rounded-2xl p-4 flex items-center justify-between shadow-sm mt-2">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#6C5DD3]/10 flex items-center justify-center text-[#6C5DD3]">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-wide text-gray-800 dark:text-stone-200">Verified Style</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-stone-400">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25z" />
                  </svg>
                  Dhaka, BD
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5">
                <div className="text-xs flex items-center gap-1 font-bold text-gray-800 dark:text-stone-200">
                  <FcRating className="w-4 h-4" />({product.rating || 5}) 
                  <span className="text-gray-400 dark:text-stone-500 font-normal">
                    {getMockMetric(product.id, 14, 120)} reviews
                  </span>
                </div>
                <button type="button" className="text-xs font-bold text-[#6C5DD3] border border-[#6C5DD3]/20 hover:bg-[#6C5DD3]/5 px-3 py-1.5 rounded-lg transition-colors">
                  View Specs
                </button>
              </div>
            </div>

          </div>

          {/*  Dynamic Spec details & Checkout Architecture */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-start">
            <div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-stone-400 bg-gray-100/80 dark:bg-[#1a120c] border border-gray-200/60 dark:border-[#2d2117] px-2.5 py-1 rounded-md inline-block">
                {product.category} Collection
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-[#faf9f6] mt-3 font-sans">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-gray-800 dark:text-stone-200">[{product.rating || 5}]</span>
                <span className="text-gray-400 dark:text-stone-500">•</span>
                <span className="text-gray-500 dark:text-stone-400 font-medium">
                  {getMockMetric(product.id, 11, 45)} reviews
                </span>
                <span className="text-gray-400 dark:text-stone-500">•</span>
                <span className="text-black dark:text-stone-200 font-bold">
                  {getMockMetric(product.id, 33, 12)} Sold
                </span>
              </div>
            </div>

            <div className="text-3xl font-black text-black dark:text-stone-200 tracking-tight">
              {formatPrice(product.price)}
            </div>

            <hr className="border-gray-200 dark:border-[#2d2117]" />

            {/* Colors Option Array Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-gray-800 dark:text-stone-200">Available Colors</span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      aria-pressed={selectedColor === color}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                        selectedColor === color
                          ? 'bg-gray-900 dark:bg-[#faf9f6] text-white dark:text-[#120c08] border-gray-900 dark:border-[#faf9f6]'
                          : 'bg-white dark:bg-[#1a120c] text-gray-700 dark:text-stone-300 border-gray-200 dark:border-[#2d2117] hover:border-gray-400 dark:hover:border-stone-500'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            
            {product.sizes && product.sizes.length > 0 && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-800 dark:text-stone-200">Available Size</span>
                  {product.inStock && (
                    <span className="bg-[#6C5DD3]/10 text-[#6C5DD3] font-bold text-[10px] px-2 py-0.5 rounded-full">
                      Low Stock Alert
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      aria-pressed={selectedSize === sz}
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xs font-extrabold transition-all duration-200 ${
                        selectedSize === sz
                          ? 'bg-gray-900 dark:bg-[#faf9f6] text-white dark:text-[#120c08] border-gray-900 dark:border-[#faf9f6] shadow-sm'
                          : 'bg-white dark:bg-[#1a120c] text-gray-700 dark:text-stone-300 border-gray-200 dark:border-[#2d2117] hover:border-gray-400 dark:hover:border-stone-500'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

           
            <div className="mt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full sm:w-64 py-4 px-6 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 shadow-md transform active:scale-98 ${
                  product.inStock
                    ? 'bg-[#6C5DD3] hover:bg-[#5b4ebc] text-white shadow-[#6C5DD3]/20'
                    : 'bg-gray-200 dark:bg-[#221912] text-gray-400 dark:text-stone-600 cursor-not-allowed shadow-none'
                }`}
              >
                {product.inStock ? 'Add to Bag' : 'Out of Stock'}
              </button>
            </div>

            {/*  description Block */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs font-bold text-gray-800 dark:text-stone-200">Description & Quality:</span>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-stone-400 leading-relaxed flex flex-col gap-2">
                <li>{product.description || "Premium structural material design."}</li>
                <li>Carefully tailored fit designed to ensure structured comfort and ease of movement.</li>
                <li>Pre-shrunk and built to retain deep, saturated fiber color depth even after repeated home washes.</li>
              </ul>
            </div>

            {/* Logistics Infrastructure Context Grid Info */}
            <div className="border border-gray-200/80 dark:border-[#2d2117] bg-white/60 dark:bg-[#1a120c] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 justify-between shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-gray-100 dark:bg-[#221912] rounded-xl text-gray-600 dark:text-stone-400">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-stone-500 uppercase tracking-wider">Delivery Area</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-stone-200">Dhaka & Nationwide BD</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-gray-100 dark:bg-[#221912] rounded-xl text-gray-600 dark:text-stone-400">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 2.253M12 3a9.003 9.003 0 00-8.716 2.253" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-stone-500 uppercase tracking-wider">Shipping method</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-stone-200">Standard Delivery (2-5 Days)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-gray-100 dark:bg-[#221912] rounded-xl text-gray-600 dark:text-stone-400">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-stone-500 uppercase tracking-wider">Returns</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-stone-200">7-Day Hassle-Free Return</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}