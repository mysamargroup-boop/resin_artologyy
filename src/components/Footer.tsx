"use client";

import Link from 'next/link';
import { Instagram, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white rounded-t-[32px] mt-4 relative overflow-hidden pb-20 md:pb-10">
      <div className="container mx-auto px-8 py-14">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">Join the Inner Circle</h3>
          <p className="text-white/40 text-[10px] font-light tracking-wide max-w-[200px] uppercase">
            Be the first to experience new collections and exclusive releases.
          </p>
          <div className="flex w-full max-w-xs flex-col gap-3 mt-2">
            <Input 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 text-[10px] font-display tracking-widest uppercase h-12 rounded-[8px]" 
              placeholder="Email Address"
              type="email"
            />
            <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-[8px] text-[10px] font-bold uppercase tracking-[0.2em] transition-all">
              Subscribe
            </Button>
          </div>
          
          <div className="flex gap-8 mt-6">
            <Link href="#" className="text-white/20 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/20 hover:text-primary transition-colors">
              <Send className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest font-display">
          <div className="space-y-4">
            <h4 className="text-white/60">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary">Our Story</Link></li>
              <li><Link href="/craft" className="hover:text-primary">The Craft</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white/60">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-primary">All Works</Link></li>
              <li><Link href="/discovery" className="hover:text-primary">AI Concierge</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white/60">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary">Shipping</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white/60">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-[8px] text-white/10 uppercase tracking-[0.4em] font-display">
            © {new Date().getFullYear()} Sumegha Handmades. Curated with Precision.
          </p>
        </div>
      </div>
    </footer>
  );
}