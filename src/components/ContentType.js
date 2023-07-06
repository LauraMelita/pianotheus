import React from 'react';

import CardCharacterPopOut from './CardCharacterPopOut';
import { MUSIC_GENRES } from '../lib/config';

import './../styles/components/ContentType.scss';

const ContentType = () => {
  return (
    <div className='content-types-container'>
      <div className='content-types'>
        {MUSIC_GENRES.map(
          ({ genre, path, backgroundImage, popOutImage }, index) => (
            <div className='type' key={index}>
              <CardCharacterPopOut
                contentType={genre}
                path={path}
                backgroundImage={backgroundImage}
                popOutImage={popOutImage}
              />
              <span>{genre}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ContentType;
