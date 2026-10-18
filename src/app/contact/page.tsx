import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Schedule Atelier Walkthrough & Inquire',
  description:
    'Initiate your private architectural residence or interior monograph with HOMIFIORA. Direct atelier phone & WhatsApp: +91 99996 56898. Email: Support@homifiora.com. Consultations across Delhi NCR, Gauhati (Assam), Bihar, and Pan-India.',
  alternates: {
    canonical: 'https://www.homifiora.com/contact',
  },
  openGraph: {
    title: 'Schedule Atelier Walkthrough & Inquire | HOMIFIORA',
    description:
      'Initiate your architectural or bespoke interior project with HOMIFIORA. Phone & WhatsApp: +91 99996 56898.',
    url: 'https://www.homifiora.com/contact',
    images: [
      {
        url: '/brand/homifiora-interior-center.webp',
        width: 1200,
        height: 800,
        alt: 'HOMIFIORA Atelier Welcome Salon',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: '6rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Loading contact atelier...
        </div>
      }
    >
      <ContactClient />
    </Suspense>
  );
}
