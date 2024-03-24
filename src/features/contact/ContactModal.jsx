import React from 'react';

import { useModal } from '../../hooks/useModal';

import Modal from '../../components/UI/modal/Modal';
import ContactButton from './button/ContactButton';
import ContactForm from './form/ContactForm';

import './ContactModal.scss';

const ContactModal = ({ btnText }) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <Modal
      className='contact'
      open={isOpen}
      onOpenChange={toggleModal}
      triggerComponent={<ContactButton btnText={btnText} />}
    >
      <ContactForm toggleModal={toggleModal} />
    </Modal>
  );
};

export default ContactModal;
