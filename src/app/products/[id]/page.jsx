import ProductDetail from '@/Components/productDetails/ProductDetail';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

// Statically generate all product routes at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Dynamically generate SEO tags for search engines and social sharing
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return {};

  return {
    title: `${product.name} | Fashion Store`,
    description: product.description || `Buy ${product.name} from our Premium Collection.`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 1000,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    notFound(); 
  }

  return <ProductDetail product={product} />;
}