
import { Suspense } from 'react';
import ProductGrid from '@/components/ProductGrid';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductsPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ProductGrid />
    </Suspense>
  );
}

function LoadingSkeleton() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container-normal mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-8">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-48 mx-auto" />
          </div>
          <div className="flex flex-col gap-8 w-full max-w-3xl">
            <Skeleton className="h-16 w-full rounded-full" />
            <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide px-2 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-11 w-24 rounded-full" />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-4 p-4 bg-card rounded-2xl shadow-sm border border-border/10">
              <Skeleton className="aspect-square w-full rounded-xl" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Skeleton className="h-3 w-20 rounded-full" />
                  <Skeleton className="h-3 w-10 rounded-full" />
                </div>
                <Skeleton className="h-5 w-full rounded-full" />
                <Skeleton className="h-4 w-2/3 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
