import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Sumegha Handmades | Modern Artistry',
  description: 'Contemporary design through bespoke handmade elegance. Every piece is a testament to sophisticated simplicity.',
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col gradient-bg pb-16 md:pb-0">
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