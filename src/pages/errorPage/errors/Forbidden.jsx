import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';

import { BackgroundImage } from '../../../components/UI/image/BackgroundImage';
import Quote from '../../../components/UI/quote/Quote';
import Button from '../../../components/UI/button/Button';

import Gandalf from '../../../assets/images/error/403_1.png';
import Embers from '../../../assets/images/error/403_2.png';

const Forbidden = ({ code }) => {
  useDocumentTitle('Error 403 (Forbidden)');

  return (
    <div className={code}>
      <div className='error__images stack'>
        <BackgroundImage
          url={Gandalf}
          zIndex={1}
          gradient={{
            type: 'linear',
            direction: '180deg',
            transparentPosition: '45%',
            bgPosition: '100%',
          }}
        />

        <BackgroundImage
          url={Embers}
          zIndex={0}
          gradient={{
            type: 'radial',
            shape: 'circle',
            transparentPosition: '45%',
            bgPosition: '63%',
          }}
        />
      </div>
      <div className='error__container'>
        <Quote
          text={`You shall not pass!`}
          author='Gandalf'
          source='Lord of the Rings: The Fellowship of the Ring (2001)'
        />
        <span>Sorry, you do not have access to this page or resource.</span>
        <Button variant='primary'>
          <Link to='/sign-in'>Log in</Link>
        </Button>
      </div>
    </div>
  );
};

export default Forbidden;
