import { useState, useEffect } from 'react';
import { useClickOutside } from '@mantine/hooks';

export const useSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarRef = useClickOutside(() => setShowSidebar(false));

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  const closeSidebar = () => setShowSidebar(false);

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
