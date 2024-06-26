import React from 'react';

import { useResponsive } from '../../../../hooks/useResponsive';

import CircularProgressBar from '../../../../components/UI/progressBar/CircularProgressBar';

import './Rating.scss';

const Rating = ({ source, value, maxValue }) => {
  const { isDesktop, isLaptop } = useResponsive();

  return (
    <div className='rating'>
      <span className='rating__source'>{source}</span>
      <CircularProgressBar
        value={value}
        maxValue={maxValue}
        width={isDesktop || isLaptop ? 65 : 50}
        height={isDesktop || isLaptop ? 65 : 50}
      />
    </div>
  );
};

export default Rating;
