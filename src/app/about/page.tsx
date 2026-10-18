import React from 'react';
import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About The Atelier · Decadal Practice & Spatial Philosophy',
  description:
    'Discover the decadal architectural legacy, foundational doctrines, material research, and atelier network across Delhi NCR, Gauhati, Bihar, and Jammu of HOMIFIORA Architecture & Interior Atelier.',
  alternates: {
    canonical: 'https://www.homifiora.com/about',
  },
  openGraph: {
    title: 'About The Atelier | HOMIFIORA Architecture · Interiors · Spaces',
    description:
      'A ten-year legacy crafting private tropical sanctuaries, neoclassical hospitality landmarks, and bespoke spatial monographs across India.',
    url: 'https://www.homifiora.com/about',
    images: [
      {
        url: '/brand/homifiora-studio-facade-crop.webp',
        width: 1200,
        height: 800,
        alt: 'HOMIFIORA Atelier Headquarters Façade',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
