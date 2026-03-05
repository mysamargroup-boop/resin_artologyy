
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductCollectionProps {
  categoryName: string;
  products: Product[];
  index: number;
}

export function ProductCollection({ categoryName, products, index }: ProductCollectionProps) {
  return (
    <section className={cn(
      "relative overflow-hidden",
      index % 2 === 0 ? "bg-secondary/20" : "bg-transparent"
    )}>
      <div className="container-normal relative z-10 px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">{index % 2 === 0 ? "Curated" : "Premium"} Selection</h4>
            <h2 className="text-2xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">{categoryName}</h2>
          </div>
          <Link href={`/products?category=${encodeURIComponent(categoryName)}`} className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] group border-b border-primary/20 pb-1">
            <span className="whitespace-nowrap">VIEW COLLECTION</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

    