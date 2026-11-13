import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Client-side navigation keeps the scroll position, so reset it on each route change.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
