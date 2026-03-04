"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Sparkles, PanelsTopLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const featuredProducts = [
    {
      id: "lippan-art-1",
      name: "Vibrant Lippan Art",
      description: "Traditional mirror work",
      price: 1299,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdc7QHqmb8IoFw1otk9qpDxgkSPFRF6v-g9-5wUHln1LJGtaytUpF9dDwusObFHk6_SzO1aI-t6j8Y93gOlZXcQUTlQqYz153HEzKAK3peQTe5dLHDSkdyFmdySPUJvRZI0dCkMg9DXujNS1ZfX2KnrQc-NH1GRCM2FhOfkLfSUh4KW4rpZ0fIspAwU_rEmx2J3S4iySUFnCHvEB6tqbdKgnQTNV1JYCP9at0W7pUqgwTOoRuJncTZBnjhx0C4kD3sES8ZoEUXmUqS",
      category: "Lippan Art"
    },
    {
      id: "nameplate-1",
      name: "Custom Nameplates",
      description: "Handcrafted ceramic",
      price: 1599,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5zZUhE3Y6R0W0llzf9IYPUY54CnECp6lnAAgpPAOZXAVcovYGiPinIU5GU5hFXHABy7Rv8cgeHrVED6CN7ALdvaHQV7v8-oIH2SWmAw0nL9-NDb5h8Ms_Fi4HWNbhj2t9NlGtCN7JK8hogz7baDruuQaOxdjjdO3uKU9Ni2KOBgyFmV8k0OeewvIzaumYWoke22z5uIKAtVgNtnjQeEhTi____7CDtA1VAyDyd4c4ixsA8S85-dszzsrBphWbt7iD_Ig7hMZfTcmE",
      category: "Nameplates"
    },
    {
      id: "folk-art-1",
      name: "Indian Folk Art",
      description: "Traditional canvas art",
      price: 899,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD63rFSKw-M6kg2WTaH9p8ikR9JvpsN4Dqj-g-rQ52URHNznf5jw3X80OgUQbWEbdeuoGWqLg9PFYylTOWofLYGeZnIXp-DzsBPm4Ddr_8cu8xqn9XagBWvq1cIgDR0O8x3ayw3s6X6H9LkcJkt2_4JNL6ezqYUB4cKZv6fGe-JL1ZCPHCplBHK3Nqi5DifB3GrwI_cnp6sklwGaoSuXjkEiX0pTuAiknZ6Fzksw_1oApPFYngCdcCBFBMVhkNhS-uaRyzlh5QkJVLz",
      category: "Folk Art",
      tags: ['Bestseller']
    },
    {
      id: "festive-decor-1",
      name: "Festive Decor",
      description: "Artisanal wall hanging",
      price: 650,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUsyLP0xQMBpBkX_34Kj-cuDT5Rt4ifEcem4J1L_mgabKGB97S43wAnV3SEhO7ZlFrlm-hn_wstC9QhnfZyk9bElqhlxnrbks4uA6O1TwHSX8UUeXhLBkuATFBPVp0jOcr115YiKqsvYnuVrUObk0Xdt7GWGrNQhNKI0FPE_ajD5Bv2t7Q3SJHrmthSrUElVFOnkWhS9I_whOnbMpD0z0oZ0f5ZGxb08qhpydxFVtZLgTpkD2Bx2UkCFhNQCwefFEoScaZd1adHi88",
      category: "Decor"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Hero Section */}
      <section className="px-4 py-4 md:py-8 container mx-auto">
        <div className="relative overflow-hidden rounded-[12px] bg-white shadow-md">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-JpPH3cpfoZ5jyZj3LtwEfqTqZJp1azGRFH5Gncj8nwyFsfQdMbcCoyhzK9ckQSoYCSkeP2zRUVqJF3daNOXPw3XhY2m3voi9AbX6IVOjSlK-iEIqIfRuxsFbp8chWQskVhmKnzPwpS1tuOhdixcKv0uYCL41LnfdnrOG4KbqVsbSBV9QJj6t5P9s9ZA80yuz8PNpHg7DHC7ASsM-BwG7VLMN-Gxroe1nlLpt8TTT1H-mdQrAw5YwMOd_Dedsv7KlXTd66spuAgEQ"
              alt="Hero background"
              fill
              className="object-cover brightness-50 backdrop-grayscale-[20%]"
              priority
            />
          </div>
          
          <div className="relative z-10 flex min-h-[440px] md:min-h-[500px] flex-col items-center justify-end px-6 py-10 text-center gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full self-center border border-white/20">
                Aesthetic Living
              </span>
              <h1 className="font-display text-white text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight max-w-2xl mx-auto">
                Modern Artistry, Curated for Your Home
              </h1>
              <p className="text-white/90 text-sm md:text-base font-light leading-relaxed max-w-[400px] mx-auto">
                Experience contemporary design through bespoke handmade elegance. Every piece is a testament to sophisticated simplicity.
              </p>
            </div>
            
            <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
              <Link href="/products" className="w-full">
                <Button className="w-full h-12 px-10 rounded-[12px] bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg transition hover:bg-primary/90 font-display">
                  View Collection
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="w-full h-12 px-10 rounded-[12px] bg-white text-charcoal text-xs font-bold uppercase tracking-widest shadow-md transition hover:bg-gray-50 flex gap-2 font-display border-none"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                Order on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-display text-charcoal text-sm font-bold uppercase tracking-widest">Featured Works</h4>
            <Link href="/products" className="text-primary text-[10px] font-bold uppercase tracking-widest border-b border-primary/20 pb-0.5 hover:border-primary transition-all">
              See All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 py-10 relative">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white p-8 rounded-[12px] shadow-sm text-center border border-gray-100">
            <PanelsTopLeft className="h-8 w-8 text-primary/30 mx-auto mb-4" />
            <h4 className="font-display text-sm font-bold text-charcoal mb-4 uppercase tracking-[0.2em]">The Philosophy</h4>
            <p className="text-charcoal/60 text-xs md:text-sm leading-relaxed mb-6 font-light italic">
              "Rooted in contemporary aesthetics and traditional soul, we believe in the power of handmade elements to transform spaces into personal sanctuaries of elegance."
            </p>
            <div className="w-10 h-[1px] bg-primary/30 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Experience Steps */}
      <section className="px-6 pb-16 container mx-auto max-w-3xl">
        <h4 className="font-display text-charcoal text-xs font-bold text-center mb-10 uppercase tracking-[0.2em]">The Experience</h4>
        <div className="flex flex-col md:flex-row gap-8">
          {[
            { id: '01', title: "Curate", desc: "Select from our gallery of hand-designed artisan creations." },
            { id: '02', title: "Connect", desc: "Direct consultation for bespoke modifications and orders." },
            { id: '03', title: "Cherish", desc: "Bespoke delivery of a piece crafted specifically for your home." }
          ].map((step) => (
            <div key={step.id} className="flex items-start gap-5 flex-1">
              <div className="flex-shrink-0 size-8 rounded-full border border-primary/20 flex items-center justify-center text-[10px] font-display font-bold text-primary bg-white shadow-sm">
                {step.id}
              </div>
              <div className="pt-0.5">
                <h5 className="font-bold text-charcoal text-xs font-display uppercase tracking-wide">{step.title}</h5>
                <p className="text-charcoal/50 text-[10px] mt-1 font-light leading-normal">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="px-4 container mx-auto">
        <div className="bg-charcoal text-white py-14 px-8 rounded-[32px] relative overflow-hidden text-center gap-6 flex flex-col items-center">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-8 -mt-8">
            <Sparkles className="w-full h-full" />
          </div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">Ask the Art Concierge</h3>
          <p className="text-white/40 text-[10px] font-light tracking-wide max-w-[200px] uppercase">
            Not sure which piece fits your aesthetic? Our AI Assistant can curate a selection based on your preferences.
          </p>
          <Link href="/discovery">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-[8px] text-[10px] font-bold uppercase tracking-[0.2em] transition-all h-12">
              Start Discovery
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}