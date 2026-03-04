
"use client";

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Share2, Star, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart, addToWishlist, isWishlisted, removeFromWishlist } = useStore();
  
  const productData = PlaceHolderImages.find(p => p.id === id);
  
  if (!productData) {
    return (
      <div className="container mx-auto p-32 text-center space-y-6">
        <h1 className="text-4xl font-black uppercase">Product not found</h1>
        <p className="text-muted-foreground">The masterpiece you are looking for is missing from our gallery.</p>
        <Link href="/products">
          <Button className="gradient-primary rounded-full px-8">Back to Gallery</Button>
        </Link>
      </div>
    );
  }

  const category = productData.id.startsWith('fest') ? 'Festive' : productData.id.startsWith('home') ? 'Home Decor' : 'Wedding';
  const price = productData.id.startsWith('fest') ? 899 : productData.id.startsWith('home') ? 1299 : 3500;
  const originalPrice = Math.round(price * 1.35);

  const product = {
    id: productData.id,
    name: productData.id.includes('-') 
      ? productData.description.split(' - ')[0] 
      : productData.description.split(' ').slice(0, 3).join(' '),
    description: productData.description,
    price,
    originalPrice,
    imageUrl: productData.imageUrl,
    category
  };

  const wishlisted = isWishlisted(product.id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied!" });
    }
  };

  const handleWhatsAppShare = () => {
    const text = `Check out this beautiful ${product.name} at Sumegha Handmades: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-primary transition-colors">Gallery</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">{product.category}</span>
          <ChevronRight className="h-3 w-3 hidden sm:block" />
          <span className="hidden sm:block truncate max-w-[150px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 w-full">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-white w-full">
              <Image src={product.imageUrl} alt={product.name} fill className="object-cover" priority />
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 w-full">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full uppercase tracking-widest text-[9px] font-black">{product.category}</Badge>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-3 w-3 fill-current" />)}
                </div>
                <span className="text-[10px] font-bold text-muted-foreground">(24)</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-7xl font-black font-headline tracking-tight uppercase leading-[1.1] text-foreground">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <p className="text-2xl lg:text-5xl font-black font-headline text-primary">₹{product.price}</p>
                <p className="text-lg lg:text-2xl text-muted-foreground line-through decoration-primary/30 font-light italic">₹{product.originalPrice}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-primary/5 space-y-2">
              <h3 className="font-bold text-[11px] uppercase tracking-widest flex items-center text-foreground">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                Artist's Story
              </h3>
              <p className="text-sm lg:text-base leading-relaxed text-muted-foreground italic">
                {product.description} Each piece is meticulously handcrafted by Sumegha, ensuring no two items are exactly alike.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 w-full">
              {/* Primary Actions - Sidewise with no horizontal scroll */}
              <div className="flex gap-3 w-full">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-14 lg:h-16 rounded-2xl text-[10px] font-bold uppercase tracking-widest border-primary text-primary hover:bg-primary/5 bg-transparent flex-1 shadow-sm px-2" 
                  onClick={() => {addToCart(product); toast({title: "Added to bag", description: product.name});}}
                >
                  <ShoppingCart className="h-4 w-4 mr-1.5" />
                  Add to Bag
                </Button>
                <Button 
                  size="lg" 
                  className="h-14 lg:h-16 rounded-2xl text-[10px] font-bold uppercase tracking-widest gradient-primary flex-1 shadow-lg shadow-primary/20 px-2" 
                  onClick={() => {addToCart(product); window.location.href = '/cart';}}
                >
                  <Zap className="h-4 w-4 mr-1.5" />
                  Buy Now
                </Button>
              </div>

              {/* Utility Actions - Properly Aligned Row */}
              <div className="flex items-center gap-3 pt-2 w-full">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className={cn(
                    "h-10 w-10 sm:h-12 sm:w-12 rounded-full border-primary/10 transition-all shrink-0",
                    wishlisted ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white hover:bg-primary/5'
                  )} 
                  onClick={() => wishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
                >
                  <Heart className={cn("h-4 w-4 sm:h-5 sm:w-5", wishlisted && "fill-primary")} />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-primary/10 bg-white hover:bg-primary/5 transition-all shrink-0" 
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-primary/10 bg-white hover:bg-green-50 text-foreground transition-all shrink-0" 
                  onClick={handleWhatsAppShare}
                >
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                
                <div className="h-px flex-grow bg-primary/5 mx-1" />
                
                <Link href="https://wa.me/919876543210" target="_blank" className="text-[9px] font-black uppercase tracking-widest text-primary flex items-center hover:opacity-70 transition-opacity whitespace-nowrap">
                  ASK THE ARTIST
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/5 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">In Stock</span>
              </div>
              <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Handmade in Jaipur</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
