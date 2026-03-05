
import { MobileCategoryGrid } from '@/components/home/MobileCategoryGrid';
import { DesktopCategoryGrid } from '@/components/home/DesktopCategoryGrid';
import { HeroSlider } from '@/components/home/HeroSlider';
import { MasterpieceGallery } from '@/components/home/MasterpieceGallery';
import { ProductCollection } from '@/components/home/ProductCollection';
import { InstagramFeed } from '@/components/home/InstagramFeed';
import { Testimonials } from '@/components/home/Testimonials';
import { OurStory } from '@/components/home/OurStory';
import { DiscoveryCTA } from '@/components/home/DiscoveryCTA';

import productsData from "@/lib/products.json";
import { Product } from "@/lib/types";

export default function Home() {
  const productsByCategory: Record<string, Product[]> = (productsData.products as Product[]).reduce((acc: Record<string, Product[]>, product: Product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <MobileCategoryGrid />
      <DesktopCategoryGrid />
      <HeroSlider />
      <MasterpieceGallery />

      {Object.entries(productsByCategory).map(([catName, products], idx) => (
        <ProductCollection 
          key={catName} 
          categoryName={catName} 
          products={products} 
          index={idx}
        />
      ))}

      <InstagramFeed />
      <Testimonials />
      <OurStory />
      <DiscoveryCTA />
    </div>
  );
}
