import React, { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { FAQ } from '@/components/FAQ';

interface ShowcaseTab {
  id: string;
  label: string;
  shortLabel: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'coding',
    label: 'Candidate Coding Test',
    shortLabel: 'Coding Test',
    image: '/images/product/C05-Coding.webp',
    alt: 'Candidate Coding Test - in-browser IDE with live task description, code editor, and test runner',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'overview',
    label: 'Analytics & Overview',
    shortLabel: 'Overview',
    image: '/images/product/A01-Overview.webp',
    alt: 'Analytics and Overview Dashboard - hiring pipeline, completion rates, and benchmark percentiles',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: 'report',
    label: 'Benchmark Score Report',
    shortLabel: 'Score Report',
    image: '/images/product/H11-Report.webp',
    alt: 'Benchmark Score Report - candidate scorecard with skill breakdown, code review, and integrity signals',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: 'aifluency',
    label: 'AI Fluency Breakdown',
    shortLabel: 'AI Fluency',
    image: '/images/product/H14-AIFluency.webp',
    alt: 'AI Fluency Breakdown - assessment of how candidates prompt, inspect, and verify code with AI assistants',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
      </svg>
    ),
  },
];

const BODY_CONTENT = `<section class="section"><div class="wrap"><div class="head"><div class="eyebrow">Why SetBenchmark</div><h2 class="h2">AI changed how engineers work. Hiring should change too.</h2><p class="lead" style="margin-top:16px">Most coding tests still ban every tool and ask for puzzles from memory. SetBenchmark measures what matters now.</p></div><div class="grid g3"><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"></path></svg></div><h3 class="h3">Real work, not puzzles</h3><p>Repository tasks, APIs, SQL and system design that look like the job, so strong engineers can show what they do best.</p></div><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"></path></svg></div><h3 class="h3">Built for AI-era engineering</h3><p>Decide per task whether AI is not allowed, allowed or required, and see how candidates plan, prompt and verify.</p></div><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01"></path></svg></div><h3 class="h3">Integrity without false rejections</h3><p>Layered cheating signals with evidence, reviewed blind by a person. Nothing is rejected automatically.</p></div></div></div></section><section class="section alt"><div class="wrap"><div class="head"><div class="eyebrow">The platform</div><h2 class="h2">Everything you need to hire and grow engineers</h2></div><div class="grid g3"><a href="/product/coding-assessments/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"></path></svg></div><h3 class="h3">Coding assessments</h3><p>Screen developers with real-world coding tests, repository tasks and system design questions.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/product/ai-fluency-assessments/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"></path></svg></div><h3 class="h3">AI fluency assessments</h3><p>Assess how candidates plan, prompt, review and test with AI coding assistants and agents.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/product/ai-interviews/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3"></path></svg></div><h3 class="h3">AI interviews</h3><p>Run consistent first-round technical interviews with an AI interviewer that adapts its follow-ups.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/product/live-coding-interviews/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 20v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"></path></svg></div><h3 class="h3">Live coding interviews</h3><p>Run live coding and system design interviews with a shared editor, whiteboard, video and structured scorecards.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/product/proctoring-integrity/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4"></path></svg></div><h3 class="h3">Proctoring and integrity</h3><p>Stop cheating in online coding tests with camera, screen and identity checks, plagiarism and AI-use signals.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/product/skills-intelligence/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg></div><h3 class="h3">Skills intelligence</h3><p>Map your engineering team&#x27;s skills with verified assessments, find skill gaps by role and build internal mobility with practice paths.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/product/question-library/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4zM18 8h2v12"></path></svg></div><h3 class="h3">Question library</h3><p>Use thousands of leak-checked coding, SQL, system design and AI-task questions mapped to skills and levels, or write your own private questions.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/integrations/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0V8zM12 17v5"></path></svg></div><h3 class="h3">Integrations</h3><p>Greenhouse, Lever, Ashby, SmartRecruiters, Slack, calendars, SSO and a REST API.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/developers/" class="card card-link"><div class="icon l"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5c3 2 9 2 12 0v-5M22 9v6"></path></svg></div><h3 class="h3">Developer community</h3><p>Free practice, contests and certifications employers can verify.</p><span class="more">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a></div></div></section><section class="section"><div class="wrap"><div class="split"><div><div class="eyebrow">AI fluency</div><h2 class="h2">See how candidates work with AI</h2><p class="lead" style="margin-top:16px">Give candidates a real task and a built-in AI assistant. Review every prompt, suggestion and test run, and score judgement with a published rubric.</p><ul class="checks"><li><span class="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5 9-10"></path></svg></span>AI not allowed, allowed or required, per task</li><li><span class="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5 9-10"></path></svg></span>Agentic tasks with a full repository and coding agent</li><li><span class="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5 9-10"></path></svg></span>Traps where the AI is wrong</li></ul></div><div class="shot"><img src="/images/product/C06-AIAllowed.webp" alt="AI-allowed coding task with assistant panel" width="1440" height="900" loading="lazy" decoding="async"/></div></div><div class="split rev"><div><div class="eyebrow">Integrity</div><h2 class="h2">Catch cheating without failing honest people</h2><p class="lead" style="margin-top:16px">Identity checks, proctoring, code similarity and AI-use signals, each with evidence. A reviewer who can&#x27;t see the score decides.</p><ul class="checks"><li><span class="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5 9-10"></path></svg></span>No automatic rejections, ever</li><li><span class="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5 9-10"></path></svg></span>Code playback and side-by-side comparison</li><li><span class="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5 9-10"></path></svg></span>Leak monitoring and rotating question variants</li></ul></div><div class="shot"><img src="/images/product/H13-Integrity.webp" alt="Integrity review with signals and evidence" width="1440" height="900" loading="lazy" decoding="async"/></div></div><div class="split"><div><div class="eyebrow">Decisions</div><h2 class="h2">Reports hiring managers actually read</h2><p class="lead" style="margin-top:16px">A one-page report with skill scores against the role profile, code quality notes and how the candidate compares, shareable with your ATS.</p></div><div class="shot"><img src="/images/product/H11-Report.webp" alt="Candidate report with skill breakdown" width="1440" height="900" loading="lazy" decoding="async"/></div></div></div></section><section class="section dark"><div class="wrap"><div class="head"><div class="eyebrow">How it works</div><h2 class="h2">From job description to shortlist in four steps</h2></div><div class="steps-grid">
  <div class="step-card">
    <span class="step-badge">01</span>
    <h3 class="step-title">Choose or draft a test</h3>
    <p class="step-desc">Start from a role template, a skill test or your job description.</p>
  </div>
  <div class="step-card">
    <span class="step-badge">02</span>
    <h3 class="step-title">Invite candidates</h3>
    <p class="step-desc">Send invites from SetBenchmark or your ATS, with branding and reminders.</p>
  </div>
  <div class="step-card">
    <span class="step-badge">03</span>
    <h3 class="step-title">Candidates take it</h3>
    <p class="step-desc">A clear, accessible experience with practice questions and adjustments.</p>
  </div>
  <div class="step-card">
    <span class="step-badge">04</span>
    <h3 class="step-title">Review and decide</h3>
    <p class="step-desc">Scored reports, code playback and integrity review, then interviews.</p>
  </div>
</div>

<div class="principles-container">
  <h3 class="principles-heading">Core Principles</h3>
  <div class="principles-grid">
    <div class="principle-column">
      <div class="principle-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8F25A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <h4 class="principle-title">People decide</h4>
      <p class="principle-desc">AI scores, summarises and flags. A person makes every hiring decision and records why.</p>
    </div>

    <div class="principle-column">
      <div class="principle-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8F25A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1-4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      </div>
      <h4 class="principle-title">Fair by design</h4>
      <p class="principle-desc">Job-relevant tasks, adjustments on request and fairness reports that check for group gaps.</p>
    </div>

    <div class="principle-column">
      <div class="principle-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8F25A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      </div>
      <h4 class="principle-title">Private by default</h4>
      <p class="principle-desc">Clear consent, short retention, no biometric storage. Built for India&#x27;s DPDP Act and GDPR.</p>
    </div>
  </div>
</div></div></section><section class="section"><div class="wrap"><div class="head"><div class="eyebrow">Solutions</div><h2 class="h2">Built for the way you hire</h2></div><div class="grid g4"><a href="/solutions/campus-hiring/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5c3 2 9 2 12 0v-5M22 9v6"></path></svg></div><h3 class="h3">Campus hiring</h3><p>Invite thousands of students across colleges, run proctored coding and aptitude tests on the same day and get a ranked, fair shortlist the same evening.</p></a><a href="/solutions/enterprise-tech-hiring/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 21V5l8-3v19M12 8h8v13M8 9h.01M8 13h.01M8 17h.01M16 12h.01M16 16h.01M2 21h20"></path></svg></div><h3 class="h3">Enterprise tech hiring</h3><p>Role profiles, shared question libraries and structured scorecards give every team the same standard.</p></a><a href="/solutions/it-services-staffing/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"></path></svg></div><h3 class="h3">IT services and staffing</h3><p>Verify skills before you submit a profile, share a trusted report with the client and staff projects from your bench with confidence.</p></a><a href="/solutions/startups/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 15c-1 1-2 5-2 5s4-1 5-2M14 4c3-1 6 0 6 0s1 3 0 6l-7 7-6-6 7-7zM15 9h.01"></path></svg></div><h3 class="h3">Startups</h3><p>Paste a job description, get a ready-to-send assessment and let SetBenchmark screen applicants while you build.</p></a></div></div></section><section class="section alt"><div class="wrap"><div class="split"><div><div class="eyebrow">Skill tests</div><h2 class="h2">Ready-made tests for every engineering role</h2><p class="lead" style="margin-top:16px">Start from a validated test for the stack you hire for, then make it your own.</p><div class="btns" style="margin-top:24px"><a href="/skill-tests/" class="btn btn-primary">Browse skill tests</a></div></div><div class="tags"><a href="/skill-tests/java/" class="tag">Java coding test</a><a href="/skill-tests/python/" class="tag">Python coding test</a><a href="/skill-tests/javascript/" class="tag">JavaScript test</a><a href="/skill-tests/react/" class="tag">React test</a><a href="/skill-tests/nodejs/" class="tag">Node.js test</a><a href="/skill-tests/sql/" class="tag">SQL test</a><a href="/skill-tests/golang/" class="tag">Go (Golang) coding test</a><a href="/skill-tests/data-structures-algorithms/" class="tag">Data structures and algorithms test</a><a href="/skill-tests/system-design/" class="tag">System design interview test</a><a href="/skill-tests/devops/" class="tag">DevOps and cloud test</a><a href="/skill-tests/data-science/" class="tag">Data science test</a><a href="/skill-tests/aws/" class="tag">AWS skills test</a></div></div></div></section><section class="section"><div class="wrap"><div class="head"><div class="eyebrow">Local pricing and support</div><h2 class="h2">Built in India. Ready for the Middle East and ANZ.</h2><p class="lead" style="margin-top:16px">Plans from ₹3,999 a month in India and US$69 a month globally, billed in your currency.</p></div><div class="grid g4" style="grid-template-columns:repeat(auto-fit, minmax(200px, 1fr))"><a href="/india/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"></path></svg></div><h3 class="h3">India</h3><p>Pricing in INR</p></a><a href="/uae/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"></path></svg></div><h3 class="h3">United Arab Emirates</h3><p>Pricing in AED</p></a><a href="/saudi-arabia/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"></path></svg></div><h3 class="h3">Saudi Arabia</h3><p>Pricing in SAR</p></a><a href="/australia/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"></path></svg></div><h3 class="h3">Australia</h3><p>Pricing in AUD</p></a><a href="/new-zealand/" class="card card-link"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"></path></svg></div><h3 class="h3">New Zealand</h3><p>Pricing in NZD</p></a></div></div></section><section class="section tight"><div class="wrap"><div class="cta"><div><h2 class="h2">See SetBenchmark with your own roles</h2><p>Start a 14-day free trial with 10 assessment attempts, or book a 30-minute demo with our team.</p></div><div class="btns"><a class="btn btn-lime" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost on-dark">Book a demo</a></div></div></div></section>`;

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEOHead
        title="Technical Assessment &amp; Coding Test Platform | SetBenchmark"
        description="Hire developers on real skills with coding assessments, AI fluency tests, AI interviews and live coding interviews. Fair, proctored and reviewed by people."
        canonical="https://www.setbenchmark.com"
        jsonLd={[{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is SetBenchmark?", "acceptedAnswer": {"@type": "Answer", "text": "SetBenchmark is a technical assessment and interview platform. Companies use it to test developers with real-world coding tasks, assess how they work with AI, run AI and live coding interviews and map their engineering team's skills."}}, {"@type": "Question", "name": "How is SetBenchmark different from HackerRank?", "acceptedAnswer": {"@type": "Answer", "text": "SetBenchmark focuses on hiring for the AI era: tasks can allow or require AI, an agentic environment shows how candidates direct coding agents, integrity signals always go to a person and pricing is local in India, the Middle East and ANZ."}}, {"@type": "Question", "name": "Can SetBenchmark detect cheating with ChatGPT?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. It combines identity checks, proctoring, code similarity, paste and typing signals, and leak monitoring. Every signal is reviewed by a person before any decision."}}, {"@type": "Question", "name": "Who is SetBenchmark for?", "acceptedAnswer": {"@type": "Answer", "text": "Engineering and talent teams at product companies, enterprises, IT services and staffing firms, and campus recruiters, plus developers who want to practise and get certified."}}, {"@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Start a 14-day free trial with 10 assessment attempts. No credit card is needed."}}]}, {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SetBenchmark", "applicationCategory": "BusinessApplication", "applicationSubCategory": "Technical assessment and interview platform", "operatingSystem": "Web", "url": "https://www.setbenchmark.com", "publisher": {"@type": "Organization", "name": "Kombee Technologies (India) Pvt. Ltd."}, "offers": [{"@type": "Offer", "name": "Starter", "price": "828", "priceCurrency": "USD", "url": "https://www.setbenchmark.com/pricing"}]}, {"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
      <section className="hero-modern">
        <div className="hero-modern-ambient" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-modern-stack">
            {/* Pill / Eyebrow Badge */}
            <div className="hero-modern-badge">
              <span className="hero-modern-badge-dot" />
              <span>Technical Assessment &amp; Benchmarking Platform</span>
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
              <span className="hero-proof-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#385400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                14-day free trial
              </span>
              <span className="hero-proof-dot">·</span>
              <span className="hero-proof-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#385400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                No credit card required
              </span>
              <span className="hero-proof-dot">·</span>
              <span className="hero-proof-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#385400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Local pricing in 6 currencies
              </span>
            </div>
          </div>

          {/* Atmospheric Stage Backdrop with Ocean Texture & Floating Mockup */}
          <div className="hero-stage-backdrop">
            <div className="hero-modern-showcase">
              {/* Tab Switcher */}
              <div className="hero-showcase-tabbar" role="tablist" aria-label="Showcase Views">
                {SHOWCASE_TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={'tab-' + tab.id}
                    aria-selected={activeTab === idx}
                    aria-controls={'panel-' + tab.id}
                    className={'hero-tab-pill' + (activeTab === idx ? ' is-active' : '')}
                    onClick={() => setActiveTab(idx)}
                  >
                    <span className="hero-tab-icon">{tab.icon}</span>
                    <span className="hero-tab-label-desktop">{tab.label}</span>
                    <span className="hero-tab-label-mobile">{tab.shortLabel}</span>
                  </button>
                ))}
              </div>

              {/* Viewport with Current Screenshot */}
              <div
                className="hero-showcase-viewport"
                id={'panel-' + SHOWCASE_TABS[activeTab].id}
                role="tabpanel"
                aria-labelledby={'tab-' + SHOWCASE_TABS[activeTab].id}
              >
                {SHOWCASE_TABS.map((tab, idx) => (
                  <img
                    key={tab.id}
                    src={tab.image}
                    alt={tab.alt}
                    width="1440"
                    height="900"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={activeTab === idx ? 'is-active' : ''}
                  />
                ))}
              </div>

              {/* Floating Card Image Assets from Application */}
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
                src="/images/hero/hero-bubble-verified.png"
                alt="Human-Reviewed Verification Bubble"
                className="floating-hero-img floating-hero-img-bubble"
                width="48"
                height="48"
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

      <div dangerouslySetInnerHTML={{ __html: BODY_CONTENT }} />
      <FAQ
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
