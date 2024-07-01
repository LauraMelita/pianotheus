import React from 'react';

import Poster from '../../../components/poster/Poster';
import Title from '../../../components/title/Title';
import Era from '../../../components/era/Era';
import Lifespan from '../../../components/lifespan/Lifespan';

const ClassicalDetails = ({ data }) => {
  return (
    <div className='details'>
      <Poster className='details__poster' image={data.composerImg} />
      <div className='details__content'>
        <div>
          <div className='details__header'>
            <Title title={data.composer} />
            <Era era={data.era} />
            <Lifespan
              birth={data.birth.date}
              birthPlace={data.birth.place}
              death={data.death.date}
              placeOfDeath={data.death.place}
              ageAtDeath={data.death.age}
            />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default ClassicalDetails;
