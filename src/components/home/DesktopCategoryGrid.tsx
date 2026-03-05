
"use client";

import Link from 'next/link';
import Image from 'next/image';
import categoriesData from "@/lib/categories.json";

export function DesktopCategoryGrid() {
  const artisticCategories = categoriesData.categories.slice(0, 5);

  return (
    <section className="py-8 hidden md:block">
      <div className="container-normal px-4">
        <div className="grid grid-cols-5 gap-6">
          {artisticCategories.map((cat, index) => (
            <Link
              key={index}
              href={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group block text-center space-y-3"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-primary/10">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              <span className="block text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors leading-tight px-1 uppercase tracking-widest">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
