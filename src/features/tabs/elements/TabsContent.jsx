import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useAnimations } from '../../../hooks/useAnimations';

const TabsContent = ({ currentTab }) => {
  const { fadeAndSlide } = useAnimations();

  return (
    <div className='tabs__content'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentTab.name} // The key is required for the animation
          variants={fadeAndSlide}
          initial='initial'
          animate='enter'
          exit='exit'
          transition={{
            duration: 0.3,
          }}
        >
          {currentTab && currentTab.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabsContent;
