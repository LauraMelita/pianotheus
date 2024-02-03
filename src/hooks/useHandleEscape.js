import { useEffect } from 'react';

export const useHandleEscape = (handler) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handler]);
};
