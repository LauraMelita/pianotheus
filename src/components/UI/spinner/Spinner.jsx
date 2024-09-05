import React from 'react';
import classNames from 'classnames';

import './Spinner.scss';

const Spinner = ({ type }) => {
  return <span className={classNames('spinner', type)} />;
};

export default Spinner;
