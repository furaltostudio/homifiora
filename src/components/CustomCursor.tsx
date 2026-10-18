'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check what is being hovered
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor], .plate-card-zoom') as HTMLElement | null;
      const clickableTarget = target.closest('a, button, [role="button"], input, select');

      if (cursorTarget) {
        setIsHovered(true);
        const customText = cursorTarget.getAttribute('data-cursor');
        setHoverText(customText || 'INSPECT');
      } else if (clickableTarget) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    let animationFrameId: number;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };
    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos]);

  if (!isVisible) return null;

  const ringSize = hoverText ? 44 : isHovered ? 28 : 16;
  const ringRadius = ringSize / 2;

  return (
    <>
      {/* Precision Inner Gold Dot - fades out when inspecting so text is crystal clear */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: '#c5a065',
          transform: `translate3d(${pos.x - 2}px, ${pos.y - 2}px, 0)`,
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: hoverText ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Trailing Luxury Ring / Translucent Compact Badge */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: '50%',
          border: hoverText
            ? '1px solid rgba(197, 160, 101, 0.75)'
            : isHovered
            ? '1px solid rgba(197, 160, 101, 0.55)'
            : '1px solid rgba(197, 160, 101, 0.35)',
          backgroundColor: hoverText
            ? 'rgba(10, 12, 10, 0.22)' // High transparency so underlying images/content are fully visible
            : isHovered
            ? 'rgba(197, 160, 101, 0.06)'
            : 'transparent',
          backdropFilter: hoverText ? 'blur(2px)' : 'none',
          WebkitBackdropFilter: hoverText ? 'blur(2px)' : 'none',
          boxShadow: hoverText
            ? '0 0 10px rgba(197, 160, 101, 0.2)'
            : isHovered
            ? '0 0 8px rgba(197, 160, 101, 0.15)'
            : 'none',
          transform: `translate3d(${trailingPos.x - ringRadius}px, ${trailingPos.y - ringRadius}px, 0)`,
          pointerEvents: 'none',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition:
            'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        {hoverText && (
          <span
            style={{
              fontSize: '0.5rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#f5f2ea',
              fontWeight: 600,
              textAlign: 'center',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.95)',
              userSelect: 'none',
              lineHeight: 1,
            }}
          >
            {hoverText}
          </span>
        )}
      </div>
    </>
  );
}
