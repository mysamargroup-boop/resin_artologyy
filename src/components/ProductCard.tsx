
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Tag, Sparkles, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product & { rating?: number };
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isWishlisted } = useStore();
  const wishlisted = isWishlisted(product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (wishlisted) {
      removeFromWishlist(product.id);
      toast({ title: "Removed from saved" });
    } else {
      addToWishlist(product);
      toast({ title: "Added to saved", description: product.name });
    }
  };

  const discountPercentage = product.regular_price
    ? Math.round(((product.regular_price - product.sale_price) / product.regular_price) * 100)
    : 0;

  // Generate SEO friendly nested slug
  const categorySlug = product.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const subCategorySlug = product.subcategory ? product.subcategory.toLowerCase().replace(/[^a-z0-9]+/g, '-') : "handcrafted";
  const productUrl = `/collections/${categorySlug}/${subCategorySlug}/${product.id}`;

  return (
    <div className="group flex flex-col gap-3 bg-card p-3 rounded-2xl shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 border border-primary/5 w-full">
      <Link href={productUrl} className="block">
        <div className="relative w-full aspect-square bg-secondary rounded-xl overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            data-ai-hint="handmade product"
          />

          <div className="absolute top-3 right-3 z-10">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full size-9 bg-white/80 backdrop-blur-sm shadow-md text-muted-foreground hover:text-primary transition-all border-none"
              onClick={handleWishlist}
            >
              <Heart className={cn("h-4 w-4 transition-colors", wishlisted && "fill-primary text-primary")} />
            </Button>
          </div>

          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[9px] font-black px-2.5 py-1 rounded-full shadow-lg uppercase tracking-widest border-2 border-white/50">
              {discountPercentage}% OFF
            </div>
          )}
        </div>

        <div className="px-1 pt-3 pb-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[9px] font-bold text-primary uppercase tracking-widest opacity-90">
              <Tag className="h-3 w-3" />
              {product.category}
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="text-xs font-bold text-muted-foreground">{product.rating || 5}.0</span>
            </div>
          </div>

          <p className="text-foreground text-sm font-black uppercase tracking-tight truncate leading-tight">
            {product.name}
          </p>

          <div className="flex items-center gap-3 pt-1">
            <p className="text-primary text-lg font-black">₹{product.sale_price}</p>
            {product.regular_price && (
              <p className="text-muted-foreground text-xs line-through decoration-primary/20 decoration-2 font-bold">₹{product.regular_price}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
