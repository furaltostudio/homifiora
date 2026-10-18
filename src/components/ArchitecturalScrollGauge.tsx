'use client';

import React, { useEffect, useState } from 'react';

export default function ArchitecturalScrollGauge() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Top Horizon Golden Laser Reading Progress Beam */
    <div
      id="scroll-top-laser-beam"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #9a763f 0%, #c5a065 50%, #fbf7ee 100%)',
          boxShadow: '0 0 10px rgba(197, 160, 101, 0.8), 0 0 20px rgba(197, 160, 101, 0.4)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
}
