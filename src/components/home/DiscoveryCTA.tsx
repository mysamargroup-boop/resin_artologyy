
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import placeholderData from "@/lib/placeholder-images.json";

export function DiscoveryCTA() {
  return (
    <section>
      <div className="container-normal px-4">
        <div className="bg-secondary text-secondary-foreground p-12 lg:p-24 rounded-[3rem] lg:rounded-[5rem] text-center space-y-10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image src={placeholderData.placeholderImages.find(img => img.id === 'hero-pattern')?.imageUrl || ''} alt="pattern" fill className="object-cover" />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-black/5 border border-black/10 text-[10px] font-black uppercase tracking-widest">
              AI Powered Art Concierge
            </div>
            <h3 className="text-3xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-tight">Your Personal Curator</h3>
            <p className="text-muted-foreground text-base lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Describe your vision, and let our AI curate the perfect resin piece for you.
            </p>
            <div className="pt-6">
              <Link href="/discovery">
                <Button className="h-16 px-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] gradient-primary shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                  Start Discovery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
