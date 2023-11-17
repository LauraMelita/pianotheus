import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to='/'>Back to Home</Link>
    </main>
  );
};

export default PageNotFound;
