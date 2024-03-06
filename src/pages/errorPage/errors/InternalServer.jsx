import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';

import { BackgroundImage } from '../../../components/UI/image/BackgroundImage';
import Contact from '../../../features/contact/Contact';
import Button from '../../../components/UI/button/Button';

import Batman from '../../../assets/images/error/500_1.png';
import Bats from '../../../assets/images/error/500_2.png';

const InternalServer = ({ code, message }) => {
  useDocumentTitle('Error 500 (Internal Server Error)');

  return (
    <div className={`${code}`}>
      <div className='error__images stack'>
        <BackgroundImage
          url={Batman}
          zIndex={1}
          gradient={{
            type: 'linear',
            direction: '180deg',
            transparentPosition: '0%',
            bgPosition: '83%',
          }}
        />
        <BackgroundImage
          url={Bats}
          zIndex={0}
          backgroundSize='auto'
          backgroundPosition='50%'
        />
      </div>
      <div className='error__container'>
        <div className='error__title'>
          <h3>Oops! Something went wrong...</h3>
        </div>
        <span>
          Error: <code>"{message}"</code>
        </span>
        <span>
          If the issue persists, please let me know via the &nbsp;
          <Contact btnText='contact form' />.
        </span>

        <Button variant='primary'>
          <Link to='/'>Back to home page</Link>
        </Button>
      </div>
    </div>
  );
};

export default InternalServer;
