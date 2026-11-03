import React from 'react';
import { Link } from 'react-router-dom';

export interface FeatureCardProps {
  icon?: React.ReactNode;
  iconVariant?: 'default' | 'v' | 'l';
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconVariant = 'default',
  title,
  description,
  href,
  linkText = 'Learn more &rarr;',
  className = '',
}) => {
  const iconClass = 'icon';

  const content = (
    <div className={`card ${href ? 'card-link' : ''} ${className}`.trim()}>
      {icon && <div className={iconClass}>{icon}</div>}
      <h3 className="h3">{title}</h3>
      <p style={{ marginTop: '10px' }}>{description}</p>
      {href && (
        <span className="more" style={{ marginTop: 'auto', paddingTop: '16px' }} dangerouslySetInnerHTML={{ __html: linkText }} />
      )}
    </div>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <a href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
        {content}
      </Link>
    );
  }

  return content;
};

export default FeatureCard;

