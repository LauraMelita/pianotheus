import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useScrollToTop } from './useScrollToTop';

export const useScrollRestoration = () => {
  const { pathname } = useLocation();
  const { scrollToTop } = useScrollToTop();

  // Whenever the pathname changes, scroll to top with auto behavior
  useLayoutEffect(() => {
    scrollToTop('auto');
  }, [pathname, scrollToTop]);
};
