import React from 'react';
import { Button } from './Button';
import { Checkmark } from './Checkmark';

export interface PricingFeature {
  text: string;
  included?: boolean;
}

export interface PricingCardProps {
  name: string;
  badge?: string;
  description: string;
  price: string;
  period?: string;
  billingNote?: string;
  buttonText: string;
  buttonHref: string;
  buttonVariant?: 'primary' | 'secondary' | 'ghost';
  features: string[];
  isPopular?: boolean;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  badge,
  description,
  price,
  period = '/ month',
  billingNote,
  buttonText,
  buttonHref,
  buttonVariant = 'secondary',
  features,
  isPopular = false,
  className = '',
}) => {
  return (
    <div className={`plan ${isPopular ? 'pop' : ''} ${className}`.trim()}>
      {(badge || isPopular) && (
        <span className="pop-badge">{badge || 'Most popular'}</span>
      )}
      <h3 className="h3" style={{ fontSize: '24px', margin: 0 }}>
        {name}
      </h3>
      <p style={{ marginTop: '8px', color: 'var(--text-2)', minHeight: '44px' }}>
        {description}
      </p>

      <div style={{ margin: '24px 0 16px' }}>
        <span className="price" style={{ fontSize: '38px', fontWeight: 800, color: 'var(--text-1)' }}>
          {price}
        </span>
        {period && (
          <span style={{ fontSize: '15px', color: 'var(--text-3)', marginLeft: '6px' }}>
            {period}
          </span>
        )}
      </div>

      {billingNote && (
        <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: '0 0 20px', minHeight: '36px' }}>
          {billingNote}
        </p>
      )}

      <Button
        href={buttonHref}
        variant={buttonVariant}
        className="w-full justify-center"
        style={{ width: '100%', marginBottom: '28px' } as any}
      >
        {buttonText}
      </Button>

      <ul className="plan-features" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '14px' }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14.5px', color: 'var(--text-2)' }}>
            <Checkmark />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;

