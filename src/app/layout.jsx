import '@/app/globals.css';
import Footer from '@/Components/Footer';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'Oxivos | Curated Wardrobe Essentials',
  description: 'Timeless garments and accessories thoughtfully crafted in small editions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF8F5] text-[#1C140E] antialiased">
       
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </CartProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}