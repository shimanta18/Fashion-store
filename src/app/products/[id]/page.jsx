
import ProductDetail from '@/Components/productDetails/ProductDetail';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
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