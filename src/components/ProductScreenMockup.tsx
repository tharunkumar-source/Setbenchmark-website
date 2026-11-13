import React from 'react';

export interface ProductScreenMockupProps {
  /**
   * Path to a complete pre-composited device mockup image
   * (e.g. /images/mockups/laptop/coding-assessments-repo.webp for heroes,
   * or /images/mockups/tablet/H05-Builder.webp for internal sections).
   * To build new mockups from raw 1440x900 product screenshots, run:
   *   python scripts/generate_mockup_images.py
   */
  src: string;
  /** Accessible alternative text describing the UI inside the screen. */
  alt: string;
  /** Intrinsic mockup image width (3624 for 2x hero laptop, 3056 for 2x internal tablet). */
  width?: number;
  /** Intrinsic mockup image height (2140 for 2x hero laptop, 1992 for 2x internal tablet). */
  height?: number;
  /** Image loading strategy ('eager' for hero above-the-fold, 'lazy' for lower split sections). */
  loading?: 'eager' | 'lazy';
}

/**
 * Renders a pre-composited device + UI mockup image with zero HTML/CSS bezel layers,
 * making adding or swapping mockup images a single `<img>` path update.
 */
export const ProductScreenMockup: React.FC<ProductScreenMockupProps> = ({
  src,
  alt,
  width = 3624,
  height = 2140,
  loading = 'eager',
}) => {
  return (
    <div className="pmock">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className="pmock-img"
      />
    </div>
  );
};

export default ProductScreenMockup;
