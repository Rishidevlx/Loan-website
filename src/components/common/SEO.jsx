import { useEffect } from 'react';

/**
 * SEO - Production-Grade Native React 19 Head & Meta Tag Manager
 * - Zero third-party runtime dependencies (Zero bundle overhead)
 * - Dynamically updates Document Title, Meta Description, Keywords,
 *   Canonical URL, Open Graph (OG), Twitter Cards, and Schema.org JSON-LD.
 * - Perfectly safe across route transitions and React StrictMode.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogType = 'website',
  schema
}) {
  useEffect(() => {
    // 1. Document Title
    if (title) {
      document.title = title;
    }

    // Helper: update or create <meta name="...">
    const setMeta = (name, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper: update or create <meta property="..."> (Open Graph)
    const setOgMeta = (property, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper: update or create <link rel="canonical">
    const setCanonical = (url) => {
      if (!url) return;
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', url);
    };

    // 2. Standard Meta Tags
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');

    // 3. Canonical Link
    setCanonical(canonical);

    // 4. Open Graph Meta Tags
    const effectiveOgTitle = ogTitle || title;
    const effectiveOgDesc = ogDescription || description;
    const effectiveOgUrl = ogUrl || canonical;

    setOgMeta('og:title', effectiveOgTitle);
    setOgMeta('og:description', effectiveOgDesc);
    setOgMeta('og:url', effectiveOgUrl);
    setOgMeta('og:type', ogType);
    setOgMeta('og:site_name', 'Bharath Finserv');
    if (ogImage) {
      setOgMeta('og:image', ogImage);
    }

    // 5. Twitter Card Meta Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', effectiveOgTitle);
    setMeta('twitter:description', effectiveOgDesc);
    if (ogImage) {
      setMeta('twitter:image', ogImage);
    }

    // 6. Schema.org JSON-LD Structured Data
    let schemaScript = document.getElementById('schema-structured-data');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'schema-structured-data';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogUrl, ogImage, ogType, schema]);

  return null;
}
