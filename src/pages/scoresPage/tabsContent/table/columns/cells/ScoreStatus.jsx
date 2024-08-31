import React from 'react';

import InfoPopup from '../../../../../../features/infoPopup/InfoPopup';

const ScoreStatus = ({ status }) => {
  if (status === 'unavailable')
    return <span className='score__status'>---</span>;

  if (status === 'upcoming')
    return (
      <InfoPopup className='score__status' title='Coming Soon'>
        <p>
          Hang tight!
          <br />
          This score is currently being transcribed,
          <br />
          and will be available soon.
        </p>
      </InfoPopup>
    );
};

export default ScoreStatus;
