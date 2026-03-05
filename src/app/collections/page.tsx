
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import categoriesData from "@/lib/categories.json";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pb-24">
      <div className="container-normal mx-auto py-8 lg:py-16 px-4 space-y-12 lg:space-y-16">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary">Curated Selections</p>
          <h1 className="text-3xl lg:text-7xl font-black uppercase tracking-tight text-foreground">Our Collections</h1>
          <p className="text-muted-foreground text-xs lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Explore the different realms of artistry at Resin Artologyy. From preserved memories to functional art.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {categoriesData.categories.map((collection, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
              {/* Left Side: Main Category */}
              <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
                <div className="relative aspect-square lg:aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src={collection.imageUrl} 
                    alt={collection.name} 
                    fill 
                    sizes="(max-width: 1023px) 80vw, 30vw" 
                    className="object-cover" 
                  />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-foreground">{collection.name}</h2>
                  <p className="text-muted-foreground text-sm lg:text-base font-light leading-relaxed max-w-md mx-auto lg:mx-0">{collection.description}</p>
                   <Link href={`/products?category=${encodeURIComponent(collection.name)}`}>
                    <button className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] group border-b-2 border-primary/20 pb-1 mt-4">
                      Explore Full Collection
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Side: Subcategories */}
              <div className="lg:col-span-3">
                {collection.subCategories.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4 lg:gap-6">
                    {collection.subCategories.map((sub, sIdx) => (
                      <Link key={sIdx} href={`/products?category=${encodeURIComponent(collection.name)}&subcategory=${encodeURIComponent(sub.name)}`} className="group text-center space-y-3 block bg-secondary/50 p-4 rounded-3xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-primary/5">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                          <Image src={sub.imageUrl} alt={sub.name} fill sizes="(max-width: 639px) 40vw, 15vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        <p className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors leading-tight px-1">
                          {sub.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full bg-secondary/30 rounded-3xl p-8 border-2 border-dashed border-primary/10">
                    <p className="text-muted-foreground font-light text-center">More unique creations coming soon to this collection.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
