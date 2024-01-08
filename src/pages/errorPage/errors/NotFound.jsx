import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';

import BackgroundImage from '../../../components/UI/image/BackgroundImage';
import Quote from '../../../components/UI/quote/Quote';
import Button from '../../../components/UI/button/Button';

import Wall from '../../../assets/images/error/404.jpg';

const NotFound = ({ code }) => {
  useDocumentTitle('Error 404 (Not Found)');

  return (
    <div className={`${code}`}>
      <div className='error__images stack'>
        <BackgroundImage
          gradient={{
            type: 'radial',
            shape: 'circle',
            transparentPosition: '48%',
            bgPosition: '70%',
          }}
          url={Wall}
          backgroundSize='contain'
          backgroundPosition='center'
        />
      </div>

      <div className='error__container'>
        <Quote
          text={`Lord! It's a miracle! <br /> Webpage up and vanished like a fart in the wind!`}
          author='Warden Norton'
          source='The Shawshank Redemption (1994)'
        />
        <span className='error__message'>
          It looks like the page doesn't exist. Please check the URL and try
          again.
        </span>
        <Button variant='default'>
          <Link to='/'>Back to home page</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
