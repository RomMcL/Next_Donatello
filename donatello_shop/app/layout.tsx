import type { Metadata } from 'next';
import './globalStyles/globals.css';
import './globalStyles/header.css';
import './globalStyles/menu.css';
import './globalStyles/mobile-navbar.css';
import './globalStyles/catalog-menu.css';
import './globalStyles/search-modal.css';
import './globalStyles/cart-popup.css';
import './globalStyles/footer.css';
import Layout from '@/components/layouts/Layout';

export const metadata: Metadata = {
  title: 'Donatello',
  description: 'Donatello description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
