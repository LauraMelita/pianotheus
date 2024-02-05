import React from 'react';
import { motion } from 'framer-motion';
import { useClickOutside } from '@mantine/hooks';

import { useHideOverflow } from '../../../hooks/useHideOverflow';
import { useHandleEscape } from '../../../hooks/useHandleEscape';

import Portal from '../../../components/portal/Portal';

import './MobileMenu.scss';

const MobileMenu = ({
  className,
  isPortal = false,
  closeOnOutsideClick = false,
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

  const Content = () => {
    return (
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
    );
  };

  return (
    //prettier-ignore
    <motion.div
      ref={closeOnOutsideClick ? menuRef : null}
      className={`${className}`}
      animate={showMenu ? 'open' : 'closed'}
    >
      {componentTrigger}
      {isPortal ? <Portal><Content/></Portal> : <Content />}
    </motion.div>
  );
};

export default MobileMenu;
