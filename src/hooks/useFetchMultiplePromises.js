import { useState, useEffect } from 'react';

export const useFetchMultiplePromises = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError('');

        const firebaseResponse = await fetch(
          `https://pianotheus-bf5f0-default-rtdb.firebaseio.com/tv-shows.json`,
          { signal: controller.signal }
        );

        if (!firebaseResponse.ok)
          throw new Error(`Couldn't fetch data from firebase`);

        const firebaseData = await firebaseResponse.json();

        const allDataPromiseArr = firebaseData.data.map(async (element) => {
          const omdbResponse = await fetch(
            `http://www.omdbapi.com/?apikey=ea2ed201&i=${element.imdbId}`
          );

          const omdbData = await omdbResponse.json();

          if (omdbData.Response === 'False')
            throw new Error('Could not fetch movie data.');

          const trailerResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${element.imdbId}/videos?api_key=2e59fa524437c2b88ec66c318f0c942f`
          );

          const trailerData = await trailerResponse.json();

          return {
            ...element,
            actors: omdbData.Actors,
            awards: omdbData.Awards,
            country: omdbData.Country,
            director: omdbData.Director,
            genre: omdbData.Genre,
            language: omdbData.Language,
            plot: omdbData.Plot,
            Poster: omdbData.Poster,
            rated: omdbData.Rated,
            ratings: omdbData.Ratings,
            released: omdbData.Released,
            runtime: omdbData.Runtime,
            writer: omdbData.Writer,
            year: omdbData.Year,
            imdbRating: omdbData.imdbRating,
            imdbVotes: omdbData.imdbVotes,
            totalSeasons: omdbData.totalSeasons,
          };
        });

        const allData = await Promise.all(allDataPromiseArr);

        setData(allData);
        setError('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, error };
};
