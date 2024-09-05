import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { useAnimations } from '../../hooks/useAnimations';

import './Skeleton.scss';

const Skeleton = ({ className, children }) => {
  return <div className={classNames(className, 'skeleton')}>{children}</div>;
};

const SkeletonItem = ({ className }) => {
  const { pulsate } = useAnimations();

  return (
    <motion.div
      className={classNames(className, 'skeleton__item')}
      animate={pulsate}
    />
  );
};

export { Skeleton, SkeletonItem };
