'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface HeroVideoPlayerProps {
  posterImage?: string;
}

export default function HeroVideoPlayer({
  posterImage = '/brand/hero-poster-4k.webp',
}: HeroVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Strictly enforce muted continuous autoplay on all browsers
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch(() => {
        // Safe catch for power-saving restrictions
      });
    }
  }, []);

  return (
    <section
      id="hero-video-section"
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(780px, 108svh, 1080px)',
        minHeight: '760px',
        overflow: 'hidden',
        backgroundColor: '#070806',
      }}
    >
      {/* 1. Pure Full-Bleed 4K UHD Autoplay Video (Hardware-Accelerated Direct Composite, Zero Blur) */}
      <video
        ref={videoRef}
        id="hero-ambient-video"
        poster={posterImage}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          imageRendering: '-webkit-optimize-contrast',
        }}
      >
        <source src="/VN20261018_152550.mp4" type="video/mp4" />
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* 2. Architectural Corner Viewfinder Brackets */}
      <div className="viewfinder-reticle top-left" />
      <div className="viewfinder-reticle top-right" />
      <div className="viewfinder-reticle bottom-left" />
      <div className="viewfinder-reticle bottom-right" />

      {/* 3. Subtle Edge Vignette (Keeps center 100% crystal clear) */}
      <div className="cinematic-vignette" />

      {/* 4. Top Contrast Shade for Navigation Bar Legibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: 'linear-gradient(to bottom, rgba(5, 6, 4, 0.65) 0%, rgba(5, 6, 4, 0.15) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 5. Haute Architectural Editorial Hero Centerpiece */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto', maxWidth: '960px', width: '100%' }}>
          {/* Atelier Classification Pill */}
          <div className="hero-editorial-badge">
            <span className="hero-editorial-badge-dot" />
            <span className="hero-editorial-badge-text">
              Architectural Atelier · Est. 2014
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="hero-headline">
            Spaces That <span style={{ fontStyle: 'italic', color: 'var(--accent-gold-light, #f0dfb8)' }}>Belong</span>
          </h1>

          {/* Luxury Editorial Subtitle */}
          <p className="hero-subtitle">
            Sculpting private tropical sanctuaries, bespoke modern estates &amp; neoclassical landmarks across India.
          </p>

          {/* Dual Haute Action CTAs */}
          <div className="hero-cta-group">
            <a
              href="#studio-manifesto-section"
              className="btn-bespoke btn-bespoke-gold"
              style={{
                padding: '0.95rem 2.15rem',
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(223, 183, 108, 0.25)',
              }}
            >
              Explore Monographs
            </a>

            <Link
              href="/contact"
              className="btn-bespoke btn-bespoke-outline"
              style={{
                padding: '0.95rem 2.15rem',
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderColor: 'rgba(255, 255, 255, 0.35)',
                color: '#ffffff',
                backgroundColor: 'rgba(9, 10, 8, 0.55)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* 6. Minimalist Architectural Scroll Prompt */}
      <a
        href="#studio-manifesto-section"
        aria-label="Scroll down to atelier manifesto"
        style={{
          position: 'absolute',
          bottom: '1.85rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          textDecoration: 'none',
          color: 'rgba(235, 232, 224, 0.75)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--accent-gold)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(235, 232, 224, 0.75)';
        }}
      >
        <span
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            fontWeight: 400,
          }}
        >
          Explore
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </a>

      {/* 8. Bottom Contrast Transition to Manifesto */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: 'linear-gradient(to top, rgba(9, 10, 8, 0.85) 0%, rgba(9, 10, 8, 0.3) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </section>
  );
}

