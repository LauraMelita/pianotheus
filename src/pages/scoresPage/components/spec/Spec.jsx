import React from 'react';

import Separator from '../../../../components/UI/separator/Separator';

import './Spec.scss';

const Spec = ({ items }) => {
  const lastItem = items.length - 1;

  return (
    <ul className='spec'>
      {items.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          {index !== lastItem && (
            <Separator type='border' orientation='vertical' />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Spec;
