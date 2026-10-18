'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroVideoPlayer from '@/components/HeroVideoPlayer';
import TiltCard from '@/components/TiltCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { portfolioProjects } from '@/data/portfolioData';

export default function HomeClient() {
  // Key Featured Landmark Typologies
  const vayana = portfolioProjects.find((p) => p.slug === 'vayana-residence') || portfolioProjects[0];
  const aurelia = portfolioProjects.find((p) => p.slug === 'the-aurelia') || portfolioProjects[1];
  const aarohan = portfolioProjects.find((p) => p.slug === 'aarohan-residence') || portfolioProjects[10];

  // 1. Physical Flagship Atelier Views (Real-world Studio Architecture)
  const atelierViews = [
    {
      id: 'facade',
      title: 'Flagship Façade & Plinth',
      subtitle: 'Street Elevation · Monolithic Charcoal Slate & Teak Louvers',
      image: '/brand/homifiora-studio-facade-crop.webp',
      caption: 'The physical storefront of HOMIFIORA. Charcoal slate header, extruded 3D illuminated gold lockup, warm 2700K linear cove lighting wash, natural teak louvers, and biophilic cascading planters.',
      specs: ['Charcoal Slate Header', 'Extruded 3D Gold Lockup', 'Warm 2700K Linear Cove', 'Biophilic Planters'],
    },
    {
      id: 'salon',
      title: 'Luminous Welcome Salon & Reception',
      subtitle: 'Interior Core · Backlit Travertine & Fluted Teak Fins',
      image: '/brand/homifiora-interior-center.webp',
      caption: 'The interior centerpiece: a monolithic reception desk set against a warm backlit natural travertine stone wall with the golden Homifiora emblem, flanked by acoustic teak fins and tropical palms.',
      specs: ['Backlit Italian Travertine', 'Custom 3D Leaf Emblem', 'Fluted Teak Acoustic Louvers', 'Indoor Tropical Palms'],
    },
    {
      id: 'fascia',
      title: 'Illuminated 3D Champagne Fascia',
      subtitle: 'Brand Architecture · "Spaces People Belong To"',
      image: '/brand/homifiora-studio-signboard.webp',
      caption: 'Extruded brushed champagne gold branding against deep slate with architectural tagline "Spaces People Belong To" and discipline subtitle "Architecture | Interiors | Execution".',
      specs: ['Brushed Champagne Gold', 'Matte Slate Backing', '2700K Linear Concealed Wash', 'Atmospheric Ambience'],
    },
  ];
  const [activeAtelierView, setActiveAtelierView] = useState(0);

  // 2. Tactile Materiality Atelier State
  const materials = [
    {
      id: 'terracotta',
      name: 'Handcrafted Terracotta Jaali',
      category: 'Climate-Responsive Screen',
      origin: 'Regional Indo-Gangetic Kilns',
      properties: 'Passive cooling, natural cross-ventilation, dynamic geometric shadows',
      image: '/portfolio_images/page_54.webp',
      projectFeature: 'Vayana Residence & Aarohan',
      quote: 'Clay perforated screens that naturally cool ambient interiors while casting poetic, moving silhouettes across living verandahs.',
    },
    {
      id: 'stone',
      name: 'Chiseled Slate & Italian Travertine',
      category: 'Monolithic Facade Stone',
      origin: 'Rajasthan & Tivoli Quarries',
      properties: 'High acoustic mass, weathered tactile texture, permanent structural dignity',
      image: '/portfolio_images/page_53.webp',
      projectFeature: 'Classical Interior & Atelier Headquarters',
      quote: 'Monolithic stone planes that age gracefully with time, grounding spaces in contemplative, monolithic permanence.',
    },
    {
      id: 'wood',
      name: 'Fluted Teakwood & Honeyed Timber',
      category: 'Acoustic Joinery & Soffits',
      origin: 'Sustainably Harvested Central Teak',
      properties: 'Acoustic softening, tactile warmth, concealed shadowline millwork',
      image: '/portfolio_images/page_37.webp',
      projectFeature: 'Vikas Vidur Penthouse & Vayana',
      quote: 'Precision-milled hardwood paneling washed by concealed golden ceiling creases that elevate residential intimacy.',
    },
    {
      id: 'brass',
      name: 'Brushed Champagne Brass & Gunmetal',
      category: 'Artisanal Metallic Detailing',
      origin: 'Studio Custom Metalwork',
      properties: 'PVD brushed finish, hand-patinated edges, delicate hairline accents',
      image: '/portfolio_images/page_36.webp',
      projectFeature: 'The Aurelia Banquet & Ahuja Residence',
      quote: 'Subtle metallic reveals and custom hardware crafted as tactile jewelry for doors, partitions, and cabinetry.',
    },
  ];
  const [activeMaterial, setActiveMaterial] = useState(0);

  // 3. Ultra-Res Lightbox Modal State
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>('');

  const openLightbox = (imgUrl: string, captionText: string) => {
    setLightboxImage(imgUrl);
    setLightboxCaption(captionText);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxCaption('');
  };

  // Scroll reveal observer strictly initialized post-hydration to eliminate SSR mismatch
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll, .reveal-scale');
    if (elements.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => {
        el.classList.add('is-revealed');
        el.setAttribute('data-revealed', 'true');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('is-revealed');
            target.setAttribute('data-revealed', 'true');
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div id="homifiora-home-page" style={{ backgroundColor: '#090a08', minHeight: '100vh', color: '#e8e4dc' }}>
      
      {/* =========================================================================
          1. CINEMATIC HERO SECTION (Full-Bleed Architectural Video)
          ========================================================================= */}
      <div style={{ position: 'relative' }}>
        <HeroVideoPlayer />
      </div>

      {/* =========================================================================
          2. CORE STUDIO MANIFESTO (Editorial Symmetrical Triptych)
          ========================================================================= */}
      <section id="studio-manifesto-section" className="section-padding" style={{ position: 'relative', backgroundColor: '#090a08' }}>
        <div className="container">
          <div className="monograph-triptych-grid">
            
            {/* Left Flank: Tactile Material Flatlay */}
            <div className="monograph-flank-card shimmer-card reveal-on-scroll stagger-1" suppressHydrationWarning>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9/16',
                  maxHeight: '520px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(214, 189, 150, 0.2)',
                }}
                onClick={() =>
                  openLightbox(
                    '/portfolio_images/page_2_flatlay.webp',
                    'Tactile Material Curation · Hand-Milled Oak, Calacatta Marble & Botanical Specimens'
                  )
                }
              >
                <img
                  src="/portfolio_images/page_2_flatlay.webp"
                  alt="Homifiora Architectural Material Flatlay Moodboard"
                  className="plate-card-zoom"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                >
                  <span style={{ fontSize: '0.64rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    PEOPLE
                  </span>
                  <span style={{ fontSize: '0.64rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent-gold-light)', fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    SPACES
                  </span>
                  <span style={{ fontSize: '0.64rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    PURPOSE
                  </span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    right: '14px',
                    backgroundColor: 'rgba(9, 10, 8, 0.88)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.66rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    border: '1px solid rgba(214, 189, 150, 0.25)',
                  }}
                >
                  Plate 02 · Flatlay ⤢
                </div>
              </div>
            </div>

            {/* Center Monograph Core: Manifesto Statement */}
            <div className="monograph-center-manifesto reveal-on-scroll stagger-2" style={{ textAlign: 'center', padding: '0 1.25rem' }} suppressHydrationWarning>
              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                    letterSpacing: '0.22em',
                    color: 'var(--text-primary)',
                    display: 'block',
                    lineHeight: 1.1,
                    fontWeight: 400,
                  }}
                >
                  HOMIFIORA
                </span>
                <span
                  style={{
                    fontSize: '0.66rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    display: 'block',
                    marginTop: '0.35rem',
                    fontWeight: 500,
                  }}
                >
                  ARCHITECTURE &nbsp;|&nbsp; INTERIORS &nbsp;|&nbsp; SPACES
                </span>
              </div>

              {/* Monograph Tag */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: '28px', height: '1px', backgroundColor: 'rgba(214, 189, 150, 0.3)' }} />
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  STUDIO MANIFESTO
                </span>
                <span style={{ width: '28px', height: '1px', backgroundColor: 'rgba(214, 189, 150, 0.3)' }} />
              </div>

              {/* Main Headline */}
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  lineHeight: 1.15,
                  marginBottom: '1.6rem',
                  fontWeight: 400,
                  color: '#ffffff',
                }}
              >
                Thoughtfully Designed. <br />
                <span className="serif-italic gold-gradient-text">Beautifully Executed.</span>
              </h2>

              {/* Core Statement */}
              <p
                style={{
                  fontSize: '1.04rem',
                  lineHeight: '1.85',
                  color: '#ded7c8',
                  marginBottom: '2rem',
                  fontWeight: 300,
                  maxWidth: '560px',
                  margin: '0 auto 2rem',
                }}
              >
                HOMIFIORA is an architecture and interior design atelier driven by a collaborative ethos — sculpting living volumes shaped by microclimate, solar orientation, and human dignity.
              </p>

              {/* Decadal Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1.35rem',
                  padding: '1rem 2rem',
                  backgroundColor: 'rgba(10, 12, 9, 0.75)',
                  border: '1px solid rgba(214, 189, 150, 0.25)',
                  marginBottom: '2rem',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(3.2rem, 5.2vw, 4.4rem)',
                    color: 'var(--accent-gold-light)',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  10
                </span>
                <div style={{ textAlign: 'left', borderLeft: '1px solid rgba(214, 189, 150, 0.3)', paddingLeft: '1.35rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      letterSpacing: '0.26em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      display: 'block',
                      lineHeight: 1.1,
                      fontWeight: 500,
                    }}
                  >
                    YEARS
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      display: 'block',
                      marginTop: '0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    OF SPATIAL EXCELLENCE
                  </span>
                </div>
              </div>

              {/* The Triad Pillars */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  maxWidth: '560px',
                  margin: '0 auto 2.5rem',
                }}
              >
                <div style={{ padding: '0.85rem 0.5rem', border: '1px solid rgba(214, 189, 150, 0.15)', backgroundColor: 'rgba(255,255,255,0.015)' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontWeight: 600 }}>01 · PEOPLE</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Bespoke Living Rituals</span>
                </div>
                <div style={{ padding: '0.85rem 0.5rem', border: '1px solid rgba(214, 189, 150, 0.15)', backgroundColor: 'rgba(255,255,255,0.015)' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontWeight: 600 }}>02 · PLACES</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Climate &amp; Terracotta Jaali</span>
                </div>
                <div style={{ padding: '0.85rem 0.5rem', border: '1px solid rgba(214, 189, 150, 0.15)', backgroundColor: 'rgba(255,255,255,0.015)' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontWeight: 600 }}>03 · PURPOSE</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Turnkey Handcrafted Craft</span>
                </div>
              </div>

              <div>
                <Link
                  href="/about"
                  className="btn-bespoke btn-bespoke-gold"
                  style={{ padding: '0.9rem 2.4rem', fontSize: '0.76rem' }}
                >
                  Explore Studio Dossier &amp; Ethos →
                </Link>
              </div>
            </div>

            {/* Right Flank: Landscaped Courtyard Sanctuary */}
            <div className="monograph-flank-card shimmer-card reveal-on-scroll stagger-3" suppressHydrationWarning>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9/16',
                  maxHeight: '520px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(214, 189, 150, 0.2)',
                }}
                onClick={() =>
                  openLightbox(
                    '/portfolio_images/page_1_courtyard.webp',
                    'Biophilic Courtyard Sanctuary · Tropical Flora, Honed Slate Plinth & Natural Daylight Well'
                  )
                }
              >
                <img
                  src="/portfolio_images/page_1_courtyard.webp"
                  alt="Homifiora Architectural Courtyard Sanctuary"
                  className="plate-card-zoom"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(9, 10, 8, 0.88)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.66rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    border: '1px solid rgba(214, 189, 150, 0.25)',
                  }}
                >
                  Plate 01 · Courtyard ⤢
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PHYSICAL FLAGSHIP ATELIER SHOWCASE (The Real-World Studio)
          ========================================================================= */}
      <section
        id="flagship-atelier-section"
        className="section-padding"
        style={{
          position: 'relative',
          backgroundColor: '#0a0c09',
          borderTop: '1px solid rgba(214, 189, 150, 0.14)',
          borderBottom: '1px solid rgba(214, 189, 150, 0.14)',
          overflow: 'hidden',
        }}
      >
        {/* Soft 2700K Overhead Cove Ambient Light */}
        <div
          className="ambient-breathe"
          style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: '240px',
            background: 'radial-gradient(ellipse at top, rgba(223, 183, 108, 0.16) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div
            className="reveal-on-scroll"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div>
              <span className="eyebrow-label">Physical Spatial Authorship · Flagship Atelier</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                  lineHeight: 1.12,
                  color: '#ffffff',
                }}
              >
                Where Spatial Intuition <br />
                <span className="serif-italic gold-shimmer-text">Takes Physical Form.</span>
              </h2>
            </div>

            <div style={{ maxWidth: '460px' }}>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: '#ded7c8',
                  fontWeight: 300,
                  marginBottom: '0.85rem',
                }}
              >
                Step inside the physical studio of HOMIFIORA. Sculpted in deep graphite slate, warm 2700K linear cove illumination, natural teak louvers, and a luminous travertine welcome salon.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  ● PHYSICAL HEADQUARTERS
                </span>
                <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>|</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Architecture · Interiors · Execution
                </span>
              </div>
            </div>
          </div>

          {/* Perspective Selector Tabs */}
          <div
            className="reveal-on-scroll stagger-1"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {atelierViews.map((view, idx) => {
              const isActive = activeAtelierView === idx;
              return (
                <button
                  key={view.id}
                  onClick={() => setActiveAtelierView(idx)}
                  className={`atelier-view-tab ${isActive ? 'active' : ''}`}
                  style={{
                    outline: 'none',
                    padding: '1.15rem 1.4rem',
                    backgroundColor: isActive ? 'rgba(214, 189, 150, 0.12)' : 'rgba(10, 12, 9, 0.65)',
                    border: isActive ? '1px solid var(--accent-gold)' : '1px solid rgba(214, 189, 150, 0.2)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)', fontWeight: 600 }}>
                      VIEW 0{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.68rem', color: isActive ? 'var(--accent-gold-light)' : 'var(--text-muted)' }}>
                      {isActive ? '● ACTIVE' : '○'}
                    </span>
                  </div>
                  <strong style={{ fontSize: '0.92rem', color: isActive ? '#ffffff' : 'var(--text-secondary)', fontWeight: 500, display: 'block' }}>
                    {view.title}
                  </strong>
                </button>
              );
            })}
          </div>

          {/* Master Exhibition Display */}
          <div className="responsive-split-grid" style={{ alignItems: 'center' }}>
            {/* Visual Canvas with Corner Ticks */}
            <div
              className="corner-ticks cove-glow-warm reveal-scale stagger-2 shimmer-card"
              style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                backgroundColor: '#070806',
                border: '1px solid rgba(214, 189, 150, 0.25)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: activeAtelierView === 2 ? '16/7' : '16/10',
                  maxHeight: '580px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  openLightbox(
                    atelierViews[activeAtelierView].image,
                    `${atelierViews[activeAtelierView].title} · ${atelierViews[activeAtelierView].subtitle}`
                  )
                }
              >
                <img
                  src={atelierViews[activeAtelierView].image}
                  alt={atelierViews[activeAtelierView].title}
                  className="plate-card-zoom"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(9, 10, 8, 0.9)',
                    border: '1px solid rgba(214, 189, 150, 0.3)',
                    padding: '0.4rem 0.95rem',
                    fontSize: '0.7rem',
                    letterSpacing: '0.16em',
                    color: 'var(--accent-gold-light)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {atelierViews[activeAtelierView].subtitle}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(9, 10, 8, 0.9)',
                    padding: '0.35rem 0.85rem',
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    border: '1px solid rgba(214, 189, 150, 0.25)',
                  }}
                >
                  Inspect Plate ⤢
                </div>
              </div>
            </div>

            {/* Narrative & Atelier Specifications */}
            <div className="reveal-on-scroll stagger-3" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="architectural-frame corner-ticks" style={{ padding: '2.5rem', backgroundColor: 'rgba(10, 12, 9, 0.75)', backdropFilter: 'blur(20px)' }}>
                <span className="eyebrow-label" style={{ marginBottom: '0.65rem' }}>
                  Atelier Dossier · View 0{activeAtelierView + 1}
                </span>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {atelierViews[activeAtelierView].title}
                </h3>

                <p style={{ fontSize: '0.98rem', lineHeight: '1.8', color: '#ded7c8', marginBottom: '2rem', fontWeight: 300 }}>
                  {atelierViews[activeAtelierView].caption}
                </p>

                <div style={{ borderTop: '1px solid rgba(214, 189, 150, 0.16)', paddingTop: '1.25rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.85rem', fontWeight: 600 }}>
                    Architectural Specifications
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {atelierViews[activeAtelierView].specs.map((spec, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: 'rgba(214, 189, 150, 0.08)',
                          border: '1px solid rgba(214, 189, 150, 0.2)',
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.74rem',
                          color: 'var(--text-secondary)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        ◈ {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-bespoke btn-bespoke-gold" style={{ padding: '0.75rem 1.75rem', fontSize: '0.75rem' }}>
                    Schedule Private Atelier Visit →
                  </Link>
                  <button
                    onClick={() =>
                      openLightbox(
                        atelierViews[activeAtelierView].image,
                        `${atelierViews[activeAtelierView].title} · ${atelierViews[activeAtelierView].subtitle}`
                      )
                    }
                    className="btn-bespoke btn-bespoke-outline"
                    style={{ padding: '0.75rem 1.4rem', fontSize: '0.75rem' }}
                  >
                    Expand 4K Plate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SIGNATURE ARCHITECTURAL MASTERPIECES (Curated Landmark Triad)
          ========================================================================= */}
      <section
        id="signature-masterpieces-section"
        className="section-padding"
        style={{
          backgroundColor: '#090a08',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            className="reveal-on-scroll"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3.5rem',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div>
              <span className="eyebrow-label">Exhibition Highlights · Landmark Typologies</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', lineHeight: 1.12, color: '#ffffff' }}>
                Three Iconic Works. <br />
                <span className="serif-italic gold-gradient-text">One Disciplined Vision.</span>
              </h2>
            </div>
            <p style={{ maxWidth: '440px', color: '#ded7c8', fontSize: '0.98rem', lineHeight: '1.75', fontWeight: 300 }}>
              Each commission responds to its microclimate, material provenance, and owner living rituals — sculpted without templated compromise.
            </p>
          </div>

          {/* 3-Card Landmark Typology Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2.5rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Masterpiece 01: Vayana Residence */}
            <div className="reveal-on-scroll stagger-1 shimmer-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <TiltCard style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(10, 12, 9, 0.7)', border: '1px solid rgba(214, 189, 150, 0.2)' }}>
                <div
                  style={{ position: 'relative', width: '100%', aspectRatio: '16/11', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => openLightbox('/portfolio_images/page_4.webp', 'Vayana Residence & Landscape · Dalsinghsarai, Bihar')}
                >
                  <img
                    src="/portfolio_images/page_4.webp"
                    alt="Vayana Residence Modern Tropical Architecture"
                    className="plate-card-zoom"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(9, 10, 8, 0.9)',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      border: '1px solid rgba(214, 189, 150, 0.25)',
                    }}
                  >
                    Typology 01 · Tropical Villa
                  </div>
                </div>

                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {vayana.location} · Monograph #{vayana.projectNo}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.85rem', color: '#ffffff' }}>
                    {vayana.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '1.75rem', flexGrow: 1, fontWeight: 300 }}>
                    Sculptural cantilevered balconies, custom terracotta jaali climate screens, and reflective stepping-stone water lawns establishing complete indoor-outdoor harmony.
                  </p>

                  <div style={{ borderTop: '1px solid rgba(214, 189, 150, 0.14)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span className="tactile-chip" style={{ fontSize: '0.68rem', cursor: 'default' }}>Terracotta Jaali</span>
                      <span className="tactile-chip" style={{ fontSize: '0.68rem', cursor: 'default' }}>2.4m Cantilever</span>
                    </div>
                    <Link href="/projects/vayana-residence" style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Inspect Study →
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Masterpiece 02: The Aurelia */}
            <div className="reveal-on-scroll stagger-2 shimmer-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <TiltCard style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(10, 12, 9, 0.7)', border: '1px solid rgba(214, 189, 150, 0.2)' }}>
                <div
                  style={{ position: 'relative', width: '100%', aspectRatio: '16/11', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => openLightbox('/portfolio_images/page_7.webp', 'The Aurelia Banquet & Events · Dalsinghsarai, Bihar')}
                >
                  <img
                    src="/portfolio_images/page_7.webp"
                    alt="The Aurelia Banquet Neoclassical Colonnade"
                    className="plate-card-zoom"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(9, 10, 8, 0.9)',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      border: '1px solid rgba(214, 189, 150, 0.25)',
                    }}
                  >
                    Typology 02 · Hospitality Landmark
                  </div>
                </div>

                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {aurelia.location} · Monograph #{aurelia.projectNo}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.85rem', color: '#ffffff' }}>
                    {aurelia.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '1.75rem', flexGrow: 1, fontWeight: 300 }}>
                    A neoclassical celebration destination featuring symmetrical fluted colonnades, grand pediments, and terracotta jaali apertures for ambient light filtration.
                  </p>

                  <div style={{ borderTop: '1px solid rgba(214, 189, 150, 0.14)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span className="tactile-chip" style={{ fontSize: '0.68rem', cursor: 'default' }}>Neoclassical</span>
                      <span className="tactile-chip" style={{ fontSize: '0.68rem', cursor: 'default' }}>Fluted Columns</span>
                    </div>
                    <Link href="/projects/the-aurelia" style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Inspect Study →
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Masterpiece 03: Aarohan Residence */}
            <div className="reveal-on-scroll stagger-3 shimmer-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <TiltCard style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(10, 12, 9, 0.7)', border: '1px solid rgba(214, 189, 150, 0.2)' }}>
                <div
                  style={{ position: 'relative', width: '100%', aspectRatio: '16/11', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => openLightbox('/portfolio_images/page_20.webp', 'Aarohan Residence & Studio · Multi-Level Architectural Residence')}
                >
                  <img
                    src="/portfolio_images/page_20.webp"
                    alt="Aarohan Residence Cantilevered Facade"
                    className="plate-card-zoom"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(9, 10, 8, 0.9)',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      border: '1px solid rgba(214, 189, 150, 0.25)',
                    }}
                  >
                    Typology 03 · Multi-Level Living
                  </div>
                </div>

                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {aarohan.location} · Monograph #{aarohan.projectNo}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.85rem', color: '#ffffff' }}>
                    {aarohan.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '1.75rem', flexGrow: 1, fontWeight: 300 }}>
                    Vertical four-storey residence orchestrating private family suites, commercial design studios, and double-height landscaped verandahs behind climate louvers.
                  </p>

                  <div style={{ borderTop: '1px solid rgba(214, 189, 150, 0.14)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span className="tactile-chip" style={{ fontSize: '0.68rem', cursor: 'default' }}>4 Storeys</span>
                      <span className="tactile-chip" style={{ fontSize: '0.68rem', cursor: 'default' }}>Cantilever</span>
                    </div>
                    <Link href={`/projects/${aarohan.slug}`} style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Inspect Study →
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Central Monograph Navigation CTA */}
          <div className="reveal-on-scroll stagger-2" style={{ textAlign: 'center' }}>
            <Link
              href="/projects"
              className="btn-bespoke btn-bespoke-outline"
              style={{
                padding: '1.15rem 2.8rem',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                borderColor: 'rgba(214, 189, 150, 0.35)',
              }}
            >
              Explore All 13 Works in Monograph Archive →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TACTILE MATERIALITY ATELIER (Craftsmanship Palette)
          ========================================================================= */}
      <section
        id="material-palette-section"
        className="section-padding"
        style={{
          backgroundColor: '#0c0e0b',
          borderTop: '1px solid rgba(214, 189, 150, 0.14)',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            className="reveal-on-scroll"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div>
              <span className="eyebrow-label">Artisanal Material Sourcing</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', lineHeight: 1.12, color: '#ffffff' }}>
                Tactile Materiality. <br />
                <span className="serif-italic gold-gradient-text">Authentic Provenance.</span>
              </h2>
            </div>
            <p style={{ maxWidth: '440px', color: '#ded7c8', fontSize: '0.98rem', lineHeight: '1.75', fontWeight: 300 }}>
              We reject synthetic veneer replications. Every surface is curated from regional quarries, terracotta kilns, and sustainable timber groves.
            </p>
          </div>

          {/* 4-Material Symmetrical Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {materials.map((mat, idx) => {
              const isSelected = activeMaterial === idx;
              return (
                <div
                  key={mat.id}
                  onClick={() => setActiveMaterial(idx)}
                  className={`architectural-frame corner-ticks shimmer-card reveal-on-scroll stagger-${idx + 1}`}
                  style={{
                    padding: '1.75rem',
                    backgroundColor: isSelected ? 'rgba(214, 189, 150, 0.08)' : 'rgba(10, 12, 9, 0.6)',
                    borderColor: isSelected ? 'var(--accent-gold)' : 'rgba(214, 189, 150, 0.18)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      border: '1px solid rgba(214, 189, 150, 0.2)',
                    }}
                  >
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="plate-card-zoom"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(9, 10, 8, 0.85)',
                        padding: '0.2rem 0.55rem',
                        fontSize: '0.62rem',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-gold)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {mat.category}
                    </div>
                  </div>

                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                    {mat.origin}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.65rem', lineHeight: 1.25 }}>
                    {mat.name}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem', flexGrow: 1, fontWeight: 300 }}>
                    {mat.quote}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(214, 189, 150, 0.12)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      In: {mat.projectFeature}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold-light)', letterSpacing: '0.1em' }}>
                      {isSelected ? '● SELECTED' : 'Explore'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PRIVATE COMMISSION DIALOGUE & CONCIERGE RIBBON
          ========================================================================= */}
      <section
        id="private-commission-cta"
        className="section-padding"
        style={{
          backgroundColor: '#070806',
          borderTop: '1px solid rgba(214, 189, 150, 0.18)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '960px' }}>
          <div className="reveal-on-scroll">
            <span className="eyebrow-label" style={{ marginBottom: '1.25rem' }}>Initiate Spatial Dialogue</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                marginBottom: '1.5rem',
                lineHeight: 1.12,
                color: '#ffffff',
              }}
            >
              Commission Our Atelier <br />
              <span className="serif-italic gold-gradient-text">For Your Next Landmark.</span>
            </h2>
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: '1.85',
                color: '#ded7c8',
                fontWeight: 300,
                maxWidth: '680px',
                margin: '0 auto 3.5rem',
              }}
            >
              Whether sculpting a generational private residence, a grand neoclassical banquet, or a bespoke interior sanctuary, our principal partners oversee every detail from concept to key delivery.
            </p>
          </div>

          {/* Symmetrical 3-Channel Direct Concierge Ribbon */}
          <div className="hero-concierge-ribbon corner-ticks" id="home-concierge-ribbon" style={{ marginBottom: '3rem' }}>
            {/* Channel 1: WhatsApp Concierge */}
            <a
              id="home-whatsapp-direct-btn"
              href="https://wa.me/919999656898?text=Hello%20HOMIFIORA%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20project."
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
              id="home-call-direct-btn"
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
              id="home-email-direct-btn"
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

          <div className="reveal-on-scroll stagger-2" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn-bespoke btn-bespoke-gold"
              style={{ padding: '1.15rem 3rem', fontSize: '0.82rem' }}
            >
              Schedule Studio Consultation →
            </Link>
            <Link
              href="/projects"
              className="btn-bespoke btn-bespoke-outline"
              style={{ padding: '1.15rem 2.6rem', fontSize: '0.82rem' }}
            >
              Browse 13 Architectural Monographs
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. UNIVERSAL FULLSCREEN LIGHTBOX MODAL (4K Zoom Inspection)
          ========================================================================= */}
      {lightboxImage && (
        <div
          id="home-plate-lightbox-modal"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 6, 4, 0.97)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '28px',
              background: 'none',
              border: '1px solid rgba(214, 189, 150, 0.35)',
              color: 'var(--accent-gold-light)',
              fontSize: '1.4rem',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 100000,
            }}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <div
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '82vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt={lightboxCaption || 'Architectural Plate Zoom'}
              style={{
                maxWidth: '100%',
                maxHeight: '74vh',
                objectFit: 'contain',
                borderRadius: '1px',
                border: '1px solid rgba(214, 189, 150, 0.28)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.85)',
              }}
            />
            {lightboxCaption && (
              <p
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.88rem',
                  color: 'var(--accent-gold-light)',
                  textAlign: 'center',
                  maxWidth: '750px',
                  letterSpacing: '0.04em',
                  fontWeight: 300,
                }}
              >
                {lightboxCaption}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
