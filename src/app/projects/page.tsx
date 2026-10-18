import React from 'react';
import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Selected Works & Monograph Archive (2024–2026)',
  description:
    'Explore the 13 landmark built and ongoing architectural works of HOMIFIORA across private luxury villas, neoclassical banquets, four-storey studio headquarters, and bespoke residential penthouses designed across India.',
  alternates: {
    canonical: 'https://www.homifiora.com/projects',
  },
  openGraph: {
    title: 'Selected Works & Monograph Archive | HOMIFIORA Architecture Atelier',
    description:
      'Curated archive of 13 built and ongoing landmark architectural commissions by HOMIFIORA.',
    url: 'https://www.homifiora.com/projects',
    images: [
      {
        url: '/portfolio_images/page_1.webp',
        width: 1536,
        height: 1024,
        alt: 'HOMIFIORA Monograph Works Archive',
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
