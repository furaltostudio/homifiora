'use client';

import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="WhatsApp Concierge"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
      }}
    >
      {/* Tooltip Pill (Revealed on hover) */}
      <div
        style={{
          backgroundColor: 'rgba(8, 9, 7, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(197, 160, 101, 0.45)',
          padding: '0.55rem 1.1rem',
          borderRadius: '999px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7), 0 0 16px rgba(37, 211, 102, 0.15)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(12px)',
          pointerEvents: 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          whiteSpace: 'nowrap',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
        className="hide-on-mobile"
      >
        <span
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold, #dfb76c)',
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          WhatsApp Concierge
        </span>
        <span
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.04em',
            color: '#ffffff',
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          +91 99996 56898
        </span>
      </div>

      {/* Real Official WhatsApp Floating Action Button */}
      <a
        id="floating-whatsapp-concierge"
        href="https://wa.me/919999656898?text=Hello%20HOMIFIORA%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20architectural%20and%20interior%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 99996 56898)"
        title="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          backgroundImage: 'radial-gradient(circle at 35% 35%, #2ef073 0%, #25D366 55%, #1fa34e 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 12px 32px rgba(0, 0, 0, 0.65), 0 0 26px rgba(37, 211, 102, 0.75)'
            : '0 6px 20px rgba(0, 0, 0, 0.5), 0 0 16px rgba(37, 211, 102, 0.45)',
          transform: hovered ? 'scale(1.08) translateY(-3px)' : 'scale(1) translateY(0)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
          textDecoration: 'none',
          outline: 'none',
        }}
      >
        {/* Real White Official WhatsApp Icon */}
        <WhatsAppIcon size={34} color="#ffffff" />
      </a>
    </aside>
  );
}
