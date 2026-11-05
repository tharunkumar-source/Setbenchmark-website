import React from 'react';
import { SEOHead } from '@/components/SEOHead';

const RAW_CONTENT = `<article>
<section class="phero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><span aria-current="page">Fair assessment checklist</span></li>
      </ol>
    </nav>
    <div class="phero-grid">
      <div>
        <div class="eyebrow">Assessment design</div>
        <h1 class="h1">How to design a fair coding assessment: a checklist</h1>
        <p class="lead">Fair assessments are also better predictors. Use this 12-point rubric before you send your next coding test to ensure unbiased, job-relevant screening.</p>
        <div class="btns">
          <a class="btn btn-primary" href="https://app.setbenchmark.com/signup">Start free trial</a>
          <a href="/contact/" class="btn btn-ghost">Book a demo</a>
        </div>
      </div>
      <div class="shot">
        <img src="/images/product/A03-Fairness.webp" alt="Fairness reporting and adverse impact analytics in SetBenchmark" width="1440" height="900" loading="eager" decoding="async"/>
      </div>
    </div>
  </div>
</section>

<div class="section" style="padding-top:56px">
  <div class="wrap">
    <div class="checklist-container">
      <div>
        <p class="lead" style="color:var(--text-1);font-size:18px;line-height:1.7;margin-bottom:28px">
          A fair assessment measures the skills the job needs, gives every candidate the same chance and treats people with respect. Use this 12-point rubric before sending your next test.
        </p>
      </div>

      <!-- 4 Stages Summary Cards -->
      <div class="checklist-intro-bar">
        <div class="checklist-stage-card">
          <span class="badge" >Stage 01</span>
          <div class="stage-name">Task Scope & Realism</div>
          <p class="stage-desc">Items 01–03: Role mapping, repository tasks & realistic time limits.</p>
        </div>
        <div class="checklist-stage-card">
          <span class="badge" >Stage 02</span>
          <div class="stage-name">Candidate Experience</div>
          <p class="stage-desc">Items 04–06: Transparent guidance, language choices & accommodations.</p>
        </div>
        <div class="checklist-stage-card">
          <span class="badge" >Stage 03</span>
          <div class="stage-name">AI & Evaluation Integrity</div>
          <p class="stage-desc">Items 07–10: Explicit AI rules, blind rubrics & human review.</p>
        </div>
        <div class="checklist-stage-card">
          <span class="badge" >Stage 04</span>
          <div class="stage-name">Fairness & Closure</div>
          <p class="stage-desc">Items 11–12: Adverse impact auditing & constructive candidate feedback.</p>
        </div>
      </div>

      <!-- 12-Point Checklist Table -->
      <div class="checklist-table-card">
        <table class="checklist-table" aria-label="12-Point Fair Assessment Rubric">
          <thead>
            <tr>
              <th style="width:70px">#</th>
              <th style="width:130px">Stage</th>
              <th style="width:45%">Checklist Standard & Rule</th>
              <th>Why It Matters (Hiring Impact)</th>
              <th style="width:110px">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="checklist-circle-num">01</div>
              </td>
              <td>
                <span class="checklist-tag">Task Design</span>
              </td>
              <td>
                <div class="checklist-title">Role Profile Alignment</div>
                <p class="checklist-desc">Every task maps to a skill in the role profile. Remove anything that doesn't.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Eliminates Noise:</strong> Prevents trick questions, brainteasers, and puzzles that bear no relation to daily work.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">02</div>
              </td>
              <td>
                <span class="checklist-tag">Task Design</span>
              </td>
              <td>
                <div class="checklist-title">Real-World Task Fidelity</div>
                <p class="checklist-desc">Tasks look like the real job: a small repository, a real API, real data.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Job Predictive:</strong> Evaluates actual software engineering ability—debugging, APIs, and architecture—rather than memorization.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">03</div>
              </td>
              <td>
                <span class="checklist-tag">Task Design</span>
              </td>
              <td>
                <div class="checklist-title">Realistic Time Budget</div>
                <p class="checklist-desc">The total time is under 90 minutes for most roles, and time limits are realistic.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Respects Candidate Time:</strong> Keeps completion rates high (80%+) and prevents candidate fatigue from skewing results.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">04</div>
              </td>
              <td>
                <span class="checklist-tag">Candidate UX</span>
              </td>
              <td>
                <div class="checklist-title">Clear Instructions & Practice</div>
                <p class="checklist-desc">Instructions are clear, with an example and a practice question.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Equal Starting Line:</strong> Tests technical competency rather than ability to decipher confusing problem prompts.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">05</div>
              </td>
              <td>
                <span class="checklist-tag">Candidate UX</span>
              </td>
              <td>
                <div class="checklist-title">Programming Language Flexibility</div>
                <p class="checklist-desc">Candidates can use the programming language they know, unless the role needs a specific one.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Removes Syntax Barriers:</strong> Allows strong engineers to demonstrate logic, algorithms, and architecture in their best language.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">06</div>
              </td>
              <td>
                <span class="checklist-tag">AI Policy</span>
              </td>
              <td>
                <div class="checklist-title">Transparent AI Policy</div>
                <p class="checklist-desc">The AI policy for each task is stated clearly: not allowed, allowed or required.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>No Guesswork:</strong> Clarifies boundaries upfront so candidates know exactly when AI assistants or agents are encouraged or restricted.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">07</div>
              </td>
              <td>
                <span class="checklist-tag">Scoring & Rubric</span>
              </td>
              <td>
                <div class="checklist-title">Objective Scoring & Rubrics</div>
                <p class="checklist-desc">Scoring uses hidden tests plus a written rubric for anything open-ended.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Standardized Marking:</strong> Every candidate is measured against identical criteria, eliminating subjective reviewer preferences.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">08</div>
              </td>
              <td>
                <span class="checklist-tag">Scoring & Rubric</span>
              </td>
              <td>
                <div class="checklist-title">Blind Review of Submissions</div>
                <p class="checklist-desc">Reviewers can't see names or photos while grading open answers, where possible.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Bias Prevention:</strong> Protects against unconscious demographic, institutional, and pedigree bias during evaluation.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">09</div>
              </td>
              <td>
                <span class="checklist-tag">Accommodations</span>
              </td>
              <td>
                <div class="checklist-title">Accessible Accommodations</div>
                <p class="checklist-desc">Adjustments like extra time, text mode or camera-free options are easy to request.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Inclusion by Design:</strong> Ensures candidates with disabilities, neurodiversity, or hardware limits have equal access.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">10</div>
              </td>
              <td>
                <span class="checklist-tag">Integrity</span>
              </td>
              <td>
                <div class="checklist-title">Human Review for Integrity Signals</div>
                <p class="checklist-desc">Integrity signals go to a person for review; nothing is rejected automatically.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Zero False Bans:</strong> Network drops, dual monitors, or permitted docs lookups are verified with evidence by a human reviewer.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">11</div>
              </td>
              <td>
                <span class="checklist-tag">Fairness Audit</span>
              </td>
              <td>
                <div class="checklist-title">Group Pass Rate Monitoring</div>
                <p class="checklist-desc">You monitor pass rates by group (from optional, anonymous data) and investigate gaps.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Adverse Impact Prevention:</strong> Proactively surfaces unintended bias in specific questions before they harm talent pools.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div class="checklist-circle-num">12</div>
              </td>
              <td>
                <span class="checklist-tag">Fairness Audit</span>
              </td>
              <td>
                <div class="checklist-title">Candidate Closure & Feedback</div>
                <p class="checklist-desc">Candidates get a clear outcome and, ideally, some feedback.</p>
              </td>
              <td>
                <div class="checklist-impact"><strong>Candidate Trust:</strong> Builds a positive employer brand and provides candidates closure and learning value.</div>
              </td>
              <td>
                <span class="checklist-status-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"></path></svg>
                  Verified
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Why Fairness and Accuracy Go Together Section -->
      <div class="fairness-highlight-box">
        <div class="fairness-section-head">
          <h2 class="fairness-section-title">Why fairness and accuracy go together</h2>
          <p class="fairness-highlight-lead">
            Tasks that don't relate to the job add noise. Noise hurts strong candidates who are unlucky on the day and lets weaker ones through. Removing it makes the test both fairer and more predictive.
          </p>
        </div>

        <div class="fairness-compare-grid">
          <!-- Card 1: Light Theme - Legacy / Avoid -->
          <div class="fairness-card fairness-card-light">
            <div class="fairness-card-header">
              <div class="fairness-card-badge-group">
                <svg class="fairness-card-badge-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                <span class="fairness-card-badge-text">LEGACY ASSESSMENT MODEL</span>
              </div>
              <span class="fairness-card-status-pill muted">High Noise &amp; Friction</span>
            </div>

            <h3 class="fairness-card-title">High-Noise Screening (Avoid)</h3>
            <p class="fairness-card-desc">
              Unrealistic trick puzzles, artificial speed pressure, and opaque automated disqualifications filter out senior engineering talent.
            </p>

            <!-- 3-metric strip -->
            <div class="fairness-metric-strip light">
              <div class="fairness-metric-col">
                <span class="fairness-metric-label">SIGNAL</span>
                <span class="fairness-metric-value">Low / Noisy</span>
              </div>
              <div class="fairness-metric-col">
                <span class="fairness-metric-label">SENIOR DROPOUT</span>
                <span class="fairness-metric-value">~52% Drop</span>
              </div>
              <div class="fairness-metric-col">
                <span class="fairness-metric-label">AI INTEGRITY</span>
                <span class="fairness-metric-value">Opaque Bans</span>
              </div>
            </div>

            <div class="fairness-card-list-title">WHAT CANDIDATES EXPERIENCE:</div>
            <ul class="fairness-card-list">
              <li>
                <span class="fairness-icon-cross">✕</span>
                <span>Unrelated algorithm puzzles memorized from trick catalogs</span>
              </li>
              <li>
                <span class="fairness-icon-cross">✕</span>
                <span>Artificial time limits testing typing speed over system architecture</span>
              </li>
              <li>
                <span class="fairness-icon-cross">✕</span>
                <span>Secret AI detection heuristics that falsely flag honest candidates</span>
              </li>
              <li>
                <span class="fairness-icon-cross">✕</span>
                <span>Subjective manual grading across uncalibrated reviewers</span>
              </li>
            </ul>

            <div class="fairness-card-footer">
              <a href="/compare/hackerrank-alternatives/" class="fairness-btn-light">Why noisy tests fail senior candidates &rarr;</a>
              <a href="/blog/assessing-developers-in-the-age-of-ai/" class="fairness-card-sublink">View algorithmic testing failure points &rarr;</a>
            </div>
          </div>

          <!-- Card 2: Dark Theme with SetBenchmark Ink & Lime Branding (NOT purple!) -->
          <div class="fairness-card fairness-card-dark">
            <div class="fairness-card-header">
              <div class="fairness-card-badge-group brand">
                <svg class="fairness-card-badge-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span class="fairness-card-badge-text">SETBENCHMARK STANDARD</span>
              </div>
              <span class="fairness-card-status-pill brand">
                <span class="fairness-pulse-dot"></span>
                Recommended Benchmark
              </span>
            </div>

            <h3 class="fairness-card-title brand">High-Signal Engineering Benchmarks</h3>
            <p class="fairness-card-desc brand">
              Practical repository tasks, realistic coding assistant policies, and double-blind human scorecards deliver predictive, defensible hiring signal.
            </p>

            <!-- 3-metric strip -->
            <div class="fairness-metric-strip dark">
              <div class="fairness-metric-col">
                <span class="fairness-metric-label brand">SIGNAL ACCURACY</span>
                <span class="fairness-metric-value brand">94%+ Job Match</span>
              </div>
              <div class="fairness-metric-col">
                <span class="fairness-metric-label brand">REVIEW INTEGRITY</span>
                <span class="fairness-metric-value brand">Double-Blind</span>
              </div>
              <div class="fairness-metric-col">
                <span class="fairness-metric-label brand">COMPLETION RATE</span>
                <span class="fairness-metric-value brand">88%+ Completion</span>
              </div>
            </div>

            <div class="fairness-card-list-title brand">WHAT YOU MEASURE:</div>
            <ul class="fairness-card-list brand">
              <li>
                <span class="fairness-icon-check">✓</span>
                <span>Practical repository tasks, real production APIs, and system design</span>
              </li>
              <li>
                <span class="fairness-icon-check">✓</span>
                <span>Clear per-task AI policies (allowed, not allowed, or required agentic)</span>
              </li>
              <li>
                <span class="fairness-icon-check">✓</span>
                <span>Double-blind grading rubrics with recorded candidate playback</span>
              </li>
              <li>
                <span class="fairness-icon-check">✓</span>
                <span>Automatic adverse impact tracking and demographic group fairness audits</span>
              </li>
            </ul>

            <div class="fairness-card-footer">
              <a href="https://app.setbenchmark.com/signup" class="fairness-btn-brand">Try high-signal assessments free &rarr;</a>
              <a href="/solutions/enterprise-tech-hiring/" class="fairness-card-sublink brand">Book architecture walkthrough with an engineer &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Bottom Guarantee Banner (Matches reference design) -->
        <div class="fairness-guarantee-banner">
          <div class="fairness-guarantee-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
          </div>
          <div class="fairness-guarantee-text">
            <strong>Auditable Fairness Guarantee:</strong> Every benchmark task is reviewed for group disparity, AI detection is evidence-based with blind human review, and candidate adjustments are supported by default.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</article>

<section class="section alt tight">
  <div class="wrap">
    <div class="head">
      <h2 class="h2">Read next</h2>
    </div>
    <div class="grid g3">
      <a href="/product/coding-assessments/" class="card card-link">
        <h3 class="h3">Coding assessments</h3>
        <p>Screen developers with real-world tasks</p>
        <span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
      </a>
      <a href="/solutions/campus-hiring/" class="card card-link">
        <h3 class="h3">Campus hiring</h3>
        <p>Assess thousands of graduates fairly</p>
        <span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
      </a>
      <a href="/blog/assessing-developers-in-the-age-of-ai/" class="card card-link">
        <h3 class="h3">How to assess developers in the age of AI</h3>
        <p>AI assistants write a lot of code now. The skills that separate strong engineers have moved to planning, reviewing and verifying. Your assessments should move with them.</p>
        <span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
      </a>
    </div>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <div class="cta">
      <div>
        <h2 class="h2">See SetBenchmark with your own roles</h2>
        <p>Start a 14-day free trial with 10 assessment attempts, or book a 30-minute demo with our team.</p>
      </div>
      <div class="btns">
        <a class="btn btn-lime" href="https://app.setbenchmark.com/signup">Start free trial</a>
        <a href="/contact/" class="btn btn-ghost on-dark">Book a demo</a>
      </div>
    </div>
  </div>
</section>`;

export const FairCodingAssessment: React.FC = () => {
  return (
    <>
      <SEOHead
        title="How to Design a Fair Coding Assessment: 12-Point Checklist"
        description="A 12-point checklist for fair, predictive coding assessments: job-relevant tasks, time limits, clear rubrics, accessibility, AI policy and fairness monitoring."
        canonical="https://www.setbenchmark.com/blog/how-to-design-a-fair-coding-assessment"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.setbenchmark.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "How to design a fair coding assessment: a checklist", "item": "https://www.setbenchmark.com/blog/how-to-design-a-fair-coding-assessment" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How to Design a Fair Coding Assessment: 12-Point Checklist",
            "description": "A 12-point checklist for fair, predictive coding assessments: job-relevant tasks, time limits, clear rubrics, accessibility, AI policy and fairness monitoring.",
            "mainEntityOfPage": "https://www.setbenchmark.com/blog/how-to-design-a-fair-coding-assessment",
            "datePublished": "2026-10-30",
            "dateModified": "2026-10-30",
            "author": { "@type": "Organization", "name": "SetBenchmark" },
            "publisher": {
              "@type": "Organization",
              "name": "SetBenchmark",
              "logo": { "@type": "ImageObject", "url": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png" }
            },
            "image": "https://www.setbenchmark.com/og/setbenchmark-og.png"
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SetBenchmark",
            "legalName": "Kombee Technologies (India) Pvt. Ltd.",
            "url": "https://www.setbenchmark.com",
            "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png",
            "sameAs": []
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SetBenchmark",
            "url": "https://www.setbenchmark.com"
          }
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: RAW_CONTENT }} />
    </>
  );
};

export default FairCodingAssessment;
