
"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect, useRef } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Search, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import productsData from "@/lib/products.json";
import categoriesData from "@/lib/categories.json";
import { Product } from "@/lib/types";

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchModeParam = searchParams.get('search');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [isLoading, setIsLoading] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Artificial delay to show beautiful skeletons
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchModeParam === 'true' && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchModeParam, categoryParam]);

  const categories = ['All', ...categoriesData.categories.map(c => c.name)];

  const allProducts = useMemo(() => productsData.products as Product[], []);

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = searchTerm === '' || p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (p.tags && p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full overflow-x-hidden">
      <div className="container-normal mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-8">
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary">The Collection</p>
            <h1 className="text-3xl lg:text-6xl font-black font-headline uppercase tracking-tight">Art Gallery</h1>
            <p className="text-muted-foreground text-sm lg:text-lg max-w-md mx-auto font-light">Hand-picked treasures waiting for a home.</p>
          </div>
          
          <div className="flex flex-col gap-8 w-full max-w-3xl">
            <div className="relative group max-w-2xl mx-auto w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary pointer-events-none z-10" />
              <input 
                ref={searchInputRef}
                placeholder="Search for 'ocean art' or 'wedding frames'..." 
                className="w-full pl-14 pr-12 h-16 rounded-full border border-primary/10 bg-card/80 backdrop-blur-sm focus:bg-white shadow-lg outline-none px-4 transition-all text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Mic className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>

            <div className="relative w-full">
              <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide px-2">
                {categories.map(cat => {
                  const isActive = selectedCategory === cat;
                  return (
                    <Button 
                      key={cat} 
                      variant="ghost"
                      className={cn(
                        "rounded-full h-11 px-6 text-[10px] font-black uppercase tracking-[0.2em] transition-all shrink-0 border-2",
                        isActive 
                          ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30" 
                          : "bg-card border-primary/10 text-foreground/80 hover:bg-white hover:border-primary/30"
                      )}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </Button>
                  );
                })}
              </div>
              <div className="absolute top-0 right-0 h-[44px] w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="space-y-4 p-4 bg-card rounded-2xl shadow-sm border border-primary/5">
                <Skeleton className="aspect-square w-full rounded-xl" />
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-3 w-20 rounded-full" />
                    <Skeleton className="h-3 w-10 rounded-full" />
                  </div>
                  <Skeleton className="h-5 w-full rounded-full" />
                  <Skeleton className="h-4 w-2/3 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-secondary/50 rounded-[3rem] border-2 border-dashed border-primary/10 space-y-6">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
              <Search className="h-10 w-10 text-primary/30" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-black uppercase tracking-tight">No Results Found</p>
              <p className="text-muted-foreground text-xs font-light max-w-xs mx-auto">Try adjusting your filters or search terms to find your perfect piece.</p>
            </div>
            <Button 
              variant="link" 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All');}} 
              className="text-primary font-black uppercase tracking-widest text-[10px]"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

    