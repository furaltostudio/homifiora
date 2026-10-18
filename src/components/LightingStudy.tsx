'use client';

import React, { useState } from 'react';

export default function LightingStudy() {
  const [solarMode, setSolarMode] = useState<'day' | 'golden' | 'night'>('day');
  const [showDimensions, setShowDimensions] = useState<boolean>(false);

  const solarData = {
    day: {
      time: '12:00 PM',
      title: 'Zenith Meridian Sun',
      desc: 'High-contrast solar geometry highlighting the sculptural cantilevered balconies and natural travertine textures.',
      image: '/portfolio_images/page_4.webp',
      azimuth: '180° S',
      elevation: '+64.2°',
      kelvin: '5600K Natural Daylight',
      cct: 'Zero artificial illumination required',
    },
    golden: {
      time: '05:45 PM',
      title: 'Golden Hour Horizon',
      desc: 'Low-angle raking sunlight projecting elongated terracotta jaali shadows across the manicured water court and lawn.',
      image: '/portfolio_images/page_5.webp',
      azimuth: '254° WSW',
      elevation: '+14.8°',
      kelvin: '3200K Amber Grazing',
      cct: 'Natural atmospheric softening',
    },
    night: {
      time: '08:30 PM',
      title: 'Nocturne Facade Illumination',
      desc: 'Concealed 2700K warm architectural linear wash illuminating textured masonry, floating water pavilion, and warm interior lounges.',
      image: '/portfolio_images/page_6.webp',
      azimuth: '310° NW (Sub-horizon)',
      elevation: '-28.0° Night',
      kelvin: '2700K Architectural LED',
      cct: 'Concealed linear coves & grazing uplights',
    },
  };

  const current = solarData[solarMode];

  return (
    <div
      id="lighting-study-container"
      className="corner-ticks architectural-frame"
      style={{
        padding: 'clamp(2rem, 4vw, 3.5rem)',
        backgroundColor: '#0a0c09',
        border: '1px solid var(--border-refined)',
      }}
    >
      {/* Top Telemetry Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1.25rem',
        }}
      >
        <div>
          <span className="eyebrow-label" style={{ marginBottom: '0.4rem' }}>
            Climatic & Solar Study
          </span>
          <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: 'var(--text-primary)' }}>
            Diurnal Facade & Lighting Simulation
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 300, marginTop: '4px' }}>
            Experience how Homifiora architecture reacts to changing sun-paths and twilight illumination.
          </p>
        </div>

        {/* Technical Dimensions Toggle */}
        <button
          onClick={() => setShowDimensions(!showDimensions)}
          style={{
            background: showDimensions ? 'rgba(197, 160, 101, 0.15)' : 'transparent',
            border: showDimensions ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
            color: showDimensions ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
            padding: '0.5rem 1.25rem',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: showDimensions ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
            {showDimensions ? '●' : '○'}
          </span>
          <span>{showDimensions ? 'Drafting HUD Active' : 'Overlay Dimensions HUD'}</span>
        </button>
      </div>

      {/* Main Lighting Plate Display */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          overflow: 'hidden',
          border: '1px solid var(--border-hairline)',
          backgroundColor: '#090a08',
          marginBottom: '2rem',
        }}
      >
        {/* Active Lighting Image */}
        <img
          src={current.image}
          alt={current.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.6s ease, filter 0.6s ease',
            filter: solarMode === 'night' ? 'brightness(0.95)' : 'none',
          }}
        />

        {/* Ambient Top Tag */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            backgroundColor: 'rgba(9, 10, 8, 0.88)',
            border: '1px solid var(--border-hairline)',
            padding: '0.35rem 0.85rem',
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            color: 'var(--accent-gold-light)',
            textTransform: 'uppercase',
            backdropFilter: 'blur(8px)',
          }}
        >
          {current.time} · {current.title}
        </div>

        {/* Technical Architectural Dimensions CAD Overlay (When Activated) */}
        {showDimensions && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: 'linear-gradient(rgba(77, 166, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 166, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            {/* Top Horizontal Cantilever Dimension */}
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '12%',
                right: '18%',
                borderTop: '1px dashed #c5a065',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '4px',
              }}
            >
              <span
                style={{
                  backgroundColor: 'rgba(9,10,8,0.9)',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.65rem',
                  letterSpacing: '0.14em',
                  color: 'var(--accent-gold-light)',
                  fontFamily: 'monospace',
                  border: '1px solid rgba(197, 160, 101, 0.4)',
                }}
              >
                ↔ 24.80 METERS [OVERHANG CANTILEVER AXIS A-B]
              </span>
            </div>

            {/* Vertical Height Dimension */}
            <div
              style={{
                position: 'absolute',
                left: '8%',
                top: '22%',
                bottom: '18%',
                borderLeft: '1px dashed #c5a065',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '6px',
              }}
            >
              <span
                style={{
                  backgroundColor: 'rgba(9,10,8,0.9)',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.65rem',
                  letterSpacing: '0.14em',
                  color: 'var(--accent-gold-light)',
                  fontFamily: 'monospace',
                  border: '1px solid rgba(197, 160, 101, 0.4)',
                  writingMode: 'vertical-lr',
                  transform: 'rotate(180deg)',
                }}
              >
                ↕ 11.20 METERS [THREE TIER ENVELOPE]
              </span>
            </div>

            {/* Feature Structural Callouts */}
            <div
              style={{
                position: 'absolute',
                bottom: '22%',
                right: '12%',
                backgroundColor: 'rgba(9, 20, 32, 0.92)',
                border: '1px solid #4da6ff',
                padding: '0.4rem 0.8rem',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: '#80c2ff',
                fontFamily: 'monospace',
              }}
            >
              [TERRACOTTA JAALI // PERFORATION RATIO: 38% // SOLAR GAIN: -4.2°C]
            </div>
          </div>
        )}

        {/* Bottom Telemetry Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            backgroundColor: 'rgba(9, 10, 8, 0.88)',
            border: '1px solid var(--border-hairline)',
            backdropFilter: 'blur(10px)',
            padding: '0.65rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.7rem', color: '#ded7c8', fontFamily: 'monospace' }}>
            <span>AZIMUTH: <strong style={{ color: 'var(--accent-gold)' }}>{current.azimuth}</strong></span>
            <span>ELEVATION: <strong style={{ color: 'var(--accent-gold)' }}>{current.elevation}</strong></span>
            <span>COLOR TEMP: <strong style={{ color: 'var(--accent-gold-light)' }}>{current.kelvin}</strong></span>
          </div>

          <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
            Vayana Residence · Ref #202301
          </span>
        </div>
      </div>

      {/* Interactive Diurnal Mode Switcher */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: '1.25rem',
        }}
      >
        <button
          onClick={() => setSolarMode('day')}
          style={{
            background: solarMode === 'day' ? 'rgba(197, 160, 101, 0.08)' : 'transparent',
            border: solarMode === 'day' ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
            padding: '1.25rem',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '1rem', color: solarMode === 'day' ? 'var(--accent-gold-light)' : 'var(--text-primary)', fontWeight: 500 }}>
              12:00 PM · Midday Sun
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.12em' }}>
              HIGH ALTITUDE
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            Sharp shadow geometric clarity across cantilevers & travertine surfaces.
          </p>
        </button>

        <button
          onClick={() => setSolarMode('golden')}
          style={{
            background: solarMode === 'golden' ? 'rgba(197, 160, 101, 0.08)' : 'transparent',
            border: solarMode === 'golden' ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
            padding: '1.25rem',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '1rem', color: solarMode === 'golden' ? 'var(--accent-gold-light)' : 'var(--text-primary)', fontWeight: 500 }}>
              05:45 PM · Golden Hour
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.12em' }}>
              RAKING SUN
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            Warm horizontal rays filtering through terracotta jaali into the central water court.
          </p>
        </button>

        <button
          onClick={() => setSolarMode('night')}
          style={{
            background: solarMode === 'night' ? 'rgba(197, 160, 101, 0.08)' : 'transparent',
            border: solarMode === 'night' ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
            padding: '1.25rem',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '1rem', color: solarMode === 'night' ? 'var(--accent-gold-light)' : 'var(--text-primary)', fontWeight: 500 }}>
              08:30 PM · Nocturne
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '0.12em' }}>
              CONCEALED 2700K
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            Warm architectural cove washes reflecting across dark reflective pool surfaces.
          </p>
        </button>
      </div>
    </div>
  );
}
