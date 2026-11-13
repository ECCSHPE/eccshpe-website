import { useEffect } from 'react';

const BOUNDARY_LEEWAY_PX = 4;

// On touch devices, stop the page from rubber-banding past the top or bottom
// edge while still letting the user reverse direction freely.
const OverscrollGuard = () => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return undefined;

    let lastY = null;

    const handleTouchStart = (e) => {
      lastY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (lastY == null) return;
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - lastY; // positive when the finger moves down (page scrolls up)

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const atTop = scrollTop <= BOUNDARY_LEEWAY_PX;
      const atBottom = scrollTop >= maxScroll - BOUNDARY_LEEWAY_PX;

      if ((atTop && deltaY > 0) || (atBottom && deltaY < 0)) {
        e.preventDefault();
        return;
      }

      lastY = currentY;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
};

export default OverscrollGuard;
