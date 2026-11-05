import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>('product');
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  const prevPathRef = useRef(location.pathname);

  // Close menus on route change
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setActiveMenu(null);
      setMobileMenuOpen(false);
    }
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle outside click & ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(idx);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMenuEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeMenuImmediately = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(null);
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleNavClick = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMenu(activeMenu === idx ? null : idx);
  };

  const toggleMobileGroup = (group: string) => {
    setOpenMobileGroup(prev => prev === group ? null : group);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Banner */}
      <div className="top-banner">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', textAlign: 'center' }}>
          <span>&#10024; Now live: AI fluency &amp; agentic coding assessments &rarr;</span>
          <Link to="/product/ai-fluency-assessments/" style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>
            Explore new task types
          </Link>
        </div>
      </div>

      {/* Main Dark Header */}
      <header className="hdr" ref={headerRef} onMouseLeave={closeMenuImmediately}>
        <a className="skip" href="#main">Skip to content</a>
        <div className="wrap hdr-in">
          {/* Brand Logo */}
          <Link to="/" className="brand" aria-label="SetBenchmark home">
            <BrandLogo variant="light" size={28} />
          </Link>

          {/* Interactive Mega Menu Navigation */}
          <nav className="nav" aria-label="Main">
  {/*  1. PRODUCT MEGA MENU  */}
  
  <div className={`nav-item ${activeMenu === 1 ? "is-open" : ""}`} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
    <button className={`nav-link ${activeMenu === 1 ? "active" : ""}`} type="button" onClick={(e) => handleNavClick(1, e)} aria-haspopup="true" aria-expanded={activeMenu === 1}>Product <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"></path></svg></button>
    <div className="menu" onMouseEnter={handleMenuEnter} onMouseLeave={closeMenuImmediately}>
      <div className="mega-card">
        <div className="mega-menu-grid mega-grid-3">
          {/*  Column 1: Assessments & Testing  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path></svg> ASSESSMENTS &amp; TESTING</div>
            <Link to="/product/coding-assessments/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"></path></svg></span>
              <div className="mega-item-text"><b>Coding assessments</b><span>Real-world coding challenges &amp; repo tasks</span></div>
            </Link>
            <Link to="/product/ai-fluency-assessments/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"></path></svg></span>
              <div className="mega-item-text"><b>AI fluency assessments</b><span>Test how candidates work with AI &amp; agents</span></div>
            </Link>
            <Link to="/product/question-library/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></span>
              <div className="mega-item-text"><b>Question library</b><span>Thousands of vetted coding &amp; architecture tasks</span></div>
            </Link>
          </div>

          {/*  Column 2: Interviews & Analytics  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path></svg> INTERVIEWS &amp; INSIGHTS</div>
            <Link to="/product/ai-interviews/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"></path></svg></span>
              <div className="mega-item-text"><b>AI interviews</b><span>First-round interviews reviewed by humans</span></div>
            </Link>
            <Link to="/product/live-coding-interviews/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
              <div className="mega-item-text"><b>Live coding interviews</b><span>Collaborative live IDE with shared scorecards</span></div>
            </Link>
            <Link to="/product/skills-intelligence/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg></span>
              <div className="mega-item-text"><b>Skills intelligence</b><span>Role taxonomy &amp; engineering gap analysis</span></div>
            </Link>
          </div>

          {/*  Column 3: Integrity & Platform  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> INTEGRITY &amp; PLATFORM</div>
            <Link to="/product/proctoring-integrity/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
              <div className="mega-item-text"><b>Proctoring &amp; integrity</b><span>Human-reviewed anti-cheat &amp; webcam flags</span></div>
            </Link>
            <Link to="/integrations/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"></path><path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4"></path><circle cx="8" cy="12" r="2"></circle></svg></span>
              <div className="mega-item-text"><b>ATS integrations</b><span>Connect Greenhouse, Lever, Ashby, Slack &amp; SSO</span></div>
            </Link>
            <Link to="/product/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></span>
              <div className="mega-item-text"><b>Platform overview</b><span>Unified assessment engine for engineering teams</span></div>
            </Link>
          </div>
        </div>
        <div className="mega-bottom">
          <div className="mega-bottom-cta">Ready to test candidates on real skills? <a href="https://app.setbenchmark.com/signup">Start free trial →</a></div>
          <div className="mega-bottom-trust">
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M5 13l4 4L19 7"></path></svg> 14-day free trial</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M5 13l4 4L19 7"></path></svg> No credit card required</span>
            <Link to="/contact/">Book a demo →</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  2. SOLUTIONS MEGA MENU  */}
  
  <div className={`nav-item ${activeMenu === 2 ? "is-open" : ""}`} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
    <button className={`nav-link ${activeMenu === 2 ? "active" : ""}`} type="button" onClick={(e) => handleNavClick(2, e)} aria-haspopup="true" aria-expanded={activeMenu === 2}>Solutions <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"></path></svg></button>
    <div className="menu" onMouseEnter={handleMenuEnter} onMouseLeave={closeMenuImmediately}>
      <div className="mega-card">
        <div className="mega-menu-grid mega-grid-3">
          {/*  Column 1: By Use Case  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> BY USE CASE</div>
            <Link to="/solutions/campus-hiring/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></span>
              <div className="mega-item-text"><b>Campus hiring</b><span>Automate high-volume batch testing at scale</span></div>
            </Link>
            <Link to="/solutions/enterprise-tech-hiring/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M3 21h18M3 7v14M21 7v14M6 11h3M6 15h3M15 11h3M15 15h3M9 3h6v4H9z"></path></svg></span>
              <div className="mega-item-text"><b>Enterprise tech hiring</b><span>Custom SLAs, enterprise governance &amp; RBAC</span></div>
            </Link>
            <Link to="/solutions/it-services-staffing/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
              <div className="mega-item-text"><b>IT services &amp; staffing</b><span>Client-ready scorecards &amp; bench validation</span></div>
            </Link>
          </div>

          {/*  Column 2: By Team & Role  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> BY TEAM &amp; ROLE</div>
            <Link to="/solutions/startups/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></span>
              <div className="mega-item-text"><b>Startups &amp; growth teams</b><span>Zero setup overhead, fast testing &amp; fast shortlists</span></div>
            </Link>
            <Link to="/developers/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
              <div className="mega-item-text"><b>For developers</b><span>Practice tests, benchmark scores &amp; certificates</span></div>
            </Link>
            <Link to="/solutions/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg></span>
              <div className="mega-item-text"><b>Solutions overview</b><span>Tailored hiring workflows for every team size</span></div>
            </Link>
          </div>

          {/*  Column 3: Featured Callout (Untitled UI style)  */}
          <div className="mega-col">
            <div className="mega-feature-card">
              <div>
                <span className="mega-feature-badge">CASE STUDY</span>
                <div className="mega-feature-title">Scaling 10,000+ campus candidates in a single weekend</div>
                <p className="mega-feature-desc">Learn how engineering teams evaluate mass university candidate pools with automated integrity and structured grading.</p>
              </div>
              <Link to="/solutions/campus-hiring/" className="mega-feature-link">Read campus hiring playbook →</Link>
            </div>
          </div>
        </div>
        <div className="mega-bottom">
          <div className="mega-bottom-cta">Need a custom evaluation workflow? <Link to="/contact/" onClick={closeMenuImmediately}>Talk to our hiring architects →</Link></div>
          <div className="mega-bottom-trust">
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M5 13l4 4L19 7"></path></svg> ATS integrations ready</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M5 13l4 4L19 7"></path></svg> Custom scoring rubrics</span>
            <Link to="/pricing/">View transparent pricing →</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  3. SKILL TESTS MEGA MENU  */}
  
  <div className={`nav-item ${activeMenu === 3 ? "is-open" : ""}`} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
    <button className={`nav-link ${activeMenu === 3 ? "active" : ""}`} type="button" onClick={(e) => handleNavClick(3, e)} aria-haspopup="true" aria-expanded={activeMenu === 3}>Skill tests <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"></path></svg></button>
    <div className="menu" onMouseEnter={handleMenuEnter} onMouseLeave={closeMenuImmediately}>
      <div className="mega-card">
        <div className="mega-menu-grid mega-grid-4">
          {/*  Column 1: Languages  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> LANGUAGES</div>
            <Link to="/skill-tests/java/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"></path></svg></span>
              <div className="mega-item-text"><b>Java coding test</b><span>Spring Boot, concurrency &amp; core JVM</span></div>
            </Link>
            <Link to="/skill-tests/python/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 2a5 5 0 0 1 5 5v2H9V7a5 5 0 0 1 5-5zM7 9H5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2v-8zM12 22a5 5 0 0 1-5-5v-2h8v2a5 5 0 0 1-5 5zM17 15h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-2v8z"></path></svg></span>
              <div className="mega-item-text"><b>Python coding test</b><span>FastAPI, Django &amp; backend data logic</span></div>
            </Link>
            <Link to="/skill-tests/javascript/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 8v5a2 2 0 0 0 2 2M15 15a2 2 0 0 0 2-2V8"></path></svg></span>
              <div className="mega-item-text"><b>JavaScript test</b><span>Async/await, ES6+, DOM &amp; fullstack tasks</span></div>
            </Link>
            <Link to="/skill-tests/golang/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 14l6-6 6 6M12 8v12"></path></svg></span>
              <div className="mega-item-text"><b>Golang coding test</b><span>Goroutines, channels &amp; backend microservices</span></div>
            </Link>
          </div>

          {/*  Column 2: Frameworks & Data  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> FRAMEWORKS &amp; DATA</div>
            <Link to="/skill-tests/react/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><ellipse cx="12" cy="12" rx="10" ry="4"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse><circle cx="12" cy="12" r="1.5"></circle></svg></span>
              <div className="mega-item-text"><b>React developer test</b><span>State management, hooks &amp; component architecture</span></div>
            </Link>
            <Link to="/skill-tests/nodejs/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"></path></svg></span>
              <div className="mega-item-text"><b>Node.js developer test</b><span>Express, REST APIs, event loop &amp; backend</span></div>
            </Link>
            <Link to="/skill-tests/sql/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></span>
              <div className="mega-item-text"><b>SQL assessment</b><span>Complex joins, indexing &amp; query optimization</span></div>
            </Link>
            <Link to="/skill-tests/data-science/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></span>
              <div className="mega-item-text"><b>Data science test</b><span>Pandas, statistical evaluation &amp; modeling</span></div>
            </Link>
          </div>

          {/*  Column 3: Architecture & Cloud  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg> ARCHITECTURE &amp; CLOUD</div>
            <Link to="/skill-tests/data-structures-algorithms/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></span>
              <div className="mega-item-text"><b>Data structures &amp; algorithms</b><span>Algorithmic complexity, logic &amp; edge cases</span></div>
            </Link>
            <Link to="/skill-tests/system-design/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span>
              <div className="mega-item-text"><b>System design assessment</b><span>Distributed systems, caching &amp; high scale</span></div>
            </Link>
            <Link to="/skill-tests/devops/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></span>
              <div className="mega-item-text"><b>DevOps skills test</b><span>Docker, Kubernetes, CI/CD &amp; cloud infra</span></div>
            </Link>
            <Link to="/skill-tests/aws/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22.61 16.99a8 8 0 1 1-16-16 8 8 0 0 1 16 16z"></path><path d="M12 12v6M12 6h.01"></path></svg></span>
              <div className="mega-item-text"><b>AWS skills assessment</b><span>IAM, Lambda, VPC, ECS &amp; cloud architecture</span></div>
            </Link>
          </div>
        </div>
        <div className="mega-bottom">
          <div className="mega-bottom-cta">Need a custom stack assessment? <Link to="/skill-tests/" onClick={closeMenuImmediately}>Browse all 40+ pre-built skills →</Link></div>
          <div className="mega-bottom-trust">
            <span>&gt;_ Interactive Test IDE</span>
            <a href="https://app.setbenchmark.com/signup" onClick={closeMenuImmediately}>Start free trial →</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  4. PRICING DIRECT LINK  */}
  <div className="nav-item">
    <Link to="/pricing/" className="nav-link" onClick={closeMenuImmediately}>
      Pricing
    </Link>
  </div>

  {/*  5. RESOURCES MEGA MENU  */}
  <div className={`nav-item ${activeMenu === 5 ? "is-open" : ""}`} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
    <button className={`nav-link ${activeMenu === 5 ? "active" : ""}`} type="button" onClick={(e) => handleNavClick(5, e)} aria-haspopup="true" aria-expanded={activeMenu === 5}>Resources <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"></path></svg></button>
    <div className="menu" onMouseEnter={handleMenuEnter} onMouseLeave={closeMenuImmediately}>
      <div className="mega-card">
        <div className="mega-menu-grid mega-grid-4">
          {/*  Column 1: GUIDES & INSIGHTS  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> GUIDES &amp; INSIGHTS</div>
            <Link to="/blog/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></span>
              <div className="mega-item-text"><b>Technical hiring blog</b><span>Hiring playbooks, benchmarks &amp; guides</span></div>
            </Link>
            <Link to="/blog/assessing-developers-in-the-age-of-ai/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
              <div className="mega-item-text"><b>Assessing developers in AI era</b><span>Modern technical evaluation strategies</span></div>
            </Link>
            <Link to="/blog/how-to-prevent-cheating-in-online-coding-tests/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
              <div className="mega-item-text"><b>Preventing test cheating</b><span>Proctoring methods that preserve candidate trust</span></div>
            </Link>
            <Link to="/blog/campus-hiring-coding-assessment-guide/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></span>
              <div className="mega-item-text"><b>Campus assessment guide</b><span>Practical playbook for university drives</span></div>
            </Link>
          </div>

          {/*  Column 2: COMPARISONS & TRUST  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> COMPARISONS &amp; TRUST</div>
            <Link to="/compare/hackerrank-alternatives/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg></span>
              <div className="mega-item-text"><b>HackerRank alternatives</b><span>Honest 2026 feature &amp; pricing comparison</span></div>
            </Link>
            <Link to="/blog/how-to-design-a-fair-coding-assessment/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span>
              <div className="mega-item-text"><b>Fair assessment checklist</b><span>12-point rubric for unbiased screening</span></div>
            </Link>
            <Link to="/security/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
              <div className="mega-item-text"><b>Security &amp; compliance</b><span>SOC 2, ISO readiness, DPDP &amp; encryption</span></div>
            </Link>
            <Link to="/about/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
              <div className="mega-item-text"><b>About SetBenchmark</b><span>Built by Kombee Technologies for teams</span></div>
            </Link>
          </div>

          {/*  Column 3: REGIONAL EDITIONS  */}
          <div className="mega-col">
            <div className="mega-col-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> REGIONAL EDITIONS</div>
            <Link to="/india/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="2" x2="12" y2="22"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span>
              <div className="mega-item-text"><b>India (₹ INR)</b><span>DPDP compliance, local data &amp; campus engine</span></div>
            </Link>
            <Link to="/uae/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></span>
              <div className="mega-item-text"><b>UAE (AED)</b><span>Dubai &amp; Abu Dhabi tech hiring standards</span></div>
            </Link>
            <Link to="/saudi-arabia/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
              <div className="mega-item-text"><b>Saudi Arabia (SAR)</b><span>Vision 2030 digital talent evaluation</span></div>
            </Link>
            <Link to="/australia/" className="mega-item" onClick={closeMenuImmediately}>
              <span className="mega-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
              <div className="mega-item-text"><b>Australia &amp; NZ (ANZ)</b><span>Privacy Act compliance with AUD &amp; NZD billing</span></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

          {/* Header Action Buttons (Desktop) */}
          <div className="hdr-actions">
            <Button
              href="https://app.setbenchmark.com/login"
              variant="ghost"
              size="sm"
              className="btn-header-signin"
            >
              Sign In
            </Button>
            <Button
              href="https://app.setbenchmark.com/signup"
              variant="primary"
              size="sm"
              arrow="up-right"
              className="btn-header-trial"
            >
              Start free trial
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-drawer-content">
              {/* 1. Platform */}
              <div className={`mobile-nav-group ${openMobileGroup === 'product' ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="mobile-group-header"
                  onClick={() => toggleMobileGroup('product')}
                  aria-expanded={openMobileGroup === 'product'}
                >
                  <span className="mobile-group-title">
                    <span className="mobile-group-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    </span>
                    Platform
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-group-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                {openMobileGroup === 'product' && (
                  <div className="mobile-group-items">
                    <Link to="/product/coding-assessments/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Coding assessments</span>
                        <span className="mobile-nav-item-desc">Real-world coding challenges &amp; repo tasks</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/product/ai-fluency-assessments/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">AI fluency assessments</span>
                        <span className="mobile-nav-item-desc">Evaluate prompting, code review &amp; agentic coding</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/product/ai-interviews/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">AI interviews</span>
                        <span className="mobile-nav-item-desc">Adaptive first-round technical screens</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/product/live-coding-interviews/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Live coding interviews</span>
                        <span className="mobile-nav-item-desc">Shared real-time workspace with built-in scorecards</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/product/proctoring-integrity/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Proctoring and integrity</span>
                        <span className="mobile-nav-item-desc">Multi-layered anti-cheat with human review</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/product/skills-intelligence/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Skills intelligence</span>
                        <span className="mobile-nav-item-desc">Engineering capability mapping &amp; internal mobility</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/product/question-library/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Question library</span>
                        <span className="mobile-nav-item-desc">Thousands of leak-checked challenges</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/integrations/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Integrations</span>
                        <span className="mobile-nav-item-desc">Greenhouse, Lever, Ashby, Slack &amp; REST API</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* 2. Solutions */}
              <div className={`mobile-nav-group ${openMobileGroup === 'solutions' ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="mobile-group-header"
                  onClick={() => toggleMobileGroup('solutions')}
                  aria-expanded={openMobileGroup === 'solutions'}
                >
                  <span className="mobile-group-title">
                    <span className="mobile-group-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </span>
                    Solutions
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-group-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                {openMobileGroup === 'solutions' && (
                  <div className="mobile-group-items">
                    <Link to="/solutions/campus-hiring/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Campus hiring</span>
                        <span className="mobile-nav-item-desc">High-volume university drives &amp; batch screening</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/solutions/enterprise-tech-hiring/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Enterprise tech hiring</span>
                        <span className="mobile-nav-item-desc">Custom pools, enterprise security &amp; SLAs</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/solutions/it-services-staffing/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">IT services &amp; staffing</span>
                        <span className="mobile-nav-item-desc">Client-ready verified skill reports &amp; fast screening</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/solutions/startups/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Startups</span>
                        <span className="mobile-nav-item-desc">Zero-setup role templates to hire engineers rapidly</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/developers/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">For developers</span>
                        <span className="mobile-nav-item-desc">Candidate preparation, sandbox &amp; feedback</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* 3. Skill Tests */}
              <div className={`mobile-nav-group ${openMobileGroup === 'skills' ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="mobile-group-header"
                  onClick={() => toggleMobileGroup('skills')}
                  aria-expanded={openMobileGroup === 'skills'}
                >
                  <span className="mobile-group-title">
                    <span className="mobile-group-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </span>
                    Skill Tests
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-group-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                {openMobileGroup === 'skills' && (
                  <div className="mobile-group-items">
                    <Link to="/skill-tests/python/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Python coding test</span>
                        <span className="mobile-nav-item-desc">FastAPI, Django &amp; backend data logic</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/java/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Java coding test</span>
                        <span className="mobile-nav-item-desc">Spring Boot, concurrency &amp; core JVM</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/javascript/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">JavaScript test</span>
                        <span className="mobile-nav-item-desc">Async/await, ES6+, DOM &amp; fullstack tasks</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/react/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">React developer test</span>
                        <span className="mobile-nav-item-desc">State management, hooks &amp; component architecture</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/nodejs/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Node.js test</span>
                        <span className="mobile-nav-item-desc">Express, REST APIs, event loop &amp; backend</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/golang/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Golang coding test</span>
                        <span className="mobile-nav-item-desc">Goroutines, channels &amp; backend microservices</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/sql/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">SQL assessment</span>
                        <span className="mobile-nav-item-desc">Complex joins, indexing &amp; query optimization</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/data-science/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Data science test</span>
                        <span className="mobile-nav-item-desc">Pandas, statistical evaluation &amp; modeling</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/data-structures-algorithms/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Data structures &amp; algorithms</span>
                        <span className="mobile-nav-item-desc">Algorithmic complexity, logic &amp; edge cases</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/system-design/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">System design</span>
                        <span className="mobile-nav-item-desc">Distributed systems, caching &amp; high scale</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/devops/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">DevOps skills test</span>
                        <span className="mobile-nav-item-desc">Docker, Kubernetes, CI/CD &amp; cloud infra</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/aws/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">AWS skills test</span>
                        <span className="mobile-nav-item-desc">IAM, Lambda, VPC, ECS &amp; cloud architecture</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/skill-tests/" className="mobile-nav-item" onClick={closeMobileMenu} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '4px', paddingTop: '10px' }}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title" style={{ color: 'var(--lime)' }}>Browse all 40+ skills &rarr;</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow" style={{ color: 'var(--lime)' }}><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* 4. Resources & Guides */}
              <div className={`mobile-nav-group ${openMobileGroup === 'resources' ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="mobile-group-header"
                  onClick={() => toggleMobileGroup('resources')}
                  aria-expanded={openMobileGroup === 'resources'}
                >
                  <span className="mobile-group-title">
                    <span className="mobile-group-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </span>
                    Resources &amp; Guides
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-group-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                {openMobileGroup === 'resources' && (
                  <div className="mobile-group-items">
                    <Link to="/blog/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Technical hiring blog</span>
                        <span className="mobile-nav-item-desc">Hiring playbooks, benchmarks &amp; guides</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/compare/hackerrank-alternatives/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">HackerRank alternatives</span>
                        <span className="mobile-nav-item-desc">Honest 2026 feature &amp; pricing comparison</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/blog/how-to-design-a-fair-coding-assessment/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Fair assessment checklist</span>
                        <span className="mobile-nav-item-desc">12-point rubric for unbiased screening</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/security/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Security &amp; compliance</span>
                        <span className="mobile-nav-item-desc">SOC 2, ISO readiness, DPDP &amp; encryption</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/about/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">About SetBenchmark</span>
                        <span className="mobile-nav-item-desc">Built by Kombee Technologies for teams</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* 5. Regional Editions */}
              <div className={`mobile-nav-group ${openMobileGroup === 'regional' ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="mobile-group-header"
                  onClick={() => toggleMobileGroup('regional')}
                  aria-expanded={openMobileGroup === 'regional'}
                >
                  <span className="mobile-group-title">
                    <span className="mobile-group-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </span>
                    Regional Editions
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-group-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                {openMobileGroup === 'regional' && (
                  <div className="mobile-group-items">
                    <Link to="/india/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">India (₹ INR)</span>
                        <span className="mobile-nav-item-desc">DPDP compliance, local data &amp; campus engine</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/uae/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">UAE (AED)</span>
                        <span className="mobile-nav-item-desc">Dubai &amp; Abu Dhabi tech hiring standards</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/saudi-arabia/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Saudi Arabia (SAR)</span>
                        <span className="mobile-nav-item-desc">Vision 2030 digital talent evaluation</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                    <Link to="/australia/" className="mobile-nav-item" onClick={closeMobileMenu}>
                      <div className="mobile-nav-item-content">
                        <span className="mobile-nav-item-title">Australia &amp; NZ (ANZ)</span>
                        <span className="mobile-nav-item-desc">Privacy Act compliance with AUD &amp; NZD billing</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-nav-item-arrow"><path d="M9 18l6-6-6-6"></path></svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* 6. Pricing Direct Link */}
              <Link to="/pricing/" className="mobile-nav-direct-link" onClick={closeMobileMenu}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--lime)', display: 'flex' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </span>
                  Pricing &amp; Plans
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(255,255,255,0.4)' }}><path d="M9 18l6-6-6-6"></path></svg>
              </Link>

              {/* 7. Action Buttons at the Bottom */}
              <div className="mobile-drawer-footer">
                <a
                  href="https://app.setbenchmark.com/login"
                  className="btn-mobile-signin"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </a>
                <a
                  href="https://app.setbenchmark.com/signup"
                  className="btn-mobile-trial"
                  onClick={closeMobileMenu}
                >
                  Start free trial <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
