"use client";

import Link from 'next/link';
import { Instagram, Send, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-foreground text-white rounded-t-[4rem] pt-32 pb-16">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 mb-24">
          <div className="text-center lg:text-left space-y-6 max-w-md">
            <h3 className="text-2xl font-black uppercase tracking-[0.3em]">Join the Inner Circle</h3>
            <p className="text-white/50 text-sm font-light tracking-wide leading-relaxed">
              Be the first to experience new collections, limited drops, and exclusive art releases.
            </p>
            <div className="flex flex-col sm:flex-row w-full gap-3 mt-8">
              <Input 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 text-xs font-display tracking-widest uppercase h-14 rounded-xl flex-grow px-6" 
                placeholder="Email Address"
                type="email"
              />
              <Button className="h-14 px-10 rounded-xl text-xs font-bold uppercase tracking-[0.2em] gradient-primary transition-all">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="flex gap-12 items-center">
            <Link href="#" className="text-white/30 hover:text-primary transition-all hover:scale-110">
              <Instagram className="h-8 w-8" />
            </Link>
            <Link href="#" className="text-white/30 hover:text-primary transition-all hover:scale-110">
              <MessageCircle className="h-8 w-8" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 py-16 border-t border-white/10 text-xs font-bold uppercase tracking-widest">
          <div className="space-y-6">
            <h4 className="text-white/40 text-[10px] tracking-[0.4em]">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">The Craft</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white/40 text-[10px] tracking-[0.4em]">Shop</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-primary transition-colors">All Works</Link></li>
              <li><Link href="/discovery" className="hover:text-primary transition-colors">AI Concierge</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white/40 text-[10px] tracking-[0.4em]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Shipping</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white/40 text-[10px] tracking-[0.4em]">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/10 uppercase tracking-[0.5em] font-display font-medium">
            © {new Date().getFullYear()} Sumegha Handmades. Curated with Precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
