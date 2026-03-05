import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';
import { Toaster } from '@/components/ui/toaster';
import { TopBar } from '@/components/TopBar';

export const metadata: Metadata = {
  title: 'Resin Artologyy | Preserving Memories in Resin',
  description: 'Unique, heartfelt handmade creations from flower preservation to hand casting.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-display antialiased min-h-screen flex flex-col pb-16 md:pb-0 relative">
        {/* Global Background Overlays */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[20%] left-[5%] w-[25%] h-[25%] bg-accent/10 rounded-full blur-[60px]" />
        </div>

        <TopBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BottomNav />
        <Toaster />
      </body>
    </html>
  );
}
