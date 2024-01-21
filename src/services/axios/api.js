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

export const getRawgData = async (rawgId) => {
  const URL = `${API.RAWG}/games/${rawgId}?key=${process.env.REACT_APP_RAWG_API_KEY}`;

  try {
    const { data } = await axios.get(URL);

    if (!data) throw Error;

    return data;
  } catch (error) {
    throw new Error(`RAWG error: ${error.message}`);
  }
};
