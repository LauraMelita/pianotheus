import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { siteConfig } from '../../../utils/config';

import { useScrollToTop } from '../../../hooks/useScrollToTop';

const NavigationLinks = (props) => {
  const { handlePageScroll } = useScrollToTop();

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
          <NavLink to={path} onClick={(e) => handlePageScroll(e)}>
            {navLink}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavigationLinks;
