import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { useScrollSpy } from '@/utils/useScrollSpy';

const RAW_CONTENT = `<article>
<section class="phero" style="padding-bottom:48px">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/legal/privacy/">Legal</a></li>
        <li><span aria-current="page">Privacy policy</span></li>
      </ol>
    </nav>
    <div style="max-width:840px">
      <div class="eyebrow" style="margin-bottom:12px;color:var(--brand-dark);font-weight:700">DATA PRIVACY &amp; COMPLIANCE</div>
      <h1 class="h1" style="font-size:clamp(34px, 4.4vw, 52px);margin-bottom:16px">Privacy policy</h1>
      <p class="lead" style="font-size:18px;line-height:1.65;color:var(--text-2);margin-bottom:20px">
        This policy explains how Kombee Technologies (India) Pvt. Ltd. (&quot;SetBenchmark&quot;, &quot;we&quot;, &quot;us&quot;) handles personal data when you visit setbenchmark.com, use our technical evaluation platform, take an assessment as a candidate, or participate in our developer community.
      </p>
      <div class="meta-row" style="margin-top:0">
        <span>Effective date: <b>30 October 2026</b></span>
        <span>Version: <b>2.4 (Enterprise &amp; DPDP 2023 Ready)</b></span>
      </div>
    </div>
  </div>
</section>

<div class="section" style="padding-top:40px">
  <div class="wrap">
    <div class="blog-post-layout">
      <!-- Main Legal Content -->
      <div class="blog-main-content legal-main-content">
        <!-- 4-Card Summary Grid (Quick Data Consumption) -->
        <div id="at-a-glance">
          <div style="font-size:13px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-3);margin-bottom:12px">
            KEY PRIVACY HIGHLIGHTS AT A GLANCE
          </div>
          <div class="legal-summary-grid" style="margin-top:0">
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Data Ownership</span>
              <h4>You Own Your Candidate Data</h4>
              <p>Hiring teams own 100% of candidate code, answers, and scorecards. We never sell, monetize, or train third-party foundation models on candidate submissions.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Regional Cloud</span>
              <h4>Regional Data Isolation</h4>
              <p>Data residency matches your contract: AWS Mumbai (India DPDP), AWS Sydney (Australia/NZ), or AWS Frankfurt (EU/UK GDPR) with TLS 1.3 &amp; AES-256 encryption.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Zero Biometrics</span>
              <h4>No Biometric Templates</h4>
              <p>Camera checks are human-reviewed snapshots. We never extract, store, or match facial geometric vector templates or biometric identifiers.</p>
            </div>
            <div class="legal-summary-card">
              <span class="legal-summary-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Human Oversight</span>
              <h4>Automated Decision Guardrails</h4>
              <p>Proctoring integrity flags and AI interview transcripts are advisory signals. Final hiring verdicts always require review by a designated human recruiter.</p>
            </div>
          </div>
        </div>

        <!-- Section 1: Our Role -->
        <div class="legal-section-block" id="our-role">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
            1. Our role (Data Controller vs. Data Processor)
          </h2>
          <p>
            To understand how your data is protected, it is essential to distinguish between our two operational roles:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div>
                <strong>Data Processor / Data Fiduciary Intermediary:</strong> For all candidate evaluation data, code repositories, test recordings, interview transcripts, and integrity reports, the <em>hiring organisation (our enterprise customer)</em> acts as the Data Controller / Data Fiduciary. They decide who is tested, which skills are measured, and how results are stored. SetBenchmark processes this data strictly according to the customer&#x27;s written instructions and Data Processing Agreement (DPA).
              </div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div>
                <strong>Data Controller:</strong> For marketing visitors to setbenchmark.com, direct customer account administrators, billing profiles, and members of our public developer community, SetBenchmark acts as the Data Controller.
              </div>
            </li>
          </ul>
        </div>

        <!-- Section 2: What We Collect -->
        <div class="legal-section-block" id="what-we-collect">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            2. Categories of personal data we collect
          </h2>
          <p>
            We collect only the minimum information necessary to execute reliable, job-relevant technical assessments and secure the platform:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              <div><strong>Account &amp; Administrative Data:</strong> Name, professional work email, company name, administrative role, and encrypted authentication tokens.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              <div><strong>Candidate Assessment Submissions:</strong> Code commits, SQL queries, algorithm solutions, test execution outputs, benchmark scores, keystroke cadence, and time spent per challenge.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              <div><strong>Proctoring Telemetry (Employer-Configured Only):</strong> If explicitly enabled by the employer, periodic webcam verification photos, screen session logs, and ambient audio checks. These are captured solely to verify integrity and detect cheating.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              <div><strong>AI Interview Transcripts:</strong> Audio recordings, speech-to-text transcripts, and structured response summaries generated during collaborative live interviews.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              <div><strong>Technical Telemetry:</strong> Device operating system, browser engine version, IP address, and security audit logs required to prevent unauthorized access and DDoS attacks.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              <div><strong>Payment Information:</strong> Processed directly via PCI-DSS Level 1 payment gateways (Stripe). SetBenchmark never receives or stores raw credit card numbers.</div>
            </li>
          </ul>

          <div class="legal-callout-box">
            <h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Candidate Privacy Pledge</h3>
            <p>We do not track candidates across the web, run covert background surveillance, or sell candidate profiles to third-party data brokers. Once an assessment cycle is concluded, candidate data is archived and purged per employer retention rules.</p>
          </div>
        </div>

        <!-- Section 3: How We Use Data -->
        <div class="legal-section-block" id="how-we-use">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            3. How we use personal information
          </h2>
          <p>
            We process collected data strictly for verified, legitimate technical assessment purposes:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Delivering Assessments:</strong> Executing code test suites, scoring test cases, running mock APIs, and generating comprehensive candidate scorecards for hiring managers.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Integrity &amp; Anti-Cheat Verification:</strong> Reviewing browser focus transitions, copy-paste anomalies, and proctoring snapshots with human-in-the-loop oversight before any flagged result is finalized.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Platform Stability &amp; Security:</strong> Ensuring high uptime, load balancing automated sandboxes, detecting malicious intrusions, and defending infrastructure against denial of service.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Customer Support &amp; SLA Management:</strong> Assisting candidates with technical connectivity issues and providing customer technical support.</div>
            </li>
          </ul>
        </div>

        <!-- Section 4: Consent & Notice -->
        <div class="legal-section-block" id="consent">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            4. Candidate notice, consent &amp; accommodations
          </h2>
          <p>
            SetBenchmark enforces absolute transparency prior to candidate assessment initiation:
          </p>
          <p>
            Before answering a single question, candidates receive a comprehensive onboarding screen detailing exactly what telemetry will be recorded (e.g. camera, microphone, screen focus), the hiring company requesting the assessment, and how long records are stored. Candidates must provide explicit affirmative consent.
          </p>
          <p>
            <strong>Accessibility &amp; Camera-Free Accommodations:</strong> Candidates who lack functional webcams, experience accessibility constraints, or require non-proctored accommodations can submit an instant accommodation request directly from the test launch screen. Hiring teams can grant alternative testing formats without penalizing the candidate.
          </p>
        </div>

        <!-- Section 5: Retention Schedule -->
        <div class="legal-section-block" id="retention">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            5. Data retention &amp; automated deletion schedule
          </h2>
          <p>
            Personal data is retained only for the duration specified in the employer&#x27;s contract and data retention schedule. After this period, data is automatically deleted or permanently anonymized:
          </p>
          <div class="legal-table-container">
            <table class="legal-table">
              <thead>
                <tr>
                  <th>Data Category</th>
                  <th>Standard Retention Period</th>
                  <th>Purge Mechanism</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Candidate Code &amp; Test Submissions</strong></td>
                  <td>90 days (or customer-configured window)</td>
                  <td>Automated cryptographic purge</td>
                </tr>
                <tr>
                  <td><strong>Proctored Webcam Snapshots</strong></td>
                  <td>14 days after recruiter review</td>
                  <td>Permanent file deletion; zero biometrics</td>
                </tr>
                <tr>
                  <td><strong>AI Interview Audio Recordings</strong></td>
                  <td>30 days following interview completion</td>
                  <td>Raw audio deleted; text transcripts retained per SLA</td>
                </tr>
                <tr>
                  <td><strong>Customer Billing &amp; Invoices</strong></td>
                  <td>7 years (statutory requirement)</td>
                  <td>Encrypted financial archival storage</td>
                </tr>
                <tr>
                  <td><strong>System Security Audit Logs</strong></td>
                  <td>12 months</td>
                  <td>Rolling automated log expiration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Section 6: Data Storage & Regions -->
        <div class="legal-section-block" id="storage">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            6. Where data is stored &amp; cross-border safeguards
          </h2>
          <p>
            SetBenchmark operates dedicated regional infrastructure to satisfy international data residency mandates:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>India (DPDP Act 2023):</strong> Data for all Indian enterprises, universities, and candidates is hosted exclusively within AWS Asia Pacific (Mumbai) with data sovereignty guarantees.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>Australia &amp; New Zealand:</strong> Data hosted in AWS Asia Pacific (Sydney), satisfying the Australian Privacy Act 1988 (APPs) and NZ Privacy Act 2020.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div><strong>Europe &amp; UK:</strong> Data hosted in AWS Europe (Frankfurt), protected under EU Standard Contractual Clauses (SCCs) and UK IDTA frameworks.</div>
            </li>
          </ul>
        </div>

        <!-- Section 7: Your Rights -->
        <div class="legal-section-block" id="rights">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            7. Your privacy rights &amp; candidate self-service
          </h2>
          <p>
            Under applicable data protection laws—including India&#x27;s Digital Personal Data Protection Act, 2023, the EU/UK GDPR, Saudi Arabia PDPL, UAE Data Protection Law, Australian Privacy Act, and New Zealand Privacy Act—you have the following rights:
          </p>
          <ul class="legal-list">
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Right of Access &amp; Portability:</strong> Request a full copy of the personal data and assessment scorecards associated with your email address.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Right of Correction:</strong> Correct incomplete or inaccurate profile details.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Right of Erasure (&quot;Right to be Forgotten&quot;):</strong> Request the permanent deletion of assessment records and interview transcripts, subject to lawful dispute retention periods.</div>
            </li>
            <li class="legal-list-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"></path></svg>
              <div><strong>Right to Withdraw Consent:</strong> Revoke consent for ongoing data processing at any point before an assessment is finalized.</div>
            </li>
          </ul>
        </div>

        <!-- Section 8: Grievance Officer & Contact -->
        <div class="legal-section-block" id="contact">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            8. Grievance officer &amp; legal compliance contact
          </h2>
          <p>
            In accordance with India&#x27;s DPDP Act 2023 and global data protection regulations, SetBenchmark has appointed a designated Data Protection &amp; Grievance Redressal Officer:
          </p>
          <div class="legal-contact-card">
            <h4>Data Protection &amp; Grievance Officer</h4>
            <p><strong>Entity:</strong> Kombee Technologies (India) Pvt. Ltd.</p>
            <p><strong>Department:</strong> Legal &amp; Data Compliance Operations</p>
            <p><strong>Official Email:</strong> <a href="mailto:privacy@setbenchmark.com">privacy@setbenchmark.com</a></p>
            <p><strong>Response Commitment:</strong> All data subject inquiries and grievance notices are formally acknowledged within 48 hours and resolved within the statutory period prescribed by applicable law.</p>
          </div>
        </div>

        <!-- Section 9: Changes -->
        <div class="legal-section-block" id="changes">
          <h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            9. Changes to this policy
          </h2>
          <p>
            We periodically review and update this policy to reflect platform innovations, new task types, and legislative updates. Whenever material modifications are implemented, active account administrators receive advance notice via email, and the updated version date is reflected at the top of this document.
          </p>
        </div>
      </div>

      <!-- Sticky Sidebar (Table of Contents & Trust Callout) -->
      <aside class="blog-sidebar">
        <div class="blog-toc-card">
          <div class="blog-toc-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            In this policy
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#at-a-glance" class="blog-toc-item active">At a glance</a>
            <a href="#our-role" class="blog-toc-item">1. Our Role</a>
            <a href="#what-we-collect" class="blog-toc-item">2. What We Collect</a>
            <a href="#how-we-use" class="blog-toc-item">3. How We Use Data</a>
            <a href="#consent" class="blog-toc-item">4. Candidate Notice</a>
            <a href="#retention" class="blog-toc-item">5. Retention Schedule</a>
            <a href="#storage" class="blog-toc-item">6. Data Storage &amp; Regions</a>
            <a href="#rights" class="blog-toc-item">7. Your Privacy Rights</a>
            <a href="#contact" class="blog-toc-item">8. Grievance Officer</a>
            <a href="#changes" class="blog-toc-item">9. Policy Updates</a>
          </nav>
        </div>

        <!-- Sticky Compliance Trust Card -->
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
          <h4>Enterprise Security &amp; DPA Inquiries</h4>
          <p>Need custom data processing agreements, SOC 2 reports, or regional data isolation verification?</p>
          <a href="/contact/" class="btn btn-primary" style="margin-bottom:10px">Contact Compliance Officer</a>
          <a href="/security/" class="btn btn-ghost" style="color:#FFFFFF;border-color:rgba(255,255,255,0.2)">View Security Whitepaper</a>
        </div>
      </aside>
    </div>
  </div>
</div>
</article>
`;

export const Privacy: React.FC = () => {
  useScrollSpy();
  return (
    <>
      <SEOHead
        title="Privacy Policy | SetBenchmark"
        description="How SetBenchmark collects, uses and protects personal data of customers, candidates and developers under GDPR, DPDP Act 2023 and global privacy standards."
        canonical="https://www.setbenchmark.com/legal/privacy"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com" },
              { "@type": "ListItem", "position": 2, "name": "Privacy policy", "item": "https://www.setbenchmark.com/legal/privacy" }
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

export default Privacy;
