import React from 'react';

import './Spinner.scss';

const Spinner = ({ type }) => {
  return <span className={`spinner ${type}`} />;
};

export default Spinner;
