
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, TrendingUp, Star, Home, ShoppingBag, Heart, Leaf, HandHeart, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started crafting small clay pieces from a tiny corner desk in my bedroom.",
      icon: Star
    },
    {
      year: "2021",
      title: "First Collection",
      description: "Launched the 'Blossom' collection which sold out in just a few days.",
      icon: Home
    },
    {
      year: "2023",
      title: "Studio Opening",
      description: "Moved into a dedicated studio space to expand our creative vision.",
      icon: ShoppingBag
    }
  ];

  const philosophies = [
    {
      title: "100% Handmade",
      description: "Every single piece is shaped, painted, and finished by hand, ensuring unique character.",
      icon: HandHeart
    },
    {
      title: "Sustainably Sourced",
      description: "We use eco-friendly materials and packaging to minimize our footprint on the earth.",
      icon: Leaf
    },
    {
      title: "Made with Love",
      description: "Joy is baked into every creation, intended to bring a smile to whoever holds it.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF1EB] to-[#FFDDE1] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
              <ArrowLeft className="h-6 w-6 text-secondary" />
            </Button>
          </Link>
          <h1 className="text-3xl font-serif font-bold text-secondary">Our Story</h1>
          <div className="w-10" /> {/* Spacer for balance */}
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="relative w-48 h-48 mb-8">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/sumegha/400/400" 
                alt="Sumegha" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-4xl font-serif font-bold text-secondary mb-2">Sumegha</h2>
          <p className="text-primary font-bold text-lg mb-8 uppercase tracking-widest">Creator & Artist</p>
          
          <p className="text-secondary/70 text-xl font-medium leading-relaxed italic max-w-2xl">
            "Every piece is a fragment of my imagination, crafted with patience and love to bring a touch of beauty into your everyday life."
          </p>
        </div>

        {/* Our Journey Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="text-primary h-6 w-6" />
            <h3 className="text-2xl font-serif font-bold text-secondary">Our Journey</h3>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-primary/20" />
            
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-8 items-start relative">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md border border-primary/10 flex items-center justify-center z-10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="pt-1">
                    <p className="text-primary font-bold text-sm mb-1">{item.year}</p>
                    <h4 className="text-xl font-serif font-bold text-secondary mb-2">{item.title}</h4>
                    <p className="text-secondary/60 text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/50 mb-16">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Heart className="text-primary h-6 w-6 fill-primary" />
            <h3 className="text-2xl font-serif font-bold text-secondary text-center">Our Philosophy</h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {philosophies.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#FFF1EB]/50 p-6 rounded-3xl flex flex-col md:flex-row items-center md:items-start gap-6 transition-transform hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                    <p className="text-secondary/60 text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Connections */}
        <div className="text-center space-y-8 pt-12 border-t border-primary/10">
          <p className="text-secondary/40 font-medium uppercase tracking-widest text-sm">Connect with us</p>
          <div className="flex justify-center gap-6">
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-primary/20 text-primary hover:bg-primary/5">
              <Instagram className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-primary/20 text-primary hover:bg-primary/5">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-secondary/30 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Sumegha Handmades
          </p>
        </div>
      </div>
    </div>
  );
}
