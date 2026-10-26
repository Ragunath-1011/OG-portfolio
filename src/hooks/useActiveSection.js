import { useEffect, useState } from 'react';

/**
 * Highlights the section occupying the middle of the viewport.
 * The generous root margin avoids flicker between adjacent sections.
 */
export function useActiveSection(sectionIds, initial = 'home') {
  const [activeSection, setActiveSection] = useState(initial);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = '';
        let bestRatio = -1;

        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0 && bestId) {
          setActiveSection(bestId);
        }
      },
      {
        rootMargin: '-24% 0px -54% 0px',
        threshold: [0, 0.05, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
