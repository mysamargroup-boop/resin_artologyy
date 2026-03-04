
"use client";

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Share2, MessageCircle, Star, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart, addToWishlist, isWishlisted, removeFromWishlist } = useStore();
  
  // Find product in dummy data store
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

  // Construct UI product object with original price logic
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
    <div className="container mx-auto px-4 py-8 lg:py-12">
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
        <div className="space-y-4">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-white">
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" priority />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer hover:opacity-80 transition-opacity bg-white">
                <Image src={`https://picsum.photos/seed/${product.id}${i}/400/400`} alt="Detail" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full uppercase tracking-widest text-[9px] font-black">{product.category}</Badge>
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-3 w-3 fill-current" />)}
              </div>
              <span className="text-[10px] font-bold text-muted-foreground">(24)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tight uppercase leading-[1.1]">{product.name}</h1>
            <div className="flex items-center gap-3">
              <p className="text-3xl lg:text-5xl font-black font-headline text-primary">₹{product.price}</p>
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
          <div className="space-y-4">
            {/* Primary Actions */}
            <div className="flex gap-3">
              <Button 
                size="lg" 
                className="h-14 lg:h-16 rounded-2xl text-xs font-bold uppercase tracking-widest border border-primary text-primary hover:bg-primary/5 bg-transparent flex-1 shadow-lg shadow-primary/5" 
                onClick={() => {addToCart(product); toast({title: "Added to bag", description: product.name});}}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Bag
              </Button>
              <Button 
                size="lg" 
                className="h-14 lg:h-16 rounded-2xl text-xs font-bold uppercase tracking-widest gradient-primary flex-1 shadow-xl shadow-primary/20" 
                onClick={() => {addToCart(product); window.location.href = '/cart';}}
              >
                <Zap className="h-5 w-5 mr-2" />
                Buy Now
              </Button>
            </div>

            {/* Utility Actions */}
            <div className="flex items-center gap-3 pt-2">
              <Button 
                size="icon" 
                variant="outline" 
                className={cn(
                  "h-12 w-12 rounded-full border-primary/10 transition-all shrink-0",
                  wishlisted ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white hover:bg-primary/5'
                )} 
                onClick={() => wishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
              >
                <Heart className={cn("h-5 w-5", wishlisted && "fill-primary")} />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="h-12 w-12 rounded-full border-primary/10 bg-white hover:bg-primary/5 transition-all shrink-0" 
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="h-12 w-12 rounded-full border-primary/10 bg-white hover:bg-green-50 text-foreground transition-all shrink-0" 
                onClick={handleWhatsAppShare}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              
              <div className="h-px flex-grow bg-primary/5 mx-2" />
              
              <Link href="https://wa.me/919876543210" target="_blank" className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center hover:opacity-70 transition-opacity">
                ASK THE ARTIST
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-primary/5 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">In Stock & Ready to Ship</span>
            </div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Handmade in Jaipur</div>
          </div>
        </div>
      </div>
    </div>
  );
}
