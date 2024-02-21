import { useLocation } from 'react-router-dom';
import { useDocumentTitle as setDocumentTitle } from '@mantine/hooks';

import { siteConfig } from '../utils/config';

export const useDocumentTitle = () => {
  const { pathname } = useLocation();
  const titleMap = siteConfig.navigation.titleMap;

  const getTitleFromRoute = (path) => {
    if (titleMap[path]) return titleMap[path];
  };

  setDocumentTitle(getTitleFromRoute(pathname));
};
