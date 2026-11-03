import React from 'react';

export interface CheckmarkProps {
  className?: string;
  onDark?: boolean;
}

export const Checkmark: React.FC<CheckmarkProps> = ({ className = '', onDark = false }) => {
  return (
    <span className={`tick ${onDark ? 'on-dark' : ''} ${className}`} aria-hidden="true">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M5 12l5 5 9-10" />
      </svg>
    </span>
  );
};

export default Checkmark;

