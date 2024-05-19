import React from 'react';

import Button from '../../../../components/UI/button/Button';
import Image from '../../../../components/UI/image/Image';

import './Esrb.scss';

const Esrb = ({ rating, descriptor, icon }) => {
  return (
    <div className='esrb'>
      <Button
        href='https://www.esrb.org/ratings-guide/'
        target='_blank'
        rel='noreferrer'
      >
        <Image src={icon} alt={`esrb ${rating}`} />
      </Button>
      <div>
        <span className='esrb__rating'>{rating}</span>
        <span className='esrb__descriptor'>{descriptor}</span>
      </div>
    </div>
  );
};

export default Esrb;
