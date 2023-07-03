import React, { useState, useEffect } from 'react';
import { storage } from '../lib/firebase';

import { useLocation } from 'react-router-dom';
import { ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage';

import Icons from './../assets/icons.svg';

const MidiDownload = ({ movie, title }) => {
  const [midiFiles, setMidiFiles] = useState([]);
  const { pathname } = useLocation();

  const folderPath = `${pathname
    .slice(1)
    .replace('-', ' ')}/${movie.toLowerCase()}`;

  const storageRef = ref(storage, folderPath);

  useEffect(() => {
    const getMidiFromFirebaseStorage = async () => {
      const response = await listAll(storageRef);

      response.items.forEach(async (midiFile) => {
        const url = await getDownloadURL(midiFile);
        const metaData = await getMetadata(midiFile);

        setMidiFiles((prevFile) => [
          ...prevFile,
          {
            name: metaData.name,
            url: url,
          },
        ]);
      });
    };

    getMidiFromFirebaseStorage();
  }, []);

  if (!midiFiles || (Array.isArray(midiFiles) && midiFiles.length === 0))
    return;

  const filteredMidiFile = midiFiles.find(
    (file) => file.name === `${title}.mid`
  );

  return (
    <>
      <a href={filteredMidiFile?.url} download>
        <svg>
          <use href={`${Icons}#download-icon`} />
        </svg>
      </a>
    </>
  );
};

export default MidiDownload;
