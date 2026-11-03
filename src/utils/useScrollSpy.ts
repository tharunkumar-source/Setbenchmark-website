import { useEffect } from 'react';

/**
 * useScrollSpy
 * Observes elements matching the target selector and highlights matching links in the TOC.
 */
export function useScrollSpy(targetSelector = '.guide-step-card[id], .fairness-highlight-box[id], [id]', linkSelector = '.blog-toc-item') {
  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll<HTMLAnchorElement>(linkSelector);
      if (!links.length) return;

      const targets: HTMLElement[] = [];
      links.forEach((link) => {
        const hash = link.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          const el = document.getElementById(hash.slice(1));
          if (el) targets.push(el);
        }
      });

      if (!targets.length) return;

      const scrollPos = window.scrollY + 130;
      let activeId = '';

      for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        const top = target.getBoundingClientRect().top + window.scrollY;
        const height = target.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height + 60) {
          activeId = target.id;
          break;
        }
      }

      if (!activeId) {
        if (scrollPos < targets[0].getBoundingClientRect().top + window.scrollY) {
          activeId = targets[0].id;
        } else {
          activeId = targets[targets.length - 1].id;
        }
      }

      links.forEach((link) => {
        if (link.getAttribute('href') === `#${activeId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    // Check for query param scroll preview
    const params = new URLSearchParams(window.location.search);
    const scrollYParam = params.get('scroll');
    if (scrollYParam) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollYParam, 10));
        handleScroll();
      }, 80);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetSelector, linkSelector]);
}
