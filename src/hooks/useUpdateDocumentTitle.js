import { useEffect } from 'react';

export const useUpdateDocumentTitle = (data, title) => {
  useEffect(() => {
    if (!data) return;
    document.title = `Pianotheus | ${title}`;

    return () => {
      document.title = 'Pianotheus';
    };
  }, [data, title]);
};
