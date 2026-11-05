import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface FeatureCard {
  id: string;
  category: 'evaluation' | 'integrity' | 'ecosystem';
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  url: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'coding-assessments',
    category: 'evaluation',
    badge: 'REAL-WORLD REPO',
    title: 'Coding Assessments',
    description: 'Screen developers with full repository tasks, API implementations, and system design challenges that mirror production.',
    image: '/images/product/C05-Coding.webp',
    alt: 'Candidate coding environment with in-browser IDE and test runner',
    url: '/product/coding-assessments/',
  },
  {
    id: 'ai-fluency',
    category: 'evaluation',
    badge: 'AI AGENTS & PROMPTS',
    title: 'AI Fluency Assessments',
    description: 'Evaluate how engineers prompt, review diffs, direct coding agents, and verify subtle hallucinations with AI tools.',
    image: '/images/product/C06-AIAllowed.webp',
    alt: 'AI-allowed task with assistant chat panel and code diffs',
    url: '/product/ai-fluency-assessments/',
  },
  {
    id: 'live-interviews',
    category: 'evaluation',
    badge: 'LIVE PAIRING & AI',
    title: 'AI & Live Coding Interviews',
    description: 'Conduct 24/7 adaptive technical first rounds or collaborative pair-programming with shared video, editor, and drawing canvas.',
    image: '/images/product/I03-LiveInterviewer.webp',
    alt: 'Live coding interview panel with video feed and shared code editor',
    url: '/product/live-coding-interviews/',
  },
  {
    id: 'proctoring',
    category: 'integrity',
    badge: 'BLIND HUMAN REVIEW',
    title: 'Proctoring & Anti-Cheat',
    description: 'Identity checks, screen tracking, and keystroke replay reviewed blind by humans—ensuring zero automatic disqualifications.',
    image: '/images/product/H13-Integrity.webp',
    alt: 'Proctoring evidence timeline and keystroke playback audit',
    url: '/product/proctoring-integrity/',
  },
  {
    id: 'question-library',
    category: 'integrity',
    badge: 'LEAK-CHECKED',
    title: 'Question Library',
    description: 'Thousands of continuously rotating coding, SQL, and system design challenges actively monitored against web leaks.',
    image: '/images/product/L01-Library.webp',
    alt: 'Curated technical question library categorized by skill and level',
    url: '/product/question-library/',
  },
  {
    id: 'skills-intelligence',
    category: 'integrity',
    badge: 'BENCHMARKS',
    title: 'Skills Intelligence',
    description: 'Map engineering competencies against 400+ peer attempts, identify team skill gaps, and benchmark candidates for your ATS.',
    image: '/images/product/H11-Report.webp',
    alt: 'Candidate score report with skill percentiles and hiring workflow',
    url: '/product/skills-intelligence/',
  },
  {
    id: 'integrations',
    category: 'ecosystem',
    badge: '10+ ATS CONNECTORS',
    title: 'ATS & Workflow Integrations',
    description: 'Two-way synchronization with Greenhouse, Lever, Ashby, SmartRecruiters, Slack, and an extensible REST API.',
    image: '/images/product/AD06-Integrations.webp',
    alt: 'ATS and integration catalog connecting applicant tracking tools',
    url: '/integrations/',
  },
  {
    id: 'developer-community',
    category: 'ecosystem',
    badge: 'VERIFIED CREDENTIALS',
    title: 'Developer Community',
    description: 'A global developer community featuring free practice sandboxes, coding contests, and employer-verifiable skill certifications.',
    image: '/images/product/D01-PracticeCatalog.webp',
    alt: 'Developer practice catalog with verified assessment challenges',
    url: '/developers/',
  },
  {
    id: 'security-compliance',
    category: 'ecosystem',
    badge: 'SOC2 & RESIDENCY',
    title: 'Enterprise Security & Residency',
    description: 'Built for enterprise scale with SOC2 Type II compliance, local Mumbai & global data residency, and SAML 2.0 SSO.',
    image: '/images/product/AD09-DataPrivacy.webp',
    alt: 'Security settings with SAML SSO, audit logs, and data residency controls',
    url: '/security/',
  },
];

type CategoryFilter = 'all' | 'evaluation' | 'integrity' | 'ecosystem';

export const EditorialPlatformShowcase: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const bleedRef = useRef<HTMLDivElement>(null);

  const filteredCards = filter === 'all' 
    ? FEATURE_CARDS 
    : FEATURE_CARDS.filter(c => c.category === filter);

  // Maximum index so cards never scroll into empty blank space on the right
  // (3 cards visible at a time on desktop)
  const visibleCards = 3;
  const maxIndex = Math.max(0, filteredCards.length - visibleCards);

  // Auto-scroll every 4 seconds ONLY if there are 4 or more cards (desktop only)
  useEffect(() => {
    if (filteredCards.length < 4 || isPaused) return;

    const timer = setInterval(() => {
      // Don't auto-transform on mobile touch viewports
      if (typeof window !== 'undefined' && window.innerWidth <= 768) return;

      setCurrentIndex((prev) => {
        // If reached end, wrap back to the starting cards (0)
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, filteredCards.length, maxIndex]);

  // Smooth scroll helper for mobile swipeable view
  const scrollBleed = (direction: 'next' | 'prev') => {
    if (bleedRef.current) {
      const card = bleedRef.current.querySelector('.editorial-feature-card') as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 16 : 300;
      bleedRef.current.scrollBy({
        left: direction === 'next' ? cardWidth : -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  // Reset index if filter changes
  const handleFilterChange = (newFilter: CategoryFilter) => {
    setFilter(newFilter);
    setCurrentIndex(0);
    if (bleedRef.current) {
      bleedRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (filteredCards.length < 4) return;
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      scrollBleed('prev');
    } else {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  const handleNext = () => {
    if (filteredCards.length < 4) return;
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      scrollBleed('next');
    } else {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
  };

  return (
    <section className="editorial-carousel-section">
      {/* Header aligned with standard page padding */}
      <div className="wrap">
        <div className="editorial-carousel-head">
          <div className="eyebrow">Tailored Architecture</div>
          <h2 className="editorial-carousel-title">Features Built for Every Workflow</h2>
          <p className="editorial-carousel-lead">
            Screen real-world coding capability, evaluate AI fluency, ensure fraud-proof integrity, and automate recruitment workflows.
          </p>
        </div>

        {/* Filter Tabs & Navigation Controls Bar */}
        <div className="editorial-carousel-controls">
          <div className="editorial-filter-tabs" role="tablist" aria-label="Feature categories">
            <button
              type="button"
              className={`editorial-filter-btn ${filter === 'all' ? 'is-active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All features ({FEATURE_CARDS.length})
            </button>
            <button
              type="button"
              className={`editorial-filter-btn ${filter === 'evaluation' ? 'is-active' : ''}`}
              onClick={() => handleFilterChange('evaluation')}
            >
              Evaluation (3)
            </button>
            <button
              type="button"
              className={`editorial-filter-btn ${filter === 'integrity' ? 'is-active' : ''}`}
              onClick={() => handleFilterChange('integrity')}
            >
              Integrity (3)
            </button>
            <button
              type="button"
              className={`editorial-filter-btn ${filter === 'ecosystem' ? 'is-active' : ''}`}
              onClick={() => handleFilterChange('ecosystem')}
            >
              Ecosystem &amp; Scale (3)
            </button>
          </div>

          {filteredCards.length >= 4 && (
            <div className="editorial-nav-buttons">
              <button
                type="button"
                className="editorial-nav-arrow"
                onClick={handlePrev}
                aria-label="Previous feature card"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="editorial-nav-arrow"
                onClick={handleNext}
                aria-label="Next feature card"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Auto-scrolling Edge-Bleed Carousel Track */}
      <div 
        ref={bleedRef}
        className="editorial-carousel-bleed"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={trackRef}
          className="editorial-carousel-track"
          style={{
            transform: `translateX(calc(-${currentIndex} * (var(--carousel-card-width, 360px) + 24px)))`,
          }}
        >
          {filteredCards.map((card, idx) => (
            <article 
              key={card.id} 
              className={`editorial-feature-card ${idx === currentIndex ? 'is-active' : ''}`}
            >
              {/* Card Image Banner with Badge */}
              <div className="editorial-card-img-wrap">
                <img 
                  src={card.image} 
                  alt={card.alt} 
                  width="720"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="editorial-card-img"
                />
                <span className="editorial-card-badge">{card.badge}</span>
              </div>

              {/* Card Body in Sleek Dark Theme */}
              <div className="editorial-card-content">
                <h3 className="editorial-card-title">{card.title}</h3>
                <p className="editorial-card-desc">{card.description}</p>
                <Link to={card.url} className="editorial-card-action">
                  <span>Explore module</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialPlatformShowcase;
