
"use client";

import { useState, useEffect } from 'react';
import { Product, CartItem } from './types';

// Simple store pattern using local storage and events for cross-component reactivity
export function useStore() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('sh_cart');
    const savedWishlist = localStorage.getItem('sh_wishlist');
    const savedCoupon = localStorage.getItem('sh_coupon');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedCoupon) setCouponCode(JSON.parse(savedCoupon));

    const handleStorage = () => {
      const updatedCart = localStorage.getItem('sh_cart');
      const updatedWishlist = localStorage.getItem('sh_wishlist');
      const updatedCoupon = localStorage.getItem('sh_coupon');
      if (updatedCart) setCart(JSON.parse(updatedCart));
      if (updatedWishlist) setWishlist(JSON.parse(updatedWishlist));
      setCouponCode(updatedCoupon ? JSON.parse(updatedCoupon) : null);
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('sh_update', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('sh_update', handleStorage);
    };
  }, []);

  const updateStorage = (key: string, value: any) => {
    if (value === null || value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
    window.dispatchEvent(new Event('sh_update'));
  };

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    updateStorage('sh_cart', newCart);
  };

  const removeFromCart = (productId: string) => {
    const newCart = cart.filter(item => item.id !== productId);
    updateStorage('sh_cart', newCart);
  };

  const updateCartQuantity = (productId: string, delta: number) => {
    let newCart = cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0);
    updateStorage('sh_cart', newCart);
  };

  const setCoupon = (code: string | null) => {
    setCouponCode(code);
    updateStorage('sh_coupon', code);
  }

  const clearCart = () => {
    updateStorage('sh_cart', []);
    updateStorage('sh_coupon', null);
  };

  const addToWishlist = (product: Product) => {
    if (wishlist.some(item => item.id === product.id)) return;
    const newWishlist = [...wishlist, product];
    updateStorage('sh_wishlist', newWishlist);
  };

  const removeFromWishlist = (productId: string) => {
    const newWishlist = wishlist.filter(item => item.id !== productId);
    updateStorage('sh_wishlist', newWishlist);
  };

  return {
    cart,
    wishlist,
    couponCode,
    setCoupon,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishlist,
    removeFromWishlist,
    clearCart,
    isWishlisted: (id: string) => wishlist.some(item => item.id === id)
  };
}
