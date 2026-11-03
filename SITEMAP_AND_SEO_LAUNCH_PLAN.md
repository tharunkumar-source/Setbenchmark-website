# SetBenchmark Website — Sitemap, SEO & Launch Master Plan

> **Official Reference Document** for page construction, content strategy, on-page SEO metadata, and technical launch requirements.  
> *Source references: `SetBenchmark Website SEO and Launch Plan`, `SetBenchmark_Website_Sitemap`, and `sitemap.xml`.*

---

## 1. Executive Summary & Strategy

The SetBenchmark public website consists of **47 production pages plus a custom 404 page**. Every page is designed to target a specific search intent, provide structured business proof points, and drive candidate & enterprise recruiter conversions without internal keyword cannibalization.

### Realistic 12-Month SEO Ranking Path
Incumbent competitors (HackerRank, HackerEarth, Codility, CodeSignal, iMocha, Mercer Mettl) have high domain authority and thousands of backlinks. A new domain will not outrank them on day one for broad head terms. The strategic progression is:

1. **Months 1–3 (Quick Wins & Low Competition):**  
   Target long-tail and lower-competition queries:
   - Country pages (`coding test platform New Zealand`, `technical assessment platform UAE`)
   - Specific skill tests (`golang coding test for hiring`, `react developer test`)
   - AI-era differentiators that legacy platforms don't yet dominate (`AI fluency assessment`, `agentic coding test`, `AI interviewer`)
2. **Months 3–6 (Mid-Competition & Authoritative Content):**  
   Build domain authority through deep technical guides, comparison pages (`HackerRank alternative India`, `campus hiring assessment`), and directory listings (G2, Capterra, SaaSworthy).
3. **Months 6–12 (High-Competition Head Terms):**  
   Compete for tier-1 head terms (`coding assessment platform India`, `technical assessment platform`) once backlink profiles and user engagement signals mature.

### Global Domain & Infrastructure Decisions
- **Canonical Host:** `https://www.setbenchmark.com` (redirect non-www `setbenchmark.com` to `www` at DNS/edge level; never serve both).
- **Application Portal:** `https://app.setbenchmark.com`
- **Single English Codebase:** One English site serves all global regions. Country-specific intent is captured through dedicated regional landing pages (with local currency, compliance laws, and proof points) rather than duplicating the entire site per country.

---

## 2. Complete Master Sitemap & Page Inventory

### Summary Table by Category

| Section | Page Count | Priority Range | Change Frequency |
|---|---|---|---|
| **Core & Platform** | 2 | 0.8 – 1.0 | Weekly / Monthly |
| **Product Modules** | 7 | 0.9 | Monthly |
| **Integrations** | 1 | 0.7 | Monthly |
| **Solutions (Use Cases)** | 5 | 0.7 – 0.8 | Monthly |
| **Developer Community** | 1 | 0.6 | Monthly |
| **Skill Tests Directory & Tests** | 13 | 0.7 – 0.8 | Monthly |
| **Pricing & Regional Pages** | 6 | 0.8 – 0.9 | Monthly |
| **Resources, Comparisons & Blog** | 6 | 0.6 – 0.8 | Weekly / Yearly |
| **Company, Trust & Contact** | 3 | 0.4 – 0.6 | Yearly |
| **Legal & Compliance** | 3 | 0.2 | Yearly |
| **System Pages** | 1 (404) | — | — |
| **Total** | **47 + 404** | — | — |

---

### Detailed Page-by-Page Specifications

#### A. Core & Platform

##### 1. Home / Landing Page
- **URL:** `/` (`https://www.setbenchmark.com`)
- **Priority:** `1.0` | **Changefreq:** `weekly`
- **SEO Title:** `Technical Assessment & Coding Test Platform | SetBenchmark`
- **Target Keyword:** `technical assessment platform`
- **Secondary Keywords:** `coding test platform`, `developer assessment`, `online coding interview`, `HackerRank alternative`, `AI interview platform`
- **Required Content & Data:**
  - Value proposition: Hire developers on real skills (coding assessments, AI fluency, AI interviews, live interviews). Fair, proctored, and reviewed by people.
  - Interactive product mega-menu & product preview hero.
  - Core pillars: Coding tasks, AI coding agents, adaptive technical interviews, integrity suite.
  - Social proof points, logos/supported tech stack (40+ languages).
  - Dual CTAs: *Start free trial (14-day, 10 attempts, no credit card)* and *Book a demo*.
  - JSON-LD: `Organization`, `WebSite`, `SoftwareApplication`.

##### 2. Product Overview
- **URL:** `/product`
- **Priority:** `0.8` | **Changefreq:** `monthly`
- **SEO Title:** `SetBenchmark Platform: Assessments, AI and Live Interviews | SetBenchmark`
- **Target Keyword:** `technical hiring platform`
- **Required Content & Data:**
  - End-to-end platform architecture overview (Screening -> AI Fluency -> Interviews -> Insights).
  - Comparison of assessment modes (Guarded vs. AI Allowed).
  - JSON-LD: `SoftwareApplication`, `BreadcrumbList`.

---

#### B. Product Feature Modules (Priority 0.9)

##### 3. Coding Assessments
- **URL:** `/product/coding-assessments`
- **Target Keyword:** `coding assessment platform`
- **SEO Title:** `Coding Assessment Platform for Hiring | SetBenchmark`
- **Required Content & Data:**
  - Real-world repository tasks, unit test execution, algorithm & architecture tests.
  - 40+ supported languages and frameworks (Python, Go, Java, TypeScript, etc.).
  - Automated scoring with human review controls.

##### 4. AI Fluency Assessments
- **URL:** `/product/ai-fluency-assessments`
- **Target Keyword:** `AI skills assessment`
- **SEO Title:** `AI Skills Assessment for Developers | SetBenchmark`
- **Required Content & Data:**
  - Evaluating how developers work alongside AI coding agents (prompting, code review, debugging generated code).
  - Differentiating "Guarded" (no AI) vs. "Unguarded / AI-native" assessment tracks.
  - Advisory score breakdowns.

##### 5. AI Interviews
- **URL:** `/product/ai-interviews`
- **Target Keyword:** `AI interviewer`
- **SEO Title:** `AI Interviewer for Technical Screening | SetBenchmark`
- **Required Content & Data:**
  - Automated first-round technical screening interviews.
  - Dynamic follow-up questions tailored to candidate answers.
  - Audio/text evaluation reviewed by human engineering managers.

##### 6. Live Coding Interviews
- **URL:** `/product/live-coding-interviews`
- **Target Keyword:** `live coding interview platform`
- **SEO Title:** `Live Coding Interview Platform | SetBenchmark`
- **Required Content & Data:**
  - Real-time collaborative coding sandbox, shared terminal, video/audio integration.
  - Built-in scorecard templates aligned with technical role competencies.

##### 7. Proctoring & Integrity
- **URL:** `/product/proctoring-integrity`
- **Target Keyword:** `proctored coding test`
- **SEO Title:** `Proctored Coding Tests & Cheating Detection | SetBenchmark`
- **Required Content & Data:**
  - Human-in-the-loop integrity: Flags are advisory and use orange badges (`⚠ Needs review`), never instant algorithmic disqualification.
  - Plagiarism detection, browser event logs, second-screen detection, webcam snapshots (with camera-free accommodation alternative).
  - Secure desktop app option (Phase 2 timeline note).

##### 8. Skills Intelligence
- **URL:** `/product/skills-intelligence`
- **Target Keyword:** `employee skills assessment`
- **SEO Title:** `Employee Skills Assessment & Gap Analysis | SetBenchmark`
- **Required Content & Data:**
  - Internal talent benchmarking, role-based taxonomy mapping, skills gap analytics for engineering teams.

##### 9. Question Library
- **URL:** `/product/question-library`
- **Target Keyword:** `technical interview question bank`
- **SEO Title:** `Technical Interview Question Library | SetBenchmark`
- **Required Content & Data:**
  - Thousands of curated real-world questions across seniority levels (Junior, Mid, Senior, Lead).
  - Custom question authoring, private repository imports, question retirement/leak-protection workflows.

##### 10. Integrations
- **URL:** `/integrations`
- **Target Keyword:** `coding assessment ATS integration`
- **SEO Title:** `Integrations: ATS, Calendar, SSO and API | SetBenchmark`
- **Priority:** `0.7`
- **Required Content & Data:**
  - Launch ATS Integrations: Greenhouse, Lever, Ashby, SmartRecruiters.
  - Communication & Auth: Google Calendar, Microsoft 365/Teams, Slack, Okta SSO/SCIM, Microsoft Entra ID, GitHub, Kombee HRMS.
  - Future Roadmap (tagged "in 2027"): Workday, SAP SuccessFactors, iCIMS.
  - Custom REST API & Webhooks documentation links.

---

#### C. Solutions by Use Case (Priority 0.7 – 0.8)

##### 11. Solutions Overview
- **URL:** `/solutions`
- **Target Keyword:** `technical hiring solutions`
- **SEO Title:** `Technical Hiring Solutions by Use Case | SetBenchmark`

##### 12. Campus Hiring
- **URL:** `/solutions/campus-hiring`
- **Target Keyword:** `campus hiring assessment`
- **SEO Title:** `Campus Hiring Assessment Platform | SetBenchmark`
- **Required Content & Data:**
  - High-concurrency batch testing (handling tens of thousands of simultaneous college candidates).
  - Automated slotting, anti-impersonation, campus-specific benchmark analytics.

##### 13. Enterprise Tech Hiring
- **URL:** `/solutions/enterprise-tech-hiring`
- **Target Keyword:** `enterprise technical hiring`
- **SEO Title:** `Enterprise Technical Hiring Platform | SetBenchmark`
- **Required Content & Data:**
  - Custom SLAs, dedicated customer success, role-based access control (RBAC), SOC/ISO compliance, data isolation.

##### 14. IT Services & Staffing
- **URL:** `/solutions/it-services-staffing`
- **Target Keyword:** `staffing agency skills assessment`
- **SEO Title:** `Skills Assessment for IT Services & Staffing | SetBenchmark`
- **Required Content & Data:**
  - Client-ready verified skills scorecards, fast turnaround, bench-strength validation.

##### 15. Startups
- **URL:** `/solutions/startups`
- **Target Keyword:** `developer hiring for startups`
- **SEO Title:** `Developer Hiring Tool for Startups | SetBenchmark`
- **Required Content & Data:**
  - Fast setup, zero maintenance, self-serve plans from $69/month, pre-built interview templates.

##### 16. Developer Community
- **URL:** `/developers`
- **Target Keyword:** `coding practice platform`
- **SEO Title:** `Coding Practice and Free Certification | SetBenchmark`
- **Priority:** `0.6`
- **Required Content & Data:**
  - Candidate practice environment, sample challenges, free verified certificates to share on LinkedIn.

---

#### D. Pre-Employment Skill Tests (Priority 0.7 – 0.8)

> **Structured Data:** The index page `/skill-tests` includes `ItemList` schema; each individual skill page includes structured test information and breadcrumbs.

| # | URL | Target Keyword | SEO Title |
|---|---|---|---|
| 17 | `/skill-tests` | `pre-employment coding tests` | `Pre-Employment Coding Tests by Skill | SetBenchmark` |
| 18 | `/skill-tests/java` | `java coding test` | `Java Coding Test for Hiring Java Developers | SetBenchmark` |
| 19 | `/skill-tests/python` | `python coding test` | `Python Coding Test for Hiring Developers | SetBenchmark` |
| 20 | `/skill-tests/javascript` | `javascript test for hiring` | `JavaScript Test for Hiring Developers | SetBenchmark` |
| 21 | `/skill-tests/react` | `react developer test` | `React Developer Test for Hiring | SetBenchmark` |
| 22 | `/skill-tests/nodejs` | `node.js developer test` | `Node.js Developer Test for Backend Hiring | SetBenchmark` |
| 23 | `/skill-tests/sql` | `sql test for hiring` | `SQL Test for Hiring: Online SQL Assessment | SetBenchmark` |
| 24 | `/skill-tests/golang` | `golang coding test` | `Golang Coding Test for Hiring Go Developers | SetBenchmark` |
| 25 | `/skill-tests/data-structures-algorithms` | `data structures and algorithms test` | `Data Structures & Algorithms Test for Hiring | SetBenchmark` |
| 26 | `/skill-tests/system-design` | `system design assessment` | `System Design Assessment for Senior Engineers | SetBenchmark` |
| 27 | `/skill-tests/devops` | `devops skills test` | `DevOps Skills Test: Docker, Kubernetes, CI/CD | SetBenchmark` |
| 28 | `/skill-tests/data-science` | `data science test for hiring` | `Data Science Test for Hiring Data Scientists | SetBenchmark` |
| 29 | `/skill-tests/aws` | `aws skills assessment` | `AWS Skills Assessment for Cloud Engineers | SetBenchmark` |

**Required Data on Each Skill Page:**
- Test duration (e.g. 45–60 mins) & question composition (MCQ, hands-on coding, scenario analysis).
- Skill competency rubric (e.g. Memory management, Async/await, Concurrency, Query optimization).
- Sample preview question with language badge.
- Instant "Try this test" or "Create assessment" CTA.

---

#### E. Pricing & Regional Landing Pages (Priority 0.8 – 0.9)

##### 30. Global Pricing
- **URL:** `/pricing`
- **Target Keyword:** `coding assessment pricing`
- **SEO Title:** `Pricing: Coding Test Plans from US$69/month | SetBenchmark`
- **Required Content & Data:**
  - Multi-currency switcher working without JavaScript (HTML accessible): USD, INR, AED, SAR, AUD, NZD.
  - Tiers:
    - **Starter:** US$69 / ₹3,999 / mo (billed annually) — for early teams and individual recruiters.
    - **Growth:** US$299 / ₹17,999 / mo (billed annually) — custom tests, ATS integrations, AI interviews.
    - **Enterprise:** Custom quotation — unlimited attempts, custom SLAs, dedicated manager.
  - Feature comparison matrix, 14-day free trial CTA, FAQ accordion with `FAQPage` schema.

##### Regional Landing Pages (Market Specifics)

| # | URL | Region / Currency | Target Keyword | Key Value Proposition / Proof Points |
|---|---|---|---|---|
| 31 | `/india` | India (`₹ INR`) | `coding assessment platform India` | DPDP Act compliance, local Indian data centers (primary + backup), campus hiring engine, INR invoicing. |
| 32 | `/uae` | UAE (`AED`) | `technical assessment platform UAE` | Dubai/Abu Dhabi local sales support, English/Arabic platform readiness, Gulf tech hiring standards. |
| 33 | `/saudi-arabia` | Saudi Arabia (`SAR`) | `coding assessment platform Saudi Arabia` | Vision 2030 digital talent initiatives, local compliance, KSA billing. |
| 34 | `/australia` | Australia (`AUD`) | `developer assessment platform Australia` | Privacy Act compliance, Sydney/Melbourne time-zone support, AUD billing. |
| 35 | `/new-zealand` | New Zealand (`NZD`) | `coding test platform New Zealand` | Local NZ compliance, low-competition ranking focus, local support. |

---

#### F. Comparison, Blog & Resources (Priority 0.6 – 0.8)

##### 36. HackerRank Alternatives Comparison
- **URL:** `/compare/hackerrank-alternatives`
- **Target Keyword:** `hackerrank alternatives`
- **SEO Title:** `HackerRank Alternatives (2026): Honest Comparison | SetBenchmark`
- **Required Content & Data:**
  - Objective side-by-side feature matrix (SetBenchmark vs. HackerRank, HackerEarth, CodeSignal, Codility).
  - Core differentiators: AI fluency screening, human-in-the-loop proctoring, transparent pricing ($69 vs. $82+), modern UI.
  - Migration assistance offer for Growth & Enterprise switchers.

##### 37. Blog Hub
- **URL:** `/blog`
- **Target Keyword:** `technical hiring blog`
- **SEO Title:** `Technical Hiring Blog and Guides | SetBenchmark`

##### Blog Post Guides (Structured with `BlogPosting` Schema)
- **38. `/blog/assessing-developers-in-the-age-of-ai`**
  - **Keyword:** `assess developers AI`
  - **Title:** `How to Assess Developers in the Age of AI (2026 Guide) | SetBenchmark`
- **39. `/blog/how-to-prevent-cheating-in-online-coding-tests`**
  - **Keyword:** `prevent cheating online coding test`
  - **Title:** `How to Prevent Cheating in Online Coding Tests | SetBenchmark`
- **40. `/blog/campus-hiring-coding-assessment-guide`**
  - **Keyword:** `campus hiring coding assessment`
  - **Title:** `Campus Hiring Coding Assessment: A Practical Guide | SetBenchmark`
- **41. `/blog/how-to-design-a-fair-coding-assessment`**
  - **Keyword:** `fair coding assessment`
  - **Title:** `How to Design a Fair Coding Assessment: 12-Point Checklist | SetBenchmark`

---

#### G. Trust, Company & Legal (Priority 0.2 – 0.6)

##### 42. Security & Compliance
- **URL:** `/security`
- **Target Keyword:** `assessment platform security`
- **SEO Title:** `Security, Privacy and Compliance | SetBenchmark`
- **Required Content:** Encryption at rest & transit, SOC 2 / ISO readiness, DPDP & GDPR compliance, strict rule: *Customer assessment data is NEVER used to train external AI models*.

##### 43. About
- **URL:** `/about`
- **Target Keyword:** `about SetBenchmark`
- **SEO Title:** `About SetBenchmark | Built by Kombee Technologies`
- **Required Content:** Founding team story, vision, built by Kombee Technologies, office locations (India, UAE, ANZ).

##### 44. Contact & Sales Demo
- **URL:** `/contact`
- **Target Keyword:** `book demo coding assessment`
- **SEO Title:** `Book a Demo of SetBenchmark | Contact Sales`
- **Required Content:** Direct interactive demo booking form, enterprise contact options.

##### 45–47. Legal Pages (Non-Targeted / `priority: 0.2`)
- **`/legal/privacy`**: Privacy Policy (data collection, cookies, candidate protection, grievance officer details).
- **`/legal/terms`**: Terms of Service (enterprise licensing, subscription terms, usage rights).
- **`/legal/refund-policy`**: Refund and cancellation policy.

##### 48. Custom 404 Page
- **URL:** `/404`
- **SEO Title:** `Page Not Found | SetBenchmark`
- **Required Content:** Helpful navigation links back to Home, Product, Skill Tests, and Contact.

---

## 3. Technical SEO Standards for Every Page

Every single page on the website must fulfill the following mandatory technical SEO baseline:

1. **Rendering & Architecture:**
   - Static HTML pre-rendered at build time (instant TTFB, zero client-side JS rendering required for bots).
2. **Metadata Limits:**
   - **Page Title:** Max 60 characters, format: `[Page Title] · SetBenchmark` (or `| SetBenchmark`).
   - **Meta Description:** 140–160 characters, containing primary keyword + value hook.
3. **Heading Hierarchy:**
   - Exactly **one `<h1>`** per page matching the page's core topic/keyword.
   - Strictly ordered `<h2>` and `<h3>` tags with no level skips.
4. **Canonical URL:**
   - Every page must declare `<link rel="canonical" href="https://www.setbenchmark.com/...">`.
5. **Open Graph & Twitter Cards:**
   ```html
   <meta property="og:title" content="...">
   <meta property="og:description" content="...">
   <meta property="og:url" content="https://www.setbenchmark.com/...">
   <meta property="og:type" content="website">
   <meta property="og:image" content="https://www.setbenchmark.com/og/setbenchmark-og.png">
   <meta name="twitter:card" content="summary_large_image">
   ```
6. **Structured Data (Schema.org JSON-LD):**
   - **All pages:** `Organization`, `WebSite`.
   - **Inner pages:** `BreadcrumbList`.
   - **Product & Pricing:** `SoftwareApplication` with price specification.
   - **FAQ sections:** `FAQPage`.
   - **Blog posts:** `BlogPosting`.
   - **Skill test index:** `ItemList`.
7. **Internal Linking Rule:**
   - Every single page must be linked from **at least three places**: Mega-menu navigation, footer directory, breadcrumb, or contextual "Related" cards.
8. **Core Web Vitals & Accessibility:**
   - Self-hosted fonts (`Instrument Sans`, `JetBrains Mono`) with `font-display: swap` to prevent CLS.
   - WebP / AVIF images with explicit `width` and `height` attributes.
   - Target Lighthouse score: **95+** in Performance, Accessibility, Best Practices, and SEO.

---

## 4. Business Claims & Placeholders (Pre-Launch Verification)

Before publishing pages live, ensure all business claims match current operational realities:

| Claim on Site | Affected Pages | Verification Required |
|---|---|---|
| **Starter ($69 / ₹3,999), Growth ($299 / ₹17,999)** | Pricing, Home, Region pages | Confirm final tier packaging with leadership |
| **14-day free trial with 10 attempts (no credit card)** | Pricing, CTAs, Hero | Confirm trial allocation limits in auth service |
| **"40+ languages and frameworks"** | Coding assessments, DSA test | Ensure language runner environments are validated |
| **"Thousands of questions in library"** | Question library, Product | Confirm initial question bank count at launch |
| **Phase 1 Integrations (Greenhouse, Lever, Ashby, etc.)** | Integrations, Pricing | Ensure live connectors or waitlists are marked accurately |
| **Phase 2 Integrations (Workday, SAP, iCIMS, Desktop App)** | Integrations, Proctoring | Confirm tagged clearly as *"in 2027"* |
| **Data stored locally in India for Indian customers** | India page, Security, Privacy | Confirm AWS/GCP region configuration (e.g. Mumbai + Hyderabad backup) |
| **Customer data never used to train external models** | Security, AI Fluency, AI Interviews | Confirm AI vendor enterprise agreements (Anthropic/OpenAI Zero Data Retention) |

---

## 5. Launch & Operational Checklist

### Before Going Live
- [ ] Review and confirm all pricing and trial numbers.
- [ ] Complete legal counsel review of Privacy Policy, Terms, and Refund Policy; insert registered legal entity address and grievance officer contacts.
- [ ] Verify DNS setup: `setbenchmark.com` 301 redirects to `https://www.setbenchmark.com`.
- [ ] Connect demo request and contact forms directly to CRM / sales notification pipeline; test submission end-to-end.
- [ ] Integrate analytics (GA4 / Plausible) and set conversion goals for `Start Free Trial` and `Book Demo`.
- [ ] Run Lighthouse audits across Home, Pricing, and Skill Tests (score >= 95).
- [ ] Confirm staging environments have `X-Robots-Tag: noindex, nofollow`.

### Launch Day
- [ ] Verify domain ownership in Google Search Console and Bing Webmaster Tools.
- [ ] Submit XML Sitemap: `https://www.setbenchmark.com/sitemap.xml`.
- [ ] Request manual indexation of priority pages: `/`, `/pricing`, `/product`, `/india`, `/compare/hackerrank-alternatives`.
- [ ] Run Google Rich Results Test on structured data schemas.
- [ ] Publish LinkedIn company page and directory listings (G2, Capterra, SaaSworthy, Product Hunt).

### Monthly Maintenance Cadence
- [ ] **Search Console Review:** Track impressions, CTR, and average position across India, UAE, KSA, ANZ, and US.
- [ ] **Content Expansion:** Publish minimum 2 new tactical guides per month (e.g., *How to assess AI coding skills*, *Campus hiring calendar India*).
- [ ] **Comparison Expansion:** Add competitor teardowns (vs. Codility, CodeSignal, HackerEarth, iMocha).
- [ ] **Skill Test Catalog Expansion:** Add new language/framework tests (C#/.NET, Kotlin, Swift, Flutter, PHP).
- [ ] **Quarterly Refresh:** Update top 10 performing landing pages with fresh benchmarks, year updates, and case studies.

