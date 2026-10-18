import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ArchitecturalScrollGauge from '@/components/ArchitecturalScrollGauge';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.homifiora.com'),
  title: {
    default: 'HOMIFIORA | Architecture · Interiors · Spaces | Spaces That Belong',
    template: '%s | HOMIFIORA Architecture Atelier',
  },
  description:
    'Homifiora is an elite architectural and interior design atelier crafting private tropical sanctuaries, neoclassical hospitality landmarks, and bespoke residential monographs across India since 2014.',
  keywords: [
    // Brand & Atelier
    'Homifiora',
    'Homifiora Architecture',
    'Homifiora Architects',
    'Homifiora Interiors',
    'Homifiora Architectural Atelier',
    'Spaces People Belong To',
    // Core Services & Typologies
    'Best Luxury Architects in Delhi NCR',
    'Top Architectural Firms in India',
    'Luxury Villa Architects Delhi',
    'Modern Tropical Architecture India',
    'Neoclassical Architects in Delhi NCR',
    'Bespoke Residential Architects Gurgaon',
    'Farmhouse Architects South Delhi',
    'Luxury Bungalow Design Firm',
    'Turnkey Architectural Execution India',
    'High End Interior Designers Delhi NCR',
    'Bespoke Interior Architects India',
    'Hospitality & Banquet Architects India',
    'Luxury Penthouse Interior Architecture',
    // Craftsmanship & Materiality
    'Terracotta Jaali Facade Design',
    'Italian Travertine Stone Architecture',
    'Fluted Teak Wood Joinery',
    'Climate Responsive Architecture India',
    'Biophilic Residential Design',
    'Classical Facade Elevation Design',
    'Haute Couture Architecture Monograph',
    // Signature Works
    'Vayana Residence',
    'The Aurelia Banquet',
    'Aarohan Residence',
    'Vikas Vidur Penthouse',
    'Ahuja Residence',
    'Gulati Residence',
    // Geographical Authority
    'Architects in Delhi',
    'Architects in Gurgaon Gurugram',
    'Architects in South Delhi',
    'Architects in Noida',
    'Architects in Gauhati Guwahati',
    'Guwahati Architecture Studio',
    'Architects in Assam',
    'Northeast Luxury Architects',
    'Architects in Patna Bihar',
    'Luxury Architects Goa',
  ],
  authors: [{ name: 'HOMIFIORA Architectural Atelier', url: 'https://www.homifiora.com' }],
  creator: 'HOMIFIORA Atelier',
  publisher: 'HOMIFIORA Architectural Atelier',
  category: 'Architecture & Interior Design',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: 'https://www.homifiora.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'HOMIFIORA | Architecture · Interiors · Spaces',
    description:
      'Haute-couture architectural monograph atelier. Crafting private tropical sanctuaries, neoclassical hospitality landmarks, and bespoke interior monographs across India.',
    url: 'https://www.homifiora.com',
    siteName: 'HOMIFIORA Architectural Atelier',
    images: [
      {
        url: '/portfolio_images/page_1.webp',
        width: 1536,
        height: 1024,
        alt: 'HOMIFIORA Architectural Monograph Portfolio Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOMIFIORA | Architecture · Interiors · Spaces',
    description:
      'Spaces People Belong To · A decadal architectural practice crafting private tropical sanctuaries and neoclassical landmarks across India.',
    images: ['/portfolio_images/page_1.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://www.homifiora.com/#organization',
      name: 'HOMIFIORA Architectural Atelier',
      alternateName: ['HOMIFIORA', 'Homifiora Architecture', 'Homifiora Architects & Interiors'],
      url: 'https://www.homifiora.com',
      logo: 'https://www.homifiora.com/brand/homifiora-logo.png',
      image: 'https://www.homifiora.com/portfolio_images/page_1.webp',
      description:
        'Haute-couture architectural monograph atelier crafting private tropical sanctuaries, neoclassical hospitality landmarks, and bespoke interior monographs across India.',
      telephone: '+91-9999656898',
      email: 'Support@homifiora.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Delhi NCR · Gauhati · Bihar · Jammu',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6139,
        longitude: 77.209,
      },
      department: [
        {
          '@type': 'ProfessionalService',
          name: 'HOMIFIORA Atelier - New Delhi NCR (Principal HQ)',
          address: { '@type': 'PostalAddress', 'addressLocality': 'New Delhi', 'addressRegion': 'Delhi NCR', 'addressCountry': 'IN' },
        },
        {
          '@type': 'ProfessionalService',
          name: 'HOMIFIORA Atelier - Gauhati (Guwahati) Branch',
          address: { '@type': 'PostalAddress', 'addressLocality': 'Gauhati', 'addressRegion': 'Assam', 'addressCountry': 'IN' },
        },
        {
          '@type': 'ProfessionalService',
          name: 'HOMIFIORA Atelier - Patna & Dalsinghsarai',
          address: { '@type': 'PostalAddress', 'addressLocality': 'Patna', 'addressRegion': 'Bihar', 'addressCountry': 'IN' },
        },
        {
          '@type': 'ProfessionalService',
          name: 'HOMIFIORA Atelier - Jammu Outpost',
          address: { '@type': 'PostalAddress', 'addressLocality': 'Jammu', 'addressRegion': 'Jammu & Kashmir', 'addressCountry': 'IN' },
        },
      ],
      foundingDate: '2014',
      priceRange: '$$$$',
      slogan: 'Spaces People Belong To',
      knowsAbout: [
        'Modern Tropical Architecture',
        'Neoclassical Architecture',
        'Bespoke Interior Architecture',
        'Turnkey Architectural Execution',
        'Luxury Residential Villas',
        'Hospitality & Banquet Design',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.homifiora.com/#website',
      url: 'https://www.homifiora.com',
      name: 'HOMIFIORA | Architecture · Interiors · Spaces',
      publisher: {
        '@id': 'https://www.homifiora.com/#organization',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <CustomCursor />
        <ArchitecturalScrollGauge />
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
