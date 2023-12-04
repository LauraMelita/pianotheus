import { useContext } from 'react';

import { MoviesContext } from '../context/MoviesContext';

import TitlesList from '../components/TitlesList';
import Spinner from '../components/UI/spinner/Spinner';

const MoviesCollection = () => {
  const { data, isLoading, error } = useContext(MoviesContext);

  return (
    <main>
      <div
        className='movies-collection'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isLoading && <Spinner />}
        {!isLoading && !error && <TitlesList data={data} />}
        {error && <h3>{error}</h3>}
      </div>
    </main>
  );
};

export default MoviesCollection;
