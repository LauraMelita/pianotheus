import React, { useContext } from 'react';

import { TVShowsContext } from '../context/TVShowsContext';

import TitlesList from '../components/TitlesList';

const TVShowsCollection = () => {
  const { data, isLoading, error } = useContext(TVShowsContext);

  return (
    <main>
      <div
        className='tvShows-collection'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isLoading && <h3>Loading...</h3>}
        {!isLoading && !error && <TitlesList data={data} />}
        {error && <h3>{error}</h3>}
      </div>
    </main>
  );
};

export default TVShowsCollection;
