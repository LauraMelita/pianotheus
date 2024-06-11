import React from 'react';

import InfoPopup from '../../../../../../features/infoPopup/InfoPopup';

const ScoreStatus = ({ isUpcoming, isUnavailable }) => {
  if (isUnavailable) return <span className='score__status'>---</span>;

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
};

export default ScoreStatus;
