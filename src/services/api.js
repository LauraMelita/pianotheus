import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import axios from 'axios';

import { db } from './firebase';
import { OMDB_URL, RAWG_URL } from '../utils/constants';

export const fetchCollection = async (collectionName, orderCollectionBy) => {
  try {
    const collectionRef = collection(db, collectionName);

    const collectionQuery = query(
      collectionRef,
      orderBy(orderCollectionBy, 'asc')
    );

    const data = await getDocs(collectionQuery);

    const documents = data.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));

    return documents;
  } catch (error) {
    throw new Error(`Firebase Error: ${error.message}`);
  }
};

export const fetchImdbData = async (imdbId) => {
  try {
    const { data } = await axios.get(
      `${OMDB_URL}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbId}`
    );

    return data;
  } catch (error) {
    throw new Error('OMDb data could not be fetched.');
  }
};

export const fetchRawgData = async (rawgId) => {
  try {
    const { data } = await axios.get(
      `${RAWG_URL}/games/${rawgId}?key=${process.env.REACT_APP_RAWG_API_KEY}`
    );

    return data;
  } catch (error) {
    throw new Error('Rawg data could not be fetched.');
  }
};
