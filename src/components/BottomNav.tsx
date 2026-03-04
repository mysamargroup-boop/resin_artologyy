"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Heart, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'View', href: '/products', icon: LayoutGrid },
    { name: 'Saved', href: '/wishlist', icon: Heart },
    { name: 'Contact', href: 'https://wa.me/919876543210', icon: Phone, external: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-gray-100 md:hidden">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          const content = (
            <>
              <Icon className="h-6 w-6" />
              <span className="text-[8px] font-bold uppercase tracking-widest font-display">{item.name}</span>
            </>
          );

          if (item.external) {
            return (
              <a 
                key={item.name} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full gap-1 text-charcoal/40 hover:text-primary transition-colors"
              >
                {content}
              </a>
            );
          }

          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full gap-1 transition-colors",
                isActive ? "text-primary" : "text-charcoal/40 hover:text-primary"
              )}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}