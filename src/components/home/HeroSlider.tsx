
"use client";

import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import categoriesData from "@/lib/categories.json";

export function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
    });
  }, [api]);

  const heroSlides = categoriesData.categories.map((cat, idx) => ({
    badge: "FEATURED COLLECTION",
    title: cat.name,
    categoryName: cat.name,
    desc: cat.description,
    image: cat.imageUrl || `https://picsum.photos/seed/hero-${idx}/1920/1080`
  }));

  return (
    <section className="w-full overflow-hidden">
      <Carousel 
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full relative"
      >
        <CarouselContent className="-ml-4 md:ml-0">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative pl-4 md:pl-0">
              <div className="container-normal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                    <div className="absolute bottom-4 left-4 flex gap-3 z-20">
                      {Array.from({ length: count }).map((_, i) => (
                        <button
                          key={i}
                          className={cn(
                            "relative h-1.5 w-10 bg-black/20 backdrop-blur-sm rounded-full overflow-hidden transition-all duration-300",
                            current === i ? "bg-white/70" : "bg-white/30"
                          )}
                          onClick={() => api?.scrollTo(i)}
                        >
                          {current === i && (
                            <div 
                              className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-linear"
                              style={{ 
                                animation: `progress ${SLIDE_DURATION}ms linear forwards`
                              }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={cn(
                    "text-center md:text-left space-y-4 md:space-y-6 transition-all duration-1000 ease-out",
                     current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}>
                     <div className="inline-block px-5 py-2 rounded-full border border-primary/30 text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 backdrop-blur-md">
                        {slide.badge}
                      </div>
                      <h1 className="text-3xl lg:text-4xl font-black leading-none uppercase tracking-tight text-foreground drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-sm lg:text-base text-muted-foreground font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                        {slide.desc}
                      </p>
                      <div className="pt-2 md:pt-4">
                        <Link href={`/products?category=${encodeURIComponent(slide.categoryName)}`}>
                          <Button className="h-12 px-8 md:h-14 lg:px-12 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] gradient-primary border-none active:scale-95 transition-all hover:scale-105">
                            Shop {slide.categoryName}
                          </Button>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <style jsx global>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
