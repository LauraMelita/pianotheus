import React from 'react';
import { v4 as createId } from 'uuid';

import Movie from './Movie';

import './../styles/components/ComposerWorksList.scss';

const ComposerWorksList = ({ data }) => {
  return (
    <div className='composer-works'>
      {data.map(({ movie, year, tracks }) => (
        <Movie key={createId()} movie={movie} year={year} tracks={tracks} />
      ))}
    </div>
  );
};

export default ComposerWorksList;
