
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function OurStory() {
  return (
    <section className="overflow-hidden">
      <div className="container-normal px-4 flex flex-col items-center text-center space-y-8">
         <h2 className="text-7xl lg:text-9xl font-cursive text-primary lowercase tracking-tight drop-shadow-sm select-none">
           Resin Artologyy
         </h2>
         <div className="max-w-2xl space-y-4">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">The Heart Behind the Art</p>
           <p className="text-xl lg:text-3xl font-light text-foreground/80 leading-relaxed italic">
             "Every piece we craft preserves a moment, a memory, a feeling."
           </p>
           <p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-medium">
            What started as a simple desire to preserve the warmth of human touch has evolved into a legacy of craftsmanship. Our work is a celebration of patience, precision, and the beautiful imperfections of the handmade process.
           </p>
         </div>
         <Link href="/about">
           <Button variant="link" className="text-primary font-black uppercase tracking-widest text-[10px] border-b border-primary/20 pb-1 h-auto">
             Read Our Full Story
           </Button>
         </Link>
      </div>
    </section>
  );
}
