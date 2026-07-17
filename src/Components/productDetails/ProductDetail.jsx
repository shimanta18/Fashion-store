'use client';

import Loader from '@/Components/Loader';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';


const formatPrice = (price) => {
  if (typeof price !== 'number') return '';
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(price);
};


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
  const [isAdding, setIsAdding] = useState(false);

  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm font-medium tracking-wide text-gray-500">
        Loading product details...
      </div>
    );
  }


  const productImages = Array.from(
    new Set([product.image, ...(product.images || [])].filter(Boolean))
  );

  
  const handleAddToCart = async () => {
    setIsAdding(true);

    const payload = {
      id: product.id,
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      price: product.price,
      image: productImages[activeImageIndex] || productImages[0],
      quantity: 1,
      category: product.category || 'Clothing',
    };

    try {
     
      await new Promise((resolve) => setTimeout(resolve, 600));

      if (addToCart) {
        addToCart(payload);
        toast.success('Added to bag!');
      }
    } catch (error) {
      toast.error('Failed to add to bag.');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] dark:bg-[#120c08] text-[#1c140e] dark:text-[#faf9f6] py-8 px-4 sm:px-6 lg:px-16 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
      
        <div className="mb-8">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-[#1a120c] border border-[#e5dfd3] dark:border-[#2d2117] hover:border-gray-400 dark:hover:border-stone-500 text-sm font-semibold rounded-xl shadow-xs transition-all duration-200 group"
          >
            <svg className="w-4 h-4 text-gray-600 dark:text-stone-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Products</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
      
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="aspect-[3/4] bg-white dark:bg-[#1a120c] border border-[#e5dfd3]/60 dark:border-[#2d2117] rounded-3xl overflow-hidden relative shadow-sm">
              <Image
                src={productImages[activeImageIndex] || '/placeholder.jpg'}
                alt={product.name}
                fill
                priority
                className="object-cover transition-all duration-300"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-10">
                  <span className="bg-red-500 text-white font-extrabold text-xs uppercase tracking-widest px-4 py-2 rounded-xl">Sold Out</span>
                </div>
              )}
            </div>

            {/* thumbnails */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2.5">
                {productImages.map((imgUrl, idx) => (
                  <button
                    key={`${imgUrl}-${idx}`}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-square overflow-hidden rounded-2xl border transition-all ${activeImageIndex === idx ? 'border-[#6C5DD3] ring-2 ring-[#6C5DD3]/20 scale-[1.02]' : 'border-[#e5dfd3] dark:border-[#2d2117]'}`}
                  >
                    <Image src={imgUrl} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/*  Details & Checkout */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-stone-400 bg-gray-100 dark:bg-[#1a120c] px-2.5 py-1 rounded-md">{product.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold mt-3">{product.name}</h1>
            </div>

            <div className="text-3xl font-black">{formatPrice(product.price)}</div>

            {/* Colors Selection */}
            {product.colors?.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-gray-800 dark:text-stone-200">Available Colors</span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border ${selectedColor === color ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-[#1a120c] border-[#e5dfd3]'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* sizes selection */}
            {product.sizes?.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-gray-800 dark:text-stone-200">Available Size</span>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xs font-extrabold ${selectedSize === sz ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-[#1a120c] border-[#e5dfd3]'}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className={`w-full sm:w-64 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                product.inStock 
                  ? 'bg-[#6C5DD3] hover:bg-[#5b4ebc] text-white shadow-lg' 
                  : 'bg-gray-200 cursor-not-allowed'
              }`}
            >
              {isAdding ? <Loader /> : (product.inStock ? 'Add to Bag' : 'Out of Stock')}
            </button>
            
          </div>
        </div>
      </div>
    </main>
  );
}