import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';

interface SitemapItem {
  title: string;
  url: string;
  description: string;
  badge?: string;
}

interface SitemapCategory {
  category: string;
  icon: string;
  description: string;
  items: SitemapItem[];
}

const SITEMAP_DATA: SitemapCategory[] = [
  {
    category: 'Product Capabilities & Tools',
    icon: '⚡',
    description: 'Technical assessment modules, AI evaluations, proctoring integrity, and live interview workspaces.',
    items: [
      {
        title: 'Product Overview',
        url: '/product/',
        description: 'Comprehensive overview of SetBenchmark’s platform architecture and evaluation engine.',
        badge: 'Hub'
      },
      {
        title: 'Coding Assessments',
        url: '/product/coding-assessments/',
        description: 'Multi-file repository coding tasks scored on correctness, architecture, and edge cases.'
      },
      {
        title: 'AI Fluency Assessments',
        url: '/product/ai-fluency-assessments/',
        description: 'Evaluate how effectively candidates direct coding agents and review AI-generated code.'
      },
      {
        title: 'AI Automated Interviews',
        url: '/product/ai-interviews/',
        description: 'Structured, conversational first-round technical interviews with automated scoring.'
      },
      {
        title: 'Live Coding Interviews',
        url: '/product/live-coding-interviews/',
        description: 'Collaborative real-time code editor, video calls, shared terminal, and synchronized test runner.'
      },
      {
        title: 'Proctoring & Integrity Signals',
        url: '/product/proctoring-integrity/',
        description: 'Layered anomaly detection, typing cadences, and paste signals with mandatory blind human review.'
      },
      {
        title: 'Skills Intelligence Engine',
        url: '/product/skills-intelligence/',
        description: 'Benchmark engineering teams, discover organizational skill gaps, and track skill growth over time.'
      },
      {
        title: 'Enterprise Question Library',
        url: '/product/question-library/',
        description: '400+ calibrated real-world questions across frontend, backend, system design, and DevOps.'
      },
      {
        title: 'ATS & HRIS Integrations',
        url: '/integrations/',
        description: 'Native two-way sync with Greenhouse, Lever, Workday, BambooHR, Slack, and webhooks.'
      },
      {
        title: 'Transparent Pricing & Plans',
        url: '/pricing/',
        description: 'Local pricing in INR, AED, and USD with transparent tiers for startups, scaleups, and enterprises.'
      }
    ]
  },
  {
    category: 'Hiring Solutions by Team',
    icon: '🏢',
    description: 'Tailored assessment workflows designed for campus drives, enterprise standards, and rapid hiring.',
    items: [
      {
        title: 'Solutions Overview',
        url: '/solutions/',
        description: 'Role-based technical hiring solutions tailored for enterprise, campus, and high-growth hiring bars.',
        badge: 'Hub'
      },
      {
        title: 'Campus Hiring Engine',
        url: '/solutions/campus-hiring/',
        description: 'Test thousands of students concurrently with automated proctoring and same-day fair shortlisting.'
      },
      {
        title: 'Enterprise Tech Hiring',
        url: '/solutions/enterprise-tech-hiring/',
        description: 'Standardized hiring rubrics, shared question pools, and role scorecards across distributed business units.'
      },
      {
        title: 'IT Services & Staffing',
        url: '/solutions/it-services-staffing/',
        description: 'Client-ready skill verification reports and rapid bench deployment assessments.'
      },
      {
        title: 'High-Growth Startups',
        url: '/solutions/startups/',
        description: 'Turn job descriptions into validated assessments in minutes and automate early-stage filtering.'
      },
      {
        title: 'For Developers & Candidates',
        url: '/developers/',
        description: 'Transparent candidate experience with warm-up challenges, practice questions, and accessibility accommodations.'
      }
    ]
  },
  {
    category: 'Skill Tests & Benchmarks',
    icon: '💻',
    description: 'Ready-made, validated technical tests for every modern programming language, framework, and engineering tier.',
    items: [
      {
        title: 'All Skill Tests Directory',
        url: '/skill-tests/',
        description: 'Directory of 400+ role-calibrated benchmarks across backend, frontend, database, and infrastructure.',
        badge: 'Hub'
      },
      {
        title: 'Python Coding Test',
        url: '/skill-tests/python/',
        description: 'Assess idiomatic Python, data structures, concurrency, typing, and standard libraries.'
      },
      {
        title: 'JavaScript Coding Test',
        url: '/skill-tests/javascript/',
        description: 'Test core ES6+ language knowledge, asynchronous event loops, DOM, and node runtime fundamentals.'
      },
      {
        title: 'React Skills Test',
        url: '/skill-tests/react/',
        description: 'Evaluate React component lifecycles, custom hooks, state management, and render performance.'
      },
      {
        title: 'Java Coding Test',
        url: '/skill-tests/java/',
        description: 'Enterprise Java assessment covering JVM concurrency, Spring Boot patterns, and memory efficiency.'
      },
      {
        title: 'Node.js Backend Test',
        url: '/skill-tests/nodejs/',
        description: 'Measure asynchronous API design, microservices, stream handling, and Express/Nest patterns.'
      },
      {
        title: 'Go (Golang) Coding Test',
        url: '/skill-tests/golang/',
        description: 'Assess goroutines, channels, interfaces, high-throughput microservices, and error handling in Go.'
      },
      {
        title: 'PostgreSQL & SQL Test',
        url: '/skill-tests/sql/',
        description: 'Test complex querying, query optimization, indexing strategies, migrations, and ACID isolation.'
      },
      {
        title: 'AWS Cloud Skills Test',
        url: '/skill-tests/aws/',
        description: 'Assess architecture on AWS: Lambda, ECS, DynamoDB, VPC networking, IAM security, and cost tuning.'
      },
      {
        title: 'Docker & DevOps Test',
        url: '/skill-tests/devops/',
        description: 'Evaluate container orchestration, CI/CD pipelines, Infrastructure as Code (Terraform), and Linux sysadmin.'
      },
      {
        title: 'System Design Interview Test',
        url: '/skill-tests/system-design/',
        description: 'Benchmark architectural judgment: scalability, distributed caching, partitioning, and resilience.'
      },
      {
        title: 'Data Science & Python Test',
        url: '/skill-tests/data-science/',
        description: 'Evaluate feature engineering, model selection, metrics evaluation, pandas, and statistical rigor.'
      },
      {
        title: 'Algorithms & DSA Test',
        url: '/skill-tests/data-structures-algorithms/',
        description: 'Assess time/space complexity analysis, graph algorithms, dynamic programming, and tree traversals.'
      }
    ]
  },
  {
    category: 'Regional Editions & Compliance',
    icon: '🌐',
    description: 'Region-specific compliance standards, in-country data residency, and local currency billing.',
    items: [
      {
        title: 'India Regional Edition (₹ INR)',
        url: '/india/',
        description: 'Built for India: DPDP Act compliance, Mumbai AWS data center residency, and nationwide campus drives.'
      },
      {
        title: 'United Arab Emirates (AED)',
        url: '/uae/',
        description: 'UAE Federal Decree-Law No. 45 compliance, Dubai & Abu Dhabi tech recruitment bars, and local AED billing.'
      },
      {
        title: 'Saudi Arabia (SAR)',
        url: '/saudi-arabia/',
        description: 'Aligned with KSA Personal Data Protection Law (PDPL) and Vision 2030 digital talent transformation.'
      },
      {
        title: 'Australia Edition (AUD)',
        url: '/australia/',
        description: 'Australian Privacy Principles (APPs) compliance, Sydney data residency, and AUD billing.'
      },
      {
        title: 'New Zealand Edition (NZD)',
        url: '/new-zealand/',
        description: 'New Zealand Privacy Act 2020 compliance, Trans-Tasman data protection, and NZD invoicing.'
      }
    ]
  },
  {
    category: 'Engineering Blog & Guides',
    icon: '📚',
    description: 'In-depth engineering hiring research, cheating prevention analyses, and fair assessment checklists.',
    items: [
      {
        title: 'Engineering Blog Hub',
        url: '/blog/',
        description: 'Articles, benchmarks, and research on technical hiring in the artificial intelligence era.',
        badge: 'Hub'
      },
      {
        title: 'Assessing Developers in the Age of AI',
        url: '/blog/assessing-developers-in-the-age-of-ai/',
        description: 'Why asking developers to write raw boilerplate is obsolete, and how to measure real-world prompt judgment.'
      },
      {
        title: 'Campus Hiring Coding Assessment Guide',
        url: '/blog/campus-hiring-coding-assessment-guide/',
        description: 'How to structure multi-tier university hiring drives that filter signal from noise with zero cheating.'
      },
      {
        title: 'How to Design a Fair Coding Assessment',
        url: '/blog/how-to-design-a-fair-coding-assessment/',
        description: '12-point rubric for unbiased evaluation, neurodiversity accommodations, and relevant challenges.'
      },
      {
        title: 'How to Prevent Cheating in Online Coding Tests',
        url: '/blog/how-to-prevent-cheating-in-online-coding-tests/',
        description: 'The science behind prompt traps, paste signatures, and why automated rejections hurt your employer brand.'
      }
    ]
  },
  {
    category: 'Comparisons & Vendor Alternatives',
    icon: '⚖️',
    description: 'Objective side-by-side feature, pricing, and candidate experience comparisons against legacy platforms.',
    items: [
      {
        title: 'HackerRank Alternatives (2026 Comparison)',
        url: '/compare/hackerrank-alternatives/',
        description: 'Detailed feature, anti-cheating, AI evaluation, and pricing comparison between SetBenchmark and HackerRank.'
      }
    ]
  },
  {
    category: 'Company, Trust & Legal Governance',
    icon: '🛡️',
    description: 'Corporate transparency, SOC 2 / ISO readiness, data protection safeguards, and legal terms.',
    items: [
      {
        title: 'About SetBenchmark',
        url: '/about/',
        description: 'Our mission, story, leadership, and why we believe engineering assessment must evolve with AI.'
      },
      {
        title: 'Security, Privacy & Infrastructure',
        url: '/security/',
        description: 'Enterprise data security, encryption at rest/in transit, zero biometric storage, and vulnerability bounty.'
      },
      {
        title: 'Contact & Sales',
        url: '/contact/',
        description: 'Speak with our technical talent consultants, request a custom enterprise sandbox, or reach support.'
      },
      {
        title: 'HTML Sitemap & Directory',
        url: '/sitemap/',
        description: 'Complete directory of all indexable pages across SetBenchmark website.',
        badge: 'Current'
      },
      {
        title: 'Privacy Policy',
        url: '/legal/privacy/',
        description: 'Complete transparency on candidate and recruiter data collection, retention, and GDPR / DPDP compliance.'
      },
      {
        title: 'Terms of Service',
        url: '/legal/terms/',
        description: 'Platform service terms, acceptable use policies, uptime SLAs, and subscription agreements.'
      },
      {
        title: 'Refund & Cancellation Policy',
        url: '/legal/refund-policy/',
        description: '14-day trial policies, subscription cancellation terms, and enterprise refund guidelines.'
      }
    ]
  }
];

export const Sitemap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return SITEMAP_DATA;
    const term = searchTerm.toLowerCase();

    return SITEMAP_DATA.map((cat) => {
      const filteredItems = cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.url.toLowerCase().includes(term)
      );
      return {
        ...cat,
        items: filteredItems
      };
    }).filter((cat) => cat.items.length > 0);
  }, [searchTerm]);

  const totalPagesCount = useMemo(() => {
    return SITEMAP_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="HTML Sitemap & Complete Site Directory | SetBenchmark"
        description="Explore the complete directory of SetBenchmark pages: coding assessment tools, AI fluency tests, regional editions, skill benchmarks, and engineering guides."
        canonical="https://www.setbenchmark.com/sitemap/"
      />

      <div className="sitemap-page">
        {/* Hero Section */}
        <section className="sitemap-hero">
          <div className="wrap">
            <div className="sitemap-hero-content center">
              <div className="eyebrow" style={{ color: 'var(--brand, #26D07C)', marginBottom: '12px' }}>
                Complete Site Directory
              </div>
              <h1 className="h1" style={{ color: '#FFFFFF', marginBottom: '16px' }}>
                SetBenchmark HTML Sitemap
              </h1>
              <p className="lead" style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto 28px' }}>
                Quickly locate any page across our assessment platform, role-specific engineering benchmarks,
                compliance documentation, and developer hiring guides.
              </p>

              {/* Live Search Bar */}
              <div className="sitemap-search-wrap">
                <div className="sitemap-search-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="sitemap-search-icon"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by topic, skill, role, or feature (e.g. 'Python', 'Campus', 'Privacy')..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="sitemap-search-input"
                    aria-label="Search sitemap"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      className="sitemap-search-clear"
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <div className="sitemap-count-pill">
                  Showing <b>{filteredCategories.reduce((acc, c) => acc + c.items.length, 0)}</b> of {totalPagesCount} pages
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="sitemap-body section">
          <div className="wrap">
            {filteredCategories.length === 0 ? (
              <div className="sitemap-empty center">
                <p>No pages found matching &ldquo;<b>{searchTerm}</b>&rdquo;.</p>
                <button
                  type="button"
                  className="btn btn-sm btn-ghost"
                  onClick={() => setSearchTerm('')}
                  style={{ marginTop: '12px' }}
                >
                  Clear search filter
                </button>
              </div>
            ) : (
              <div className="sitemap-categories-stack">
                {filteredCategories.map((cat, idx) => (
                  <div key={idx} className="sitemap-cat-block">
                    <div className="sitemap-cat-header">
                      <div className="sitemap-cat-title-wrap">
                        <span className="sitemap-cat-icon">{cat.icon}</span>
                        <div>
                          <h2 className="sitemap-cat-title">{cat.category}</h2>
                          <p className="sitemap-cat-desc">{cat.description}</p>
                        </div>
                      </div>
                      <span className="sitemap-cat-badge">{cat.items.length} {cat.items.length === 1 ? 'Page' : 'Pages'}</span>
                    </div>

                    <div className="sitemap-items-grid">
                      {cat.items.map((item, itemIdx) => (
                        <Link key={itemIdx} to={item.url} className="sitemap-card">
                          <div className="sitemap-card-top">
                            <h3 className="sitemap-card-title">{item.title}</h3>
                            {item.badge && <span className="sitemap-pill">{item.badge}</span>}
                          </div>
                          <p className="sitemap-card-desc">{item.description}</p>
                          <div className="sitemap-card-url">
                            <code>{item.url}</code>
                            <span className="sitemap-card-arrow">&rarr;</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
