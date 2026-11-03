import React from 'react';

export interface BadgeProps {
  variant?: 'eyebrow' | 'chip' | 'tag' | 'ai';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'eyebrow',
  children,
  className = '',
}) => {
  let baseClass = 'eyebrow';
  if (variant === 'chip') {
    baseClass = 'chip';
  } else if (variant === 'tag') {
    baseClass = 'tag';
  } else if (variant === 'ai') {
    baseClass = 'tag ai';
  }

  return <div className={`${baseClass} ${className}`.trim()}>{children}</div>;
};

export default Badge;

