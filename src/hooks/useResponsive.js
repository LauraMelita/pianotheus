import { useMediaQuery } from '@mantine/hooks';

export const useResponsive = () => {
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLaptop = useMediaQuery('(min-width: 1025px) and (max-width: 1400px)');
  const isDesktop = useMediaQuery('(min-width: 1401px)');

  return { isMobile, isTablet, isLaptop, isDesktop };
};
