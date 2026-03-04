
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Heart, ShoppingBag, TrendingUp, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import placeholderData from '@/app/lib/placeholder-images.json';

export default function AboutPage() {
  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started crafting small clay pieces from a tiny corner desk.",
      icon: Star
    },
    {
      year: "2021",
      title: "First Collection",
      description: "Launched 'Blossom' which sold out in days.",
      icon: Heart
    },
    {
      year: "2023",
      title: "Studio Opening",
      description: "Expanded our creative vision into a full studio.",
      icon: ShoppingBag
    }
  ];

  const instagramPosts = placeholderData.placeholderImages.filter(img => img.id.startsWith('insta-'));
  const artistPhoto = placeholderData.placeholderImages.find(img => img.id === 'artist-main')?.imageUrl;
  const processPhotos = placeholderData.placeholderImages.filter(img => img.id.startsWith('process-'));

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container-normal mx-auto space-y-16 pb-24">
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute left-0">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/50 shadow-sm h-12 w-12">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="text-center space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary">The Artist</p>
            <h1 className="text-3xl lg:text-7xl font-black uppercase tracking-tighter text-foreground">Our Story</h1>
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative w-48 h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
            <Image 
              src={artistPhoto || ''} 
              alt="Sumegha - The Artist" 
              fill
              sizes="(max-width: 1023px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl lg:text-8xl font-black text-foreground tracking-tight">Sumegha</h2>
            <p className="text-primary font-bold uppercase tracking-[0.4em] text-[12px]">Creator & Master Artist</p>
          </div>
          <p className="text-foreground/70 text-lg lg:text-2xl leading-relaxed italic max-w-2xl font-cursive">
            "Every piece is a fragment of my imagination, crafted to bring beauty and positive energy into your everyday life."
          </p>
        </div>

        <div className="space-y-16 pt-16">
          <div className="text-center space-y-4">
            <TrendingUp className="text-primary h-8 w-8 mx-auto opacity-30" />
            <h3 className="text-[11px] font-black text-foreground uppercase tracking-[0.4em]">The Evolution</h3>
          </div>

          <div className="relative max-w-lg mx-auto pl-12 space-y-16">
            <div className="absolute left-[20px] top-6 bottom-6 w-1 bg-primary/10" />
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="absolute -left-[40px] top-0 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border-2 border-primary/20">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-2 pt-1">
                    <p className="text-primary font-black text-[11px] tracking-[0.3em]">{item.year}</p>
                    <h4 className="text-xl font-black text-foreground uppercase tracking-tight">{item.title}</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-24 space-y-16">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 text-primary">
              <Instagram className="h-6 w-6" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em]">Behind the Scenes</span>
            </div>
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">Follow My Process</h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {(processPhotos.length > 0 ? processPhotos : instagramPosts.slice(0, 4)).map((img, i) => (
              <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl group">
                <Image 
                  src={img.imageUrl} 
                  alt={img.description} 
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center pt-8">
            <Link href="https://instagram.com/sumegha_handmades" target="_blank">
              <Button className="rounded-2xl gradient-primary h-16 px-14 text-[11px] font-bold uppercase tracking-[0.3em] shadow-2xl shadow-primary/30">
                Explore Studio on Instagram
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
