import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

import './Instruction.scss';

const ActionButton = ({ isHashLink, linkTitle, path }) => {
  return isHashLink ? (
    <Button variant='link'>
      <HashLink smooth to={path} className='btn__link'>
        {linkTitle}
        <Svg icon='arrow-right-up' />
      </HashLink>
    </Button>
  ) : (
    <Button variant='link' href={path} target='_blank' rel='noreferrer'>
      {linkTitle}
      <Svg icon='arrow-right-up' />
    </Button>
  );
};

const Instruction = ({ title, instruction, link }) => {
  return (
    <div className='instruction'>
      <span>{title}</span>
      <p>{instruction}</p>
      {link && (
        <ActionButton
          isHashLink={link.isHashLink}
          linkTitle={link.title}
          path={link.path}
        />
      )}
    </div>
  );
};

export default Instruction;
