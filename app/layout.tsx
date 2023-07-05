import '../public/globals.css';
import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'Cars-Gateway',
  description: 'Discover the best cars in the wolrd.',
};

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Root;
