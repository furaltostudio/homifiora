import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'HOMIFIORA | Architectural Monograph · Spaces People Belong To',
  description:
    'Haute-couture architectural monograph atelier. Discover 13 landmark residential sanctuaries, neoclassical hospitality banquets, luxury penthouses, and bespoke interiors crafted across Delhi NCR, Gauhati, Bihar, and India with tactile craftsmanship.',
  alternates: {
    canonical: 'https://www.homifiora.com',
  },
  openGraph: {
    title: 'HOMIFIORA | Architecture · Interiors · Spaces',
    description:
      'Spaces People Belong To · Discover 13 landmark built architectural works across Delhi NCR, Gauhati, Bihar, and Pan-India.',
    url: 'https://www.homifiora.com',
    images: [
      {
        url: '/portfolio_images/page_1.webp',
        width: 1536,
        height: 1024,
        alt: 'HOMIFIORA Architectural Monograph Cover',
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
