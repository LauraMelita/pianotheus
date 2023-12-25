import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => window.scrollTo(0, 0);

  const setScrollBehaviorToAuto = () =>
    document.documentElement.style.setProperty('--scroll-behavior', 'auto');

  const setScrollBehaviorToSmooth = () =>
    document.documentElement.style.setProperty('--scroll-behavior', 'smooth');

  const useRestoreScrollToTop = (currentPathname) => {
    useLayoutEffect(() => {
      const pathContainsHashlink = window.location.href.includes('#');

      if (pathContainsHashlink) return;

      setScrollBehaviorToAuto();
      const timeout = setTimeout(() => scrollToTop(), 0);

      return () => {
        clearTimeout(timeout);
      };
    }, [currentPathname]);
  };

  const handlePageScroll = (e) => {
    const navlink = e.target.href;
    const samePage = navlink.includes(pathname);

    if (samePage) {
      setScrollBehaviorToSmooth();
      setTimeout(() => scrollToTop(), 0);
    } else {
      setScrollBehaviorToAuto();
    }
  };

  return {
    scrollToTop,
    useRestoreScrollToTop,
    handlePageScroll,
  };
};
