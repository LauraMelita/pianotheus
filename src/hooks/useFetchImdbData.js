import { useState, useEffect } from 'react';

import { IMDB_URL } from '../lib/config';

const useFetchImdbData = (movieTitle, releaseYear) => {
  const [imdbData, setImdbData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchImdbData = async () => {
      setIsLoading(true);

      try {
        const responseOne = await fetch(
          `${IMDB_URL}/search?query=${movieTitle} ${releaseYear}`,
          { signal }
        );
        if (!responseOne.ok) {
          throw new Error('Could not fetch IMDB ID');
        }
        const dataOne = await responseOne.json();
        const id = dataOne.results[0].id;

        if (!id) return;

        const responseTwo = await fetch(`${IMDB_URL}/title/${id}`);

        if (!responseTwo.ok) {
          throw new Error('Could not fetch IMDB data by ID');
        }
        const dataTwo = await responseTwo.json();

        setImdbData(dataTwo);
        setError(null);
      } catch (error) {
        if (error.name === 'AbortError') {
        } else {
          console.error(error);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchImdbData();

    return () => {
      controller.abort();
    };
  }, []);

  return [imdbData, isLoading, error];
};

export default useFetchImdbData;
