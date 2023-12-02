import { useMediaQuery } from '@mantine/hooks';

export const useScreenSize = () => {
  const isMobile = useMediaQuery('(max-width: 738px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery('(max-width: 1366px)');

  return { isMobile, isTablet, isDesktop };
};
