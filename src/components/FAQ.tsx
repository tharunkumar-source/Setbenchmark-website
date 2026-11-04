import React from 'react';
import { Button } from './Button';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQProps {
  topic?: string;
  eyebrow?: string;
  headingPrefix?: string;
  cardTitle?: string;
  cardDesc?: string;
  cardButtonText?: string;
  cardButtonHref?: string;
  items: FAQItem[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  topic = 'SetBenchmark',
  eyebrow = 'Frequently Asked Questions',
  headingPrefix = 'Everything you need to know about ',
  cardTitle = 'Need Help Choosing the Right Assessment Solution?',
  cardDesc = 'Build smarter with AI-powered hiring, anti-cheat proctoring, and enterprise workflows tailored to your business.',
  cardButtonText = 'Contact us',
  cardButtonHref = '/contact/',
  items,
  className = '',
}) => {
  return (
    <section className={`section ${className}`.trim()}>
      <div className="wrap">
        <div className="faq-head">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="h2">
            {headingPrefix}
            <span className="faq-highlight">{topic}</span>
          </h2>
        </div>
        <div className="faq-layout">
          {/* Left Column: Brand Accent Card */}
          <div className="faq-card">
            <div>
              <div className="faq-card-brand">
                <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <rect width="32" height="32" rx="8" fill="#2A3150" />
                  <rect x="7" y="17" width="4.5" height="8" rx="1.6" fill="#FFFFFF" />
                  <rect x="13.75" y="12.5" width="4.5" height="12.5" rx="1.6" fill="#FFFFFF" />
                  <rect x="20.5" y="9.5" width="4.5" height="15.5" rx="1.6" fill="var(--brand, #C8F25A)" />
                  <rect x="6" y="6" width="20" height="2.2" rx="1.1" fill="var(--brand, #C8F25A)" />
                </svg>
                <span>SetBenchmark</span>
              </div>
              <h3 className="faq-card-title">{cardTitle}</h3>
              <p className="faq-card-desc">{cardDesc}</p>
            </div>
            <div>
              <Button href={cardButtonHref} variant="primary" arrow="right">
                {cardButtonText}
              </Button>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="faq">
            {items.map((item, index) => (
              <details key={index}>
                <summary>{item.question}</summary>
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

