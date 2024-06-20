import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = (behaviorType) => {
    window.scrollTo({
      top: 0,
      behavior: behaviorType,
    });
  };

  // Whenever the pathname changes, scroll to top with auto behavior
  const useScrollOnPathChange = () => {
    useLayoutEffect(() => {
      scrollToTop('auto');
    }, [pathname]);
  };

  // Whenever a nav link is clicked, scroll to top, and if the same link is clicked, scroll smoothly, else, scroll with auto behavior
  const handlePageScroll = (e) => {
    const onSamePage = e.target.href.includes(pathname);

    if (onSamePage) {
      scrollToTop('smooth');
    } else {
      scrollToTop('auto');
    }
  };

  return {
    scrollToTop,
    useScrollOnPathChange,
    handlePageScroll,
  };
};
