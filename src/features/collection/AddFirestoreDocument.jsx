import React from 'react';

import { useCreateDocument } from '../../services/reactQuery/queries';

import Button from '../../components/UI/button/Button';

const AddFirestoreDocument = () => {
  const { mutate: createDocument, isLoading: isCreatingDocument } =
    useCreateDocument(); // pass collection to the hook

  const handleClick = (e) => {
    e.preventDefault();
    createDocument({}); // pass document to the function
  };

  return (
    <div>
      {isCreatingDocument && <p>...Loading...</p>}
      <Button onClick={handleClick}>Add Document</Button>
    </div>
  );
};

export default AddFirestoreDocument;
