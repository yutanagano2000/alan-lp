import { notFound } from 'next/navigation';
import { getProduct } from '@/lib/shopify';
import { PageLayout } from '@/components/layout/page-layout';
import Image from 'next/image';
import { AddToCart } from '@/components/cart/add-to-cart';
import { VariantOptionSelector } from '@/components/products/variant-selector';
import { Suspense } from 'react';

interface ProductPageProps {
  params: { handle: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.handle);

  if (!product) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square relative">
            <Image
              src={product.featuredImage.url || '/placeholder.svg'}
              alt={product.featuredImage.altText || product.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{product.title}</h1>
              <p className="text-xl text-muted-foreground mt-2">
                ¥{Number(product.priceRange.minVariantPrice.amount).toLocaleString()}
              </p>
            </div>

            <div className="prose prose-sm text-muted-foreground">
              <p>{product.description}</p>
            </div>

            {/* Variant Selectors */}
            {product.options.map((option) => (
              <VariantOptionSelector key={option.id} option={option} product={product} />
            ))}

            {/* Add to Cart */}
            <Suspense fallback={<div>Loading...</div>}>
              <AddToCart product={product} size="lg" className="w-full" />
            </Suspense>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
