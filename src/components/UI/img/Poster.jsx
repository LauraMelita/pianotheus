import React from 'react';

const Poster = ({ img, title }) => {
  return (
    <div className='poster'>
      <img src={img} alt={`${title} poster`} />
    </div>
  );
};

export default Poster;
