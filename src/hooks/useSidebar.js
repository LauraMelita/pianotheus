import { useEffect } from 'react';
import { useClickOutside } from '@mantine/hooks';

import { useSidebarContext } from '../context/SidebarContext';

export const useSidebar = () => {
  const { showSidebar, toggleSidebar, closeSidebar } = useSidebarContext();

  const sidebarRef = useClickOutside(closeSidebar);

  useEffect(() => {
    if (showSidebar)
      document.documentElement.style.setProperty('--overflow', 'hidden');

    return () => {
      document.documentElement.style.setProperty('--overflow', 'auto');
    };
  }, [showSidebar]);

  return {
    showSidebar,
    toggleSidebar,
    closeSidebar,
    sidebarRef,
  };
};
