import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
