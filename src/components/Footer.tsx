import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const handleFooterLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    if (link) {
      const resetScroll = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        if (document.body) {
          document.body.scrollTop = 0;
        }
      };
      resetScroll();
      requestAnimationFrame(resetScroll);
      setTimeout(resetScroll, 50);
    }
  };

  return (
    <footer className="ftr" onClick={handleFooterLinkClick}>
      <div className="wrap">
        <div className="ftr-grid">
          {/* Column 1: Brand Info */}
          <div className="ftr-brand-col">
            <Link to="/" className="brand" aria-label="SetBenchmark home">
              <BrandLogo variant="dark" size={28} />
            </Link>
            <p style={{ marginTop: '16px', maxWidth: '280px', lineHeight: '1.5', color: '#94A3B8' }}>
              Technical assessments, AI interviews and skills intelligence for teams hiring engineers in the AI era.
            </p>
            <p style={{ marginTop: '14px', fontSize: '14px' }}>
              <a href="mailto:sales@setbenchmark.com" style={{ color: 'var(--brand, #26D07C)' }}>
                sales@setbenchmark.com
              </a>
            </p>
          </div>

          {/* Column 2: Product (9 pages) */}
          <div>
            <h2>Product</h2>
            <ul>
              <li><Link to="/product/">Platform overview</Link></li>
              <li><Link to="/product/coding-assessments/">Coding assessments</Link></li>
              <li><Link to="/product/ai-fluency-assessments/">AI fluency assessments</Link></li>
              <li><Link to="/product/ai-interviews/">AI automated interviews</Link></li>
              <li><Link to="/product/live-coding-interviews/">Live coding interviews</Link></li>
              <li><Link to="/product/proctoring-integrity/">Proctoring &amp; integrity</Link></li>
              <li><Link to="/product/skills-intelligence/">Skills intelligence</Link></li>
              <li><Link to="/product/question-library/">Question library</Link></li>
              <li><Link to="/integrations/">ATS integrations</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions (6 pages) */}
          <div>
            <h2>Solutions</h2>
            <ul>
              <li><Link to="/solutions/">Solutions overview</Link></li>
              <li><Link to="/solutions/campus-hiring/">Campus hiring</Link></li>
              <li><Link to="/solutions/enterprise-tech-hiring/">Enterprise tech hiring</Link></li>
              <li><Link to="/solutions/it-services-staffing/">IT services &amp; staffing</Link></li>
              <li><Link to="/solutions/startups/">Startups</Link></li>
              <li><Link to="/developers/">For developers</Link></li>
            </ul>
          </div>

          {/* Column 4: Skill Tests (13 pages) */}
          <div>
            <h2>Skill tests</h2>
            <ul>
              <li><Link to="/skill-tests/">All skill tests (Hub)</Link></li>
              <li><Link to="/skill-tests/python/">Python coding test</Link></li>
              <li><Link to="/skill-tests/javascript/">JavaScript test</Link></li>
              <li><Link to="/skill-tests/react/">React test</Link></li>
              <li><Link to="/skill-tests/java/">Java coding test</Link></li>
              <li><Link to="/skill-tests/nodejs/">Node.js test</Link></li>
              <li><Link to="/skill-tests/golang/">Go (Golang) test</Link></li>
              <li><Link to="/skill-tests/sql/">PostgreSQL &amp; SQL test</Link></li>
              <li><Link to="/skill-tests/aws/">AWS cloud test</Link></li>
              <li><Link to="/skill-tests/devops/">Docker &amp; DevOps test</Link></li>
              <li><Link to="/skill-tests/system-design/">System design test</Link></li>
              <li><Link to="/skill-tests/data-science/">Data science test</Link></li>
              <li><Link to="/skill-tests/data-structures-algorithms/">Algorithms &amp; DSA test</Link></li>
            </ul>
          </div>

          {/* Column 5: Pricing & Regions (6 pages) */}
          <div>
            <h2>Pricing &amp; Regions</h2>
            <ul>
              <li><Link to="/pricing/">Pricing &amp; plans</Link></li>
              <li><Link to="/india/">India (₹ INR)</Link></li>
              <li><Link to="/uae/">United Arab Emirates (AED)</Link></li>
              <li><Link to="/saudi-arabia/">Saudi Arabia (SAR)</Link></li>
              <li><Link to="/australia/">Australia (AUD)</Link></li>
              <li><Link to="/new-zealand/">New Zealand (NZD)</Link></li>
            </ul>
          </div>

          {/* Column 6: Resources (9 pages) */}
          <div>
            <h2>Resources</h2>
            <ul>
              <li><Link to="/blog/">Technical hiring blog</Link></li>
              <li><Link to="/blog/assessing-developers-in-the-age-of-ai/">Assessing developers in AI era</Link></li>
              <li><Link to="/blog/how-to-prevent-cheating-in-online-coding-tests/">Preventing test cheating</Link></li>
              <li><Link to="/blog/campus-hiring-coding-assessment-guide/">Campus assessment guide</Link></li>
              <li><Link to="/blog/how-to-design-a-fair-coding-assessment/">Fair assessment checklist</Link></li>
              <li><Link to="/compare/hackerrank-alternatives/">HackerRank alternatives</Link></li>
              <li><Link to="/security/">Security &amp; compliance</Link></li>
              <li><Link to="/about/">About SetBenchmark</Link></li>
              <li><Link to="/contact/">Contact &amp; sales</Link></li>
            </ul>
          </div>

          {/* Column 7: Legal (3 pages, excluding 404) */}
          <div>
            <h2>Legal</h2>
            <ul>
              <li><Link to="/legal/privacy/">Privacy policy</Link></li>
              <li><Link to="/legal/terms/">Terms of service</Link></li>
              <li><Link to="/legal/refund-policy/">Refund &amp; cancellation</Link></li>
            </ul>
          </div>
        </div>

        <div className="ftr-bot">
          <span>&copy; 2026 Kombee Technologies (India) Pvt. Ltd.. All rights reserved.</span>
          <span>SetBenchmark is a product of Kombee Technologies.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
