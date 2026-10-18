'use client';

import React, { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  glare?: boolean;
}

export default function TiltCard({
  id,
  children,
  className = '',
  style = {},
  maxTilt = 7,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.015, 1.015, 1.015)`
    );

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlarePos({ x: glareX, y: glareY, opacity: 0.16 });
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`corner-ticks architectural-frame ${className}`}
      style={{
        transform: transformStyle || 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease',
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}

      {/* Dynamic Specular Golden Light Glare */}
      {glare && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(214, 189, 150, ${glarePos.opacity}), transparent 75%)`,
            transition: 'opacity 0.3s ease',
            zIndex: 15,
          }}
        />
      )}
    </div>
  );
}
