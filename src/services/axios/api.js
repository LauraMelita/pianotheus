import axios from 'axios';

import { API } from '../../utils/constants';

export const getImdbData = async (imdbId) => {
  const URL = `${API.OMDB}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbId}`;
  try {
    const { data } = await axios.get(URL);

    if (!data) throw Error;

    return data;
  } catch (error) {
    throw new Error(`OMDb error: ${error.message}`);
  }
};

export const getRawgData = async (rawgId, slug) => {
  const DATA_URL = `${API.RAWG}/games/${rawgId}?key=${process.env.REACT_APP_RAWG_API_KEY}`;

  const SCREENSHOTS_URL = `${API.RAWG}/games/${slug}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`;

  try {
    const data = Promise.all([
      await axios.get(DATA_URL),
      await axios.get(SCREENSHOTS_URL),
    ]);

    if (!data) throw Error;

    return data;
  } catch (error) {
    throw new Error(`RAWG error: ${error.message}`);
  }
};
