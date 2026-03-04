
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CollectionsPage() {
  const collections = [
    {
      title: "Festive Treasures",
      description: "Artisanal gifts and decor for every celebration.",
      image: "https://picsum.photos/seed/festive-coll/600/600",
      categoryName: "Festive / Special Gifts",
      subCategories: [
        { name: "Pooja Thalis", image: "https://picsum.photos/seed/pooja/300/300", href: "/products?category=Festive / Special Gifts" },
        { name: "Handpainted Diyas", image: "https://picsum.photos/seed/diya/300/300", href: "/products?category=Festive / Special Gifts" },
        { name: "Gift Hampers", image: "https://picsum.photos/seed/hamper/300/300", href: "/products?category=Festive / Special Gifts" }
      ]
    },
    {
      title: "Home & Sanctuary",
      description: "Contemporary handcrafted pieces for soulful living.",
      image: "https://picsum.photos/seed/home-coll/600/600",
      categoryName: "Home Decor",
      subCategories: [
        { name: "Lippan Art", image: "https://picsum.photos/seed/lippan/300/300", href: "/products?category=Home Decor" },
        { name: "Ceramic Vases", image: "https://picsum.photos/seed/vase/300/300", href: "/products?category=Home Decor" },
        { name: "Macrame Decor", image: "https://picsum.photos/seed/macrame/300/300", href: "/products?category=Home Decor" }
      ]
    },
    {
      title: "Royal Weddings",
      description: "Bespoke ensembles and treasures for your big day.",
      image: "https://picsum.photos/seed/wed-coll/600/600",
      categoryName: "Wedding",
      subCategories: [
        { name: "Bridal Trunks", image: "https://picsum.photos/seed/trunk/300/300", href: "/products?category=Wedding" },
        { name: "Shagun Envelopes", image: "https://picsum.photos/seed/env/300/300", href: "/products?category=Wedding" },
        { name: "Floral Jewelry", image: "https://picsum.photos/seed/floral/300/300", href: "/products?category=Wedding" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-32">
      <div className="container-normal mx-auto py-12 lg:py-20 px-4 space-y-20 lg:space-y-32">
        <div className="text-center space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary">Curated Selections</p>
          <h1 className="text-3xl lg:text-7xl font-black uppercase tracking-tight text-foreground">Our Collections</h1>
          <p className="text-foreground/50 text-sm lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Explore the different realms of artistry at Sumegha Handmades. From royal weddings to soulful home sanctuaries.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-40">
          {collections.map((collection, index) => (
            <div key={index} className="space-y-10 lg:space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className={cn(
                  "relative aspect-square lg:aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white max-w-md mx-auto lg:max-w-none w-full",
                  index % 2 !== 0 && "lg:order-last"
                )}>
                  <Image src={collection.image} alt={collection.title} fill className="object-cover" />
                </div>
                <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-6xl font-black uppercase tracking-tight text-foreground">{collection.title}</h2>
                  <p className="text-foreground/60 text-base lg:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0">{collection.description}</p>
                  <Link href={`/products?category=${encodeURIComponent(collection.categoryName)}`}>
                    <button className="flex items-center justify-center lg:justify-start gap-2 text-primary font-black uppercase tracking-widest text-[10px] lg:text-xs group mt-4 w-full lg:w-auto">
                      Explore {collection.title}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 lg:gap-12 max-w-sm lg:max-w-none mx-auto">
                {collection.subCategories.map((sub, sIdx) => (
                  <Link key={sIdx} href={sub.href} className="group text-center space-y-3">
                    <div className="relative aspect-square rounded-full overflow-hidden border-2 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
                      <Image src={sub.image} alt={sub.name} fill className="object-cover" />
                    </div>
                    <p className="text-[8px] lg:text-sm font-black uppercase tracking-widest text-foreground/70 group-hover:text-primary transition-colors leading-tight">
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
