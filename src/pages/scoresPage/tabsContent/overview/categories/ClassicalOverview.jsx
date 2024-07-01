import React from 'react';

import Description from '../../../components/description/Description';
import DidYouKnow from '../../../components/didYouKnow/DidYouKnow';

const ClassicalOverview = ({ data }) => {
  return (
    <div className='overview'>
      <Description text={data.bio} maxWords={150} header='Biography' />
      <DidYouKnow trivia={data.trivia} />
    </div>
  );
};

export default ClassicalOverview;
