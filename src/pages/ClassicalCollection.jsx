import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { ClassicalContext } from '../context/ClassicalContext';

import Spinner from '../components/UI/spinner/Spinner';
import ComposersList from '../components/ComposersList';

const ClassicalCollection = () => {
  const { data, isLoading, error } = useContext(ClassicalContext);

  return (
    <main>
      <div className='classical-collection'>
        {isLoading && <Spinner />}
        {!isLoading && !error && <ComposersList data={data} />}
        {error && <h3>{error}</h3>}
      </div>
    </main>
  );
};

export default ClassicalCollection;
