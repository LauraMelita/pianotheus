import React from 'react';

import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

import Button from '../../components/UI/button/Button';

const AddFirestoreDocument = () => {
  const collectionRef = collection(db, 'movies');

  const document = {};

  const addDocumentToFirebase = async () => {
    try {
      await addDoc(collectionRef, document);
      alert('document successfully uploaded');
    } catch (error) {
      console.error(`An error has occurred: ${error}`);
    }
  };

  return (
    <div>
      <Button onClick={addDocumentToFirebase}>Add Document</Button>
    </div>
  );
};

export default AddFirestoreDocument;
