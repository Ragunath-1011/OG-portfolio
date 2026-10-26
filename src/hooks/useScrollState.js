import { useEffect, useState } from 'react';

export function useScrollState() {
  const [scrollState, setScrollState] = useState({
    scrolled: false,
    progress: 0,
    showBackToTop: false,
  });

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollState({
        scrolled: scrollY > 12,
        progress: maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0,
        showBackToTop: scrollY > 700,
      });
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return scrollState;
}
