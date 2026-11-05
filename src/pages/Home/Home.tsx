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
</div></section><section class="section principles-section section-mint"><div class="wrap">
  <div class="principles-band-head">
    <div class="eyebrow" style="color:var(--brand-dark)">Platform Governance</div>
    <h2 class="h2 principles-band-title">Core Principles Behind Every Benchmark</h2>
    <p class="lead principles-band-lead">Three non-negotiable standards that protect your engineering hiring from black-box automated rejections.</p>
  </div>

  <div class="principles-trio-grid">
    <!-- Principle 1: White Card with Rich Product Mockup Image -->
    <div class="principle-trio-card card-white">
      <div class="principle-trio-visual">
        <img class="principle-trio-img" src="/images/stock/people-decide.webp" alt="Engineering manager and software engineer collaboratively reviewing code" width="480" height="300" loading="eager" decoding="async" />
      </div>
      <h3 class="principle-trio-title">People decide</h3>
      <p class="principle-trio-desc">AI scores correctness, summarizes diffs, and flags anomalies. A human engineering manager makes every hiring decision and records the rationale.</p>
      <div class="principle-trio-pill">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Zero automated rejections</span>
      </div>
    </div>

    <!-- Principle 2: Middle Dark Card with Adverse Impact & Fairness Audit Visual -->
    <div class="principle-trio-card card-dark">
      <div class="principle-trio-visual">
        <img class="principle-trio-img" src="/images/stock/fair-by-design.webp" alt="Diverse engineering team collaborating together in modern tech workspace" width="480" height="300" loading="eager" decoding="async" />
      </div>
      <h3 class="principle-trio-title">Fair by design</h3>
      <p class="principle-trio-desc">Job-relevant repository tasks, accessible accommodations on request, and automatic fairness audits that check for demographic group disparity.</p>
      <div class="principle-trio-pill dark-pill">
        <span class="dark-pill-dot">●</span>
        <span>Continuous adverse impact audits</span>
      </div>
    </div>

    <!-- Principle 3: White Card with Privacy & DPDP Compliance Visual -->
    <div class="principle-trio-card card-white">
      <div class="principle-trio-visual">
        <img class="principle-trio-img" src="/images/stock/private-by-default.webp" alt="Hardware security lock and data privacy encryption protection" width="480" height="300" loading="eager" decoding="async" />
      </div>
      <h3 class="principle-trio-title">Private by default</h3>
      <p class="principle-trio-desc">Clear candidate consent, short audit retention, and zero biometric storage. Built from the ground up for India's DPDP Act and GDPR compliance.</p>
      <div class="principle-trio-pill">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>India DPDP Act &amp; GDPR compliant</span>
      </div>
    </div>
  </div>
</div></section><section class="section solutions-section section-alt"><div class="wrap"><div class="head"><div class="eyebrow">Solutions</div><h2 class="h2">Built for the way you hire</h2></div><div class="grid g4"><a href="/solutions/campus-hiring/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5c3 2 9 2 12 0v-5M22 9v6"></path></svg></div><h3 class="h3">Campus hiring</h3><p>Invite thousands of students across colleges, run proctored coding and aptitude tests on the same day and get a ranked, fair shortlist the same evening.</p></a><a href="/solutions/enterprise-tech-hiring/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 21V5l8-3v19M12 8h8v13M8 9h.01M8 13h.01M8 17h.01M16 12h.01M16 16h.01M2 21h20"></path></svg></div><h3 class="h3">Enterprise tech hiring</h3><p>Role profiles, shared question libraries and structured scorecards give every team the same standard.</p></a><a href="/solutions/it-services-staffing/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"></path></svg></div><h3 class="h3">IT services and staffing</h3><p>Verify skills before you submit a profile, share a trusted report with the client and staff projects from your bench with confidence.</p></a><a href="/solutions/startups/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 15c-1 1-2 5-2 5s4-1 5-2M14 4c3-1 6 0 6 0s1 3 0 6l-7 7-6-6 7-7zM15 9h.01"></path></svg></div><h3 class="h3">Startups</h3><p>Paste a job description, get a ready-to-send assessment and let SetBenchmark screen applicants while you build.</p></a></div></div></section><section class="section skill-tests-section skill-tests-dark">
  <div class="wrap">
    <div class="skill-tests-head center">
      <div class="eyebrow" style="color:var(--brand, #26D07C)">Skill Tests &amp; Benchmarks</div>
      <h2 class="h2 skill-tests-title">Ready-made tests for every engineering role</h2>
      <p class="lead skill-tests-lead">Start from a validated benchmark for the stack you hire for, or customize test cases to your team's bar.</p>
    </div>
  </div>

  <!-- Full-Width Auto-scrolling Marquee Track (pauses on hover, links to skill pages) -->
  <div class="skill-marquee-container" aria-label="Available programming language tests">
    <div class="skill-marquee-fade-left" aria-hidden="true"></div>
    <div class="skill-marquee-fade-right" aria-hidden="true"></div>

    <!-- Row 1: glides left -->
    <div class="skill-marquee-row">
      <div class="skill-marquee-track track-left">
        <!-- Set 1 -->
        <a href="/skill-tests/python/" class="skill-marquee-card" title="Python coding test">
          <img src="/images/skills/python.svg" alt="Python logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Python</span>
        </a>
        <a href="/skill-tests/react/" class="skill-marquee-card" title="React test">
          <img src="/images/skills/react.svg" alt="React logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">React</span>
        </a>
        <a href="/skill-tests/java/" class="skill-marquee-card" title="Java coding test">
          <img src="/images/skills/java.svg" alt="Java logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Java</span>
        </a>
        <a href="/skill-tests/golang/" class="skill-marquee-card" title="Go (Golang) coding test">
          <img src="/images/skills/golang.svg" alt="Go logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Go (Golang)</span>
        </a>
        <a href="/skill-tests/sql/" class="skill-marquee-card" title="PostgreSQL & SQL test">
          <img src="/images/skills/sql.svg" alt="PostgreSQL logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">PostgreSQL &amp; SQL</span>
        </a>
        <a href="/skill-tests/aws/" class="skill-marquee-card" title="AWS skills test">
          <img src="/images/skills/aws.svg" alt="AWS logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">AWS Cloud</span>
        </a>
        <a href="/skill-tests/javascript/" class="skill-marquee-card" title="TypeScript test">
          <img src="/images/skills/typescript.svg" alt="TypeScript logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">TypeScript</span>
        </a>

        <!-- Set 1 Duplicate for seamless infinite loop -->
        <a href="/skill-tests/python/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/python.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Python</span>
        </a>
        <a href="/skill-tests/react/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/react.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">React</span>
        </a>
        <a href="/skill-tests/java/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/java.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Java</span>
        </a>
        <a href="/skill-tests/golang/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/golang.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Go (Golang)</span>
        </a>
        <a href="/skill-tests/sql/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/sql.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">PostgreSQL &amp; SQL</span>
        </a>
        <a href="/skill-tests/aws/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/aws.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">AWS Cloud</span>
        </a>
        <a href="/skill-tests/javascript/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/typescript.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">TypeScript</span>
        </a>
      </div>
    </div>

    <!-- Row 2: glides right -->
    <div class="skill-marquee-row">
      <div class="skill-marquee-track track-right">
        <!-- Set 2 -->
        <a href="/skill-tests/javascript/" class="skill-marquee-card" title="JavaScript test">
          <img src="/images/skills/javascript.svg" alt="JavaScript logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">JavaScript</span>
        </a>
        <a href="/skill-tests/nodejs/" class="skill-marquee-card" title="Node.js test">
          <img src="/images/skills/nodejs.svg" alt="Node.js logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Node.js</span>
        </a>
        <a href="/skill-tests/devops/" class="skill-marquee-card" title="Docker & DevOps test">
          <img src="/images/skills/devops.svg" alt="Docker logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Docker &amp; DevOps</span>
        </a>
        <a href="/skill-tests/system-design/" class="skill-marquee-card" title="System Design interview test">
          <img src="/images/skills/systemdesign.svg" alt="System Design icon" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">System Design</span>
        </a>
        <a href="/skill-tests/data-science/" class="skill-marquee-card" title="Data Science test">
          <img src="/images/skills/datascience.svg" alt="Data Science logo" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Data Science &amp; Python</span>
        </a>
        <a href="/skill-tests/data-structures-algorithms/" class="skill-marquee-card" title="Data structures and algorithms test">
          <img src="/images/skills/dsa.svg" alt="Algorithms icon" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Algorithms &amp; DSA</span>
        </a>

        <!-- Set 2 Duplicate for seamless infinite loop -->
        <a href="/skill-tests/javascript/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/javascript.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">JavaScript</span>
        </a>
        <a href="/skill-tests/nodejs/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/nodejs.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Node.js</span>
        </a>
        <a href="/skill-tests/devops/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/devops.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Docker &amp; DevOps</span>
        </a>
        <a href="/skill-tests/system-design/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/systemdesign.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">System Design</span>
        </a>
        <a href="/skill-tests/data-science/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/datascience.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Data Science &amp; Python</span>
        </a>
        <a href="/skill-tests/data-structures-algorithms/" class="skill-marquee-card" aria-hidden="true" tabindex="-1">
          <img src="/images/skills/dsa.svg" alt="" width="24" height="24" class="skill-marquee-logo" loading="lazy" />
          <span class="skill-marquee-name">Algorithms &amp; DSA</span>
        </a>
      </div>
    </div>
  </div>

  <div class="wrap skill-tests-cta-wrap">
    <div class="btns center">
      <a href="/skill-tests/" class="btn btn-lime">Browse all 400+ skill tests &rarr;</a>
    </div>
  </div>
</section>`;

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

          {/* Realistic Hardware Device Mockup Stage */}
          <div className="hero-stage-backdrop">
            <div className="hero-device-wrapper">
              {/* Hardware Device Chassis (MacBook / Display Hardware Frame) */}
              <div className="hero-device-chassis">
                {/* Camera / Sensor Dot */}
                <div className="hero-device-camera" aria-hidden="true">
                  <span className="hero-device-lens" />
                </div>

                {/* Inner Screen Display */}
                <div className="hero-device-screen">
                  {/* Browser Chrome Header */}
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

                  {/* Half-Screen Viewport */}
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
                </div>

                {/* Laptop Base / Chin Lip */}
                <div className="hero-device-base" aria-hidden="true">
                  <div className="hero-device-notch" />
                </div>
              </div>

              {/* Floating Cards Hanging AROUND the Screen */}
              {/* Top-Left: Benchmark Score */}
              <img
                src="/images/hero/hero-card-benchmark-score.png"
                alt="Candidate Benchmark Score: 88/100 Top 5%"
                className="floating-hero-img floating-hero-img-left"
                width="322"
                height="276"
                loading="eager"
                decoding="async"
              />

              {/* Top-Right: AI Fluency Review */}
              <img
                src="/images/hero/hero-card-ai-fluency.png"
                alt="AI Fluency Assessment: 94% Prompt Judgment"
                className="floating-hero-img floating-hero-img-right"
                width="344"
                height="287"
                loading="eager"
                decoding="async"
              />

              {/* Bottom-Left: Integrity Verified Badge */}
              <img
                src="/images/hero/hero-badge-integrity.png"
                alt="Layered Cheating Signals with Blind Human Review"
                className="floating-hero-img floating-hero-img-integrity"
                width="267"
                height="84"
                loading="eager"
                decoding="async"
              />

              {/* Bottom-Right: Local Pricing Pill */}
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
