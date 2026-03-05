
"use client";

import Link from 'next/link';
import Image from 'next/image';
import categoriesData from "@/lib/categories.json";

export function DesktopCategoryGrid() {
  const artisticCategories = categoriesData.categories.slice(0, 5);

  return (
    <section className="bg-secondary/30 border-b border-border hidden md:block">
      <div className="container-normal px-4 text-center">
        <div className="flex flex-col items-center gap-2 mb-12">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Explore Our Craft</h4>
          <h2 className="text-2xl lg:text-5xl font-black uppercase tracking-tight">Artistic Categories</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {artisticCategories.map((cat, index) => (
            <Link key={index} href={`/products?category=${encodeURIComponent(cat.name)}`} className="group block relative aspect-square overflow-hidden rounded-3xl shadow-lg">
              <Image 
                src={cat.imageUrl} 
                alt={cat.name} 
                fill
                sizes="(max-width: 767px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4">
                 <span className="block text-base sm:text-xl font-black uppercase tracking-widest text-white leading-tight drop-shadow-md text-center">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
