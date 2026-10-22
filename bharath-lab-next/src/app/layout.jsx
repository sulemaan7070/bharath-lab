import './globals.css';
import CartDrawer from '@/components/cart/CartDrawer';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import WhatsAppFab from '@/components/layout/WhatsAppFab';
import Providers from '@/context/Providers';

export const metadata = {
  title: 'Bharath Lab – Blood tests and health checkups',
  description: 'Book blood tests, full body checkups and home sample collection from Bharath Lab, Proddatur.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFab />
        </Providers>
      </body>
    </html>
  );
}
