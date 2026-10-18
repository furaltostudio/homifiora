'use client';

import React from 'react';
import Link from 'next/link';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-site-footer"
      style={{
        backgroundColor: '#070806',
        borderTop: '1px solid rgba(214, 189, 150, 0.14)',
        marginTop: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top 2700K Warm Gold Hairline Horizon */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(223, 183, 108, 0.5) 50%, transparent 100%)',
        }}
      />

      {/* Main Luxury Architectural Footer Body */}
      <div className="container" style={{ padding: '4.5rem 2.5rem 2.5rem', position: 'relative', zIndex: 1 }}>
        <div className="footer-main-grid">
          {/* Column 1: Brand Atelier Identity */}
          <div>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                marginBottom: '1.25rem',
              }}
            >
              <img
                src="/brand/homifiora-logo.png"
                srcSet="/brand/homifiora-logo.png 1x, /brand/homifiora-logo@2x.png 2x"
                alt="HOMIFIORA · Architecture | Interiors | Execution"
                style={{
                  height: '42px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </Link>

            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                fontWeight: 300,
                maxWidth: '380px',
                marginBottom: '1.5rem',
              }}
            >
              An architectural and interior design atelier dedicated to sculpting enduring sanctuaries, modern tropical estates, and neoclassical landmarks across India.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                Direct Partner Correspondence
              </span>
              <a
                id="footer-email-link"
                href="mailto:Support@homifiora.com"
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--accent-gold-light)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.03em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-gold-light)')}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, color: 'var(--accent-gold)' }}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Support@homifiora.com</span>
              </a>
              <a
                id="footer-phone-link"
                href="tel:+919999656898"
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--accent-gold-light)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.03em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-gold-light)')}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, color: 'var(--accent-gold)' }}>
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>+91 99996 56898</span>
              </a>
              <a
                id="footer-whatsapp-link"
                href="https://wa.me/919999656898"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--accent-gold-light)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.03em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-gold-light)')}
              >
                <WhatsAppIcon size={18} color="#25D366" /> WhatsApp: +91 99996 56898
              </a>
            </div>
          </div>

          {/* Column 2: Selected Navigation */}
          <div>
            <span
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Selected Works (13)', href: '/projects' },
                { label: 'Studio Philosophy', href: '/about' },
                { label: 'Spatial Doctrines', href: '/about#about-editorial-hero' },
                { label: 'Four-Stage Protocol', href: '/about#about-protocol-section' },
                { label: 'Private Commission', href: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Atelier Hubs */}
          <div>
            <span
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Atelier Hubs
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <strong style={{ fontSize: '0.84rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500 }}>
                  New Delhi NCR
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Principal Atelier &amp; HQ
                </span>
              </div>

              <div>
                <strong style={{ fontSize: '0.84rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500 }}>
                  Gauhati (Guwahati)
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Northeast Regional Atelier &amp; Branch
                </span>
              </div>

              <div>
                <strong style={{ fontSize: '0.84rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500 }}>
                  Patna &amp; Dalsinghsarai
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Eastern Regional Studio
                </span>
              </div>

              <div>
                <strong style={{ fontSize: '0.84rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500 }}>
                  Jammu &amp; Chandigarh
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Northern Consulting Outposts
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Private Consultation Invite */}
          <div>
            <span
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Private Commissions
            </span>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}
            >
              We accept a limited selection of residential, hospitality, and turnkey interior commissions each season to ensure personal partner oversight.
            </p>
            <Link
              href="/contact"
              className="btn-bespoke btn-bespoke-gold"
              style={{
                display: 'inline-flex',
                padding: '0.7rem 1.4rem',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                width: '100%',
                textAlign: 'center',
              }}
            >
              Initiate Dialogue →
            </Link>
          </div>
        </div>

        {/* Sub-Footer Colophon & Scroll to Top */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2026 HOMIFIORA Studio Atelier. Monograph Edition. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.68rem' }}>
              Spaces People Belong To
            </span>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              style={{
                background: 'transparent',
                border: '1px solid rgba(214, 189, 150, 0.25)',
                color: 'var(--accent-gold-light)',
                padding: '0.45rem 1rem',
                fontSize: '0.66rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.25s ease',
                borderRadius: '1px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.backgroundColor = 'rgba(197, 160, 101, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(214, 189, 150, 0.25)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
