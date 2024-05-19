import React from 'react';

import './Lifespan.scss';

const Lifespan = ({ birth, birthPlace, death, placeOfDeath, ageAtDeath }) => {
  return (
    <div className='lifespan'>
      <div className='birth'>
        <span>Born</span>
        <ul>
          <li>{birth}</li>
          <li>{birthPlace}</li>
        </ul>
      </div>

      <div className='death'>
        <span>Died</span>
        <ul>
          <li>{`${death} (aged ${ageAtDeath})`}</li>
          <li>{placeOfDeath}</li>
        </ul>
      </div>
    </div>
  );
};

export default Lifespan;
