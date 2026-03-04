
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, PanelsTopLeft, MousePointer2, Truck, Gem, ArrowRight, Shapes } from 'lucide-react';
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
      title: "BESPOKE",
      highlight: "JEWELRY",
      desc: "Each piece is meticulously handcrafted, ensuring no two items are exactly alike.",
      image: "https://picsum.photos/seed/jewelry-bg/1920/1080",
    },
    {
      badge: "ARTISANAL SOUL",
      title: "CRAFTED",
      highlight: "WITH LOVE",
      desc: "Discover unique, heartfelt creations from traditional pottery to modern paintings.",
      image: "https://picsum.photos/seed/craft-bg/1920/1080",
    }
  ];

  const featuredProducts = [
    { id: "lippan-1", name: "Vibrant Lippan Art", description: "Traditional mirror work handcrafted.", price: 1299, originalPrice: 1999, imageUrl: "https://picsum.photos/seed/art1/600/600", category: "Art", tags: ['Bestseller'] },
    { id: "nameplate-1", name: "Custom Nameplates", description: "Elegant personalized ceramic nameplates.", price: 1599, originalPrice: 2200, imageUrl: "https://picsum.photos/seed/name1/600/600", category: "Decor" },
    { id: "folk-art-1", name: "Indian Folk Art", description: "Authentic traditional patterns.", price: 899, originalPrice: 1200, imageUrl: "https://picsum.photos/seed/folk1/600/600", category: "Art", tags: ['Bestseller'] },
    { id: "festive-decor-1", name: "Festive Decor", description: "Handcrafted ornaments for every occasion.", price: 650, originalPrice: 950, imageUrl: "https://picsum.photos/seed/decor1/600/600", category: "Decor" },
    { id: "jewelry-1", name: "Artisanal Jewelry", description: "Handcrafted pieces that tell a story.", price: 450, originalPrice: 799, imageUrl: "https://picsum.photos/seed/jewel1/600/600", category: "Jewelry" }
  ];

  const categories = [
    { name: "Ceramics", image: "https://picsum.photos/seed/cat-ceramics/400/400" },
    { name: "Paintings", image: "https://picsum.photos/seed/cat-paintings/400/400" },
    { name: "Jewelry", image: "https://picsum.photos/seed/cat-jewelry/400/400" },
    { name: "Boho", image: "https://picsum.photos/seed/cat-boho/400/400" },
    { name: "Decor", image: "https://picsum.photos/seed/cat-decor/400/400" },
    { name: "Textile", image: "https://picsum.photos/seed/cat-textile/400/400" },
    { name: "Nameplates", image: "https://picsum.photos/seed/cat-name/400/400" },
    { name: "Folk Art", image: "https://picsum.photos/seed/cat-folk/400/400" }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative w-full h-[85vh] min-h-[700px] overflow-hidden">
        <Carousel 
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-full pl-0">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-20"
                    priority
                  />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center py-20 px-6">
                  <div className="container-normal flex flex-col items-center text-center space-y-8">
                    <div className="inline-block px-6 py-2 rounded-full border border-primary/20 text-[10px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5">
                      {slide.badge}
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-5xl lg:text-8xl font-black leading-none uppercase tracking-tighter text-foreground">
                        {slide.title}
                      </h1>
                      <h2 className="text-5xl lg:text-8xl font-black leading-none uppercase tracking-tighter text-primary">
                        {slide.highlight}
                      </h2>
                    </div>
                    <p className="text-lg lg:text-2xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
                      {slide.desc}
                    </p>
                    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <Link href="/products" className="w-full">
                          <Button className="w-full h-16 px-12 rounded-2xl text-xs font-bold uppercase tracking-widest gradient-primary">
                            View Collection
                          </Button>
                        </Link>
                        <Button 
                          variant="secondary" 
                          className="w-full h-16 px-12 rounded-2xl text-xs font-bold uppercase tracking-widest bg-white border border-gray-100 shadow-sm flex items-center justify-center gap-2 group hover:bg-gray-50"
                          onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                        >
                          <WhatsAppIcon className="h-5 w-5 text-green-600" />
                          WhatsApp Order
                        </Button>
                      </div>

                      {/* Autoplay Loading Indicators */}
                      <div className="flex gap-4 z-20 mt-4">
                        {Array.from({ length: count }).map((_, i) => (
                          <button
                            key={i}
                            className="relative h-1 w-12 bg-primary/10 rounded-full overflow-hidden"
                            onClick={() => api?.scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                          >
                            {current === i && (
                              <div 
                                className="absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-linear"
                                style={{ width: `${progress}%` }}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Collections Rounded Slider */}
      <section className="py-24 bg-white/30 backdrop-blur-sm border-b border-white">
        <div className="container-normal">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Browse</h4>
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">Explore Collections</h2>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full px-4 md:px-0">
            <CarouselContent className="-ml-4">
              {categories.map((cat, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <Link href={`/products?category=${cat.name}`} className="group block text-center space-y-4">
                    <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:border-primary/20 group-hover:shadow-xl">
                      <Image 
                        src={cat.image} 
                        alt={cat.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Featured Works Grid */}
      <section className="py-24">
        <div className="container-normal">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 px-2">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Gallery</h4>
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-foreground">Featured Works</h2>
            </div>
            <Link href="/products" className="text-foreground text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
              See All Gallery
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Slider Section (Second Slider) */}
      <section className="py-24 bg-white/50 border-y border-white">
        <div className="container-normal">
          <div className="text-center mb-16 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Trending Now</h4>
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-foreground">Most Loved Pieces</h2>
          </div>
          <Carousel 
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredProducts.concat(featuredProducts).map((product, index) => (
                <CarouselItem key={`${product.id}-${index}`} className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/5">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container-normal">
          <div className="bg-white p-12 lg:p-24 rounded-[3rem] shadow-sm text-center border border-gray-100 space-y-8">
            <PanelsTopLeft className="h-10 w-10 text-primary/30 mx-auto" />
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">The Philosophy</h4>
            <p className="text-foreground/70 text-lg md:text-3xl leading-relaxed font-light italic max-w-4xl mx-auto">
              "Rooted in contemporary aesthetics and traditional soul, we believe in the power of handmade elements to transform spaces into personal sanctuaries of elegance."
            </p>
            <div className="w-16 h-[2px] bg-primary/30 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container-normal">
          <h4 className="text-[10px] font-bold text-center mb-24 uppercase tracking-[0.5em] text-primary">The Experience</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { id: '01', title: "Curate", desc: "Select from our gallery of hand-designed artisan creations.", icon: MousePointer2 },
              { id: '02', title: "Connect", desc: "Direct consultation for bespoke modifications via WhatsApp.", icon: WhatsAppIcon },
              { id: '03', title: "Cherish", desc: "Bespoke delivery of a piece crafted specifically for you.", icon: Truck }
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center text-center gap-8 group">
                  <div className="size-16 rounded-2xl border border-primary/10 flex items-center justify-center text-[10px] font-black text-primary bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/20">
                    {typeof Icon === 'string' ? Icon : <Icon className="h-6 w-6 text-primary group-hover:text-white" />}
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-bold text-lg uppercase tracking-widest text-foreground">{step.title}</h5>
                    <p className="text-foreground/60 text-xs font-light leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-24">
        <div className="container-normal">
          <div className="bg-[#181113] text-white p-12 lg:p-24 rounded-[4rem] text-center space-y-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 -mr-12 -mt-12 pointer-events-none">
              <Sparkles className="w-full h-full text-white" />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                AI Powered
              </div>
              <h3 className="text-3xl lg:text-6xl font-black uppercase tracking-[0.1em] text-white">Ask the Art Concierge</h3>
              <p className="text-white/60 text-sm lg:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Not sure which piece fits your aesthetic? Our AI Assistant can curate a selection based on your unique style.
              </p>
            </div>
            <Link href="/discovery" className="inline-block">
              <Button className="h-16 px-16 rounded-2xl text-[10px] font-bold uppercase tracking-widest gradient-primary border-none shadow-2xl shadow-primary/40 text-white">
                Start Discovery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
