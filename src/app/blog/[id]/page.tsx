
"use client";

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Mock data matching the listing page
  const blogs = [
    {
      id: "1",
      title: "The Soul of Handmade: Why It Matters",
      content: "Handmade art is not just a product; it is an experience, a piece of an artist's soul shared with the world. In today's fast-paced world of mass production, choosing something handcrafted means choosing a story, a connection, and a commitment to authenticity.\n\nEvery brushstroke, every mirror placed in a Lippan art piece, and every stitch in a custom bridal trunk carries with it hours of dedication. When you bring a Resin Artologyy Handmade creation into your home, you aren't just buying decor; you are preserving a legacy of craftsmanship that has been passed down through generations.",
      author: "Resin Artologyy",
      date: "January 12, 2026",
      category: "Philosophy",
      image: "https://picsum.photos/seed/blog1/1200/600"
    },
    {
      id: "2",
      title: "Lippan Art: A Desert Masterpiece",
      content: "Originating from the salt marshes of Kutch, Lippan art (or Mud and Mirror work) is a traditional mural craft that has graced the walls of bhungas (mud huts) for centuries. The shimmering mirrors against the earthy clay create a mesmerizing play of light.\n\nAt Resin Artologyy Handmades, we take this ancient desert craft and reimagine it for modern urban spaces. Our circular canvases and contemporary color palettes ensure that this heritage art form finds its place in the most minimalist of homes, bringing with it a touch of rustic royalty.",
      author: "Resin Artologyy",
      date: "January 20, 2026",
      category: "Tradition",
      image: "https://picsum.photos/seed/blog2/1200/600"
    },
    {
      id: "3",
      title: "Designing for Serenity",
      content: "Your home should be your sanctuary. The art you choose plays a vital role in setting the tone of your living space. Designing for serenity isn't about filling every corner; it's about choosing pieces that breathe and bring peace.\n\nMinimalist art with organic textures, like our ceramic vases or subtle wall hangings, can anchor a room without overwhelming it. We believe that art should invite stillness, providing a visual resting place in a world that never stops moving.",
      author: "Resin Artologyy",
      date: "January 28, 2026",
      category: "Design",
      image: "https://picsum.photos/seed/blog3/1200/600"
    }
  ];

  const blog = blogs.find(b => b.id === id) || blogs[0];

  return (
    <div className="min-h-screen pb-24">
      <div className="container-normal mx-auto py-12 px-4">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 rounded-full hover:bg-primary/5 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Journal
          </Button>
        </Link>

        <article className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6 text-center lg:text-left">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary">
              {blog.category}
            </span>
            <h1 className="text-3xl lg:text-6xl font-black uppercase tracking-tight text-foreground leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-[11px] font-bold uppercase tracking-widest text-foreground/40">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                By {blog.author}
              </div>
            </div>
          </div>

          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-12 pt-8">
            <div className="flex-grow space-y-8">
              <div className="prose prose-pink max-w-none">
                <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed font-light whitespace-pre-line">
                  {blog.content}
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-8">
                <Button variant="outline" className="rounded-full border-primary/10 hover:bg-primary/5">
                  <Heart className="h-4 w-4 mr-2" />
                  Save Story
                </Button>
                <Button variant="outline" className="rounded-full border-primary/10 hover:bg-primary/5">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </article>

        <aside className="py-24 text-center">
            <div className="max-w-2xl mx-auto space-y-8 p-12 bg-secondary/50 rounded-[3rem] border border-primary/5 shadow-lg">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">About the Artist</h4>
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto shadow-xl border-4 border-white">
                    <Image src="https://picsum.photos/seed/artist/200/200" alt="Artist" fill className="object-cover" />
                </div>
                <div className="space-y-4">
                    <h3 className="text-4xl font-cursive text-foreground lowercase">Resin Artologyy</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light italic">
                    "Every piece in our gallery is a chapter of a larger story about tradition, patience, and the beauty of the human touch."
                    </p>
                </div>
            </div>
        </aside>

      </div>
    </div>
  );
}
