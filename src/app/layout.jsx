import '@/app/globals.css';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/providers/ThemeProviders';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Fashion Store | Curated Wardrobe Essentials',
  description: 'Timeless garments and accessories thoughtfully crafted in small editions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#FAF8F5] dark:bg-[#1c140e] text-[#1C140E] dark:text-[#fcfaf4] antialiased">
        
        
        <ThemeProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>

        
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            }
          }} 
        />
        
      </body>
    </html>
  );
}