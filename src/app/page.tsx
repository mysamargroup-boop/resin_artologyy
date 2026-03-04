
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

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const SLIDE_DURATION = 5000;

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
      { id: "fest-4", name: "Artisan Box", price: 750, originalPrice: 950, imageUrl: "https://picsum.photos/seed/box/600/600", category: "Festive", tags: ["Bestseller"], rating: 4 },
      { id: "fest-5", name: "Wall Hanging Art", price: 1100, originalPrice: 1400, imageUrl: "https://picsum.photos/seed/hang/600/600", category: "Festive", tags: ["Trending"], rating: 5 },
      { id: "fest-6", name: "Silver Plated Plate", price: 1999, originalPrice: 2500, imageUrl: "https://picsum.photos/seed/silver/600/600", category: "Festive", tags: ["Premium"], rating: 5 },
    ],
    "Home Decor": [
      { id: "home-1", name: "Lippan Mirror Art", price: 1299, originalPrice: 1800, imageUrl: "https://picsum.photos/seed/lippan/600/600", category: "Home Decor", tags: ["Bestseller"], rating: 5 },
      { id: "home-2", name: "Ceramic Floor Vase", price: 2500, originalPrice: 3500, imageUrl: "https://images.unsplash.com/photo-1631125915732-b98f8774f675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2VyYW1pYyUyMHZhc2V8ZW58MHx8fHwxNzcyNTI3MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080", category: "Home Decor", tags: ["Top Selling"], rating: 4 },
      { id: "home-3", name: "Macrame Wall Decor", price: 850, originalPrice: 1100, imageUrl: "https://picsum.photos/seed/macrame-home/600/600", category: "Home Decor", tags: ["New Arrival"], rating: 5 },
      { id: "home-4", name: "Abstract Canvas", price: 1800, originalPrice: 2200, imageUrl: "https://picsum.photos/seed/canvas/600/600", category: "Home Decor", tags: ["Trending"], rating: 4 },
      { id: "home-5", name: "Scented Candle Set", price: 599, originalPrice: 799, imageUrl: "https://picsum.photos/seed/candle-home/600/600", category: "Home Decor", tags: ["Bestseller"], rating: 5 },
      { id: "home-6", name: "Handwoven Cushion", price: 450, originalPrice: 650, imageUrl: "https://picsum.photos/seed/cushion/600/600", category: "Home Decor", tags: ["Soft Living"], rating: 4 },
    ],
    "Wedding": [
      { id: "wed-1", name: "Bridal Trunk Box", price: 3500, originalPrice: 4500, imageUrl: "https://picsum.photos/seed/trunk/600/600", category: "Wedding", tags: ["Luxury"], rating: 5 },
      { id: "wed-2", name: "Wedding Shagun Envelope", price: 150, originalPrice: 200, imageUrl: "https://picsum.photos/seed/env/600/600", category: "Wedding", tags: ["Top Selling"], rating: 5 },
      { id: "wed-3", name: "Handmade Wedding Card", price: 250, originalPrice: 350, imageUrl: "https://picsum.photos/seed/card/600/600", category: "Wedding", tags: ["Custom"], rating: 4 },
      { id: "wed-4", name: "Floral Jewelry Set", price: 999, originalPrice: 1300, imageUrl: "https://picsum.photos/seed/floral/600/600", category: "Wedding", tags: ["Bestseller"], rating: 5 },
      { id: "wed-5", name: "Traditional Potli", price: 650, originalPrice: 850, imageUrl: "https://picsum.photos/seed/potli/600/600", category: "Wedding", tags: ["New Arrival"], rating: 5 },
      { id: "wed-6", name: "Shubh Labh Hangings", price: 450, originalPrice: 550, imageUrl: "https://picsum.photos/seed/labh/600/600", category: "Wedding", tags: ["Traditional"], rating: 4 },
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
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative w-full px-4 sm:px-6 pt-6 pb-12">
        <Carousel 
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative pl-0">
                <div className="relative h-[65vh] sm:h-[75vh] min-h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black/5 border border-white/20">
                  {/* Background & Overlay Layer */}
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover opacity-80 rounded-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 rounded-2xl" />
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 h-full flex items-center justify-center p-6 text-center">
                    <div className="flex flex-col items-center space-y-6">
                      <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.4em] text-white bg-white/10 backdrop-blur-md">
                        {slide.badge}
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black leading-none uppercase tracking-tighter text-white">
                          {slide.title}
                        </h1>
                        <h2 className="text-3xl sm:text-6xl lg:text-8xl font-black leading-none uppercase tracking-tighter text-primary">
                          {slide.highlight}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-lg text-white/90 font-medium max-w-xl leading-relaxed">
                        {slide.desc}
                      </p>
                      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm pt-4">
                        <Link href="/products" className="w-full">
                          <Button className="w-full h-14 rounded-2xl text-xs font-bold uppercase tracking-widest gradient-primary border-none shadow-3xl shadow-primary/20">
                            Shop Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className="relative h-1.5 w-10 bg-primary/10 rounded-full overflow-hidden transition-all duration-300"
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

      {/* Categories Slider */}
      <section className="py-12 bg-white/40 border-b border-white">
        <div className="container-normal px-4">
          <div className="flex flex-col items-center text-center gap-2 mb-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Discover Our</h4>
            <h2 className="text-xl lg:text-5xl font-black uppercase tracking-tight">Artistic Categories</h2>
          </div>
          <div className="flex items-center gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat, index) => (
              <Link key={index} href={`/products?category=${cat.name}`} className="group block shrink-0 text-center space-y-3 w-32 sm:w-40">
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-white shadow-md transition-all duration-500 group-hover:scale-105">
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-foreground/60 group-hover:text-primary whitespace-normal leading-tight h-8 flex items-center justify-center">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Category Sections */}
      {Object.entries(productsByCategory).map(([catName, products], idx) => (
        <section key={catName} className={cn(
          "py-16 relative overflow-hidden",
          idx % 2 === 0 ? "bg-white/20" : "bg-white/40"
        )}>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
            {idx % 3 === 0 ? (
              <div className="absolute -right-20 -top-20 w-[400px] h-[400px] border-[20px] border-primary rounded-full animate-[spin_30s_linear_infinite]" />
            ) : idx % 3 === 1 ? (
              <svg viewBox="0 0 1000 1000" className="w-full h-full text-primary" preserveAspectRatio="none">
                <path d="M0,1000 C300,800 400,1000 1000,800 L1000,1000 L0,1000 Z" fill="currentColor" />
              </svg>
            ) : (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-dashed border-primary rounded-full opacity-20" />
            )}
          </div>

          <div className="container-normal relative z-10 px-4">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1 pr-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">{idx % 2 === 0 ? "Curated" : "Premium"} Selection</h4>
                <h2 className="text-xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">{catName}</h2>
              </div>
              <Link href={`/products?category=${catName}`} className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] group shrink-0">
                <div className="flex flex-col text-right leading-[1.2]">
                  <span>VIEW</span>
                  <span>ALL</span>
                </div>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {products.slice(0, 6).map((product) => (
                  <CarouselItem key={product.id} className="pl-4 basis-[75%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      ))}

      {/* Experience Section */}
      <section className="py-16">
        <div className="container-normal px-4">
          <h4 className="text-[12px] font-bold text-center mb-12 uppercase tracking-[0.5em] text-primary">The Art Experience</h4>
          <div className="grid grid-cols-3 gap-4 sm:gap-24">
            {[
              { title: "CURATE", desc: "Select from our gallery.", icon: MousePointer2 },
              { title: "CONNECT", desc: "Direct consultation.", icon: WhatsAppIcon },
              { title: "CHERISH", desc: "Bespoke delivery.", icon: Truck }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 sm:space-y-6 group">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg border border-primary/10 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110">
                    <Icon className="h-6 w-6 sm:h-10 sm:w-10 text-primary stroke-[1.5px]" />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h5 className="font-black text-[10px] sm:text-lg uppercase tracking-widest text-foreground">{step.title}</h5>
                    <p className="text-foreground/50 text-[8px] sm:text-xs font-light leading-relaxed max-w-[80px] sm:max-w-[200px] mx-auto">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-normal px-4">
          <div className="bg-[#181113] text-white p-12 lg:p-24 rounded-[3rem] text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.4em] text-white">
                AI Powered Concierge
              </div>
              <h3 className="text-3xl lg:text-7xl font-black uppercase tracking-tight leading-tight text-white">Your Personal Art Curator</h3>
              <p className="text-white/60 text-sm lg:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Not sure which piece fits your aesthetic? Our AI Assistant can curate a selection based on your unique style and space.
              </p>
            </div>
            <Link href="/discovery" className="inline-block pt-4">
              <Button className="h-16 px-12 rounded-xl text-xs font-bold uppercase tracking-widest gradient-primary border-none shadow-3xl shadow-primary/40">
                Start Discovery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
