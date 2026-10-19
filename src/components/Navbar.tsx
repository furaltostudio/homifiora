'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [userTime, setUserTime] = useState('');
  const [userCity, setUserCity] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // 1. Live User Local Time (Formatted according to user's local device clock)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setUserTime(new Intl.DateTimeFormat(undefined, options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);

    // 2. Dynamic City Detection with safe fallback
    const detectCity = async () => {
      try {
        const cachedCity = sessionStorage.getItem('homifiora_user_city');
        if (cachedCity) {
          setUserCity(cachedCity);
          return;
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        const res = await fetch('https://ipwho.is/', { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data && data.success && data.city) {
            const cityUpper = String(data.city).toUpperCase();
            setUserCity(cityUpper);
            sessionStorage.setItem('homifiora_user_city', cityUpper);
            return;
          }
        }
      } catch {
        // Safe catch: network error, adblocker, or timeout
      }

      // Fallback: Check if IANA timezone has an explicit city name (e.g. Dubai, London, New York)
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz && tz.includes('/')) {
          const rawCity = tz.split('/')[1]?.replace(/_/g, ' ');
          if (rawCity && rawCity !== 'Kolkata' && rawCity !== 'Calcutta') {
            const cityUpper = rawCity.toUpperCase();
            setUserCity(cityUpper);
            return;
          }
        }
      } catch {
        // Keep userCity null if no city can be determined
      }

      // If city cannot be determined, userCity remains null and only local time is shown
    };

    detectCity();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Lock background body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'About Atelier', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header
        id="main-navigation-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: mobileMenuOpen ? 1051 : 1000,
          transition: 'background 0.4s ease, background-color 0.4s ease, padding 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease, box-shadow 0.4s ease',
          backgroundColor: scrolled ? 'rgba(8, 9, 7, 0.95)' : 'transparent',
          background: scrolled
            ? 'rgba(8, 9, 7, 0.95)'
            : 'linear-gradient(to bottom, rgba(5, 6, 5, 0.75) 0%, rgba(5, 6, 5, 0.2) 65%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(197, 160, 101, 0.25)'
            : '1px solid rgba(255, 255, 255, 0.04)',
          boxShadow: scrolled
            ? '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 1px 0 0 rgba(223, 183, 108, 0.15)'
            : 'none',
          padding: scrolled ? '0.75rem 0' : '1.15rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Official HOMIFIORA Brand Logo Lockup */}
          <Link
            id="nav-brand-logo"
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src="/brand/homifiora-logo.png"
              srcSet="/brand/homifiora-logo.png 1x, /brand/homifiora-logo@2x.png 2x"
              alt="HOMIFIORA · Architecture | Interiors | Execution"
              className="nav-logo-image"
              style={{
                height: scrolled ? '36px' : '44px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                imageRendering: '-webkit-optimize-contrast',
                filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.9))',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(223, 183, 108, 0.5))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.9))';
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
            className="desktop-nav-container"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  href={link.href}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: active ? '#ffffff' : 'var(--text-secondary)',
                    textShadow: '0 1px 8px rgba(0, 0, 0, 0.9)',
                    transition: 'all 0.25s ease',
                    padding: '0.35rem 0',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.textShadow = '0 0 12px rgba(223, 183, 108, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active ? '#ffffff' : 'var(--text-secondary)';
                    e.currentTarget.style.textShadow = '0 1px 8px rgba(0, 0, 0, 0.9)';
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        backgroundColor: 'var(--accent-gold)',
                        boxShadow: '0 0 8px rgba(223, 183, 108, 0.8)',
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Live User Time & Dynamic City (Frosted Jewel Badge) */}
            {userTime && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.66rem',
                  letterSpacing: '0.16em',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.85rem',
                  backgroundColor: 'rgba(7, 8, 6, 0.65)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(214, 189, 150, 0.22)',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#52b788',
                    boxShadow: '0 0 8px #52b788',
                    flexShrink: 0,
                  }}
                />
                <span>{userCity ? `${userCity} · ${userTime}` : userTime}</span>
              </div>
            )}

            {/* Inquire CTA Button (Architectural Haute-Couture) */}
            <Link
              id="nav-cta-btn"
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.52rem 1.45rem',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--accent-gold-light)',
                backgroundColor: 'rgba(7, 8, 6, 0.7)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(197, 160, 101, 0.55)',
                borderRadius: '2px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 160, 101, 0.2)';
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(197, 160, 101, 0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(7, 8, 6, 0.7)';
                e.currentTarget.style.borderColor = 'rgba(197, 160, 101, 0.55)';
                e.currentTarget.style.color = 'var(--accent-gold-light)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Inquire
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '6px',
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-toggle-btn"
          >
            <span
              style={{
                width: '24px',
                height: '1.5px',
                backgroundColor: 'var(--accent-gold)',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
              }}
            />
            <span
              style={{
                width: '18px',
                height: '1.5px',
                backgroundColor: 'var(--text-primary)',
                transition: 'all 0.3s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: '24px',
                height: '1.5px',
                backgroundColor: 'var(--accent-gold)',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(9, 10, 8, 0.98)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          zIndex: 1050,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-16px)',
          padding: '5.5rem 2rem 2.5rem',
          overflowY: 'auto',
        }}
      >

        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: active ? 'var(--accent-gold)' : 'var(--text-primary)',
                letterSpacing: '0.08em',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          );
        })}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '280px', marginTop: '1rem' }}>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-bespoke btn-bespoke-gold"
            style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '0.75rem', textAlign: 'center' }}
          >
            Book Consultation
          </Link>
          <a
            id="mobile-drawer-whatsapp"
            href="https://wa.me/919999656898"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bespoke btn-bespoke-outline"
            style={{
              width: '100%',
              padding: '0.75rem 1.25rem',
              fontSize: '0.72rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              borderColor: 'rgba(197, 160, 101, 0.4)',
              color: 'var(--accent-gold-light)',
            }}
          >
            <WhatsAppIcon size={18} color="#25D366" /> WhatsApp Concierge
          </a>
          <a
            id="mobile-drawer-phone"
            href="tel:+919999656898"
            className="btn-bespoke btn-bespoke-outline"
            style={{
              width: '100%',
              padding: '0.75rem 1.25rem',
              fontSize: '0.72rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              borderColor: 'rgba(214, 189, 150, 0.25)',
              color: 'var(--text-secondary)',
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, color: 'var(--accent-gold)' }}>
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>+91 99996 56898</span>
          </a>
        </div>

        {userTime && (
          <div
            style={{
              marginTop: '1.5rem',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            {userCity ? `${userCity} · ${userTime}` : userTime}
          </div>
        )}
      </div>
    </>
  );
}
