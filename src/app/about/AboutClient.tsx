'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TiltCard from '@/components/TiltCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface Doctrine {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  image: string;
  plate: string;
}

const doctrines: Doctrine[] = [
  {
    num: '01',
    title: 'Tectonic Truth & Honest Materiality',
    subtitle: 'Zero Composite Veneers',
    description:
      'We sculpt monolithic structures in hand-chiseled charcoal slate, raw earth bricks, Italian travertine, and solid plantation teak that age with noble patina rather than degrade.',
    quote: 'True architectural luxury lies in the honest grain of natural earth, stone, and milled timber.',
    image: '/portfolio_images/page_53.webp',
    plate: 'Plate 01 · Material Palette Laboratory',
  },
  {
    num: '02',
    title: 'Microclimatic Passive Intelligence',
    subtitle: 'Terracotta Jaali & Wind Corridors',
    description:
      'Engineered perforated terracotta screens, deep cantilevered overhangs, and dual-aspect air chimneys temper India’s extreme solar heat while casting kinetic shadow choreographies.',
    quote: 'Passive thermal cooling is not an afterthought; it is our primary sculptural envelope.',
    image: '/portfolio_images/page_4.webp',
    plate: 'Plate 02 · Vayana Tropical Residence',
  },
  {
    num: '03',
    title: 'The Architecture of Pause',
    subtitle: 'Restorative Quietude & 2700K Dusk',
    description:
      'Deep reading bays, twilight water reflecting courts, and gentle 2700K golden linear cove lighting are choreographed to restore calm and contemplative balance to daily life.',
    quote: 'A hush carved out of timber and linen... not merely a room, but an architecture of pause.',
    image: '/portfolio_images/page_40.webp',
    plate: 'Plate 03 · Classical Drawing Suite',
  },
  {
    num: '04',
    title: 'Turnkey Architectural Fidelity',
    subtitle: 'From Concept Pencil to Handover',
    description:
      'We eliminate the traditional dilution between architectural drawings and site contractors through unified, architect-led turnkey supervision from initial BIM model to artisan finish.',
    quote: 'We refuse the dilution between paper concept and on-site realization.',
    image: '/portfolio_images/page_25.webp',
    plate: 'Plate 04 · Aarohan Four-Storey Residence',
  },
];

interface TeamMember {
  code: string;
  name: string;
  role: string;
  domain: string;
  focus: string;
  image: string;
  tenure: string;
}

const teamMembers: TeamMember[] = [
  {
    code: 'ARC · 01',
    name: 'Ritam Mazinder Baruah',
    role: 'Senior Architect',
    domain: 'Master Spatial Planning & Tectonics',
    focus: 'Directs complex spatial proportioning, cantilever massing, and panoramic sightlines across luxury residential estates.',
    image: '/team/ritam.jpg',
    tenure: '8+ Yrs Practice',
  },
  {
    code: 'ARC · 02',
    name: 'Akshay Sharma',
    role: 'Project Architect',
    domain: 'Parametric BIM & Climate Skins',
    focus: 'Translates architectural visions into parametric terracotta jaali matrices, structural detailing, and climatic skin engineering.',
    image: '/team/akshay.jpg',
    tenure: '6+ Yrs Practice',
  },
  {
    code: 'DES · 03',
    name: 'Maheep',
    role: 'Spatial & Interior Designer',
    domain: 'Tactile Materiality & 2700K Light',
    focus: 'Curates bespoke timber millwork, natural stone palettes, custom brass details, and calibrated golden circadian illumination.',
    image: '/team/maheep.jpg',
    tenure: '6+ Yrs Practice',
  },
  {
    code: 'OPS · 04',
    name: 'Pinky Jha',
    role: 'Operations & Atelier Lead',
    domain: 'Client Stewardship & Logistics',
    focus: 'Orchestrates seamless procurement timelines, client salon consultations, international stone sourcing, and turnkey delivery.',
    image: '/team/pinky.jpg',
    tenure: '7+ Yrs Practice',
  },
  {
    code: 'STR · 05',
    name: 'Govind Jha',
    role: 'Site Execution & Joinery Lead',
    domain: 'On-Site Engineering & Joinery',
    focus: 'Supervises on-site structural precision, concrete cantilevers, artisan timber joinery, and uncompromising build quality.',
    image: '/team/govind.jpg',
    tenure: '9+ Yrs Practice',
  },
];

const protocolSteps = [
  {
    num: '01',
    stage: 'Stage I · Discovery',
    title: 'Dialogue & Site Reading',
    desc: 'Deep inquiry into your lifestyle rituals, topography, solar geometry, and wind vectors through comprehensive spatial research.',
  },
  {
    num: '02',
    stage: 'Stage II · Conception',
    title: 'Schematic Architecture',
    desc: 'Sculpting bold geometric massing, cantilevered elevations, and 3D architectural renders that establish an authentic identity.',
  },
  {
    num: '03',
    stage: 'Stage III · Detailing',
    title: 'BIM & Material Curation',
    desc: 'Rigorous structural drafting, MEP integration, terracotta jaali calculations, and physical material selection in our sample laboratory.',
  },
  {
    num: '04',
    stage: 'Stage IV · Delivery',
    title: 'Turnkey Realization',
    desc: 'Full architect-led site supervision, artisan craftsmanship coordination, and flawless handover down to the final brass reveal.',
  },
];

export default function AboutClient() {
  const [activeDoctrineIdx, setActiveDoctrineIdx] = useState<number>(0);
  const currentDoctrine = doctrines[activeDoctrineIdx];

  return (
    <div id="homifiora-about-page" style={{ backgroundColor: '#080907', color: 'var(--text-primary)', minHeight: '100vh', position: 'relative' }}>
      
      {/* =========================================================================
          1. EDITORIAL HERO & PEDIGREE
          ========================================================================= */}
      <section
        id="about-editorial-hero"
        style={{
          position: 'relative',
          padding: '8.5rem 0 5.5rem',
          borderBottom: '1px solid var(--border-hairline)',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Ambient Background Watermark */}
        <div
          style={{
            position: 'absolute',
            top: '2%',
            right: '-4%',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(8rem, 20vw, 22rem)',
            color: 'rgba(197, 160, 101, 0.022)',
            userSelect: 'none',
            pointerEvents: 'none',
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          ATELIER
        </div>

        {/* Ambient Warm Golden Aura */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '25%',
            right: '25%',
            height: '350px',
            background: 'radial-gradient(ellipse at top, rgba(223, 183, 108, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Top Coordinates Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                border: '1px solid rgba(214, 189, 150, 0.28)',
                padding: '0.45rem 1.3rem',
                marginBottom: '2rem',
                backgroundColor: 'rgba(10, 11, 9, 0.65)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                28°36&apos;N 77°12&apos;E · EST. 2014
              </span>
              <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>|</span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                COA REGISTERED ARCHITECTURAL ATELIER
              </span>
              <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>|</span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold-light)' }}>
                DELHI NCR · GAUHATI · PATNA · JAMMU
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.8rem, 6.2vw, 5rem)',
                lineHeight: 1.1,
                marginBottom: '1.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Sculpting <br />
              <span className="serif-italic gold-gradient-text">Spaces That Belong.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.7vw, 1.25rem)',
                lineHeight: '1.85',
                color: '#ded7c8',
                fontWeight: 300,
                maxWidth: '820px',
                margin: '0 auto 3rem',
              }}
            >
              HOMIFIORA was founded on the conviction that architecture must transcend shelter to become an enduring sanctuary. For over a decade, we have sculpted private residences, modern tropical villas, and neoclassical landmarks across India with tectonic honesty and climatic reverence.
            </p>

            {/* Essential Credential Metrics Ribbon */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.5rem',
                borderTop: '1px solid var(--border-hairline)',
                borderBottom: '1px solid var(--border-hairline)',
                padding: '2rem 1rem',
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent-gold-light)', display: 'block', lineHeight: 1, marginBottom: '0.35rem' }}>
                  10+
                </span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Years Practice
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent-gold-light)', display: 'block', lineHeight: 1, marginBottom: '0.35rem' }}>
                  13+
                </span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Monograph Works
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent-gold-light)', display: 'block', lineHeight: 1, marginBottom: '0.35rem' }}>
                  03
                </span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Atelier Chapters
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent-gold-light)', display: 'block', lineHeight: 1, marginBottom: '0.35rem' }}>
                  100%
                </span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Turnkey Authorship
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE FOUNDER & ATELIER LEADERSHIP
          ========================================================================= */}
      <section
        id="about-team-section"
        className="section-padding"
        style={{
          borderBottom: '1px solid var(--border-hairline)',
          backgroundColor: '#0a0b08',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
            <span className="eyebrow-label">Atelier Authorship</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
              The Minds Sculpting <span className="serif-italic gold-gradient-text">HOMIFIORA</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 300, lineHeight: '1.8' }}>
              Meet the licensed architects, spatial designers, and master executioners dedicated to translating conceptual sketches into timeless built monuments.
            </p>
          </div>

          {/* Featured Principal Architect Monograph Box */}
          <div
            className="corner-ticks cove-glow-warm"
            style={{
              maxWidth: '1080px',
              margin: '0 auto 4.5rem',
              border: '1px solid rgba(197, 160, 101, 0.32)',
              backgroundColor: '#070806',
              borderRadius: '2px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              alignItems: 'stretch',
              boxShadow: 'var(--shadow-bespoke)',
            }}
          >
            {/* Left: Founder Portrait */}
            <div
              style={{
                position: 'relative',
                minHeight: '440px',
                aspectRatio: '4/5',
                overflow: 'hidden',
                backgroundColor: '#000',
              }}
            >
              <img
                src="/team/gautam.jpg"
                alt="Ar. Gautam Jha, Founder & Principal Architect"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 8, 6, 0.95) 0%, rgba(7, 8, 6, 0.25) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />
              
              {/* Crest Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  backgroundColor: 'rgba(9, 10, 8, 0.92)',
                  border: '1px solid var(--accent-gold)',
                  padding: '0.4rem 0.9rem',
                  fontSize: '0.66rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold-light)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                Founder &amp; Principal Architect
              </div>

              {/* Bottom Info Overlay */}
              <div style={{ position: 'absolute', bottom: '20px', left: '22px', right: '22px' }}>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px' }}>
                  Council of Architecture (COA) Registered
                </span>
                <span style={{ fontSize: '0.82rem', color: '#ded7c8', letterSpacing: '0.08em' }}>
                  Practice Established 2014 · National Portfolio
                </span>
              </div>
            </div>

            {/* Right: Personal Statement & Credentials */}
            <div
              style={{
                padding: 'clamp(2rem, 4vw, 3.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderLeft: '1px solid rgba(214, 189, 150, 0.14)',
              }}
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}
              >
                Principal Direction
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.4vw, 2.8rem)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem',
                  lineHeight: 1.15,
                }}
              >
                Ar. Gautam Jha
              </h3>

              <span
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--accent-gold-light)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  display: 'block',
                  fontWeight: 500,
                }}
              >
                Founder &amp; Principal Architect
              </span>

              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: '#ded7c8',
                  borderLeft: '2px solid var(--accent-gold)',
                  paddingLeft: '1.25rem',
                  marginBottom: '1.5rem',
                  fontWeight: 300,
                }}
              >
                &quot;Architecture must not merely shelter, but emotionally resonate — grounding human life in structural truth, climatic intelligence, and handcrafted materials that endure for generations.&quot;
              </blockquote>

              <p style={{ fontSize: '0.92rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '2rem' }}>
                With over a decade of practice spanning Delhi NCR, Gauhati (Assam), Bihar, and Jammu &amp; Kashmir, Ar. Gautam Jha oversees each commission from first concept to final key handover. His design methodology unites parametric climate skins, cantilevered concrete, and honest natural stone to create enduring architectural sanctuaries.
              </p>

              {/* Key Credentials Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1.25rem',
                  borderTop: '1px solid var(--border-hairline)',
                  paddingTop: '1.25rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px' }}>
                    Registration
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    Council of Architecture
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px' }}>
                    Practice Scope
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    120,000+ Sq. Ft. Delivered
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px' }}>
                    Studios
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    Delhi NCR · Gauhati · Patna · Jammu
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* The Core Architectural Collective Grid */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow-label" style={{ marginBottom: '0.4rem' }}>
              The Atelier Collective
            </span>
            <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: 'var(--text-primary)' }}>
              Core Spatial, Design &amp; Structural Leads
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {teamMembers.map((member, idx) => (
              <TiltCard
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#080907',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: '1px',
                }}
              >
                {/* Photo Aspect 3:4 */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
                    backgroundColor: '#000',
                  }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="plate-card-zoom"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(8, 9, 7, 0.95) 0%, rgba(8, 9, 7, 0.2) 50%, transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                  
                  {/* Code Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      backgroundColor: 'rgba(8, 9, 7, 0.85)',
                      padding: '0.2rem 0.5rem',
                      fontSize: '0.6rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold-light)',
                      border: '1px solid var(--border-hairline)',
                    }}
                  >
                    {member.code}
                  </div>

                  {/* Name & Role overlay */}
                  <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px' }}>
                    <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', fontWeight: 600 }}>
                      {member.role}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#fff', margin: 0, lineHeight: 1.2 }}>
                      {member.name}
                    </h4>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '1.25rem 1.15rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-gold-light)', display: 'block', marginBottom: '0.45rem', fontWeight: 500 }}>
                    {member.domain}
                  </span>
                  <p style={{ fontSize: '0.8rem', lineHeight: '1.65', color: 'var(--text-secondary)', fontWeight: 300, flexGrow: 1, margin: 0 }}>
                    {member.focus}
                  </p>
                  <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-hairline)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {member.tenure}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE ARCHITECTURAL DOCTRINES (UNIFIED PHILOSOPHY & PLATES)
          ========================================================================= */}
      <section
        id="about-doctrines-interactive"
        className="section-padding"
        style={{
          borderBottom: '1px solid var(--border-hairline)',
          backgroundColor: '#080907',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
            <span className="eyebrow-label">Foundational Doctrines</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
              The Four Architectural Pillars
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', fontWeight: 300, lineHeight: '1.8' }}>
              Every monograph residence and commercial landmark by HOMIFIORA is governed by four timeless spatial principles.
            </p>
          </div>

          {/* Interactive Doctrine Tabs & Visual Plate Split */}
          <div className="about-pillars-grid" style={{ alignItems: 'start' }}>
            {/* Left: 4 Pillars Selectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {doctrines.map((d, idx) => {
                const isActive = activeDoctrineIdx === idx;
                return (
                  <div
                    key={d.num}
                    onClick={() => setActiveDoctrineIdx(idx)}
                    style={{
                      padding: '1.75rem 2rem',
                      border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                      backgroundColor: isActive ? 'rgba(197, 160, 101, 0.06)' : 'rgba(255, 255, 255, 0.015)',
                      cursor: 'pointer',
                      transition: 'all 0.35s ease',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)',
                          fontWeight: 600,
                        }}
                      >
                        Pillar {d.num} · {d.subtitle}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                        {isActive ? '● VIEWING' : '○ SELECT'}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.45rem',
                        marginBottom: '0.65rem',
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {d.title}
                    </h3>

                    <p style={{ fontSize: '0.92rem', lineHeight: '1.75', color: '#b5ad9e', fontWeight: 300, margin: 0 }}>
                      {d.description}
                    </p>

                    {isActive && (
                      <div
                        style={{
                          marginTop: '1.1rem',
                          paddingTop: '0.85rem',
                          borderTop: '1px solid rgba(197, 160, 101, 0.25)',
                          fontSize: '0.86rem',
                          color: 'var(--accent-gold-light)',
                          fontStyle: 'italic',
                          fontFamily: 'var(--font-serif)',
                        }}
                      >
                        &quot;{d.quote}&quot;
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Plate Visual Showcase (Sticky) */}
            <div className="about-pillars-sticky" style={{ position: 'sticky', top: '110px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  border: '1px solid rgba(214, 189, 150, 0.25)',
                  boxShadow: 'var(--shadow-bespoke)',
                  backgroundColor: '#000',
                }}
              >
                <img
                  key={currentDoctrine.num}
                  src={currentDoctrine.image}
                  alt={currentDoctrine.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.5s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem',
                    background: 'linear-gradient(to top, rgba(8,9,7,0.96) 0%, rgba(8,9,7,0.4) 60%, transparent 100%)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px' }}>
                      Monograph Reference
                    </span>
                    <span style={{ fontSize: '1rem', color: '#fff', fontWeight: 500 }}>
                      {currentDoctrine.plate}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold-light)', letterSpacing: '0.12em' }}>
                    Doctrine {currentDoctrine.num} / 04
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. THE PHYSICAL ATELIER & REGIONAL CHAPTERS
          ========================================================================= */}
      <section
        id="about-physical-atelier"
        className="section-padding"
        style={{
          position: 'relative',
          backgroundColor: '#0a0d0a',
          borderBottom: '1px solid var(--border-hairline)',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="responsive-split-grid" style={{ alignItems: 'center' }}>
            {/* Left: Studio Image Composite */}
            <div
              className="corner-ticks cove-glow-warm"
              style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid rgba(214, 189, 150, 0.25)',
                backgroundColor: '#080907',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/11', overflow: 'hidden' }}>
                <img
                  src="/brand/homifiora-studio-facade-crop.webp"
                  alt="HOMIFIORA Flagship Physical Atelier and Design House"
                  className="plate-card-zoom"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8, 9, 7, 0.85) 0%, transparent 40%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px', fontWeight: 600 }}>
                      Physical Headquarters
                    </span>
                    <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>
                      HOMIFIORA Flagship Atelier
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold-light)', letterSpacing: '0.12em' }}>
                    EST. 2014
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Studio Narrative & Material Lab */}
            <div>
              <span className="eyebrow-label">Physical Spatial Authorship</span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                The Physical Atelier: <br />
                <span className="serif-italic gold-shimmer-text">Materiality Before Site.</span>
              </h2>

              <p style={{ fontSize: '1.02rem', lineHeight: '1.85', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 300 }}>
                Our studio is built upon the very tenets we practice: deep charcoal slate planes, warm 2700K linear cove illumination, natural teak louvers, and a luminous backlit travertine reception salon.
              </p>

              <p style={{ fontSize: '0.94rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 300 }}>
                We believe architecture cannot be designed purely in digital isolation. Inside our material archive, clients touch and feel hand-quarried Italian travertines, chiseled slate samples, custom-milled teakwood joinery, and perforated regional clay jaalis before breaking ground.
              </p>

              {/* 4 Regional Hubs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500, marginBottom: '0.2rem' }}>
                    New Delhi NCR
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Principal Flagship &amp; Architectural HQ
                  </span>
                </div>

                <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500, marginBottom: '0.2rem' }}>
                    Gauhati (Guwahati)
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Northeast Regional Atelier &amp; Branch
                  </span>
                </div>

                <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500, marginBottom: '0.2rem' }}>
                    Patna &amp; Dalsinghsarai
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Eastern Regional Studio Atelier
                  </span>
                </div>

                <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block', fontWeight: 500, marginBottom: '0.2rem' }}>
                    Jammu &amp; Chandigarh
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Northern Consulting Outposts
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-bespoke btn-bespoke-gold"
                style={{ whiteSpace: 'nowrap' }}
              >
                <span>Schedule Atelier Walkthrough</span>
                <span style={{ display: 'inline-block' }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. THE FOUR-STAGE TURNKEY PROTOCOL (CLIENT ROADMAP)
          ========================================================================= */}
      <section
        id="about-protocol-section"
        className="section-padding"
        style={{
          backgroundColor: '#080907',
          borderBottom: '1px solid var(--border-hairline)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="eyebrow-label">Execution Methodology</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
              The Four-Stage Turnkey Protocol
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', fontWeight: 300, lineHeight: '1.8' }}>
              How our principal architects and engineering teams take a vision from initial dialogue to turnkey reality.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '2rem',
            }}
          >
            {protocolSteps.map((step) => (
              <TiltCard key={step.num} style={{ padding: '2.5rem 1.85rem', backgroundColor: '#090a08' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--accent-gold)', opacity: 0.35, lineHeight: 1, display: 'block', marginBottom: '0.85rem' }}>
                  {step.num}
                </span>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.45rem', fontWeight: 600 }}>
                  {step.stage}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.75', color: 'var(--text-secondary)', fontWeight: 300, margin: 0 }}>
                  {step.desc}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DIRECT INQUIRY & COMMISSION CTA
          ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#060705' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
          <span className="eyebrow-label" style={{ marginBottom: '1rem' }}>Initiate Dialogue</span>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)', marginBottom: '1.25rem' }}>
            Commission Our Architectural Atelier
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 300 }}>
            We accept a limited selection of residential, hospitality, and turnkey interior commissions each season to ensure personal partner oversight.
          </p>

          {/* Symmetrical 3-Channel Direct Concierge Ribbon */}
          <div className="hero-concierge-ribbon corner-ticks" id="about-concierge-ribbon" style={{ marginBottom: '3rem' }}>
            {/* Channel 1: WhatsApp Concierge */}
            <a
              id="about-whatsapp-direct-btn"
              href="https://wa.me/919999656898?text=Hello%20HOMIFIORA%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
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
              id="about-call-direct-btn"
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
              id="about-email-direct-btn"
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

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-bespoke btn-bespoke-gold" style={{ padding: '1rem 2.6rem' }}>
              Initiate Private Commission →
            </Link>
            <Link href="/projects" className="btn-bespoke btn-bespoke-outline" style={{ padding: '1rem 2.2rem' }}>
              Browse Selected Works
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
