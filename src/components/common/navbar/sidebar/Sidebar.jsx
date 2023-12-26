import React from 'react';
import { motion } from 'framer-motion';

import { useSidebar } from '../../../../hooks/useSidebar';
import { useScreenSize } from '../../../../hooks/useScreenSize';

import SidebarMenuButton from './sidebarMenuButton/SidebarMenuButton';

import './Sidebar.scss';

const Sidebar = ({ children }) => {
  const { showSidebar, toggleSidebar, closeSidebar, sidebarRef } = useSidebar();
  const { isMobile } = useScreenSize();

  const slideSidebarAnimation = {
    open: {
      width: isMobile ? '100%' : '50%',
      transition: {
        type: 'spring',
        duration: 0.8,
      },
    },
    closed: {
      width: 0,
    },
  };

  const showHideContentAnimation = {
    open: {
      display: 'flex',
    },
    closed: {
      display: 'none',
    },
  };

  return (
    <motion.div
      className='sidebar'
      ref={sidebarRef}
      animate={showSidebar ? 'open' : 'closed'}
    >
      <SidebarMenuButton onClick={toggleSidebar} />
      <motion.div
        className='sidebar__bg'
        initial={{ width: 0 }}
        exit={{ width: 0 }}
        variants={slideSidebarAnimation}
      >
        <motion.div
          className='sidebar__content'
          variants={showHideContentAnimation}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
