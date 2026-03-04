
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MousePointer2, Truck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const SLIDE_DURATION = 7000;

  const plugin = React.useRef(
    Autoplay({ delay: SLIDE_DURATION, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + (100 / (SLIDE_DURATION / 100))));
    }, 100);
    return () => clearInterval(interval);
  }, [api, current]);

  const categories = [
    { name: "Festive / Special Gifts", image: "https://picsum.photos/seed/cat-gifts/400/400" },
    { name: "Home Decor", image: "https://picsum.photos/seed/cat-decor/400/400" },
    { name: "Wedding", image: "https://picsum.photos/seed/cat-wedding/400/400" },
    { name: "Diwali decor", image: "https://picsum.photos/seed/cat-diwali/400/400" },
    { name: "Anniversary", image: "https://picsum.photos/seed/cat-anniversary/400/400" }
  ];

  const productsByCategory: Record<string, any[]> = {
    "Festive / Special Gifts": [
      { id: "fest-1", name: "Floral Pooja Thali", price: 899, originalPrice: 1200, imageUrl: "https://picsum.photos/seed/pooja/600/600", category: "Festive", tags: ["Bestseller"], rating: 5 },
      { id: "fest-2", name: "Handpainted Diya Set", price: 450, originalPrice: 600, imageUrl: "https://picsum.photos/seed/diya/600/600", category: "Festive", tags: ["New Arrival"], rating: 4 },
      { id: "fest-3", name: "Custom Gift Hamper", price: 1500, originalPrice: 2000, imageUrl: "https://picsum.photos/seed/hamper/600/600", category: "Festive", tags: ["Top Selling"], rating: 5 },
    ],
    "Home Decor": [
      { id: "home-1", name: "Lippan Mirror Art", price: 1299, originalPrice: 1800, imageUrl: "https://picsum.photos/seed/lippan/600/600", category: "Home Decor", tags: ["Bestseller"], rating: 5 },
      { id: "home-2", name: "Ceramic Floor Vase", price: 2500, originalPrice: 3500, imageUrl: "https://images.unsplash.com/photo-1631125915732-b98f8774f675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2VyYW1pYyUyMHZhc2V8ZW58MHx8fHwxNzcyNTI3MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080", category: "Home Decor", tags: ["Top Selling"], rating: 4 },
    ],
    "Wedding": [
      { id: "wed-1", name: "Bridal Trunk Box", price: 3500, originalPrice: 4500, imageUrl: "https://picsum.photos/seed/trunk/600/600", category: "Wedding", tags: ["Luxury"], rating: 5 },
      { id: "wed-2", name: "Wedding Shagun Envelope", price: 150, originalPrice: 200, imageUrl: "https://picsum.photos/seed/env/600/600", category: "Wedding", tags: ["Top Selling"], rating: 5 },
    ]
  };

  const heroSlides = [
    {
      badge: "HANDMADE ELEGANCE",
      title: "BESPOKE",
      highlight: "ARTISTRY",
      desc: "Experience contemporary design through bespoke handmade elegance. Every piece is a testament to sophisticated simplicity.",
      image: "https://picsum.photos/seed/art-bg/1920/1080",
    },
    {
      badge: "PERSONALIZED FOR YOU",
      title: "HANDMADE",
      highlight: "TREASURES",
      desc: "Each piece is meticulously handcrafted, ensuring no two items are exactly alike.",
      image: "https://picsum.photos/seed/jewelry-bg/1920/1080",
    },
    {
      badge: "NEW COLLECTION",
      title: "FESTIVE",
      highlight: "SPIRIT",
      desc: "Celebrate traditions with our vibrant new range of festive home decor and unique gifts.",
      image: "https://picsum.photos/seed/festive-bg/1920/1080",
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative w-full px-4 sm:px-6 pt-6 pb-12">
        <Carousel 
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative pl-0">
                <div className="relative h-[55vh] sm:h-[70vh] min-h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black/5 border border-white/20">
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className={cn(
                        "object-cover transition-all duration-1000",
                        current === index ? "opacity-80 blur-0 scale-100" : "opacity-0 blur-md scale-110"
                      )}
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/40" />
                  </div>

                  <div className={cn(
                    "relative z-10 h-full flex items-center justify-center p-6 text-center transition-all duration-1000 delay-300",
                    current === index ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
                  )}>
                    <div className="max-w-2xl w-full flex flex-col items-center space-y-6">
                      <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white bg-white/10 backdrop-blur-md">
                        {slide.badge}
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-3xl sm:text-7xl font-black leading-none uppercase tracking-tighter text-white drop-shadow-lg">
                          {slide.title}
                        </h1>
                        <h2 className="text-3xl sm:text-7xl font-black leading-none uppercase tracking-tighter text-primary drop-shadow-lg">
                          {slide.highlight}
                        </h2>
                      </div>
                      <p className="text-sm sm:text-xl text-white/90 font-medium leading-relaxed max-w-lg drop-shadow-md">
                        {slide.desc}
                      </p>
                      <Link href="/products" className="pt-4">
                        <Button className="h-14 px-12 rounded-xl text-[10px] font-bold uppercase tracking-widest gradient-primary border-none shadow-xl shadow-primary/40 active:scale-95 transition-all">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className="relative h-1 w-8 bg-primary/10 rounded-full overflow-hidden transition-all duration-300"
                onClick={() => api?.scrollTo(i)}
              >
                {current === i && (
                  <div 
                    className="absolute top-0 left-0 h-full gradient-primary transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </Carousel>
      </section>

      <section className="py-12 bg-white/40 border-b border-white">
        <div className="container-normal px-4">
          <div className="flex flex-col items-center text-center gap-1 mb-8">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Discover Our</h4>
            <h2 className="text-xl lg:text-4xl font-black uppercase tracking-tight">Artistic Categories</h2>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat, index) => (
              <Link key={index} href={`/products?category=${cat.name}`} className="group block shrink-0 text-center space-y-2 w-28 sm:w-40">
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-white shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-primary/5">
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <span className="block text-[9px] font-black uppercase tracking-widest text-foreground/60 group-hover:text-primary leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {Object.entries(productsByCategory).map(([catName, products], idx) => (
        <section key={catName} className={cn(
          "py-16 relative overflow-hidden",
          idx % 2 === 0 ? "bg-white/20" : "bg-white/40"
        )}>
          <div className="container-normal relative z-10 px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">{idx % 2 === 0 ? "Curated" : "Premium"} Selection</h4>
                <h2 className="text-xl lg:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">{catName}</h2>
              </div>
              <Link href={`/products?category=${catName}`} className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[9px] group">
                <span className="whitespace-nowrap">VIEW ALL</span>
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="container-normal px-4">
          <div className="bg-[#181113] text-white p-10 lg:p-20 rounded-[2.5rem] text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[8px] font-bold uppercase tracking-[0.3em]">
                AI Powered Concierge
              </div>
              <h3 className="text-2xl lg:text-5xl font-black uppercase tracking-tight text-white">Your Personal Curator</h3>
              <p className="text-white/60 text-xs lg:text-lg font-light max-w-md mx-auto leading-relaxed">
                Describe your vibe, and let our AI curate the perfect handmade selection for you.
              </p>
            </div>
            <Link href="/discovery" className="inline-block">
              <Button className="h-12 px-10 rounded-xl text-[10px] font-bold uppercase tracking-widest gradient-primary">
                Start Discovery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
