import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { useScrollSpy } from '@/utils/useScrollSpy';

const RAW_CONTENT = `<article>
<section class="phero" style="padding-bottom:48px">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/legal/refund-policy/">Legal</a></li>
        <li><span aria-current="page">Refund and cancellation policy</span></li>
      </ol>
    </nav>
    <div class="phero-grid">
      <div>
        <div class="eyebrow" style="margin-bottom:12px;color:var(--brand-dark);font-weight:700">BILLING &amp; SUBSCRIPTION GUARANTEES</div>
        <h1 class="h1" style="font-size:clamp(30px, 3.2vw, 44px);margin-bottom:16px">Refund &amp; cancellation policy</h1>
        <p class="lead" style="font-size:17px;line-height:1.65;color:var(--text-2);margin-bottom:20px">
          Clear, transparent policies on subscription trials, monthly cancellations, annual satisfaction guarantees, and rapid billing error resolutions.
        </p>
        <div class="meta-row" style="margin-top:0">
          <span>Effective date: <b>30 October 2026</b></span>
          <span>Version: <b>2.4 (Self-Serve &amp; Enterprise Billing)</b></span>
        </div>
      </div>
      <div class="shot">
        <img 
          src="/images/mockups/laptop/uae-aed-pricing.webp" 
          alt="SetBenchmark usage and billing dashboard with assessment attempts tracking, allowance caps, and automated trial telemetry" 
          width="1812" 
          height="1070" 
          loading="eager" 
          decoding="async"
        />
      </div>
    </div>
  </div>
</section>

<div class="section" style="padding-top:40px">
  <div class="wrap">
    <div class="blog-post-layout">
      <!-- Main Refund Policy Content -->
      <div class="blog-main-content legal-main-content">
        <!-- 4-Card Summary Grid (Quick Data Consumption) -->
        <div id="at-a-glance">
          <div style="font-size:13px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-3);margin-bottom:12px">
            BILLING &amp; REFUND HIGHLIGHTS AT A GLANCE
          </div>
          <div class="legal-summary-grid" style="margin-top:0">
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg> 14-Day Free Trial</span>
              <h4>14 Days Completely Free</h4>
              <p>Test up to 10 candidates with full access to proctoring, skill libraries, and AI fluency benchmarks. Zero automated charges if cancelled before the trial ends.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"></path></svg> Cancel Monthly Anytime</span>
              <h4>No Monthly Lock-Ins</h4>
              <p>Cancel your monthly subscription anytime with one click in Settings &rarr; Plan &amp; Billing. Access remains fully active through the end of your paid billing period.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Annual Guarantee</span>
              <h4>14-Day Annual Guarantee</h4>
              <p>New annual plan subscribers can cancel within 14 calendar days of payment for a 100% full refund if fewer than 10 assessment invitations were consumed.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Rapid Remediation</span>
              <h4>7-Day Error Refund</h4>
              <p>Duplicate transactions or gateway processing discrepancies are verified and refunded directly to your payment method within 7 business days.</p>
            </div>
          </div>
        </div>

        <!-- Section 1: Free Trial -->
        <div class="legal-section-block" id="free-trial">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            1. 14-day free trial evaluation period
          </h2>
          <p>
            Every new SetBenchmark organization begins with a full-featured 14-day evaluation trial:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>All Features Unlocked:</strong> Access our complete question library, multi-file repo testbeds, proctoring camera verification, and ATS webhook integrations during your trial.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>Evaluation Quota:</strong> Includes 10 free candidate assessment attempts to benchmark with your hiring panel.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>Zero Unexpected Charges:</strong> If you decide not to continue, simply cancel anytime before the 14th day in your dashboard and no subscription fees will be charged.</div>
            </li>
          </ul>
        </div>

        <!-- Section 2: Monthly Plans -->
        <div class="legal-section-block" id="monthly-plans">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            2. Monthly subscription cancellations
          </h2>
          <p>
            Monthly plans provide flexible, month-to-month recruiting capability:
          </p>
          <p>
            <strong>Self-Serve Cancellation:</strong> You can cancel your monthly subscription at any time directly from <em>Settings &rarr; Plan &amp; billing</em>. Cancellation takes effect at the conclusion of your current monthly billing period.
          </p>
          <p>
            <strong>End-of-Period Access:</strong> You retain complete access to the platform, historical candidate scorecards, and question libraries until your active billing cycle concludes. We do not provide prorated refunds for mid-month cancellations.
          </p>
        </div>

        <!-- Section 3: Annual Plans -->
        <div class="legal-section-block" id="annual-plans">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            3. Annual subscriptions &amp; 14-day guarantee
          </h2>
          <p>
            Annual subscriptions offer our most significant volume discounts (up to 20% savings):
          </p>
          <div class="legal-callout-box">
            <h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> 14-Day Remorse Period</h3>
            <p>If you purchase an annual plan and determine it does not suit your recruitment needs, you may request a 100% full refund within 14 calendar days of your initial payment date, provided your organization has consumed fewer than 10 total candidate test attempts.</p>
          </div>
          <p>
            After the initial 14-day window has elapsed, annual plans are non-refundable. However, your organization retains full platform access through the end of your prepaid annual commitment.
          </p>
        </div>

        <!-- Section 4: Extra Attempts -->
        <div class="legal-section-block" id="extra-attempts">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
            4. Usage overages &amp; extra assessment attempts
          </h2>
          <p>
            Assessment invitations or candidate test attempts consumed beyond your plan&#x27;s monthly allotment are billed in arrears at your tier&#x27;s standardized rate. Because computing infrastructure and sandboxes are actively provisioned upon candidate initiation, fees for consumed overage attempts are non-refundable.
          </p>
        </div>

        <!-- Section 5: Billing Errors -->
        <div class="legal-section-block" id="billing-errors">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            5. Duplicate charges &amp; payment gateway discrepancies
          </h2>
          <p>
            If your account experiences a duplicate charge, an unintended billing discrepancy, or a payment failure debit, contact our billing operations desk immediately at <a href="mailto:billing@setbenchmark.com">billing@setbenchmark.com</a>.
          </p>
          <p>
            Upon confirmation of the duplicate debit, we immediately issue a 100% reversal to your original payment method within seven (7) business days.
          </p>
        </div>

        <!-- Section 6: Refund Methods -->
        <div class="legal-section-block" id="refund-methods">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 17l10 5 10-5M2 12l10 5 10-5M2 7l10 5 10-5"></path></svg>
            6. Refund processing timelines &amp; settlement
          </h2>
          <p>
            All approved refunds are credited directly back to the original funding source (credit card, corporate bank account, or wire transfer):
          </p>
          <div class="legal-table-container">
            <table class="legal-table">
              <thead>
                <tr>
                  <th>Payment Method</th>
                  <th>SetBenchmark Processing Time</th>
                  <th>Banking Settlement Window</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Credit / Debit Cards (Stripe)</strong></td>
                  <td>Within 24 business hours</td>
                  <td>5 to 10 working days</td>
                </tr>
                <tr>
                  <td><strong>UPI &amp; Net Banking (India)</strong></td>
                  <td>Within 24 business hours</td>
                  <td>3 to 7 working days</td>
                </tr>
                <tr>
                  <td><strong>Corporate Wire / ACH / SEPA</strong></td>
                  <td>Within 48 business hours</td>
                  <td>5 to 7 working days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Section 7: Contact -->
        <div class="legal-section-block" id="contact">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            7. Billing operations &amp; refund assistance
          </h2>
          <div class="legal-contact-card">
            <h4>SetBenchmark Billing &amp; Invoicing Operations</h4>
            <p><strong>Entity:</strong> Kombee Technologies (India) Pvt. Ltd.</p>
            <p><strong>Billing Support Desk:</strong> <a href="mailto:billing@setbenchmark.com">billing@setbenchmark.com</a></p>
            <p><strong>General Inquiries:</strong> <a href="mailto:contact@setbenchmark.com">contact@setbenchmark.com</a></p>
            <p><strong>Turnaround SLA:</strong> All billing ticket inquiries submitted to billing@setbenchmark.com are answered within one (1) business day.</p>
          </div>
        </div>
      </div>

      <!-- Sticky Sidebar (Table of Contents & Billing Callout) -->
      <aside class="blog-sidebar">
        <div class="blog-toc-card">
          <div class="blog-toc-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            In this policy
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#at-a-glance" class="blog-toc-item active">Highlights</a>
            <a href="#free-trial" class="blog-toc-item">1. 14-Day Free Trial</a>
            <a href="#monthly-plans" class="blog-toc-item">2. Monthly Cancellations</a>
            <a href="#annual-plans" class="blog-toc-item">3. Annual Guarantees</a>
            <a href="#extra-attempts" class="blog-toc-item">4. Test Overages</a>
            <a href="#billing-errors" class="blog-toc-item">5. Duplicate Charges</a>
            <a href="#refund-methods" class="blog-toc-item">6. Processing Timelines</a>
            <a href="#contact" class="blog-toc-item">7. Billing Support</a>
          </nav>
        </div>

        <!-- Sticky Billing Assistance Card -->
        <div class="blog-promo-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <svg width="26" height="26" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M55.2805 67.2288L58.8315 70.7797L43.8969 85.7143H85.7143V83.2031C85.7143 67.3429 76.4955 50.9533 58.8511 43.6033C48.8556 39.639 37.723 39.2929 26.8239 43.6205C9.72405 50.7402 0 66.8246 0 83.2031V85.7143H36.795L55.2805 67.2288ZM16.8087 73.9947L12.0708 72.3222C16.6714 59.3054 29.0409 50.558 42.8571 50.558C56.6734 50.558 69.0429 59.3054 73.6433 72.3222L68.9054 73.9947C65.0161 62.9814 54.5498 55.5803 42.8571 55.5803C31.1645 55.5803 20.6982 62.9814 16.8087 73.9947Z" fill="#26D07C"/>
              <path d="M5.18945 53.9958C9.73181 48.0645 14.2969 44.4941 20.2564 41.2862V30.4688H5.18945V53.9958Z" fill="#FFFFFF"/>
              <path d="M25.2793 38.8558C31.5518 36.4245 35.8201 35.8727 40.3463 35.6449V20.4241H25.2793V38.8558Z" fill="#FFFFFF"/>
              <path d="M60.4351 38.8461V10.3794H45.3682V35.643C49.6025 35.8556 53.9833 36.3304 60.4351 38.8461Z" fill="#FFFFFF"/>
              <path d="M65.458 41.2917C71.5062 44.5483 75.984 48.0641 80.525 54.0032V0H65.458V41.2917Z" fill="#FFFFFF"/>
            </svg>
            <span style="font-size:15px;font-weight:700;letter-spacing:-0.015em;color:#FFFFFF">Set<span style="color:#26D07C">Benchmark</span></span>
          </div>
          <h4>Questions Regarding an Invoice?</h4>
          <p>Our dedicated finance operations team assists with purchase orders, custom enterprise invoicing, and wire confirmations.</p>
          <a href="/contact/" class="btn btn-primary" style="margin-bottom:10px">Contact Billing Desk</a>
          <a href="/pricing/" class="btn btn-ghost" style="color:#FFFFFF;border-color:rgba(255,255,255,0.2)">View Transparent Pricing</a>
        </div>
      </aside>
    </div>
  </div>
</div>
</article>
`;

export const RefundPolicy: React.FC = () => {
  useScrollSpy();
  return (
    <>
      <SEOHead
        title="Refund & Cancellation Policy | SetBenchmark"
        description="Clear, transparent terms on subscription cancellations, 14-day evaluation trials, annual satisfaction guarantees, and rapid billing error resolutions."
        canonical="https://www.setbenchmark.com/legal/refund-policy"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com" },
              { "@type": "ListItem", "position": 2, "name": "Refund and cancellation policy", "item": "https://www.setbenchmark.com/legal/refund-policy" }
            ]
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

export default RefundPolicy;
