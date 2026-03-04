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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white shadow-sm text-foreground">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-3xl font-display font-extrabold text-foreground uppercase tracking-widest">Our Story</h1>
          <div className="w-10" />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src="https://picsum.photos/seed/sumegha/800/1000" 
              alt="Sumegha - The Artist" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-display font-bold text-sm uppercase tracking-widest">Creator & Artist</span>
              <h2 className="text-5xl md:text-7xl font-cursive text-primary font-bold">Sumegha</h2>
            </div>
            
            <p className="text-foreground/80 text-2xl leading-relaxed italic font-cursive border-l-4 border-primary/20 pl-6">
              "Art has always been my sanctuary. Sumegha Handmades is my way of sharing that peace with the world, one handcrafted detail at a time."
            </p>
            
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white/50 space-y-4 shadow-sm">
              <h3 className="font-display font-bold text-xl flex items-center gap-2 text-foreground uppercase tracking-widest">
                <Sparkles className="text-primary h-5 w-5" />
                The Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe that in a world of mass production, the human touch is what truly resonates. Every piece we create is a fragment of imagination, patiently brought to life to transform your everyday spaces into galleries of elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="mb-32">
          <h3 className="text-4xl font-display font-extrabold text-foreground text-center mb-16 uppercase tracking-widest">The Journey</h3>

          <div className="relative space-y-20 max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-primary/10 hidden md:block" />
            
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 px-4 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-primary font-display font-black text-2xl mb-1">{item.year}</p>
                    <h4 className="text-2xl font-display font-extrabold text-foreground mb-3 uppercase">{item.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto md:mx-0">{item.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center z-10 scale-110">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 shadow-xl border border-white/50 mb-16">
          <h3 className="text-4xl font-display font-extrabold text-foreground mb-16 text-center uppercase tracking-widest">The Philosophy</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophies.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="space-y-6 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-foreground uppercase tracking-wider">{item.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
