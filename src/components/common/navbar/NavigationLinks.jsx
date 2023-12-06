import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { siteConfig } from '../../../utils/config';
import {
  scrollToTop,
  setScrollBehaviorToAuto,
  setScrollBehaviorToSmooth,
} from '../../../utils/helpers';

const NavigationLinks = (props) => {
  const { pathname } = useLocation();

  const handleScroll = (e) => {
    const navlink = e.target.href;
    const navlinkSameAsCurrentPage = navlink.includes(pathname);

    if (navlinkSameAsCurrentPage) {
      setScrollBehaviorToSmooth();
      setTimeout(() => scrollToTop(), 0);
    } else {
      setScrollBehaviorToAuto();
    }
  };

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.ul className={props.className} variants={variants}>
      {siteConfig.navLinks.map(({ path, navLink }) => (
        <motion.li
          key={navLink}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to={path} onClick={handleScroll}>
            {navLink}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavigationLinks;
