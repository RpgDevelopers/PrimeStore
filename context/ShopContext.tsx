import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (productId: string, color?: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, color?: string, size?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('primeStore_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('primeStore_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    setCart((prevCart) => {
      // Create a unique key for the item based on id, color, and size
      // This allows adding the same product with different variations
      const existingItemIndex = prevCart.findIndex(
        (item) => 
          item.id === product.id && 
          item.selectedColor === color && 
          item.selectedSize === size
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Item doesn't exist, add new
        return [...prevCart, { ...product, quantity, selectedColor: color, selectedSize: size }];
      }
    });
  };

  const removeFromCart = (productId: string, color?: string, size?: string) => {
    setCart((prevCart) => 
      prevCart.filter(
        (item) => 
          !(item.id === productId && 
            item.selectedColor === color && 
            item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, color?: string, size?: string) => {
    if (quantity < 1) {
        removeFromCart(productId, color, size);
        return;
    }
    
    setCart((prevCart) => 
      prevCart.map((item) => {
        if (item.id === productId && item.selectedColor === color && item.selectedSize === size) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        products: PRODUCTS,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};