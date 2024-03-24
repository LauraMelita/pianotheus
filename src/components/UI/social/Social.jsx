import React from 'react';

import Button from '../button/Button';
import Svg from '../svg/Svg';

const Social = () => {
  return (
    <div className='social'>
      <Button
        variant='icon'
        href='https://github.com/LauraMelita'
        target='_blank'
        rel='noreferrer'
      >
        <Svg icon='github' />
      </Button>

      <Button
        variant='icon'
        href='https://www.linkedin.com/in/laura-melita-a30086104'
        target='_blank'
        rel='noreferrer'
      >
        <Svg icon='linkedin' />
      </Button>
    </div>
  );
};

export default Social;
