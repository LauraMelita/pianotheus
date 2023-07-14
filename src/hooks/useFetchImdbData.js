import { useState, useEffect } from 'react';

import { IMDB_URL, THEMOVIEDB_URL } from '../utils/config';

const useFetchImdbData = (movieTitle, releaseYear) => {
  const [imdbData, setImdbData] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
        if (!responseOne.ok) throw new Error('Could not fetch IMDB ID');
        const idData = await responseOne.json();
        const id = idData.results[0].id;

        if (!id) return;

        const responseTwo = await fetch(`${IMDB_URL}/title/${id}`);
        if (!responseTwo.ok) throw new Error('Could not fetch IMDB data');
        const movieData = await responseTwo.json();
        setImdbData(movieData);

        const responseThree = await fetch(
          `${THEMOVIEDB_URL}/3/movie/${id}/videos?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`
        );
        if (!responseThree.ok) throw new Error('Could not fetch trailer key');
        const trailerData = await responseThree.json();
        const trailer = trailerData.results[0]?.key;
        setTrailer(`https://www.youtube.com/embed/${trailer}`);
      } catch (error) {
        if (error.name === 'AbortError') {
          // set error
        } else {
          console.error(error);
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

  return [imdbData, trailer, isLoading];
};

export default useFetchImdbData;
