import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage';

import { storage } from '../lib/firebase';

const useFetchFile = (artWorkTitle, fileExtension, fileTitle) => {
  const [files, setFiles] = useState([]);
  const { pathname } = useLocation();

  const folderPath = `${pathname
    .slice(1)
    .replace('-', ' ')}/${artWorkTitle.toLowerCase()}`;

  const storageRef = ref(storage, folderPath);

  useEffect(() => {
    const getFilesFromFirebaseStorage = async () => {
      const response = await listAll(storageRef);

      response.items.forEach(async (file) => {
        const url = await getDownloadURL(file);
        const metaData = await getMetadata(file);

        setFiles((prevFile) => [
          ...prevFile,
          {
            name: metaData.name,
            url: url,
          },
        ]);
      });
    };

    getFilesFromFirebaseStorage();
  }, []);

  if (!files || (Array.isArray(files) && files.length === 0)) return;

  const file = files.find(
    (file) => file.name === `${fileTitle}${fileExtension}`
  );

  return file;
};

export default useFetchFile;
