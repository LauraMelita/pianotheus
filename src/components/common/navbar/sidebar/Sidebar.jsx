import React, { useState } from 'react';
import { motion } from 'framer-motion';

import NavigationLinks from '../NavigationLinks';
import ToggleSidebarMenu from './toggleSidebarMenu/ToggleSidebarMenu';

import { useComponentVisible } from '../../../../hooks/useComponentVisible';

import './Sidebar.scss';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { ref, componentIsVisible, toggleComponentIsVisible } =
    useComponentVisible(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 600px 0px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(0px at 600px 0px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className='sidebar'
      ref={ref}
      animate={showMenu ? 'open' : 'closed'}
    >
      <motion.div className='sidebar__bg' variants={variants}>
        <NavigationLinks className='sidebar__links' />
      </motion.div>

      <ToggleSidebarMenu
        setShowMenu={setShowMenu}
        componentIsVisible={componentIsVisible}
        toggleComponentIsVisible={toggleComponentIsVisible}
      />
    </motion.div>
  );
};

export default Sidebar;
