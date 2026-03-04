"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Heart, ShoppingBag, Sparkles, HandHeart, Leaf, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started crafting small clay pieces and handpainted miniatures from a sunlit corner desk.",
      icon: Star
    },
    {
      year: "2021",
      title: "First Collection",
      description: "Launched our signature tote series, connecting with our first 100 art lovers.",
      icon: Heart
    },
    {
      year: "2023",
      title: "Studio Opening",
      description: "Established the official Sumegha Handmades studio to bring bespoke art to life.",
      icon: ShoppingBag
    }
  ];

  const philosophies = [
    {
      title: "100% Handmade",
      description: "Every piece is shaped, painted, and finished by hand, ensuring unique soul in every detail.",
      icon: HandHeart
    },
    {
      title: "Eco-Conscious",
      description: "Sustainable materials and plastic-free packaging for a gentler touch on our planet.",
      icon: Leaf
    },
    {
      title: "Made with Love",
      description: "Joy is infused into every creation, intended to bring a smile to your everyday life.",
      icon: Flower2
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white shadow-sm text-foreground h-14 w-14">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-black text-foreground uppercase tracking-[0.3em] text-center">Our Story</h1>
          <div className="hidden md:block w-14" />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-40">
          <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white">
            <Image 
              src="https://picsum.photos/seed/sumegha/800/1000" 
              alt="Sumegha - The Artist" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-8 md:space-y-12 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-primary font-display font-bold text-sm uppercase tracking-[0.3em]">Creator & Artist</span>
              <h2 className="text-5xl md:text-8xl font-cursive text-primary font-bold">Sumegha</h2>
            </div>
            
            <p className="text-foreground/80 text-2xl md:text-3xl leading-relaxed italic font-cursive border-l-0 md:border-l-8 border-primary/20 pl-0 md:pl-10">
              "Art has always been my sanctuary. Sumegha Handmades is my way of sharing that peace with the world, one handcrafted detail at a time."
            </p>
            
            <div className="p-8 md:p-12 bg-white/60 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] border border-white/50 space-y-6 shadow-xl">
              <h3 className="font-display font-black text-xl md:text-2xl flex items-center justify-center md:justify-start gap-3 text-foreground uppercase tracking-[0.2em]">
                <Sparkles className="text-primary h-6 w-6 md:h-7 md:w-7" />
                The Vision
              </h3>
              <p className="text-foreground/70 leading-relaxed text-lg md:text-xl font-light">
                We believe that in a world of mass production, the human touch is what truly resonates. Every piece we create is a fragment of imagination, patiently brought to life to transform your everyday spaces into galleries of elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="mb-40">
          <h3 className="text-3xl md:text-4xl font-display font-black text-foreground text-center mb-24 uppercase tracking-[0.4em]">The Journey</h3>

          <div className="relative space-y-24 md:space-y-32 max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1 bg-primary/10 hidden md:block" />
            
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 px-6 md:px-10 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-primary font-display font-black text-2xl md:text-3xl mb-2">{item.year}</p>
                    <h4 className="text-2xl md:text-3xl font-display font-black text-foreground mb-4 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-foreground/60 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0">{item.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-2xl border-4 md:border-8 border-white flex items-center justify-center z-10 scale-110">
                    <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                  </div>
                  
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-32 shadow-2xl border border-white/50 mb-16">
          <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-24 text-center uppercase tracking-[0.4em]">The Philosophy</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {philosophies.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="space-y-6 md:space-y-8 text-center group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-all duration-500">
                    <Icon className="h-10 w-10 md:h-12 md:w-12 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-black text-foreground uppercase tracking-[0.2em]">{item.title}</h4>
                  <p className="text-foreground/60 text-lg md:text-xl font-light leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
