import React from 'react';
import { SEOHead } from '@/components/SEOHead';


const RAW_CONTENT = `<section class="section"><div class="wrap center" style="max-width:640px"><div class="eyebrow">404</div><h1 class="h2">We couldn&#x27;t find that page</h1><p class="lead" style="margin-top:16px">It may have moved. Try one of these instead.</p><div class="btns" style="justify-content:center;margin-top:28px"><a href="/" class="btn btn-primary">Home</a><a href="/skill-tests/" class="btn btn-ghost">Skill tests</a><a href="/pricing/" class="btn btn-ghost">Pricing</a></div></div></section>`;

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page not found | SetBenchmark"
        description=""
        canonical="https://setbenchmark.com/404/"
        jsonLd={[{"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
      <div dangerouslySetInnerHTML={{ __html: RAW_CONTENT }} />
    </>
  );
};

export default NotFound;
