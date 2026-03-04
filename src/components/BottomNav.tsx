
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Shapes, Heart, User, Gem, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', href: '/', icon: Home },
    { name: 'COLLECTIONS', href: '/products', icon: Shapes },
    { name: 'ABOUT', href: '/about', icon: User },
    { name: 'CONTACT', href: '/contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 md:hidden h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-full px-2 relative">
        {/* Left Side Items */}
        <div className="flex justify-around w-2/5">
          {navItems.slice(0, 2).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 group transition-all duration-300"
              >
                <Icon className={cn("h-6 w-6 transition-colors", isActive ? "text-primary" : "text-gray-400")} />
                <span className={cn("text-[8px] font-bold tracking-[0.1em] transition-colors", isActive ? "text-primary" : "text-gray-400")}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Central Raised Button - Shifted slightly lower per user request */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <Link href="/discovery">
            <div className="size-16 rounded-full gradient-primary border-[4px] border-background shadow-xl flex items-center justify-center group active:scale-95 transition-transform duration-200">
              <Gem className="h-7 w-7 text-white fill-white/20 drop-shadow-md" />
            </div>
          </Link>
        </div>

        {/* Right Side Items */}
        <div className="flex justify-around w-2/5">
          {navItems.slice(2).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 group transition-all duration-300"
              >
                <Icon className={cn("h-6 w-6 transition-colors", isActive ? "text-primary" : "text-gray-400")} />
                <span className={cn("text-[8px] font-bold tracking-[0.1em] transition-colors", isActive ? "text-primary" : "text-gray-400")}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
