'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  // lazy init to keep server-side rendering (SSR) happy and pull saved items
  const [bag, setBag] = useState(() => {
    if (typeof window === 'undefined') return [];
    
    const localData = localStorage.getItem('fs_cart_session');
    return localData ? JSON.parse(localData) : [];
  });

  // sync changes to storage whenever the bag updates
  useEffect(() => {
    localStorage.setItem('fs_cart_session', JSON.stringify(bag));
  }, [bag]);

  const addToCart = (product, color, size) => {
    setBag((prev) => {
      // check if this exact style/size combo is already in the bag
      const matchIdx = prev.findIndex(
        (item) => item.id === product.id && item.color === color && item.size === size
      );

      
      if (matchIdx > -1) {
        const updated = [...prev];
        updated[matchIdx].quantity += 1;
        return updated;
      }

      // fresh item addition
      return [...prev, { ...product, color, size, quantity: 1 }];
    });
  };

  const removeFromCart = (id, color, size) => {
    setBag((prev) => prev.filter(
      (item) => !(item.id === id && item.color === color && item.size === size)
    ));
  };

  const updateQuantity = (id, color, size, amount) => {
    if (amount < 1) return; // sanity check: don't let them drop below 1 item

    setBag((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: amount }
          : item
      )
    );
  };

  // quickly compute current totals inline
  const cartCount = bag.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = bag.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartCtx.Provider value={{ cart: bag, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
      {children}
    </CartCtx.Provider>
  );
}

// export a streamlined clean hook so we don't write useContext(CartCtx) everywhere
export const useCart = () => {
  const context = useContext(CartCtx);
  if (!context) {
    throw new Error('useCart hook called outside its provider framework parent');
  }
  return context;
};