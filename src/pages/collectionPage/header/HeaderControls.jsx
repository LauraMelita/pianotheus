import React from 'react';

import { useCollectionContext } from '../../../context/CollectionContext';

import './HeaderControls.scss';

const HeaderControls = ({ children }) => {
  const { title: collectionTitle } = useCollectionContext();

  return (
    <div className='collection__header full-width'>
      <header>
        <h2 className='header gradient-text'>{collectionTitle}</h2>
        <div className='search__controls'>{children}</div>
      </header>
    </div>
  );
};

export default HeaderControls;
