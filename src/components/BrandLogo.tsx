import React from 'react';

export type LogoVariant = 'light' | 'dark' | 'green' | 'purple' | 'auto';

export interface LogoIconProps {
  /**
   * Color theme variant per SetBenchmark Brand Guidelines:
   * - 'light': On white/light backgrounds (Dark graphs #07110D, Green dome #26D07C)
   * - 'dark':  On black/dark backgrounds (White graphs #FFFFFF, Green dome #26D07C)
   * - 'green': On green background (White graphs #FFFFFF, Dark dome #07110D)
   * - 'purple': On purple background (White graphs #FFFFFF, Green dome #26D07C)
   * - 'auto': Contextual styling (defaults to light: dark graphs #07110D, green dome #26D07C)
   */
  variant?: LogoVariant;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  variant = 'auto',
  size = 28,
  className = '',
  style,
}) => {
  // Graph bars color: dark on light backgrounds, white if bg is black / dark / green / purple
  let graphColor = '#07110D';
  let domeColor = '#26D07C';

  if (variant === 'dark' || variant === 'purple') {
    graphColor = '#FFFFFF';
    domeColor = '#26D07C';
  } else if (variant === 'green') {
    graphColor = '#FFFFFF';
    domeColor = '#07110D';
  } else if (variant === 'auto') {
    graphColor = 'var(--logo-graphs, #07110D)';
    domeColor = 'var(--logo-dome, #26D07C)';
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-icon ${className}`.trim()}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {/* Speedometer gauge dial */}
      <path
        d="M55.2805 67.2288L58.8315 70.7797L43.8969 85.7143H85.7143V83.2031C85.7143 67.3429 76.4955 50.9533 58.8511 43.6033C48.8556 39.639 37.723 39.2929 26.8239 43.6205C9.72405 50.7402 0 66.8246 0 83.2031V85.7143H36.795L55.2805 67.2288ZM16.8087 73.9947L12.0708 72.3222C16.6714 59.3054 29.0409 50.558 42.8571 50.558C56.6734 50.558 69.0429 59.3054 73.6433 72.3222L68.9054 73.9947C65.0161 62.9814 54.5498 55.5803 42.8571 55.5803C31.1645 55.5803 20.6982 62.9814 16.8087 73.9947Z"
        fill={domeColor}
      />
      {/* 4 Graph Bars (ascending): Bar 1 */}
      <path
        d="M5.18945 53.9958C9.73181 48.0645 14.2969 44.4941 20.2564 41.2862V30.4688H5.18945V53.9958Z"
        fill={graphColor}
      />
      {/* Bar 2 */}
      <path
        d="M25.2793 38.8558C31.5518 36.4245 35.8201 35.8727 40.3463 35.6449V20.4241H25.2793V38.8558Z"
        fill={graphColor}
      />
      {/* Bar 3 */}
      <path
        d="M60.4351 38.8461V10.3794H45.3682V35.643C49.6025 35.8556 53.9833 36.3304 60.4351 38.8461Z"
        fill={graphColor}
      />
      {/* Bar 4 */}
      <path
        d="M65.458 41.2917C71.5062 44.5483 75.984 48.0641 80.525 54.0032V0H65.458V41.2917Z"
        fill={graphColor}
      />
    </svg>
  );
};

export interface BrandLogoProps {
  variant?: LogoVariant;
  size?: number | string;
  iconOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'auto',
  size = 28,
  iconOnly = false,
  className = '',
  style,
}) => {
  let titleColor = 'inherit';
  let accentColor = 'var(--brand, #26D07C)';

  if (variant === 'dark' || variant === 'purple') {
    titleColor = '#FFFFFF';
    accentColor = '#26D07C';
  } else if (variant === 'green') {
    titleColor = '#FFFFFF';
    accentColor = '#07190F';
  } else if (variant === 'light') {
    titleColor = '#07190F';
    accentColor = '#26D07C';
  }

  return (
    <span
      className={`brand-logo-wrap brand-variant-${variant} ${className}`.trim()}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', ...style }}
    >
      <LogoIcon variant={variant} size={size} />
      {!iconOnly && (
        <span className="brand-title" style={{ color: titleColor }}>
          Set<span className="brand-accent" style={{ color: accentColor }}>Benchmark</span>
        </span>
      )}
    </span>
  );
};

export default BrandLogo;
