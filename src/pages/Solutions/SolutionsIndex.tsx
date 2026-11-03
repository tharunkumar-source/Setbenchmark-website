import React from 'react';
import { SEOHead } from '@/components/SEOHead';


const RAW_CONTENT = `<section class="phero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">Solutions</span></li></ol></nav><div class="phero-grid">
<div>
<div class="eyebrow">Solutions</div><h1 class="h1">Technical hiring that fits how you hire</h1><p class="lead">Whether you run campus drives for thousands, hire senior engineers across countries or prove skills to clients, SetBenchmark adapts to your process.</p><div class="btns"><a class="btn btn-primary" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost">Book a demo</a></div>
</div>
<div class="shot">
<img src="/images/product/H08-Pipeline.webp" alt="Technical hiring pipelines and workflows in SetBenchmark" width="1440" height="900" loading="eager" decoding="async"/>
</div>
</div></div></section><section class="section"><div class="wrap"><div class="grid g2"><a href="/solutions/campus-hiring/" class="card card-link"><h2 class="h3">Campus hiring</h2><p>Invite thousands of students across colleges, run proctored coding and aptitude tests on the same day and get a ranked, fair shortlist the same evening.</p><span class="more">See how <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/solutions/enterprise-tech-hiring/" class="card card-link"><h2 class="h3">Enterprise tech hiring</h2><p>Role profiles, shared question libraries and structured scorecards give every team the same standard. SSO, permissions, audit logs and your ATS keep it all governed.</p><span class="more">See how <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/solutions/it-services-staffing/" class="card card-link"><h2 class="h3">IT services and staffing</h2><p>Verify skills before you submit a profile, share a trusted report with the client and staff projects from your bench with confidence. Fewer client rejections, faster billing.</p><span class="more">See how <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/solutions/startups/" class="card card-link"><h2 class="h3">Startups</h2><p>Paste a job description, get a ready-to-send assessment and let SetBenchmark screen applicants while you build. Simple monthly pricing and a free trial.</p><span class="more">See how <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a><a href="/developers/" class="card card-link"><h2 class="h3">For developers</h2><p>Practise on real-world problems, join contests and earn certifications that employers can verify.</p><span class="more">Join free <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a></div></div></section><section class="section tight"><div class="wrap"><div class="cta"><div><h2 class="h2">See SetBenchmark with your own roles</h2><p>Start a 14-day free trial with 10 assessment attempts, or book a 30-minute demo with our team.</p></div><div class="btns"><a class="btn btn-lime" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost on-dark">Book a demo</a></div></div></div></section>`;

export const SolutionsIndex: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Technical Hiring Solutions by Use Case | SetBenchmark"
        description="SetBenchmark for campus hiring, enterprise tech hiring, IT services and staffing firms, and startups. See how teams like yours assess developers."
        canonical="https://www.setbenchmark.com/solutions"
        jsonLd={[{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com"}, {"@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.setbenchmark.com/solutions"}]}, {"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
      <div dangerouslySetInnerHTML={{ __html: RAW_CONTENT }} />
    </>
  );
};

export default SolutionsIndex;
