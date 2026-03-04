"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Sparkles, ChevronRight, PanelsTopLeft, MousePointer2, Truck, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = [
    {
      id: "lippan-1",
      name: "Vibrant Lippan Art",
      description: "Traditional mirror work handcrafted with precision.",
      price: 1299,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdc7QHqmb8IoFw1otk9qpDxgkSPFRF6v-g9-5wUHln1LJGtaytUpF9dDwusObFHk6_SzO1aI-t6j8Y93gOlZXcQUTlQqYz153HEzKAK3peQTe5dLHDSkdyFmdySPUJvRZI0dCkMg9DXujNS1ZfX2KnrQc-NH1GRCM2FhOfkLfSUh4KW4rpZ0fIspAwU_rEmx2J3S4iySUFnCHvEB6tqbdKgnQTNV1JYCP9at0W7pUqgwTOoRuJncTZBnjhx0C4kD3sES8ZoEUXmUqS",
      category: "Art"
    },
    {
      id: "nameplate-1",
      name: "Custom Nameplates",
      description: "Elegant personalized ceramic nameplates for your home.",
      price: 1599,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5zZUhE3Y6R0W0llzf9IYPUY54CnECp6lnAAgpPAOZXAVcovYGiPinIU5GU5hFXHABy7Rv8cgeHrVED6CN7ALdvaHQV7v8-oIH2SWmAw0nL9-NDb5h8Ms_Fi4HWNbhj2t9NlGtCN7JK8hogz7baDruuQaOxdjjdO3uKU9Ni2KOBgyFmV8k0OeewvIzaumYWoke22z5uIKAtVgNtnjQeEhTi____7CDtA1VAyDyd4c4ixsA8S85-dszzsrBphWbt7iD_Ig7hMZfTcmE",
      category: "Decor"
    },
    {
      id: "folk-art-1",
      name: "Indian Folk Art",
      description: "Authentic traditional patterns on canvas.",
      price: 899,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD63rFSKw-M6kg2WTaH9p8ikR9JvpsN4Dqj-g-rQ52URHNznf5jw3X80OgUQbWEbdeuoGWqLg9PFYylTOWofLYGeZnIXp-DzsBPm4Ddr_8cu8xqn9XagBWvq1cIgDR0O8x3ayw3s6X6H9LkcJkt2_4JNL6ezqYUB4cKZv6fGe-JL1ZCPHCplBHK3Nqi5DifB3GrwI_cnp6sklwGaoSuXjkEiX0pTuAiknZ6Fzksw_1oApPFYngCdcCBFBMVhkNhS-uaRyzlh5QkJVLz",
      category: "Art",
      tags: ['Bestseller']
    },
    {
      id: "festive-decor-1",
      name: "Festive Decor",
      description: "Handcrafted ornaments for every special occasion.",
      price: 650,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUsyLP0xQMBpBkX_34Kj-cuDT5Rt4ifEcem4J1L_mgabKGB97S43wAnV3SEhO7ZlFrlm-hn_wstC9QhnfZyk9bElqhlxnrbks4uA6O1TwHSX8UUeXhLBkuATFBPVp0jOcr115YiKqsvYnuVrUObk0Xdt7GWGrNQhNKI0FPE_ajD5Bv2t7Q3SJHrmthSrUElVFOnkWhS9I_whOnbMpD0z0oZ0f5ZGxb08qhpydxFVtZLgTpkD2Bx2UkCFhNQCwefFEoScaZd1adHi88",
      category: "Decor"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-JpPH3cpfoZ5jyZj3LtwEfqTqZJp1azGRFH5Gncj8nwyFsfQdMbcCoyhzK9ckQSoYCSkeP2zRUVqJF3daNOXPw3XhY2m3voi9AbX6IVOjSlK-iEIqIfRuxsFbp8chWQskVhmKnzPwpS1tuOhdixcKv0uYCL41LnfdnrOG4KbqVsbSBV9QJj6t5P9s9ZA80yuz8PNpHg7DHC7ASsM-BwG7VLMN-Gxroe1nlLpt8TTT1H-mdQrAw5YwMOd_Dedsv7KlXTd66spuAgEQ"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/20 backdrop-grayscale-[20%]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white space-y-10 max-w-5xl">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-[0.3em]">
              Aesthetic Living
            </div>
            <h1 className="text-5xl lg:text-8xl font-black font-display leading-tight uppercase tracking-tight">
              Modern Artistry, <br /> Curated for Your Home
            </h1>
            <p className="text-xl opacity-90 font-light max-w-2xl mx-auto leading-relaxed">
              Experience contemporary design through bespoke handmade elegance. Every piece is a testament to sophisticated simplicity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/products" className="w-full sm:w-auto">
              <Button className="w-full h-14 px-12 rounded-xl text-sm font-bold uppercase tracking-widest gradient-primary">
                View Collection
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto h-14 px-12 rounded-xl text-sm font-bold uppercase tracking-widest bg-white text-foreground hover:bg-gray-100 flex items-center gap-3"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <h4 className="text-lg font-extrabold uppercase tracking-widest text-foreground">Featured Works</h4>
            <Link href="/products" className="text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
              See All Gallery
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-white/40">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-16 md:p-24 rounded-[3rem] shadow-xl text-center border border-gray-100 space-y-8">
            <PanelsTopLeft className="h-12 w-12 text-primary/30 mx-auto" />
            <h4 className="text-xl font-extrabold uppercase tracking-[0.3em] text-foreground">The Philosophy</h4>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-light italic max-w-2xl mx-auto">
              "Rooted in contemporary aesthetics and traditional soul, we believe in the power of handmade elements to transform spaces into personal sanctuaries of elegance."
            </p>
            <div className="w-16 h-[2px] bg-primary/30 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <h4 className="text-sm font-bold text-center mb-24 uppercase tracking-[0.4em] text-foreground/60">The Experience</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              { id: '01', title: "Curate", desc: "Select from our gallery of hand-designed artisan creations.", icon: MousePointer2 },
              { id: '02', title: "Connect", desc: "Direct consultation for bespoke modifications and orders.", icon: MessageCircle },
              { id: '03', title: "Cherish", desc: "Bespoke delivery of a piece crafted specifically for your home.", icon: Truck }
            ].map((step) => {
              return (
                <div key={step.id} className="flex flex-col items-center text-center gap-6 group">
                  <div className="size-20 rounded-3xl border border-primary/20 flex items-center justify-center text-xl font-black text-primary bg-white shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {step.id}
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-extrabold text-lg uppercase tracking-widest">{step.title}</h5>
                    <p className="text-foreground/60 text-sm font-light leading-relaxed max-w-[250px]">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-foreground text-white p-16 lg:p-32 rounded-[4rem] text-center space-y-10 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 -mr-16 -mt-16">
              <Sparkles className="w-full h-full" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-[0.2em]">Ask the Art Concierge</h3>
              <p className="text-white/60 text-lg font-light tracking-wide max-w-xl mx-auto">
                Not sure which piece fits your aesthetic? Our AI Assistant can curate a selection based on your unique preferences.
              </p>
            </div>
            <Link href="/discovery" className="inline-block">
              <Button className="h-16 px-16 rounded-2xl text-base font-bold uppercase tracking-widest gradient-primary">
                Start Discovery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
