import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'hero-start' | 'hero-demo' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  arrow?: 'right' | 'up-right' | 'none';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  arrow = 'none',
  className = '',
  style,
  onClick,
  children,
  external = false,
}) => {
  let baseClass = 'btn';
  
  if (variant === 'primary') {
    baseClass += ' btn-primary';
  } else if (variant === 'ghost') {
    baseClass += ' btn-ghost';
  } else if (variant === 'lime') {
    baseClass += ' btn-lime';
  } else if (variant === 'hero-start') {
    baseClass = 'btn-hero-start';
  } else if (variant === 'hero-demo') {
    baseClass = 'btn-hero-demo';
  }

  if (size === 'sm') {
    baseClass += ' btn-sm';
  }

  const combinedClass = `${baseClass} ${className}`.trim();

  const arrowIcon = arrow === 'up-right' ? (
    <span className="ml-1 font-normal">&#x2197;</span>
  ) : arrow === 'right' ? (
    <span className="ml-1 font-normal">&#x2192;</span>
  ) : null;

  if (href) {
    const isInternal = !external && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#');
    if (isInternal) {
      return (
        <Link to={href} className={combinedClass} style={style} onClick={onClick}>
          {children}
          {arrowIcon}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedClass} style={style} onClick={onClick} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {children}
        {arrowIcon}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClass} style={style} onClick={onClick}>
      {children}
      {arrowIcon}
    </button>
  );
};

export default Button;
