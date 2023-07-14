import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IMDB_URL, THEMOVIEDB_URL } from '../utils/config';

const fetchImdbId = (movie, year) => {
  return axios.get(`${IMDB_URL}/search?query=${movie} ${year}`);
};

const fetchImdbData = (id) => {
  return axios.get(`${IMDB_URL}/title/${id}`);
};

const useFetchImdbDataUseQuery = (movie, year) => {
  const { data: id } = useQuery(['imdbId', movie, year], () =>
    fetchImdbId(movie, year)
  );

  const imdbId = id?.data.results[0].id;

  const { data, isLoading, fetchStatus } = useQuery(
    ['imdbData', imdbId],
    () => fetchImdbData(imdbId),
    {
      enabled: !!imdbId,
    }
  );

  const imdbData = data?.data;

  return imdbData;
};

export default useFetchImdbDataUseQuery;
