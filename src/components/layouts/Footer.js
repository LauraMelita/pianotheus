import React from 'react';

import { useModal } from '../../hooks/useModal';

import Modal from '../UI/Modal';

import './Footer.scss';

const Footer = () => {
  const { isOpen, toggle } = useModal();

  return (
    <footer>
      <button onClick={toggle}>Contact</button>
      <Modal isOpen={isOpen} close={toggle}>
        <form />
      </Modal>
    </footer>
  );
};

export default Footer;
