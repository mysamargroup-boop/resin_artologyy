import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center space-y-8 pb-24">
      <div className="relative">
        <h1 className="text-9xl font-black text-primary opacity-20">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="h-16 w-16 text-primary animate-pulse" />
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-widest text-foreground">Lost in the Gallery?</h2>
        <p className="text-muted-foreground text-sm lg:text-lg max-w-md mx-auto">
          It seems the masterpiece you're looking for has been moved or doesn't exist yet. Let's get you back to safety.
        </p>
      </div>
      <Link href="/">
        <Button size="lg" className="rounded-full h-14 px-10 text-[10px] font-bold uppercase tracking-widest gradient-primary">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
