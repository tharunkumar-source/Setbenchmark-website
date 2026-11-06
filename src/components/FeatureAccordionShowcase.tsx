import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ShowcaseItem {
  id: string;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
  urlBar: string;
  badge: string;
  linkUrl: string;
  linkText: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'ai-fluency',
    category: 'AI Fluency',
    title: 'AI Fluency: See how candidates work with AI',
    description:
      'Evaluate how engineers prompt, review diffs, direct coding agents, and spot subtle AI errors on realistic codebase tasks.',
    bullets: [
      'Full repository context with live test runs & terminal',
      'Configurable AI policy: not allowed, allowed, or required',
      'Scored rubrics evaluating engineer judgment and code verification',
    ],
    image: '/images/product/C06-AIAllowed.webp',
    alt: 'AI-allowed coding task with interactive assistant panel and code diffs',
    urlBar: 'app.setbenchmark.com · candidate ai fluency session',
    badge: 'AI ALLOWED',
    linkUrl: '/product/ai-fluency-assessments/',
    linkText: 'Explore AI fluency assessments',
  },
  {
    id: 'integrity',
    category: 'Integrity',
    title: 'Integrity: Catch cheating without failing honest people',
    description:
      'Granular fraud evidence reviewed blind by real humans—ensuring honest developers are never falsely disqualified.',
    bullets: [
      'Zero automatic rejections; human reviewer decides',
      'Keystroke playback & side-by-side code diff audit timeline',
      'Continuous leak monitoring with rotating question variants',
    ],
    image: '/images/product/H13-Integrity.webp',
    alt: 'Integrity review interface with signals, similarity checks, and evidence timeline',
    urlBar: 'app.setbenchmark.com · proctoring & integrity evidence audit',
    badge: 'HUMAN REVIEWED',
    linkUrl: '/product/proctoring-integrity/',
    linkText: 'Explore proctoring & integrity',
  },
  {
    id: 'decisions',
    category: 'Decisions',
    title: 'Decisions: Reports hiring managers actually read',
    description:
      'One-page verified candidate scorecards that benchmark coding ability and AI fluency directly against your role profile.',
    bullets: [
      'Skill percentiles benchmarked across 400+ candidate attempts',
      'Clear separation between core engineering and AI fluency',
      'One-click ATS sync with Greenhouse, Lever, and Ashby',
    ],
    image: '/images/product/H11-Report.webp',
    alt: 'Candidate score report with skill breakdown and hiring decision workflow',
    urlBar: 'app.setbenchmark.com · candidate scorecard & skill percentiles',
    badge: 'ATS READY',
    linkUrl: '/product/coding-assessments/',
    linkText: 'Explore scored reports',
  },
];

export const FeatureAccordionShowcase: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const toggleItem = (idx: number) => {
    setActiveIdx(idx);
  };

  const activeItem = SHOWCASE_ITEMS[activeIdx];

  return (
    <section className="feature-accordion-section section-alt">
      <div className="wrap">
        <div className="feature-accordion-grid">
          {/* Left Column: Full-Data Uncropped Product Browser Mockup */}
          <div className="feature-mockup-col">
            <div className="feature-mockup-frame" aria-label="Interactive Product Preview">
              {/* Browser Window Header */}
              <div className="feature-mockup-topbar">
                <div className="feature-mockup-dots" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="feature-mockup-url" title={activeItem.urlBar}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>{activeItem.urlBar}</span>
                </div>
                <div className="feature-mockup-badge">
                  {activeItem.badge}
                </div>
              </div>

              {/* Viewport: Full 16:10 Aspect Ratio with Contain so No Data Is Cropped */}
              <div className="feature-mockup-viewport">
                {SHOWCASE_ITEMS.map((item, idx) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.alt}
                    width="1440"
                    height="900"
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`feature-mockup-img ${activeIdx === idx ? 'is-active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion Dropdowns without Accent Eyebrows */}
          <div className="feature-accordion-col">
            <div className="feature-accordion-intro">
              <div className="eyebrow">Assessment Intelligence &amp; Integrity</div>
              <h2 className="feature-accordion-heading">
                Real-World Assessments, Proven Integrity, and Clear Decisions
              </h2>
            </div>

            {/* Accordion List */}
            <div className="feature-accordion-list" role="tablist" aria-label="Feature Showcase Tabs">
              {SHOWCASE_ITEMS.map((item, idx) => {
                const isOpen = activeIdx === idx;
                return (
                  <div
                    key={item.id}
                    className={`feature-accordion-item ${isOpen ? 'is-active' : ''}`}
                  >
                    <button
                      type="button"
                      role="tab"
                      id={`feature-tab-${item.id}`}
                      aria-selected={isOpen}
                      aria-controls={`feature-panel-${item.id}`}
                      className="feature-accordion-btn"
                      onClick={() => toggleItem(idx)}
                    >
                      <h3 className={`feature-item-title ${isOpen ? 'is-open' : ''}`}>{item.title}</h3>
                      <span className={`feature-accordion-toggle ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                        {isOpen ? (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        ) : (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {/* Expandable Dropdown Content */}
                    <div
                      id={`feature-panel-${item.id}`}
                      role="tabpanel"
                      aria-labelledby={`feature-tab-${item.id}`}
                      aria-hidden={!isOpen}
                      className={`feature-accordion-content ${isOpen ? 'is-open' : ''}`}
                    >
                      <div className="feature-accordion-body">
                        <p className="feature-item-desc">{item.description}</p>

                        {/* Mobile-Only Mockup Display: Shown right inside expanded details */}
                        <div className="feature-accordion-mobile-mockup">
                          <div className="feature-mockup-frame">
                            <div className="feature-mockup-topbar">
                              <div className="feature-mockup-dots" aria-hidden="true">
                                <span className="dot dot-red" />
                                <span className="dot dot-yellow" />
                                <span className="dot dot-green" />
                              </div>
                              <div className="feature-mockup-url" title={item.urlBar}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <span>{item.urlBar}</span>
                              </div>
                              <div className="feature-mockup-badge">
                                {item.badge}
                              </div>
                            </div>
                            <div className="feature-mockup-viewport">
                              <img
                                src={item.image}
                                alt={item.alt}
                                width="1440"
                                height="900"
                                loading="lazy"
                                decoding="async"
                                className="feature-mockup-img is-active"
                              />
                            </div>
                          </div>
                        </div>

                        <ul className="feature-checks-list">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="feature-check-item">
                              <span className="feature-tick" aria-hidden="true">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="feature-item-action">
                          <Link to={item.linkUrl} className="feature-link">
                            {item.linkText}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAccordionShowcase;
