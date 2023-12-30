import React, { useState, useEffect } from 'react';

import './CircularProgressBar.scss';

const CircularProgressBar = ({
  value,
  maxValue,
  speed = 20,
  incrementBy = 2,
  width = 80,
  height = 80,
  progressFillColor = 'var(--accent-color-100)',
  progressBgColor = 'var(--gray-200)',
}) => {
  const [filled, setFilled] = useState(0);

  const ONE_PERCENT = 3.6; // 360 / 100 = 3.6 => 3.6deg = 1%
  const percentage = (value / maxValue) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filled < percentage)
        setFilled((prevState) => (prevState += incrementBy));
    }, speed);

    return () => clearTimeout(timer);
  }, [filled, percentage, incrementBy, speed]);

  return (
    <div
      className='progress-bar'
      style={{
        height: height,
        width: width,
        background: `conic-gradient(${progressFillColor} ${
          filled * ONE_PERCENT
        }deg, ${progressBgColor} ${filled * ONE_PERCENT}deg)`,
      }}
    >
      <div className='progress-bar__value'>{`${filled}%`}</div>
    </div>
  );
};

export default CircularProgressBar;
