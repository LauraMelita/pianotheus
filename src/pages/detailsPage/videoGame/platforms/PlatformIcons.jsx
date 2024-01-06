import React from 'react';

import Svg from '../../../../components/UI/svg/Svg';

import './PlatformIcons.scss';

const Platforms = ({ platformIcons }) => {
  return (
    <ul className='platform-icons'>
      {platformIcons?.map((icon, index) => (
        <Svg key={index} icon={icon} />
      ))}
    </ul>
  );
};

export default Platforms;
