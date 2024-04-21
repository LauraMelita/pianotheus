import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useAnimations } from '../../../hooks/useAnimations';

import Portal from '../../../components/portal/Portal';

const AnimatedTabContent = ({ currentTab, fadeAndSlide }) => (
  <div className='tabs__content'>
    <AnimatePresence mode='wait'>
      <motion.div
        key={currentTab.name}
        variants={fadeAndSlide}
        initial='initial'
        animate='enter'
        exit='exit'
        transition={{ duration: 0.3 }}
      >
        {currentTab && currentTab.content}
      </motion.div>
    </AnimatePresence>
  </div>
);

const TabsContent = ({ currentTab, isPortal, portalId }) => {
  const { fadeAndSlide } = useAnimations();

  return isPortal ? (
    <Portal portalId={portalId}>
      <AnimatedTabContent currentTab={currentTab} fadeAndSlide={fadeAndSlide} />
    </Portal>
  ) : (
    <AnimatedTabContent currentTab={currentTab} fadeAndSlide={fadeAndSlide} />
  );
};

export default TabsContent;
