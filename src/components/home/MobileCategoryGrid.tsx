
"use client";

import Link from 'next/link';
import Image from 'next/image';
import categoriesData from "@/lib/categories.json";

export function MobileCategoryGrid() {
  const artisticCategories = categoriesData.categories.slice(0, 5);

  return (
    <section className="py-8 md:hidden">
      <div className="container-normal px-4">
        <div className="grid grid-cols-5 gap-3">
          {artisticCategories.map((cat, index) => (
            <Link
              key={index}
              href={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group block text-center space-y-2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-primary/10">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors" />
              </div>
              <span className="block text-[9px] font-bold text-muted-foreground group-hover:text-primary transition-colors leading-tight px-1">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
