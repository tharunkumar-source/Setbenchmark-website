import React from 'react';
import { Button } from './Button';

export interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title = 'Ready to hire developers on real skills?',
  subtitle = 'Join tech teams screening candidates with real-world tasks, fair AI policies and leak-proof assessments.',
  primaryText = 'Start free trial',
  primaryHref = 'https://app.setbenchmark.com/signup',
  secondaryText = 'Book a demo',
  secondaryHref = '/contact/',
  className = '',
}) => {
  return (
    <section className={`section section-cta ${className}`.trim()}>
      <div className="wrap text-center">
        <h2 className="h2" style={{ maxWidth: '760px', margin: '0 auto 16px' }}>
          {title}
        </h2>
        <p className="lead" style={{ maxWidth: '620px', margin: '0 auto 36px', color: 'rgba(255,255,255,0.76)' }}>
          {subtitle}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <Button href={primaryHref} variant="primary" arrow="up-right">
            {primaryText}
          </Button>
          <Button href={secondaryHref} variant="ghost" className="on-dark" arrow="up-right">
            {secondaryText}
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '14px', color: 'rgba(255,255,255,0.64)' }}>
          <span>&#10003; 14-day free trial</span>
          <span>&#10003; No credit card required</span>
          <span>&#10003; Local pricing in 6 currencies</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;

