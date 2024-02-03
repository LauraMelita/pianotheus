import React from 'react';
import { motion } from 'framer-motion';
import { useClickOutside } from '@mantine/hooks';

import { useHideOverflow } from '../../../hooks/useHideOverflow';
import { useHandleEscape } from '../../../hooks/useHandleEscape';

import './MobileMenu.scss';

const MobileMenu = ({
  className,
  showMenu,
  closeMenu,
  componentTrigger,
  menuAnimation,
  initial,
  exit,
  children,
}) => {
  const menuRef = useClickOutside(closeMenu);
  useHideOverflow(showMenu);
  useHandleEscape(closeMenu);

  return (
    <motion.div
      ref={menuRef}
      className={`${className}`}
      animate={showMenu ? 'open' : 'closed'}
    >
      {componentTrigger}
      <motion.div
        className={`${className}__overlay`}
        initial={initial}
        exit={exit}
        variants={menuAnimation}
      >
        <motion.div className={`${className}__content`}>
          {showMenu && children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
