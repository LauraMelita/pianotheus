import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import axios from 'axios';

import { db } from './firebase';
import { OMDB_API, RAWG_URL } from '../utils/constants';

export const fetchCollection = async (collectionName, orderCollectionBy) => {
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
};

export const fetchImdbData = async (imdbId) => {
  const { data } = await axios.get(
    `${OMDB_API}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbId}`
  );

  return data;
};

export const fetchRawgData = async (rawgId) => {
  const { data } = await axios.get(
    `${RAWG_URL}/games/${rawgId}?key=${process.env.REACT_APP_RAWG_API_KEY}`
  );

  return data;
};
