import { useMediaQuery } from '@mantine/hooks';

export const useScreenSize = () => {
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLaptop = useMediaQuery('(min-width: 1025px) and (max-width: 1200px)');
  const isDesktop = useMediaQuery('(min-width: 1201px)');

  return { isMobile, isTablet, isLaptop, isDesktop };
};
