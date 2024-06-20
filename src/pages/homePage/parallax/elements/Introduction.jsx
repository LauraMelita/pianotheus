import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Button from '../../../../components/UI/button/Button';

const Introduction = () => {
  return (
    <div className='parallax__introduction'>
      <div>
        <h1 className='heading'>Play the Piano, Your Way</h1>

        <h4>
          Welcome to Pianotheus, your go-to platform for unlocking a world of
          piano melodies without the need for traditional sheet music
        </h4>
        <Button variant='primary'>
          <HashLink smooth to='/#user-guide'>
            Get Started
          </HashLink>
        </Button>
      </div>
    </div>
  );
};

export default Introduction;
