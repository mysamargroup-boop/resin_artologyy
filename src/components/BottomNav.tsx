
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Shapes, User, Gem, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  // Updated navigation order: HOME, COLLECTIONS | [CENTER] | ABOUT, SEARCH (Contact removed)
  const navItems = [
    { name: 'HOME', href: '/', icon: Home },
    { name: 'COLLECTIONS', href: '/products', icon: Shapes },
    { name: 'ABOUT', href: '/about', icon: User },
    { name: 'SEARCH', href: '/products', icon: Search },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 md:hidden h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-full px-1 relative">
        {/* Left Side Items: HOME and COLLECTIONS */}
        <div className="flex justify-around w-[42%] gap-1">
          {navItems.slice(0, 2).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href && (item.name !== 'COLLECTIONS' || pathname === '/products');
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 group transition-all duration-300 flex-1"
              >
                <Icon className={cn("h-5 w-5 transition-colors", isActive ? "text-primary" : "text-gray-400")} />
                <span className={cn("text-[7px] font-bold tracking-tight transition-colors", isActive ? "text-primary" : "text-gray-400")}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Central Raised Button */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Link href="/discovery">
            <div className="size-14 rounded-full gradient-primary border-[4px] border-background shadow-xl flex items-center justify-center group active:scale-95 transition-transform duration-200">
              <Gem className="h-6 w-6 text-white fill-white/20 drop-shadow-md" />
            </div>
          </Link>
        </div>

        {/* Right Side Items: ABOUT and SEARCH */}
        <div className="flex justify-around w-[42%] gap-1">
          {navItems.slice(2).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 group transition-all duration-300 flex-1"
              >
                <Icon className={cn("h-5 w-5 transition-colors", isActive ? "text-primary" : "text-gray-400")} />
                <span className={cn("text-[7px] font-bold tracking-tight transition-colors", isActive ? "text-primary" : "text-gray-400")}>
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
