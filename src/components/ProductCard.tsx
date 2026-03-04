
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/lib/types';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
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

  return (
    <div className="group flex flex-col gap-3 bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            data-ai-hint="handmade product"
          />
          <div className="absolute top-2 right-2">
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full size-8 bg-white/80 backdrop-blur-sm shadow-sm text-foreground/40 hover:text-primary transition-colors border-none"
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${wishlisted ? 'fill-primary text-primary' : ''}`} />
            </Button>
          </div>
          {product.tags?.includes('Bestseller') && (
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] text-foreground font-bold uppercase tracking-widest border border-gray-100">
              Bestseller
            </div>
          )}
        </div>
        
        <div className="px-1 pb-1 pt-2">
          <p className="text-foreground text-[11px] font-bold uppercase tracking-wide truncate">
            {product.name}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-primary text-[10px] font-bold">₹{product.price}</p>
            {product.originalPrice && (
              <p className="text-muted-foreground text-[9px] line-through">₹{product.originalPrice}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
