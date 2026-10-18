'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TiltCard from '@/components/TiltCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { studioPhilosophy } from '@/data/portfolioData';

const typologies = [
  { id: 'villa', label: 'Private Villa & Estate', icon: '🏛️' },
  { id: 'tropical', label: 'Modern Tropical Residence', icon: '🌿' },
  { id: 'hospitality', label: 'Hospitality & Banquet', icon: '✨' },
  { id: 'interiors', label: 'Bespoke Interior Sanctuary', icon: '🛋️' },
  { id: 'penthouse', label: 'Commercial & Penthouse', icon: '🏙️' },
];

const budgetBrackets = [
  '₹50L – ₹1 Cr',
  '₹1 Cr – ₹2.5 Cr',
  '₹2.5 Cr – ₹6 Cr',
  '₹6 Cr+ (Flagship Landmark)',
];

export default function ContactClient() {
  const searchParams = useSearchParams();
  const prefilledProject = searchParams.get('project') || '';

  const [selectedTypology, setSelectedTypology] = useState<string>('Private Villa & Estate');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹1 Cr – ₹2.5 Cr');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    plotArea: '',
    message: prefilledProject
      ? `I am interested in commissioning an architectural landmark inspired by ${prefilledProject}.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in commissioning an architectural landmark inspired by ${prefilledProject}.`,
      }));
    }
  }, [prefilledProject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          plotArea: formData.plotArea,
          typology: selectedTypology,
          budget: selectedBudget,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to transmit brief. Please try WhatsApp directly.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitError('Network error transmitting brief. Please reach our direct WhatsApp concierge.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="homifiora-contact-page" style={{ backgroundColor: '#080907', color: 'var(--text-primary)', minHeight: '100vh', position: 'relative' }}>
      
      {/* =========================================================================
          1. EDITORIAL HEADER & QUICK CONCIERGE BAR
          ========================================================================= */}
      <section
        id="contact-hero-section"
        style={{
          position: 'relative',
          padding: '8.5rem 0 4.5rem',
          borderBottom: '1px solid var(--border-hairline)',
          backgroundColor: '#090a08',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Top Light */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '25%',
            right: '25%',
            height: '320px',
            background: 'radial-gradient(ellipse at top, rgba(223, 183, 108, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            
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
                28°36&apos;N 77°12&apos;E · PRIVATE COMMISSIONS
              </span>
              <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>|</span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                DIRECT PARTNER ENGAGEMENT
              </span>
              <span style={{ color: 'rgba(214, 189, 150, 0.3)' }}>|</span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold-light)' }}>
                DELHI NCR · GAUHATI · PATNA · JAMMU
              </span>
            </div>

            <h1
              id="contact-page-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.8rem, 6.2vw, 4.8rem)',
                lineHeight: 1.08,
                marginBottom: '1.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Initiate An <br />
              <span className="serif-italic gold-gradient-text">Architectural Dialogue.</span>
            </h1>

            <p
              id="contact-lead-text"
              style={{
                fontSize: 'clamp(1.05rem, 1.7vw, 1.22rem)',
                lineHeight: '1.85',
                color: '#ded7c8',
                fontWeight: 300,
                maxWidth: '780px',
                margin: '0 auto 2.5rem',
              }}
            >
              We accept a limited selection of private residential, hospitality, and interior monographs each season to ensure personal partner oversight and uncompromised craftsmanship.
            </p>

            {/* Architectural Direct Concierge Ribbon (Tasteful, Unified, Symmetrical) */}
            <div
              id="hero-concierge-ribbon"
              className="hero-concierge-ribbon corner-ticks"
            >
              {/* Channel 1: WhatsApp Concierge */}
              <a
                id="hero-whatsapp-direct-btn"
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
                id="hero-call-direct-btn"
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
                id="hero-email-direct-btn"
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

      {/* =========================================================================
          2. MAIN COMMISSION INTAKE & ATELIER DOSSIER
          ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#080907' }}>
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Streamlined Architectural Brief Form */}
            <div
              className="corner-ticks cove-glow-warm"
              style={{
                backgroundColor: '#0a0c09',
                border: '1px solid rgba(214, 189, 150, 0.22)',
                borderRadius: '2px',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                boxShadow: 'var(--shadow-bespoke)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
                <div>
                  <span className="eyebrow-label" style={{ marginBottom: '0.35rem' }}>Commission Intake</span>
                  <h2 style={{ fontSize: '1.85rem', color: 'var(--text-primary)', margin: 0 }}>
                    Private Design Dossier
                  </h2>
                </div>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold-light)' }}>
                  EST. 2014
                </span>
              </div>

              {submitted ? (
                <div
                  id="contact-form-success-message"
                  style={{
                    backgroundColor: 'rgba(197, 160, 101, 0.08)',
                    border: '1px solid var(--accent-gold)',
                    padding: '3.5rem 2.5rem',
                    textAlign: 'center',
                    borderRadius: '2px',
                  }}
                >
                  <span style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
                    ◆
                  </span>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--accent-gold-light)', fontFamily: 'var(--font-serif)' }}>
                    Thank You, {formData.fullName}.
                  </h3>
                  <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem', fontWeight: 300 }}>
                    Your architectural commission brief has been transmitted directly to Ar. Gautam Jha and the principal partners at HOMIFIORA. We will review your site context, spatial scope, and connect within 24 hours.
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    A confirmation copy has been logged for <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-bespoke btn-bespoke-outline"
                    style={{ marginTop: '2.5rem', padding: '0.85rem 2rem' }}
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form id="studio-contact-form" onSubmit={handleSubmit}>
                  
                  {/* 1. Spatial Typology Pill Selectors */}
                  <div style={{ marginBottom: '2.25rem' }}>
                    <label style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                      01 · Spatial Typology
                    </label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                        gap: '0.65rem',
                      }}
                    >
                      {typologies.map((t) => {
                        const isSelected = selectedTypology === t.label;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setSelectedTypology(t.label)}
                            style={{
                              padding: '0.75rem 1rem',
                              border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                              backgroundColor: isSelected ? 'rgba(197, 160, 101, 0.12)' : 'rgba(255, 255, 255, 0.015)',
                              color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                              fontSize: '0.8rem',
                              textAlign: 'left',
                              cursor: 'pointer',
                              borderRadius: '2px',
                              transition: 'all 0.25s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontWeight: isSelected ? 500 : 300,
                            }}
                          >
                            <span>{t.icon}</span>
                            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Client & Contact Coordinates */}
                  <div style={{ marginBottom: '2.25rem' }}>
                    <label style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem', fontWeight: 600 }}>
                      02 · Client &amp; Site Coordinates
                    </label>
                    
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                        gap: '1.75rem 1.5rem',
                      }}
                    >
                      <div>
                        <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                          Client Name / Family Office *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Mr. Anil Soni"
                          className="input-underlined"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                          Email Correspondence *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="client@domain.com"
                          className="input-underlined"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 99996 56898"
                          className="input-underlined"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                          Site Location (City &amp; State) *
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Delhi NCR, Gauhati, or Patna"
                          className="input-underlined"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3. Scale & Investment Scale */}
                  <div style={{ marginBottom: '2.25rem' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                        gap: '1.75rem 1.5rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div>
                        <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                          Approximate Plot / Built Area
                        </label>
                        <input
                          id="plotArea"
                          name="plotArea"
                          type="text"
                          value={formData.plotArea}
                          onChange={handleChange}
                          placeholder="e.g. 5,000 sq ft or 1.5 Acres"
                          className="input-underlined"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                          Investment Scale
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {budgetBrackets.map((b) => {
                            const isSelected = selectedBudget === b;
                            return (
                              <button
                                type="button"
                                key={b}
                                onClick={() => setSelectedBudget(b)}
                                style={{
                                  background: isSelected ? 'var(--accent-gold)' : 'transparent',
                                  color: isSelected ? '#090a08' : 'var(--text-secondary)',
                                  border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                                  padding: '0.45rem 0.85rem',
                                  fontSize: '0.74rem',
                                  fontWeight: isSelected ? 600 : 400,
                                  cursor: 'pointer',
                                  borderRadius: '2px',
                                  transition: 'all 0.2s ease',
                                }}
                              >
                                {b}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Spatial Vision Textarea */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <label style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                      03 · Your Architectural Vision &amp; Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your vision, intended lifestyle rituals, preferred materials (chiseled slate, travertine, teak, terracotta jaali), and expected timeframe..."
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-hairline)',
                        padding: '1.1rem',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.92rem',
                        lineHeight: '1.7',
                        outline: 'none',
                        resize: 'vertical',
                        minHeight: '110px',
                        borderRadius: '1px',
                      }}
                    />
                  </div>

                  {/* Error Notification if any */}
                  {submitError && (
                    <div
                      style={{
                        marginBottom: '1.5rem',
                        padding: '1rem',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.4)',
                        color: '#fca5a5',
                        fontSize: '0.85rem',
                        borderRadius: '2px',
                        lineHeight: '1.6',
                      }}
                    >
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-bespoke btn-bespoke-gold"
                    style={{
                      width: '100%',
                      padding: '1.15rem',
                      fontSize: '0.85rem',
                      letterSpacing: '0.18em',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner" style={{ width: '16px', height: '16px', border: '2px solid rgba(0,0,0,0.2)', borderTopColor: '#000', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                        <span>Transmitting Monograph Dossier...</span>
                      </>
                    ) : (
                      <span>Transmit Private Commission Brief →</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Physical Studio Showcase & Direct Dossier */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Card 1: Physical Flagship Atelier Showcase */}
              <div
                className="corner-ticks cove-glow-warm"
                style={{
                  backgroundColor: '#0a0c09',
                  border: '1px solid rgba(214, 189, 150, 0.22)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src="/brand/homifiora-studio-facade-crop.webp"
                    alt="HOMIFIORA Flagship Atelier Storefront & Reception"
                    className="plate-card-zoom"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(9, 10, 8, 0.88) 0%, transparent 45%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '16px',
                      right: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '2px', fontWeight: 600 }}>
                        Brick-and-Mortar Headquarters
                      </span>
                      <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>
                        HOMIFIORA Flagship Atelier
                      </h4>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--accent-gold-light)', letterSpacing: '0.12em' }}>
                      EST. 2014
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem', fontWeight: 300 }}>
                    Experience our illuminated travertine welcome salon, browse our genuine stone and solid teakwood material archives, and review physical scale models in person.
                  </p>
                  <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                    <span className="tactile-chip" style={{ fontSize: '0.66rem', cursor: 'default' }}>Travertine Salon</span>
                    <span className="tactile-chip" style={{ fontSize: '0.66rem', cursor: 'default' }}>2700K Linear Coves</span>
                    <span className="tactile-chip" style={{ fontSize: '0.66rem', cursor: 'default' }}>Physical Stone Library</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Direct Atelier Dossier */}
              <TiltCard style={{ padding: '2.5rem 2rem' }}>
                <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>Direct Concierge</span>
                <h3 style={{ fontSize: '1.55rem', marginBottom: '1.75rem', color: 'var(--text-primary)' }}>
                  Atelier Dossier
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  {/* WhatsApp Quick Link */}
                  <div>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                      Instant WhatsApp Concierge
                    </span>
                    <a
                      id="dossier-whatsapp-link"
                      href="https://wa.me/919999656898?text=Hello%20HOMIFIORA%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--accent-gold-light)',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                      }}
                    >
                      <WhatsAppIcon size={18} color="#25D366" />
                      <span>+91 99996 56898</span>
                    </a>
                  </div>

                  {/* Telephony */}
                  <div>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                      Direct Atelier Telephony
                    </span>
                    <a
                      id="dossier-phone-link"
                      href="tel:+919999656898"
                      style={{
                        color: 'var(--accent-gold-light)',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, color: 'var(--accent-gold)' }}>
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      <span>+91 99996 56898</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                      Partner Correspondence
                    </span>
                    <a
                      id="dossier-email-link"
                      href="mailto:Support@homifiora.com"
                      style={{
                        color: 'var(--accent-gold-light)',
                        textDecoration: 'none',
                        fontSize: '0.96rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, color: 'var(--accent-gold)' }}>
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span>Support@homifiora.com</span>
                    </a>
                  </div>

                  {/* Regional Studios */}
                  <div>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                      Regional Studios &amp; Outposts
                    </span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.7', fontWeight: 300, margin: 0 }}>
                      <strong>New Delhi NCR</strong> · Principal Atelier &amp; HQ <br />
                      <strong>Gauhati (Guwahati)</strong> · Northeast Regional Atelier &amp; Branch <br />
                      <strong>Patna &amp; Dalsinghsarai</strong> · Eastern Regional Studio <br />
                      <strong>Jammu &amp; Chandigarh</strong> · Northern Consulting Hubs
                    </p>
                  </div>

                  {/* Hours */}
                  <div>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                      Consultation Hours
                    </span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 300, margin: 0 }}>
                      {studioPhilosophy.contactInfo.hours}
                    </p>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <a
                    id="whatsapp-chat-button"
                    href="https://wa.me/919999656898?text=Hello%20HOMIFIORA%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bespoke btn-bespoke-outline"
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      borderColor: 'rgba(37, 211, 102, 0.45)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                      backgroundColor: 'rgba(37, 211, 102, 0.08)',
                    }}
                  >
                    <WhatsAppIcon size={20} color="#25D366" />
                    <span>Launch Direct WhatsApp Concierge →</span>
                  </a>
                </div>
              </TiltCard>

              {/* Card 3: Client Assurance Notice */}
              <div
                style={{
                  border: '1px solid rgba(214, 189, 150, 0.18)',
                  padding: '1.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.015)',
                  borderRadius: '2px',
                }}
              >
                <span style={{ fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Engagement Protocol
                </span>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0, fontWeight: 300 }}>
                  All architectural inquiries and site documents are treated under strict confidentiality. Initial consultations can be held at our Delhi NCR salon, Gauhati branch, or scheduled virtually with our principal architects.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
