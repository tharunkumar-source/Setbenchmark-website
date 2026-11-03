import React from 'react';
import { SEOHead } from '@/components/SEOHead';


const RAW_CONTENT = `<section class="phero" style="padding-bottom:48px"><div class="wrap" style="max-width:820px"><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">Terms of service</span></li></ol></nav><h1 class="h1" style="font-size:clamp(34px, 4.4vw, 52px)">Terms of service</h1><p class="meta-row">Last updated <time dateTime="2026-10-30">30 October 2026</time></p></div></section><section class="section" style="padding-top:48px"><div class="wrap"><div class="prose"><p class="note"><b>Draft.</b> This text is a starting point and must be reviewed by Kombee&#x27;s legal counsel before launch.</p><div><p>These terms are an agreement between you and Kombee Technologies (India) Pvt. Ltd., [Registered office address], for use of SetBenchmark. Enterprise customers may have a separate signed agreement, which takes precedence.</p></div><div><h2>Accounts</h2><p>You must provide accurate information, keep login details secure and be responsible for activity under your account. Customers are responsible for the users they invite.</p></div><div><h2>Subscriptions and payment</h2><p>Paid plans are billed in advance, monthly or annually, in the currency shown at checkout. Extra assessment attempts above your plan are billed in arrears. Prices exclude taxes such as GST or VAT, which are added where applicable.</p></div><div><h2>Acceptable use</h2><ul><li>Don&#x27;t misuse the service, attempt to access it without permission or disrupt it.</li><li>Don&#x27;t copy, share or publish SetBenchmark questions or candidates&#x27; answers.</li><li>Use assessment results lawfully and fairly, and don&#x27;t make hiring decisions based solely on automated signals.</li></ul></div><div><h2>Customer data</h2><p>You own the data you and your candidates submit. You give us permission to process it to provide the service, as described in our privacy policy and any data processing agreement.</p></div><div><h2>Intellectual property</h2><p>SetBenchmark, its software and its question library belong to Kombee. Questions you write remain yours.</p></div><div><h2>Availability and support</h2><p>We aim for high availability and will announce planned maintenance in advance. Support levels depend on your plan.</p></div><div><h2>Liability</h2><p>To the extent permitted by law, our total liability is limited to the fees you paid in the 12 months before the claim. We are not liable for indirect or consequential losses.</p></div><div><h2>Termination</h2><p>You can cancel at any time as described in our refund and cancellation policy. We may suspend accounts that breach these terms.</p></div><div><h2>Governing law</h2><p>These terms are governed by the laws of India, and courts in [city], India have jurisdiction, unless your signed agreement says otherwise.</p></div><div><h2>Contact</h2><p>legal@setbenchmark.com</p></div></div></div></section>`;

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of service | SetBenchmark"
        description="Terms that apply to using the SetBenchmark website and platform."
        canonical="https://www.setbenchmark.com/legal/terms"
        jsonLd={[{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com"}, {"@type": "ListItem", "position": 2, "name": "Terms of service", "item": "https://www.setbenchmark.com/legal/terms"}]}, {"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
      <div dangerouslySetInnerHTML={{ __html: RAW_CONTENT }} />
    </>
  );
};

export default Terms;
