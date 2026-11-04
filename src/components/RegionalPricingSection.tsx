import React from 'react';
import { Link } from 'react-router-dom';

interface RegionItem {
  id: string;
  name: string;
  currency: string;
  priceNote: string;
  path: string;
  flag: React.ReactNode;
}

const REGIONS: RegionItem[] = [
  {
    id: 'india',
    name: 'India',
    currency: 'Pricing in INR',
    priceNote: 'From ₹3,999 / mo · GST ready',
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
    currency: 'Pricing in AED',
    priceNote: 'From د.إ299 / mo · Local VAT',
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
    currency: 'Pricing in SAR',
    priceNote: 'From 299 SAR / mo · ZATCA',
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
    currency: 'Pricing in AUD',
    priceNote: 'From A$129 / mo · Sydney DC',
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
    currency: 'Pricing in NZD',
    priceNote: 'From NZ$139 / mo · GST',
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
    currency: 'Pricing in USD',
    priceNote: 'From US$69 / mo · Worldwide',
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
    <section className="regional-split-section">
      <div className="wrap">
        <div className="regional-split-layout">
          {/* Left Side: Framed Container with Flag Cards */}
          <div className="regional-showcase-panel">
            {/* Top Header Bar */}
            <div className="regional-panel-topbar">
              <div className="regional-panel-tag-left">
                <span className="regional-panel-dot" />
                <span>LOCAL HUBS &amp; CURRENCIES</span>
              </div>
              <div className="regional-panel-tag-right">
                <span>Multi-Currency Ready</span>
              </div>
            </div>

            {/* Grid of Cards */}
            <div className="regional-panel-cards">
              {REGIONS.map((region) => (
                <Link
                  key={region.id}
                  to={region.path}
                  className="regional-mini-card"
                  title={`View ${region.name} local pricing and plans`}
                >
                  <div className="regional-card-flag-box">
                    {region.flag}
                  </div>
                  <div className="regional-card-details">
                    <h3 className="regional-card-title">{region.name}</h3>
                    <span className="regional-card-currency">{region.currency}</span>
                    <span className="regional-card-subnote">{region.priceNote}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="regional-panel-footer">
              <span className="regional-footer-left">Mumbai, Sydney &amp; Bahrain Data Residency</span>
              <span className="regional-footer-right">DPDP · GDPR · SOC 2 Ready</span>
            </div>
          </div>

          {/* Right Side: Editorial Text & Action */}
          <div className="regional-split-content">
            <div className="eyebrow">Local Pricing and Support</div>
            <h2 className="regional-split-title">
              Built in India. Ready for the Middle East and ANZ.
            </h2>
            <p className="regional-split-lead">
              Plans from ₹3,999 a month in India and US$69 a month globally, billed in your currency with local GST &amp; VAT tax invoices, local payment rails, and dedicated regional support across all time zones.
            </p>
            <div className="regional-split-action">
              <Link to="/pricing/" className="regional-btn-cta">
                <span>View all pricing</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalPricingSection;
