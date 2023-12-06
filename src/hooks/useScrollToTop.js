import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { setScrollBehaviorToAuto, scrollToTop } from '../utils/helpers';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const URLContainsHashlink = window.location.href.includes('#');

    if (URLContainsHashlink) return;

    setScrollBehaviorToAuto();
    const timeout = setTimeout(() => scrollToTop(), 0);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);
};
