import React from 'react';
import { SEOHead } from '@/components/SEOHead';

const RAW_CONTENT = `<div>
<!-- Dark Blogs Hero matching Reference -->
<section class="blog-hero">
  <div class="wrap">
    <div class="eyebrow">Guides & Insights</div>
    <h1>SetBenchmark Engineering Blog</h1>
    <p>Stay ahead of the curve with the latest insights, playbooks, and benchmarks in engineering evaluation, AI-era testing, and fair technical hiring.</p>
    
    <div class="blog-search-bar">
      <svg class="blog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" class="blog-search-input" placeholder="Search guides by topic, role or keyword..." aria-label="Search blog posts"/>
    </div>

    <div class="blog-categories">
      <a href="/blog/" class="blog-cat-pill active">All Guides</a>
      <a href="/blog/" class="blog-cat-pill">Assessment Design</a>
      <a href="/blog/" class="blog-cat-pill">Integrity & Proctoring</a>
      <a href="/blog/" class="blog-cat-pill">Campus Hiring</a>
      <a href="/blog/" class="blog-cat-pill">AI & Agents</a>
      <a href="/blog/" class="blog-cat-pill">Fairness & DPDP</a>
    </div>
  </div>
</section>

<!-- Recent Blog Posts Section (Featured + Stacked) -->
<section class="section" style="padding:72px 0 56px">
  <div class="wrap">
    <div class="head" style="margin-bottom:32px">
      <div class="eyebrow">Highlights</div>
      <h2 class="h2">Recent blog posts</h2>
    </div>

    <div class="recent-blogs-grid">
      <!-- Large Featured Card -->
      <a href="/blog/assessing-developers-in-the-age-of-ai/" class="featured-blog-card">
        <div class="thumb-wrap">
          <img src="/images/product/C07-Agentic.webp" alt="Assessing engineers on planning and supervising AI coding agents" width="720" height="420" loading="eager" decoding="async"/>
        </div>
        <div class="card-body">
          <div class="blog-meta-row">
            <span class="blog-tag-badge">Assessment Design</span>
            <span>·</span>
            <span>30 October 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h3>How to assess developers in the age of AI</h3>
          <p>AI assistants write a lot of code now. The skills that separate strong engineers have moved to planning, reviewing and verifying. Learn how to redesign technical assessments that measure real working style.</p>
          <div class="blog-card-footer">
            <div class="blog-author-row">
              <div class="blog-author-avatar">SB</div>
              <div class="blog-author-info">
                <span class="blog-author-name">SetBenchmark Engineering</span>
                <span class="blog-author-role">Evaluation Architecture</span>
              </div>
            </div>
            <span class="blog-read-btn">
              Read Guide
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </span>
          </div>
        </div>
      </a>

      <!-- Stacked Right Column Cards -->
      <div class="recent-stacked-col">
        <a href="/blog/how-to-prevent-cheating-in-online-coding-tests/" class="stacked-blog-card">
          <div class="thumb-wrap">
            <img src="/images/product/H13-Integrity.webp" alt="Integrity review and evidence in SetBenchmark" width="360" height="240" loading="eager" decoding="async"/>
          </div>
          <div class="card-body">
            <div class="blog-meta-row">
              <span class="blog-tag-badge">Integrity</span>
              <span>·</span>
              <span>30 Oct 2026</span>
            </div>
            <h3>How to prevent cheating in online coding tests</h3>
            <p>Practical ways to reduce cheating: test design, structural similarity, and a human review process that protects honest candidates.</p>
            <div class="blog-card-footer" style="padding-top:12px">
              <span class="blog-read-btn" style="padding:4px 10px;font-size:12.5px">
                Read Guide →
              </span>
            </div>
          </div>
        </a>

        <a href="/blog/campus-hiring-coding-assessment-guide/" class="stacked-blog-card">
          <div class="thumb-wrap">
            <img src="/images/product/H08-Pipeline.webp" alt="Campus recruitment pipeline and drive ranking" width="360" height="240" loading="eager" decoding="async"/>
          </div>
          <div class="card-body">
            <div class="blog-meta-row">
              <span class="blog-tag-badge">Campus Hiring</span>
              <span>·</span>
              <span>30 Oct 2026</span>
            </div>
            <h3>Campus hiring with coding assessments</h3>
            <p>A step-by-step plan for running fair, high-throughput campus drives across universities, from test design to shortlist.</p>
            <div class="blog-card-footer" style="padding-top:12px">
              <span class="blog-read-btn" style="padding:4px 10px;font-size:12.5px">
                Read Guide →
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- All Blog Posts Section (3-Column Grid) -->
<section class="section alt" style="padding:72px 0 96px">
  <div class="wrap">
    <div class="head" style="margin-bottom:36px">
      <div class="eyebrow">Archive & Playbooks</div>
      <h2 class="h2">All blog posts</h2>
    </div>

    <div class="grid g3">
      <!-- Card 1 -->
      <a href="/blog/assessing-developers-in-the-age-of-ai/" class="grid-blog-card">
        <div class="thumb-wrap">
          <img src="/images/product/C07-Agentic.webp" alt="Assessing engineers on planning and AI agents" width="480" height="270" loading="lazy" decoding="async"/>
        </div>
        <div class="card-body">
          <div class="blog-meta-row">
            <span class="blog-tag-badge">Assessment Design</span>
            <span>·</span>
            <span>30 Oct 2026</span>
          </div>
          <h3>How to assess developers in the age of AI</h3>
          <p>AI assistants write code quickly. The skills that separate great engineers have moved to planning, code verification, and agent direction.</p>
          <div class="blog-card-footer">
            <span style="font-size:12.5px;color:var(--text-3)">8 min read</span>
            <span class="blog-read-btn">Read →</span>
          </div>
        </div>
      </a>

      <!-- Card 2 -->
      <a href="/blog/how-to-prevent-cheating-in-online-coding-tests/" class="grid-blog-card">
        <div class="thumb-wrap">
          <img src="/images/product/H13-Integrity.webp" alt="Integrity review and evidence queue" width="480" height="270" loading="lazy" decoding="async"/>
        </div>
        <div class="card-body">
          <div class="blog-meta-row">
            <span class="blog-tag-badge">Integrity</span>
            <span>·</span>
            <span>30 Oct 2026</span>
          </div>
          <h3>How to prevent cheating in online coding tests</h3>
          <p>Combine better repository test design with layered telemetry signals and a double-blind human review process.</p>
          <div class="blog-card-footer">
            <span style="font-size:12.5px;color:var(--text-3)">9 min read</span>
            <span class="blog-read-btn">Read →</span>
          </div>
        </div>
      </a>

      <!-- Card 3 -->
      <a href="/blog/campus-hiring-coding-assessment-guide/" class="grid-blog-card">
        <div class="thumb-wrap">
          <img src="/images/product/H08-Pipeline.webp" alt="Campus hiring drive pipeline and ranking" width="480" height="270" loading="lazy" decoding="async"/>
        </div>
        <div class="card-body">
          <div class="blog-meta-row">
            <span class="blog-tag-badge">Campus Hiring</span>
            <span>·</span>
            <span>30 Oct 2026</span>
          </div>
          <h3>Campus hiring with coding assessments</h3>
          <p>Run fair, high-volume university drives. Structure 90-minute assessments, manage cut-offs, and move top students to interviews quickly.</p>
          <div class="blog-card-footer">
            <span style="font-size:12.5px;color:var(--text-3)">8 min read</span>
            <span class="blog-read-btn">Read →</span>
          </div>
        </div>
      </a>

      <!-- Card 4 -->
      <a href="/blog/how-to-design-a-fair-coding-assessment/" class="grid-blog-card">
        <div class="thumb-wrap">
          <img src="/images/product/A03-Fairness.webp" alt="Fair assessment rubric and group pass rate analytics" width="480" height="270" loading="lazy" decoding="async"/>
        </div>
        <div class="card-body">
          <div class="blog-meta-row">
            <span class="blog-tag-badge">Fairness & Rubrics</span>
            <span>·</span>
            <span>30 Oct 2026</span>
          </div>
          <h3>12-point rubric for fair coding assessments</h3>
          <p>A comprehensive audit checklist: role-aligned tasks, transparent AI rules, blind scoring rubrics, and group parity monitoring.</p>
          <div class="blog-card-footer">
            <span style="font-size:12.5px;color:var(--text-3)">6 min read</span>
            <span class="blog-read-btn">Read →</span>
          </div>
        </div>
      </a>

      <!-- Card 5 -->
      <a href="/product/coding-assessments/" class="grid-blog-card">
        <div class="thumb-wrap">
          <img src="/images/product/C05-Coding.webp" alt="Real-world online code editor with tests and timer" width="480" height="270" loading="lazy" decoding="async"/>
        </div>
        <div class="card-body">
          <div class="blog-meta-row">
            <span class="blog-tag-badge">Task Design</span>
            <span>·</span>
            <span>Guide</span>
          </div>
          <h3>Real-world coding tests vs puzzle tests</h3>
          <p>Why debugging real repositories and writing live SQL against real data predicts engineer performance far better than memorized algorithms.</p>
          <div class="blog-card-footer">
            <span style="font-size:12.5px;color:var(--text-3)">Product Guide</span>
            <span class="blog-read-btn">Explore →</span>
          </div>
        </div>
      </a>

      <!-- Card 6 -->
      <a href="/security/" class="grid-blog-card">
        <div class="thumb-wrap">
          <img src="/images/product/AD09-DataPrivacy.webp" alt="Security, encryption and DPDP compliance in SetBenchmark" width="480" height="270" loading="lazy" decoding="async"/>
        </div>
        <div class="card-body">
          <div class="blog-meta-row">
            <span class="blog-tag-badge">Privacy & DPDP</span>
            <span>·</span>
            <span>Compliance</span>
          </div>
          <h3>Candidate privacy in technical evaluation</h3>
          <p>How SetBenchmark handles data localization in India, candidate consent under DPDP, minimal retention, and respectful camera-free options.</p>
          <div class="blog-card-footer">
            <span style="font-size:12.5px;color:var(--text-3)">Security Whitepaper</span>
            <span class="blog-read-btn">Read →</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Footer CTA -->
<section class="section tight">
  <div class="wrap">
    <div class="cta">
      <div>
        <h2 class="h2">See SetBenchmark with your own roles</h2>
        <p>Start a 14-day free trial with 10 assessment attempts, or book a 30-minute demo with our team.</p>
      </div>
      <div class="btns">
        <a class="btn btn-lime" href="https://app.setbenchmark.com/signup">Start free trial</a>
        <a href="/contact/" class="btn btn-ghost on-dark">Book a demo</a>
      </div>
    </div>
  </div>
</section>
</div>`;

export const BlogIndex: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Technical Hiring Blog and Guides | SetBenchmark"
        description="Practical guides on assessing developers in the AI era, preventing cheating in coding tests, campus hiring and designing fair technical assessments."
        canonical="https://www.setbenchmark.com/blog"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.setbenchmark.com/blog" }
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

export default BlogIndex;
