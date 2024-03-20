import React from 'react';

import Image from '../../../../components/UI/image/Image';
import Button from '../../../../components/UI/button/Button';

const Esrb = ({ rating, descriptor }) => {
  const esrbMap = {
    Everyone: 'https://www.esrb.org/wp-content/uploads/2019/05/E.svg',
    'Everyone 10+':
      'https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg',
    Teen: 'https://www.esrb.org/wp-content/uploads/2019/05/T.svg',
    'Mature 17+': 'https://www.esrb.org/wp-content/uploads/2019/05/M.svg',
    'Adults Only 18+': 'https://www.esrb.org/wp-content/uploads/2019/05/AO.svg',
  };

  return (
    <div
      className='esrb'
      style={{ display: 'flex', gap: 'calc(var(--global-gap) / 2)' }}
    >
      <Button
        href='https://www.esrb.org/ratings-guide/'
        target='_blank'
        rel='noreferrer'
      >
        <Image src={esrbMap[rating]} alt='esrb' />
      </Button>

      <div>
        <span>{rating}</span>
        <br />
        <span>{descriptor}</span>
      </div>
    </div>
  );
};

export default Esrb;
