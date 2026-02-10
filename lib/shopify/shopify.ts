import { ProductCollectionSortKey, ProductSortKey, ShopifyCart, ShopifyCollection, ShopifyProduct } from './types';

import { parseShopifyDomain } from './parse-shopify-domain';
import { DEFAULT_PAGE_SIZE, DEFAULT_SORT_KEY } from './constants';

const rawStoreDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const fallbackStoreDomain = 'v0-template.myshopify.com';
const SHOPIFY_STORE_DOMAIN = rawStoreDomain ? parseShopifyDomain(rawStoreDomain) : fallbackStoreDomain;

// ダミーデータ
const dummyCollections: ShopifyCollection[] = [
  {
    id: 'gid://shopify/Collection/1',
    title: 'フローラル',
    handle: 'floral',
    description: '花の香りを基調とした上品な香水コレクション',
  },
  {
    id: 'gid://shopify/Collection/2',
    title: 'シトラス',
    handle: 'citrus',
    description: '爽やかな柑橘系の香りが特徴的な香水コレクション',
  },
  {
    id: 'gid://shopify/Collection/3',
    title: 'ウッディ',
    handle: 'woody',
    description: '深みのある木の香りが魅力的な香水コレクション',
  },
];

const dummyProducts: ShopifyProduct[] = [
  {
    id: 'gid://shopify/Product/1',
    title: 'CHANEL No.5',
    description: '世界で最も有名な香水の一つ。エレガントで時代を超越した香り。',
    descriptionHtml: '<p>世界で最も有名な香水の一つ。エレガントで時代を超越した香り。</p>',
    handle: 'chanel-no5',
    productType: 'フローラル',
    options: [
      {
        id: 'gid://shopify/ProductOption/1',
        name: 'Size',
        values: ['30ml', '50ml', '100ml'],
      },
    ],
    images: {
      edges: [
        {
          node: {
            url: '/images/fairy-perfume.png',
            altText: 'CHANEL No.5',
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: {
        amount: '15000',
        currencyCode: 'JPY',
      },
    },
    compareAtPriceRange: {
      minVariantPrice: {
        amount: '18000',
        currencyCode: 'JPY',
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: 'gid://shopify/ProductVariant/1',
            title: '30ml',
            price: {
              amount: '15000',
              currencyCode: 'JPY',
            },
            availableForSale: true,
            selectedOptions: [{ name: 'Size', value: '30ml' }],
          },
        },
        {
          node: {
            id: 'gid://shopify/ProductVariant/2',
            title: '50ml',
            price: {
              amount: '22000',
              currencyCode: 'JPY',
            },
            availableForSale: true,
            selectedOptions: [{ name: 'Size', value: '50ml' }],
          },
        },
      ],
    },
  },
  {
    id: 'gid://shopify/Product/2',
    title: 'Dior J\'adore',
    description: '華やかで女性らしい、フローラルブーケの香り。',
    descriptionHtml: '<p>華やかで女性らしい、フローラルブーケの香り。</p>',
    handle: 'dior-jadore',
    productType: 'フローラル',
    options: [
      {
        id: 'gid://shopify/ProductOption/2',
        name: 'Size',
        values: ['30ml', '50ml', '100ml'],
      },
    ],
    images: {
      edges: [
        {
          node: {
            url: '/images/fairy-perfume.png',
            altText: 'Dior J\'adore',
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: {
        amount: '12000',
        currencyCode: 'JPY',
      },
    },
    compareAtPriceRange: {
      minVariantPrice: {
        amount: '15000',
        currencyCode: 'JPY',
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: 'gid://shopify/ProductVariant/3',
            title: '30ml',
            price: {
              amount: '12000',
              currencyCode: 'JPY',
            },
            availableForSale: true,
            selectedOptions: [{ name: 'Size', value: '30ml' }],
          },
        },
      ],
    },
  },
  {
    id: 'gid://shopify/Product/3',
    title: 'Tom Ford Black Orchid',
    description: 'ミステリアスで官能的な、ダークフローラルの香り。',
    descriptionHtml: '<p>ミステリアスで官能的な、ダークフローラルの香り。</p>',
    handle: 'tom-ford-black-orchid',
    productType: 'フローラル',
    options: [
      {
        id: 'gid://shopify/ProductOption/3',
        name: 'Size',
        values: ['30ml', '50ml'],
      },
    ],
    images: {
      edges: [
        {
          node: {
            url: '/images/fairy-perfume.png',
            altText: 'Tom Ford Black Orchid',
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: {
        amount: '18000',
        currencyCode: 'JPY',
      },
    },
    compareAtPriceRange: {
      minVariantPrice: {
        amount: '20000',
        currencyCode: 'JPY',
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: 'gid://shopify/ProductVariant/4',
            title: '30ml',
            price: {
              amount: '18000',
              currencyCode: 'JPY',
            },
            availableForSale: true,
            selectedOptions: [{ name: 'Size', value: '30ml' }],
          },
        },
      ],
    },
  },
  {
    id: 'gid://shopify/Product/4',
    title: 'Hermès Twilly d\'Hermès',
    description: '若々しくて遊び心のある、モダンなフローラルの香り。',
    descriptionHtml: '<p>若々しくて遊び心のある、モダンなフローラルの香り。</p>',
    handle: 'hermes-twilly',
    productType: 'フローラル',
    options: [
      {
        id: 'gid://shopify/ProductOption/4',
        name: 'Size',
        values: ['30ml', '85ml'],
      },
    ],
    images: {
      edges: [
        {
          node: {
            url: '/images/fairy-perfume.png',
            altText: 'Hermès Twilly d\'Hermès',
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: {
        amount: '14000',
        currencyCode: 'JPY',
      },
    },
    compareAtPriceRange: {
      minVariantPrice: {
        amount: '16000',
        currencyCode: 'JPY',
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: 'gid://shopify/ProductVariant/5',
            title: '30ml',
            price: {
              amount: '14000',
              currencyCode: 'JPY',
            },
            availableForSale: true,
            selectedOptions: [{ name: 'Size', value: '30ml' }],
          },
        },
      ],
    },
  },
  {
    id: 'gid://shopify/Product/5',
    title: 'Yves Saint Laurent Libre',
    description: '自由で大胆な女性のための、現代的なフローラルの香り。',
    descriptionHtml: '<p>自由で大胆な女性のための、現代的なフローラルの香り。</p>',
    handle: 'ysl-libre',
    productType: 'フローラル',
    options: [
      {
        id: 'gid://shopify/ProductOption/5',
        name: 'Size',
        values: ['30ml', '50ml', '90ml'],
      },
    ],
    images: {
      edges: [
        {
          node: {
            url: '/images/fairy-perfume.png',
            altText: 'Yves Saint Laurent Libre',
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: {
        amount: '13000',
        currencyCode: 'JPY',
      },
    },
    compareAtPriceRange: {
      minVariantPrice: {
        amount: '15000',
        currencyCode: 'JPY',
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: 'gid://shopify/ProductVariant/6',
            title: '30ml',
            price: {
              amount: '13000',
              currencyCode: 'JPY',
            },
            availableForSale: true,
            selectedOptions: [{ name: 'Size', value: '30ml' }],
          },
        },
      ],
    },
  },
];

// Get all collections
export async function getCollections(): Promise<ShopifyCollection[]> {
  return dummyCollections;
}

// Get all products
export async function getProducts({
  first = DEFAULT_PAGE_SIZE,
  sortKey = DEFAULT_SORT_KEY,
  reverse = false,
  query: searchQuery,
}: {
  first?: number;
  sortKey?: ProductSortKey;
  reverse?: boolean;
  query?: string;
}): Promise<ShopifyProduct[]> {
  return dummyProducts.slice(0, first);
}

// Get collection products
export async function getCollectionProducts({
  collection,
  first = DEFAULT_PAGE_SIZE,
  sortKey = 'COLLECTION_DEFAULT' as ProductCollectionSortKey,
  reverse = false,
  query: searchQuery,
}: {
  collection: string;
  first?: number;
  sortKey?: ProductCollectionSortKey;
  reverse?: boolean;
  query?: string;
}): Promise<ShopifyProduct[]> {
  return dummyProducts.slice(0, first);
}

// Get single product
export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  return dummyProducts.find(product => product.handle === handle) || null;
}

// Cart functions (ダミー実装)
export async function createCart(): Promise<ShopifyCart> {
  return {
    id: 'dummy-cart-id',
    checkoutUrl: 'https://checkout.shopify.com/dummy',
    cost: {
      totalAmount: { amount: '0', currencyCode: 'JPY' },
      subtotalAmount: { amount: '0', currencyCode: 'JPY' },
      totalTaxAmount: { amount: '0', currencyCode: 'JPY' },
    },
    lines: { edges: [] },
  };
}

export async function addCartLines(cartId: string, lines: any[]): Promise<ShopifyCart> {
  return createCart();
}

export async function updateCartLines(cartId: string, lines: any[]): Promise<ShopifyCart> {
  return createCart();
}

export async function removeCartLines(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
  return createCart();
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  return createCart();
}
