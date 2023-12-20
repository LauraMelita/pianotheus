import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

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
