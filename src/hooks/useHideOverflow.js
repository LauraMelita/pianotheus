import { useEffect } from 'react';

export const useHideOverflow = (state) => {
  useEffect(() => {
    if (state)
      document.documentElement.style.setProperty('--overflow', 'hidden');

    return () => {
      document.documentElement.style.setProperty('--overflow', 'auto');
    };
  }, [state]);
};
