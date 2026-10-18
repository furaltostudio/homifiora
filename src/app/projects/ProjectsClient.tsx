'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import TiltCard from '@/components/TiltCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { portfolioProjects, Project } from '@/data/portfolioData';

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'spreads' | 'grid' | 'index'>('spreads');
  const [sortBy, setSortBy] = useState<'default' | 'year' | 'title' | 'plates'>('default');
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);
  const [quickViewPlateIndex, setQuickViewPlateIndex] = useState<number>(0);
  const [spotlightPlateIndex, setSpotlightPlateIndex] = useState<number>(0);

  const categories = useMemo(
    () => [
      { label: 'All Works', value: 'All' },
      { label: 'Architecture', value: 'Architecture' },
      { label: 'Hospitality', value: 'Hospitality' },
      { label: 'Mixed-Use', value: 'Mixed-Use' },
      { label: 'Interiors', value: 'Interiors' },
    ],
    []
  );

  const getCategoryCount = (val: string) => {
    if (val === 'All') return portfolioProjects.length;
    return portfolioProjects.filter((p) => p.category === val).length;
  };

  // Filter & Sort Logic
  const filteredProjects = useMemo(() => {
    return portfolioProjects
      .filter((project) => {
        const matchesCategory =
          selectedCategory === 'All' || project.category === selectedCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          project.title.toLowerCase().includes(q) ||
          project.client.toLowerCase().includes(q) ||
          project.location.toLowerCase().includes(q) ||
          project.projectNo.toLowerCase().includes(q) ||
          project.tagline.toLowerCase().includes(q) ||
          project.summary.toLowerCase().includes(q) ||
          project.designPhilosophy.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'year') {
          return parseInt(b.year) - parseInt(a.year);
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'plates') {
          return b.gallery.length - a.gallery.length;
        }
        return 0; // Default monograph order
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const featuredSpotlight = portfolioProjects[0]; // Vayana Residence

  // Quick Preview Lightbox Handlers
  const openQuickPreview = (project: Project, e?: React.MouseEvent, plateIdx: number = 0) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setQuickViewProject(project);
    setQuickViewPlateIndex(plateIdx);
  };

  const closeQuickPreview = useCallback(() => {
    setQuickViewProject(null);
  }, []);

  const nextQuickPlate = useCallback(() => {
    if (!quickViewProject) return;
    setQuickViewPlateIndex((prev) => (prev + 1) % quickViewProject.gallery.length);
  }, [quickViewProject]);

  const prevQuickPlate = useCallback(() => {
    if (!quickViewProject) return;
    setQuickViewPlateIndex(
      (prev) => (prev - 1 + quickViewProject.gallery.length) % quickViewProject.gallery.length
    );
  }, [quickViewProject]);

  // Keyboard navigation for Cinema Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!quickViewProject) return;
      if (e.key === 'Escape') closeQuickPreview();
      if (e.key === 'ArrowRight') nextQuickPlate();
      if (e.key === 'ArrowLeft') prevQuickPlate();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quickViewProject, closeQuickPreview, nextQuickPlate, prevQuickPlate]);

  return (
    <div id="homifiora-projects-page" style={{ backgroundColor: '#090a08', minHeight: '100vh', color: '#e8e4dc' }}>
      
      {/* 1. Dramatic Editorial Monograph Archive Hero */}
      <section
        id="projects-hero-header"
        style={{
          position: 'relative',
          padding: '8.5rem 0 5.5rem',
          borderBottom: '1px solid var(--border-hairline)',
          backgroundColor: '#0a0c09',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Top Light */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '380px',
            background: 'radial-gradient(ellipse at top, rgba(223, 183, 108, 0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Architectural Watermark */}
        <div
          style={{
            position: 'absolute',
            top: '4%',
            right: '-2%',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(7rem, 16vw, 20rem)',
            color: 'rgba(214, 189, 150, 0.025)',
            userSelect: 'none',
            pointerEvents: 'none',
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          ARCHIVE
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Coordinates & Heritage Eyebrow Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                border: '1px solid rgba(214, 189, 150, 0.28)',
                padding: '0.45rem 1.35rem',
                marginBottom: '2rem',
                backgroundColor: 'rgba(10, 11, 9, 0.65)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                28°36&apos;N 77°12&apos;E · MONOGRAPH REPOSITORY
              </span>
              <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>|</span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                13 BUILT &amp; ONGOING COMMISSIONS
              </span>
              <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>|</span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold-light)' }}>
                2024 — 2026 ARCHIVE
              </span>
            </div>

            <h1
              id="projects-main-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.9rem, 6.4vw, 5rem)',
                lineHeight: 1.08,
                marginBottom: '1.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Selected Works &amp; <br />
              <span className="serif-italic gold-gradient-text">Architectural Monographs.</span>
            </h1>

            <p
              id="projects-lead-text"
              style={{
                fontSize: 'clamp(1.05rem, 1.7vw, 1.22rem)',
                lineHeight: '1.85',
                color: '#ded7c8',
                fontWeight: 300,
                maxWidth: '820px',
                margin: '0 auto',
              }}
            >
              Thirteen landmark built and ongoing architectural commissions spanning private tropical residences, neoclassical hospitality destinations, four-storey entrepreneurial studios, and poetic interior sanctuaries across 7 Indian states.
            </p>

            {/* Architectural Studio Metrics Bar */}
            <div className="projects-metrics-ribbon corner-ticks" id="projects-metrics-bar">
              <div style={{ textAlign: 'left', borderRight: '1px solid rgba(214, 189, 150, 0.12)', paddingRight: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: '#ffffff', lineHeight: 1.1, display: 'block' }}>
                  13
                </span>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                  Master Monographs
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Residential &amp; Commercial
                </span>
              </div>

              <div style={{ textAlign: 'left', borderRight: '1px solid rgba(214, 189, 150, 0.12)', paddingRight: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: '#ffffff', lineHeight: 1.1, display: 'block' }}>
                  07
                </span>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                  Regional Provenances
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Delhi NCR, Gauhati, Bihar, Jammu+
                </span>
              </div>

              <div style={{ textAlign: 'left', borderRight: '1px solid rgba(214, 189, 150, 0.12)', paddingRight: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: '#ffffff', lineHeight: 1.1, display: 'block' }}>
                  36k+
                </span>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                  SQ. FT. Executed
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Sculpted built living space
                </span>
              </div>

              <div style={{ textAlign: 'left' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: '#ffffff', lineHeight: 1.1, display: 'block' }}>
                  100%
                </span>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                  Bespoke Craftsmanship
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Zero catalog replication
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Exhibition Spotlight Hero (Only shown when filter is 'All' and no search) */}
      {selectedCategory === 'All' && !searchQuery && (
        <section
          id="projects-monograph-spotlight"
          style={{
            padding: '5rem 0',
            borderBottom: '1px solid var(--border-hairline)',
            backgroundColor: '#0c0e0b',
            position: 'relative',
          }}
        >
          <div className="container">
            {/* Header label */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
              <span className="eyebrow-label" style={{ marginBottom: 0 }}>
                Curatorial Spotlight · Monograph 01
              </span>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                Featured Private Commission
              </span>
            </div>

            <div
              className="architectural-frame corner-ticks projects-spotlight-grid"
              style={{
                padding: 'clamp(1.75rem, 4vw, 4rem)',
                backgroundColor: 'rgba(10, 12, 9, 0.75)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div>
                {/* Main Spotlight Preview with Dynamic Plate Switch */}
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '16/10',
                    border: '1px solid rgba(214, 189, 150, 0.28)',
                    marginBottom: '1.25rem',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => openQuickPreview(featuredSpotlight, e, spotlightPlateIndex)}
                >
                  <img
                    src={featuredSpotlight.gallery[spotlightPlateIndex] || featuredSpotlight.coverImage}
                    alt={featuredSpotlight.title}
                    className="plate-card-zoom"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(9, 10, 8, 0.88)',
                      border: '1px solid rgba(214, 189, 150, 0.3)',
                      padding: '0.4rem 0.95rem',
                      fontSize: '0.7rem',
                      letterSpacing: '0.16em',
                      color: 'var(--accent-gold-light)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Spotlight Plate 0{spotlightPlateIndex + 1} of 0{featuredSpotlight.gallery.length}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(9, 10, 8, 0.88)',
                      border: '1px solid var(--border-hairline)',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.7rem',
                      color: 'var(--accent-gold)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Click to Expand Plate ⤢
                  </div>
                </div>

                {/* Interactive Mini-Plates Strip */}
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${featuredSpotlight.gallery.length}, 1fr)`, gap: '0.75rem' }}>
                  {featuredSpotlight.gallery.map((img, i) => (
                    <div
                      key={img}
                      onClick={() => setSpotlightPlateIndex(i)}
                      style={{
                        position: 'relative',
                        aspectRatio: '16/10',
                        overflow: 'hidden',
                        border: spotlightPlateIndex === i ? '1.5px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                        cursor: 'pointer',
                        opacity: spotlightPlateIndex === i ? 1 : 0.6,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '3px',
                          right: '3px',
                          background: 'rgba(9,10,8,0.85)',
                          fontSize: '0.58rem',
                          color: 'var(--accent-gold)',
                          padding: '0.1rem 0.35rem',
                          letterSpacing: '0.08em',
                        }}
                      >
                        0{i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      fontWeight: 600,
                    }}
                  >
                    {featuredSpotlight.category}
                  </span>
                  <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>•</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold-light)', letterSpacing: '0.12em' }}>
                    MONOGRAPH REF #{featuredSpotlight.projectNo}
                  </span>
                  <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>•</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    COMPLETED {featuredSpotlight.year}
                  </span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', marginBottom: '0.85rem', lineHeight: 1.15, color: '#ffffff' }}>
                  {featuredSpotlight.title}
                </h2>

                <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
                  {featuredSpotlight.client} — {featuredSpotlight.location}
                </span>

                <p style={{ fontSize: '1.02rem', lineHeight: '1.85', color: '#ded7c8', marginBottom: '1.5rem', fontWeight: 300 }}>
                  {featuredSpotlight.summary}
                </p>

                {/* Key Highlights with Gold Diamonds */}
                <div style={{ marginBottom: '2rem', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem' }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.75rem' }}>
                    Architectural Milestones
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {featuredSpotlight.keyHighlights.slice(0, 3).map((hl, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', marginTop: '2px' }}>◈</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <Link href={`/projects/${featuredSpotlight.slug}`} className="btn-bespoke btn-bespoke-gold">
                    Inspect Masterplate Study →
                  </Link>
                  <button
                    onClick={(e) => openQuickPreview(featuredSpotlight, e, spotlightPlateIndex)}
                    className="btn-bespoke btn-bespoke-outline"
                  >
                    Launch Plate Viewer ({featuredSpotlight.gallery.length} Plates)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Curatorial Command Console & Gallery Section */}
      <section id="projects-main-gallery" className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          
          {/* Architectural Filter & Search Command Console */}
          <div className="projects-curatorial-console corner-ticks" id="projects-command-console">
            
            {/* Row 1: Category Filter Underlines / Tabs */}
            <div
              id="projects-category-filter"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
                borderBottom: '1px solid rgba(214, 189, 150, 0.16)',
                paddingBottom: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  Typology:
                </span>
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.value;
                  const count = getCategoryCount(cat.value);
                  return (
                    <button
                      key={cat.value}
                      id={`filter-btn-${cat.value.toLowerCase()}`}
                      onClick={() => setSelectedCategory(cat.value)}
                      style={{
                        background: isActive ? 'rgba(214, 189, 150, 0.12)' : 'transparent',
                        border: isActive ? '1px solid rgba(214, 189, 150, 0.35)' : '1px solid transparent',
                        padding: '0.45rem 1rem',
                        color: isActive ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        borderRadius: '1px',
                      }}
                    >
                      <span>{cat.label}</span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)',
                          fontWeight: 400,
                        }}
                      >
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Count Indicator */}
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                Displaying <strong style={{ color: 'var(--accent-gold)' }}>{filteredProjects.length}</strong> of {portfolioProjects.length} Monographs
              </div>
            </div>

            {/* Row 2: Search Input, Sorting & View Mode Switcher */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',
              }}
            >
              {/* Hairline Search Input */}
              <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: '480px' }}>
                <input
                  id="projects-search-input"
                  type="text"
                  placeholder="Search by client, city, or monograph code (e.g. 202301)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.5rem 0.85rem 2.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(214, 189, 150, 0.22)',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    outline: 'none',
                    fontFamily: 'var(--font-sans)',
                    transition: 'border-color 0.25s ease',
                    borderRadius: '1px',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(214, 189, 150, 0.22)';
                  }}
                />
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c5a065"
                  strokeWidth="1.8"
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '0.85rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      padding: '4px',
                    }}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Right Controls: Sort & View Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                
                {/* Sort dropdown */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Sequence:
                  </span>
                  <select
                    id="projects-sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    style={{
                      background: 'rgba(10, 12, 9, 0.9)',
                      border: '1px solid rgba(214, 189, 150, 0.22)',
                      color: 'var(--accent-gold-light)',
                      padding: '0.55rem 0.95rem',
                      fontSize: '0.74rem',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      borderRadius: '1px',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="default">Monograph Index</option>
                    <option value="year">Chronological (Year)</option>
                    <option value="title">Alphabetical (A-Z)</option>
                    <option value="plates">Plate Density</option>
                  </select>
                </div>

                {/* 3 View Mode Switcher */}
                <div
                  id="projects-view-mode-switcher"
                  style={{
                    display: 'inline-flex',
                    border: '1px solid rgba(214, 189, 150, 0.25)',
                    padding: '2px',
                    backgroundColor: 'rgba(5, 6, 5, 0.6)',
                  }}
                >
                  <button
                    id="view-mode-spreads-btn"
                    onClick={() => setViewMode('spreads')}
                    title="Exhibition Spreads View"
                    style={{
                      background: viewMode === 'spreads' ? 'var(--accent-gold)' : 'transparent',
                      color: viewMode === 'spreads' ? '#090a08' : 'var(--text-secondary)',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span>Spreads</span>
                  </button>

                  <button
                    id="view-mode-grid-btn"
                    onClick={() => setViewMode('grid')}
                    title="Architectural Grid View"
                    style={{
                      background: viewMode === 'grid' ? 'var(--accent-gold)' : 'transparent',
                      color: viewMode === 'grid' ? '#090a08' : 'var(--text-secondary)',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span>Gallery</span>
                  </button>

                  <button
                    id="view-mode-index-btn"
                    onClick={() => setViewMode('index')}
                    title="Catalog Ledger Index"
                    style={{
                      background: viewMode === 'index' ? 'var(--accent-gold)' : 'transparent',
                      color: viewMode === 'index' ? '#090a08' : 'var(--text-secondary)',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span>Catalog</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4. The Main Monograph Exhibition Presentation */}
          {filteredProjects.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '6rem 2rem',
                backgroundColor: 'rgba(10, 12, 9, 0.6)',
                border: '1px solid rgba(214, 189, 150, 0.2)',
                borderRadius: '2px',
              }}
            >
              <div style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '1rem' }}>◈</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                No Architectural Monographs Located
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', fontWeight: 300, maxWidth: '520px', margin: '0 auto 2rem' }}>
                No private commissions matched your query &ldquo;{searchQuery}&rdquo; within the {selectedCategory} category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="btn-bespoke btn-bespoke-gold"
              >
                Reset Curatorial Archive Filters
              </button>
            </div>
          ) : viewMode === 'spreads' ? (
            /* VIEW 1: Architectural Exhibition Spreads (Editorial Magazine Alternating Layout) */
            <div id="projects-spreads-container">
              {filteredProjects.map((project, idx) => {
                const isReverse = idx % 2 === 1;
                return (
                  <article
                    key={project.id}
                    id={`project-spread-${project.slug}`}
                    className={`project-spread-item corner-ticks ${isReverse ? 'reverse-layout' : ''}`}
                  >
                    {/* Media Column */}
                    <div className="spread-media-col">
                      <div
                        style={{
                          position: 'relative',
                          aspectRatio: '16/10',
                          overflow: 'hidden',
                          border: '1px solid rgba(214, 189, 150, 0.28)',
                          backgroundColor: '#050605',
                          marginBottom: '0.85rem',
                        }}
                      >
                        <Link href={`/projects/${project.slug}`}>
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className="plate-card-zoom"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Link>

                        {/* Category Label */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '14px',
                            left: '14px',
                            backgroundColor: 'rgba(9, 10, 8, 0.9)',
                            border: '1px solid rgba(214, 189, 150, 0.3)',
                            padding: '0.35rem 0.85rem',
                            fontSize: '0.68rem',
                            letterSpacing: '0.16em',
                            color: 'var(--accent-gold-light)',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                          }}
                        >
                          {project.category}
                        </div>

                        {/* Monograph Code */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '14px',
                            right: '14px',
                            backgroundColor: 'rgba(9, 10, 8, 0.9)',
                            border: '1px solid var(--border-hairline)',
                            padding: '0.35rem 0.85rem',
                            fontSize: '0.68rem',
                            color: 'var(--accent-gold)',
                            letterSpacing: '0.12em',
                            fontWeight: 600,
                          }}
                        >
                          REF #{project.projectNo}
                        </div>

                        {/* Quick Plate Viewer Trigger */}
                        <button
                          onClick={(e) => openQuickPreview(project, e, 0)}
                          style={{
                            position: 'absolute',
                            bottom: '14px',
                            right: '14px',
                            backgroundColor: 'rgba(9, 10, 8, 0.92)',
                            border: '1px solid var(--border-hairline)',
                            color: 'var(--accent-gold-light)',
                            padding: '0.4rem 0.95rem',
                            fontSize: '0.7rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {project.gallery.length} Plates · Inspect
                        </button>
                      </div>

                      {/* Interactive Mini-Plates Filmstrip */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: `repeat(${Math.min(project.gallery.length, 5)}, 1fr)`,
                          gap: '0.65rem',
                        }}
                      >
                        {project.gallery.slice(0, 5).map((img, plateIdx) => (
                          <div
                            key={img}
                            onClick={(e) => openQuickPreview(project, e, plateIdx)}
                            title={`Inspect Plate 0${plateIdx + 1}`}
                            style={{
                              position: 'relative',
                              aspectRatio: '16/10',
                              overflow: 'hidden',
                              border: '1px solid rgba(214, 189, 150, 0.18)',
                              cursor: 'pointer',
                              transition: 'opacity 0.2s ease, border-color 0.2s ease',
                            }}
                          >
                            <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '2px',
                                right: '2px',
                                background: 'rgba(9,10,8,0.85)',
                                fontSize: '0.55rem',
                                color: 'var(--accent-gold)',
                                padding: '0.05rem 0.3rem',
                              }}
                            >
                              0{plateIdx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="spread-content-col" style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.65rem' }}>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--accent-gold)',
                            fontWeight: 600,
                          }}
                        >
                          {project.client} — {project.location}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Monograph {project.year}
                        </span>
                      </div>

                      <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                        <h2
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
                            color: '#ffffff',
                            lineHeight: 1.18,
                            marginBottom: '0.85rem',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {project.title}
                        </h2>
                      </Link>

                      {project.tagline && (
                        <div
                          style={{
                            fontSize: '0.88rem',
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            color: 'var(--accent-gold-light)',
                            marginBottom: '1rem',
                          }}
                        >
                          &ldquo;{project.tagline}&rdquo;
                        </div>
                      )}

                      <p
                        style={{
                          fontSize: '0.96rem',
                          lineHeight: '1.8',
                          color: '#ded7c8',
                          marginBottom: '1.75rem',
                          fontWeight: 300,
                        }}
                      >
                        {project.summary}
                      </p>

                      {/* Specifications Chips */}
                      {project.specifications && project.specifications.length > 0 && (
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.65rem',
                            marginBottom: '2rem',
                            borderTop: '1px solid var(--border-hairline)',
                            paddingTop: '1.25rem',
                          }}
                        >
                          {project.specifications.slice(0, 3).map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              style={{
                                backgroundColor: 'rgba(214, 189, 150, 0.06)',
                                border: '1px solid rgba(214, 189, 150, 0.18)',
                                padding: '0.35rem 0.75rem',
                                fontSize: '0.72rem',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              <strong style={{ color: 'var(--accent-gold)' }}>{spec.label}:</strong> {spec.value}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Links */}
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                        <Link href={`/projects/${project.slug}`} className="btn-bespoke btn-bespoke-gold" style={{ padding: '0.75rem 1.6rem', fontSize: '0.75rem' }}>
                          Inspect Masterplate Study →
                        </Link>
                        <button
                          onClick={(e) => openQuickPreview(project, e, 0)}
                          className="btn-bespoke btn-bespoke-outline"
                          style={{ padding: '0.75rem 1.4rem', fontSize: '0.75rem' }}
                        >
                          Quick Plate Viewer ({project.gallery.length})
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : viewMode === 'grid' ? (
            /* VIEW 2: Curated Exhibition Grid (Classic 3-Column Architectural Cards) */
            <div
              id="projects-container-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                gap: '3.5rem 2.5rem',
              }}
            >
              {filteredProjects.map((project, idx) => (
                <TiltCard
                  key={project.id}
                  id={`project-card-${project.slug}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(10, 12, 9, 0.7)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(214, 189, 150, 0.2)',
                  }}
                >
                  {/* Card Cover Image with Quick View Trigger */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      backgroundColor: '#090a08',
                      borderBottom: '1px solid var(--border-hairline)',
                    }}
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="plate-card-zoom"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Link>

                    {/* Category Label */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: 'rgba(9, 10, 8, 0.9)',
                        border: '1px solid rgba(214, 189, 150, 0.3)',
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.68rem',
                        letterSpacing: '0.15em',
                        color: 'var(--accent-gold-light)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {project.category}
                    </div>

                    {/* Project Code */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        backgroundColor: 'rgba(9, 10, 8, 0.9)',
                        border: '1px solid var(--border-hairline)',
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.68rem',
                        color: 'var(--accent-gold)',
                        letterSpacing: '0.1em',
                        fontWeight: 600,
                      }}
                    >
                      #{project.projectNo}
                    </div>

                    {/* Quick Preview Button */}
                    <button
                      onClick={(e) => openQuickPreview(project, e, 0)}
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        background: 'rgba(9, 10, 8, 0.92)',
                        border: '1px solid var(--border-hairline)',
                        color: 'var(--accent-gold-light)',
                        padding: '0.38rem 0.9rem',
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {project.gallery.length} Plates · Inspect
                    </button>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--accent-gold)',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          fontWeight: 500,
                        }}
                      >
                        {project.client} — {project.location}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        {String(idx + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
                      </span>
                    </div>

                    <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.45rem',
                          marginBottom: '0.85rem',
                          color: '#ffffff',
                          lineHeight: '1.25',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {project.title}
                      </h3>
                    </Link>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: '1.75',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.75rem',
                        flexGrow: 1,
                        fontWeight: 300,
                      }}
                    >
                      {project.summary}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid var(--border-hairline)',
                        paddingTop: '1.25rem',
                        marginTop: 'auto',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Monograph {project.year}
                      </span>
                      <Link
                        href={`/projects/${project.slug}`}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: 'var(--accent-gold-light)',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Inspect Masterplate →
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          ) : (
            /* VIEW 3: Monograph Catalog Index Table with Rich Previews */
            <div className="architectural-frame corner-ticks table-responsive-wrapper">
              <table
                style={{
                  width: '100%',
                  minWidth: '780px',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  fontSize: '0.92rem',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: 'rgba(197, 160, 101, 0.08)',
                      borderBottom: '1px solid rgba(214, 189, 150, 0.25)',
                    }}
                  >
                    <th style={{ padding: '1.35rem 1.5rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.74rem' }}>
                      Ref No.
                    </th>
                    <th style={{ padding: '1.35rem 1.5rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.74rem' }}>
                      Plate Preview
                    </th>
                    <th style={{ padding: '1.35rem 1.5rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.74rem' }}>
                      Project Title &amp; Typology
                    </th>
                    <th style={{ padding: '1.35rem 1.5rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.74rem' }}>
                      Client &amp; Location
                    </th>
                    <th style={{ padding: '1.35rem 1.5rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.74rem' }}>
                      Plates
                    </th>
                    <th style={{ padding: '1.35rem 1.5rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.74rem', textAlign: 'right' }}>
                      Case Study
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((p) => (
                    <tr
                      key={p.id}
                      style={{
                        borderBottom: '1px solid var(--border-hairline)',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(214, 189, 150, 0.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <td style={{ padding: '1.35rem 1.5rem', fontWeight: 600, color: 'var(--accent-gold)' }}>
                        #{p.projectNo}
                      </td>
                      <td style={{ padding: '1.35rem 1.5rem' }}>
                        <div
                          style={{
                            width: '76px',
                            height: '50px',
                            overflow: 'hidden',
                            border: '1px solid rgba(214, 189, 150, 0.25)',
                            cursor: 'pointer',
                          }}
                          onClick={(e) => openQuickPreview(p, e, 0)}
                        >
                          <img src={p.coverImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </td>
                      <td style={{ padding: '1.35rem 1.5rem' }}>
                        <Link href={`/projects/${p.slug}`} style={{ color: '#ffffff', fontWeight: 500 }}>
                          {p.title}
                        </Link>
                        <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                          {p.category} · {p.tagline}
                        </span>
                      </td>
                      <td style={{ padding: '1.35rem 1.5rem', color: 'var(--text-secondary)' }}>
                        {p.client} — {p.location}
                      </td>
                      <td style={{ padding: '1.35rem 1.5rem', color: 'var(--text-muted)' }}>
                        <button
                          onClick={(e) => openQuickPreview(p, e, 0)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--accent-gold-light)',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            textDecoration: 'underline',
                          }}
                        >
                          {p.gallery.length} Plates
                        </button>
                      </td>
                      <td style={{ padding: '1.35rem 1.5rem', textAlign: 'right' }}>
                        <Link
                          href={`/projects/${p.slug}`}
                          className="btn-bespoke btn-bespoke-outline"
                          style={{ padding: '0.45rem 1.15rem', fontSize: '0.72rem' }}
                        >
                          Inspect Study
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* 5. Interactive Cinema Lightbox Modal (Exclusive Private Atelier Viewing Room) */}
      {quickViewProject && (
        <div
          id="quick-view-plate-modal"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 6, 5, 0.97)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={closeQuickPreview}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '1240px',
              width: '100%',
              maxHeight: '94vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Architectural Info Bar */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(214, 189, 150, 0.22)',
                paddingBottom: '0.75rem',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  {quickViewProject.client} — {quickViewProject.location} · Monograph #{quickViewProject.projectNo} · {quickViewProject.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.55rem', color: '#ffffff', marginTop: '2px' }}>
                  {quickViewProject.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold-light)', letterSpacing: '0.14em' }}>
                  Plate 0{quickViewPlateIndex + 1} of 0{quickViewProject.gallery.length}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  [← / → Navigate]
                </span>
              </div>
            </div>

            {/* High-Resolution Plate Viewer with Floating Gold Chevrons */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '45vh',
              }}
            >
              {/* Prev Button */}
              <button
                onClick={prevQuickPlate}
                style={{
                  position: 'absolute',
                  left: '12px',
                  zIndex: 10,
                  backgroundColor: 'rgba(9, 10, 8, 0.85)',
                  border: '1px solid rgba(214, 189, 150, 0.35)',
                  color: 'var(--accent-gold-light)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
                aria-label="Previous plate"
              >
                ‹
              </button>

              <img
                src={quickViewProject.gallery[quickViewPlateIndex]}
                alt={`${quickViewProject.title} Plate ${quickViewPlateIndex + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '62vh',
                  objectFit: 'contain',
                  border: '1px solid rgba(214, 189, 150, 0.22)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                }}
              />

              {/* Next Button */}
              <button
                onClick={nextQuickPlate}
                style={{
                  position: 'absolute',
                  right: '12px',
                  zIndex: 10,
                  backgroundColor: 'rgba(9, 10, 8, 0.85)',
                  border: '1px solid rgba(214, 189, 150, 0.35)',
                  color: 'var(--accent-gold-light)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
                aria-label="Next plate"
              >
                ›
              </button>
            </div>

            {/* Filmstrip of Thumbnails */}
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1.25rem',
                overflowX: 'auto',
                maxWidth: '100%',
                padding: '0.4rem 0',
              }}
            >
              {quickViewProject.gallery.map((img, i) => (
                <div
                  key={img}
                  onClick={() => setQuickViewPlateIndex(i)}
                  style={{
                    width: '68px',
                    height: '44px',
                    flexShrink: 0,
                    border: quickViewPlateIndex === i ? '2px solid var(--accent-gold)' : '1px solid rgba(214, 189, 150, 0.2)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: quickViewPlateIndex === i ? 1 : 0.55,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Bottom Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '1.15rem',
              }}
            >
              <Link
                href={`/projects/${quickViewProject.slug}`}
                className="btn-bespoke btn-bespoke-gold"
                style={{ padding: '0.75rem 1.9rem', fontSize: '0.76rem' }}
              >
                Open Full Architectural Case Study →
              </Link>
            </div>

            {/* Close Button */}
            <button
              id="close-quick-view-btn"
              onClick={closeQuickPreview}
              style={{
                position: 'absolute',
                top: '-18px',
                right: '-18px',
                backgroundColor: '#090a08',
                color: 'var(--accent-gold-light)',
                border: '1px solid rgba(214, 189, 150, 0.35)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001,
              }}
              aria-label="Close viewer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 6. Atelier Commissioning Invitation Bar (Matching Contact & About Aesthetics) */}
      <section
        id="projects-atelier-inquiry-bar"
        style={{
          borderTop: '1px solid rgba(214, 189, 150, 0.18)',
          backgroundColor: '#070806',
          padding: '5.5rem 0 6rem',
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
              Have An Architectural Vision <br />
              <span className="serif-italic gold-gradient-text">Ready For Monograph Execution?</span>
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
              We collaborate with discerning private patrons and visionary institutions across Delhi NCR, Gauhati (Assam), Bihar, and pan-India. Initiate an exploratory dialogue directly with our founding principals.
            </p>

            {/* Symmetrical 3-Channel Direct Concierge Ribbon */}
            <div className="hero-concierge-ribbon corner-ticks" id="projects-concierge-ribbon">
              {/* Channel 1: WhatsApp Concierge */}
              <a
                id="projects-whatsapp-direct-btn"
                href="https://wa.me/919999656898?text=Hello%20HOMIFIORA%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20commissioning%20an%20architectural%20project."
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
                id="projects-call-direct-btn"
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
                id="projects-email-direct-btn"
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

    </div>
  );
}
