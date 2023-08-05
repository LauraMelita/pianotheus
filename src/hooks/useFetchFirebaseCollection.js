import { useState, useEffect } from 'react';

import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const useFetchFirebaseCollection = (
  collectionName,
  orderCollectionBy
) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    let isMounted = true;

    const fetchCollection = async () => {
      try {
        setIsLoading(true);
        setError('');
        const collecionQuery = query(
          collectionRef,
          orderBy(orderCollectionBy, 'asc')
        );
        const data = await getDocs(collecionQuery);

        const documents = data.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }));
        if (isMounted) setData(documents);
      } catch (error) {
        setError(error);
        console.error(
          `Error retrieving ${collectionName} collection: ${error}`
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollection();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading, error };
};
