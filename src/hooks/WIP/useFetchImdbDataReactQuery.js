import { useQuery } from '@tanstack/react-query';
import { IMDB_URL } from '../../lib/config';

const useFetchImdbDataReactQuery = (title, releaseYear) => {
  const { data: id } = useQuery({
    queryKey: ['id', title, releaseYear],
    queryFn: async () => {
      const response = await fetch(
        `${IMDB_URL}/search?query=${title} ${releaseYear}`
      );
      if (!response.ok) {
        throw new Error('Could not fetch ID');
      }
      return response.json();
    },
  });

  const imdbId = id?.results[0].id;

  return useQuery({
    queryKey: [imdbId],
    queryFn: async () => {
      const response = await fetch(`${IMDB_URL}/title/${imdbId}`);
      if (!response.ok) {
        throw new Error('Could not fetch IMDB data by ID');
      }
      return response.json();
    },
    enabled: !!imdbId,
  });
};

export default useFetchImdbDataReactQuery;
