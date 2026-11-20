import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { useScrollSpy } from '@/utils/useScrollSpy';

const RAW_CONTENT = `<article>
<section class="phero" style="padding-bottom:48px">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/legal/terms/">Legal</a></li>
        <li><span aria-current="page">Terms of service</span></li>
      </ol>
    </nav>
    <div style="max-width:840px">
      <div class="eyebrow" style="margin-bottom:12px;color:var(--brand-dark);font-weight:700">PLATFORM MASTER AGREEMENT</div>
      <h1 class="h1" style="font-size:clamp(34px, 4.4vw, 52px);margin-bottom:16px">Terms of service</h1>
      <p class="lead" style="font-size:18px;line-height:1.65;color:var(--text-2);margin-bottom:20px">
        These terms govern your access to and use of the SetBenchmark technical evaluation platform, question libraries, and assessment infrastructure operated by Kombee Technologies (India) Pvt. Ltd.
      </p>
      <div class="meta-row" style="margin-top:0">
        <span>Effective date: <b>30 October 2026</b></span>
        <span>Version: <b>2.4 (Enterprise &amp; Self-Serve)</b></span>
      </div>
    </div>
  </div>
</section>

<div class="section" style="padding-top:40px">
  <div class="wrap">
    <div class="blog-post-layout">
      <!-- Main Terms Content -->
      <div class="blog-main-content legal-main-content">
        <!-- 4-Card Summary Grid (Quick Data Consumption) -->
        <div id="at-a-glance">
          <div style="font-size:13px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-3);margin-bottom:12px">
            TERMS &amp; OPERATIONAL SUMMARY AT A GLANCE
          </div>
          <div class="legal-summary-grid" style="margin-top:0">
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> 14-Day Trial</span>
              <h4>Zero-Risk 14-Day Free Trial</h4>
              <p>Every plan starts with a 14-day evaluation window including 10 free candidate assessment attempts. Cancel anytime before renewal with zero charges.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> Customer IP</span>
              <h4>Your Intellectual Property is Yours</h4>
              <p>Custom assessment questions, proprietary code challenges, and candidate solution repositories remain 100% the intellectual property of your organization.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Ethical AI</span>
              <h4>Human Decision-Making Required</h4>
              <p>Automated scoring rubrics and anti-cheat flags are decision-support telemetry. Employers must not make unilateral adverse hiring decisions based solely on automated signals.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Global Uptime</span>
              <h4>99.9% Production SLA</h4>
              <p>High-availability infrastructure with automated failover, scheduled maintenance windows, and enterprise custom service level agreements.</p>
            </div>
          </div>
        </div>

        <!-- Section 1: Agreement & Parties -->
        <div class="legal-section-block" id="parties">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            1. Agreement and contracting parties
          </h2>
          <p>
            These Terms of Service constitute a legally binding agreement between you (&quot;Customer&quot;, &quot;you&quot;) and Kombee Technologies (India) Pvt. Ltd. (&quot;SetBenchmark&quot;, &quot;we&quot;, &quot;us&quot;), governing your subscription to and use of the SetBenchmark cloud platform.
          </p>
          <p>
            <strong>Enterprise Order Forms &amp; Master Services Agreements:</strong> If your organization has executed a separate written Master Services Agreement (&quot;MSA&quot;), Data Processing Agreement (&quot;DPA&quot;), or custom enterprise Order Form signed by an authorized representative of Kombee Technologies, that separate agreement governs and supersedes any conflicting provisions in these Terms.
          </p>
        </div>

        <!-- Section 2: Accounts & Security -->
        <div class="legal-section-block" id="accounts">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            2. Account eligibility, roles &amp; security
          </h2>
          <p>
            To establish and maintain an active SetBenchmark account:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>Accurate Organization Information:</strong> You must register using authentic business credentials, maintain updated billing details, and verify authority to bind your organization.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>Credential Safeguards:</strong> You are responsible for preserving credential confidentiality, enforcing multi-factor authentication (MFA) across your workspace, and monitoring account administrator actions.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>Invited Team Members:</strong> The account owner remains fully accountable for all activities, assessment launches, and candidate invitations initiated by invited recruiters or hiring managers.</div>
            </li>
          </ul>
        </div>

        <!-- Section 3: Subscriptions & Payment -->
        <div class="legal-section-block" id="subscriptions">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            3. Subscriptions, billing &amp; usage overages
          </h2>
          <p>
            SetBenchmark offers subscription tiers tailored to hiring volume:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Billing Cycles:</strong> Paid plans are billed in advance on either a monthly or annual commitment cycle in the currency selected at checkout (USD, INR, EUR, AUD, NZD, SAR, AED).</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Assessment Quotas &amp; Overages:</strong> Each plan includes a defined monthly allotment of assessment invitations. Attempts consumed in excess of your tier threshold are billed in arrears at your tier&#x27;s standard per-attempt rate.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Tax Exclusions:</strong> Listed plan prices exclude applicable sales tax, GST, or VAT, which are calculated and itemized during checkout based on your registered jurisdiction.</div>
            </li>
          </ul>
        </div>

        <!-- Section 4: Acceptable Use -->
        <div class="legal-section-block" id="acceptable-use">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
            4. Acceptable use &amp; benchmark integrity rules
          </h2>
          <p>
            To preserve the statistical reliability and integrity of SetBenchmark assessments for all employers, you agree NOT to:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              <div>Copy, scrape, leak, publicly publish, or distribute SetBenchmark test questions, benchmark solutions, or test case testbeds.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              <div>Attempt to reverse-engineer, decompile, or extract the source code of our isolated execution sandboxes, scoring algorithms, or proctoring engines.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              <div>Use candidate assessment data to build competing commercial benchmark libraries or train public artificial intelligence models.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              <div>Enforce automated rejections based solely on proctoring anomalies without providing candidates an opportunity to review or appeal.</div>
            </li>
          </ul>
        </div>

        <!-- Section 5: Customer Data -->
        <div class="legal-section-block" id="customer-data">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            5. Customer data ownership &amp; licenses
          </h2>
          <p>
            <strong>Exclusive Ownership:</strong> As between SetBenchmark and Customer, Customer retains all right, title, and interest (including all intellectual property rights) in and to all candidate submissions, applicant resumes, proprietary challenges, and custom evaluation scorecards (&quot;Customer Data&quot;).
          </p>
          <p>
            <strong>Limited Operational License:</strong> Customer grants SetBenchmark a worldwide, non-exclusive license solely to host, copy, process, and display Customer Data to the extent required to deliver the technical evaluation service, generate candidate reports, and fulfill our support obligations under these Terms.
          </p>
        </div>

        <!-- Section 6: Intellectual Property -->
        <div class="legal-section-block" id="intellectual-property">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            6. SetBenchmark intellectual property
          </h2>
          <p>
            Kombee Technologies retains sole and exclusive ownership of all right, title, and interest in:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div>The SetBenchmark software platform, code execution runners, browser-based test IDEs, and scoring rubrics.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div>Our standardized technical question libraries, architectural multi-file repository challenges, and pre-packaged skill assessments.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div>SetBenchmark trademarks, service marks, logos, brand assets, and platform interface designs.</div>
            </li>
          </ul>
        </div>

        <!-- Section 7: Availability & SLAs -->
        <div class="legal-section-block" id="availability">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            7. Service availability, maintenance &amp; SLAs
          </h2>
          <p>
            We target 99.9% monthly uptime for core assessment submission endpoints. Scheduled maintenance windows requiring downtime are announced at least 72 hours in advance via our official status portal and executed outside standard business hours. Enterprise plans include guaranteed uptime commitments (99.95%) and financial service credits.
          </p>
        </div>

        <!-- Section 8: Liability Limits -->
        <div class="legal-section-block" id="liability">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            8. Limitation of liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, neither party shall be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, goodwill, or business opportunity).
          </p>
          <p>
            Our total cumulative liability arising out of or related to these Terms or the service shall not exceed the total fees paid by you to SetBenchmark in the twelve (12) months preceding the initial event giving rise to liability.
          </p>
        </div>

        <!-- Section 9: Termination -->
        <div class="legal-section-block" id="termination">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            9. Term, suspension &amp; termination
          </h2>
          <p>
            You may cancel your subscription at any time directly through your account billing dashboard, as governed by our Refund and Cancellation Policy.
          </p>
          <p>
            We reserve the right to suspend or terminate accounts immediately upon written notice if you materially breach acceptable use rules, fail to remit past-due balances, or compromise the security or integrity of other customers.
          </p>
        </div>

        <!-- Section 10: Governing Law -->
        <div class="legal-section-block" id="governing-law">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 21h18M3 7v14M21 7v14M6 11h3M6 15h3M15 11h3M15 15h3M9 3h6v4H9z"></path></svg>
            10. Governing law &amp; dispute resolution
          </h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of laws principles. The competent courts located in Bengaluru, Karnataka, India shall have exclusive jurisdiction to settle any dispute arising under these Terms, unless otherwise stipulated in a signed enterprise agreement.
          </p>
        </div>

        <!-- Section 11: Contact -->
        <div class="legal-section-block" id="contact">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            11. Legal notices &amp; inquiries
          </h2>
          <div class="legal-contact-card">
            <h4>Corporate Legal Operations</h4>
            <p><strong>Entity:</strong> Kombee Technologies (India) Pvt. Ltd.</p>
            <p><strong>Legal Department:</strong> <a href="mailto:legal@setbenchmark.com">legal@setbenchmark.com</a></p>
            <p><strong>Compliance &amp; DPA Desk:</strong> <a href="mailto:privacy@setbenchmark.com">privacy@setbenchmark.com</a></p>
          </div>
        </div>
      </div>

      <!-- Sticky Sidebar (Table of Contents & Enterprise Callout) -->
      <aside class="blog-sidebar">
        <div class="blog-toc-card">
          <div class="blog-toc-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            In this agreement
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#at-a-glance" class="blog-toc-item active">Overview</a>
            <a href="#parties" class="blog-toc-item">1. Parties &amp; Scope</a>
            <a href="#accounts" class="blog-toc-item">2. Accounts &amp; Access</a>
            <a href="#subscriptions" class="blog-toc-item">3. Subscriptions &amp; Billing</a>
            <a href="#acceptable-use" class="blog-toc-item">4. Acceptable Use</a>
            <a href="#customer-data" class="blog-toc-item">5. Data Ownership</a>
            <a href="#intellectual-property" class="blog-toc-item">6. Intellectual Property</a>
            <a href="#availability" class="blog-toc-item">7. Uptime &amp; SLAs</a>
            <a href="#liability" class="blog-toc-item">8. Liability Limits</a>
            <a href="#termination" class="blog-toc-item">9. Termination</a>
            <a href="#governing-law" class="blog-toc-item">10. Governing Law</a>
            <a href="#contact" class="blog-toc-item">11. Legal Contact</a>
          </nav>
        </div>

        <!-- Sticky Enterprise SLA Card -->
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
          <h4>Need a Custom Enterprise MSA?</h4>
          <p>We provide custom MSAs, security review packages, dedicated compliance support, and tailored SLAs for enterprise teams.</p>
          <a href="/contact/" class="btn btn-primary" style="margin-bottom:10px">Talk to Enterprise Solutions</a>
          <a href="/pricing/" class="btn btn-ghost" style="color:#FFFFFF;border-color:rgba(255,255,255,0.2)">View Transparent Pricing</a>
        </div>
      </aside>
    </div>
  </div>
</div>
</article>
`;

export const Terms: React.FC = () => {
  useScrollSpy();
  return (
    <>
      <SEOHead
        title="Terms of Service | SetBenchmark"
        description="Master terms governing access to the SetBenchmark technical evaluation platform, question libraries, and assessment infrastructure."
        canonical="https://www.setbenchmark.com/legal/terms"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com" },
              { "@type": "ListItem", "position": 2, "name": "Terms of service", "item": "https://www.setbenchmark.com/legal/terms" }
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

export default Terms;
