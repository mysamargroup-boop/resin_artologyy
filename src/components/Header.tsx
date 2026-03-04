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
    { name: 'Collection', href: '/products' },
    { name: 'AI Concierge', href: '/discovery' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full hover:bg-black/5 text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        <Link href="/" className="flex-1 flex justify-center">
          <h2 className="text-charcoal text-base font-display font-bold leading-tight tracking-[0.1em] uppercase">
            Sumegha
          </h2>
        </Link>

        <div className="flex items-center">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 text-charcoal relative">
              <ShoppingBag className="h-5 w-5" />
              {cart.length > 0 && <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-6 animate-in slide-in-from-top duration-300 md:hidden shadow-lg">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors font-display"
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