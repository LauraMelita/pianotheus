import React from 'react';

import InfoPopup from '../../../../../../features/infoPopup/InfoPopup';

const ScoreStatus = ({ isUpcoming, isUnavailable }) => {
  if (isUpcoming)
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

  if (isUnavailable)
    return (
      <InfoPopup className='score__status' title='Unavailable'>
        <p>
          Unfortunately, this file is unavailable
          <br />
          and might not be added in the future.
          <br />
          Please explore our other resources.
        </p>
      </InfoPopup>
    );
};

export default ScoreStatus;
