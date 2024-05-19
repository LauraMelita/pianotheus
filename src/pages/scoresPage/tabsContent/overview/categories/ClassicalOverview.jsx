import React from 'react';

import Description from '../../../components/description/Description';

const ClassicalOverview = ({ data }) => {
  return (
    <div className='overview'>
      <Description text={data.bio} header='Biography' />
    </div>
  );
};

export default ClassicalOverview;
