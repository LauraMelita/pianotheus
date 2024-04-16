import React from 'react';

import {
  Title,
  Composer,
  Era,
  Birth,
  Death,
  Trivia,
} from '../elements/Details';

import ReadMore from '../../../../features/readMore/ReadMore';

const Classical = ({ data }) => {
  return (
    <>
      <Composer
        composer={data.composer}
        composerImg={data.composerImg}
        scores={data.scores}
      />
      <Title title={data.composer} />
      <Era era={data.era} />
      <Birth date={data.birth.date} place={data.birth.place} />
      <Death
        date={data.death.date}
        place={data.death.place}
        age={data.death.age}
      />
      <ReadMore text={data.bio} />
      <Trivia trivia={data.trivia} />
    </>
  );
};

export default Classical;
