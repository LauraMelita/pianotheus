import React from 'react';

import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddFirestoreDocument = () => {
  const collectionRef = collection(db, 'movies');

  const document = {};

  const addDocumentToFirebase = async () => {
    try {
      await addDoc(collectionRef, document);
      alert('document successfully uploaded');
    } catch (error) {
      console.error(`An error occured: ${error}`);
    }
  };

  return (
    <div>
      <button onClick={addDocumentToFirebase}>Add Document</button>
    </div>
  );
};

export default AddFirestoreDocument;
