import { useEffect } from 'react';

export const useDocumentTitle = (data, title) => {
  useEffect(() => {
    if (!data) return;
    document.title = `${title}`;

    return () => {
      document.title = 'Pianotheus';
    };
  }, [data, title]);
};
