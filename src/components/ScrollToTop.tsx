import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  // Disable automatic browser scroll restoration so programmatic scrolling takes precedence
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    // If navigating with an explicit anchor hash, scroll to that element
    if (hash) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const resetScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    resetScroll();

    // Use requestAnimationFrame and small timeout to guarantee scroll is 0
    // even after layout calculations and image layout passes occur
    const rafId = requestAnimationFrame(resetScroll);
    const timeoutId = setTimeout(resetScroll, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
