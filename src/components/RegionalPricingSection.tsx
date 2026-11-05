import React from 'react';
import { Link } from 'react-router-dom';

interface RegionItem {
  id: string;
  name: string;
  price: string;
  detail: string;
  path: string;
  flag: React.ReactNode;
}

const REGIONS: RegionItem[] = [
  {
    id: 'india',
    name: 'India',
    price: 'From ₹3,999 / mo',
    detail: 'INR · GST tax invoices',
    path: '/india/',
    flag: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="country-flag-svg">
        <rect width="28" height="20" rx="3" fill="white" />
        <mask id="in-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
          <rect width="28" height="20" rx="3" fill="white" />
        </mask>
        <g mask="url(#in-mask)">
          <rect width="28" height="6.66" fill="#FF9933" />
          <rect y="6.66" width="28" height="6.68" fill="#FFFFFF" />
          <rect y="13.34" width="28" height="6.66" fill="#138808" />
          <circle cx="14" cy="10" r="2.4" stroke="#000080" strokeWidth="0.6" fill="none" />
          <circle cx="14" cy="10" r="0.6" fill="#000080" />
        </g>
      </svg>
    ),
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    price: 'From AED 299 / mo',
    detail: 'AED · Local VAT invoices',
    path: '/uae/',
    flag: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="country-flag-svg">
        <rect width="28" height="20" rx="3" fill="white" />
        <mask id="ae-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
          <rect width="28" height="20" rx="3" fill="white" />
        </mask>
        <g mask="url(#ae-mask)">
          <rect width="28" height="6.66" fill="#00732F" />
          <rect y="6.66" width="28" height="6.68" fill="#FFFFFF" />
          <rect y="13.34" width="28" height="6.66" fill="#000000" />
          <rect width="7.5" height="20" fill="#FF0000" />
        </g>
      </svg>
    ),
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    price: 'From SAR 299 / mo',
    detail: 'SAR · ZATCA invoices',
    path: '/saudi-arabia/',
    flag: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="country-flag-svg">
        <rect width="28" height="20" rx="3" fill="#006C35" />
        <mask id="sa-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
          <rect width="28" height="20" rx="3" fill="white" />
        </mask>
        <g mask="url(#sa-mask)">
          <rect width="28" height="20" fill="#006C35" />
          <line x1="8" y1="12.5" x2="20" y2="12.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
          <circle cx="10" cy="12.5" r="1" fill="#FFFFFF" />
          <line x1="9" y1="8.5" x2="19" y2="8.5" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="1.5 1" strokeLinecap="round" />
        </g>
      </svg>
    ),
  },
  {
    id: 'australia',
    name: 'Australia',
    price: 'From A$129 / mo',
    detail: 'AUD · Sydney data DC',
    path: '/australia/',
    flag: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="country-flag-svg">
        <rect width="28" height="20" rx="3" fill="#00008B" />
        <mask id="au-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
          <rect width="28" height="20" rx="3" fill="white" />
        </mask>
        <g mask="url(#au-mask)">
          <rect width="28" height="20" fill="#012169" />
          <rect width="13" height="9" fill="#00247D" />
          <path d="M0 0L13 9M13 0L0 9" stroke="#FFFFFF" strokeWidth="1.6" />
          <path d="M0 0L13 9M13 0L0 9" stroke="#CC0000" strokeWidth="0.8" />
          <path d="M6.5 0V9M0 4.5H13" stroke="#FFFFFF" strokeWidth="2.4" />
          <path d="M6.5 0V9M0 4.5H13" stroke="#CC0000" strokeWidth="1.2" />
          <circle cx="6.5" cy="14.5" r="1.6" fill="#FFFFFF" />
          <circle cx="21" cy="4" r="0.8" fill="#FFFFFF" />
          <circle cx="24" cy="7.5" r="0.8" fill="#FFFFFF" />
          <circle cx="21" cy="12" r="0.8" fill="#FFFFFF" />
          <circle cx="18" cy="8.5" r="0.8" fill="#FFFFFF" />
          <circle cx="22" cy="15.5" r="1.2" fill="#FFFFFF" />
        </g>
      </svg>
    ),
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    price: 'From NZ$139 / mo',
    detail: 'NZD · Local GST invoices',
    path: '/new-zealand/',
    flag: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="country-flag-svg">
        <rect width="28" height="20" rx="3" fill="#00008B" />
        <mask id="nz-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
          <rect width="28" height="20" rx="3" fill="white" />
        </mask>
        <g mask="url(#nz-mask)">
          <rect width="28" height="20" fill="#012169" />
          <rect width="13" height="9" fill="#00247D" />
          <path d="M0 0L13 9M13 0L0 9" stroke="#FFFFFF" strokeWidth="1.6" />
          <path d="M0 0L13 9M13 0L0 9" stroke="#CC0000" strokeWidth="0.8" />
          <path d="M6.5 0V9M0 4.5H13" stroke="#FFFFFF" strokeWidth="2.4" />
          <path d="M6.5 0V9M0 4.5H13" stroke="#CC0000" strokeWidth="1.2" />
          <circle cx="21" cy="4" r="1.1" fill="#CC0000" stroke="#FFFFFF" strokeWidth="0.4" />
          <circle cx="24" cy="8" r="1.1" fill="#CC0000" stroke="#FFFFFF" strokeWidth="0.4" />
          <circle cx="21" cy="14" r="1.2" fill="#CC0000" stroke="#FFFFFF" strokeWidth="0.4" />
          <circle cx="18" cy="9" r="1" fill="#CC0000" stroke="#FFFFFF" strokeWidth="0.4" />
        </g>
      </svg>
    ),
  },
  {
    id: 'global',
    name: 'Global / US',
    price: 'From US$69 / mo',
    detail: 'USD · Worldwide billing',
    path: '/pricing/',
    flag: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="country-flag-svg">
        <rect width="28" height="20" rx="3" fill="#00247D" />
        <mask id="us-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
          <rect width="28" height="20" rx="3" fill="white" />
        </mask>
        <g mask="url(#us-mask)">
          <rect width="28" height="20" fill="#FFFFFF" />
          <rect y="0" width="28" height="1.54" fill="#B22234" />
          <rect y="3.08" width="28" height="1.54" fill="#B22234" />
          <rect y="6.16" width="28" height="1.54" fill="#B22234" />
          <rect y="9.24" width="28" height="1.54" fill="#B22234" />
          <rect y="12.32" width="28" height="1.54" fill="#B22234" />
          <rect y="15.4" width="28" height="1.54" fill="#B22234" />
          <rect y="18.46" width="28" height="1.54" fill="#B22234" />
          <rect width="12" height="10.8" fill="#3C3B6E" />
          <circle cx="3" cy="2.5" r="0.6" fill="#FFFFFF" />
          <circle cx="6" cy="2.5" r="0.6" fill="#FFFFFF" />
          <circle cx="9" cy="2.5" r="0.6" fill="#FFFFFF" />
          <circle cx="4.5" cy="5.4" r="0.6" fill="#FFFFFF" />
          <circle cx="7.5" cy="5.4" r="0.6" fill="#FFFFFF" />
          <circle cx="3" cy="8.3" r="0.6" fill="#FFFFFF" />
          <circle cx="6" cy="8.3" r="0.6" fill="#FFFFFF" />
          <circle cx="9" cy="8.3" r="0.6" fill="#FFFFFF" />
        </g>
      </svg>
    ),
  },
];

export const RegionalPricingSection: React.FC = () => {
  return (
    <section className="regional-clean-section section-alt">
      <div className="wrap">
        <div className="regional-clean-layout">
          {/* Left Column: Heading, Subtitle & Action */}
          <div className="regional-clean-left">
            <span className="regional-clean-eyebrow">Local Pricing &amp; Support</span>
            <h2 className="regional-clean-title">
              Built in India.<br />
              Ready Globally.
            </h2>
            <p className="regional-clean-desc">
              Plans from ₹3,999/mo in India and US$69/mo globally. Billed in your local currency with GST &amp; VAT tax invoices, local payment rails, and dedicated regional support across all time zones.
            </p>
            <div className="regional-clean-action">
              <Link to="/pricing/" className="regional-clean-btn">
                <span>View all pricing</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
            <div className="regional-clean-footer-text">
              <span className="regional-clean-dot">●</span>
              <span>Mumbai, Sydney &amp; Bahrain Data Residency · DPDP &amp; GDPR</span>
            </div>
          </div>

          {/* Right Column: 3x2 Grid of Clean White Cards (No Outer Grey Container) */}
          <div className="regional-clean-grid">
            {REGIONS.map((region) => (
              <Link
                key={region.id}
                to={region.path}
                className="regional-clean-card"
                title={`View ${region.name} local pricing and plans`}
              >
                <div className="regional-clean-flag">
                  {region.flag}
                </div>
                <div className="regional-clean-info">
                  <div className="regional-clean-name">{region.name}</div>
                  <div className="regional-clean-price">{region.price}</div>
                  <div className="regional-clean-note">{region.detail}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalPricingSection;
