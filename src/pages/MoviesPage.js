import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MoviesPage = () => {
  const navigate = useNavigate();

  const goToHomePageHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Link to='/movies/composers'>
        <h1>Search by composer</h1>
      </Link>
      <Link to='/movies/search'>
        <h1>Search by title</h1>
      </Link>
      <button onClick={goToHomePageHandler}>Back to Home</button>
    </>
  );
};

export default MoviesPage;
