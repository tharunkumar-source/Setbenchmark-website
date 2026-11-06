import React, { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';

export const FreeTrial: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'Select',
    volume: 'Select',
    focus: 'Select',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <>
      <SEOHead
        title="Start 14-Day Free Trial | SetBenchmark"
        description="Start a 14-day free trial of SetBenchmark with 10 candidate assessment attempts. No credit card required. Test real engineering skills."
        canonical="https://www.setbenchmark.com/free-trial"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com" },
              { "@type": "ListItem", "position": 2, "name": "Free Trial", "item": "https://www.setbenchmark.com/free-trial" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SetBenchmark",
            "legalName": "Kombee Technologies (India) Pvt. Ltd.",
            "url": "https://www.setbenchmark.com",
            "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png"
          }
        ]}
      />

      <section className="phero" style={{ paddingBottom: '140px', marginBottom: '60px' }}>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><a href="/">Home</a></li>
              <li><span aria-current="page">Start free trial</span></li>
            </ol>
          </nav>

          <div className="phero-grid" style={{ alignItems: 'start' }}>
            {/* Left Content Column */}
            <div>
              <div className="eyebrow">14-Day Free Trial</div>
              <h1 className="h1">Start your 14-day free trial</h1>
              <p className="lead">
                In 2 minutes you can set up your workspace, send tests to candidates, and see real review workflows. No credit card required.
              </p>

              <ul className="checks">
                <li>
                  <span className="tick" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  10 complimentary assessment attempts to test your active roles
                </li>
                <li>
                  <span className="tick" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  Full access to 500+ coding tasks, AI fluency evaluations & system design rubrics
                </li>
                <li>
                  <span className="tick" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  Cloud sandbox with live terminal, automated test runner & evidence-based integrity
                </li>
                <li>
                  <span className="tick" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  No credit card required · Instant team invite & ATS integrations
                </li>
              </ul>

              <div className="stack-s" style={{ marginTop: '36px' }}>
                <p><b>Sales:</b> <a href="mailto:sales@setbenchmark.com">sales@setbenchmark.com</a></p>
                <p><b>Support:</b> <a href="mailto:support@setbenchmark.com">support@setbenchmark.com</a></p>
                <p className="muted">
                  Prefer a live walkthrough? <a href="/contact/">Book a 30-minute demo</a>.
                </p>
              </div>
            </div>

            {/* Right Form Card Column */}
            <div className="form card contact-form-card" style={{ padding: '36px 36px 48px', marginBottom: '48px', borderRadius: 0 }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                  <div className="row2">
                    <label>
                      Full name *
                      <input
                        required
                        autoComplete="name"
                        name="name"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ borderRadius: 0 }}
                      />
                    </label>
                    <label>
                      Work email *
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        name="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ borderRadius: 0 }}
                      />
                    </label>
                  </div>

                  <div className="row2">
                    <label>
                      Company *
                      <input
                        required
                        autoComplete="organization"
                        name="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{ borderRadius: 0 }}
                      />
                    </label>
                    <label>
                      Country
                      <select
                        name="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        style={{ borderRadius: 0 }}
                      >
                        <option value="Select" disabled>Select</option>
                        <option>India</option>
                        <option>United Arab Emirates</option>
                        <option>Saudi Arabia</option>
                        <option>Australia</option>
                        <option>New Zealand</option>
                        <option>United States</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>

                  <label>
                    Engineers you plan to hire in the next 12 months
                    <select
                      name="volume"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      style={{ borderRadius: 0 }}
                    >
                      <option value="Select" disabled>Select</option>
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>200+ (including campus)</option>
                    </select>
                  </label>

                  <label>
                    Primary assessment focus
                    <select
                      name="focus"
                      value={formData.focus}
                      onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                      style={{ borderRadius: 0 }}
                    >
                      <option value="Select" disabled>Select</option>
                      <option>Full-Stack & Backend (Go, Python, Java, Node)</option>
                      <option>Frontend (React, TypeScript, CSS)</option>
                      <option>AI Fluency & Assisted Coding</option>
                      <option>System Design & Distributed Architectures</option>
                      <option>Campus / Fresher Hiring Drives</option>
                      <option>Multiple Technical Roles</option>
                    </select>
                  </label>

                  <div style={{ marginTop: '8px' }}>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        height: '48px',
                        fontSize: '16px',
                        fontWeight: 600,
                        borderRadius: '12px',
                        cursor: isSubmitting ? 'wait' : 'pointer',
                      }}
                    >
                      {isSubmitting ? 'Setting up trial workspace...' : 'Start free trial →'}
                    </button>
                  </div>

                  <p className="small" style={{ marginTop: '14px', marginBottom: 0, color: 'var(--text-3)', lineHeight: 1.5 }}>
                    We use your details only to respond to you. See our <a href="/legal/privacy/">privacy policy</a>.
                  </p>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '16px 8px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--brand-subtle, #E8F9F1)',
                      border: '1px solid var(--brand-border-light, #B7F0D3)',
                      color: 'var(--brand-dark, #12804A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 18px',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--ink, #0F1222)',
                      marginBottom: '10px',
                    }}
                  >
                    Free trial workspace requested!
                  </h3>

                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-2, #555E6D)',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    We have set up your 14-day free trial with 10 assessment credits. Check your inbox at{' '}
                    <strong style={{ color: 'var(--ink, #0F1222)' }}>{formData.email}</strong> for your workspace link and temporary credentials.
                  </p>

                  <div
                    style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      padding: '16px 20px',
                      marginBottom: '26px',
                      textAlign: 'left',
                      fontSize: '13.5px',
                      color: 'var(--text-2, #555E6D)',
                      borderRadius: 0,
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--ink, #0F1222)', marginBottom: '4px' }}>
                      What happens next?
                    </div>
                    Click the confirmation link sent to your work email to log in and create your first assessment from a job description or role template.
                  </div>

                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      height: '46px',
                      fontSize: '15px',
                      fontWeight: 600,
                      borderRadius: '12px',
                    }}
                  >
                    Back to homepage
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrial;

