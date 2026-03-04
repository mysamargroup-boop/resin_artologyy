"use client";

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useStore();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/products' },
    { name: 'Our Story', href: '/about' },
    { name: 'AI Concierge', href: '/discovery' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-black/5 text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link href="/" className="flex items-center">
            <h2 className="text-foreground text-xl font-display font-extrabold leading-tight tracking-[0.2em] uppercase">
              Sumegha
            </h2>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 text-foreground relative h-12 w-12">
              <ShoppingBag className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute top-3 right-3 size-2.5 bg-primary rounded-full animate-pulse border-2 border-white"></span>
              )}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-8 animate-in slide-in-from-top duration-300 md:hidden shadow-xl z-50">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
