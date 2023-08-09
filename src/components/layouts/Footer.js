import React from 'react';

import { useModal } from '../../hooks/useModal';

import Modal from '../UI/Modal';
import ContactForm from '../../features/contact/ContactForm';

import './Footer.scss';

const Footer = () => {
  const { isOpen, toggle } = useModal();

  return (
    <footer>
      <button onClick={toggle}>Contact</button>
      <Modal
        isOpen={isOpen}
        title='Contact'
        btnConfirm='Confirm'
        btnClose='Cancel'
        closeModal={toggle}
      >
        <ContactForm closeModal={toggle} />
      </Modal>
    </footer>
  );
};

export default Footer;
