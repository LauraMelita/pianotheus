import React from 'react';

import Svg from '../../../../components/UI/svg/Svg';

import './PlatformIcons.scss';

const PlatformIcons = ({ icons }) => {
  return (
    <ul className='platform-icons'>
      {icons?.map((icon, index) => (
        <Svg key={index} icon={icon} />
      ))}
    </ul>
  );
};

export default PlatformIcons;
