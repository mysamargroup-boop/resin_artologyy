
import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import placeholderData from "@/lib/placeholder-images.json";

export function InstagramFeed() {
  const instagramPosts = placeholderData.placeholderImages.filter(img => img.id.startsWith('insta-'));

  return (
    <section className="bg-secondary/20">
      <div className="container-normal px-4">
        <div className="text-center mb-12 space-y-6">
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
  );
}
