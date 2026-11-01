import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd';
import { CallRailScript } from '@/components/CallRailScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Service Squad | 24/7 Water Damage, Plumbing & HVAC Emergency Dispatch',
  description:
    'Service Squad is Greater Houston’s premier multi-trade contractor. 24/7 full-service hubs in Houston, Stafford, and Richmond for rapid water damage restoration, licensed plumbing, and HVAC repairs.',
  metadataBase: new URL('https://servicesquadtx.com'),
  openGraph: {
    title: 'Service Squad | 24/7 Emergency Multi-Trade Hubs',
    description:
      'Water Damage Restoration, Licensed Plumbing Contractor, and 24/7 HVAC Services across Houston, Stafford, and Richmond, TX. Call (713) 999-9150.',
    url: 'https://servicesquadtx.com',
    siteName: 'Service Squad',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://servicesquadtx.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Automated Multi-Trade JSON-LD schema applied to all locations */}
        <LocalBusinessJsonLd allLocations={true} />
        {/* CallRail Dynamic Number Insertion script loader */}
        <CallRailScript />
      </head>
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
