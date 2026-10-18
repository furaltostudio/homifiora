'use client';

import React, { useEffect, useRef } from 'react';

interface HeroVideoPlayerProps {
  posterImage?: string;
}

export default function HeroVideoPlayer({
  posterImage = '/brand/homifiora-studio-facade-crop.webp',
}: HeroVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Strictly enforce muted autoplay with smooth slow-motion cadence on all browsers
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      // 0.88x speed: transforms handheld / gimbal footage into a slow, weighted cinematic dolly shot
      videoRef.current.playbackRate = 0.88;
      videoRef.current.play().catch(() => {
        // Safe catch for browser power-saving restrictions
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
      {/* 1. Pure Full-Bleed 4K UHD Autoplay Video (True 1:1 Pixel Mapping, No Artificial Upscaling Blur) */}
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
          // DaVinci Resolve-inspired architectural color grade: rich shadows, warm 2700K incandescent amber glow
          filter: 'contrast(1.08) brightness(0.96) saturate(1.06)',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          imageRendering: 'auto',
          transition: 'filter 0.5s ease',
        }}
      >
        <source src="/VN20261018_152550.mp4" type="video/mp4" />
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* 2. Haute Architectural Spotlight Vignette (Centers viewer's gaze on the classical facade) */}
      <div className="cinematic-vignette" />

      {/* 3. Warm 2700K Ambient Architectural Sunbeam Sheen (Subtle breathing sunlight effect) */}
      <div className="ambient-sunbeam" />

      {/* 4. 35mm Analog Film Grain Overlay (Eliminates digital compression banding, gives cinema celluloid feel) */}
      <div className="film-grain-overlay" />

      {/* 5. Floating Dust / Atmospheric Light Particles (Creates authentic gallery air ambience) */}
      <div className="dust-mote" style={{ width: '3px', height: '3px', top: '35%', left: '22%', animationDelay: '0s' }} />
      <div className="dust-mote" style={{ width: '2px', height: '2px', top: '65%', left: '74%', animationDelay: '3s' }} />
      <div className="dust-mote" style={{ width: '3px', height: '3px', top: '48%', left: '50%', animationDelay: '6s' }} />
      <div className="dust-mote" style={{ width: '2px', height: '2px', top: '78%', left: '32%', animationDelay: '9s' }} />

      {/* 6. Top Contrast Shade for Navigation Bar Legibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: 'linear-gradient(to bottom, rgba(5, 6, 4, 0.6) 0%, rgba(5, 6, 4, 0.15) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 7. Bottom Contrast Transition to Provenance Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, rgba(9, 10, 8, 0.8) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </section>
  );
}

