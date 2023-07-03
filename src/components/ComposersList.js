import React from 'react';

import Card from './Card.js';

import './../styles/components/ComposersList.scss';

const ComposersList = (props) => {
  return (
    <div className='composers-container'>
      <ul className='composers'>
        {props.data.map(({ id, composerName, path, profilePicture }) => (
          <li className='composer' key={id}>
            <Card
              feature={composerName}
              path={`/${props.musicGenre}/composers/${path}`}
              image={profilePicture}
            />
            <span className='name'>{composerName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComposersList;
