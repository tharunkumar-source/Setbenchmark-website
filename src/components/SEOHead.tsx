import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage = 'https://setbenchmark.com/og/setbenchmark-og.png',
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Meta Description
    setMeta('name', 'description', description);

    // 4. Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    if (canonical) setMeta('property', 'og:url', canonical);
    if (ogImage) setMeta('property', 'og:image', ogImage);

    // 5. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (ogImage) setMeta('name', 'twitter:image', ogImage);

    // 6. Canonical Link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // 7. Structured Data (JSON-LD)
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld="true"]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
};

export default SEOHead;

