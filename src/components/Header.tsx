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
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container-normal h-24 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-black/5 text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link href="/" className="flex items-center group">
            <h2 className="text-foreground text-2xl font-display font-black leading-tight tracking-[0.2em] uppercase transition-colors group-hover:text-primary">
              Sumegha
            </h2>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-all hover:tracking-[0.25em]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 text-foreground relative h-12 w-12 transition-transform hover:scale-110">
              <ShoppingBag className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute top-2 right-2 size-3 bg-primary rounded-full border-2 border-white shadow-sm"></span>
              )}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 p-10 animate-in slide-in-from-top duration-300 md:hidden shadow-2xl z-50">
          <nav className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.3em] text-foreground hover:text-primary transition-all"
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
