"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CollectionsPage() {
  const collections = [
    {
      title: "Custom Name Plates",
      description: "Artisanal door decor personalized for your beautiful home.",
      image: "https://picsum.photos/seed/name-plates/600/600",
      categoryName: "Custom Name Plates",
      subCategories: [
        { name: "Home Name Plates", image: "https://picsum.photos/seed/home-name/300/300", href: "/products?category=Custom Name Plates" },
        { name: "Couple Name Plates", image: "https://picsum.photos/seed/couple-name/300/300", href: "/products?category=Custom Name Plates" },
        { name: "Resin Name Plates", image: "https://picsum.photos/seed/resin-name/300/300", href: "/products?category=Custom Name Plates" },
        { name: "Door Name Plates", image: "https://picsum.photos/seed/door-name/300/300", href: "/products?category=Custom Name Plates" }
      ]
    },
    {
      title: "Shubh Symbols",
      description: "Traditional auspicious motifs to bring positive energy.",
      image: "https://picsum.photos/seed/shubh-symbols/600/600",
      categoryName: "Shubh Symbols",
      subCategories: [
        { name: "Om & Swastik", image: "https://picsum.photos/seed/om/300/300", href: "/products?category=Shubh Symbols" },
        { name: "Ganesha Art", image: "https://picsum.photos/seed/ganesha/300/300", href: "/products?category=Shubh Symbols" },
        { name: "Kalash Decor", image: "https://picsum.photos/seed/kalash/300/300", href: "/products?category=Shubh Symbols" }
      ]
    },
    {
      title: "Evil Eye Protection",
      description: "Nazar Battu decor pieces that combine protection with art.",
      image: "https://picsum.photos/seed/evil-eye/600/600",
      categoryName: "Evil Eye Protection Decor",
      subCategories: [
        { name: "Wall Protectors", image: "https://picsum.photos/seed/nazar1/300/300", href: "/products?category=Evil Eye Protection Decor" },
        { name: "Hanging Talismans", image: "https://picsum.photos/seed/nazar2/300/300", href: "/products?category=Evil Eye Protection Decor" },
        { name: "Resin Nazar", image: "https://picsum.photos/seed/nazar3/300/300", href: "/products?category=Evil Eye Protection Decor" }
      ]
    },
    {
      title: "Decorative Hangings",
      description: "Bespoke ensembles and treasures for your vertical spaces.",
      image: "https://picsum.photos/seed/hangings/600/600",
      categoryName: "Decorative Hangings",
      subCategories: [
        { name: "Wall Hangings", image: "https://picsum.photos/seed/wall-h/300/300", href: "/products?category=Decorative Hangings" },
        { name: "Door Hangings", image: "https://picsum.photos/seed/door-h/300/300", href: "/products?category=Decorative Hangings" },
        { name: "Resin Decor", image: "https://picsum.photos/seed/resin-d/300/300", href: "/products?category=Decorative Hangings" },
        { name: "Handmade Art", image: "https://picsum.photos/seed/hand-art/300/300", href: "/products?category=Decorative Hangings" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      <div className="container-normal mx-auto py-8 lg:py-16 px-4 space-y-12 lg:space-y-16">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary">Curated Selections</p>
          <h1 className="text-3xl lg:text-7xl font-black uppercase tracking-tight text-foreground">Our Collections</h1>
          <p className="text-foreground/50 text-xs lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Explore the different realms of artistry at Sumegha Handmades. From royal weddings to soulful home sanctuaries.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {collections.map((collection, index) => (
            <div key={index} className="space-y-8 lg:space-y-10">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Main Category Image - Compact Circle Style */}
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <Image src={collection.image} alt={collection.title} fill className="object-cover" />
                </div>
                
                <div className="space-y-3 lg:space-y-4 max-w-xl px-4">
                  <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-foreground">{collection.title}</h2>
                  <p className="text-foreground/60 text-xs lg:text-base font-light leading-relaxed">{collection.description}</p>
                  <Link href={`/products?category=${encodeURIComponent(collection.categoryName)}`}>
                    <button className="flex items-center justify-center gap-2 text-primary font-black uppercase tracking-widest text-[9px] group mx-auto border-b border-primary/20 pb-0.5">
                      Explore Full Collection
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Sub Categories Grid - Compact Circles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 max-w-md lg:max-w-4xl mx-auto px-4">
                {collection.subCategories.map((sub, sIdx) => (
                  <Link key={sIdx} href={sub.href} className="group text-center space-y-2">
                    <div className="relative aspect-square rounded-full overflow-hidden border-2 border-white shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary/10">
                      <Image src={sub.image} alt={sub.name} fill className="object-cover" />
                    </div>
                    <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-foreground/70 group-hover:text-primary transition-colors leading-tight px-1">
                      {sub.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
