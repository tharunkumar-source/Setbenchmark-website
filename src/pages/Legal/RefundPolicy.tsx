import React from 'react';
import { SEOHead } from '@/components/SEOHead';


const RAW_CONTENT = `<section class="phero" style="padding-bottom:48px"><div class="wrap" style="max-width:820px"><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">Refund and cancellation policy</span></li></ol></nav><h1 class="h1" style="font-size:clamp(34px, 4.4vw, 52px)">Refund and cancellation policy</h1><p class="meta-row">Last updated <time dateTime="2026-10-30">30 October 2026</time></p></div></section><section class="section" style="padding-top:48px"><div class="wrap"><div class="prose"><p class="note"><b>Draft.</b> This text is a starting point and must be reviewed by Kombee&#x27;s legal counsel before launch.</p><div><h2>Free trial</h2><p>Every plan starts with a 14-day free trial. You are not charged during the trial and can cancel at any time.</p></div><div><h2>Monthly plans</h2><p>Cancel any time before your next billing date from Settings, Plan and billing. You keep access until the end of the paid month. We don&#x27;t refund partial months.</p></div><div><h2>Annual plans</h2><p>You can cancel within 14 days of the first annual payment for a full refund if you have used fewer than 10 assessment attempts. After that, annual plans are not refundable, but you keep access until the end of the term.</p></div><div><h2>Extra attempts</h2><p>Charges for extra attempts already used are not refundable.</p></div><div><h2>Duplicate or failed payments</h2><p>If you were charged twice or charged for a failed payment, contact billing@setbenchmark.com and we will refund the amount to the original payment method within 7 working days of confirmation.</p></div><div><h2>How refunds are paid</h2><p>Approved refunds go back to the original payment method. Banks may take 5 to 10 working days to show the credit.</p></div><div><h2>Contact</h2><p>billing@setbenchmark.com · Kombee Technologies (India) Pvt. Ltd., [Registered office address]</p></div></div></div></section>`;

export const RefundPolicy: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Refund and cancellation policy | SetBenchmark"
        description="How cancellations and refunds work for SetBenchmark subscriptions."
        canonical="https://www.setbenchmark.com/legal/refund-policy"
        jsonLd={[{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com"}, {"@type": "ListItem", "position": 2, "name": "Refund and cancellation policy", "item": "https://www.setbenchmark.com/legal/refund-policy"}]}, {"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
      <div dangerouslySetInnerHTML={{ __html: RAW_CONTENT }} />
    </>
  );
};

export default RefundPolicy;
