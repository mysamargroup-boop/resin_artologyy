"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Heart, Menu, X, Home, Shapes, Info, Phone, Gem, BookText } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cart, wishlist } = useStore();

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Collections', href: '/collections', icon: Shapes },
    { name: 'Gallery', href: '/products', icon: Shapes },
    { name: 'Our Story', href: '/about', icon: Info },
    { name: 'Blog', href: '/blog', icon: BookText },
    { name: 'AI Concierge', href: '/discovery', icon: Gem },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container-normal py-4">
        {/* Main Header Row - 3 Column Grid for perfect alignment */}
        <div className="grid grid-cols-3 items-center w-full">
          {/* Left: Hamburger Button */}
          <div className="flex items-center justify-start">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-black/5 text-foreground lg:hidden h-10 w-10 -ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Center: Logo Image */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 lg:h-14 w-40 lg:w-56">
                <Image 
                  src="/logo.png" 
                  alt="Sumegha Handmades" 
                  fill 
                  className="object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex justify-end items-center gap-1 -mr-2">
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 text-foreground relative h-10 w-10 sm:h-12 sm:w-12 transition-transform hover:scale-110">
                <Heart className="h-7 w-7 sm:h-9 sm:w-9" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white border-2 border-white">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 text-foreground relative h-10 w-10 sm:h-12 sm:w-12 transition-transform hover:scale-110">
                <ShoppingBag className="h-7 w-7 sm:h-9 sm:w-9" />
                {cart.length > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white border-2 border-white">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-12 mt-6 pt-4 border-t border-gray-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative group",
                  isActive ? "text-primary" : "text-foreground/60 hover:text-primary"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[1.5px] bg-primary transition-all",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 p-8 animate-in slide-in-from-top duration-300 lg:hidden shadow-2xl z-50">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-sm font-bold uppercase tracking-[0.2em]",
                    isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/5 text-foreground hover:text-primary"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive ? "opacity-100" : "opacity-60")} />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
