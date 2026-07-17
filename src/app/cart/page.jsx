'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-[70vh] bg-[#FAF8F5] dark:bg-[#120c08] flex flex-col items-center justify-center text-center px-6">
        <p className="font-serif italic text-xl text-stone-800 dark:text-stone-200 mb-4">"Your selection bag is currently empty."</p>
        <Link href="/products" className="text-[11px] tracking-[0.2em] font-bold uppercase bg-[#1C140E] dark:bg-[#faf9f6] text-white dark:text-[#120c08] px-8 py-4 rounded-sm shadow-sm">
          Return to Collection
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#FAF8F5] dark:bg-[#120c08] min-h-screen text-[#1C140E] dark:text-[#faf9f6] pt-16 pb-32 px-4 sm:px-8 md:px-16 max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-serif font-light tracking-tight mb-12">Your Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
       
        <section className="lg:col-span-7 space-y-6 divide-y divide-stone-200/60 dark:divide-[#2d2117]/60">
          {cart.map((item, index) => (
            <div key={item.id} className={`flex gap-6 ${index > 0 ? 'pt-6' : ''}`}>
              <div className="w-24 aspect-[3/4] overflow-hidden bg-stone-100 rounded-[2px] shrink-0 border border-stone-200/40">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xs font-normal tracking-wide text-stone-800 dark:text-stone-200">{item.name}</h3>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                  <p className="text-xs font-semibold">${item.price * item.quantity}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  
                  <div className="flex items-center border border-stone-200 dark:border-[#2d2117] rounded-sm bg-white dark:bg-stone-900/20 scale-90 origin-left">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2.5 py-1 text-stone-400 hover:text-stone-700">&minus;</button>
                    <span className="px-2 text-xs font-medium min-w-[24px] text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2.5 py-1 text-stone-400 hover:text-stone-700">&#43;</button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-[9px] font-bold tracking-widest uppercase text-stone-400 hover:text-[#b96a4a] transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* total Summary & Checkout Processing Panel */}
        <section className="lg:col-span-5 bg-stone-100/50 dark:bg-[#1a120c]/60 border border-stone-200/40 dark:border-[#2d2117] p-8 rounded-sm space-y-6">
          <h2 className="text-[11px] tracking-[0.25em] font-bold uppercase text-stone-400 pb-2 border-b border-stone-200 dark:border-[#2d2117]">Order Summary</h2>
          
          <div className="space-y-3 text-xs font-light">
            <div className="flex justify-between">
              <span className="text-stone-500">Subtotal</span>
              <span className="font-medium">${cartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Shipping (Nationwide BD)</span>
              <span className="text-stone-400 italic">Calculated at dispatch</span>
            </div>
            <div className="border-t border-stone-200 dark:border-[#2d2117] pt-4 flex justify-between text-sm font-normal mt-4">
              <span>Estimated Total</span>
              <span className="font-semibold text-[#b96a4a]">${cartTotal}</span>
            </div>
          </div>

          <button 
            //   toast.loading
            onClick={() => {
              toast.loading("Connecting order processing gateway...", {
                duration: 2000,
              });
            }}
            className="w-full bg-[#1C140E] dark:bg-[#faf9f6] text-white dark:text-[#120c08] text-[11px] tracking-[0.2em] font-bold uppercase py-4 rounded-sm hover:opacity-90 transition-all shadow-sm"
          >
            Proceed to Secure Checkout
          </button>
        </section>
      </div>
    </main>
  );
}