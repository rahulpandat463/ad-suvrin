import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata = {
  title: 'Suvrin | Manufacturing ERP for Dubai & UAE — Odoo Experts',
  description: 'Suvrin implements and customises Odoo Manufacturing ERP for UAE industrial businesses. Multi-warehouse, UAE FTA VAT 5%, shop floor tablets, and bilingual compliance across Dubai, Sharjah, and Abu Dhabi.',
  keywords: 'Odoo ERP Dubai, Manufacturing ERP UAE, Odoo MRP UAE, UAE VAT ERP, JAFZA ERP, Odoo implementation Dubai',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
