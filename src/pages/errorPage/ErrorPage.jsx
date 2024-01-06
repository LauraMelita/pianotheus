import React from 'react';

import Forbidden from './errors/Forbidden';
import NotFound from './errors/NotFound';
import InternalServer from './errors/InternalServer';

import './ErrorPage.scss';

const ErrorPage = ({ code, message }) => {
  const renderError = () => {
    switch (code) {
      case '403':
        return <Forbidden code={code} />;
      case '404':
        return <NotFound code={code} />;
      case '500':
        return <InternalServer code={code} message={message} />;
      default:
        return null;
    }
  };

  return <main className='error'>{renderError()}</main>;
};

export default ErrorPage;
