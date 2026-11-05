import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          {/* Brand Info */}
          <div>
            <Link to="/" className="brand" aria-label="SetBenchmark home">
              <BrandLogo variant="dark" size={28} />
            </Link>
            <p style={{ marginTop: '16px', maxWidth: '280px' }}>
              Technical assessments, AI interviews and skills intelligence for teams hiring engineers in the AI era.
            </p>
            <p style={{ marginTop: '16px' }}>
              <a href="mailto:sales@setbenchmark.com">sales@setbenchmark.com</a>
            </p>
          </div>

          {/* Product */}
          <div>
            <h2>Product</h2>
            <ul>
              <li><Link to="/product/coding-assessments/">Coding assessments</Link></li>
              <li><Link to="/product/ai-fluency-assessments/">AI fluency assessments</Link></li>
              <li><Link to="/product/ai-interviews/">AI interviews</Link></li>
              <li><Link to="/product/live-coding-interviews/">Live coding interviews</Link></li>
              <li><Link to="/product/proctoring-integrity/">Proctoring and integrity</Link></li>
              <li><Link to="/product/skills-intelligence/">Skills intelligence</Link></li>
              <li><Link to="/product/question-library/">Question library</Link></li>
              <li><Link to="/integrations/">Integrations</Link></li>
              <li><Link to="/pricing/">Pricing</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2>Solutions</h2>
            <ul>
              <li><Link to="/solutions/campus-hiring/">Campus hiring</Link></li>
              <li><Link to="/solutions/enterprise-tech-hiring/">Enterprise tech hiring</Link></li>
              <li><Link to="/solutions/it-services-staffing/">IT services and staffing</Link></li>
              <li><Link to="/solutions/startups/">Startups</Link></li>
              <li><Link to="/developers/">For developers</Link></li>
            </ul>
          </div>

          {/* Skill Tests */}
          <div>
            <h2>Skill tests</h2>
            <ul>
              <li><Link to="/skill-tests/java/">Java coding test</Link></li>
              <li><Link to="/skill-tests/python/">Python coding test</Link></li>
              <li><Link to="/skill-tests/javascript/">JavaScript test</Link></li>
              <li><Link to="/skill-tests/react/">React test</Link></li>
              <li><Link to="/skill-tests/sql/">SQL test</Link></li>
              <li><Link to="/skill-tests/">All skill tests</Link></li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h2>Regions</h2>
            <ul>
              <li><Link to="/india/">India</Link></li>
              <li><Link to="/uae/">United Arab Emirates</Link></li>
              <li><Link to="/saudi-arabia/">Saudi Arabia</Link></li>
              <li><Link to="/australia/">Australia</Link></li>
              <li><Link to="/new-zealand/">New Zealand</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link to="/about/">About us</Link></li>
              <li><Link to="/blog/">Blog</Link></li>
              <li><Link to="/security/">Security and privacy</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
              <li><Link to="/legal/privacy/">Privacy policy</Link></li>
              <li><Link to="/legal/terms/">Terms of service</Link></li>
              <li><Link to="/legal/refund-policy/">Refund and cancellation</Link></li>
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

