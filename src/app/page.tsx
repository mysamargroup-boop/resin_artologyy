
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Truck, ChevronRight, Star, Quote, Sparkles, Instagram, Gem } from 'lucide-react';
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
import productsData from "@/lib/products.json";
import categoriesData from "@/lib/categories.json";
import placeholderData from "@/lib/placeholder-images.json";
import { Product } from "@/lib/types";

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [spotlightApi, setSpotlightApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [spotlightCurrent, setSpotlightCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const SLIDE_DURATION = 5000;

  const plugin = React.useRef(
    Autoplay({ delay: SLIDE_DURATION, stopOnInteraction: false })
  );

  const spotlightPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  React.useEffect(() => {
    if (!spotlightApi) return;
    setSpotlightCurrent(spotlightApi.selectedScrollSnap());
    spotlightApi.on("select", () => {
      setSpotlightCurrent(spotlightApi.selectedScrollSnap());
    });
  }, [spotlightApi]);
  
  const productsByCategory: Record<string, Product[]> = productsData.products.reduce((acc: Record<string, Product[]>, product: Product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const testimonials = [
    {
      name: "Anjali Mehta",
      role: "Newly Wed",
      content: "The flower preservation frame is the soul of our living room. It beautifully captures our wedding day memories.",
      stars: 5
    },
    {
      name: "Rohan Sharma",
      role: "Gifting Enthusiast",
      content: "The hand casting kit exceeded my expectations. Resin Artologyy's attention to detail is unmatched.",
      stars: 5
    },
    {
      name: "Priya Das",
      role: "Art Collector",
      content: "My ocean resin art is a treasure. It's royal, elegant, and perfectly handcrafted.",
      stars: 5
    }
  ];

  const instagramPosts = placeholderData.placeholderImages.filter(img => img.id.startsWith('insta-'));
  const spotlightImages = [
    { url: "https://picsum.photos/seed/spot1/1200/800", title: "Artisanal Details" },
    { url: "https://picsum.photos/seed/spot2/1200/800", title: "Premium Finishes" },
    { url: "https://picsum.photos/seed/spot3/1200/800", title: "Bespoke Creations" },
    { url: "https://picsum.photos/seed/spot4/1200/800", title: "Handcrafted Love" },
  ];

  const heroSlides = categoriesData.categories.map((cat, idx) => ({
    badge: "FEATURED COLLECTION",
    title: cat.name,
    categoryName: cat.name,
    desc: cat.description,
    image: cat.imageUrl || `https://picsum.photos/seed/hero-${idx}/1920/1080`
  }));

  const artisticCategories = categoriesData.categories.slice(0, 5);

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Categories Squares Section */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container-normal px-4 text-center">
          <div className="flex flex-col items-center gap-2 mb-12">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Explore Our Craft</h4>
            <h2 className="text-2xl lg:text-5xl font-black uppercase tracking-tight">Artistic Categories</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {artisticCategories.map((cat, index) => (
              <Link key={index} href={`/products?category=${encodeURIComponent(cat.name)}`} className="group block text-center space-y-4 relative aspect-square overflow-hidden rounded-3xl shadow-lg">
                <Image 
                  src={cat.imageUrl} 
                  alt={cat.name} 
                  fill
                  sizes="(max-width: 767px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                   <span className="block text-base sm:text-xl font-black uppercase tracking-widest text-white leading-tight drop-shadow-md text-center">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New 2-column Hero Slider */}
      <section className="w-full overflow-hidden py-16">
         <Carousel 
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative pl-0">
                <div className="container-normal">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Column: Text */}
                    <div className={cn(
                      "text-center md:text-left space-y-6 transition-all duration-1000 ease-out",
                       current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    )}>
                       <div className="inline-block px-5 py-2 rounded-full border border-primary/30 text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 backdrop-blur-md">
                          {slide.badge}
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black leading-none uppercase tracking-tight text-foreground drop-shadow-lg">
                          {slide.title}
                        </h1>
                        <p className="text-sm lg:text-base text-muted-foreground font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                          {slide.desc}
                        </p>
                        <div className="pt-4 lg:pt-6">
                          <Link href={`/products?category=${encodeURIComponent(slide.categoryName)}`}>
                            <Button className="h-14 lg:h-16 px-10 lg:px-12 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] gradient-primary border-none active:scale-95 transition-all hover:scale-105">
                              Shop {slide.categoryName}
                            </Button>
                          </Link>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative aspect-video w-full">
                       <Image 
                        src={slide.image}
                        alt={slide.categoryName}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className={cn(
                          "object-cover rounded-3xl transition-all duration-1000 ease-in-out",
                          current === index ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-110"
                        )}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className="relative h-1.5 w-10 bg-primary/10 rounded-full overflow-hidden transition-all duration-300"
                onClick={() => api?.scrollTo(i)}
              >
                {current === i && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-linear"
                  />
                )}
              </button>
            ))}
          </div>
        </Carousel>
      </section>

      {/* Masterpiece Gallery Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-normal px-4 text-center mb-16 space-y-4">
          <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary">Premium Spotlight</p>
          <h2 className="text-3xl lg:text-6xl font-black uppercase tracking-tight">The Masterpiece Gallery</h2>
        </div>
        
        <Carousel 
          setApi={setSpotlightApi}
          plugins={[spotlightPlugin.current]}
          opts={{ align: "center", loop: true }}
          className="w-full max-w-[1440px] mx-auto"
        >
          <CarouselContent className="-ml-4 sm:-ml-8">
            {spotlightImages.map((slide, index) => {
              const isActive = spotlightCurrent === index;
              return (
                <CarouselItem key={index} className="pl-4 sm:pl-8 basis-[80%] sm:basis-[60%] lg:basis-[45%]">
                  <div className={cn(
                    "relative aspect-video rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-in-out border-4 border-foreground/5",
                    isActive ? "scale-100 blur-0 opacity-100" : "scale-90 blur-md opacity-40"
                  )}>
                    <Image src={slide.url} alt={slide.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className={cn(
                      "absolute inset-0 flex flex-col items-center justify-center space-y-4 transition-all duration-700 delay-100 ease-out",
                      isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}>
                      <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-white drop-shadow-md">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Product Collections Grid */}
      {Object.entries(productsByCategory).map(([catName, products], idx) => (
        <section key={catName} className={cn(
          "py-24 relative overflow-hidden",
          idx % 2 === 0 ? "bg-secondary/20" : "bg-transparent"
        )}>
          <div className="container-normal relative z-10 px-4">
            <div className="flex items-center justify-between mb-12">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">{idx % 2 === 0 ? "Curated" : "Premium"} Selection</h4>
                <h2 className="text-2xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">{catName}</h2>
              </div>
              <Link href={`/products?category=${encodeURIComponent(catName)}`} className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] group border-b border-primary/20 pb-1">
                <span className="whitespace-nowrap">VIEW COLLECTION</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Instagram Feed */}
      <section className="py-24 bg-secondary/20">
        <div className="container-normal px-4">
          <div className="text-center mb-16 space-y-6">
            <Link 
              href="https://instagram.com/resinartologyy" 
              target="_blank" 
              className="inline-flex items-center gap-3 text-primary text-[11px] font-black uppercase tracking-[0.6em] hover:opacity-80 transition-opacity"
            >
              <Instagram className="h-5 w-5" />
              @resinartologyy
            </Link>
            <h2 className="text-3xl lg:text-6xl font-black uppercase tracking-tight">On the Gram</h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">Follow our creative journey and see how our art comes to life.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramPosts.map((post, i) => (
              <a key={i} href="https://instagram.com/resinartologyy" target="_blank" className="relative aspect-square group overflow-hidden rounded-2xl transition-all">
                <Image 
                  src={post.imageUrl} 
                  alt={`Instagram post ${i + 1}`} 
                  fill
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 16.66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white h-10 w-10 drop-shadow-lg" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/50 overflow-hidden">
        <div className="container-normal px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary">Our Collectors</p>
            <h2 className="text-3xl lg:text-6xl font-black uppercase tracking-tight">Kind Words & Stories</h2>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="flex flex-col items-center text-center space-y-10 px-8">
                    <Quote className="h-16 w-16 text-primary opacity-20" />
                    <div className="flex text-amber-400 gap-2 justify-center">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star key={s} className="h-6 w-6 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl lg:text-4xl text-foreground/80 leading-relaxed italic font-light max-w-3xl">
                      "{t.content}"
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-base font-black uppercase tracking-[0.3em] text-primary">{t.name}</h4>
                      <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.3em]">{t.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Signature & Our Story Section */}
      <section className="py-24 overflow-hidden">
        <div className="container-normal px-4 flex flex-col items-center text-center space-y-8">
           <h2 className="text-7xl lg:text-9xl font-cursive text-primary lowercase tracking-tight drop-shadow-sm select-none">
             Resin Artologyy
           </h2>
           <div className="max-w-2xl space-y-4">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">The Heart Behind the Art</p>
             <p className="text-xl lg:text-3xl font-light text-foreground/80 leading-relaxed italic">
               "Every piece we craft preserves a moment, a memory, a feeling."
             </p>
             <p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-medium">
              What started as a simple desire to preserve the warmth of human touch has evolved into a legacy of craftsmanship. Our work is a celebration of patience, precision, and the beautiful imperfections of the handmade process.
             </p>
           </div>
           <Link href="/about">
             <Button variant="link" className="text-primary font-black uppercase tracking-widest text-[10px] border-b border-primary/20 pb-1 h-auto">
               Read Our Full Story
             </Button>
           </Link>
        </div>
      </section>

      {/* Discovery CTA */}
      <section className="py-24">
        <div className="container-normal px-4">
          <div className="bg-secondary text-secondary-foreground p-12 lg:p-24 rounded-[3rem] lg:rounded-[5rem] text-center space-y-10 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image src={placeholderData.placeholderImages.find(img => img.id === 'hero-pattern')?.imageUrl || ''} alt="pattern" fill className="object-cover" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-black/5 border border-black/10 text-[10px] font-black uppercase tracking-widest">
                AI Powered Art Concierge
              </div>
              <h3 className="text-3xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-tight">Your Personal Curator</h3>
              <p className="text-muted-foreground text-base lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Describe your vision, and let our AI curate the perfect resin piece for you.
              </p>
              <div className="pt-6">
                <Link href="/discovery">
                  <Button className="h-16 px-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] gradient-primary shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                    Start Discovery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
