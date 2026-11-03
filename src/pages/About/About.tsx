import React from 'react';
import { SEOHead } from '@/components/SEOHead';


const RAW_CONTENT = `<section class="phero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">About us</span></li></ol></nav><div class="phero-grid">
<div>
<div class="eyebrow">About us</div><h1 class="h1">We set a fair benchmark for engineering talent</h1><p class="lead">SetBenchmark is built by Kombee Technologies, a technology services company operating across India, the US, the Middle East and ANZ. We hire and deploy engineers every day, and we built the platform we wanted to use.</p><div class="btns"><a class="btn btn-primary" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost">Book a demo</a></div>
</div>
<div class="shot">
<img src="/images/product/A01-Overview.webp" alt="SetBenchmark platform overview and assessment benchmarks" width="1440" height="900" loading="eager" decoding="async"/>
</div>
</div></div></section><section class="section"><div class="wrap"><div class="split" style="align-items:start"><div><div class="head"><div class="eyebrow">Why we built it</div><h2 class="h2">Hiring engineers had stopped measuring the job</h2></div></div><div class="stack"><p class="lead">AI assistants and coding agents changed how software is written. Most assessments didn&#x27;t change: they still banned every tool and rewarded memorised puzzles, while new cheating tools made remote tests less trustworthy.</p><p class="lead">We believe the answer is better tests, not more surveillance: real tasks, a clear AI policy, signals reviewed by people and a respectful experience for every candidate. That is SetBenchmark.</p></div></div></div></section><section class="section alt"><div class="wrap"><div class="head"><div class="eyebrow">What we believe</div><h2 class="h2">Our principles</h2></div><div class="grid g2"><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"></path></svg></div><h3 class="h3">Test the real job</h3><p>Every task should map to work the person will actually do.</p></div><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"></path></svg></div><h3 class="h3">People decide</h3><p>Technology informs decisions. People make them, and record why.</p></div><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01"></path></svg></div><h3 class="h3">Fair to everyone</h3><p>Adjustments on request, fairness monitoring and clear outcomes.</p></div><div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 20v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"></path></svg></div><h3 class="h3">Private by default</h3><p>Collect less, keep it briefly and give candidates control.</p></div></div></div></section><section class="section tight"><div class="wrap"><div class="cta"><div><h2 class="h2">Talk to the team behind SetBenchmark</h2><p>Tell us how you hire today and we&#x27;ll show you how SetBenchmark would work for your roles.</p></div><div class="btns"><a class="btn btn-lime" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost on-dark">Book a demo</a></div></div></div></section>`;

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About SetBenchmark | Built by Kombee Technologies"
        description="SetBenchmark is built by Kombee Technologies to help companies hire and grow engineers on real skills, fairly, in the age of AI."
        canonical="https://www.setbenchmark.com/about"
        jsonLd={[{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com"}, {"@type": "ListItem", "position": 2, "name": "About us", "item": "https://www.setbenchmark.com/about"}]}, {"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
      <div dangerouslySetInnerHTML={{ __html: RAW_CONTENT }} />
    </>
  );
};

export default About;
