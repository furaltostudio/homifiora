'use client';

import React, { useState, useRef, useCallback, MouseEvent, TouchEvent } from 'react';

interface BlueprintCompareProps {
  renderImage?: string;
  blueprintImage?: string;
  title?: string;
  subtitle?: string;
  projectCode?: string;
}

export default function BlueprintCompare({
  renderImage = '/portfolio_images/page_4.webp',
  blueprintImage = '/portfolio_images/page_25.webp', // Has architectural lines & elevation
  title = 'Vayana Residence & Landscape',
  subtitle = 'Technical Drafting CAD vs Turnkey Architectural Render',
  projectCode = '202301',
}: BlueprintCompareProps) {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="corner-ticks architectural-frame" style={{ padding: '2.5rem', backgroundColor: '#0b0d0a' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="eyebrow-label" style={{ marginBottom: '0.4rem' }}>
            Interactive Spatial Study
          </span>
          <h3 style={{ fontSize: '1.65rem', color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginTop: '3px' }}>
            {subtitle}
          </span>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
            Ref #{projectCode} · Drag to Reveal
          </span>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '6px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            <span style={{ color: sliderPos < 50 ? 'var(--accent-gold-light)' : 'var(--text-muted)' }}>
              CAD BLUEPRINT {Math.round(100 - sliderPos)}%
            </span>
            <span>|</span>
            <span style={{ color: sliderPos >= 50 ? 'var(--accent-gold-light)' : 'var(--text-muted)' }}>
              RENDER {Math.round(sliderPos)}%
            </span>
          </div>
        </div>
      </div>

      {/* Comparison Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={onMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={onTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'ew-resize',
          userSelect: 'none',
          border: '1px solid var(--border-hairline)',
        }}
      >
        {/* Layer 1: Blueprint Layer (Background) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${blueprintImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'invert(0.9) hue-rotate(180deg) brightness(0.85) contrast(1.4)',
          }}
        />

        {/* Blueprint Grid & Technical Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(9, 20, 28, 0.45), rgba(9, 20, 28, 0.3))',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'rgba(9, 20, 32, 0.9)',
              border: '1px solid rgba(77, 166, 255, 0.35)',
              padding: '0.35rem 0.85rem',
              fontSize: '0.68rem',
              letterSpacing: '0.16em',
              color: '#80c2ff',
              textTransform: 'uppercase',
            }}
          >
            [CAD TECTONICS // ELEVATION MAPPING]
          </div>
        </div>

        {/* Layer 2: Architectural Render Layer (Clipped by sliderPos) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            backgroundImage: `url(${renderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              backgroundColor: 'rgba(9, 10, 8, 0.88)',
              border: '1px solid var(--border-hairline)',
              padding: '0.35rem 0.85rem',
              fontSize: '0.68rem',
              letterSpacing: '0.16em',
              color: 'var(--accent-gold-light)',
              textTransform: 'uppercase',
            }}
          >
            [PHOTOREALISTIC FINISHED REALIZATION]
          </div>
        </div>

        {/* Golden Hairline Divider Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '2px',
            backgroundColor: 'var(--accent-gold)',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            boxShadow: '0 0 16px rgba(197, 160, 101, 0.65)',
            zIndex: 10,
          }}
        >
          {/* Circular Gold Handle */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(9, 10, 8, 0.95)',
              border: '1.5px solid var(--accent-gold)',
              boxShadow: '0 0 20px rgba(197, 160, 101, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-gold)',
              fontSize: '0.85rem',
              letterSpacing: '-2px',
              fontWeight: 700,
            }}
          >
            ‹›
          </div>
        </div>
      </div>

      {/* Interactive Quick Presets */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
        <button
          onClick={() => setSliderPos(25)}
          style={{
            background: 'none',
            border: '1px solid var(--border-hairline)',
            color: 'var(--text-secondary)',
            fontSize: '0.72rem',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Inspect Blueprint (75%)
        </button>
        <button
          onClick={() => setSliderPos(50)}
          style={{
            background: 'none',
            border: '1px solid var(--accent-gold)',
            color: 'var(--accent-gold-light)',
            fontSize: '0.72rem',
            padding: '0.4rem 1.25rem',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Equidistant (50/50)
        </button>
        <button
          onClick={() => setSliderPos(75)}
          style={{
            background: 'none',
            border: '1px solid var(--border-hairline)',
            color: 'var(--text-secondary)',
            fontSize: '0.72rem',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Inspect Render (75%)
        </button>
      </div>
    </div>
  );
}
