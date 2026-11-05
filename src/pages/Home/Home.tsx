import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { FAQ } from '@/components/FAQ';
import { FeatureAccordionShowcase } from '@/components/FeatureAccordionShowcase';
import { EditorialPlatformShowcase } from '@/components/EditorialPlatformShowcase';
import { RegionalPricingSection } from '@/components/RegionalPricingSection';

const BODY_BEFORE = `<section class="section why-section section-alt"><div class="wrap"><div class="head"><div class="eyebrow">Why SetBenchmark</div><h2 class="h2">AI changed how engineers work. Hiring should change too.</h2><p class="lead" style="margin-top:16px">Most coding tests still ban every tool and ask for puzzles from memory. SetBenchmark measures what matters now.</p></div><div class="grid g3"><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"></path></svg></div><h3 class="h3">Real work, not puzzles</h3><p>Repository tasks, APIs, SQL and system design that look like the job, so strong engineers can show what they do best.</p></div><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"></path></svg></div><h3 class="h3">Built for AI-era engineering</h3><p>Decide per task whether AI is not allowed, allowed or required, and see how candidates plan, prompt and verify.</p></div><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01"></path></svg></div><h3 class="h3">Integrity without false rejections</h3><p>Layered cheating signals with evidence, reviewed blind by a person. Nothing is rejected automatically.</p></div></div></div></section>`;

const BODY_AFTER_1 = `<section class="section how-it-works-section section-white"><div class="wrap">
  <!-- Top: Steps on One Side, Header on the Other (Matching Reference) -->
  <div class="how-split-layout">
    <div class="how-split-left">
      <div class="eyebrow">How it works</div>
      <h2 class="h2">From job description to shortlist in four steps</h2>
      <p class="lead" style="margin-top:16px">
        Everything you need to configure assessments, invite candidates, evaluate real coding depth with AI policies, and export defensible scorecards to your ATS.
      </p>
      <div class="how-split-actions" style="margin-top:28px">
        <a class="btn btn-primary" href="https://app.setbenchmark.com/signup">Start free trial &rarr;</a>
      </div>
    </div>

    <div class="how-split-right">
      <div class="how-steps-2x2">
        <!-- Step 01 -->
        <div class="how-compact-step">
          <div class="how-step-header">
            <span class="how-step-num">01</span>
          </div>
          <h4 class="how-step-title">Choose or draft a test</h4>
          <p class="how-step-desc">Start from 400+ role benchmarks or paste a job description to generate repo tasks.</p>
        </div>

        <!-- Step 02 -->
        <div class="how-compact-step">
          <div class="how-step-header">
            <span class="how-step-num">02</span>
          </div>
          <h4 class="how-step-title">Invite candidates</h4>
          <p class="how-step-desc">Send branded invites from Greenhouse, Lever, Ashby, or email with automated reminders.</p>
        </div>

        <!-- Step 03 -->
        <div class="how-compact-step">
          <div class="how-step-header">
            <span class="how-step-num">03</span>
          </div>
          <h4 class="how-step-title">Candidates take it</h4>
          <p class="how-step-desc">Real cloud sandbox with terminal, test suites, practice questions, and accommodations.</p>
        </div>

        <!-- Step 04 -->
        <div class="how-compact-step">
          <div class="how-step-header">
            <span class="how-step-num">04</span>
          </div>
          <h4 class="how-step-title">Review and decide</h4>
          <p class="how-step-desc">Verified scorecards, code playback, and percentiles benchmarked against 400+ peer attempts.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom: Dedicated Container with Nice BG for Core Principles (Matching Reference) -->
  <div class="principles-nice-bg-container">
    <div class="principles-band-head">
      <div class="eyebrow" style="color:var(--brand-dark)">Platform Governance</div>
      <h3 class="principles-band-title">Core Principles Behind Every Benchmark</h3>
      <p class="principles-band-lead">Three non-negotiable standards that protect your engineering hiring from black-box automated rejections.</p>
    </div>

    <div class="principles-trio-grid">
      <!-- Principle 1: White Card -->
      <div class="principle-trio-card card-white">
        <div class="principle-trio-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <h4 class="principle-trio-title">People decide</h4>
        <p class="principle-trio-desc">AI scores correctness, summarizes diffs, and flags anomalies. A human engineering manager makes every hiring decision and records the rationale.</p>
        <div class="principle-trio-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Zero automated rejections</span>
        </div>
      </div>

      <!-- Principle 2: Middle Dark Card (Featured Accent Card like Reference!) -->
      <div class="principle-trio-card card-dark">
        <div class="principle-trio-icon dark-accent">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
        <h4 class="principle-trio-title">Fair by design</h4>
        <p class="principle-trio-desc">Job-relevant repository tasks, accessible accommodations on request, and automatic fairness audits that check for demographic group disparity.</p>
        <div class="principle-trio-pill dark-pill">
          <span class="dark-pill-dot">●</span>
          <span>Continuous adverse impact audits</span>
        </div>
      </div>

      <!-- Principle 3: White Card -->
      <div class="principle-trio-card card-white">
        <div class="principle-trio-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </div>
        <h4 class="principle-trio-title">Private by default</h4>
        <p class="principle-trio-desc">Clear candidate consent, short audit retention, and zero biometric storage. Built from the ground up for India's DPDP Act and GDPR compliance.</p>
        <div class="principle-trio-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>India DPDP Act &amp; GDPR compliant</span>
        </div>
      </div>
    </div>
  </div>
</div></section><section class="section solutions-section section-alt"><div class="wrap"><div class="head"><div class="eyebrow">Solutions</div><h2 class="h2">Built for the way you hire</h2></div><div class="grid g4"><a href="/solutions/campus-hiring/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5c3 2 9 2 12 0v-5M22 9v6"></path></svg></div><h3 class="h3">Campus hiring</h3><p>Invite thousands of students across colleges, run proctored coding and aptitude tests on the same day and get a ranked, fair shortlist the same evening.</p></a><a href="/solutions/enterprise-tech-hiring/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 21V5l8-3v19M12 8h8v13M8 9h.01M8 13h.01M8 17h.01M16 12h.01M16 16h.01M2 21h20"></path></svg></div><h3 class="h3">Enterprise tech hiring</h3><p>Role profiles, shared question libraries and structured scorecards give every team the same standard.</p></a><a href="/solutions/it-services-staffing/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"></path></svg></div><h3 class="h3">IT services and staffing</h3><p>Verify skills before you submit a profile, share a trusted report with the client and staff projects from your bench with confidence.</p></a><a href="/solutions/startups/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 15c-1 1-2 5-2 5s4-1 5-2M14 4c3-1 6 0 6 0s1 3 0 6l-7 7-6-6 7-7zM15 9h.01"></path></svg></div><h3 class="h3">Startups</h3><p>Paste a job description, get a ready-to-send assessment and let SetBenchmark screen applicants while you build.</p></a></div></div></section><section class="section skill-tests-section section-white"><div class="wrap"><div class="split"><div><div class="eyebrow">Skill tests</div><h2 class="h2">Ready-made tests for every engineering role</h2><p class="lead" style="margin-top:16px">Start from a validated test for the stack you hire for, then make it your own.</p><div class="btns" style="margin-top:24px"><a href="/skill-tests/" class="btn btn-primary">Browse skill tests</a></div></div><div class="tags"><a href="/skill-tests/java/" class="tag">Java coding test</a><a href="/skill-tests/python/" class="tag">Python coding test</a><a href="/skill-tests/javascript/" class="tag">JavaScript test</a><a href="/skill-tests/react/" class="tag">React test</a><a href="/skill-tests/nodejs/" class="tag">Node.js test</a><a href="/skill-tests/sql/" class="tag">SQL test</a><a href="/skill-tests/golang/" class="tag">Go (Golang) coding test</a><a href="/skill-tests/data-structures-algorithms/" class="tag">Data structures and algorithms test</a><a href="/skill-tests/system-design/" class="tag">System design interview test</a><a href="/skill-tests/devops/" class="tag">DevOps and cloud test</a><a href="/skill-tests/data-science/" class="tag">Data science test</a><a href="/skill-tests/aws/" class="tag">AWS skills test</a></div></div></div></section>`;

const BODY_AFTER_2 = `<section class="section tight cta-band-section section-white"><div class="wrap"><div class="cta"><div><h2 class="h2">See SetBenchmark with your own roles</h2><p>Start a 14-day free trial with 10 assessment attempts, or book a 30-minute demo with our team.</p></div><div class="btns"><a class="btn btn-lime" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost on-dark">Book a demo</a></div></div></div></section>`;

export const Home: React.FC = () => {

  return (
    <>
      <SEOHead
        title="Technical Assessment &amp; Coding Test Platform | SetBenchmark"
        description="Hire developers on real skills with coding assessments, AI fluency tests, AI interviews and live coding interviews. Fair, proctored and reviewed by people."
        canonical="https://www.setbenchmark.com"
        jsonLd={[{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is SetBenchmark?", "acceptedAnswer": {"@type": "Answer", "text": "SetBenchmark is a technical assessment and interview platform. Companies use it to test developers with real-world coding tasks, assess how they work with AI, run AI and live coding interviews and map their engineering team's skills."}}, {"@type": "Question", "name": "How is SetBenchmark different from HackerRank?", "acceptedAnswer": {"@type": "Answer", "text": "SetBenchmark focuses on hiring for the AI era: tasks can allow or require AI, an agentic environment shows how candidates direct coding agents, integrity signals always go to a person and pricing is local in India, the Middle East and ANZ."}}, {"@type": "Question", "name": "Can SetBenchmark detect cheating with ChatGPT?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. It combines identity checks, proctoring, code similarity, paste and typing signals, and leak monitoring. Every signal is reviewed by a person before any decision."}}, {"@type": "Question", "name": "Who is SetBenchmark for?", "acceptedAnswer": {"@type": "Answer", "text": "Engineering and talent teams at product companies, enterprises, IT services and staffing firms, and campus recruiters, plus developers who want to practise and get certified."}}, {"@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Start a 14-day free trial with 10 assessment attempts. No credit card is needed."}}]}, {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SetBenchmark", "applicationCategory": "BusinessApplication", "applicationSubCategory": "Technical assessment and interview platform", "operatingSystem": "Web", "url": "https://www.setbenchmark.com", "publisher": {"@type": "Organization", "name": "Kombee Technologies (India) Pvt. Ltd."}, "offers": [{"@type": "Offer", "name": "Starter", "price": "828", "priceCurrency": "USD", "url": "https://www.setbenchmark.com/pricing"}]}, {"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
            <section className="hero-modern">
        <div className="hero-modern-grid" aria-hidden="true" />
        <div className="hero-modern-ambient" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-modern-stack">
            {/* Pill / Eyebrow Badge (Matching Reference Template) */}
            <div className="hero-modern-badge">
              <span className="hero-modern-badge-icon" aria-hidden="true">✦</span>
              <span>Now live: AI fluency &amp; agentic coding assessments</span>
              <svg className="hero-badge-arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            {/* Display Title */}
            <h1 className="hero-modern-title">
              Engineering Intelligence,<br />
              Built for Modern Tech Teams
            </h1>

            {/* Subtitle */}
            <p className="hero-modern-lead">
              Gain complete visibility into developer capability. Assess engineers with real-world repository tasks, AI fluency evaluations, and human-verified benchmarks that reflect actual work.
            </p>

            {/* Actions */}
            <div className="hero-modern-actions">
              <a className="btn-hero-primary" href="https://app.setbenchmark.com/signup">
                Start free trial
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <a className="btn-hero-secondary" href="/contact/">
                Book a demo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>

            {/* Proof Points */}
            <div className="hero-modern-proof">
              <div className="hero-proof-marquee">
                <div className="hero-proof-track">
                  <span className="hero-proof-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #26D07C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    14-day free trial
                  </span>
                  <span className="hero-proof-dot">·</span>
                  <span className="hero-proof-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #26D07C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    No credit card required
                  </span>
                  <span className="hero-proof-dot">·</span>
                  <span className="hero-proof-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #26D07C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    Local pricing in 6 currencies
                  </span>
                </div>
                {/* Duplicate track for seamless auto-scrolling ticker on mobile */}
                <div className="hero-proof-track hero-proof-track-dup" aria-hidden="true">
                  <span className="hero-proof-dot">·</span>
                  <span className="hero-proof-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #26D07C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    14-day free trial
                  </span>
                  <span className="hero-proof-dot">·</span>
                  <span className="hero-proof-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #26D07C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    No credit card required
                  </span>
                  <span className="hero-proof-dot">·</span>
                  <span className="hero-proof-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #26D07C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    Local pricing in 6 currencies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Central Elevated Showcase Window Template (Single Screen, No Tabs, Cards Preserved) */}
          <div className="hero-stage-backdrop">
            <div className="hero-template-window">
              {/* Window Chrome Header Bar */}
              <div className="hero-window-header">
                <div className="hero-window-controls" aria-hidden="true">
                  <span className="hero-window-dot dot-red" />
                  <span className="hero-window-dot dot-yellow" />
                  <span className="hero-window-dot dot-green" />
                </div>
                <div className="hero-window-url">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>app.setbenchmark.com/candidate/test-environment</span>
                </div>
                <div className="hero-window-meta">
                  <span className="hero-window-status-pill">
                    <span className="hero-window-live-pulse" />
                    Live Sandbox
                  </span>
                </div>
              </div>

              {/* Single Flagship Screen Mockup */}
              <div className="hero-window-viewport">
                <img
                  src="/images/product/C05-Coding.webp"
                  alt="Candidate Coding Test - in-browser IDE with live task description, code editor, and test runner"
                  width="1440"
                  height="900"
                  loading="eager"
                  decoding="async"
                  className="hero-window-screen-img"
                />
              </div>

              {/* Floating Card Image Assets from Application (Preserved) */}
              <img
                src="/images/hero/hero-card-benchmark-score.png"
                alt="Candidate Benchmark Score: 88/100 Top 5%"
                className="floating-hero-img floating-hero-img-left"
                width="322"
                height="276"
                loading="eager"
                decoding="async"
              />

              <img
                src="/images/hero/hero-card-ai-fluency.png"
                alt="AI Fluency Assessment: 94% Prompt Judgment"
                className="floating-hero-img floating-hero-img-right"
                width="344"
                height="287"
                loading="eager"
                decoding="async"
              />

              <img
                src="/images/hero/hero-pill-pricing.png"
                alt="Local pricing in INR, AED and USD with Mumbai data residency"
                className="floating-hero-img floating-hero-img-pill"
                width="348"
                height="82"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: BODY_BEFORE }} />
      <EditorialPlatformShowcase />
      <FeatureAccordionShowcase />
      <div dangerouslySetInnerHTML={{ __html: BODY_AFTER_1 }} />
      <RegionalPricingSection />
      <div dangerouslySetInnerHTML={{ __html: BODY_AFTER_2 }} />
      <FAQ
        className="section-alt"
        topic="SetBenchmark"
        items={[
      {
            "question": "What is SetBenchmark?",
            "answer": "SetBenchmark is a technical assessment and interview platform. Companies use it to test developers with real-world coding tasks, assess how they work with AI, run AI and live coding interviews and map their engineering team&#x27;s skills."
      },
      {
            "question": "How is SetBenchmark different from HackerRank?",
            "answer": "SetBenchmark focuses on hiring for the AI era: tasks can allow or require AI, an agentic environment shows how candidates direct coding agents, integrity signals always go to a person and pricing is local in India, the Middle East and ANZ."
      },
      {
            "question": "Can SetBenchmark detect cheating with ChatGPT?",
            "answer": "Yes. It combines identity checks, proctoring, code similarity, paste and typing signals, and leak monitoring. Every signal is reviewed by a person before any decision."
      },
      {
            "question": "Who is SetBenchmark for?",
            "answer": "Engineering and talent teams at product companies, enterprises, IT services and staffing firms, and campus recruiters, plus developers who want to practise and get certified."
      },
      {
            "question": "Is there a free trial?",
            "answer": "Yes. Start a 14-day free trial with 10 assessment attempts. No credit card is needed."
      }
]}
      />
    </>
  );
};

export default Home;
