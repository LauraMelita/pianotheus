import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => window.scrollTo(0, 0);
  const setScrollBehaviorToAuto = () =>
    document.documentElement.style.setProperty('--scroll-behavior', 'auto');
  const setScrollBehaviorToSmooth = () =>
    document.documentElement.style.setProperty('--scroll-behavior', 'smooth');

  useLayoutEffect(() => {
    const URLContainsHashlink = window.location.href.includes('#');

    if (URLContainsHashlink) return;

    setScrollBehaviorToAuto();
    const timeout = setTimeout(() => scrollToTop(), 0);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  const handlePageScroll = (e) => {
    const navlink = e.target.href;
    const navlinkSameAsCurrentPage = navlink.includes(pathname);

    if (navlinkSameAsCurrentPage) {
      setScrollBehaviorToSmooth();
      setTimeout(() => scrollToTop(), 0);
    } else {
      setScrollBehaviorToAuto();
    }
  };

  return {
    scrollToTop,
    handlePageScroll,
    setScrollBehaviorToAuto,
    setScrollBehaviorToSmooth,
  };
};
