import React from 'react';
import { motion } from 'framer-motion';

import Button from '../../../../UI/button/Button';

const SidebarMenuButton = ({ onClick }) => {
  return (
    <Button className='sidebar__toggle-btn' variant='icon' onClick={onClick}>
      <svg viewBox='0 0 20 20'>
        <motion.path
          strokeWidth='2'
          stroke='currentColor'
          strokeLinecap='round'
          variants={{
            open: { d: 'M 3 16.5 L 17 2.5' },
            closed: { d: 'M 2 2.5 L 20 2.5' },
          }}
        />
        <motion.path
          strokeWidth='2'
          stroke='currentColor'
          strokeLinecap='round'
          d='M 2 9.423 L 20 9.423'
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
        />
        <motion.path
          strokeWidth='2'
          stroke='currentColor'
          strokeLinecap='round'
          variants={{
            open: { d: 'M 3 2.5 L 17 16.346' },
            closed: { d: 'M 2 16.346 L 20 16.346' },
          }}
        />
      </svg>
    </Button>
  );
};

export default SidebarMenuButton;
