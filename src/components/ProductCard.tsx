
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

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="group flex flex-col gap-4 bg-white p-3 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/5">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            data-ai-hint="handmade product"
          />
          
          {/* Wishlist Button */}
          <div className="absolute top-3 right-3 z-10">
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full size-9 bg-white/90 backdrop-blur-sm shadow-md text-foreground/40 hover:text-primary transition-all border-none hover:scale-110"
              onClick={handleWishlist}
            >
              <Heart className={cn("h-4 w-4 transition-colors", wishlisted && "fill-primary text-primary")} />
            </Button>
          </div>

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-primary text-white text-[9px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest border border-white/20">
              {discountPercentage}% OFF
            </div>
          )}

          {/* Tags */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {product.tags?.map((tag) => (
              <div key={tag} className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[8px] text-foreground font-black uppercase tracking-widest border border-primary/10 shadow-sm flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-primary" />
                {tag}
              </div>
            ))}
          </div>
        </div>
        
        <div className="px-1 pb-2 pt-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[9px] font-bold text-primary uppercase tracking-widest opacity-90">
              <Tag className="h-3 w-3" />
              {product.category}
            </div>
            {product.rating && (
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="h-3 w-3 fill-current" />
                <span className="text-[10px] font-bold text-foreground/60">{product.rating}.0</span>
              </div>
            )}
          </div>
          
          <p className="text-foreground text-[14px] font-black uppercase tracking-tight truncate leading-tight">
            {product.name}
          </p>
          
          <div className="flex items-center gap-3">
            <p className="text-primary text-[16px] font-black">₹{product.price}</p>
            {product.originalPrice && (
              <p className="text-muted-foreground text-[12px] line-through decoration-primary/30 font-light">₹{product.originalPrice}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
