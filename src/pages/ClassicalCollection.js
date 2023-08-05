import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { ClassicalContext } from '../context/ClassicalContext';

import ComposersList from '../components/ComposersList';

const ClassicalCollection = () => {
  const { data, isLoading, error } = useContext(ClassicalContext);

  return (
    <motion.div
      className='classical-collection'
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
    >
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && !error && <ComposersList data={data} />}
      {error && <h3>{error}</h3>}
    </motion.div>
  );
};

export default ClassicalCollection;
