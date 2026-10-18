'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { Project } from '@/data/portfolioData';

interface Props {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % project.gallery.length);
    }
  };

  const prevLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  return (
    <div id="project-detail-view">
      {/* 1. Header & Breadcrumbs */}
      <section
        style={{
          padding: '7.5rem 0 3.5rem',
          backgroundColor: '#090a08',
          borderBottom: '1px solid var(--border-hairline)',
        }}
      >
        <div className="container">
          {/* Breadcrumbs */}
          <nav
            id="project-breadcrumbs"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            <Link href="/" style={{ color: 'var(--text-secondary)' }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" style={{ color: 'var(--text-secondary)' }}>
              Selected Works
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--accent-gold)' }}>{project.title}</span>
          </nav>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '2.5rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-light)',
                    border: '1px solid var(--border-hairline)',
                    padding: '0.3rem 0.8rem',
                  }}
                >
                  {project.category}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--accent-gold)',
                    letterSpacing: '0.14em',
                    fontWeight: 600,
                  }}
                >
                  MONOGRAPH REF #{project.projectNo}
                </span>
              </div>
              <h1
                id="project-title"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                }}
              >
                {project.title}
              </h1>
              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                  fontWeight: 300,
                }}
              >
                {project.client} · {project.location} · Monograph Year {project.year}
              </p>
            </div>

            <Link
              id="inquire-project-btn"
              href={`/contact?project=${encodeURIComponent(project.title)}`}
              className="btn-bespoke btn-bespoke-gold"
            >
              Commission Similar Work
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="project-detail-hero-grid">
            {/* Left Column: Primary Cover, Narrative & Full Gallery */}
            <div>
              {/* Primary Feature Cover */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  border: '1px solid var(--border-hairline)',
                  marginBottom: '3rem',
                  cursor: 'pointer',
                }}
                onClick={() => openLightbox(0)}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(9, 10, 8, 0.88)',
                    border: '1px solid var(--border-hairline)',
                    padding: '0.45rem 1rem',
                    fontSize: '0.75rem',
                    color: 'var(--accent-gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Expand Full Plate
                </div>
              </div>

              {/* Design Philosophy Statement Banner */}
              {project.designPhilosophy && (
                <div
                  id="project-design-philosophy-banner"
                  className="architectural-frame"
                  style={{
                    padding: '2.5rem',
                    marginBottom: '3rem',
                    borderLeft: '2px solid var(--accent-gold)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      display: 'block',
                      marginBottom: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    Architectural Philosophy
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontStyle: 'italic',
                      color: 'var(--text-primary)',
                      lineHeight: '1.6',
                    }}
                  >
                    "{project.designPhilosophy}"
                  </p>
                </div>
              )}

              {/* Detailed Narrative Paragraphs from PDF */}
              <div style={{ marginBottom: '3.5rem' }}>
                <span className="eyebrow-label">Spatial Statement</span>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Architectural Concept & Form</h3>
                {project.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: '1.08rem',
                      lineHeight: '1.9',
                      color: '#ded7c7',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Architectural Highlights */}
              <div
                className="architectural-frame"
                style={{ padding: '3rem 2.5rem', marginBottom: '4rem' }}
              >
                <span className="eyebrow-label">Engineering & Detailing</span>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '1.75rem' }}>Key Architectural Highlights</h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                >
                  {project.keyHighlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        fontSize: '1.025rem',
                        color: 'var(--text-primary)',
                        lineHeight: '1.65',
                      }}
                    >
                      <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', lineHeight: '1.8' }}>◆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* High-Resolution Project Gallery */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                  <div>
                    <span className="eyebrow-label">Visual Documentation</span>
                    <h3 style={{ fontSize: '1.75rem' }}>Render Views & Perspective Plates</h3>
                  </div>
                  <span style={{ fontSize: '0.82rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                    {project.gallery.length} Plates in Monograph
                  </span>
                </div>

                <div
                  id="project-gallery-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                    gap: '1.75rem',
                  }}
                >
                  {project.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      id={`gallery-image-${idx}`}
                      style={{
                        position: 'relative',
                        aspectRatio: '16/10',
                        overflow: 'hidden',
                        border: '1px solid var(--border-hairline)',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s ease',
                      }}
                      onClick={() => openLightbox(idx)}
                    >
                      <img
                        src={imgSrc}
                        alt={`${project.title} - View ${idx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          left: '8px',
                          backgroundColor: 'rgba(9,10,8,0.85)',
                          padding: '0.2rem 0.55rem',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#fff',
                          border: '1px solid var(--border-hairline)',
                        }}
                      >
                        Plate {idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Specifications Sidebar */}
            <aside style={{ position: 'sticky', top: '100px' }}>
              <div
                className="architectural-frame"
                style={{ padding: '3rem 2.25rem', marginBottom: '2rem' }}
              >
                <span className="eyebrow-label" style={{ marginBottom: '1rem' }}>
                  Specifications
                </span>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '1rem' }}>
                  Monograph Data
                </h3>

                <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  <div>
                    <dt style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Commissioned By
                    </dt>
                    <dd style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {project.client}
                    </dd>
                  </div>

                  <div>
                    <dt style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Site Location
                    </dt>
                    <dd style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {project.location}
                    </dd>
                  </div>

                  <div>
                    <dt style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Monograph Code
                    </dt>
                    <dd style={{ fontSize: '1.05rem', color: 'var(--accent-gold-light)', fontWeight: 600 }}>
                      #{project.projectNo}
                    </dd>
                  </div>

                  <div>
                    <dt style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Typology / Sector
                    </dt>
                    <dd style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {project.category}
                    </dd>
                  </div>

                  {project.specifications.map((spec, i) => (
                    <div key={i}>
                      <dt style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        {spec.label}
                      </dt>
                      <dd style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="btn-bespoke btn-bespoke-gold"
                    style={{ width: '100%', fontSize: '0.75rem' }}
                  >
                    Commission Similar Work
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Next / Previous Project Navigation Bar */}
      <section
        style={{
          borderTop: '1px solid var(--border-hairline)',
          backgroundColor: '#090a08',
          padding: '3.5rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {/* Previous Project Link */}
            <Link
              id="prev-project-link"
              href={`/projects/${prevProject.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  width: '42px',
                  height: '42px',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  fontSize: '1.2rem',
                }}
              >
                ←
              </span>
              <div>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                  Previous Work
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Back to All Projects */}
            <Link
              id="all-projects-link"
              href="/projects"
              className="btn-bespoke btn-bespoke-outline"
              style={{ fontSize: '0.75rem', padding: '0.75rem 1.75rem' }}
            >
              All Portfolio Works (13)
            </Link>

            {/* Next Project Link */}
            <Link
              id="next-project-link"
              href={`/projects/${nextProject.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                textDecoration: 'none',
                textAlign: 'right',
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                  Next Work
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {nextProject.title}
                </span>
              </div>
              <span
                style={{
                  width: '42px',
                  height: '42px',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  fontSize: '1.2rem',
                }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Atelier Commissioning Invitation Bar */}
      <section
        id="project-detail-inquiry-bar"
        style={{
          borderTop: '1px solid rgba(214, 189, 150, 0.18)',
          backgroundColor: '#070806',
          padding: '5rem 0 5.5rem',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '940px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow-label" style={{ marginBottom: '1.25rem' }}>
              Commence A Private Commission
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Commission An Architectural Sanctuary <br />
              <span className="serif-italic gold-gradient-text">Inspired By {project.title}.</span>
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: '1.85',
                color: '#ded7c8',
                marginBottom: '3rem',
                fontWeight: 300,
                maxWidth: '720px',
                margin: '0 auto 3rem',
              }}
            >
              Initiate an exploratory consultation directly with HOMIFIORA founding partners. We oversee every commission personally with uncompromising detail.
            </p>

            {/* Symmetrical 3-Channel Direct Concierge Ribbon */}
            <div className="hero-concierge-ribbon corner-ticks" id="project-detail-concierge-ribbon">
              {/* Channel 1: WhatsApp Concierge */}
              <a
                id="detail-whatsapp-btn"
                href={`https://wa.me/919999656898?text=Hello%20HOMIFIORA%20Studio%2C%20I%20am%20interested%20in%20commissioning%20a%20project%20similar%20to%20${encodeURIComponent(project.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.35rem 1.6rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRight: '1px solid rgba(214, 189, 150, 0.16)',
                  transition: 'background-color 0.25s ease',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <WhatsAppIcon size={22} color="#25D366" />
                </div>
                <div style={{ textAlign: 'left', lineHeight: 1.3 }}>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px', fontWeight: 600 }}>
                    WhatsApp Concierge
                  </span>
                  <span style={{ fontSize: '0.94rem', color: '#ffffff', fontWeight: 500, display: 'block', letterSpacing: '0.02em' }}>
                    +91 99996 56898
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold-light)', letterSpacing: '0.04em' }}>
                    Instant Dialogue →
                  </span>
                </div>
              </a>

              {/* Channel 2: Direct Atelier Telephony */}
              <a
                id="detail-call-btn"
                href="tel:+919999656898"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.35rem 1.6rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRight: '1px solid rgba(214, 189, 150, 0.16)',
                  transition: 'background-color 0.25s ease',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(197, 160, 101, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(214, 189, 150, 0.08)',
                    border: '1px solid rgba(214, 189, 150, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--accent-gold)',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div style={{ textAlign: 'left', lineHeight: 1.3 }}>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px', fontWeight: 600 }}>
                    Direct Atelier Line
                  </span>
                  <span style={{ fontSize: '0.94rem', color: '#ffffff', fontWeight: 500, display: 'block', letterSpacing: '0.02em' }}>
                    +91 99996 56898
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold-light)', letterSpacing: '0.04em' }}>
                    Direct Telephony →
                  </span>
                </div>
              </a>

              {/* Channel 3: Partner Correspondence */}
              <a
                id="detail-email-btn"
                href="mailto:Support@homifiora.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.35rem 1.6rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 0.25s ease',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(197, 160, 101, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(214, 189, 150, 0.08)',
                    border: '1px solid rgba(214, 189, 150, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--accent-gold)',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div style={{ textAlign: 'left', lineHeight: 1.3 }}>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px', fontWeight: 600 }}>
                    Partner Correspondence
                  </span>
                  <span style={{ fontSize: '0.94rem', color: '#ffffff', fontWeight: 500, display: 'block', letterSpacing: '0.02em' }}>
                    Support@homifiora.com
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold-light)', letterSpacing: '0.04em' }}>
                    Transmit Inquiry →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fullscreen Interactive Image Lightbox Modal with Carousel Controls */}
      {activeImageIndex !== null && (
        <div
          id="project-image-lightbox-modal"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 4000,
            backgroundColor: 'rgba(5, 6, 5, 0.98)',
            backdropFilter: 'blur(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={closeLightbox}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.gallery[activeImageIndex]}
              alt={`${project.title} - Plate ${activeImageIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '68vh',
                objectFit: 'contain',
                borderRadius: '1px',
                border: '1px solid var(--border-hairline)',
              }}
            />

            {/* Filmstrip of Thumbnails */}
            <div
              style={{
                display: 'flex',
                gap: '0.65rem',
                marginTop: '1rem',
                overflowX: 'auto',
                maxWidth: '100%',
                padding: '0.25rem 0',
              }}
            >
              {project.gallery.map((img, i) => (
                <div
                  key={img}
                  onClick={() => setActiveImageIndex(i)}
                  style={{
                    width: '60px',
                    height: '38px',
                    flexShrink: 0,
                    border: activeImageIndex === i ? '2px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: activeImageIndex === i ? 1 : 0.6,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Lightbox Controls bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '1rem',
                backgroundColor: 'rgba(9,10,8,0.9)',
                border: '1px solid var(--border-hairline)',
                padding: '0.45rem 1.5rem',
              }}
            >
              <button
                onClick={prevLightboxImage}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-gold)',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                ← Prev
              </button>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Plate {activeImageIndex + 1} / {project.gallery.length}
              </span>
              <button
                onClick={nextLightboxImage}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-gold)',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Next →
              </button>
            </div>

            <button
              id="close-lightbox-btn"
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '-24px',
                right: '-24px',
                backgroundColor: '#090a08',
                color: 'var(--accent-gold-light)',
                border: '1px solid var(--border-hairline)',
                width: '42px',
                height: '42px',
                fontSize: '1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
