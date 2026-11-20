import { useEffect } from 'react';

/**
 * useScrollSpy
 * Dynamically tracks scroll position on guide / blog detail pages,
 * keeps the TOC sidebar in sync, and enables smooth, accurate anchor navigation.
 */
export function useScrollSpy(linkSelector = '.blog-toc-item') {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(linkSelector));
    if (!links.length) return;

    interface SpyTarget {
      id: string;
      el: HTMLElement;
      link: HTMLAnchorElement;
    }

    const targets: SpyTarget[] = [];
    links.forEach((link) => {
      const hash = link.getAttribute('href');
      if (hash && hash.startsWith('#')) {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          targets.push({ id, el, link });
        }
      }
    });

    if (!targets.length) return;

    const HEADER_OFFSET = 130; // 72px sticky header + breathing space

    const updateActiveItem = () => {
      const scrollPos = window.scrollY + HEADER_OFFSET;
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);

      let activeId = targets[0].id;

      if (isAtBottom) {
        // Scrolled to bottom: activate the last item
        activeId = targets[targets.length - 1].id;
      } else {
        // Find the last section whose top offset has been reached
        for (let i = 0; i < targets.length; i++) {
          const top = targets[i].el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPos) {
            activeId = targets[i].id;
          } else {
            break;
          }
        }
      }

      links.forEach((link) => {
        const hash = link.getAttribute('href');
        if (hash === `#${activeId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    // Smooth click handler with precise header offset
    const clickHandlers: Array<{ link: HTMLAnchorElement; handler: (e: MouseEvent) => void }> = [];
    links.forEach((link) => {
      const handler = (e: MouseEvent) => {
        const hash = link.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          const targetEl = document.getElementById(hash.slice(1));
          if (targetEl) {
            e.preventDefault();
            const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - 92;
            window.scrollTo({
              top: Math.max(0, targetTop),
              behavior: 'smooth'
            });

            // Instant visual activation
            links.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');

            if (window.history.pushState) {
              window.history.pushState(null, '', hash);
            }
          }
        }
      };

      link.addEventListener('click', handler);
      clickHandlers.push({ link, handler });
    });

    // Throttled scroll listener
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveItem();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check on mount
    updateActiveItem();

    // Check if initial URL has a hash
    if (window.location.hash) {
      setTimeout(() => {
        const initialEl = document.getElementById(window.location.hash.slice(1));
        if (initialEl) {
          const initialTop = initialEl.getBoundingClientRect().top + window.scrollY - 92;
          window.scrollTo({ top: Math.max(0, initialTop), behavior: 'smooth' });
          updateActiveItem();
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clickHandlers.forEach(({ link, handler }) => {
        link.removeEventListener('click', handler);
      });
    };
  }, [linkSelector]);
}
