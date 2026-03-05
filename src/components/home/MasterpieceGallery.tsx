
"use client";

import * as React from "react";
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

export function MasterpieceGallery() {
  const [spotlightApi, setSpotlightApi] = React.useState<CarouselApi>();
  const [spotlightCurrent, setSpotlightCurrent] = React.useState(0);

  const spotlightPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  
  React.useEffect(() => {
    if (!spotlightApi) return;
    setSpotlightCurrent(spotlightApi.selectedScrollSnap());
    spotlightApi.on("select", () => {
      setSpotlightCurrent(spotlightApi.selectedScrollSnap());
    });
  }, [spotlightApi]);

  const spotlightImages = [
    { url: "https://picsum.photos/seed/spot1/1200/800", title: "Artisanal Details" },
    { url: "https://picsum.photos/seed/spot2/1200/800", title: "Premium Finishes" },
    { url: "https://picsum.photos/seed/spot3/1200/800", title: "Bespoke Creations" },
    { url: "https://picsum.photos/seed/spot4/1200/800", title: "Handcrafted Love" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container-normal px-4 text-center mb-12 space-y-4">
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
  );
}
